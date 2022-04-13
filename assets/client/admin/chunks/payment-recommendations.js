"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[5396],{

/***/ 12915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22629);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55609);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86020);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14812);
/* harmony import */ var _woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14599);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72672);
/* harmony import */ var _lib_notices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64329);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(462);


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




const SEE_MORE_LINK = 'https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations';
const WcPayPromotionGateway = document.querySelector('[data-gateway_id="pre_install_woocommerce_payments_promotion"]');

const PaymentRecommendations = () => {
  const [installingPlugin, setInstallingPlugin] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isDismissed, setIsDismissed] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isInstalled, setIsInstalled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    installAndActivatePlugins,
    dismissRecommendedPlugins
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__.PLUGINS_STORE_NAME);
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)('core/notices');
  const {
    installedPaymentGateway,
    installedPaymentGateways,
    paymentGatewaySuggestions,
    isResolving
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const installingGatewayId = isInstalled && (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .getPluginSlug */ .V)(installingPlugin);
    return {
      installedPaymentGateway: installingGatewayId && select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateway(installingGatewayId),
      installedPaymentGateways: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateways().reduce((gateways, gateway) => {
        if (installingGatewayId === gateway.id) {
          return gateways;
        }

        gateways[gateway.id] = true;
        return gateways;
      }, {}),
      isResolving: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__.ONBOARDING_STORE_NAME).isResolving('getPaymentGatewaySuggestions'),
      paymentGatewaySuggestions: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__.ONBOARDING_STORE_NAME).getPaymentGatewaySuggestions()
    };
  }, [isInstalled]);
  const supportsWCPayments = paymentGatewaySuggestions && paymentGatewaySuggestions.filter(paymentGatewaySuggestion => {
    return paymentGatewaySuggestion.id.indexOf('woocommerce_payments') === 0;
  }).length === 1;
  const triggeredPageViewRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const shouldShowRecommendations = paymentGatewaySuggestions && paymentGatewaySuggestions.length > 0 && !supportsWCPayments && !isDismissed;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((shouldShowRecommendations || WcPayPromotionGateway && !isResolving) && !triggeredPageViewRef.current) {
      triggeredPageViewRef.current = true;
      const eventProps = (paymentGatewaySuggestions || []).reduce((props, plugin) => {
        if (plugin.plugins && plugin.plugins.length > 0) {
          return { ...props,
            [plugin.plugins[0].replace(/\-/g, '_') + '_displayed']: true
          };
        }

        return props;
      }, {
        woocommerce_payments_displayed: !!WcPayPromotionGateway
      });
      (0,_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__.recordEvent)('settings_payments_recommendations_pageview', eventProps);
    }
  }, [shouldShowRecommendations, WcPayPromotionGateway, isResolving]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!installedPaymentGateway) {
      return;
    }

    window.location.href = installedPaymentGateway.settings_url;
  }, [installedPaymentGateway]);

  if (!shouldShowRecommendations) {
    return null;
  }

  const dismissPaymentRecommendations = async () => {
    setIsDismissed(true);
    (0,_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__.recordEvent)('settings_payments_recommendations_dismiss', {});
    const success = await dismissRecommendedPlugins('payments');

    if (!success) {
      setIsDismissed(false);
      createNotice('error', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There was a problem hiding the "Additional ways to get paid" card.', 'woocommerce'));
    }
  };

  const setupPlugin = plugin => {
    if (installingPlugin) {
      return;
    }

    setInstallingPlugin(plugin.id);
    (0,_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_8__.recordEvent)('settings_payments_recommendations_setup', {
      extension_selected: plugin.plugins[0]
    });
    installAndActivatePlugins([plugin.plugins[0]]).then(() => {
      setIsInstalled(true);
    }).catch(response => {
      (0,_lib_notices__WEBPACK_IMPORTED_MODULE_10__/* .createNoticesFromResponse */ .a)(response);
      setInstallingPlugin(null);
    });
  };

  const pluginsList = (paymentGatewaySuggestions || []).filter(plugin => {
    var _plugin$plugins;

    return !installedPaymentGateways[plugin.id] && ((_plugin$plugins = plugin.plugins) === null || _plugin$plugins === void 0 ? void 0 : _plugin$plugins.length) && (!window.wcAdminFeatures['wc-pay-promotion'] || !plugin.id.startsWith('woocommerce_payments'));
  }).map(plugin => {
    return {
      key: plugin.id,
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, plugin.title, plugin.recommended && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.Pill, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Recommended', 'woocommerce'))),
      content: (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(plugin.content),
      after: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        isSecondary: true,
        onClick: () => setupPlugin(plugin),
        isBusy: installingPlugin === plugin.id,
        disabled: !!installingPlugin
      }, plugin.actionText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Get started', 'woocommerce')),
      before: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: plugin.square_image || plugin.image,
        alt: ""
      })
    };
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Card, {
    size: "medium",
    className: "woocommerce-recommended-payments-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "woocommerce-recommended-payments-card__header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__.Text, {
    variant: "title.small",
    as: "p",
    size: "20",
    lineHeight: "28px"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Additional ways to get paid', 'woocommerce')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_experimental__WEBPACK_IMPORTED_MODULE_6__.Text, {
    className: 'woocommerce-recommended-payments__header-heading',
    variant: "caption",
    as: "p",
    size: "12",
    lineHeight: "16px"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('We recommend adding one of the following payment extensions to your store. The extension will be installed and activated for you when you click "Get started".', 'woocommerce'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "woocommerce-card__menu woocommerce-card__header-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.EllipsisMenu, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Task List Options', 'woocommerce'),
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "woocommerce-review-activity-card__section-controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: dismissPaymentRecommendations
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide this', 'woocommerce')))
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.List, {
    items: pluginsList
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    href: SEE_MORE_LINK,
    target: "_blank",
    isTertiary: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('See more options', 'woocommerce'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(gridicons_dist_external__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    size: 18
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentRecommendations);

/***/ })

}]);