"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[3576],{

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

/***/ 95866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OrdersReport; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./client/analytics/report/orders/config.js
var config = __webpack_require__(7323);
// EXTERNAL MODULE: ./client/lib/get-selected-chart/index.js
var get_selected_chart = __webpack_require__(21314);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(92819);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(81595);
// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(10431);
// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(81921);
// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(13732);
// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(4411);
// EXTERNAL MODULE: ./client/lib/currency-context.js + 1 modules
var currency_context = __webpack_require__(83199);
;// CONCATENATED MODULE: ./client/analytics/report/orders/table.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */





const capitalizeFirstLetter = expr => expr.charAt(0).toUpperCase() + expr.slice(1);

class OrdersReportTable extends external_wp_element_.Component {
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
      label: (0,external_wp_i18n_.__)('Order #', 'woocommerce'),
      screenReaderLabel: (0,external_wp_i18n_.__)('Order Number', 'woocommerce'),
      key: 'order_number',
      required: true
    }, {
      label: (0,external_wp_i18n_.__)('Status', 'woocommerce'),
      key: 'status',
      required: false,
      isSortable: false
    }, {
      label: (0,external_wp_i18n_.__)('Customer', 'woocommerce'),
      key: 'customer_id',
      required: false,
      isSortable: false
    }, {
      label: (0,external_wp_i18n_.__)('Customer type', 'woocommerce'),
      key: 'customer_type',
      required: false,
      isSortable: false
    }, {
      label: (0,external_wp_i18n_.__)('Product(s)', 'woocommerce'),
      screenReaderLabel: (0,external_wp_i18n_.__)('Products', 'woocommerce'),
      key: 'products',
      required: false,
      isSortable: false
    }, {
      label: (0,external_wp_i18n_.__)('Items sold', 'woocommerce'),
      key: 'num_items_sold',
      required: false,
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Coupon(s)', 'woocommerce'),
      screenReaderLabel: (0,external_wp_i18n_.__)('Coupons', 'woocommerce'),
      key: 'coupons',
      required: false,
      isSortable: false
    }, {
      label: (0,external_wp_i18n_.__)('Net sales', 'woocommerce'),
      screenReaderLabel: (0,external_wp_i18n_.__)('Net sales', 'woocommerce'),
      key: 'net_total',
      required: true,
      isSortable: true,
      isNumeric: true
    }];
  }

  getCustomerName(customer) {
    const {
      first_name: firstName,
      last_name: lastName
    } = customer || {};

    if (!firstName && !lastName) {
      return '';
    }

    return [firstName, lastName].join(' ');
  }

  getRowsContent(tableData) {
    const {
      query
    } = this.props;
    const persistedQuery = (0,external_wc_navigation_.getPersistedQuery)(query);
    const dateFormat = (0,admin_settings/* getAdminSetting */.O3)('dateFormat', external_wc_date_.defaultTableDateFormat);
    const {
      render: renderCurrency,
      getCurrencyConfig
    } = this.context;
    return (0,external_lodash_.map)(tableData, row => {
      const {
        currency,
        date_created: dateCreated,
        net_total: netTotal,
        num_items_sold: numItemsSold,
        order_id: orderId,
        order_number: orderNumber,
        parent_id: parentId,
        status,
        customer_type: customerType
      } = row;
      const extendedInfo = row.extended_info || {};
      const {
        coupons,
        customer,
        products
      } = extendedInfo;
      const formattedProducts = products.sort((itemA, itemB) => itemB.quantity - itemA.quantity).map(item => ({
        label: item.name,
        quantity: item.quantity,
        href: (0,external_wc_navigation_.getNewPath)(persistedQuery, '/analytics/products', {
          filter: 'single_product',
          products: item.id
        })
      }));
      const formattedCoupons = coupons.map(coupon => ({
        label: coupon.code,
        href: (0,external_wc_navigation_.getNewPath)(persistedQuery, '/analytics/coupons', {
          filter: 'single_coupon',
          coupons: coupon.id
        })
      }));
      return [{
        display: (0,external_wp_element_.createElement)(external_wc_components_.Date, {
          date: dateCreated,
          visibleFormat: dateFormat
        }),
        value: dateCreated
      }, {
        display: (0,external_wp_element_.createElement)(external_wc_components_.Link, {
          href: 'post.php?post=' + (parentId ? parentId : orderId) + '&action=edit' + (parentId ? '#order_refunds' : ''),
          type: "wp-admin"
        }, orderNumber),
        value: orderNumber
      }, {
        display: (0,external_wp_element_.createElement)(external_wc_components_.OrderStatus, {
          className: "woocommerce-orders-table__status",
          order: {
            status
          },
          labelPositionToLeft: true,
          orderStatusMap: (0,admin_settings/* getAdminSetting */.O3)('orderStatuses', {})
        }),
        value: status
      }, {
        display: this.getCustomerName(customer),
        value: this.getCustomerName(customer)
      }, {
        display: capitalizeFirstLetter(customerType),
        value: customerType
      }, {
        display: this.renderList(formattedProducts.length ? [formattedProducts[0]] : [], formattedProducts.map(product => ({
          label: (0,external_wp_i18n_.sprintf)((0,external_wp_i18n_.__)('%s× %s', 'woocommerce'), product.quantity, product.label),
          href: product.href
        }))),
        value: formattedProducts.map(_ref => {
          let {
            quantity,
            label
          } = _ref;
          return (0,external_wp_i18n_.sprintf)((0,external_wp_i18n_.__)('%s× %s', 'woocommerce'), quantity, label);
        }).join(', ')
      }, {
        display: (0,external_wc_number_.formatValue)(getCurrencyConfig(), 'number', numItemsSold),
        value: numItemsSold
      }, {
        display: this.renderList(formattedCoupons.length ? [formattedCoupons[0]] : [], formattedCoupons),
        value: formattedCoupons.map(coupon => coupon.label).join(', ')
      }, {
        display: renderCurrency(netTotal, currency),
        value: netTotal
      }];
    });
  }

  getSummary(totals) {
    const {
      orders_count: ordersCount = 0,
      total_customers: totalCustomers = 0,
      products = 0,
      num_items_sold: numItemsSold = 0,
      coupons_count: couponsCount = 0,
      net_revenue: netRevenue = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return [{
      label: (0,external_wp_i18n_._n)('Order', 'Orders', ordersCount, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', ordersCount)
    }, {
      label: (0,external_wp_i18n_._n)(' Customer', ' Customers', totalCustomers, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', totalCustomers)
    }, {
      label: (0,external_wp_i18n_._n)('Product', 'Products', products, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', products)
    }, {
      label: (0,external_wp_i18n_._n)('Item sold', 'Items sold', numItemsSold, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', numItemsSold)
    }, {
      label: (0,external_wp_i18n_._n)('Coupon', 'Coupons', couponsCount, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', couponsCount)
    }, {
      label: (0,external_wp_i18n_.__)('net sales', 'woocommerce'),
      value: formatAmount(netRevenue)
    }];
  }

  renderLinks() {
    let items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return items.map((item, i) => (0,external_wp_element_.createElement)(external_wc_components_.Link, {
      href: item.href,
      key: i,
      type: "wc-admin"
    }, item.label));
  }

  renderList(visibleItems, popoverItems) {
    return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, this.renderLinks(visibleItems), popoverItems.length > 1 && (0,external_wp_element_.createElement)(external_wc_components_.ViewMoreList, {
      items: this.renderLinks(popoverItems)
    }));
  }

  render() {
    const {
      query,
      filters,
      advancedFilters
    } = this.props;
    return (0,external_wp_element_.createElement)(report_table/* default */.Z, {
      endpoint: "orders",
      getHeadersContent: this.getHeadersContent,
      getRowsContent: this.getRowsContent,
      getSummary: this.getSummary,
      summaryFields: ['orders_count', 'total_customers', 'products', 'num_items_sold', 'coupons_count', 'net_revenue'],
      query: query,
      tableQuery: {
        extended_info: true
      },
      title: (0,external_wp_i18n_.__)('Orders', 'woocommerce'),
      columnPrefsKey: "orders_report_columns",
      filters: filters,
      advancedFilters: advancedFilters
    });
  }

}

OrdersReportTable.contextType = currency_context/* CurrencyContext */.$;
/* harmony default export */ var table = (OrdersReportTable);
// EXTERNAL MODULE: ./client/analytics/components/report-chart/index.js + 1 modules
var report_chart = __webpack_require__(23961);
// EXTERNAL MODULE: ./client/analytics/components/report-summary/index.js
var report_summary = __webpack_require__(13098);
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(25619);
;// CONCATENATED MODULE: ./client/analytics/report/orders/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







class OrdersReport extends external_wp_element_.Component {
  render() {
    const {
      path,
      query
    } = this.props;
    return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(report_filters/* default */.Z, {
      query: query,
      path: path,
      filters: config/* filters */.u8,
      advancedFilters: config/* advancedFilters */.be,
      report: "orders"
    }), (0,external_wp_element_.createElement)(report_summary/* default */.Z, {
      charts: config/* charts */.O3,
      endpoint: "orders",
      query: query,
      selectedChart: (0,get_selected_chart/* default */.Z)(query.chart, config/* charts */.O3),
      filters: config/* filters */.u8,
      advancedFilters: config/* advancedFilters */.be
    }), (0,external_wp_element_.createElement)(report_chart/* default */.Z, {
      charts: config/* charts */.O3,
      endpoint: "orders",
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
OrdersReport.propTypes = {
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