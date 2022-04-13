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

;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","domReady"]
var external_wp_domReady_namespaceObject = window["wp"]["domReady"];
var external_wp_domReady_default = /*#__PURE__*/__webpack_require__.n(external_wp_domReady_namespaceObject);
;// CONCATENATED MODULE: external ["wc","wcSettings"]
var external_wc_wcSettings_namespaceObject = window["wc"]["wcSettings"];
;// CONCATENATED MODULE: external ["wc","tracks"]
var external_wc_tracks_namespaceObject = window["wc"]["tracks"];
;// CONCATENATED MODULE: ./client/wp-admin-scripts/onboarding-homepage-notice/index.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */

/**
 * Returns a promise and resolves when the post begins to publish.
 *
 * @return {Promise} Promise for overlay existence.
 */

const saveStarted = () => {
  if (!document.querySelector('.editor-post-publish-button').classList.contains('is-busy')) {
    const promise = new Promise(resolve => {
      window.requestAnimationFrame(resolve);
    });
    return promise.then(() => saveStarted());
  }

  return Promise.resolve(true);
};
/**
 * Returns a promise and resolves when the post has been saved and notices have shown.
 *
 * @return {Promise} Promise for overlay existence.
 */


const saveCompleted = () => {
  if (document.querySelector('.editor-post-publish-button').classList.contains('is-busy')) {
    const promise = new Promise(resolve => {
      window.requestAnimationFrame(resolve);
    });
    return promise.then(() => saveCompleted());
  }

  return Promise.resolve(true);
};
/**
 * Displays a notice on page save and updates the hompage options.
 */


const onboardingHomepageNotice = () => {
  const saveButton = document.querySelector('.editor-post-publish-button');

  if (saveButton.classList.contains('is-clicked')) {
    return;
  }

  saveButton.classList.add('is-clicked');
  saveCompleted().then(() => {
    const notificationType = document.querySelector('.components-snackbar__content') !== null ? 'snackbar' : 'default';
    (0,external_wp_data_namespaceObject.dispatch)('core/notices').removeNotice('SAVE_POST_NOTICE_ID');
    (0,external_wp_data_namespaceObject.dispatch)('core/notices').createSuccessNotice((0,external_wp_i18n_namespaceObject.__)("🏠 Nice work creating your store's homepage!", 'woocommerce'), {
      id: 'WOOCOMMERCE_ONBOARDING_HOME_PAGE_NOTICE',
      type: notificationType,
      actions: [{
        label: (0,external_wp_i18n_namespaceObject.__)('Continue setup.', 'woocommerce'),
        onClick: () => {
          (0,external_wc_tracks_namespaceObject.queueRecordEvent)('tasklist_appearance_continue_setup', {});
          window.location = (0,external_wc_wcSettings_namespaceObject.getAdminLink)('admin.php?page=wc-admin&task=appearance');
        }
      }]
    });
  });
};

external_wp_domReady_default()(() => {
  const publishButton = document.querySelector('.editor-post-publish-button');

  if (publishButton) {
    publishButton.addEventListener('click', saveStarted().then(() => onboardingHomepageNotice()));
  }
});
(window.wc = window.wc || {}).onboardingHomepageNotice = __webpack_exports__;
/******/ })()
;