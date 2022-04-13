"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[2397],{

/***/ 46439:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7862);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86020);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */



/**
 * Component to render when there is an error in a report component due to data
 * not being loaded or being invalid.
 *
 * @param {Object} props             React props.
 * @param {string} [props.className] Additional class name to style the component.
 */

function ReportError(_ref) {
  let {
    className
  } = _ref;

  const title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There was an error getting your stats. Please try again.', 'woocommerce');

  const actionLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reload', 'woocommerce');

  const actionCallback = () => {
    // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
    window.location.reload();
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_2__.EmptyContent, {
    className: className,
    title: title,
    actionLabel: actionLabel,
    actionCallback: actionCallback
  });
}

ReportError.propTypes = {
  /**
   * Additional class name to style the component.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["Z"] = (ReportError);

/***/ }),

/***/ 85605:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3": function() { return /* binding */ charts; },
/* harmony export */   "be": function() { return /* binding */ advancedFilters; },
/* harmony export */   "u8": function() { return /* binding */ filters; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92694);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63193);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79548);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const COUPON_REPORT_CHARTS_FILTER = 'woocommerce_admin_coupons_report_charts';
const COUPON_REPORT_FILTERS_FILTER = 'woocommerce_admin_coupons_report_filters';
const COUPON_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_coupon_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_4__/* .STORE_KEY */ .Ls);
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Coupons Report charts filter.
 *
 * @filter woocommerce_admin_coupons_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(COUPON_REPORT_CHARTS_FILTER, [{
  key: 'orders_count',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Discounted orders', 'woocommerce'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}, {
  key: 'amount',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Amount', 'woocommerce'),
  order: 'desc',
  orderby: 'amount',
  type: 'currency'
}]);
/**
 * Coupons Report Advanced Filters.
 *
 * @filter woocommerce_admin_coupon_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(COUPON_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Coupons match {{select /}} filters', 'A sentence describing filters for Coupons. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce')
});
const filterValues = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All coupons', 'woocommerce'),
  value: 'all'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single coupon', 'woocommerce'),
  value: 'select_coupon',
  chartMode: 'item-comparison',
  subFilters: [{
    component: 'Search',
    value: 'single_coupon',
    chartMode: 'item-comparison',
    path: ['select_coupon'],
    settings: {
      type: 'coupons',
      param: 'coupons',
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__/* .getCouponLabels */ .hQ,
      labels: {
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type to search for a coupon', 'woocommerce'),
        button: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single Coupon', 'woocommerce')
      }
    }
  }]
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comparison', 'woocommerce'),
  value: 'compare-coupons',
  settings: {
    type: 'coupons',
    param: 'coupons',
    getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__/* .getCouponLabels */ .hQ,
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compare Coupon Codes', 'woocommerce'),
      update: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compare', 'woocommerce'),
      helpText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Check at least two coupon codes below to compare', 'woocommerce')
    },
    onClick: addCesSurveyForAnalytics
  }
}];

if (Object.keys(advancedFilters.filters).length) {
  filterValues.push({
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced filters', 'woocommerce'),
    value: 'advanced'
  });
}
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Coupons Report Filters.
 *
 * @filter woocommerce_admin_coupons_report_filters
 * @param {Array.<filter>} filters Report filters.
 */


const filters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(COUPON_REPORT_FILTERS_FILTER, [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show', 'woocommerce'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: filterValues
}]);

/***/ }),

/***/ 27392:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3": function() { return /* binding */ charts; },
/* harmony export */   "be": function() { return /* binding */ advancedFilters; },
/* harmony export */   "u8": function() { return /* binding */ filters; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92694);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63193);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const DOWLOADS_REPORT_CHARTS_FILTER = 'woocommerce_admin_downloads_report_charts';
const DOWLOADS_REPORT_FILTERS_FILTER = 'woocommerce_admin_downloads_report_filters';
const DOWLOADS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_downloads_report_advanced_filters';
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Downloads Report charts filter.
 *
 * @filter woocommerce_admin_downloads_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(DOWLOADS_REPORT_CHARTS_FILTER, [{
  key: 'download_count',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Downloads', 'woocommerce'),
  type: 'number'
}]);
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Downloads Report Filters.
 *
 * @filter woocommerce_admin_downloads_report_filters
 * @param {Array.<filter>} filters Report filters.
 */

const filters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(DOWLOADS_REPORT_FILTERS_FILTER, [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show', 'woocommerce'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All downloads', 'woocommerce'),
    value: 'all'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced filters', 'woocommerce'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

/**
 * Downloads Report Advanced Filters.
 *
 * @filter woocommerce_admin_downloads_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(DOWLOADS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Downloads match {{select /}} filters', 'A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg', 'woocommerce'),
  filters: {
    product: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove product filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a product filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select product', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to products including a given product(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Includes', 'products', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to products excluding a products(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Excludes', 'products', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__/* .getProductLabels */ .oC
      }
    },
    customer: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Username', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search customer username', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove customer username filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a customer username filter match', 'woocommerce'),

        /* translators: A sentence describing a customer username filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Username{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select customer username', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer usernames including a given username(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Includes', 'customer usernames', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer usernames excluding a given username(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Excludes', 'customer usernames', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'usernames',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__/* .getCustomerLabels */ .jk
      }
    },
    order: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order #', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search order number', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove order number filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a order number filter match', 'woocommerce'),

        /* translators: A sentence describing a order number filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Order #{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select order number', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to order numbers including a given order(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Includes', 'order numbers', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to order numbers excluding a given order(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Excludes', 'order numbers', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'orders',
        getLabels: async value => {
          const orderIds = value.split(',');
          return await orderIds.map(orderId => ({
            id: orderId,
            label: '#' + orderId
          }));
        }
      }
    },
    ip_address: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('IP Address', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search IP address', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove IP address filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select an IP address filter match', 'woocommerce'),

        /* translators: A sentence describing a order number filter. See screen shot for context: https://cloudup.com/ccxhyH2mEDg */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}IP Address{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select IP address', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to IP addresses including a given address(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Includes', 'IP addresses', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to IP addresses excluding a given address(s). Screenshot for context: https://cloudup.com/ccxhyH2mEDg */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Excludes', 'IP addresses', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'downloadIps',
        getLabels: async value => {
          const ips = value.split(',');
          return await ips.map(ip => {
            return {
              id: ip,
              label: ip
            };
          });
        }
      }
    }
  }
});
/*eslint-enable max-len*/

/***/ }),

/***/ 52517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3": function() { return /* binding */ charts; },
/* harmony export */   "be": function() { return /* binding */ advancedFilters; },
/* harmony export */   "u8": function() { return /* binding */ filters; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92694);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63193);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79548);
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const PRODUCTS_REPORT_CHARTS_FILTER = 'woocommerce_admin_products_report_charts';
const PRODUCTS_REPORT_FILTERS_FILTER = 'woocommerce_admin_products_report_filters';
const PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_products_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_4__/* .STORE_KEY */ .Ls);
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Products Report charts filter.
 *
 * @filter woocommerce_admin_products_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(PRODUCTS_REPORT_CHARTS_FILTER, [{
  key: 'items_sold',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Items sold', 'woocommerce'),
  order: 'desc',
  orderby: 'items_sold',
  type: 'number'
}, {
  key: 'net_revenue',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Net sales', 'woocommerce'),
  order: 'desc',
  orderby: 'net_revenue',
  type: 'currency'
}, {
  key: 'orders_count',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Orders', 'woocommerce'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
const filterConfig = {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show', 'woocommerce'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All products', 'woocommerce'),
    value: 'all'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single product', 'woocommerce'),
    value: 'select_product',
    chartMode: 'item-comparison',
    subFilters: [{
      component: 'Search',
      value: 'single_product',
      chartMode: 'item-comparison',
      path: ['select_product'],
      settings: {
        type: 'products',
        param: 'products',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__/* .getProductLabels */ .oC,
        labels: {
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type to search for a product', 'woocommerce'),
          button: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single product', 'woocommerce')
        }
      }
    }]
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comparison', 'woocommerce'),
    value: 'compare-products',
    chartMode: 'item-comparison',
    settings: {
      type: 'products',
      param: 'products',
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__/* .getProductLabels */ .oC,
      labels: {
        helpText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Check at least two products below to compare', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search for products to compare', 'woocommerce'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compare Products', 'woocommerce'),
        update: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compare', 'woocommerce')
      },
      onClick: addCesSurveyForAnalytics
    }
  }]
};
const variationsConfig = {
  showFilters: query => query.filter === 'single_product' && !!query.products && query['is-variable'],
  staticParams: ['filter', 'products', 'chartType', 'paged', 'per_page'],
  param: 'filter-variations',
  filters: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All variations', 'woocommerce'),
    chartMode: 'item-comparison',
    value: 'all'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single variation', 'woocommerce'),
    value: 'select_variation',
    subFilters: [{
      component: 'Search',
      value: 'single_variation',
      path: ['select_variation'],
      settings: {
        type: 'variations',
        param: 'variations',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__/* .getVariationLabels */ .uC,
        labels: {
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Type to search for a variation', 'woocommerce'),
          button: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Single variation', 'woocommerce')
        }
      }
    }]
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comparison', 'woocommerce'),
    chartMode: 'item-comparison',
    value: 'compare-variations',
    settings: {
      type: 'variations',
      param: 'variations',
      getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_3__/* .getVariationLabels */ .uC,
      labels: {
        helpText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Check at least two variations below to compare', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search for variations to compare', 'woocommerce'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compare Variations', 'woocommerce'),
        update: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compare', 'woocommerce')
      }
    }
  }]
};
/**
 * Produts Report Advanced Filters.
 *
 * @filter woocommerce_admin_products_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(PRODUCTS_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Products Match {{select /}} Filters', 'A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce')
});

if (Object.keys(advancedFilters.filters).length) {
  filterConfig.filters.push({
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced Filters', 'woocommerce'),
    value: 'advanced'
  });
  variationsConfig.filters.push({
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced Filters', 'woocommerce'),
    value: 'advanced'
  });
}
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Products Report Filters.
 *
 * @filter woocommerce_admin_products_report_filters
 * @param {Array.<filter>} filters Report filters.
 */


const filters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(PRODUCTS_REPORT_FILTERS_FILTER, [filterConfig, variationsConfig]);

/***/ }),

/***/ 66274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3": function() { return /* binding */ charts; },
/* harmony export */   "be": function() { return /* binding */ advancedFilters; },
/* harmony export */   "u8": function() { return /* binding */ filters; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92694);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External dependencies
 */


const REVENUE_REPORT_CHARTS_FILTER = 'woocommerce_admin_revenue_report_charts';
const REVENUE_REPORT_FILTERS_FILTER = 'woocommerce_admin_revenue_report_filters';
const REVENUE_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_revenue_report_advanced_filters';
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Revenue Report charts filter.
 *
 * @filter woocommerce_admin_revenue_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(REVENUE_REPORT_CHARTS_FILTER, [{
  key: 'gross_sales',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gross sales', 'woocommerce'),
  order: 'desc',
  orderby: 'gross_sales',
  type: 'currency',
  isReverseTrend: false
}, {
  key: 'refunds',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Returns', 'woocommerce'),
  order: 'desc',
  orderby: 'refunds',
  type: 'currency',
  isReverseTrend: true
}, {
  key: 'coupons',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coupons', 'woocommerce'),
  order: 'desc',
  orderby: 'coupons',
  type: 'currency',
  isReverseTrend: false
}, {
  key: 'net_revenue',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Net sales', 'woocommerce'),
  orderby: 'net_revenue',
  type: 'currency',
  isReverseTrend: false,
  labelTooltipText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full refunds are not deducted from tax or net sales totals', 'woocommerce')
}, {
  key: 'taxes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Taxes', 'woocommerce'),
  order: 'desc',
  orderby: 'taxes',
  type: 'currency',
  isReverseTrend: false,
  labelTooltipText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full refunds are not deducted from tax or net sales totals', 'woocommerce')
}, {
  key: 'shipping',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shipping', 'woocommerce'),
  orderby: 'shipping',
  type: 'currency',
  isReverseTrend: false
}, {
  key: 'total_sales',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Total sales', 'woocommerce'),
  order: 'desc',
  orderby: 'total_sales',
  type: 'currency',
  isReverseTrend: false
}]);
/**
 * Revenue Report Advanced Filters.
 *
 * @filter woocommerce_admin_revenue_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(REVENUE_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Revenue Matches {{select /}} Filters', 'A sentence describing filters for Revenue. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce')
});
const filterValues = [];

if (Object.keys(advancedFilters.filters).length) {
  filterValues.push({
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All Revenue', 'woocommerce'),
    value: 'all'
  });
  filterValues.push({
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced Filters', 'woocommerce'),
    value: 'advanced'
  });
}
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Revenue Report Filters.
 *
 * @filter woocommerce_admin_revenue_report_filters
 * @param {Array.<filter>} filters Report filters.
 */


const filters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(REVENUE_REPORT_FILTERS_FILTER, [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show', 'woocommerce'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => filterValues.length > 0,
  filters: filterValues
}]);

/***/ }),

/***/ 6651:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3": function() { return /* binding */ charts; },
/* harmony export */   "be": function() { return /* binding */ advancedFilters; },
/* harmony export */   "u8": function() { return /* binding */ filters; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92694);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63193);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61681);
/* harmony import */ var _customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79548);
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




const TAXES_REPORT_CHARTS_FILTER = 'woocommerce_admin_taxes_report_charts';
const TAXES_REPORT_FILTERS_FILTER = 'woocommerce_admin_taxes_report_filters';
const TAXES_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_taxes_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_customer_effort_score_tracks_data_constants__WEBPACK_IMPORTED_MODULE_6__/* .STORE_KEY */ .Ls);
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Taxes Report charts filter.
 *
 * @filter woocommerce_admin_taxes_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(TAXES_REPORT_CHARTS_FILTER, [{
  key: 'total_tax',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Total tax', 'woocommerce'),
  order: 'desc',
  orderby: 'total_tax',
  type: 'currency'
}, {
  key: 'order_tax',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order tax', 'woocommerce'),
  order: 'desc',
  orderby: 'order_tax',
  type: 'currency'
}, {
  key: 'shipping_tax',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shipping tax', 'woocommerce'),
  order: 'desc',
  orderby: 'shipping_tax',
  type: 'currency'
}, {
  key: 'orders_count',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Orders', 'woocommerce'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
/**
 * Taxes Report Advanced Filters.
 *
 * @filter woocommerce_admin_taxes_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(TAXES_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Taxes match {{select /}} filters', 'A sentence describing filters for Taxes. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce')
});
const filterValues = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All taxes', 'woocommerce'),
  value: 'all'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Comparison', 'woocommerce'),
  value: 'compare-taxes',
  chartMode: 'item-comparison',
  settings: {
    type: 'taxes',
    param: 'taxes',
    getLabels: (0,_lib_async_requests__WEBPACK_IMPORTED_MODULE_4__/* .getRequestByIdString */ .qc)(_woocommerce_data__WEBPACK_IMPORTED_MODULE_2__.NAMESPACE + '/taxes', tax => ({
      id: tax.id,
      key: tax.id,
      label: (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getTaxCode */ .I)(tax)
    })),
    labels: {
      helpText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Check at least two tax codes below to compare', 'woocommerce'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search for tax codes to compare', 'woocommerce'),
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compare Tax Codes', 'woocommerce'),
      update: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compare', 'woocommerce')
    },
    onClick: addCesSurveyForAnalytics
  }
}];

if (Object.keys(advancedFilters.filters).length) {
  filterValues.push({
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced filters', 'woocommerce'),
    value: 'advanced'
  });
}
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Coupons Report Filters.
 *
 * @filter woocommerce_admin_taxes_report_filters
 * @param {Array.<filter>} filters Report filters.
 */


const filters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(TAXES_REPORT_FILTERS_FILTER, [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show', 'woocommerce'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: filterValues
}]);

/***/ }),

/***/ 2445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dashboard_charts; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gridicons@3.4.0_react@17.0.2/node_modules/gridicons/dist/line-graph.js
var line_graph = __webpack_require__(73701);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gridicons@3.4.0_react@17.0.2/node_modules/gridicons/dist/stats-alt.js
var stats_alt = __webpack_require__(72197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(55609);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(81921);
// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(14599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(17538);
// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(10431);
// EXTERNAL MODULE: external ["wc","wcSettings"]
var external_wc_wcSettings_ = __webpack_require__(74617);
// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(14812);
// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(23961);
;// CONCATENATED MODULE: ./client/dashboard/dashboard-charts/block.js



/**
 * External dependencies
 */







/**
 * Internal dependencies
 */




class ChartBlock extends external_wp_element_.Component {
  constructor() {
    super(...arguments);

    (0,defineProperty/* default */.Z)(this, "handleChartClick", () => {
      const {
        selectedChart
      } = this.props;
      (0,external_wc_navigation_.getHistory)().push(this.getChartPath(selectedChart));
    });
  }

  getChartPath(chart) {
    return (0,external_wc_navigation_.getNewPath)({
      chart: chart.key
    }, '/analytics/' + chart.endpoint, (0,external_wc_navigation_.getPersistedQuery)());
  }

  render() {
    const {
      charts,
      endpoint,
      path,
      query,
      selectedChart,
      filters
    } = this.props;

    if (!selectedChart) {
      return null;
    }

    return (0,external_wp_element_.createElement)("div", {
      role: "presentation",
      className: "woocommerce-dashboard__chart-block-wrapper",
      onClick: this.handleChartClick
    }, (0,external_wp_element_.createElement)(external_wp_components_.Card, {
      className: "woocommerce-dashboard__chart-block"
    }, (0,external_wp_element_.createElement)(external_wp_components_.CardHeader, null, (0,external_wp_element_.createElement)(external_wc_experimental_.Text, {
      as: "h3",
      size: 16,
      weight: 600,
      color: "#23282d"
    }, selectedChart.label)), (0,external_wp_element_.createElement)(external_wp_components_.CardBody, {
      size: null
    }, (0,external_wp_element_.createElement)("a", {
      className: "screen-reader-text",
      href: (0,external_wc_wcSettings_.getAdminLink)(this.getChartPath(selectedChart))
    },
    /* translators: %s is the chart type */
    (0,external_wp_i18n_.sprintf)((0,external_wp_i18n_.__)('%s Report', 'woocommerce'), selectedChart.label)), (0,external_wp_element_.createElement)(report_chart/* default */.Z, {
      charts: charts,
      endpoint: endpoint,
      query: query,
      interactiveLegend: false,
      legendPosition: "bottom",
      path: path,
      selectedChart: selectedChart,
      showHeaderControls: false,
      filters: filters
    }))));
  }

}

ChartBlock.propTypes = {
  charts: (prop_types_default()).array,
  endpoint: (prop_types_default()).string.isRequired,
  path: (prop_types_default()).string.isRequired,
  query: (prop_types_default()).object.isRequired,
  selectedChart: (prop_types_default()).object.isRequired
};
/* harmony default export */ var block = (ChartBlock);
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(92694);
// EXTERNAL MODULE: ./client/analytics/report/orders/config.js
var config = __webpack_require__(7323);
// EXTERNAL MODULE: ./client/analytics/report/products/config.js
var products_config = __webpack_require__(52517);
// EXTERNAL MODULE: ./client/analytics/report/revenue/config.js
var revenue_config = __webpack_require__(66274);
// EXTERNAL MODULE: ./client/analytics/report/coupons/config.js
var coupons_config = __webpack_require__(85605);
// EXTERNAL MODULE: ./client/analytics/report/taxes/config.js
var taxes_config = __webpack_require__(6651);
// EXTERNAL MODULE: ./client/analytics/report/downloads/config.js
var downloads_config = __webpack_require__(27392);
;// CONCATENATED MODULE: ./client/dashboard/dashboard-charts/config.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







const DASHBOARD_CHARTS_FILTER = 'woocommerce_admin_dashboard_charts_filter';
const charts = {
  revenue: revenue_config/* charts */.O3,
  orders: config/* charts */.O3,
  products: products_config/* charts */.O3,
  coupons: coupons_config/* charts */.O3,
  taxes: taxes_config/* charts */.O3,
  downloads: downloads_config/* charts */.O3
};
const defaultCharts = [{
  label: (0,external_wp_i18n_.__)('Total sales', 'woocommerce'),
  report: 'revenue',
  key: 'total_sales'
}, {
  label: (0,external_wp_i18n_.__)('Net sales', 'woocommerce'),
  report: 'revenue',
  key: 'net_revenue'
}, {
  label: (0,external_wp_i18n_.__)('Orders', 'woocommerce'),
  report: 'orders',
  key: 'orders_count'
}, {
  label: (0,external_wp_i18n_.__)('Average order value', 'woocommerce'),
  report: 'orders',
  key: 'avg_order_value'
}, {
  label: (0,external_wp_i18n_.__)('Items sold', 'woocommerce'),
  report: 'products',
  key: 'items_sold'
}, {
  label: (0,external_wp_i18n_.__)('Returns', 'woocommerce'),
  report: 'revenue',
  key: 'refunds'
}, {
  label: (0,external_wp_i18n_.__)('Discounted orders', 'woocommerce'),
  report: 'coupons',
  key: 'orders_count'
}, {
  label: (0,external_wp_i18n_.__)('Gross discounted', 'woocommerce'),
  report: 'coupons',
  key: 'amount'
}, {
  label: (0,external_wp_i18n_.__)('Total tax', 'woocommerce'),
  report: 'taxes',
  key: 'total_tax'
}, {
  label: (0,external_wp_i18n_.__)('Order tax', 'woocommerce'),
  report: 'taxes',
  key: 'order_tax'
}, {
  label: (0,external_wp_i18n_.__)('Shipping tax', 'woocommerce'),
  report: 'taxes',
  key: 'shipping_tax'
}, {
  label: (0,external_wp_i18n_.__)('Shipping', 'woocommerce'),
  report: 'revenue',
  key: 'shipping'
}, {
  label: (0,external_wp_i18n_.__)('Downloads', 'woocommerce'),
  report: 'downloads',
  key: 'download_count'
}];
/**
 * Dashboard Charts section charts.
 *
 * @filter woocommerce_admin_dashboard_charts_filter
 * @param {Array.<Object>} charts Array of visible charts.
 */

const uniqCharts = (0,external_wp_hooks_.applyFilters)(DASHBOARD_CHARTS_FILTER, defaultCharts.map(chartDef => ({ ...charts[chartDef.report].find(chart => chart.key === chartDef.key),
  label: chartDef.label,
  endpoint: chartDef.report
})));
;// CONCATENATED MODULE: ./client/dashboard/dashboard-charts/index.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





const renderChartToggles = _ref => {
  let {
    hiddenBlocks,
    onToggleHiddenBlock
  } = _ref;
  return uniqCharts.map(chart => {
    const key = chart.endpoint + '_' + chart.key;
    const checked = !hiddenBlocks.includes(key);
    return (0,external_wp_element_.createElement)(external_wc_components_.MenuItem, {
      checked: checked,
      isCheckbox: true,
      isClickable: true,
      key: chart.endpoint + '_' + chart.key,
      onInvoke: () => {
        onToggleHiddenBlock(key)();
        (0,external_wc_tracks_.recordEvent)('dash_charts_chart_toggle', {
          status: checked ? 'off' : 'on',
          key
        });
      }
    }, chart.label);
  });
};

const renderIntervalSelector = _ref2 => {
  let {
    chartInterval,
    setInterval,
    query,
    defaultDateRange
  } = _ref2;
  const allowedIntervals = (0,external_wc_date_.getAllowedIntervalsForQuery)(query, defaultDateRange);

  if (!allowedIntervals || allowedIntervals.length < 1) {
    return null;
  }

  const intervalLabels = {
    hour: (0,external_wp_i18n_.__)('By hour', 'woocommerce'),
    day: (0,external_wp_i18n_.__)('By day', 'woocommerce'),
    week: (0,external_wp_i18n_.__)('By week', 'woocommerce'),
    month: (0,external_wp_i18n_.__)('By month', 'woocommerce'),
    quarter: (0,external_wp_i18n_.__)('By quarter', 'woocommerce'),
    year: (0,external_wp_i18n_.__)('By year', 'woocommerce')
  };
  return (0,external_wp_element_.createElement)(external_wp_components_.SelectControl, {
    className: "woocommerce-chart__interval-select",
    value: chartInterval,
    options: allowedIntervals.map(allowedInterval => ({
      value: allowedInterval,
      label: intervalLabels[allowedInterval]
    })),
    "aria-label": "Chart period",
    onChange: setInterval
  });
};

const renderChartBlocks = _ref3 => {
  let {
    hiddenBlocks,
    path,
    query,
    filters
  } = _ref3;
  // Reduce the API response to only the necessary stat fields
  // by supplying all charts common to each endpoint.
  const chartsByEndpoint = uniqCharts.reduce((byEndpoint, chart) => {
    if (typeof byEndpoint[chart.endpoint] === 'undefined') {
      byEndpoint[chart.endpoint] = [];
    }

    byEndpoint[chart.endpoint].push(chart);
    return byEndpoint;
  }, {});
  return (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-dashboard__columns"
  }, uniqCharts.map(chart => {
    return hiddenBlocks.includes(chart.endpoint + '_' + chart.key) ? null : (0,external_wp_element_.createElement)(block, {
      charts: chartsByEndpoint[chart.endpoint],
      endpoint: chart.endpoint,
      key: chart.endpoint + '_' + chart.key,
      path: path,
      query: query,
      selectedChart: chart,
      filters: filters
    });
  }));
};

const DashboardCharts = props => {
  const {
    controls: Controls,
    hiddenBlocks,
    isFirst,
    isLast,
    onMove,
    onRemove,
    onTitleBlur,
    onTitleChange,
    onToggleHiddenBlock,
    path,
    title,
    titleInput,
    filters,
    defaultDateRange
  } = props;
  const {
    updateUserPreferences,
    ...userPrefs
  } = (0,external_wc_data_.useUserPreferences)();
  const [chartType, setChartType] = (0,external_wp_element_.useState)(userPrefs.dashboard_chart_type || 'line');
  const [chartInterval, setChartInterval] = (0,external_wp_element_.useState)(userPrefs.dashboard_chart_interval || 'day');
  const query = { ...props.query,
    chartType,
    interval: chartInterval
  };

  const handleTypeToggle = type => {
    return () => {
      setChartType(type);
      const userDataFields = {
        dashboard_chart_type: type
      };
      updateUserPreferences(userDataFields);
      (0,external_wc_tracks_.recordEvent)('dash_charts_type_toggle', {
        chart_type: type
      });
    };
  };

  const renderMenu = () => (0,external_wp_element_.createElement)(external_wc_components_.EllipsisMenu, {
    label: (0,external_wp_i18n_.__)('Choose which charts to display', 'woocommerce'),
    renderContent: _ref4 => {
      let {
        onToggle
      } = _ref4;
      return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(external_wc_components_.MenuTitle, null, (0,external_wp_i18n_.__)('Charts', 'woocommerce')), renderChartToggles({
        hiddenBlocks,
        onToggleHiddenBlock
      }), (0,external_wp_element_.createElement)(Controls, {
        onToggle: onToggle,
        onMove: onMove,
        onRemove: onRemove,
        isFirst: isFirst,
        isLast: isLast,
        onTitleBlur: onTitleBlur,
        onTitleChange: onTitleChange,
        titleInput: titleInput
      }));
    }
  });

  const setInterval = interval => {
    setChartInterval(interval);
    const userDataFields = {
      dashboard_chart_interval: interval
    };
    updateUserPreferences(userDataFields);
    (0,external_wc_tracks_.recordEvent)('dash_charts_interval', {
      interval
    });
  };

  return (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-dashboard__dashboard-charts"
  }, (0,external_wp_element_.createElement)(external_wc_components_.SectionHeader, {
    title: title || (0,external_wp_i18n_.__)('Charts', 'woocommerce'),
    menu: renderMenu(),
    className: 'has-interval-select'
  }, renderIntervalSelector({
    chartInterval,
    setInterval,
    query,
    defaultDateRange
  }), (0,external_wp_element_.createElement)(external_wp_components_.NavigableMenu, {
    className: "woocommerce-chart__types",
    orientation: "horizontal",
    role: "menubar"
  }, (0,external_wp_element_.createElement)(external_wp_components_.Button, {
    className: classnames_default()('woocommerce-chart__type-button', {
      'woocommerce-chart__type-button-selected': !query.chartType || query.chartType === 'line'
    }),
    title: (0,external_wp_i18n_.__)('Line chart', 'woocommerce'),
    "aria-checked": query.chartType === 'line',
    role: "menuitemradio",
    tabIndex: query.chartType === 'line' ? 0 : -1,
    onClick: handleTypeToggle('line')
  }, (0,external_wp_element_.createElement)(line_graph/* default */.Z, null)), (0,external_wp_element_.createElement)(external_wp_components_.Button, {
    className: classnames_default()('woocommerce-chart__type-button', {
      'woocommerce-chart__type-button-selected': query.chartType === 'bar'
    }),
    title: (0,external_wp_i18n_.__)('Bar chart', 'woocommerce'),
    "aria-checked": query.chartType === 'bar',
    role: "menuitemradio",
    tabIndex: query.chartType === 'bar' ? 0 : -1,
    onClick: handleTypeToggle('bar')
  }, (0,external_wp_element_.createElement)(stats_alt/* default */.Z, null)))), renderChartBlocks({
    hiddenBlocks,
    path,
    query,
    filters
  }));
};

DashboardCharts.propTypes = {
  path: (prop_types_default()).string.isRequired,
  query: (prop_types_default()).object.isRequired,
  defaultDateRange: (prop_types_default()).string.isRequired
};
/* harmony default export */ var dashboard_charts = (DashboardCharts);

/***/ }),

/***/ 73701:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.Z=_default;var _react=_interopRequireDefault(__webpack_require__(99196)),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-line-graph",f,!1,!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M3 19h18v2H3zm3-3c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3L8.8 10H9c.5 0 1-.2 1.3-.5l2.7 1.4v.1c0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-.9-.5-1.3L17.8 7h.2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .5.2 1 .5 1.3L15.2 9H15c-.5 0-1 .2-1.3.5L11 8.2V8c0-1.1-.9-2-2-2s-2 .9-2 2c0 .5.2 1 .5 1.3L6.2 12H6c-1.1 0-2 .9-2 2s.9 2 2 2z"})))}


/***/ }),

/***/ 72197:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.Z=_default;var _react=_interopRequireDefault(__webpack_require__(99196)),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-stats-alt",f,!1,!1,!!function isModulo18(a){return 0==a%18}(c)&&"needs-offset-y"].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-7h-4v14h4V3zm6 3h-4v11h4V6z"})))}


/***/ }),

/***/ 17538:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ })

}]);