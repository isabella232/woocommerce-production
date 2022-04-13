"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[185],{

/***/ 57636:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CategoryBreadcrumbs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55609);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86020);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10431);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */





class CategoryBreadcrumbs extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  getCategoryAncestorIds(category, categories) {
    const ancestors = [];
    let parent = category.parent;

    while (parent) {
      ancestors.unshift(parent);
      parent = categories.get(parent).parent;
    }

    return ancestors;
  }

  getCategoryAncestors(category, categories) {
    const ancestorIds = this.getCategoryAncestorIds(category, categories);

    if (!ancestorIds.length) {
      return;
    }

    if (ancestorIds.length === 1) {
      return categories.get((0,lodash__WEBPACK_IMPORTED_MODULE_1__.first)(ancestorIds)).name + ' › ';
    }

    if (ancestorIds.length === 2) {
      return categories.get((0,lodash__WEBPACK_IMPORTED_MODULE_1__.first)(ancestorIds)).name + ' › ' + categories.get((0,lodash__WEBPACK_IMPORTED_MODULE_1__.last)(ancestorIds)).name + ' › ';
    }

    return categories.get((0,lodash__WEBPACK_IMPORTED_MODULE_1__.first)(ancestorIds)).name + ' … ' + categories.get((0,lodash__WEBPACK_IMPORTED_MODULE_1__.last)(ancestorIds)).name + ' › ';
  }

  render() {
    const {
      categories,
      category,
      query
    } = this.props;
    const persistedQuery = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__.getPersistedQuery)(query);
    return category ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "woocommerce-table__breadcrumbs"
    }, this.getCategoryAncestors(category, categories), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__.Link, {
      href: (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__.getNewPath)(persistedQuery, '/analytics/categories', {
        filter: 'single_category',
        categories: category.id
      }),
      type: "wc-admin"
    }, category.name)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null);
  }

}

/***/ }),

/***/ 18882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ categories; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(92694);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(63193);
// EXTERNAL MODULE: ./client/customer-effort-score-tracks/data/constants.js
var constants = __webpack_require__(79548);
;// CONCATENATED MODULE: ./client/analytics/report/categories/config.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const CATEGORY_REPORT_CHARTS_FILTER = 'woocommerce_admin_categories_report_charts';
const CATEGORY_REPORT_FILTERS_FILTER = 'woocommerce_admin_categories_report_filters';
const CATEGORY_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_category_report_advanced_filters';
const {
  addCesSurveyForAnalytics
} = (0,external_wp_data_.dispatch)(constants/* STORE_KEY */.Ls);
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Category Report charts filter.
 *
 * @filter woocommerce_admin_categories_report_charts
 * @param {Array.<chart>} charts Category Report charts.
 */

const charts = (0,external_wp_hooks_.applyFilters)(CATEGORY_REPORT_CHARTS_FILTER, [{
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
 * Category Report Advanced Filters.
 *
 * @filter woocommerce_admin_category_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,external_wp_hooks_.applyFilters)(CATEGORY_REPORT_ADVANCED_FILTERS_FILTER, {
  filters: {},
  title: (0,external_wp_i18n_._x)('Categories match {{select /}} filters', 'A sentence describing filters for Categories. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce')
});
const filterValues = [{
  label: (0,external_wp_i18n_.__)('All categories', 'woocommerce'),
  value: 'all'
}, {
  label: (0,external_wp_i18n_.__)('Single category', 'woocommerce'),
  value: 'select_category',
  chartMode: 'item-comparison',
  subFilters: [{
    component: 'Search',
    value: 'single_category',
    chartMode: 'item-comparison',
    path: ['select_category'],
    settings: {
      type: 'categories',
      param: 'categories',
      getLabels: async_requests/* getCategoryLabels */.YC,
      labels: {
        placeholder: (0,external_wp_i18n_.__)('Type to search for a category', 'woocommerce'),
        button: (0,external_wp_i18n_.__)('Single Category', 'woocommerce')
      }
    }
  }]
}, {
  label: (0,external_wp_i18n_.__)('Comparison', 'woocommerce'),
  value: 'compare-categories',
  chartMode: 'item-comparison',
  settings: {
    type: 'categories',
    param: 'categories',
    getLabels: async_requests/* getCategoryLabels */.YC,
    labels: {
      helpText: (0,external_wp_i18n_.__)('Check at least two categories below to compare', 'woocommerce'),
      placeholder: (0,external_wp_i18n_.__)('Search for categories to compare', 'woocommerce'),
      title: (0,external_wp_i18n_.__)('Compare Categories', 'woocommerce'),
      update: (0,external_wp_i18n_.__)('Compare', 'woocommerce')
    },
    onClick: addCesSurveyForAnalytics
  }
}];

if (Object.keys(advancedFilters.filters).length) {
  filterValues.push({
    label: (0,external_wp_i18n_.__)('Advanced filters', 'woocommerce'),
    value: 'advanced'
  });
}
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Category Report Filters.
 *
 * @filter woocommerce_admin_categories_report_filters
 * @param {Array.<filter>} filters Report filters.
 */


const filters = (0,external_wp_hooks_.applyFilters)(CATEGORY_REPORT_FILTERS_FILTER, [{
  label: (0,external_wp_i18n_.__)('Show', 'woocommerce'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: filterValues
}]);
// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(94333);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(92819);
// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(10431);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(81595);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: ./client/analytics/report/categories/breadcrumbs.js
var breadcrumbs = __webpack_require__(57636);
// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(13732);
// EXTERNAL MODULE: ./client/lib/currency-context.js + 1 modules
var currency_context = __webpack_require__(83199);
;// CONCATENATED MODULE: ./client/analytics/report/categories/table.js


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */





class CategoriesReportTable extends external_wp_element_.Component {
  constructor(props) {
    super(props);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: (0,external_wp_i18n_.__)('Category', 'woocommerce'),
      key: 'category',
      required: true,
      isSortable: true,
      isLeftAligned: true
    }, {
      label: (0,external_wp_i18n_.__)('Items sold', 'woocommerce'),
      key: 'items_sold',
      required: true,
      defaultSort: true,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Net sales', 'woocommerce'),
      key: 'net_revenue',
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Products', 'woocommerce'),
      key: 'products_count',
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Orders', 'woocommerce'),
      key: 'orders_count',
      isSortable: true,
      isNumeric: true
    }];
  }

  getRowsContent(categoryStats) {
    const {
      render: renderCurrency,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    const {
      categories,
      query
    } = this.props;

    if (!categories) {
      return [];
    }

    const currency = getCurrencyConfig();
    return (0,external_lodash_.map)(categoryStats, categoryStat => {
      const {
        category_id: categoryId,
        items_sold: itemsSold,
        net_revenue: netRevenue,
        products_count: productsCount,
        orders_count: ordersCount
      } = categoryStat;
      const category = categories.get(categoryId);
      const persistedQuery = (0,external_wc_navigation_.getPersistedQuery)(query);
      return [{
        display: (0,external_wp_element_.createElement)(breadcrumbs/* default */.Z, {
          query: query,
          category: category,
          categories: categories
        }),
        value: category && category.name
      }, {
        display: (0,external_wc_number_.formatValue)(currency, 'number', itemsSold),
        value: itemsSold
      }, {
        display: renderCurrency(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: category && (0,external_wp_element_.createElement)(external_wc_components_.Link, {
          href: (0,external_wc_navigation_.getNewPath)(persistedQuery, '/analytics/categories', {
            filter: 'single_category',
            categories: category.id
          }),
          type: "wc-admin"
        }, (0,external_wc_number_.formatValue)(currency, 'number', productsCount)),
        value: productsCount
      }, {
        display: (0,external_wc_number_.formatValue)(currency, 'number', ordersCount),
        value: ordersCount
      }];
    });
  }

  getSummary(totals) {
    let totalResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const {
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
      label: (0,external_wp_i18n_._n)('Category', 'Categories', totalResults, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', totalResults)
    }, {
      label: (0,external_wp_i18n_._n)('Item sold', 'Items sold', itemsSold, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', itemsSold)
    }, {
      label: (0,external_wp_i18n_.__)('Net sales', 'woocommerce'),
      value: formatAmount(netRevenue)
    }, {
      label: (0,external_wp_i18n_._n)('Order', 'Orders', ordersCount, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', ordersCount)
    }];
  }

  render() {
    const {
      advancedFilters,
      filters,
      isRequesting,
      query
    } = this.props;
    const labels = {
      helpText: (0,external_wp_i18n_.__)('Check at least two categories below to compare', 'woocommerce'),
      placeholder: (0,external_wp_i18n_.__)('Search by category name', 'woocommerce')
    };
    return (0,external_wp_element_.createElement)(report_table/* default */.Z, {
      compareBy: "categories",
      endpoint: "categories",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['items_sold', 'net_revenue', 'orders_count'],
      isRequesting: isRequesting,
      itemIdField: "category_id",
      query: query,
      searchBy: "categories",
      labels: labels,
      tableQuery: {
        orderby: query.orderby || 'items_sold',
        order: query.order || 'desc',
        extended_info: true
      },
      title: (0,external_wp_i18n_.__)('Categories', 'woocommerce'),
      columnPrefsKey: "categories_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

CategoriesReportTable.contextType = currency_context/* CurrencyContext */.$;
/* harmony default export */ var table = ((0,external_wp_compose_.compose)((0,external_wp_data_.withSelect)((select, props) => {
  const {
    isRequesting,
    query
  } = props;

  if (isRequesting || query.search && !(query.categories && query.categories.length)) {
    return {};
  }

  const {
    getItems,
    getItemsError,
    isResolving
  } = select(external_wc_data_.ITEMS_STORE_NAME);
  const tableQuery = {
    per_page: -1
  };
  const categories = getItems('categories', tableQuery);
  const isCategoriesError = Boolean(getItemsError('categories', tableQuery));
  const isCategoriesRequesting = isResolving('getItems', ['categories', tableQuery]);
  return {
    categories,
    isError: isCategoriesError,
    isRequesting: isCategoriesRequesting
  };
}))(CategoriesReportTable));
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(21314);
// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(23961);
// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(13098);
// EXTERNAL MODULE: ./client/analytics/report/products/table.js
var products_table = __webpack_require__(41021);
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(25619);
;// CONCATENATED MODULE: ./client/analytics/report/categories/index.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */









class CategoriesReport extends external_wp_element_.Component {
  getChartMeta() {
    const {
      query
    } = this.props;
    const isCompareView = query.filter === 'compare-categories' && query.categories && query.categories.split(',').length > 1;
    const isSingleCategoryView = query.filter === 'single_category' && !!query.categories;
    const mode = isCompareView || isSingleCategoryView ? 'item-comparison' : 'time-comparison';
    const itemsLabel = isSingleCategoryView ? (0,external_wp_i18n_.__)('%d products', 'woocommerce') : (0,external_wp_i18n_.__)('%d categories', 'woocommerce');
    return {
      isSingleCategoryView,
      itemsLabel,
      mode
    };
  }

  render() {
    const {
      isRequesting,
      query,
      path
    } = this.props;
    const {
      mode,
      itemsLabel,
      isSingleCategoryView
    } = this.getChartMeta();
    const chartQuery = { ...query
    };

    if (mode === 'item-comparison') {
      chartQuery.segmentby = isSingleCategoryView ? 'product' : 'category';
    }

    return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(report_filters/* default */.Z, {
      query: query,
      path: path,
      filters: filters,
      advancedFilters: advancedFilters,
      report: "categories"
    }), (0,external_wp_element_.createElement)(report_summary/* default */.Z, {
      charts: charts,
      endpoint: "products",
      isRequesting: isRequesting,
      limitProperties: isSingleCategoryView ? ['products', 'categories'] : ['categories'],
      query: chartQuery,
      selectedChart: (0,get_selected_chart/* default */.Z)(query.chart, charts),
      filters: filters,
      advancedFilters: advancedFilters,
      report: "categories"
    }), (0,external_wp_element_.createElement)(report_chart/* default */.Z, {
      charts: charts,
      filters: filters,
      advancedFilters: advancedFilters,
      mode: mode,
      endpoint: "products",
      limitProperties: isSingleCategoryView ? ['products', 'categories'] : ['categories'],
      path: path,
      query: chartQuery,
      isRequesting: isRequesting,
      itemsLabel: itemsLabel,
      selectedChart: (0,get_selected_chart/* default */.Z)(query.chart, charts)
    }), isSingleCategoryView ? (0,external_wp_element_.createElement)(products_table/* default */.Z, {
      isRequesting: isRequesting,
      query: chartQuery,
      baseSearchQuery: {
        filter: 'single_category'
      },
      hideCompare: isSingleCategoryView,
      filters: filters,
      advancedFilters: advancedFilters
    }) : (0,external_wp_element_.createElement)(table, {
      isRequesting: isRequesting,
      query: query,
      filters: filters,
      advancedFilters: advancedFilters
    }));
  }

}

CategoriesReport.propTypes = {
  query: (prop_types_default()).object.isRequired,
  path: (prop_types_default()).string.isRequired
};
/* harmony default export */ var categories = (CategoriesReport);

/***/ }),

/***/ 41021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94333);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22629);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10431);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86020);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81595);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74617);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57636);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42934);
/* harmony import */ var _components_report_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13732);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83199);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4411);


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */







const manageStock = (0,_utils_admin_settings__WEBPACK_IMPORTED_MODULE_14__/* .getAdminSetting */ .O3)('manageStock', 'no');
const stockStatuses = (0,_utils_admin_settings__WEBPACK_IMPORTED_MODULE_14__/* .getAdminSetting */ .O3)('stockStatuses', {});

class ProductsReportTable extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product title', 'woocommerce'),
      key: 'product_name',
      required: true,
      isLeftAligned: true,
      isSortable: true
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
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Category', 'woocommerce'),
      key: 'product_cat'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Variations', 'woocommerce'),
      key: 'variations',
      isSortable: true
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
    const persistedQuery = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__.getPersistedQuery)(query);
    const {
      render: renderCurrency,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return (0,lodash__WEBPACK_IMPORTED_MODULE_5__.map)(data, row => {
      const {
        product_id: productId,
        items_sold: itemsSold,
        net_revenue: netRevenue,
        orders_count: ordersCount
      } = row;
      const extendedInfo = row.extended_info || {};
      const {
        category_ids: categoryIds,
        low_stock_amount: lowStockAmount,
        manage_stock: extendedInfoManageStock,
        sku,
        stock_status: extendedInfoStockStatus,
        stock_quantity: stockQuantity,
        variations = []
      } = extendedInfo;
      const name = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(extendedInfo.name);
      const ordersLink = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__.getNewPath)(persistedQuery, '/analytics/orders', {
        filter: 'advanced',
        product_includes: productId
      });
      const productDetailLink = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_6__.getNewPath)(persistedQuery, '/analytics/products', {
        filter: 'single_product',
        products: productId
      });
      const {
        categories
      } = this.props;
      const productCategories = categoryIds && categories && categoryIds.map(categoryId => categories.get(categoryId)).filter(Boolean) || [];
      const stockStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_15__/* .isLowStock */ .d)(extendedInfoStockStatus, stockQuantity, lowStockAmount) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__.Link, {
        href: (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_9__.getAdminLink)('post.php?action=edit&post=' + productId),
        type: "wp-admin"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Low', 'Indication of a low quantity', 'woocommerce')) : stockStatuses[extendedInfoStockStatus];
      return [{
        display: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__.Link, {
          href: productDetailLink,
          type: "wc-admin"
        }, name),
        value: name
      }, {
        display: sku,
        value: sku
      }, {
        display: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__.formatValue)(currency, 'number', itemsSold),
        value: itemsSold
      }, {
        display: renderCurrency(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__.Link, {
          href: ordersLink,
          type: "wc-admin"
        }, ordersCount),
        value: ordersCount
      }, {
        display: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "woocommerce-table__product-categories"
        }, productCategories[0] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
          category: productCategories[0],
          categories: categories
        }), productCategories.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__.Tag, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('+%d more', 'categories', 'woocommerce'), productCategories.length - 1),
          popoverContents: productCategories.map(category => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_categories_breadcrumbs__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            category: category,
            categories: categories,
            key: category.id,
            query: query
          }))
        })),
        value: productCategories.map(category => category.name).join(', ')
      }, {
        display: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__.formatValue)(currency, 'number', variations.length),
        value: variations.length
      }, manageStock === 'yes' ? {
        display: extendedInfoManageStock ? stockStatus : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('N/A', 'woocommerce'),
        value: extendedInfoManageStock ? stockStatuses[extendedInfoStockStatus] : null
      } : null, manageStock === 'yes' ? {
        display: extendedInfoManageStock ? (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__.formatValue)(currency, 'number', stockQuantity) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('N/A', 'woocommerce'),
        value: stockQuantity
      } : null].filter(Boolean);
    });
  }

  getSummary(totals) {
    const {
      products_count: productsCount = 0,
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('Product', 'Products', productsCount, 'woocommerce'),
      value: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__.formatValue)(currency, 'number', productsCount)
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('Item sold', 'Items sold', itemsSold, 'woocommerce'),
      value: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__.formatValue)(currency, 'number', itemsSold)
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Net sales', 'woocommerce'),
      value: formatAmount(netRevenue)
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)('Orders', 'Orders', ordersCount, 'woocommerce'),
      value: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_8__.formatValue)(currency, 'number', ordersCount)
    }];
  }

  render() {
    const {
      advancedFilters,
      baseSearchQuery,
      filters,
      hideCompare,
      isRequesting,
      query
    } = this.props;
    const labels = {
      helpText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Check at least two products below to compare', 'woocommerce'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search by product name or SKU', 'woocommerce')
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_report_table__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      compareBy: hideCompare ? undefined : 'products',
      endpoint: "products",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['products_count', 'items_sold', 'net_revenue', 'orders_count'],
      itemIdField: "product_id",
      isRequesting: isRequesting,
      labels: labels,
      query: query,
      searchBy: "products",
      baseSearchQuery: baseSearchQuery,
      tableQuery: {
        orderby: query.orderby || 'items_sold',
        order: query.order || 'desc',
        extended_info: true,
        segmentby: query.segmentby
      },
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Products', 'woocommerce'),
      columnPrefsKey: "products_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

ProductsReportTable.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_13__/* .CurrencyContext */ .$;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((select, props) => {
  const {
    query,
    isRequesting
  } = props;
  const {
    getItems,
    getItemsError,
    isResolving
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_10__.ITEMS_STORE_NAME);

  if (isRequesting || query.search && !(query.products && query.products.length)) {
    return {};
  }

  const tableQuery = {
    per_page: -1
  };
  const categories = getItems('categories', tableQuery);
  const isError = Boolean(getItemsError('categories', tableQuery));
  const isLoading = isResolving('getItems', ['categories', tableQuery]);
  return {
    categories,
    isError,
    isRequesting: isLoading
  };
}))(ProductsReportTable));

/***/ })

}]);