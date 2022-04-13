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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CustomerEffortScore": function() { return /* binding */ CustomerEffortScore; },
  "default": function() { return /* binding */ build_module; }
});

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wc","experimental"]
var external_wc_experimental_namespaceObject = window["wc"]["experimental"];
;// CONCATENATED MODULE: ../../packages/js/customer-effort-score/build-module/customer-feedback-modal/index.js
/**
 * External dependencies
 */





/**
 * Provides a modal requesting customer feedback.
 *
 * A label is displayed in the modal asking the customer to score the
 * difficulty completing a task. A group of radio buttons, styled with
 * emoji facial expressions, are used to provide a score between 1 and 5.
 *
 * A low score triggers a comments field to appear.
 *
 * Upon completion, the score and comments is sent to a callback function.
 *
 * @param {Object}   props                     Component props.
 * @param {Function} props.recordScoreCallback Function to call when the results are sent.
 * @param {string}   props.label               Question to ask the customer.
 */

function CustomerFeedbackModal(_ref) {
  let {
    recordScoreCallback,
    label
  } = _ref;
  const options = [{
    label: (0,external_wp_i18n_namespaceObject.__)('Very difficult', 'woocommerce'),
    value: '1'
  }, {
    label: (0,external_wp_i18n_namespaceObject.__)('Somewhat difficult', 'woocommerce'),
    value: '2'
  }, {
    label: (0,external_wp_i18n_namespaceObject.__)('Neutral', 'woocommerce'),
    value: '3'
  }, {
    label: (0,external_wp_i18n_namespaceObject.__)('Somewhat easy', 'woocommerce'),
    value: '4'
  }, {
    label: (0,external_wp_i18n_namespaceObject.__)('Very easy', 'woocommerce'),
    value: '5'
  }];
  const [score, setScore] = (0,external_wp_element_namespaceObject.useState)(NaN);
  const [comments, setComments] = (0,external_wp_element_namespaceObject.useState)('');
  const [showNoScoreMessage, setShowNoScoreMessage] = (0,external_wp_element_namespaceObject.useState)(false);
  const [isOpen, setOpen] = (0,external_wp_element_namespaceObject.useState)(true);

  const closeModal = () => setOpen(false);

  const onRadioControlChange = value => {
    const valueAsInt = parseInt(value, 10);
    setScore(valueAsInt);
    setShowNoScoreMessage(!Number.isInteger(valueAsInt));
  };

  const sendScore = () => {
    if (!Number.isInteger(score)) {
      setShowNoScoreMessage(true);
      return;
    }

    setOpen(false);
    recordScoreCallback(score, comments);
  };

  if (!isOpen) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
    className: "woocommerce-customer-effort-score",
    title: (0,external_wp_i18n_namespaceObject.__)('Please share your feedback', 'woocommerce'),
    onRequestClose: closeModal,
    shouldCloseOnClickOutside: false
  }, (0,external_wp_element_namespaceObject.createElement)(external_wc_experimental_namespaceObject.Text, {
    variant: "subtitle.small",
    as: "p",
    weight: "600",
    size: "14",
    lineHeight: "20px"
  }, label), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "woocommerce-customer-effort-score__selection"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.RadioControl, {
    selected: score.toString(10),
    options: options,
    onChange: onRadioControlChange
  })), (score === 1 || score === 2) && (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "woocommerce-customer-effort-score__comments"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextareaControl, {
    label: (0,external_wp_i18n_namespaceObject.__)('Comments (Optional)', 'woocommerce'),
    help: (0,external_wp_i18n_namespaceObject.__)('Your feedback will go to the WooCommerce development team', 'woocommerce'),
    value: comments,
    onChange: value => setComments(value),
    rows: 5
  })), showNoScoreMessage && (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "woocommerce-customer-effort-score__errors",
    role: "alert"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wc_experimental_namespaceObject.Text, {
    variant: "body",
    as: "p"
  }, (0,external_wp_i18n_namespaceObject.__)('Please provide feedback by selecting an option above.', 'woocommerce'))), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "woocommerce-customer-effort-score__buttons"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    isTertiary: true,
    onClick: closeModal,
    name: "cancel"
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel', 'woocommerce')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    isPrimary: true,
    onClick: sendScore,
    name: "send"
  }, (0,external_wp_i18n_namespaceObject.__)('Send', 'woocommerce'))));
}

CustomerFeedbackModal.propTypes = {
  recordScoreCallback: (prop_types_default()).func.isRequired,
  label: (prop_types_default()).string.isRequired
};
/* harmony default export */ var customer_feedback_modal = (CustomerFeedbackModal);
;// CONCATENATED MODULE: ../../packages/js/customer-effort-score/build-module/index.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const noop = () => {};
/**
 * Use `CustomerEffortScore` to gather a customer effort score.
 *
 * NOTE: This should live in @woocommerce/customer-effort-score to allow
 * reuse.
 *
 * @param {Object}   props                           Component props.
 * @param {Function} props.recordScoreCallback       Function to call when the score should be recorded.
 * @param {string}   props.label                     The label displayed in the modal.
 * @param {Function} props.createNotice              Create a notice (snackbar).
 * @param {Function} props.onNoticeShownCallback     Function to call when the notice is shown.
 * @param {Function} props.onNoticeDismissedCallback Function to call when the notice is dismissed.
 * @param {Function} props.onModalShownCallback      Function to call when the modal is shown.
 * @param {Object}   props.icon                      Icon (React component) to be shown on the notice.
 */


function CustomerEffortScore(_ref) {
  let {
    recordScoreCallback,
    label,
    createNotice,
    onNoticeShownCallback = noop,
    onNoticeDismissedCallback = noop,
    onModalShownCallback = noop,
    icon
  } = _ref;
  const [shouldCreateNotice, setShouldCreateNotice] = (0,external_wp_element_namespaceObject.useState)(true);
  const [visible, setVisible] = (0,external_wp_element_namespaceObject.useState)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!shouldCreateNotice) {
      return;
    }

    createNotice('success', label, {
      actions: [{
        label: (0,external_wp_i18n_namespaceObject.__)('Give feedback', 'woocommerce'),
        onClick: () => {
          setVisible(true);
          onModalShownCallback();
        }
      }],
      icon,
      explicitDismiss: true,
      onDismiss: onNoticeDismissedCallback
    });
    setShouldCreateNotice(false);
    onNoticeShownCallback();
  }, [shouldCreateNotice]);

  if (shouldCreateNotice) {
    return null;
  }

  if (!visible) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)(customer_feedback_modal, {
    label: label,
    recordScoreCallback: recordScoreCallback
  });
}
CustomerEffortScore.propTypes = {
  /**
   * The function to call to record the score.
   */
  recordScoreCallback: (prop_types_default()).func.isRequired,

  /**
   * The label displayed in the modal.
   */
  label: (prop_types_default()).string.isRequired,

  /**
   * Create a notice (snackbar).
   */
  createNotice: (prop_types_default()).func.isRequired,

  /**
   * The function to call when the notice is shown.
   */
  onNoticeShownCallback: (prop_types_default()).func,

  /**
   * The function to call when the notice is dismissed.
   */
  onNoticeDismissedCallback: (prop_types_default()).func,

  /**
   * The function to call when the modal is shown.
   */
  onModalShownCallback: (prop_types_default()).func,

  /**
   * Icon (React component) to be displayed.
   */
  icon: (prop_types_default()).element
};
/* harmony default export */ var build_module = ((0,external_wp_compose_namespaceObject.compose)((0,external_wp_data_namespaceObject.withDispatch)(dispatch => {
  const {
    createNotice
  } = dispatch('core/notices2');
  return {
    createNotice
  };
}))(CustomerEffortScore));
}();
(window.wc = window.wc || {}).customerEffortScore = __webpack_exports__;
/******/ })()
;