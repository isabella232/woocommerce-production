"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[5487],{

/***/ 23961:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ report_chart; }
});

// UNUSED EXPORTS: ReportChart

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(94333);
// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__(69771);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(92819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(81921);
// EXTERNAL MODULE: ./client/lib/currency-context.js + 1 modules
var currency_context = __webpack_require__(83199);
// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(46439);
// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(10431);
;// CONCATENATED MODULE: ./client/analytics/components/report-chart/utils.js
/**
 * External dependencies
 */



const DEFAULT_FILTER = 'all';
function getSelectedFilter(filters, query) {
  let selectedFilterArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!filters || filters.length === 0) {
    return null;
  }

  const clonedFilters = filters.slice(0);
  const filterConfig = clonedFilters.pop();

  if (filterConfig.showFilters(query, selectedFilterArgs)) {
    const allFilters = (0,external_wc_navigation_.flattenFilters)(filterConfig.filters);
    const value = query[filterConfig.param] || filterConfig.defaultValue || DEFAULT_FILTER;
    return (0,external_lodash_.find)(allFilters, {
      value
    });
  }

  return getSelectedFilter(clonedFilters, query, selectedFilterArgs);
}
function getChartMode(selectedFilter, query) {
  if (selectedFilter && query) {
    const selectedFilterParam = (0,external_lodash_.get)(selectedFilter, ['settings', 'param']);

    if (!selectedFilterParam || Object.keys(query).includes(selectedFilterParam)) {
      return (0,external_lodash_.get)(selectedFilter, ['chartMode']);
    }
  }

  return null;
}
function createDateFormatter(format) {
  return date => (0,external_wp_date_.format)(format, date);
}
;// CONCATENATED MODULE: ./client/analytics/components/report-chart/index.js


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




/**
 * Component that renders the chart in reports.
 */

class ReportChart extends external_wp_element_.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.isRequesting !== this.props.isRequesting || nextProps.primaryData.isRequesting !== this.props.primaryData.isRequesting || nextProps.secondaryData.isRequesting !== this.props.secondaryData.isRequesting || !(0,external_lodash_.isEqual)(nextProps.query, this.props.query)) {
      return true;
    }

    return false;
  }

  getItemChartData() {
    const {
      primaryData,
      selectedChart
    } = this.props;
    const chartData = primaryData.data.intervals.map(function (interval) {
      const intervalData = {};
      interval.subtotals.segments.forEach(function (segment) {
        if (segment.segment_label) {
          const label = intervalData[segment.segment_label] ? segment.segment_label + ' (#' + segment.segment_id + ')' : segment.segment_label;
          intervalData[segment.segment_id] = {
            label,
            value: segment.subtotals[selectedChart.key] || 0
          };
        }
      });
      return {
        date: (0,external_wp_date_.format)('Y-m-d\\TH:i:s', interval.date_start),
        ...intervalData
      };
    });
    return chartData;
  }

  getTimeChartData() {
    const {
      query,
      primaryData,
      secondaryData,
      selectedChart,
      defaultDateRange
    } = this.props;
    const currentInterval = (0,external_wc_date_.getIntervalForQuery)(query, defaultDateRange);
    const {
      primary,
      secondary
    } = (0,external_wc_date_.getCurrentDates)(query, defaultDateRange);
    const chartData = primaryData.data.intervals.map(function (interval, index) {
      const secondaryDate = (0,external_wc_date_.getPreviousDate)(interval.date_start, primary.after, secondary.after, query.compare, currentInterval);
      const secondaryInterval = secondaryData.data.intervals[index];
      return {
        date: (0,external_wp_date_.format)('Y-m-d\\TH:i:s', interval.date_start),
        primary: {
          label: `${primary.label} (${primary.range})`,
          labelDate: interval.date_start,
          value: interval.subtotals[selectedChart.key] || 0
        },
        secondary: {
          label: `${secondary.label} (${secondary.range})`,
          labelDate: secondaryDate.format('YYYY-MM-DD HH:mm:ss'),
          value: secondaryInterval && secondaryInterval.subtotals[selectedChart.key] || 0
        }
      };
    });
    return chartData;
  }

  getTimeChartTotals() {
    const {
      primaryData,
      secondaryData,
      selectedChart
    } = this.props;
    return {
      primary: (0,external_lodash_.get)(primaryData, ['data', 'totals', selectedChart.key], null),
      secondary: (0,external_lodash_.get)(secondaryData, ['data', 'totals', selectedChart.key], null)
    };
  }

  renderChart(mode, isRequesting, chartData, legendTotals) {
    const {
      emptySearchResults,
      filterParam,
      interactiveLegend,
      itemsLabel,
      legendPosition,
      path,
      query,
      selectedChart,
      showHeaderControls,
      primaryData,
      defaultDateRange
    } = this.props;
    const currentInterval = (0,external_wc_date_.getIntervalForQuery)(query, defaultDateRange);
    const allowedIntervals = (0,external_wc_date_.getAllowedIntervalsForQuery)(query, defaultDateRange);
    const formats = (0,external_wc_date_.getDateFormatsForInterval)(currentInterval, primaryData.data.intervals.length, {
      type: 'php'
    });
    const emptyMessage = emptySearchResults ? (0,external_wp_i18n_.__)('No data for the current search', 'woocommerce') : (0,external_wp_i18n_.__)('No data for the selected date range', 'woocommerce');
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    return (0,external_wp_element_.createElement)(external_wc_components_.Chart, {
      allowedIntervals: allowedIntervals,
      data: chartData,
      dateParser: '%Y-%m-%dT%H:%M:%S',
      emptyMessage: emptyMessage,
      filterParam: filterParam,
      interactiveLegend: interactiveLegend,
      interval: currentInterval,
      isRequesting: isRequesting,
      itemsLabel: itemsLabel,
      legendPosition: legendPosition,
      legendTotals: legendTotals,
      mode: mode,
      path: path,
      query: query,
      screenReaderFormat: createDateFormatter(formats.screenReaderFormat),
      showHeaderControls: showHeaderControls,
      title: selectedChart.label,
      tooltipLabelFormat: createDateFormatter(formats.tooltipLabelFormat),
      tooltipTitle: mode === 'time-comparison' && selectedChart.label || null,
      tooltipValueFormat: (0,external_wc_data_.getTooltipValueFormat)(selectedChart.type, formatAmount),
      chartType: (0,external_wc_date_.getChartTypeForQuery)(query),
      valueType: selectedChart.type,
      xFormat: createDateFormatter(formats.xFormat),
      x2Format: createDateFormatter(formats.x2Format),
      currency: getCurrencyConfig()
    });
  }

  renderItemComparison() {
    const {
      isRequesting,
      primaryData
    } = this.props;

    if (primaryData.isError) {
      return (0,external_wp_element_.createElement)(report_error/* default */.Z, null);
    }

    const isChartRequesting = isRequesting || primaryData.isRequesting;
    const chartData = this.getItemChartData();
    return this.renderChart('item-comparison', isChartRequesting, chartData);
  }

  renderTimeComparison() {
    const {
      isRequesting,
      primaryData,
      secondaryData
    } = this.props;

    if (!primaryData || primaryData.isError || secondaryData.isError) {
      return (0,external_wp_element_.createElement)(report_error/* default */.Z, null);
    }

    const isChartRequesting = isRequesting || primaryData.isRequesting || secondaryData.isRequesting;
    const chartData = this.getTimeChartData();
    const legendTotals = this.getTimeChartTotals();
    return this.renderChart('time-comparison', isChartRequesting, chartData, legendTotals);
  }

  render() {
    const {
      mode
    } = this.props;

    if (mode === 'item-comparison') {
      return this.renderItemComparison();
    }

    return this.renderTimeComparison();
  }

}
ReportChart.contextType = currency_context/* CurrencyContext */.$;
ReportChart.propTypes = {
  /**
   * Filters available for that report.
   */
  filters: (prop_types_default()).array,

  /**
   * Whether there is an API call running.
   */
  isRequesting: (prop_types_default()).bool,

  /**
   * Label describing the legend items.
   */
  itemsLabel: (prop_types_default()).string,

  /**
   * Allows specifying properties different from the `endpoint` that will be used
   * to limit the items when there is an active search.
   */
  limitProperties: (prop_types_default()).array,

  /**
   * `items-comparison` (default) or `time-comparison`, this is used to generate correct
   * ARIA properties.
   */
  mode: (prop_types_default()).string,

  /**
   * Current path
   */
  path: (prop_types_default()).string.isRequired,

  /**
   * Primary data to display in the chart.
   */
  primaryData: (prop_types_default()).object,

  /**
   * The query string represented in object form.
   */
  query: (prop_types_default()).object.isRequired,

  /**
   * Secondary data to display in the chart.
   */
  secondaryData: (prop_types_default()).object,

  /**
   * Properties of the selected chart.
   */
  selectedChart: prop_types_default().shape({
    /**
     * Key of the selected chart.
     */
    key: (prop_types_default()).string.isRequired,

    /**
     * Chart label.
     */
    label: (prop_types_default()).string.isRequired,

    /**
     * Order query argument.
     */
    order: prop_types_default().oneOf(['asc', 'desc']),

    /**
     * Order by query argument.
     */
    orderby: (prop_types_default()).string,

    /**
     * Number type for formatting.
     */
    type: prop_types_default().oneOf(['average', 'number', 'currency']).isRequired
  }).isRequired
};
ReportChart.defaultProps = {
  isRequesting: false,
  primaryData: {
    data: {
      intervals: []
    },
    isError: false,
    isRequesting: false
  },
  secondaryData: {
    data: {
      intervals: []
    },
    isError: false,
    isRequesting: false
  }
};
/* harmony default export */ var report_chart = ((0,external_wp_compose_.compose)((0,external_wp_data_.withSelect)((select, props) => {
  const {
    charts,
    endpoint,
    filters,
    isRequesting,
    limitProperties,
    query,
    advancedFilters
  } = props;
  const limitBy = limitProperties || [endpoint];
  const selectedFilter = getSelectedFilter(filters, query);
  const filterParam = (0,external_lodash_.get)(selectedFilter, ['settings', 'param']);
  const chartMode = props.mode || getChartMode(selectedFilter, query) || 'time-comparison';
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_.SETTINGS_STORE_NAME).getSetting('wc_admin', 'wcAdminSettings');
  /* eslint @wordpress/no-unused-vars-before-return: "off" */

  const reportStoreSelector = select(external_wc_data_.REPORTS_STORE_NAME);
  const newProps = {
    mode: chartMode,
    filterParam,
    defaultDateRange
  };

  if (isRequesting) {
    return newProps;
  }

  const hasLimitByParam = limitBy.some(item => query[item] && query[item].length);

  if (query.search && !hasLimitByParam) {
    return { ...newProps,
      emptySearchResults: true
    };
  }

  const fields = charts && charts.map(chart => chart.key);
  const primaryData = (0,external_wc_data_.getReportChartData)({
    endpoint,
    dataType: 'primary',
    query,
    selector: reportStoreSelector,
    limitBy,
    filters,
    advancedFilters,
    defaultDateRange,
    fields
  });

  if (chartMode === 'item-comparison') {
    return { ...newProps,
      primaryData
    };
  }

  const secondaryData = (0,external_wc_data_.getReportChartData)({
    endpoint,
    dataType: 'secondary',
    query,
    selector: reportStoreSelector,
    limitBy,
    filters,
    advancedFilters,
    defaultDateRange,
    fields
  });
  return { ...newProps,
    primaryData,
    secondaryData
  };
}))(ReportChart));

/***/ }),

/***/ 7323:
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
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4411);
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const ORDERS_REPORT_CHARTS_FILTER = 'woocommerce_admin_orders_report_charts';
const ORDERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_orders_report_filters';
const ORDERS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_orders_report_advanced_filters';
/**
 * @typedef {import('../index.js').chart} chart
 */

/**
 * Orders Report charts filter.
 *
 * @filter woocommerce_admin_orders_report_charts
 * @param {Array.<chart>} charts Report charts.
 */

const charts = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(ORDERS_REPORT_CHARTS_FILTER, [{
  key: 'orders_count',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Orders', 'woocommerce'),
  type: 'number'
}, {
  key: 'net_revenue',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Net sales', 'woocommerce'),
  order: 'desc',
  orderby: 'net_total',
  type: 'currency'
}, {
  key: 'avg_order_value',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Average order value', 'woocommerce'),
  type: 'currency'
}, {
  key: 'avg_items_per_order',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Average items per order', 'woocommerce'),
  order: 'desc',
  orderby: 'num_items_sold',
  type: 'average'
}]);
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Orders Report Filters.
 *
 * @filter woocommerce_admin_orders_report_filters
 * @param {Array.<filter>} filters Report filters.
 */

const filters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(ORDERS_REPORT_FILTERS_FILTER, [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show', 'woocommerce'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All orders', 'woocommerce'),
    value: 'all'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced filters', 'woocommerce'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

/**
 * Orders Report Advanced Filters.
 *
 * @filter woocommerce_admin_orders_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.applyFilters)(ORDERS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Orders match {{select /}} filters', 'A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ', 'woocommerce'),
  filters: {
    status: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order Status', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove order status filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select an order status filter match', 'woocommerce'),

        /* translators: A sentence describing an Order Status filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Order Status{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select an order status', 'woocommerce')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for orders matching a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Is', 'order status', 'woocommerce')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for orders that don\'t match a chosen order status. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Is Not', 'order status', 'woocommerce')
      }],
      input: {
        component: 'SelectControl',
        options: Object.keys(_utils_admin_settings__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUSES */ .rq).map(key => ({
          value: key,
          label: _utils_admin_settings__WEBPACK_IMPORTED_MODULE_3__/* .ORDER_STATUSES */ .rq[key]
        }))
      }
    },
    product: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Products', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search products', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove products filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a product filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Product{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select products', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Includes', 'products', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given product(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Excludes', 'products', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__/* .getProductLabels */ .oC
      }
    },
    variation: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Variations', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search variations', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove variations filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a variation filter match', 'woocommerce'),

        /* translators: A sentence describing a Variation filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Variation{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select variation', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given variation(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Includes', 'variations', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given variation(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Excludes', 'variations', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'variations',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__/* .getVariationLabels */ .uC
      }
    },
    coupon: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Coupon Codes', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search coupons', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove coupon filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a coupon filter match', 'woocommerce'),

        /* translators: A sentence describing a Coupon filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Coupon code{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select coupon codes', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Includes', 'coupon code', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given coupon code(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Excludes', 'coupon code', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'coupons',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__/* .getCouponLabels */ .hQ
      }
    },
    customer_type: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Customer type', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove customer filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a customer filter match', 'woocommerce'),

        /* translators: A sentence describing a Customer filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Customer is{{/title}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a customer type', 'woocommerce')
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'new',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New', 'woocommerce')
        }, {
          value: 'returning',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Returning', 'woocommerce')
        }],
        defaultOption: 'new'
      }
    },
    refunds: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Refunds', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove refunds filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a refund filter match', 'woocommerce'),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Refunds{{/title}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a refund type', 'woocommerce')
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'all',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All', 'woocommerce')
        }, {
          value: 'partial',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Partially refunded', 'woocommerce')
        }, {
          value: 'full',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fully refunded', 'woocommerce')
        }, {
          value: 'none',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'woocommerce')
        }],
        defaultOption: 'all'
      }
    },
    tax_rate: {
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tax Rates', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search tax rates', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove tax rate filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a tax rate filter match', 'woocommerce'),

        /* translators: A sentence describing a tax rate filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select tax rates', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to orders including a given tax rate(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Includes', 'tax rate', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to orders excluding a given tax rate(s). Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Excludes', 'tax rate', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'taxes',
        getLabels: _lib_async_requests__WEBPACK_IMPORTED_MODULE_2__/* .getTaxRateLabels */ .FI
      }
    },
    attribute: {
      allowMultiple: true,
      labels: {
        add: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Attribute', 'woocommerce'),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search attributes', 'woocommerce'),
        remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove attribute filter', 'woocommerce'),
        rule: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select a product attribute filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ */
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('{{title}}Attribute{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select attributes', 'woocommerce')
      },
      rules: [{
        value: 'is',

        /* translators: Sentence fragment, logical, "Is" refers to searching for products matching a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Is', 'product attribute', 'woocommerce')
      }, {
        value: 'is_not',

        /* translators: Sentence fragment, logical, "Is Not" refers to searching for products that don\'t match a chosen attribute. Screenshot for context: https://cloudup.com/cSsUY9VeCVJ */
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Is Not', 'product attribute', 'woocommerce')
      }],
      input: {
        component: 'ProductAttribute'
      }
    }
  }
});
/*eslint-enable max-len*/

/***/ }),

/***/ 61681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ getTaxCode; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function getTaxCode(tax) {
  return [tax.country, tax.state, tax.name || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('TAX', 'woocommerce'), tax.priority].map(item => item.toString().toUpperCase().trim()).filter(Boolean).join('-');
}

/***/ }),

/***/ 63193:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FI": function() { return /* binding */ getTaxRateLabels; },
/* harmony export */   "V1": function() { return /* binding */ getVariationName; },
/* harmony export */   "YC": function() { return /* binding */ getCategoryLabels; },
/* harmony export */   "hQ": function() { return /* binding */ getCouponLabels; },
/* harmony export */   "jk": function() { return /* binding */ getCustomerLabels; },
/* harmony export */   "oC": function() { return /* binding */ getProductLabels; },
/* harmony export */   "qc": function() { return /* binding */ getRequestByIdString; },
/* harmony export */   "uC": function() { return /* binding */ getVariationLabels; }
/* harmony export */ });
/* unused harmony export getAttributeLabels */
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96483);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86989);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10431);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61681);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4411);
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



/**
 * Get a function that accepts ids as they are found in url parameter and
 * returns a promise with an optional method applied to results
 *
 * @param {string|Function} path         - api path string or a function of the query returning api path string
 * @param {Function}        [handleData] - function applied to each iteration of data
 * @return {Function} - a function of ids returning a promise
 */

function getRequestByIdString(path) {
  let handleData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash__WEBPACK_IMPORTED_MODULE_2__.identity;
  return function () {
    let queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let query = arguments.length > 1 ? arguments[1] : undefined;
    const pathString = typeof path === 'function' ? path(query) : path;
    const idList = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__.getIdsFromQuery)(queryString);

    if (idList.length < 1) {
      return Promise.resolve([]);
    }

    const payload = {
      include: idList.join(','),
      per_page: idList.length
    };
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)(pathString, payload)
    }).then(data => data.map(handleData));
  };
}
const getAttributeLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE + '/products/attributes', attribute => ({
  key: attribute.id,
  label: attribute.name
}));
const getCategoryLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE + '/products/categories', category => ({
  key: category.id,
  label: category.name
}));
const getCouponLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE + '/coupons', coupon => ({
  key: coupon.id,
  label: coupon.code
}));
const getCustomerLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE + '/customers', customer => ({
  key: customer.id,
  label: customer.name
}));
const getProductLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE + '/products', product => ({
  key: product.id,
  label: product.name
}));
const getTaxRateLabels = getRequestByIdString(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE + '/taxes', taxRate => ({
  key: taxRate.id,
  label: (0,_analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_5__/* .getTaxCode */ .I)(taxRate)
}));
/**
 * Create a variation name by concatenating each of the variation's
 * attribute option strings.
 *
 * @param {Object} variation            - variation returned by the api
 * @param {Array}  variation.attributes - attribute objects, with option property.
 * @param {string} variation.name       - name of variation.
 * @return {string} - formatted variation name
 */

function getVariationName(_ref) {
  let {
    attributes,
    name
  } = _ref;
  const separator = (0,_utils_admin_settings__WEBPACK_IMPORTED_MODULE_6__/* .getAdminSetting */ .O3)('variationTitleAttributesSeparator', ' - ');

  if (name && name.indexOf(separator) > -1) {
    return name;
  }

  const attributeList = (attributes || []).map(_ref2 => {
    let {
      option
    } = _ref2;
    return option;
  }).join(', ');
  return attributeList ? name + separator + attributeList : name;
}
const getVariationLabels = getRequestByIdString(_ref3 => {
  let {
    products
  } = _ref3;

  // If a product was specified, get just its variations.
  if (products) {
    return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE + `/products/${products}/variations`;
  }

  return _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE + '/variations';
}, variation => {
  return {
    key: variation.id,
    label: getVariationName(variation)
  };
});

/***/ })

}]);