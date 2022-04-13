"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[6824],{

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

/***/ 50427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94333);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7862);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52517);
/* harmony import */ var _lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21314);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41021);
/* harmony import */ var _components_report_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23961);
/* harmony import */ var _components_report_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46439);
/* harmony import */ var _components_report_summary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13098);
/* harmony import */ var _variations_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86046);
/* harmony import */ var _components_report_filters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25619);


/**
 * External dependencies
 */






/**
 * Internal dependencies
 */










class ProductsReport extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  getChartMeta() {
    const {
      query,
      isSingleProductView,
      isSingleProductVariable
    } = this.props;
    const isCompareView = query.filter === 'compare-products' && query.products && query.products.split(',').length > 1;
    const mode = isCompareView || isSingleProductView && isSingleProductVariable ? 'item-comparison' : 'time-comparison';
    const compareObject = isSingleProductView && isSingleProductVariable ? 'variations' : 'products';
    const label = isSingleProductView && isSingleProductVariable ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%d variations', 'woocommerce') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%d products', 'woocommerce');
    return {
      compareObject,
      itemsLabel: label,
      mode
    };
  }

  render() {
    const {
      compareObject,
      itemsLabel,
      mode
    } = this.getChartMeta();
    const {
      path,
      query,
      isError,
      isRequesting,
      isSingleProductVariable
    } = this.props;

    if (isError) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_report_error__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null);
    }

    const chartQuery = { ...query
    };

    if (mode === 'item-comparison') {
      chartQuery.segmentby = compareObject === 'products' ? 'product' : 'variation';
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_report_filters__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      query: query,
      path: path,
      filters: _config__WEBPACK_IMPORTED_MODULE_5__/* .filters */ .u8,
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_5__/* .advancedFilters */ .be,
      report: "products"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_report_summary__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
      mode: mode,
      charts: _config__WEBPACK_IMPORTED_MODULE_5__/* .charts */ .O3,
      endpoint: "products",
      isRequesting: isRequesting,
      query: chartQuery,
      selectedChart: (0,_lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(query.chart, _config__WEBPACK_IMPORTED_MODULE_5__/* .charts */ .O3),
      filters: _config__WEBPACK_IMPORTED_MODULE_5__/* .filters */ .u8,
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_5__/* .advancedFilters */ .be
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_report_chart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      charts: _config__WEBPACK_IMPORTED_MODULE_5__/* .charts */ .O3,
      mode: mode,
      filters: _config__WEBPACK_IMPORTED_MODULE_5__/* .filters */ .u8,
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_5__/* .advancedFilters */ .be,
      endpoint: "products",
      isRequesting: isRequesting,
      itemsLabel: itemsLabel,
      path: path,
      query: chartQuery,
      selectedChart: (0,_lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(chartQuery.chart, _config__WEBPACK_IMPORTED_MODULE_5__/* .charts */ .O3)
    }), isSingleProductVariable ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_variations_table__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      baseSearchQuery: {
        filter: 'single_product'
      },
      isRequesting: isRequesting,
      query: query,
      filters: _config__WEBPACK_IMPORTED_MODULE_5__/* .filters */ .u8,
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_5__/* .advancedFilters */ .be
    }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_table__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      isRequesting: isRequesting,
      query: query,
      filters: _config__WEBPACK_IMPORTED_MODULE_5__/* .filters */ .u8,
      advancedFilters: _config__WEBPACK_IMPORTED_MODULE_5__/* .advancedFilters */ .be
    }));
  }

}

ProductsReport.propTypes = {
  path: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string.isRequired),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((select, props) => {
  const {
    query,
    isRequesting
  } = props;
  const isSingleProductView = !query.search && query.products && query.products.split(',').length === 1;
  const {
    getItems,
    isResolving,
    getItemsError
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__.ITEMS_STORE_NAME);

  if (isRequesting) {
    return {
      query: { ...query
      },
      isSingleProductView,
      isRequesting
    };
  }

  if (isSingleProductView) {
    const productId = parseInt(query.products, 10);
    const includeArgs = {
      include: productId
    }; // TODO Look at similar usage to populate tags in the Search component.

    const products = getItems('products', includeArgs);
    const isVariable = products && products.get(productId) && products.get(productId).type === 'variable';
    const isProductsRequesting = isResolving('getItems', ['products', includeArgs]);
    const isProductsError = Boolean(getItemsError('products', includeArgs));
    return {
      query: { ...query,
        'is-variable': isVariable
      },
      isSingleProductView,
      isRequesting: isProductsRequesting,
      isSingleProductVariable: isVariable,
      isError: isProductsError
    };
  }

  return {
    query,
    isSingleProductView
  };
}))(ProductsReport));

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