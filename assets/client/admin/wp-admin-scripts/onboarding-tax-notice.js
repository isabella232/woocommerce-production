/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","domReady"]
var external_wp_domReady_namespaceObject = window["wp"]["domReady"];
var external_wp_domReady_default = /*#__PURE__*/__webpack_require__.n(external_wp_domReady_namespaceObject);
;// CONCATENATED MODULE: external ["wc","wcSettings"]
var external_wc_wcSettings_namespaceObject = window["wc"]["wcSettings"];
;// CONCATENATED MODULE: ./client/wp-admin-scripts/onboarding-tax-notice/index.js
/**
 * External dependencies
 */




/**
 * Returns a promise and resolves when the loader overlay no longer exists.
 *
 * @param {HTMLElement} saveButton Save button DOM element.
 * @return {Promise} Promise for save status.
 */

const saveCompleted = saveButton => {
  if (saveButton && !saveButton.disabled) {
    const promise = new Promise(resolve => {
      window.requestAnimationFrame(resolve);
    });
    return promise.then(() => saveCompleted(saveButton));
  }

  return Promise.resolve(true);
};
/**
 * Displays a notice on tax settings save.
 */


const showTaxCompletionNotice = () => {
  const saveButton = document.querySelector('.woocommerce-save-button');

  if (saveButton.classList.contains('has-tax')) {
    return;
  }

  saveCompleted(saveButton).then(() => {
    // Check if a row was added successfully after WooCommerce removes invalid rows.
    if (!document.querySelector('.wc_tax_rates .tips')) {
      return;
    }

    saveButton.classList.add('has-tax');
    (0,external_wp_data_namespaceObject.dispatch)('core/notices').createSuccessNotice((0,external_wp_i18n_namespaceObject.__)("You've added your first tax rate!", 'woocommerce'), {
      id: 'WOOCOMMERCE_ONBOARDING_TAX_NOTICE',
      actions: [{
        url: (0,external_wc_wcSettings_namespaceObject.getAdminLink)('admin.php?page=wc-admin'),
        label: (0,external_wp_i18n_namespaceObject.__)('Continue setup.', 'woocommerce')
      }]
    });
  });
};

external_wp_domReady_default()(() => {
  const saveButton = document.querySelector('.woocommerce-save-button');

  if (window.htmlSettingsTaxLocalizeScript && window.htmlSettingsTaxLocalizeScript.rates && !window.htmlSettingsTaxLocalizeScript.rates.length && saveButton) {
    saveButton.addEventListener('click', showTaxCompletionNotice);
  }
});
(window.wc = window.wc || {}).onboardingTaxNotice = __webpack_exports__;
/******/ })()
;