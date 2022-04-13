"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[8544],{

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

/***/ 88300:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94333);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7862);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92819);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10431);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_NoMatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73796);
/* harmony import */ var _components_report_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46439);
/* harmony import */ var _lib_currency_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83199);
/* harmony import */ var _get_reports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81096);


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */






/**
 * An object defining a chart.
 *
 * @typedef {Object} chart
 * @property {string}                key     Chart slug.
 * @property {string}                label   Chart label.
 * @property {string}                order   Default way to order the `orderby` property.
 * @property {string}                orderby Column by which to order.
 * @property {('number'|'currency')} type    Specify the type of number.
 */

/**
 * An object defining a set of report filters.
 *
 * @typedef {Object} filter
 * @property {string}         label        Label describing the set of filters.
 * @property {string}         param        Url query param this set of filters operates on.
 * @property {Array.<string>} staticParams Array of `param` that remain constant when other params are manipulated.
 * @property {Function}       showFilters  A function with url query as an argument returning a Boolean depending on whether or not the filters should be shown.
 * @property {Array}          filters      An array of filter objects.
 */

/**
 * The Customers Report will not have the `report` param supplied by the router/
 * because it no longer exists under the path `/analytics/:report`. Use `props.path`/
 * instead to determine if the Customers Report is being rendered.
 *
 * @param {Object} args
 * @param {Object} args.params - url parameters
 * @param {string} args.path
 * @return {string} - report parameter
 */

const getReportParam = _ref => {
  let {
    params,
    path
  } = _ref;
  return params.report || path.replace(/^\/+/, '');
};

class Report extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true
    });
    /* eslint-disable no-console */

    console.warn(error);
    /* eslint-enable no-console */
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    const {
      isError
    } = this.props;

    if (isError) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_report_error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, null);
    }

    const reportParam = getReportParam(this.props);
    const report = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.find)((0,_get_reports__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(), {
      report: reportParam
    });

    if (!report) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_NoMatch__WEBPACK_IMPORTED_MODULE_6__/* .NoMatch */ .E, null);
    }

    const Container = report.component;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_lib_currency_context__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyContext.Provider */ .$.Provider, {
      value: (0,_lib_currency_context__WEBPACK_IMPORTED_MODULE_8__/* .getFilteredCurrencyInstance */ .s)((0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__.getQuery)())
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Container, this.props));
  }

}

Report.propTypes = {
  params: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)((select, props) => {
  const query = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__.getQuery)();
  const {
    search
  } = query;
  /* eslint @wordpress/no-unused-vars-before-return: "off" */

  const itemsSelector = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__.ITEMS_STORE_NAME);

  if (!search) {
    return {};
  }

  const report = getReportParam(props);
  const searchWords = (0,_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_4__.getSearchWords)(query); // Single category view in Categories Report uses the products endpoint, so search must also.

  const mappedReport = report === 'categories' && query.filter === 'single_category' ? 'products' : report;
  const itemsResult = (0,_woocommerce_data__WEBPACK_IMPORTED_MODULE_5__.searchItemsByString)(itemsSelector, mappedReport, searchWords, {
    per_page: 100
  });
  const {
    isError,
    isRequesting,
    items
  } = itemsResult;
  const ids = Object.keys(items);

  if (!ids.length) {
    return {
      isError,
      isRequesting
    };
  }

  return {
    isError,
    isRequesting,
    query: { ...props.query,
      [mappedReport]: ids.join(',')
    }
  };
}))(Report));

/***/ })

}]);