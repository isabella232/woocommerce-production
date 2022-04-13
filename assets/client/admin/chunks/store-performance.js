"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[2624],{

/***/ 83285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94333);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10431);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86020);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81921);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14599);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83199);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38164);
/* harmony import */ var _utils_admin_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4411);


/**
 * External dependencies
 */








/**
 * Internal dependencies
 */





const {
  performanceIndicators: indicators
} = (0,_utils_admin_settings__WEBPACK_IMPORTED_MODULE_10__/* .getAdminSetting */ .O3)('dataEndpoints', {
  performanceIndicators: []
});

class StorePerformance extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  renderMenu() {
    const {
      hiddenBlocks,
      isFirst,
      isLast,
      onMove,
      onRemove,
      onTitleBlur,
      onTitleChange,
      onToggleHiddenBlock,
      titleInput,
      controls: Controls
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.EllipsisMenu, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose which analytics to display and the section name', 'woocommerce'),
      renderContent: _ref => {
        let {
          onToggle
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.MenuTitle, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display stats:', 'woocommerce')), indicators.map((indicator, i) => {
          const checked = !hiddenBlocks.includes(indicator.stat);
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
            checked: checked,
            isCheckbox: true,
            isClickable: true,
            key: i,
            onInvoke: () => {
              onToggleHiddenBlock(indicator.stat)();
              (0,_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('dash_indicators_toggle', {
                status: checked ? 'off' : 'on',
                key: indicator.stat
              });
            }
          }, indicator.label);
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Controls, {
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
  }

  renderList() {
    const {
      query,
      primaryRequesting,
      secondaryRequesting,
      primaryError,
      secondaryError,
      primaryData,
      secondaryData,
      userIndicators,
      defaultDateRange
    } = this.props;

    if (primaryRequesting || secondaryRequesting) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.SummaryListPlaceholder, {
        numberOfItems: userIndicators.length
      });
    }

    if (primaryError || secondaryError) {
      return null;
    }

    const persistedQuery = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__.getPersistedQuery)(query);
    const {
      compare
    } = (0,_woocommerce_date__WEBPACK_IMPORTED_MODULE_6__.getDateParamsFromQuery)(query, defaultDateRange);
    const prevLabel = compare === 'previous_period' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous period:', 'woocommerce') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous year:', 'woocommerce');
    const {
      formatAmount,
      getCurrencyConfig
    } = this.context;
    const currency = getCurrencyConfig();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.SummaryList, null, () => userIndicators.map((indicator, i) => {
      const {
        primaryValue,
        secondaryValue,
        delta,
        reportUrl,
        reportUrlType
      } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .getIndicatorValues */ .Z)({
        indicator,
        primaryData,
        secondaryData,
        currency,
        formatAmount,
        persistedQuery
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.SummaryNumber, {
        key: i,
        href: reportUrl,
        hrefType: reportUrlType,
        label: indicator.label,
        value: primaryValue,
        prevLabel: prevLabel,
        prevValue: secondaryValue,
        delta: delta,
        onLinkClickCallback: () => {
          (0,_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_7__.recordEvent)('dash_indicators_click', {
            key: indicator.stat
          });
        }
      });
    }));
  }

  render() {
    const {
      userIndicators,
      title
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__.SectionHeader, {
      title: title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Store Performance', 'woocommerce'),
      menu: this.renderMenu()
    }), userIndicators.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "woocommerce-dashboard__store-performance"
    }, this.renderList()));
  }

}

StorePerformance.contextType = _lib_currency_context__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyContext */ .$;
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((select, props) => {
  const {
    hiddenBlocks,
    query,
    filters
  } = props;
  const userIndicators = indicators.filter(indicator => !hiddenBlocks.includes(indicator.stat));
  const data = {
    hiddenBlocks,
    userIndicators,
    indicators
  };

  if (userIndicators.length === 0) {
    return data;
  }

  const indicatorData = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .getIndicatorData */ .A)(select, userIndicators, query, filters);
  return { ...data,
    ...indicatorData
  };
}))(StorePerformance));

/***/ }),

/***/ 38164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ getIndicatorData; },
/* harmony export */   "Z": function() { return /* binding */ getIndicatorValues; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76292);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81921);
/* harmony import */ var _woocommerce_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10431);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81595);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74617);
/* harmony import */ var _woocommerce_settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_settings__WEBPACK_IMPORTED_MODULE_6__);
/**
 * External dependencies
 */








function getReportUrl(href, persistedQuery, primaryItem) {
  if (!href) {
    return '';
  }

  if (href === '/jetpack') {
    return (0,_woocommerce_settings__WEBPACK_IMPORTED_MODULE_6__.getAdminLink)('admin.php?page=jetpack#/dashboard');
  }

  return (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__.getNewPath)(persistedQuery, href, {
    chart: primaryItem.chart
  });
}

const getIndicatorValues = _ref => {
  let {
    indicator,
    primaryData,
    secondaryData,
    currency,
    formatAmount,
    persistedQuery
  } = _ref;
  const primaryItem = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(primaryData.data, data => data.stat === indicator.stat);
  const secondaryItem = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(secondaryData.data, data => data.stat === indicator.stat);

  if (!primaryItem || !secondaryItem) {
    return {};
  }

  const href = primaryItem._links && primaryItem._links.report[0] && primaryItem._links.report[0].href || '';
  const reportUrl = getReportUrl(href, persistedQuery, primaryItem);
  const reportUrlType = href === '/jetpack' ? 'wp-admin' : 'wc-admin';
  const isCurrency = primaryItem.format === 'currency';
  const delta = (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__.calculateDelta)(primaryItem.value, secondaryItem.value);
  const primaryValue = isCurrency ? formatAmount(primaryItem.value) : (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__.formatValue)(currency, primaryItem.format, primaryItem.value);
  const secondaryValue = isCurrency ? formatAmount(secondaryItem.value) : (0,_woocommerce_number__WEBPACK_IMPORTED_MODULE_5__.formatValue)(currency, secondaryItem.format, secondaryItem.value);
  return {
    primaryValue,
    secondaryValue,
    delta,
    reportUrl,
    reportUrlType
  };
};
const getIndicatorData = (select, indicators, query, filters) => {
  const {
    getReportItems,
    getReportItemsError,
    isResolving
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__.REPORTS_STORE_NAME);
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__.SETTINGS_STORE_NAME).getSetting('wc_admin', 'wcAdminSettings');
  const datesFromQuery = (0,_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__.getCurrentDates)(query, defaultDateRange);
  const endPrimary = datesFromQuery.primary.before;
  const endSecondary = datesFromQuery.secondary.before;
  const statKeys = indicators.map(indicator => indicator.stat).join(',');
  const filterQuery = (0,_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__.getFilterQuery)({
    filters,
    query
  });
  const primaryQuery = { ...filterQuery,
    after: (0,_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__.appendTimestamp)(datesFromQuery.primary.after, 'start'),
    before: (0,_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__.appendTimestamp)(endPrimary, endPrimary.isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  };
  const secondaryQuery = { ...filterQuery,
    after: (0,_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__.appendTimestamp)(datesFromQuery.secondary.after, 'start'),
    before: (0,_woocommerce_date__WEBPACK_IMPORTED_MODULE_2__.appendTimestamp)(endSecondary, endSecondary.isSame(moment__WEBPACK_IMPORTED_MODULE_0___default()(), 'day') ? 'now' : 'end'),
    stats: statKeys
  };
  const primaryData = getReportItems('performance-indicators', primaryQuery);
  const primaryError = getReportItemsError('performance-indicators', primaryQuery) || null;
  const primaryRequesting = isResolving('getReportItems', ['performance-indicators', primaryQuery]);
  const secondaryData = getReportItems('performance-indicators', secondaryQuery);
  const secondaryError = getReportItemsError('performance-indicators', secondaryQuery) || null;
  const secondaryRequesting = isResolving('getReportItems', ['performance-indicators', secondaryQuery]);
  return {
    primaryData,
    primaryError,
    primaryRequesting,
    secondaryData,
    secondaryError,
    secondaryRequesting,
    defaultDateRange
  };
};

/***/ })

}]);