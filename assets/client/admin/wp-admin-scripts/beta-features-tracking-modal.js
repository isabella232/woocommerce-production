/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: external ["wc","data"]
var external_wc_data_namespaceObject = window["wc"]["data"];
;// CONCATENATED MODULE: external ["wc","tracks"]
var external_wc_tracks_namespaceObject = window["wc"]["tracks"];
;// CONCATENATED MODULE: external ["wc","explat"]
var external_wc_explat_namespaceObject = window["wc"]["explat"];
;// CONCATENATED MODULE: ./client/wp-admin-scripts/beta-features-tracking-modal/container.js


/**
 * External dependencies
 */









const BetaFeaturesTrackingModal = _ref => {
  let {
    updateOptions
  } = _ref;
  const [isModalOpen, setIsModalOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const [isChecked, setIsChecked] = (0,external_wp_element_namespaceObject.useState)(false);
  const enableNavigationCheckbox = (0,external_wp_element_namespaceObject.useRef)(document.querySelector('#woocommerce_navigation_enabled'));

  const setTracking = async allow => {
    if (typeof window.wcTracks.enable === 'function') {
      if (allow) {
        window.wcTracks.enable(() => {
          (0,external_wc_explat_namespaceObject.initializeExPlat)();
        });
      } else {
        window.wcTracks.isEnabled = false;
      }
    }

    if (allow) {
      (0,external_wc_tracks_namespaceObject.recordEvent)('settings_features_tracking_enabled');
    }

    return updateOptions({
      woocommerce_allow_tracking: allow ? 'yes' : 'no'
    });
  };

  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!enableNavigationCheckbox.current) {
      return;
    }

    const listener = e => {
      if (e.target.checked) {
        e.target.checked = false;
        setIsModalOpen(true);
      }
    };

    const checkbox = enableNavigationCheckbox.current;
    checkbox.addEventListener('change', listener, false);
    return () => checkbox.removeEventListener('change', listener);
  }, []);

  if (!enableNavigationCheckbox.current) {
    return null;
  }

  if (!isModalOpen) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
    title: (0,external_wp_i18n_namespaceObject.__)('Build a Better WooCommerce', 'woocommerce'),
    onRequestClose: () => setIsModalOpen(false),
    className: "woocommerce-beta-features-tracking-modal"
  }, (0,external_wp_element_namespaceObject.createElement)("p", null, (0,external_wp_i18n_namespaceObject.__)('Testing new features requires sharing non-sensitive data via ', 'woocommerce'), (0,external_wp_element_namespaceObject.createElement)("a", {
    href: "https://woocommerce.com/usage-tracking?utm_medium=product"
  }, (0,external_wp_i18n_namespaceObject.__)('usage tracking', 'woocommerce')), (0,external_wp_i18n_namespaceObject.__)('. Gathering usage data allows us to make WooCommerce better — your store will be considered as we evaluate new features, judge the quality of an update, or determine if an improvement makes sense. No personal data is tracked or stored and you can opt-out at any time.', 'woocommerce')), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "woocommerce-beta-features-tracking-modal__checkbox"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.CheckboxControl, {
    label: "Enable usage tracking",
    onChange: setIsChecked,
    checked: isChecked
  })), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "woocommerce-beta-features-tracking-modal__actions"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    isPrimary: true,
    onClick: async () => {
      if (isChecked) {
        await setTracking(true);
        enableNavigationCheckbox.current.checked = true;
      } else {
        await setTracking(false);
      }

      setIsModalOpen(false);
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Save', 'woocommerce'))));
};

const BetaFeaturesTrackingContainer = (0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    updateOptions
  } = dispatch(external_wc_data_namespaceObject.OPTIONS_STORE_NAME);
  return {
    updateOptions
  };
}))(BetaFeaturesTrackingModal);
;// CONCATENATED MODULE: ./client/wp-admin-scripts/beta-features-tracking-modal/index.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const betaFeaturesRoot = document.createElement('div');
betaFeaturesRoot.setAttribute('id', 'beta-features-tracking');
(0,external_wp_element_namespaceObject.render)((0,external_wp_element_namespaceObject.createElement)(BetaFeaturesTrackingContainer, null), document.body.appendChild(betaFeaturesRoot));
(window.wc = window.wc || {}).betaFeaturesTrackingModal = __webpack_exports__;
/******/ })()
;