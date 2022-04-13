/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 31772:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(25148);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 7862:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(31772)();
}


/***/ }),

/***/ 25148:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wc","data"]
var external_wc_data_namespaceObject = window["wc"]["data"];
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: external "React"
var external_React_namespaceObject = window["React"];
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_react@17.0.2/node_modules/@automattic/interpolate-components/dist/esm/tokenize.js
function identifyToken(item) {
  // {{/example}}
  if (item.startsWith('{{/')) {
    return {
      type: 'componentClose',
      value: item.replace(/\W/g, '')
    };
  } // {{example /}}


  if (item.endsWith('/}}')) {
    return {
      type: 'componentSelfClosing',
      value: item.replace(/\W/g, '')
    };
  } // {{example}}


  if (item.startsWith('{{')) {
    return {
      type: 'componentOpen',
      value: item.replace(/\W/g, '')
    };
  }

  return {
    type: 'string',
    value: item
  };
}

function tokenize(mixedString) {
  const tokenStrings = mixedString.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g); // split to components and strings

  return tokenStrings.map(identifyToken);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_react@17.0.2/node_modules/@automattic/interpolate-components/dist/esm/index.js



function getCloseIndex(openIndex, tokens) {
  const openToken = tokens[openIndex];
  let nestLevel = 0;

  for (let i = openIndex + 1; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.value === openToken.value) {
      if (token.type === 'componentOpen') {
        nestLevel++;
        continue;
      }

      if (token.type === 'componentClose') {
        if (nestLevel === 0) {
          return i;
        }

        nestLevel--;
      }
    }
  } // if we get this far, there was no matching close token


  throw new Error('Missing closing component token `' + openToken.value + '`');
}

function buildChildren(tokens, components) {
  let children = [];
  let openComponent;
  let openIndex;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'string') {
      children.push(token.value);
      continue;
    } // component node should at least be set


    if (components[token.value] === undefined) {
      throw new Error(`Invalid interpolation, missing component node: \`${token.value}\``);
    } // should be either ReactElement or null (both type "object"), all other types deprecated


    if (typeof components[token.value] !== 'object') {
      throw new Error(`Invalid interpolation, component node must be a ReactElement or null: \`${token.value}\``);
    } // we should never see a componentClose token in this loop


    if (token.type === 'componentClose') {
      throw new Error(`Missing opening component token: \`${token.value}\``);
    }

    if (token.type === 'componentOpen') {
      openComponent = components[token.value];
      openIndex = i;
      break;
    } // componentSelfClosing token


    children.push(components[token.value]);
    continue;
  }

  if (openComponent) {
    const closeIndex = getCloseIndex(openIndex, tokens);
    const grandChildTokens = tokens.slice(openIndex + 1, closeIndex);
    const grandChildren = buildChildren(grandChildTokens, components);
    const clonedOpenComponent = /*#__PURE__*/(0,external_React_namespaceObject.cloneElement)(openComponent, {}, grandChildren);
    children.push(clonedOpenComponent);

    if (closeIndex < tokens.length - 1) {
      const siblingTokens = tokens.slice(closeIndex + 1);
      const siblings = buildChildren(siblingTokens, components);
      children = children.concat(siblings);
    }
  }

  children = children.filter(Boolean);

  if (children.length === 0) {
    return null;
  }

  if (children.length === 1) {
    return children[0];
  }

  return /*#__PURE__*/(0,external_React_namespaceObject.createElement)(external_React_namespaceObject.Fragment, null, ...children);
}

function interpolate(options) {
  const {
    mixedString,
    components,
    throwErrors
  } = options;

  if (!components) {
    return mixedString;
  }

  if (typeof components !== 'object') {
    if (throwErrors) {
      throw new Error(`Interpolation Error: unable to process \`${mixedString}\` because components is not an object`);
    }

    return mixedString;
  }

  const tokens = tokenize(mixedString);

  try {
    return buildChildren(tokens, components);
  } catch (error) {
    if (throwErrors) {
      throw new Error(`Interpolation Error: unable to process \`${mixedString}\` because of error \`${error.message}\``);
    }

    return mixedString;
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: external "lodash"
var external_lodash_namespaceObject = window["lodash"];
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wc","tracks"]
var external_wc_tracks_namespaceObject = window["wc"]["tracks"];
;// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/dismiss-modal/index.js



/**
 * External dependencies
 */






/**
 * Internal dependencies
 */


class DismissModal extends external_wp_element_namespaceObject.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "setDismissed", timestamp => {
      this.props.updateOptions({
        woocommerce_shipping_dismissed_timestamp: timestamp
      });
    });

    _defineProperty(this, "hideBanner", () => {
      document.getElementById('woocommerce-admin-print-label').style.display = 'none';
    });

    _defineProperty(this, "remindMeLaterClicked", () => {
      const {
        onCloseAll,
        trackElementClicked
      } = this.props;
      this.setDismissed(Date.now());
      onCloseAll();
      this.hideBanner();
      trackElementClicked('shipping_banner_dismiss_modal_remind_me_later');
    });

    _defineProperty(this, "closeForeverClicked", () => {
      const {
        onCloseAll,
        trackElementClicked
      } = this.props;
      this.setDismissed(-1);
      onCloseAll();
      this.hideBanner();
      trackElementClicked('shipping_banner_dismiss_modal_close_forever');
    });
  }

  render() {
    const {
      onClose,
      visible
    } = this.props;

    if (!visible) {
      return null;
    }

    return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
      title: (0,external_wp_i18n_namespaceObject.__)('Are you sure?', 'woocommerce'),
      onRequestClose: onClose,
      className: "wc-admin-shipping-banner__dismiss-modal"
    }, (0,external_wp_element_namespaceObject.createElement)("p", {
      className: "wc-admin-shipping-banner__dismiss-modal-help-text"
    }, (0,external_wp_i18n_namespaceObject.__)('With WooCommerce Shipping you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.', 'woocommerce')), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "wc-admin-shipping-banner__dismiss-modal-actions"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      isSecondary: true,
      onClick: this.remindMeLaterClicked
    }, (0,external_wp_i18n_namespaceObject.__)('Remind me later', 'woocommerce')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      isPrimary: true,
      onClick: this.closeForeverClicked
    }, (0,external_wp_i18n_namespaceObject.__)("I don't need this", 'woocommerce'))));
  }

}
/* harmony default export */ var dismiss_modal = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    updateOptions
  } = dispatch(external_wc_data_namespaceObject.OPTIONS_STORE_NAME);
  return {
    updateOptions
  };
}))(DismissModal));
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@8.1.0/node_modules/@wordpress/icons/build-module/icon/index.js
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,external_wp_element_namespaceObject.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ var icon = (Icon);
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: external ["wp","primitives"]
var external_wp_primitives_namespaceObject = window["wp"]["primitives"];
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+icons@8.1.0/node_modules/@wordpress/icons/build-module/library/warning.js


/**
 * WordPress dependencies
 */

const warning = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"
}));
/* harmony default export */ var library_warning = (warning);
//# sourceMappingURL=warning.js.map
;// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/setup-notice/index.js


/**
 * External dependencies
 */


const setupErrorTypes = {
  DOWNLOAD: 'download',
  INSTALL: 'install',
  ACTIVATE: 'activate',
  SETUP: 'setup',
  START: 'start'
};
const setupErrorDescriptions = {
  [setupErrorTypes.DOWNLOAD]: (0,external_wp_i18n_namespaceObject.__)('download', 'woocommerce'),
  [setupErrorTypes.INSTALL]: (0,external_wp_i18n_namespaceObject.__)('install', 'woocommerce'),
  [setupErrorTypes.ACTIVATE]: (0,external_wp_i18n_namespaceObject.__)('activate', 'woocommerce'),
  [setupErrorTypes.SETUP]: (0,external_wp_i18n_namespaceObject.__)('set up', 'woocommerce'),
  [setupErrorTypes.START]: (0,external_wp_i18n_namespaceObject.__)('start', 'woocommerce')
};
function SetupNotice(_ref) {
  let {
    isSetupError,
    errorReason
  } = _ref;

  const getErrorMessage = errorType => {
    // Default to 'set up' description if the error type somehow doesn't exist.
    const description = errorType in setupErrorDescriptions ? setupErrorDescriptions[errorType] : setupErrorDescriptions[setupErrorTypes.SETUP];
    return (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject.__)('Unable to %s the plugin. Refresh the page and try again.', 'woocommerce'), description);
  };

  if (!isSetupError) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "wc-admin-shipping-banner-install-error"
  }, (0,external_wp_element_namespaceObject.createElement)(icon, {
    icon: library_warning,
    className: "warning-icon"
  }), getErrorMessage(errorReason));
}
;// CONCATENATED MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/wcs-api.js
/**
 * External dependencies
 */

function acceptWcsTos() {
  const path = '/wc/v1/connect/tos';
  return external_wp_apiFetch_default()({
    path,
    method: 'POST',
    data: {
      accepted: true
    }
  });
}
function getWcsAssets() {
  const path = '/wc/v1/connect/assets';
  return external_wp_apiFetch_default()({
    path,
    method: 'GET'
  });
}
;// CONCATENATED MODULE: external ["wc","wcSettings"]
var external_wc_wcSettings_namespaceObject = window["wc"]["wcSettings"];
;// CONCATENATED MODULE: ./client/utils/admin-settings.js
/**
 * External dependencies
 */

 // Remove mutable data from settings object to prevent access. Data stores should be used instead.

const mutableSources = ['wcAdminSettings', 'preloadSettings'];
const adminSettings = (0,external_wc_wcSettings_namespaceObject.getSetting)('admin', {});
const ADMIN_SETTINGS_SOURCE = Object.keys(adminSettings).reduce((source, key) => {
  if (!mutableSources.includes(key)) {
    source[key] = adminSettings[key];
  }

  return source;
}, {});
/**
 * Retrieves a setting value from the setting state.
 *
 * @param {string}   name                    The identifier for the setting.
 * @param {*}        [fallback=false]        The value to use as a fallback
 *                                           if the setting is not in the
 *                                           state.
 * @param {Function} [filter=( val ) => val] A callback for filtering the
 *                                           value before it's returned.
 *                                           Receives both the found value
 *                                           (if it exists for the key) and
 *                                           the provided fallback arg.
 *
 * @return {*}  The value present in the settings state for the given
 *                   name.
 */

function getAdminSetting(name) {
  let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : val => val;

  if (mutableSources.includes(name)) {
    throw new Error((0,external_wp_i18n_namespaceObject.__)('Mutable settings should be accessed via data store.'));
  }

  const value = ADMIN_SETTINGS_SOURCE.hasOwnProperty(name) ? ADMIN_SETTINGS_SOURCE[name] : fallback;
  return filter(value, fallback);
}
const ADMIN_URL = (0,external_wc_wcSettings_namespaceObject.getSetting)('adminUrl');
const COUNTRIES = (0,external_wc_wcSettings_namespaceObject.getSetting)('countries');
const CURRENCY = (0,external_wc_wcSettings_namespaceObject.getSetting)('currency');
const LOCALE = (0,external_wc_wcSettings_namespaceObject.getSetting)('locale');
const SITE_TITLE = (0,external_wc_wcSettings_namespaceObject.getSetting)('siteTitle');
const WC_ASSET_URL = (0,external_wc_wcSettings_namespaceObject.getSetting)('wcAssetUrl');
const ORDER_STATUSES = getAdminSetting('orderStatuses');
/**
 * Sets a value to a property on the settings state.
 *
 * NOTE: This feature is to be removed in favour of data stores when a full migration
 * is complete.
 *
 * @deprecated
 *
 * @param {string}   name                    The setting property key for the
 *                                           setting being mutated.
 * @param {*}        value                   The value to set.
 * @param {Function} [filter=( val ) => val] Allows for providing a callback
 *                                           to sanitize the setting (eg.
 *                                           ensure it's a number)
 */

function setAdminSetting(name, value) {
  let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : val => val;

  if (mutableSources.includes(name)) {
    throw new Error(__('Mutable settings should be mutated via data store.'));
  }

  ADMIN_SETTINGS_SOURCE[name] = filter(value);
}
;// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/shipping-banner/index.js



/**
 * External dependencies
 */










/**
 * Internal dependencies
 */






const wcAdminAssetUrl = getAdminSetting('wcAdminAssetUrl', '');
const wcsPluginSlug = 'woocommerce-services';
class ShippingBanner extends external_wp_element_namespaceObject.Component {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "isSetupError", () => this.state.wcsSetupError);

    _defineProperty(this, "closeDismissModal", () => {
      this.setState({
        isDismissModalOpen: false
      });
      this.trackElementClicked('shipping_banner_dismiss_modal_close_button');
    });

    _defineProperty(this, "openDismissModal", () => {
      this.setState({
        isDismissModalOpen: true
      });
      this.trackElementClicked('shipping_banner_dimiss');
    });

    _defineProperty(this, "hideBanner", () => {
      this.setState({
        showShippingBanner: false
      });
    });

    _defineProperty(this, "createShippingLabelClicked", () => {
      const {
        activePlugins
      } = this.props;
      this.setState({
        isShippingLabelButtonBusy: true
      });
      this.trackElementClicked('shipping_banner_create_label');

      if (!activePlugins.includes(wcsPluginSlug)) {
        this.installAndActivatePlugins(wcsPluginSlug);
      } else {
        this.acceptTosAndGetWCSAssets();
      }
    });

    _defineProperty(this, "woocommerceServiceLinkClicked", () => {
      this.trackElementClicked('shipping_banner_woocommerce_service_link');
    });

    _defineProperty(this, "trackBannerEvent", function (eventName) {
      let customProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const {
        activePlugins,
        isJetpackConnected
      } = _this.props;
      (0,external_wc_tracks_namespaceObject.recordEvent)(eventName, {
        banner_name: 'wcadmin_install_wcs_prompt',
        jetpack_installed: activePlugins.includes('jetpack'),
        jetpack_connected: isJetpackConnected,
        wcs_installed: activePlugins.includes(wcsPluginSlug),
        ...customProps
      });
    });

    _defineProperty(this, "trackImpression", () => {
      this.trackBannerEvent('banner_impression');
    });

    _defineProperty(this, "trackElementClicked", element => {
      this.trackBannerEvent('banner_element_clicked', {
        element
      });
    });

    _defineProperty(this, "getInstallText", () => {
      const {
        activePlugins
      } = this.props;

      if (activePlugins.includes(wcsPluginSlug)) {
        // If WCS is active, then the only remaining step is to agree to the ToS.
        return (0,external_wp_i18n_namespaceObject.__)('You\'ve already installed WooCommerce Shipping. By clicking "Create shipping label", you agree to its {{tosLink}}Terms of Service{{/tosLink}}.', 'woocommerce');
      }

      return (0,external_wp_i18n_namespaceObject.__)('By clicking "Create shipping label", {{wcsLink}}WooCommerce Shipping{{/wcsLink}} will be installed and you agree to its {{tosLink}}Terms of Service{{/tosLink}}.', 'woocommerce');
    });

    const orderId = new URL(window.location.href).searchParams.get('post');
    this.state = {
      showShippingBanner: true,
      isDismissModalOpen: false,
      setupErrorReason: setupErrorTypes.SETUP,
      orderId: parseInt(orderId, 10),
      wcsAssetsLoaded: false,
      wcsAssetsLoading: false,
      wcsSetupError: false,
      isShippingLabelButtonBusy: false,
      installText: this.getInstallText(),
      isWcsModalOpen: false
    };
  }

  componentDidMount() {
    const {
      showShippingBanner
    } = this.state;

    if (showShippingBanner) {
      this.trackImpression();
    }
  }

  async installAndActivatePlugins(pluginSlug) {
    // Avoid double activating.
    const {
      installPlugins,
      activatePlugins,
      isRequesting
    } = this.props;

    if (isRequesting) {
      return false;
    }

    const install = await installPlugins([pluginSlug]);

    if (install.success !== true) {
      this.setState({
        setupErrorReason: setupErrorTypes.INSTALL,
        wcsSetupError: true
      });
      return;
    }

    const activation = await activatePlugins([pluginSlug]);

    if (activation.success !== true) {
      this.setState({
        setupErrorReason: setupErrorTypes.ACTIVATE,
        wcsSetupError: true
      });
      return;
    }

    this.acceptTosAndGetWCSAssets();
  }

  acceptTosAndGetWCSAssets() {
    return acceptWcsTos().then(() => getWcsAssets()).then(wcsAssets => this.loadWcsAssets(wcsAssets)).catch(() => this.setState({
      wcsSetupError: true
    }));
  }

  generateMetaBoxHtml(nodeId, title, args) {
    const argsJsonString = JSON.stringify(args).replace(/"/g, '&quot;'); // JS has no native html_entities so we just replace.

    const togglePanelText = (0,external_wp_i18n_namespaceObject.__)('Toggle panel:', 'woocommerce');

    return `
<div id="${nodeId}" class="postbox">
	<div class="postbox-header">
		<h2 class="hndle"><span>${title}</span></h2>
		<div class="handle-actions">
			<button type="button" class="handlediv" aria-expanded="true">
				<span class="screen-reader-text">${togglePanelText} ${title}</span>
				<span class="toggle-indicator" aria-hidden="true"></span>
			</button>
		</div>
	</div>
	<div class="inside">
		<div class="wcc-root woocommerce wc-connect-create-shipping-label" data-args="${argsJsonString}">
		</div>
	</div>
</div>
`;
  }

  loadWcsAssets(_ref) {
    let {
      assets
    } = _ref;

    if (this.state.wcsAssetsLoaded || this.state.wcsAssetsLoading) {
      this.openWcsModal();
      return;
    }

    this.setState({
      wcsAssetsLoading: true
    });
    const jsPath = assets.wc_connect_admin_script;
    const stylePath = assets.wc_connect_admin_style;

    if (undefined === window.wcsPluginData) {
      const assetPath = jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
      window.wcsPluginData = {
        assetPath
      };
    }

    const {
      orderId
    } = this.state;
    const {
      itemsCount
    } = this.props;
    const shippingLabelContainerHtml = this.generateMetaBoxHtml('woocommerce-order-label', (0,external_wp_i18n_namespaceObject.__)('Shipping Label', 'woocommerce'), {
      order: {
        id: orderId
      },
      context: 'shipping_label',
      items: itemsCount
    }); // Insert shipping label metabox just above main order details box.

    document.getElementById('woocommerce-order-data').insertAdjacentHTML('beforebegin', shippingLabelContainerHtml);
    const shipmentTrackingHtml = this.generateMetaBoxHtml('woocommerce-order-shipment-tracking', (0,external_wp_i18n_namespaceObject.__)('Shipment Tracking', 'woocommerce'), {
      order: {
        id: orderId
      },
      context: 'shipment_tracking',
      items: itemsCount
    }); // Insert tracking metabox in the side after the order actions.

    document.getElementById('woocommerce-order-actions').insertAdjacentHTML('afterend', shipmentTrackingHtml);

    if (window.jQuery) {
      // Need to refresh so the new metaboxes are sortable.
      window.jQuery('#normal-sortables').sortable('refresh');
      window.jQuery('#side-sortables').sortable('refresh');
      window.jQuery('#woocommerce-order-label').hide();
    }

    Promise.all([new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = jsPath;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    }), new Promise((resolve, reject) => {
      if (stylePath !== '') {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = stylePath;
        link.media = 'all';
        link.onload = resolve;
        link.onerror = reject;
        head.appendChild(link);
      } else {
        resolve();
      }
    })]).then(() => {
      this.setState({
        wcsAssetsLoaded: true,
        wcsAssetsLoading: false,
        isShippingLabelButtonBusy: false
      });
      this.openWcsModal();
    });
  }

  openWcsModal() {
    if (window.wcsGetAppStoreAsync) {
      window.wcsGetAppStoreAsync('wc-connect-create-shipping-label').then(wcsStore => {
        const state = wcsStore.getState();
        const {
          orderId
        } = this.state;
        const siteId = state.ui.selectedSiteId;
        const wcsStoreUnsubscribe = wcsStore.subscribe(() => {
          const latestState = wcsStore.getState();
          const shippingLabelState = (0,external_lodash_namespaceObject.get)(latestState, ['extensions', 'woocommerce', 'woocommerceServices', siteId, 'shippingLabel', orderId], null);
          const labelSettingsState = (0,external_lodash_namespaceObject.get)(latestState, ['extensions', 'woocommerce', 'woocommerceServices', siteId, 'labelSettings'], null);
          const packageState = (0,external_lodash_namespaceObject.get)(latestState, ['extensions', 'woocommerce', 'woocommerceServices', siteId, 'packages'], null);
          const locationsState = (0,external_lodash_namespaceObject.get)(latestState, ['extensions', 'woocommerce', 'sites', siteId, 'data', 'locations']);

          if (shippingLabelState && labelSettingsState && labelSettingsState.meta && packageState && locationsState) {
            if (shippingLabelState.loaded && labelSettingsState.meta.isLoaded && packageState.isLoaded && (0,external_lodash_namespaceObject.isArray)(locationsState) && !this.state.isWcsModalOpen) {
              if (window.jQuery) {
                this.setState({
                  isWcsModalOpen: true
                });
                window.jQuery('.shipping-label__new-label-button').click();
              }

              wcsStore.dispatch({
                type: 'NOTICE_CREATE',
                notice: {
                  duration: 10000,
                  status: 'is-success',
                  text: (0,external_wp_i18n_namespaceObject.__)('Plugin installed and activated', 'woocommerce')
                }
              });
            } else if (shippingLabelState.showPurchaseDialog) {
              wcsStoreUnsubscribe();

              if (window.jQuery) {
                window.jQuery('#woocommerce-order-label').show();
              }
            }
          }
        });
        document.getElementById('woocommerce-admin-print-label').style.display = 'none';
      });
    }
  }

  render() {
    const {
      isDismissModalOpen,
      showShippingBanner,
      isShippingLabelButtonBusy
    } = this.state;

    if (!showShippingBanner) {
      return null;
    }

    return (0,external_wp_element_namespaceObject.createElement)("div", null, (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "wc-admin-shipping-banner-container"
    }, (0,external_wp_element_namespaceObject.createElement)("img", {
      className: "wc-admin-shipping-banner-illustration",
      src: wcAdminAssetUrl + '/shippingillustration.svg',
      alt: (0,external_wp_i18n_namespaceObject.__)('Shipping ', 'woocommerce')
    }), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "wc-admin-shipping-banner-blob"
    }, (0,external_wp_element_namespaceObject.createElement)("h3", null, (0,external_wp_i18n_namespaceObject.__)('Print discounted shipping labels with a click.', 'woocommerce')), (0,external_wp_element_namespaceObject.createElement)("p", null, interpolate({
      mixedString: this.state.installText,
      components: {
        tosLink: (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
          href: "https://wordpress.com/tos",
          target: "_blank",
          type: "external"
        }),
        wcsLink: (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
          href: "https://woocommerce.com/products/shipping/?utm_medium=product",
          target: "_blank",
          type: "external",
          onClick: this.woocommerceServiceLinkClicked
        })
      }
    })), (0,external_wp_element_namespaceObject.createElement)(SetupNotice, {
      isSetupError: this.isSetupError(),
      errorReason: this.state.setupErrorReason
    })), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      disabled: isShippingLabelButtonBusy,
      isPrimary: true,
      isBusy: isShippingLabelButtonBusy,
      onClick: this.createShippingLabelClicked
    }, (0,external_wp_i18n_namespaceObject.__)('Create shipping label', 'woocommerce')), (0,external_wp_element_namespaceObject.createElement)("button", {
      onClick: this.openDismissModal,
      type: "button",
      className: "notice-dismiss",
      disabled: this.state.isShippingLabelButtonBusy
    }, (0,external_wp_element_namespaceObject.createElement)("span", {
      className: "screen-reader-text"
    }, (0,external_wp_i18n_namespaceObject.__)('Close Print Label Banner.', 'woocommerce')))), (0,external_wp_element_namespaceObject.createElement)(dismiss_modal, {
      visible: isDismissModalOpen,
      onClose: this.closeDismissModal,
      onCloseAll: this.hideBanner,
      trackElementClicked: this.trackElementClicked
    }));
  }

}
ShippingBanner.propTypes = {
  itemsCount: (prop_types_default()).number.isRequired,
  isJetpackConnected: (prop_types_default()).bool.isRequired,
  activePlugins: (prop_types_default()).array.isRequired,
  activatePlugins: (prop_types_default()).func.isRequired,
  installPlugins: (prop_types_default()).func.isRequired,
  isRequesting: (prop_types_default()).bool.isRequired
};
/* harmony default export */ var shipping_banner = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withSelect)(select => {
  const {
    isPluginsRequesting,
    isJetpackConnected,
    getActivePlugins
  } = select(external_wc_data_namespaceObject.PLUGINS_STORE_NAME);
  const isRequesting = isPluginsRequesting('activatePlugins') || isPluginsRequesting('installPlugins');
  return {
    isRequesting,
    isJetpackConnected: isJetpackConnected(),
    activePlugins: getActivePlugins()
  };
}), (0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    activatePlugins,
    installPlugins
  } = dispatch(external_wc_data_namespaceObject.PLUGINS_STORE_NAME);
  return {
    activatePlugins,
    installPlugins
  };
}))(ShippingBanner));
;// CONCATENATED MODULE: ./client/wp-admin-scripts/print-shipping-label-banner/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const metaBox = document.getElementById('wc-admin-shipping-banner-root');
const args = metaBox.dataset.args && JSON.parse(metaBox.dataset.args) || {}; // Render the header.

const HydratedShippingBanner = (0,external_wc_data_namespaceObject.withPluginsHydration)({ ...getAdminSetting('plugins'),
  jetpackStatus: getAdminSetting('dataEndpoints', {}).jetpackStatus
})(shipping_banner);
(0,external_wp_element_namespaceObject.render)((0,external_wp_element_namespaceObject.createElement)(HydratedShippingBanner, {
  itemsCount: args.items
}), metaBox);
}();
(window.wc = window.wc || {}).printShippingLabelBanner = __webpack_exports__;
/******/ })()
;