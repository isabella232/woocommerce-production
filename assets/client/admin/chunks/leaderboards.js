"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[727],{

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

/***/ 31082:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ leaderboards; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(94333);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(55609);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(14599);
// EXTERNAL MODULE: external ["wc","navigation"]
var external_wc_navigation_ = __webpack_require__(10431);
// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(14812);
// EXTERNAL MODULE: ./client/analytics/components/report-error/index.js
var report_error = __webpack_require__(46439);
// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(96862);
;// CONCATENATED MODULE: ./client/analytics/components/leaderboard/index.js


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */




class Leaderboard extends external_wp_element_.Component {
  getFormattedHeaders() {
    return this.props.headers.map((header, i) => {
      return {
        isLeftAligned: i === 0,
        hiddenByDefault: false,
        isSortable: false,
        key: header.label,
        label: header.label
      };
    });
  }

  getFormattedRows() {
    return this.props.rows.map(row => {
      return row.map(column => {
        return {
          display: (0,external_wp_element_.createElement)("div", {
            dangerouslySetInnerHTML: (0,sanitize_html/* default */.ZP)(column.display)
          }),
          value: column.value
        };
      });
    });
  }

  render() {
    const {
      isRequesting,
      isError,
      totalRows,
      title
    } = this.props;
    const classes = 'woocommerce-leaderboard';

    if (isError) {
      return (0,external_wp_element_.createElement)(report_error/* default */.Z, {
        className: classes
      });
    }

    const rows = this.getFormattedRows();

    if (!isRequesting && rows.length === 0) {
      return (0,external_wp_element_.createElement)(external_wp_components_.Card, {
        className: classes
      }, (0,external_wp_element_.createElement)(external_wp_components_.CardHeader, null, (0,external_wp_element_.createElement)(external_wc_experimental_.Text, {
        size: 16,
        weight: 600,
        as: "h3",
        color: "#23282d"
      }, title)), (0,external_wp_element_.createElement)(external_wp_components_.CardBody, {
        size: null
      }, (0,external_wp_element_.createElement)(external_wc_components_.EmptyTable, null, (0,external_wp_i18n_.__)('No data recorded for the selected time period.', 'woocommerce'))));
    }

    return (0,external_wp_element_.createElement)(external_wc_components_.TableCard, {
      className: classes,
      headers: this.getFormattedHeaders(),
      isLoading: isRequesting,
      rows: rows,
      rowsPerPage: totalRows,
      showMenu: false,
      title: title,
      totalRows: totalRows
    });
  }

}
Leaderboard.propTypes = {
  /**
   * An array of column headers.
   */
  headers: prop_types_default().arrayOf(prop_types_default().shape({
    label: (prop_types_default()).string
  })),

  /**
   * String of leaderboard ID to display.
   */
  id: (prop_types_default()).string.isRequired,

  /**
   * Query args added to the report table endpoint request.
   */
  query: (prop_types_default()).object,

  /**
   * An array of arrays of display/value object pairs (see `Table` props).
   */
  rows: prop_types_default().arrayOf(prop_types_default().arrayOf(prop_types_default().shape({
    display: (prop_types_default()).node,
    value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number, (prop_types_default()).bool])
  }))).isRequired,

  /**
   * String to display as the title of the table.
   */
  title: (prop_types_default()).string.isRequired,

  /**
   * Number of table rows.
   */
  totalRows: (prop_types_default()).number.isRequired
};
Leaderboard.defaultProps = {
  rows: [],
  isError: false,
  isRequesting: false
};
/* harmony default export */ var components_leaderboard = ((0,external_wp_compose_.compose)((0,external_wp_data_.withSelect)((select, props) => {
  const {
    id,
    query,
    totalRows,
    filters
  } = props;
  const {
    woocommerce_default_date_range: defaultDateRange
  } = select(external_wc_data_.SETTINGS_STORE_NAME).getSetting('wc_admin', 'wcAdminSettings');
  const filterQuery = (0,external_wc_data_.getFilterQuery)({
    filters,
    query
  });
  const leaderboardQuery = {
    id,
    per_page: totalRows,
    persisted_query: (0,external_wc_navigation_.getPersistedQuery)(query),
    query,
    select,
    defaultDateRange,
    filterQuery
  };
  const leaderboardData = (0,external_wc_data_.getLeaderboard)(leaderboardQuery);
  return leaderboardData;
}))(Leaderboard));
// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(4411);
;// CONCATENATED MODULE: ./client/dashboard/leaderboards/index.js


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */





const renderLeaderboardToggles = _ref => {
  let {
    allLeaderboards,
    hiddenBlocks,
    onToggleHiddenBlock
  } = _ref;
  return allLeaderboards.map(leaderboard => {
    const checked = !hiddenBlocks.includes(leaderboard.id);
    return (0,external_wp_element_.createElement)(external_wc_components_.MenuItem, {
      checked: checked,
      isCheckbox: true,
      isClickable: true,
      key: leaderboard.id,
      onInvoke: () => {
        onToggleHiddenBlock(leaderboard.id)();
        (0,external_wc_tracks_.recordEvent)('dash_leaderboards_toggle', {
          status: checked ? 'off' : 'on',
          key: leaderboard.id
        });
      }
    }, leaderboard.label);
  });
};

const renderLeaderboards = _ref2 => {
  let {
    allLeaderboards,
    hiddenBlocks,
    query,
    rowsPerTable,
    filters
  } = _ref2;
  return allLeaderboards.map(leaderboard => {
    if (hiddenBlocks.includes(leaderboard.id)) {
      return undefined;
    }

    return (0,external_wp_element_.createElement)(components_leaderboard, {
      headers: leaderboard.headers,
      id: leaderboard.id,
      key: leaderboard.id,
      query: query,
      title: leaderboard.label,
      totalRows: rowsPerTable,
      filters: filters
    });
  });
};

const Leaderboards = props => {
  const {
    allLeaderboards,
    controls: Controls,
    isFirst,
    isLast,
    hiddenBlocks,
    onMove,
    onRemove,
    onTitleBlur,
    onTitleChange,
    onToggleHiddenBlock,
    query,
    title,
    titleInput,
    filters
  } = props;
  const {
    updateUserPreferences,
    ...userPrefs
  } = (0,external_wc_data_.useUserPreferences)();
  const [rowsPerTable, setRowsPerTableState] = (0,external_wp_element_.useState)(parseInt(userPrefs.dashboard_leaderboard_rows || 5, 10));

  const setRowsPerTable = rows => {
    setRowsPerTableState(parseInt(rows, 10));
    const userDataFields = {
      dashboard_leaderboard_rows: parseInt(rows, 10)
    };
    updateUserPreferences(userDataFields);
  };

  const renderMenu = () => (0,external_wp_element_.createElement)(external_wc_components_.EllipsisMenu, {
    label: (0,external_wp_i18n_.__)('Choose which leaderboards to display and other settings', 'woocommerce'),
    renderContent: _ref3 => {
      let {
        onToggle
      } = _ref3;
      return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(external_wc_components_.MenuTitle, null, (0,external_wp_i18n_.__)('Leaderboards', 'woocommerce')), renderLeaderboardToggles({
        allLeaderboards,
        hiddenBlocks,
        onToggleHiddenBlock
      }), (0,external_wp_element_.createElement)(external_wp_components_.SelectControl, {
        className: "woocommerce-dashboard__dashboard-leaderboards__select",
        label: (0,external_wp_i18n_.__)('Rows per table', 'woocommerce'),
        value: rowsPerTable,
        options: Array.from({
          length: 20
        }, (v, key) => ({
          v: key + 1,
          label: key + 1
        })),
        onChange: setRowsPerTable
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

  return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-dashboard__dashboard-leaderboards"
  }, (0,external_wp_element_.createElement)(external_wc_components_.SectionHeader, {
    title: title || (0,external_wp_i18n_.__)('Leaderboards', 'woocommerce'),
    menu: renderMenu()
  }), (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-dashboard__columns"
  }, renderLeaderboards({
    allLeaderboards,
    hiddenBlocks,
    query,
    rowsPerTable,
    filters
  }))));
};

Leaderboards.propTypes = {
  query: (prop_types_default()).object.isRequired
};
/* harmony default export */ var leaderboards = ((0,external_wp_compose_.compose)((0,external_wp_data_.withSelect)(select => {
  const {
    getItems,
    getItemsError
  } = select(external_wc_data_.ITEMS_STORE_NAME);
  const {
    leaderboards: allLeaderboards
  } = (0,admin_settings/* getAdminSetting */.O3)('dataEndpoints', {
    leaderboards: []
  });
  return {
    allLeaderboards,
    getItems,
    getItemsError
  };
}))(Leaderboards));

/***/ })

}]);