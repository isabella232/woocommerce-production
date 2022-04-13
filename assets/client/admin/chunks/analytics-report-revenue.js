"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[3994],{

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

/***/ 13098:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ReportSummary */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94333);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7862);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10431);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86020);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81595);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81921);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14599);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _report_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46439);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83199);


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */



/**
 * Component to render summary numbers in reports.
 */

class ReportSummary extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  formatVal(val, type) {
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    return type === 'currency' ? formatAmount(val) : (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__.formatValue)(getCurrencyConfig(), type, val);
  }

  getValues(key, type) {
    const {
      emptySearchResults,
      summaryData
    } = this.props;
    const {
      totals
    } = summaryData;
    const primaryTotal = totals.primary ? totals.primary[key] : 0;
    const secondaryTotal = totals.secondary ? totals.secondary[key] : 0;
    const primaryValue = emptySearchResults ? 0 : primaryTotal;
    const secondaryValue = emptySearchResults ? 0 : secondaryTotal;
    return {
      delta: (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_6__.calculateDelta)(primaryValue, secondaryValue),
      prevValue: this.formatVal(secondaryValue, type),
      value: this.formatVal(primaryValue, type)
    };
  }

  render() {
    const {
      charts,
      query,
      selectedChart,
      summaryData,
      endpoint,
      report,
      defaultDateRange
    } = this.props;
    const {
      isError,
      isRequesting
    } = summaryData;

    if (isError) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_report_error__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, null);
    }

    if (isRequesting) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.SummaryListPlaceholder, {
        numberOfItems: charts.length
      });
    }

    const {
      compare
    } = (0,_woocommerce_date__WEBPACK_IMPORTED_MODULE_8__.getDateParamsFromQuery)(query, defaultDateRange);

    const renderSummaryNumbers = _ref => {
      let {
        onToggle
      } = _ref;
      return charts.map(chart => {
        const {
          key,
          order,
          orderby,
          label,
          type,
          isReverseTrend,
          labelTooltipText
        } = chart;
        const newPath = {
          chart: key
        };

        if (orderby) {
          newPath.orderby = orderby;
        }

        if (order) {
          newPath.order = order;
        }

        const href = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__.getNewPath)(newPath);
        const isSelected = selectedChart.key === key;
        const {
          delta,
          prevValue,
          value
        } = this.getValues(key, type);
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.SummaryNumber, {
          key: key,
          delta: delta,
          href: href,
          label: label,
          reverseTrend: isReverseTrend,
          prevLabel: compare === 'previous_period' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous period:', 'woocommerce') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous year:', 'woocommerce'),
          prevValue: prevValue,
          selected: isSelected,
          value: value,
          labelTooltipText: labelTooltipText,
          onLinkClickCallback: () => {
            // Wider than a certain breakpoint, there is no dropdown so avoid calling onToggle.
            if (onToggle) {
              onToggle();
            }

            (0,_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_9__.recordEvent)('analytics_chart_tab_click', {
              report: report || endpoint,
              key
            });
          }
        });
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.SummaryList, null, renderSummaryNumbers);
  }

}
ReportSummary.propTypes = {
  /**
   * Properties of all the charts available for that report.
   */
  charts: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().array.isRequired),

  /**
   * The endpoint to use in API calls to populate the Summary Numbers.
   * For example, if `taxes` is provided, data will be fetched from the report
   * `taxes` endpoint (ie: `/wc-analytics/reports/taxes/stats`). If the provided endpoint
   * doesn't exist, an error will be shown to the user with `ReportError`.
   */
  endpoint: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string.isRequired),

  /**
   * Allows specifying properties different from the `endpoint` that will be used
   * to limit the items when there is an active search.
   */
  limitProperties: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().array),

  /**
   * The query string represented in object form.
   */
  query: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object.isRequired),

  /**
   * Properties of the selected chart.
   */
  selectedChart: prop_types__WEBPACK_IMPORTED_MODULE_12___default().shape({
    /**
     * Key of the selected chart.
     */
    key: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string.isRequired),

    /**
     * Chart label.
     */
    label: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string.isRequired),

    /**
     * Order query argument.
     */
    order: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['asc', 'desc']),

    /**
     * Order by query argument.
     */
    orderby: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

    /**
     * Number type for formatting.
     */
    type: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['average', 'number', 'currency']).isRequired
  }).isRequired,

  /**
   * Data to display in the SummaryNumbers.
   */
  summaryData: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),

  /**
   * Report name, if different than the endpoint.
   */
  report: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)
};
ReportSummary.defaultProps = {
  summaryData: {
    totals: {
      primary: {},
      secondary: {}
    },
    isError: false
  }
};
ReportSummary.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyContext */ .$;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)((select, props) => {
  const {
    charts,
    endpoint,
    limitProperties,
    query,
    filters,
    advancedFilters
  } = props;
  const limitBy = limitProperties || [endpoint];
  const hasLimitByParam = limitBy.some(item => query[item] && query[item].length);

  if (query.search && !hasLimitByParam) {
    return {
      emptySearchResults: true
    };
  }

  const fields = charts && charts.map(chart => chart.key);
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__.SETTINGS_STORE_NAME).getSetting('wc_admin', 'wcAdminSettings');
  const summaryData = (0,_woocommerce_data__WEBPACK_IMPORTED_MODULE_7__.getSummaryNumbers)({
    endpoint,
    query,
    select,
    limitBy,
    filters,
    advancedFilters,
    defaultDateRange,
    fields
  });
  return {
    summaryData,
    defaultDateRange
  };
}))(ReportSummary));

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

/***/ 97993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ RevenueReport; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./client/analytics/report/revenue/config.js
var config = __webpack_require__(66274);
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(21314);
// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(23961);
// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(13098);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wp","date"]
var external_wp_date_ = __webpack_require__(69771);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(94333);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(92819);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(81595);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(81921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/qs@6.10.3/node_modules/qs/lib/index.js
var lib = __webpack_require__(79119);
// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(13732);
// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(4411);
// EXTERNAL MODULE: ./client/lib/currency-context.js + 1 modules
var currency_context = __webpack_require__(83199);
;// CONCATENATED MODULE: ./client/analytics/report/revenue/table.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */




const EMPTY_ARRAY = [];
const summaryFields = ['orders_count', 'gross_sales', 'total_sales', 'refunds', 'coupons', 'taxes', 'shipping', 'net_revenue'];

class RevenueReportTable extends external_wp_element_.Component {
  constructor() {
    super();
    this.getHeadersContent = this.getHeadersContent.bind(this);
    this.getRowsContent = this.getRowsContent.bind(this);
    this.getSummary = this.getSummary.bind(this);
  }

  getHeadersContent() {
    return [{
      label: (0,external_wp_i18n_.__)('Date', 'woocommerce'),
      key: 'date',
      required: true,
      defaultSort: true,
      isLeftAligned: true,
      isSortable: true
    }, {
      label: (0,external_wp_i18n_.__)('Orders', 'woocommerce'),
      key: 'orders_count',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Gross sales', 'woocommerce'),
      key: 'gross_sales',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Returns', 'woocommerce'),
      key: 'refunds',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Coupons', 'woocommerce'),
      key: 'coupons',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Net sales', 'woocommerce'),
      key: 'net_revenue',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Taxes', 'woocommerce'),
      key: 'taxes',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Shipping', 'woocommerce'),
      key: 'shipping',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Total sales', 'woocommerce'),
      key: 'total_sales',
      required: false,
      isSortable: true,
      isNumeric: true
    }];
  }

  getRowsContent() {
    let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const dateFormat = (0,admin_settings/* getAdminSetting */.O3)('dateFormat', external_wc_date_.defaultTableDateFormat);
    const {
      formatAmount,
      render: renderCurrency,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = this.context;
    return data.map(row => {
      const {
        coupons,
        gross_sales: grossSales,
        total_sales: totalSales,
        net_revenue: netRevenue,
        orders_count: ordersCount,
        refunds,
        shipping,
        taxes
      } = row.subtotals; // @todo How to create this per-report? Can use `w`, `year`, `m` to build time-specific order links
      // we need to know which kind of report this is, and parse the `label` to get this row's date

      const orderLink = (0,external_wp_element_.createElement)(external_wc_components_.Link, {
        href: 'edit.php?post_type=shop_order&m=' + (0,external_wp_date_.format)('Ymd', row.date_start),
        type: "wp-admin"
      }, (0,external_wc_number_.formatValue)(getCurrencyConfig(), 'number', ordersCount));
      return [{
        display: (0,external_wp_element_.createElement)(external_wc_components_.Date, {
          date: row.date_start,
          visibleFormat: dateFormat
        }),
        value: row.date_start
      }, {
        display: orderLink,
        value: Number(ordersCount)
      }, {
        display: renderCurrency(grossSales),
        value: getCurrencyFormatDecimal(grossSales)
      }, {
        display: formatAmount(refunds),
        value: getCurrencyFormatDecimal(refunds)
      }, {
        display: formatAmount(coupons),
        value: getCurrencyFormatDecimal(coupons)
      }, {
        display: renderCurrency(netRevenue),
        value: getCurrencyFormatDecimal(netRevenue)
      }, {
        display: renderCurrency(taxes),
        value: getCurrencyFormatDecimal(taxes)
      }, {
        display: renderCurrency(shipping),
        value: getCurrencyFormatDecimal(shipping)
      }, {
        display: renderCurrency(totalSales),
        value: getCurrencyFormatDecimal(totalSales)
      }];
    });
  }

  getSummary(totals) {
    let totalResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const {
      orders_count: ordersCount = 0,
      gross_sales: grossSales = 0,
      total_sales: totalSales = 0,
      refunds = 0,
      coupons = 0,
      taxes = 0,
      shipping = 0,
      net_revenue: netRevenue = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      label: (0,external_wp_i18n_._n)('day', 'days', totalResults, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', totalResults)
    }, {
      label: (0,external_wp_i18n_._n)('order', 'orders', ordersCount, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', ordersCount)
    }, {
      label: (0,external_wp_i18n_.__)('Gross sales', 'woocommerce'),
      value: formatAmount(grossSales)
    }, {
      label: (0,external_wp_i18n_.__)('Returns', 'woocommerce'),
      value: formatAmount(refunds)
    }, {
      label: (0,external_wp_i18n_.__)('Coupons', 'woocommerce'),
      value: formatAmount(coupons)
    }, {
      label: (0,external_wp_i18n_.__)('Net sales', 'woocommerce'),
      value: formatAmount(netRevenue)
    }, {
      label: (0,external_wp_i18n_.__)('Taxes', 'woocommerce'),
      value: formatAmount(taxes)
    }, {
      label: (0,external_wp_i18n_.__)('Shipping', 'woocommerce'),
      value: formatAmount(shipping)
    }, {
      label: (0,external_wp_i18n_.__)('Total sales', 'woocommerce'),
      value: formatAmount(totalSales)
    }];
  }

  render() {
    const {
      advancedFilters,
      filters,
      tableData,
      query
    } = this.props;
    return (0,external_wp_element_.createElement)(report_table/* default */.Z, {
      endpoint: "revenue",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: summaryFields,
      query: query,
      tableData: tableData,
      title: (0,external_wp_i18n_.__)('Revenue', 'woocommerce'),
      columnPrefsKey: "revenue_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

RevenueReportTable.contextType = currency_context/* CurrencyContext */.$;
/**
 * Memoized props object formatting function.
 *
 * @param {boolean} isError
 * @param {boolean} isRequesting
 * @param {Object}  tableQuery
 * @param {Object}  revenueData
 * @return {Object} formatted tableData prop
 */

const formatProps = (0,external_lodash_.memoize)((isError, isRequesting, tableQuery, revenueData) => ({
  tableData: {
    items: {
      data: (0,external_lodash_.get)(revenueData, ['data', 'intervals'], EMPTY_ARRAY),
      totalResults: (0,external_lodash_.get)(revenueData, ['totalResults'], 0)
    },
    isError,
    isRequesting,
    query: tableQuery
  }
}), (isError, isRequesting, tableQuery, revenueData) => [isError, isRequesting, (0,lib.stringify)(tableQuery), (0,external_lodash_.get)(revenueData, ['totalResults'], 0), (0,external_lodash_.get)(revenueData, ['data', 'intervals'], EMPTY_ARRAY).length].join(':'));
/**
 * Memoized table query formatting function.
 *
 * @param {string} order
 * @param {string} orderBy
 * @param {number} page
 * @param {number} pageSize
 * @param {Object} datesFromQuery
 * @return {Object} formatted tableQuery object
 */

const formatTableQuery = (0,external_lodash_.memoize)( // @todo Support hour here when viewing a single day
(order, orderBy, page, pageSize, datesFromQuery) => ({
  interval: 'day',
  orderby: orderBy,
  order,
  page,
  per_page: pageSize,
  after: (0,external_wc_date_.appendTimestamp)(datesFromQuery.primary.after, 'start'),
  before: (0,external_wc_date_.appendTimestamp)(datesFromQuery.primary.before, 'end')
}), (order, orderBy, page, pageSize, datesFromQuery) => [order, orderBy, page, pageSize, datesFromQuery.primary.after, datesFromQuery.primary.before].join(':'));
/* harmony default export */ var table = ((0,external_wp_compose_.compose)((0,external_wp_data_.withSelect)((select, props) => {
  const {
    query,
    filters,
    advancedFilters
  } = props;
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_.SETTINGS_STORE_NAME).getSetting('wc_admin', 'wcAdminSettings');
  const datesFromQuery = (0,external_wc_date_.getCurrentDates)(query, defaultDateRange);
  const {
    getReportStats,
    getReportStatsError,
    isResolving
  } = select(external_wc_data_.REPORTS_STORE_NAME);
  const tableQuery = formatTableQuery(query.order || 'desc', query.orderby || 'date', query.paged || 1, query.per_page || external_wc_data_.QUERY_DEFAULTS.pageSize, datesFromQuery);
  const filteredTableQuery = (0,external_wc_data_.getReportTableQuery)({
    endpoint: 'revenue',
    query,
    select,
    tableQuery,
    filters,
    advancedFilters
  });
  const revenueData = getReportStats('revenue', filteredTableQuery);
  const isError = Boolean(getReportStatsError('revenue', filteredTableQuery));
  const isRequesting = isResolving('getReportStats', ['revenue', filteredTableQuery]);
  return formatProps(isError, isRequesting, tableQuery, revenueData);
}))(RevenueReportTable));
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(25619);
;// CONCATENATED MODULE: ./client/analytics/report/revenue/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







class RevenueReport extends external_wp_element_.Component {
  render() {
    const {
      path,
      query
    } = this.props;
    return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(report_filters/* default */.Z, {
      query: query,
      path: path,
      report: "revenue",
      filters: config/* filters */.u8,
      advancedFilters: config/* advancedFilters */.be
    }), (0,external_wp_element_.createElement)(report_summary/* default */.Z, {
      charts: config/* charts */.O3,
      endpoint: "revenue",
      query: query,
      selectedChart: (0,get_selected_chart/* default */.Z)(query.chart, config/* charts */.O3),
      filters: config/* filters */.u8,
      advancedFilters: config/* advancedFilters */.be
    }), (0,external_wp_element_.createElement)(report_chart/* default */.Z, {
      charts: config/* charts */.O3,
      endpoint: "revenue",
      path: path,
      query: query,
      selectedChart: (0,get_selected_chart/* default */.Z)(query.chart, config/* charts */.O3),
      filters: config/* filters */.u8,
      advancedFilters: config/* advancedFilters */.be
    }), (0,external_wp_element_.createElement)(table, {
      query: query,
      filters: config/* filters */.u8,
      advancedFilters: config/* advancedFilters */.be
    }));
  }

}
RevenueReport.propTypes = {
  path: (prop_types_default()).string.isRequired,
  query: (prop_types_default()).object.isRequired
};

/***/ }),

/***/ 21314:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getSelectedChart; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Takes a chart name returns the configuration for that chart from and array
 * of charts. If the chart is not found it will return the first chart.
 *
 * @param {string} chartName - the name of the chart to get configuration for
 * @param {Array}  charts    - list of charts for a particular report
 * @return {Object} - chart configuration object
 */

function getSelectedChart(chartName) {
  let charts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const chart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(charts, {
    key: chartName
  });

  if (chart) {
    return chart;
  }

  return charts[0];
}

/***/ })

}]);