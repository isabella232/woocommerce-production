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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ build_module; },
  "getCurrencyData": function() { return /* binding */ getCurrencyData; }
});

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_namespaceObject = window["wp"]["htmlEntities"];
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wc","number"]
var external_wc_number_namespaceObject = window["wc"]["number"];
;// CONCATENATED MODULE: external ["wp","deprecated"]
var external_wp_deprecated_namespaceObject = window["wp"]["deprecated"];
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_namespaceObject);
;// CONCATENATED MODULE: ../../packages/js/currency/build-module/index.js
/**
 * External dependencies
 */





/**
 * @typedef {import('@woocommerce/number').NumberConfig} NumberConfig
 */

/**
 * @typedef {Object} CurrencyProps
 * @property {string} code           Currency ISO code.
 * @property {string} symbol         Symbol, can be multi-character.
 * @property {string} symbolPosition Where the symbol should be relative to the amount. One of `'left' | 'right' | 'left_space | 'right_space'`.
 * @typedef {NumberConfig & CurrencyProps} CurrencyConfig
 */

/**
 *
 * @param {CurrencyConfig} currencySetting
 * @return {Object} currency object
 */

const CurrencyFactory = function (currencySetting) {
  let currency;
  setCurrency(currencySetting);

  function setCurrency(setting) {
    const defaultCurrency = {
      code: 'USD',
      symbol: '$',
      symbolPosition: 'left',
      thousandSeparator: ',',
      decimalSeparator: '.',
      precision: 2
    };
    const config = { ...defaultCurrency,
      ...setting
    };
    currency = {
      code: config.code.toString(),
      symbol: config.symbol.toString(),
      symbolPosition: config.symbolPosition.toString(),
      decimalSeparator: config.decimalSeparator.toString(),
      priceFormat: getPriceFormat(config),
      thousandSeparator: config.thousandSeparator.toString(),
      precision: parseInt(config.precision, 10)
    };
  }

  function stripTags(str) {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || '';
  }
  /**
   * Formats money value.
   *
   * @param {number|string} number          number to format
   * @param {boolean}       [useCode=false] Set to `true` to use the currency code instead of the symbol.
   * @return {?string} A formatted string.
   */


  function formatAmount(number) {
    let useCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const formattedNumber = (0,external_wc_number_namespaceObject.numberFormat)(currency, number);

    if (formattedNumber === '') {
      return formattedNumber;
    }

    const {
      priceFormat,
      symbol,
      code
    } = currency; // eslint-disable-next-line @wordpress/valid-sprintf

    return (0,external_wp_i18n_namespaceObject.sprintf)(priceFormat, useCode ? code : symbol, formattedNumber);
  }
  /**
   * Formats money value.
   *
   * @deprecated
   * @param {number|string} number number to format
   * @return {?string} A formatted string.
   */


  function formatCurrency(number) {
    external_wp_deprecated_default()('Currency().formatCurrency', {
      version: '5.0.0',
      alternative: 'Currency().formatAmount',
      plugin: 'WooCommerce',
      hint: '`formatAmount` accepts the same arguments as formatCurrency'
    });
    return formatAmount(number);
  }
  /**
   * Get the default price format from a currency.
   *
   * @param {CurrencyConfig} config Currency configuration.
   * @return {string} Price format.
   */


  function getPriceFormat(config) {
    if (config.priceFormat) {
      return stripTags(config.priceFormat.toString());
    }

    switch (config.symbolPosition) {
      case 'left':
        return '%1$s%2$s';

      case 'right':
        return '%2$s%1$s';

      case 'left_space':
        return '%1$s %2$s';

      case 'right_space':
        return '%2$s %1$s';
    }

    return '%1$s%2$s';
  }
  /**
   * Get formatted data for a country from supplied locale and symbol info.
   *
   * @param {string} countryCode     Country code.
   * @param {Object} localeInfo      Locale info by country code.
   * @param {Object} currencySymbols Currency symbols by symbol code.
   * @return {CurrencyConfig | {}} Formatted currency data for country.
   */


  function getDataForCountry(countryCode) {
    let localeInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let currencySymbols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const countryInfo = localeInfo[countryCode] || {};
    const symbol = currencySymbols[countryInfo.currency_code];

    if (!symbol) {
      return {};
    }

    return {
      code: countryInfo.currency_code,
      symbol: (0,external_wp_htmlEntities_namespaceObject.decodeEntities)(symbol),
      symbolPosition: countryInfo.currency_pos,
      thousandSeparator: countryInfo.thousand_sep,
      decimalSeparator: countryInfo.decimal_sep,
      precision: countryInfo.num_decimals
    };
  }

  return {
    getCurrencyConfig: () => {
      return { ...currency
      };
    },
    getDataForCountry,
    setCurrency,
    formatAmount,
    formatCurrency,
    getPriceFormat,

    /**
     * Get the rounded decimal value of a number at the precision used for the current currency.
     * This is a work-around for fraction-cents, meant to be used like `wc_format_decimal`
     *
     * @param {number|string} number A floating point number (or integer), or string that converts to a number
     * @return {number} The original number rounded to a decimal point
     */
    formatDecimal(number) {
      if (typeof number !== 'number') {
        number = parseFloat(number);
      }

      if (Number.isNaN(number)) {
        return 0;
      }

      const {
        precision
      } = currency;
      return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
    },

    /**
     * Get the string representation of a floating point number to the precision used by the current currency.
     * This is different from `formatAmount` by not returning the currency symbol.
     *
     * @param {number|string} number A floating point number (or integer), or string that converts to a number
     * @return {string}               The original number rounded to a decimal point
     */
    formatDecimalString(number) {
      if (typeof number !== 'number') {
        number = parseFloat(number);
      }

      if (Number.isNaN(number)) {
        return '';
      }

      const {
        precision
      } = currency;
      return number.toFixed(precision);
    },

    /**
     * Render a currency for display in a component.
     *
     * @param {number|string} number A floating point number (or integer), or string that converts to a number
     * @return {Node|string} The number formatted as currency and rendered for display.
     */
    render(number) {
      if (typeof number !== 'number') {
        number = parseFloat(number);
      }

      if (number < 0) {
        return (0,external_wp_element_namespaceObject.createElement)("span", {
          className: "is-negative"
        }, formatAmount(number));
      }

      return formatAmount(number);
    }

  };
};

/* harmony default export */ var build_module = (CurrencyFactory);
/**
 * Returns currency data by country/region. Contains code, symbol, position, thousands separator, decimal separator, and precision.
 *
 * Dev Note: When adding new currencies below, the exchange rate array should also be updated in WooCommerce Admin's `business-details.js`.
 *
 * @deprecated
 * @return {Object} Curreny data.
 */

function getCurrencyData() {
  external_wp_deprecated_default()('getCurrencyData', {
    version: '3.1.0',
    alternative: 'CurrencyFactory.getDataForCountry',
    plugin: 'WooCommerce Admin',
    hint: 'Pass in the country, locale data, and symbol info to use getDataForCountry'
  }); // See https://github.com/woocommerce/woocommerce-admin/issues/3101.

  return {
    US: {
      code: 'USD',
      symbol: '$',
      symbolPosition: 'left',
      thousandSeparator: ',',
      decimalSeparator: '.',
      precision: 2
    },
    EU: {
      code: 'EUR',
      symbol: '€',
      symbolPosition: 'left',
      thousandSeparator: '.',
      decimalSeparator: ',',
      precision: 2
    },
    IN: {
      code: 'INR',
      symbol: '₹',
      symbolPosition: 'left',
      thousandSeparator: ',',
      decimalSeparator: '.',
      precision: 2
    },
    GB: {
      code: 'GBP',
      symbol: '£',
      symbolPosition: 'left',
      thousandSeparator: ',',
      decimalSeparator: '.',
      precision: 2
    },
    BR: {
      code: 'BRL',
      symbol: 'R$',
      symbolPosition: 'left',
      thousandSeparator: '.',
      decimalSeparator: ',',
      precision: 2
    },
    VN: {
      code: 'VND',
      symbol: '₫',
      symbolPosition: 'right',
      thousandSeparator: '.',
      decimalSeparator: ',',
      precision: 1
    },
    ID: {
      code: 'IDR',
      symbol: 'Rp',
      symbolPosition: 'left',
      thousandSeparator: '.',
      decimalSeparator: ',',
      precision: 0
    },
    BD: {
      code: 'BDT',
      symbol: '৳',
      symbolPosition: 'left',
      thousandSeparator: ',',
      decimalSeparator: '.',
      precision: 0
    },
    PK: {
      code: 'PKR',
      symbol: '₨',
      symbolPosition: 'left',
      thousandSeparator: ',',
      decimalSeparator: '.',
      precision: 2
    },
    RU: {
      code: 'RUB',
      symbol: '₽',
      symbolPosition: 'right',
      thousandSeparator: ' ',
      decimalSeparator: ',',
      precision: 2
    },
    TR: {
      code: 'TRY',
      symbol: '₺',
      symbolPosition: 'left',
      thousandSeparator: '.',
      decimalSeparator: ',',
      precision: 2
    },
    MX: {
      code: 'MXN',
      symbol: '$',
      symbolPosition: 'left',
      thousandSeparator: ',',
      decimalSeparator: '.',
      precision: 2
    },
    CA: {
      code: 'CAD',
      symbol: '$',
      symbolPosition: 'left',
      thousandSeparator: ',',
      decimalSeparator: '.',
      precision: 2
    }
  };
}
(window.wc = window.wc || {}).currency = __webpack_exports__;
/******/ })()
;