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
;// CONCATENATED MODULE: ./client/wp-admin-scripts/navigation-opt-out/container.js


/**
 * External dependencies
 */



class NavigationOptOutContainer extends external_wp_element_namespaceObject.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true
    };
  }

  render() {
    const {
      isModalOpen
    } = this.state;

    if (!isModalOpen) {
      return null;
    }

    if (!window.surveyData || !window.surveyData.url) {
      return null;
    }

    return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
      title: (0,external_wp_i18n_namespaceObject.__)('Help us improve', 'woocommerce'),
      onRequestClose: () => this.setState({
        isModalOpen: false
      }),
      className: "woocommerce-navigation-opt-out-modal"
    }, (0,external_wp_element_namespaceObject.createElement)("p", null, (0,external_wp_i18n_namespaceObject.__)("Take this 2-minute survey to share why you're opting out of the new navigation", 'woocommerce')), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "woocommerce-navigation-opt-out-modal__actions"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      isDefault: true,
      onClick: () => this.setState({
        isModalOpen: false
      })
    }, (0,external_wp_i18n_namespaceObject.__)('No thanks', 'woocommerce')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      isPrimary: true,
      target: "_blank",
      href: window.surveyData.url,
      onClick: () => this.setState({
        isModalOpen: false
      })
    }, (0,external_wp_i18n_namespaceObject.__)('Share feedback', 'woocommerce'))));
  }

}
;// CONCATENATED MODULE: ./client/wp-admin-scripts/navigation-opt-out/index.js


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const navigationOptOutRoot = document.createElement('div');
navigationOptOutRoot.setAttribute('id', 'navigation-opt-out-root');
(0,external_wp_element_namespaceObject.render)((0,external_wp_element_namespaceObject.createElement)(NavigationOptOutContainer, null), document.body.appendChild(navigationOptOutRoot));
(window.wc = window.wc || {}).navigationOptOut = __webpack_exports__;
/******/ })()
;