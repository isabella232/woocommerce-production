"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[4854],{

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

/***/ 26165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DownloadsReport; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./client/analytics/report/downloads/config.js
var config = __webpack_require__(27392);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(92819);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(76292);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(10431);
// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(81595);
// EXTERNAL MODULE: external ["wc","wcSettings"]
var external_wc_wcSettings_ = __webpack_require__(74617);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(81921);
// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(13732);
// EXTERNAL MODULE: ./client/lib/currency-context.js + 1 modules
var currency_context = __webpack_require__(83199);
// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(4411);
;// CONCATENATED MODULE: ./client/analytics/report/downloads/table.js


/**
 * External dependencies
 */











/**
 * Internal dependencies
 */





class DownloadsReportTable extends external_wp_element_.Component {
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
      defaultSort: true,
      required: true,
      isLeftAligned: true,
      isSortable: true
    }, {
      label: (0,external_wp_i18n_.__)('Product title', 'woocommerce'),
      key: 'product',
      isSortable: true,
      required: true
    }, {
      label: (0,external_wp_i18n_.__)('File name', 'woocommerce'),
      key: 'file_name'
    }, {
      label: (0,external_wp_i18n_.__)('Order #', 'woocommerce'),
      screenReaderLabel: (0,external_wp_i18n_.__)('Order Number', 'woocommerce'),
      key: 'order_number'
    }, {
      label: (0,external_wp_i18n_.__)('Username', 'woocommerce'),
      key: 'user_id'
    }, {
      label: (0,external_wp_i18n_.__)('IP', 'woocommerce'),
      key: 'ip_address'
    }];
  }

  getRowsContent(downloads) {
    const {
      query
    } = this.props;
    const persistedQuery = (0,external_wc_navigation_.getPersistedQuery)(query);
    const dateFormat = (0,admin_settings/* getAdminSetting */.O3)('dateFormat', external_wc_date_.defaultTableDateFormat);
    return (0,external_lodash_.map)(downloads, download => {
      const {
        _embedded,
        date,
        file_name: fileName,
        file_path: filePath,
        ip_address: ipAddress,
        order_id: orderId,
        order_number: orderNumber,
        product_id: productId,
        username
      } = download;
      const {
        code: errorCode,
        name: productName
      } = _embedded.product[0];
      let productDisplay, productValue; // Handle deleted products.

      if (errorCode === 'woocommerce_rest_product_invalid_id') {
        productDisplay = (0,external_wp_i18n_.__)('(Deleted)', 'woocommerce');
        productValue = (0,external_wp_i18n_.__)('(Deleted)', 'woocommerce');
      } else {
        const productURL = (0,external_wc_navigation_.getNewPath)(persistedQuery, '/analytics/products', {
          filter: 'single_product',
          products: productId
        });
        productDisplay = (0,external_wp_element_.createElement)(external_wc_components_.Link, {
          href: productURL,
          type: "wc-admin"
        }, productName);
        productValue = productName;
      }

      return [{
        display: (0,external_wp_element_.createElement)(external_wc_components_.Date, {
          date: date,
          visibleFormat: dateFormat
        }),
        value: date
      }, {
        display: productDisplay,
        value: productValue
      }, {
        display: (0,external_wp_element_.createElement)(external_wc_components_.Link, {
          href: filePath,
          type: "external"
        }, fileName),
        value: fileName
      }, {
        display: (0,external_wp_element_.createElement)(external_wc_components_.Link, {
          href: (0,external_wc_wcSettings_.getAdminLink)(`post.php?post=${orderId}&action=edit`),
          type: "wp-admin"
        }, orderNumber),
        value: orderNumber
      }, {
        display: username,
        value: username
      }, {
        display: ipAddress,
        value: ipAddress
      }];
    });
  }

  getSummary(totals) {
    const {
      download_count: downloadCount = 0
    } = totals;
    const {
      query,
      defaultDateRange
    } = this.props;
    const dates = (0,external_wc_date_.getCurrentDates)(query, defaultDateRange);
    const after = external_moment_default()(dates.primary.after);
    const before = external_moment_default()(dates.primary.before);
    const days = before.diff(after, 'days') + 1;
    const currency = this.context.getCurrencyConfig();
    return [{
      label: (0,external_wp_i18n_._n)('day', 'days', days, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', days)
    }, {
      label: (0,external_wp_i18n_._n)('Download', 'Downloads', downloadCount, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', downloadCount)
    }];
  }

  render() {
    const {
      query,
      filters,
      advancedFilters
    } = this.props;
    return (0,external_wp_element_.createElement)(report_table/* default */.Z, {
      endpoint: "downloads",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['download_count'],
      query: query,
      tableQuery: {
        _embed: true
      },
      title: (0,external_wp_i18n_.__)('Downloads', 'woocommerce'),
      columnPrefsKey: "downloads_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

DownloadsReportTable.contextType = currency_context/* CurrencyContext */.$;
/* harmony default export */ var table = ((0,external_wp_data_.withSelect)(select => {
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_.SETTINGS_STORE_NAME).getSetting('wc_admin', 'wcAdminSettings');
  return {
    defaultDateRange
  };
})(DownloadsReportTable));
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(21314);
// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(23961);
// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(13098);
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(25619);
;// CONCATENATED MODULE: ./client/analytics/report/downloads/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







class DownloadsReport extends external_wp_element_.Component {
  render() {
    const {
      query,
      path
    } = this.props;
    return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(report_filters/* default */.Z, {
      query: query,
      path: path,
      filters: config/* filters */.u8,
      advancedFilters: config/* advancedFilters */.be,
      report: "downloads"
    }), (0,external_wp_element_.createElement)(report_summary/* default */.Z, {
      charts: config/* charts */.O3,
      endpoint: "downloads",
      query: query,
      selectedChart: (0,get_selected_chart/* default */.Z)(query.chart, config/* charts */.O3),
      filters: config/* filters */.u8,
      advancedFilters: config/* advancedFilters */.be
    }), (0,external_wp_element_.createElement)(report_chart/* default */.Z, {
      charts: config/* charts */.O3,
      endpoint: "downloads",
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
DownloadsReport.propTypes = {
  query: (prop_types_default()).object.isRequired
};

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