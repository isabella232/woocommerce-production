(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[6125],{

/***/ 48803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ shipping_recommendations; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(14812);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gridicons@3.4.0_react@17.0.2/node_modules/gridicons/dist/external.js
var external = __webpack_require__(72672);
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(55609);
// EXTERNAL MODULE: ./client/lib/notices/index.js
var notices = __webpack_require__(64329);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./client/settings-recommendations/dismissable-list.tsx


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */

 // using a context provider for the option name so that the option name prop doesn't need to be passed to the `DismissableListHeading` too

const OptionNameContext = (0,external_wp_element_.createContext)('');
const DismissableListHeading = _ref => {
  let {
    children,
    onDismiss = () => null
  } = _ref;
  const {
    updateOptions
  } = (0,external_wp_data_.useDispatch)(external_wc_data_.OPTIONS_STORE_NAME);
  const dismissOptionName = (0,external_wp_element_.useContext)(OptionNameContext);

  const handleDismissClick = () => {
    onDismiss();
    updateOptions({
      [dismissOptionName]: 'yes'
    });
  };

  return (0,external_wp_element_.createElement)(external_wp_components_.CardHeader, null, (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-dismissable-list__header"
  }, children), (0,external_wp_element_.createElement)("div", null, (0,external_wp_element_.createElement)(external_wc_components_.EllipsisMenu, {
    label: (0,external_wp_i18n_.__)('Task List Options', 'woocommerce'),
    renderContent: () => (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-dismissable-list__controls"
    }, (0,external_wp_element_.createElement)(external_wp_components_.Button, {
      onClick: handleDismissClick
    }, (0,external_wp_i18n_.__)('Hide this', 'woocommerce')))
  })));
};
const DismissableList = _ref2 => {
  let {
    children,
    className,
    dismissOptionName
  } = _ref2;
  const isVisible = (0,external_wp_data_.useSelect)(select => {
    const {
      getOption,
      hasFinishedResolution
    } = select(external_wc_data_.OPTIONS_STORE_NAME);
    const hasFinishedResolving = hasFinishedResolution('getOption', [dismissOptionName]);
    const isDismissed = getOption(dismissOptionName) === 'yes';
    return hasFinishedResolving && !isDismissed;
  });

  if (!isVisible) {
    return null;
  }

  return (0,external_wp_element_.createElement)(external_wp_components_.Card, {
    size: "medium",
    className: classnames_default()('woocommerce-dismissable-list', className)
  }, (0,external_wp_element_.createElement)(OptionNameContext.Provider, {
    value: dismissOptionName
  }, children));
};
// EXTERNAL MODULE: external ["wc","wcSettings"]
var external_wc_wcSettings_ = __webpack_require__(74617);
// EXTERNAL MODULE: ./client/shipping/woo-icon.svg
var woo_icon = __webpack_require__(40610);
var woo_icon_default = /*#__PURE__*/__webpack_require__.n(woo_icon);
// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(4411);
;// CONCATENATED MODULE: ./client/shipping/woocommerce-services-item.tsx


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */





const WooCommerceServicesItem = _ref => {
  let {
    onSetupClick,
    pluginsBeingSetup
  } = _ref;
  const wcAdminAssetUrl = (0,admin_settings/* getAdminSetting */.O3)('wcAdminAssetUrl', '');
  const {
    createSuccessNotice
  } = (0,external_wp_data_.useDispatch)('core/notices');
  const isSiteConnectedToJetpack = (0,external_wp_data_.useSelect)(select => select(external_wc_data_.PLUGINS_STORE_NAME).isJetpackConnected());

  const handleSetupClick = () => {
    onSetupClick(['woocommerce-services']).then(() => {
      const actions = [];

      if (!isSiteConnectedToJetpack) {
        actions.push({
          url: (0,external_wc_wcSettings_.getAdminLink)('plugins.php'),
          label: (0,external_wp_i18n_.__)('Finish the setup by connecting your store to Jetpack.', 'woocommerce')
        });
      }

      createSuccessNotice((0,external_wp_i18n_.__)('🎉 WooCommerce Shipping is installed!', 'woocommerce'), {
        actions
      });
    });
  };

  return (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-list__item-inner woocommerce-services-item"
  }, (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-list__item-before"
  }, (0,external_wp_element_.createElement)("img", {
    className: "woocommerce-services-item__logo",
    src: (woo_icon_default()),
    alt: ""
  })), (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-list__item-text"
  }, (0,external_wp_element_.createElement)("span", {
    className: "woocommerce-list__item-title"
  }, (0,external_wp_i18n_.__)('Woocommerce Shipping', 'woocommerce'), (0,external_wp_element_.createElement)(external_wc_components_.Pill, null, (0,external_wp_i18n_.__)('Recommended', 'woocommerce'))), (0,external_wp_element_.createElement)("span", {
    className: "woocommerce-list__item-content"
  }, (0,external_wp_i18n_.__)('Print USPS and DHL Express labels straight from your WooCommerce dashboard and save on shipping.', 'woocommerce'), (0,external_wp_element_.createElement)("br", null), (0,external_wp_element_.createElement)(external_wp_components_.ExternalLink, {
    href: "https://woocommerce.com/woocommerce-shipping/"
  }, (0,external_wp_i18n_.__)('Learn more', 'woocommerce')))), (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-list__item-after"
  }, (0,external_wp_element_.createElement)(external_wp_components_.Button, {
    isSecondary: true,
    onClick: handleSetupClick,
    isBusy: pluginsBeingSetup.includes('woocommerce-services'),
    disabled: pluginsBeingSetup.length > 0
  }, (0,external_wp_i18n_.__)('Get started', 'woocommerce'))));
};

/* harmony default export */ var woocommerce_services_item = (WooCommerceServicesItem);
;// CONCATENATED MODULE: ./client/shipping/shipping-recommendations.tsx


/**
 * External dependencies
 */





 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore VisuallyHidden is present, it's just not typed
// eslint-disable-next-line @woocommerce/dependency-group


/**
 * Internal dependencies
 */






const useInstallPlugin = () => {
  const [pluginsBeingSetup, setPluginsBeingSetup] = (0,external_wp_element_.useState)([]);
  const {
    installAndActivatePlugins
  } = (0,external_wp_data_.useDispatch)(external_wc_data_.PLUGINS_STORE_NAME);

  const handleSetup = slugs => {
    if (pluginsBeingSetup.length > 0) {
      return Promise.resolve();
    }

    setPluginsBeingSetup(slugs);
    return installAndActivatePlugins(slugs).then(() => {
      setPluginsBeingSetup([]);
    }).catch(response => {
      (0,notices/* createNoticesFromResponse */.a)(response);
      setPluginsBeingSetup([]);
      return Promise.reject();
    });
  };

  return [pluginsBeingSetup, handleSetup];
};

const ShippingRecommendationsList = _ref => {
  let {
    children
  } = _ref;
  return (0,external_wp_element_.createElement)(DismissableList, {
    className: "woocommerce-recommended-shipping-extensions",
    dismissOptionName: "woocommerce_settings_shipping_recommendations_hidden"
  }, (0,external_wp_element_.createElement)(DismissableListHeading, null, (0,external_wp_element_.createElement)(external_wc_experimental_.Text, {
    variant: "title.small",
    as: "p",
    size: "20",
    lineHeight: "28px"
  }, (0,external_wp_i18n_.__)('Recommended shipping solutions', 'woocommerce')), (0,external_wp_element_.createElement)(external_wc_experimental_.Text, {
    className: "woocommerce-recommended-shipping__header-heading",
    variant: "caption",
    as: "p",
    size: "12",
    lineHeight: "16px"
  }, (0,external_wp_i18n_.__)('We recommend adding one of the following shipping extensions to your store. The extension will be installed and activated for you when you click "Get started".', 'woocommerce'))), (0,external_wp_element_.createElement)("ul", {
    className: "woocommerce-list"
  }, external_wp_element_.Children.map(children, item => (0,external_wp_element_.createElement)("li", {
    className: "woocommerce-list__item"
  }, item))), (0,external_wp_element_.createElement)(external_wp_components_.CardFooter, null, (0,external_wp_element_.createElement)(external_wp_components_.Button, {
    className: "woocommerce-recommended-shipping-extensions__more_options_cta",
    href: "https://woocommerce.com/product-category/woocommerce-extensions/shipping-methods/?utm_source=shipping_recommendations",
    target: "_blank",
    isTertiary: true
  }, (0,external_wp_i18n_.__)('See more options', 'woocommerce'), (0,external_wp_element_.createElement)(external_wp_components_.VisuallyHidden, null, (0,external_wp_i18n_.__)('(opens in a new tab)', 'woocommerce')), (0,external_wp_element_.createElement)(external/* default */.Z, {
    size: 18
  }))));
};

const ShippingRecommendations = () => {
  const [pluginsBeingSetup, setupPlugin] = useInstallPlugin();
  const activePlugins = (0,external_wp_data_.useSelect)(select => select(external_wc_data_.PLUGINS_STORE_NAME).getActivePlugins());

  if (activePlugins.includes('woocommerce-services')) {
    return null;
  }

  return (0,external_wp_element_.createElement)(ShippingRecommendationsList, null, (0,external_wp_element_.createElement)(woocommerce_services_item, {
    pluginsBeingSetup: pluginsBeingSetup,
    onSetupClick: setupPlugin
  }));
};

/* harmony default export */ var shipping_recommendations = (ShippingRecommendations);

/***/ }),

/***/ 40610:
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48cGF0aCBmaWxsPSIjN2Q1N2E0IiBkPSJNMCAwaDEyMHYxMjBIMHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNjcuNDggNTMuNTVjLTEuMTktLjI2LTIuMzMuNDItMy40MyAyLjAzLS44NyAxLjI2LTEuNDUgMi41Ni0xLjc0IDMuOTEtLjE2Ljc3LS4yNCAxLjU4LS4yNCAyLjQxIDAgLjk3LjE5IDEuOTYuNTggMi45OS40OCAxLjI2IDEuMTMgMS45NiAxLjkzIDIuMTIuOC4xNiAxLjY5LS4xOSAyLjY2LTEuMDYgMS4yMi0xLjA5IDIuMDYtMi43MiAyLjUxLTQuODguMTYtLjc3LjI0LTEuNTguMjQtMi40MSAwLS45Ny0uMTktMS45Ni0uNTgtMi45OS0uNDgtMS4yNS0xLjEyLTEuOTYtMS45My0yLjEyem0yMC42MiAwYy0xLjE5LS4yNi0yLjMzLjQyLTMuNDMgMi4wMy0uODcgMS4yNi0xLjQ1IDIuNTYtMS43NCAzLjkxLS4xNi43Ny0uMjQgMS41OC0uMjQgMi40MSAwIC45Ny4xOSAxLjk2LjU4IDIuOTkuNDggMS4yNiAxLjEzIDEuOTYgMS45MyAyLjEyLjguMTYgMS42OS0uMTkgMi42Ni0xLjA2IDEuMjItMS4wOSAyLjA2LTIuNzIgMi41MS00Ljg4LjE2LS43Ny4yNC0xLjU4LjI0LTIuNDEgMC0uOTctLjE5LTEuOTYtLjU4LTIuOTktLjQ4LTEuMjUtMS4xMi0xLjk2LTEuOTMtMi4xMnoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOTIuNzYgNDBIMjcuMjRjLTQuMTQgMC03LjUgMy4zNi03LjUgNy41djI0Ljk4YzAgNC4xNCAzLjM2IDcuNSA3LjUgNy41aDMxLjA0bDE0LjE5IDcuOS0zLjIyLTcuOWgyMy41YzQuMTQgMCA3LjUtMy4zNiA3LjUtNy41VjQ3LjVjLjAxLTQuMTQtMy4zNS03LjUtNy40OS03LjV6TTUyLjc0IDcyLjkxYy4wNi44NC0uMDcgMS41NS0uMzggMi4xNi0uNC43NC0uOTggMS4xMy0xLjc1IDEuMTktLjg3LjA2LTEuNzMtLjM1LTIuNi0xLjIyLTMuMDYtMy4xNC01LjQ5LTcuODEtNy4yOC0xNC0yLjEyIDQuMjEtMy43MSA3LjM3LTQuNzUgOS40OC0xLjkzIDMuNzItMy41OSA1LjYyLTQuOTcgNS43Mi0uOS4wNi0xLjY2LS42OS0yLjI5LTIuMjYtMS42OS00LjMtMy41LTEyLjYzLTUuNDQtMjQuOTctLjEzLS44Ni4wNS0xLjYuNTItMi4yMS40Ny0uNjEgMS4xNi0uOTUgMi4wNi0xLjAyIDEuNjctLjEyIDIuNjMuNjcgMi44OCAyLjM2IDEuMDMgNi44NiAyLjE0IDEyLjY5IDMuMzEgMTcuNDhsNy4yMS0xMy43MmMuNjYtMS4yNCAxLjQ4LTEuOSAyLjQ3LTEuOTcgMS40NC0uMSAyLjM1LjgyIDIuNzEgMi43Ni44MiA0LjM2IDEuODYgOC4xMSAzLjEyIDExLjI1Ljg2LTguMzUgMi4zMS0xNC4zOSA0LjM0LTE4LjExLjQ4LS45IDEuMjEtMS4zOSAyLjE3LTEuNDYuNzctLjA1IDEuNDYuMTYgMi4wOC42NS42Mi40OS45NSAxLjEyIDEgMS44OS4wNC41OC0uMDcgMS4xLS4zMiAxLjU3LTEuMjggMi4zOC0yLjM0IDYuMzQtMy4xOCAxMS44OS0uODIgNS4zNC0xLjEzIDkuNTMtLjkxIDEyLjU0em0yMC4yLTUuMTZjLTEuOTYgMy4yOC00LjU0IDQuOTItNy43MiA0LjkyLS41OCAwLTEuMTgtLjA3LTEuNzktLjE5LTIuMzItLjQ4LTQuMDctMS43NS01LjI2LTMuODEtMS4wNi0xLjgtMS41OS0zLjk3LTEuNTktNi41MiAwLTMuMzguODUtNi40NyAyLjU2LTkuMjcgMi0zLjI4IDQuNTctNC45MiA3LjcyLTQuOTIuNTggMCAxLjE3LjA3IDEuNzkuMTkgMi4zMi40OCA0LjA3IDEuNzUgNS4yNiAzLjgxIDEuMDYgMS43NyAxLjU5IDMuOTMgMS41OSA2LjQ3LS4wMSAzLjM4LS44NiA2LjQ4LTIuNTYgOS4zMnptMjAuNjIgMGMtMS45NiAzLjI4LTQuNTQgNC45Mi03LjcyIDQuOTItLjU4IDAtMS4xNy0uMDctMS43OC0uMTktMi4zMi0uNDgtNC4wNy0xLjc1LTUuMjYtMy44MS0xLjA2LTEuOC0xLjU5LTMuOTctMS41OS02LjUyIDAtMy4zOC44NS02LjQ3IDIuNTYtOS4yNyAyLTMuMjggNC41Ny00LjkyIDcuNzItNC45Mi41OCAwIDEuMTcuMDcgMS43OC4xOSAyLjMyLjQ4IDQuMDcgMS43NSA1LjI2IDMuODEgMS4wNiAxLjc3IDEuNTkgMy45MyAxLjU5IDYuNDcgMCAzLjM4LS44NiA2LjQ4LTIuNTYgOS4zMnoiLz48L3N2Zz4K"

/***/ })

}]);