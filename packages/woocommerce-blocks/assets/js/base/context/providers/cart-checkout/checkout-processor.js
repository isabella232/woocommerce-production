/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import triggerFetch from '@wordpress/api-fetch';
import {
	useEffect,
	useRef,
	useCallback,
	useState,
	useMemo,
} from '@wordpress/element';
import {
	emptyHiddenAddressFields,
	formatStoreApiErrorMessage,
} from '@woocommerce/base-utils';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { preparePaymentData, processCheckoutResponseHeaders } from './utils';
import { useCheckoutContext } from './checkout-state';
import { useShippingDataContext } from './shipping';
import { useCustomerDataContext } from './customer';
import { usePaymentMethodDataContext } from './payment-methods';
import { useValidationContext } from '../validation';
import { useStoreCart } from '../../hooks/cart/use-store-cart';
import { useStoreNoticesContext } from '../store-notices';
/**
 * CheckoutProcessor component.
 *
 * Subscribes to checkout context and triggers processing via the API.
 */
const CheckoutProcessor = () => {
	const {
		hasError: checkoutHasError,
		onCheckoutValidationBeforeProcessing,
		dispatchActions,
		redirectUrl,
		isProcessing: checkoutIsProcessing,
		isBeforeProcessing: checkoutIsBeforeProcessing,
		isComplete: checkoutIsComplete,
		orderNotes,
		shouldCreateAccount,
		extensionData,
	} = useCheckoutContext();
	const { hasValidationErrors } = useValidationContext();
	const { shippingErrorStatus } = useShippingDataContext();
	const { billingData, shippingAddress } = useCustomerDataContext();
	const { cartNeedsPayment, cartNeedsShipping, receiveCart } = useStoreCart();
	const {
		activePaymentMethod,
		isExpressPaymentMethodActive,
		currentStatus: currentPaymentStatus,
		paymentMethodData,
		expressPaymentMethods,
		paymentMethods,
		shouldSavePayment,
	} = usePaymentMethodDataContext();
	const { setIsSuppressed } = useStoreNoticesContext();
	const { createErrorNotice, removeNotice } = useDispatch( 'core/notices' );
	const currentBillingData = useRef( billingData );
	const currentShippingAddress = useRef( shippingAddress );
	const currentRedirectUrl = useRef( redirectUrl );
	const [ isProcessingOrder, setIsProcessingOrder ] = useState( false );

	const paymentMethodId = useMemo( () => {
		const merged = { ...expressPaymentMethods, ...paymentMethods };
		return merged?.[ activePaymentMethod ]?.paymentMethodId;
	}, [ activePaymentMethod, expressPaymentMethods, paymentMethods ] );

	const checkoutWillHaveError =
		( hasValidationErrors && ! isExpressPaymentMethodActive ) ||
		currentPaymentStatus.hasError ||
		shippingErrorStatus.hasError;

	const paidAndWithoutErrors =
		! checkoutHasError &&
		! checkoutWillHaveError &&
		( currentPaymentStatus.isSuccessful || ! cartNeedsPayment ) &&
		checkoutIsProcessing;

	// If express payment method is active, let's suppress notices
	useEffect( () => {
		setIsSuppressed( isExpressPaymentMethodActive );
	}, [ isExpressPaymentMethodActive, setIsSuppressed ] );

	// Determine if checkout has an error.
	useEffect( () => {
		if (
			checkoutWillHaveError !== checkoutHasError &&
			( checkoutIsProcessing || checkoutIsBeforeProcessing ) &&
			! isExpressPaymentMethodActive
		) {
			dispatchActions.setHasError( checkoutWillHaveError );
		}
	}, [
		checkoutWillHaveError,
		checkoutHasError,
		checkoutIsProcessing,
		checkoutIsBeforeProcessing,
		isExpressPaymentMethodActive,
		dispatchActions,
	] );

	useEffect( () => {
		currentBillingData.current = billingData;
		currentShippingAddress.current = shippingAddress;
		currentRedirectUrl.current = redirectUrl;
	}, [ billingData, shippingAddress, redirectUrl ] );

	const checkValidation = useCallback( () => {
		if ( hasValidationErrors ) {
			return false;
		}
		if ( currentPaymentStatus.hasError ) {
			return {
				errorMessage: __(
					'There was a problem with your payment option.',
					'woocommerce'
				),
			};
		}
		if ( shippingErrorStatus.hasError ) {
			return {
				errorMessage: __(
					'There was a problem with your shipping option.',
					'woocommerce'
				),
			};
		}

		return true;
	}, [
		hasValidationErrors,
		currentPaymentStatus.hasError,
		shippingErrorStatus.hasError,
	] );

	useEffect( () => {
		let unsubscribeProcessing;
		if ( ! isExpressPaymentMethodActive ) {
			unsubscribeProcessing = onCheckoutValidationBeforeProcessing(
				checkValidation,
				0
			);
		}
		return () => {
			if ( ! isExpressPaymentMethodActive ) {
				unsubscribeProcessing();
			}
		};
	}, [
		onCheckoutValidationBeforeProcessing,
		checkValidation,
		isExpressPaymentMethodActive,
	] );

	// redirect when checkout is complete and there is a redirect url.
	useEffect( () => {
		if ( currentRedirectUrl.current ) {
			window.location.href = currentRedirectUrl.current;
		}
	}, [ checkoutIsComplete ] );

	const processOrder = useCallback( async () => {
		if ( isProcessingOrder ) {
			return;
		}
		setIsProcessingOrder( true );
		removeNotice( 'checkout' );

		const paymentData = cartNeedsPayment
			? {
					payment_method: paymentMethodId,
					payment_data: preparePaymentData(
						paymentMethodData,
						shouldSavePayment,
						activePaymentMethod
					),
			  }
			: {};

		const data = {
			billing_address: emptyHiddenAddressFields(
				currentBillingData.current
			),
			customer_note: orderNotes,
			create_account: shouldCreateAccount,
			...paymentData,
			extensions: { ...extensionData },
		};

		if ( cartNeedsShipping ) {
			data.shipping_address = emptyHiddenAddressFields(
				currentShippingAddress.current
			);
		}

		triggerFetch( {
			path: '/wc/store/v1/checkout',
			method: 'POST',
			data,
			cache: 'no-store',
			parse: false,
		} )
			.then( ( response ) => {
				processCheckoutResponseHeaders(
					response.headers,
					dispatchActions
				);
				if ( ! response.ok ) {
					throw new Error( response );
				}
				return response.json();
			} )
			.then( ( responseJson ) => {
				dispatchActions.setAfterProcessing( responseJson );
				setIsProcessingOrder( false );
			} )
			.catch( ( errorResponse ) => {
				try {
					if ( errorResponse?.headers ) {
						processCheckoutResponseHeaders(
							errorResponse.headers,
							dispatchActions
						);
					}
					// This attempts to parse a JSON error response where the status code was 4xx/5xx.
					errorResponse.json().then( ( response ) => {
						// If updated cart state was returned, update the store.
						if ( response.data?.cart ) {
							receiveCart( response.data.cart );
						}
						createErrorNotice(
							formatStoreApiErrorMessage( response ),
							{ id: 'checkout' }
						);
						response?.additional_errors?.forEach?.(
							( additionalError ) => {
								createErrorNotice( additionalError.message, {
									id: additionalError.error_code,
								} );
							}
						);
						dispatchActions.setAfterProcessing( response );
					} );
				} catch {
					createErrorNotice(
						sprintf(
							// Translators: %s Error text.
							__(
								'%s Please try placing your order again.',
								'woocommerce'
							),
							errorResponse?.message ??
								__(
									'Something went wrong.',
									'woocommerce'
								)
						),
						{ id: 'checkout' }
					);
				}
				dispatchActions.setHasError( true );
				setIsProcessingOrder( false );
			} );
	}, [
		isProcessingOrder,
		removeNotice,
		cartNeedsPayment,
		paymentMethodId,
		paymentMethodData,
		shouldSavePayment,
		activePaymentMethod,
		orderNotes,
		shouldCreateAccount,
		extensionData,
		cartNeedsShipping,
		dispatchActions,
		createErrorNotice,
		receiveCart,
	] );

	// process order if conditions are good.
	useEffect( () => {
		if ( paidAndWithoutErrors && ! isProcessingOrder ) {
			processOrder();
		}
	}, [ processOrder, paidAndWithoutErrors, isProcessingOrder ] );

	return null;
};

export default CheckoutProcessor;
