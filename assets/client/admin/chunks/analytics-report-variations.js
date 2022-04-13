"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[9456],{

/***/ 15732:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ variations; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(92694);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(63193);
// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(79548);
;// CONCATENATED MODULE: ./client/analytics/report/variations/config.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const VARIATIONS_REPORT_CHARTS_FILTER = 'woocommerce_admin_variations_report_charts';
const VARIATIONS_REPORT_FILTERS_FILTER = 'woocommerce_admin_variations_report_filters';
const VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_variations_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = (0,external_wp_data_.dispatch)(constants/* STORE_KEY */.Ls);
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Variations Report charts filter.
 *
 * @filter woocommerce_admin_variations_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = (0,external_wp_hooks_.applyFilters)(VARIATIONS_REPORT_CHARTS_FILTER, [{
  key: 'items_sold',
  label: (0,external_wp_i18n_.__)('Items sold', 'woocommerce'),
  order: 'desc',
  orderby: 'items_sold',
  type: 'number'
}, {
  key: 'net_revenue',
  label: (0,external_wp_i18n_.__)('Net sales', 'woocommerce'),
  order: 'desc',
  orderby: 'net_revenue',
  type: 'currency'
}, {
  key: 'orders_count',
  label: (0,external_wp_i18n_.__)('Orders', 'woocommerce'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Variations Report Filters.
 *
 * @filter woocommerce_admin_variations_report_filters
 * @param {Array.<filter>} filters Report filters.
 */

const filters = (0,external_wp_hooks_.applyFilters)(VARIATIONS_REPORT_FILTERS_FILTER, [{
  label: (0,external_wp_i18n_.__)('Show', 'woocommerce'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter-variations',
  showFilters: () => true,
  filters: [{
    label: (0,external_wp_i18n_.__)('All variations', 'woocommerce'),
    chartMode: 'item-comparison',
    value: 'all'
  }, {
    label: (0,external_wp_i18n_.__)('Single variation', 'woocommerce'),
    value: 'select_variation',
    subFilters: [{
      component: 'Search',
      value: 'single_variation',
      path: ['select_variation'],
      settings: {
        type: 'variations',
        param: 'variations',
        getLabels: async_requests/* getVariationLabels */.uC,
        labels: {
          placeholder: (0,external_wp_i18n_.__)('Type to search for a variation', 'woocommerce'),
          button: (0,external_wp_i18n_.__)('Single variation', 'woocommerce')
        }
      }
    }]
  }, {
    label: (0,external_wp_i18n_.__)('Comparison', 'woocommerce'),
    chartMode: 'item-comparison',
    value: 'compare-variations',
    settings: {
      type: 'variations',
      param: 'variations',
      getLabels: async_requests/* getVariationLabels */.uC,
      labels: {
        helpText: (0,external_wp_i18n_.__)('Check at least two variations below to compare', 'woocommerce'),
        placeholder: (0,external_wp_i18n_.__)('Search for variations to compare', 'woocommerce'),
        title: (0,external_wp_i18n_.__)('Compare Variations', 'woocommerce'),
        update: (0,external_wp_i18n_.__)('Compare', 'woocommerce')
      },
      onClick: addCesSurveyForAnalytics
    }
  }, {
    label: (0,external_wp_i18n_.__)('Advanced filters', 'woocommerce'),
    value: 'advanced'
  }]
}]);
/**
 * Variations Report Advanced Filters.
 *
 * @filter woocommerce_admin_variations_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,external_wp_hooks_.applyFilters)(VARIATIONS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: (0,external_wp_i18n_._x)('Variations match {{select /}} filters', 'A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce'),
  filters: {
    attribute: {
      allowMultiple: true,
      labels: {
        add: (0,external_wp_i18n_.__)('Attribute', 'woocommerce'),
        placeholder: (0,external_wp_i18n_.__)('Search attributes', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove attribute filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a product attribute filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,external_wp_i18n_.__)('{{title}}Attribute{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select attributes', 'woocommerce')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for product variations matching a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,external_wp_i18n_._x)('Is', 'product attribute', 'woocommerce')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for product variations that don\'t match a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,external_wp_i18n_._x)('Is Not', 'product attribute', 'woocommerce')
      }],
      input: {
        component: 'ProductAttribute'
      }
    },
    category: {
      labels: {
        add: (0,external_wp_i18n_.__)('Categories', 'woocommerce'),
        placeholder: (0,external_wp_i18n_.__)('Search categories', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove categories filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a category filter match', 'woocommerce'),

        /* translators: A sentence describing a Category filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,external_wp_i18n_.__)('{{title}}Category{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select categories', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to variations including a given category. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,external_wp_i18n_._x)('Includes', 'categories', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to variations excluding a given category. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,external_wp_i18n_._x)('Excludes', 'categories', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'categories',
        getLabels: async_requests/* getCategoryLabels */.YC
      }
    },
    product: {
      labels: {
        add: (0,external_wp_i18n_.__)('Products', 'woocommerce'),
        placeholder: (0,external_wp_i18n_.__)('Search products', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove products filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a product filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,external_wp_i18n_.__)('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select products', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,external_wp_i18n_._x)('Includes', 'products', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,external_wp_i18n_._x)('Excludes', 'products', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'variableProducts',
        getLabels: async_requests/* getProductLabels */.oC
      }
    }
  }
});
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(21314);
// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(23961);
// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(46439);
// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(13098);
// EXTERNAL MODULE: ./client/analytics/report/variations/table.js
var table = __webpack_require__(86046);
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(25619);
;// CONCATENATED MODULE: ./client/analytics/report/variations/index.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */









const getChartMeta = _ref => {
  let {
    query
  } = _ref;
  const isCompareView = query['filter-variations'] === 'compare-variations' && query.variations && query.variations.split(',').length > 1;
  return {
    compareObject: 'variations',
    itemsLabel: (0,external_wp_i18n_.__)('%d variations', 'woocommerce'),
    mode: isCompareView ? 'item-comparison' : 'time-comparison'
  };
};

const VariationsReport = props => {
  const {
    itemsLabel,
    mode
  } = getChartMeta(props);
  const {
    path,
    query,
    isError,
    isRequesting
  } = props;

  if (isError) {
    return (0,external_wp_element_.createElement)(report_error/* default */.Z, null);
  }

  const chartQuery = { ...query
  };

  if (mode === 'item-comparison') {
    chartQuery.segmentby = 'variation';
  }

  return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(report_filters/* default */.Z, {
    query: query,
    path: path,
    filters: filters,
    advancedFilters: advancedFilters,
    report: "variations"
  }), (0,external_wp_element_.createElement)(report_summary/* default */.Z, {
    mode: mode,
    charts: charts,
    endpoint: "variations",
    isRequesting: isRequesting,
    query: chartQuery,
    selectedChart: (0,get_selected_chart/* default */.Z)(query.chart, charts),
    filters: filters,
    advancedFilters: advancedFilters
  }), (0,external_wp_element_.createElement)(report_chart/* default */.Z, {
    charts: charts,
    mode: mode,
    filters: filters,
    advancedFilters: advancedFilters,
    endpoint: "variations",
    isRequesting: isRequesting,
    itemsLabel: itemsLabel,
    path: path,
    query: chartQuery,
    selectedChart: (0,get_selected_chart/* default */.Z)(chartQuery.chart, charts)
  }), (0,external_wp_element_.createElement)(table/* default */.Z, {
    isRequesting: isRequesting,
    query: query,
    filters: filters,
    advancedFilters: advancedFilters
  }));
};

VariationsReport.propTypes = {
  path: (prop_types_default()).string.isRequired,
  query: (prop_types_default()).object.isRequired
};
/* harmony default export */ var variations = (VariationsReport);

/***/ }),

/***/ 86046:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92694);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86020);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10431);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81595);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74617);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13732);
/* harmony import */ var _products_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42934);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83199);
/* harmony import */ var _lib_async_requests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63193);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4411);


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */






const EXPERIMENTAL_VARIATIONS_REPORT_TABLE_TITLE_FILTER = 'experimental_woocommerce_admin_variations_report_table_title';
const EXPERIMENTAL_VARIATIONS_REPORT_TABLE_SUMMARY_VARIATIONS_COUNT_LABEL_FILTER = 'experimental_woocommerce_admin_variations_report_table_summary_variations_count_label';
const manageStock = (0,_utils_admin_settings__WEBPACK_IMPORTED_MODULE_11__/* .getAdminSetting */ .O3)('manageStock', 'no');
const stockStatuses = (0,_utils_admin_settings__WEBPACK_IMPORTED_MODULE_11__/* .getAdminSetting */ .O3)('stockStatuses', {});

const getFullVariationName = rowData => (0,_lib_async_requests__WEBPACK_IMPORTED_MODULE_10__/* .getVariationName */ .V1)(rowData.extended_info || {});

class VariationsReportTable extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product / Variation title', 'woocommerce'),
      key: 'name',
      required: true,
      isLeftAligned: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('SKU', 'woocommerce'),
      key: 'sku',
      hiddenByDefault: true,
      isSortable: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Items sold', 'woocommerce'),
      key: 'items_sold',
      required: true,
      defaultSort: true,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Net sales', 'woocommerce'),
      screenReaderLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Net sales', 'woocommerce'),
      key: 'net_revenue',
      required: true,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Orders', 'woocommerce'),
      key: 'orders_count',
      isSortable: true,
      isNumeric: true
    }, manageStock === 'yes' ? {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status', 'woocommerce'),
      key: 'stock_status'
    } : null, manageStock === 'yes' ? {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Stock', 'woocommerce'),
      key: 'stock',
      isNumeric: true
    } : null].filter(Boolean);
  }

  getRowsContent() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const {
      query
    } = this.props;
    const persistedQuery = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__.getPersistedQuery)(query);
    const {
      formatAmount,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_3__.map)(data, row => {
      const {
        items_sold: itemsSold,
        net_revenue: netRevenue,
        orders_count: ordersCount,
        product_id: productId,
        variation_id: variationId
      } = row;
      const extendedInfo = row.extended_info || {};
      const {
        stock_status: stockStatus,
        stock_quantity: stockQuantity,
        low_stock_amount: lowStockAmount,
        deleted,
        sku
      } = extendedInfo;
      const name = getFullVariationName(row);
      const ordersLink = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_5__.getNewPath)(persistedQuery, '/analytics/orders', {
        filter: 'advanced',
        variation_includes: variationId
      });
      const editPostLink = (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_7__.getAdminLink)(`post.php?post=${productId}&action=edit`);
      return [{
        display: deleted ? name + ' ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(Deleted)', ' woocommerce-admin') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__.Link, {
          href: editPostLink,
          type: "wp-admin"
        }, name),
        value: name
      }, {
        display: sku,
        value: sku
      }, {
        display: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__.formatValue)(getCurrencyConfig(), 'number', itemsSold),
        value: itemsSold
      }, {
        display: formatAmount(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__.Link, {
          href: ordersLink,
          type: "wc-admin"
        }, ordersCount),
        value: ordersCount
      }, manageStock === 'yes' ? {
        display: (0,_products_utils__WEBPACK_IMPORTED_MODULE_12__/* .isLowStock */ .d)(stockStatus, stockQuantity, lowStockAmount) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__.Link, {
          href: editPostLink,
          type: "wp-admin"
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Low', 'Indication of a low quantity', 'woocommerce')) : stockStatuses[stockStatus],
        value: stockStatuses[stockStatus]
      } : null, manageStock === 'yes' ? {
        display: stockQuantity,
        value: stockQuantity
      } : null].filter(Boolean);
    });
  }

  getSummary(totals) {
    const {
      query
    } = this.props;
    const {
      variations_count: variationsCount = 0,
      items_sold: itemsSold = 0,
      net_revenue: netRevenue = 0,
      orders_count: ordersCount = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      /**
       * Experimental: Filter the label used for the number of variations in the report table summary.
       *
       * @filter experimental_woocommerce_admin_variations_report_table_summary_variations_count_label
       *
       * @param {string} label           Label used for the count.
       * @param {string} variationsCount Number of variations.
       * @param {Array}  query           Query parameters.
       */
      label: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(EXPERIMENTAL_VARIATIONS_REPORT_TABLE_SUMMARY_VARIATIONS_COUNT_LABEL_FILTER, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('variation sold', 'variations sold', variationsCount, 'woocommerce'), variationsCount, query),
      value: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__.formatValue)(currency, 'number', variationsCount)
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('item sold', 'items sold', itemsSold, 'woocommerce'),
      value: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__.formatValue)(currency, 'number', itemsSold)
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('net sales', 'woocommerce'),
      value: formatAmount(netRevenue)
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('orders', 'orders', ordersCount, 'woocommerce'),
      value: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__.formatValue)(currency, 'number', ordersCount)
    }];
  }

  render() {
    const {
      advancedFilters,
      baseSearchQuery,
      filters,
      isRequesting,
      query
    } = this.props;
    const labels = {
      helpText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Check at least two variations below to compare', 'woocommerce'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search by variation name or SKU', 'woocommerce')
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_report_table__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      baseSearchQuery: baseSearchQuery,
      compareBy: "variations",
      compareParam: "filter-variations",
      endpoint: "variations",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      isRequesting: isRequesting,
      itemIdField: "variation_id",
      labels: labels,
      query: query,
      getSummary: this.getSummary,
      summaryFields: ['variations_count', 'items_sold', 'net_revenue', 'orders_count'],
      tableQuery: {
        orderby: query.orderby || 'items_sold',
        order: query.order || 'desc',
        extended_info: true,
        product_includes: query.product_includes,
        variations: query.variations
      }
      /**
       * Experimental: Filter the title used for the report table.
       *
       * @filter experimental_woocommerce_admin_variations_report_table_title
       *
       * @param {string} title Title used for the report table.
       * @param {Array}  query Query parameters.
       */
      ,
      title: (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(EXPERIMENTAL_VARIATIONS_REPORT_TABLE_TITLE_FILTER, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Variations', 'woocommerce'), query),
      columnPrefsKey: "variations_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

VariationsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyContext */ .$;
/* harmony default export */ __webpack_exports__["Z"] = (VariationsReportTable);

/***/ })

}]);