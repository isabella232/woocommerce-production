"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[3700],{

/***/ 99144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CustomersReport; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__(22629);
// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(92694);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: ./client/lib/async-requests/index.js
var async_requests = __webpack_require__(63193);
;// CONCATENATED MODULE: ./client/analytics/report/customers/config.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const CUSTOMERS_REPORT_FILTERS_FILTER = 'woocommerce_admin_customers_report_filters';
const CUSTOMERS_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_customers_report_advanced_filters';
/**
 * @typedef {import('../index.js').filter} filter
 */

/**
 * Customers Report Filters.
 *
 * @filter woocommerce_admin_customers_report_filters
 * @param {Array.<filter>} filters Report filters.
 */

const filters = (0,external_wp_hooks_.applyFilters)(CUSTOMERS_REPORT_FILTERS_FILTER, [{
  label: (0,external_wp_i18n_.__)('Show', 'woocommerce'),
  staticParams: ['paged', 'per_page'],
  param: 'filter',
  showFilters: () => true,
  filters: [{
    label: (0,external_wp_i18n_.__)('All Customers', 'woocommerce'),
    value: 'all'
  }, {
    label: (0,external_wp_i18n_.__)('Single Customer', 'woocommerce'),
    value: 'select_customer',
    chartMode: 'item-comparison',
    subFilters: [{
      component: 'Search',
      value: 'single_customer',
      chartMode: 'item-comparison',
      path: ['select_customer'],
      settings: {
        type: 'customers',
        param: 'customers',
        getLabels: async_requests/* getCustomerLabels */.jk,
        labels: {
          placeholder: (0,external_wp_i18n_.__)('Type to search for a customer', 'woocommerce'),
          button: (0,external_wp_i18n_.__)('Single Customer', 'woocommerce')
        }
      }
    }]
  }, {
    label: (0,external_wp_i18n_.__)('Advanced filters', 'woocommerce'),
    value: 'advanced'
  }]
}]);
/*eslint-disable max-len*/

/**
 * Customers Report Advanced Filters.
 *
 * @filter woocommerce_admin_customers_report_advanced_filters
 * @param {Object} advancedFilters         Report Advanced Filters.
 * @param {string} advancedFilters.title   Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */

const advancedFilters = (0,external_wp_hooks_.applyFilters)(CUSTOMERS_REPORT_ADVANCED_FILTERS_FILTER, {
  title: (0,external_wp_i18n_._x)('Customers match {{select /}} filters', 'A sentence describing filters for Customers. See screen shot for context: https://cloudup.com/cCsm3GeXJbE', 'woocommerce'),
  filters: {
    name: {
      labels: {
        add: (0,external_wp_i18n_.__)('Name', 'woocommerce'),
        placeholder: (0,external_wp_i18n_.__)('Search', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove customer name filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a customer name filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: (0,external_wp_i18n_.__)('{{title}}Name{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select customer name', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer names including a given name(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Includes', 'customer names', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer names excluding a given name(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Excludes', 'customer names', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'customers',
        getLabels: (0,async_requests/* getRequestByIdString */.qc)(external_wc_data_.NAMESPACE + '/customers', customer => ({
          id: customer.id,
          label: customer.name
        }))
      }
    },
    country: {
      labels: {
        add: (0,external_wp_i18n_.__)('Country / Region', 'woocommerce'),
        placeholder: (0,external_wp_i18n_.__)('Search', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove country / region filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a country / region filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: (0,external_wp_i18n_.__)('{{title}}Country / Region{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select country / region', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to countries including a given country or countries. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Includes', 'countries', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to countries excluding a given country or countries. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Excludes', 'countries', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'countries',
        getLabels: async value => {
          const countries = await (0,external_wp_data_.resolveSelect)(external_wc_data_.COUNTRIES_STORE_NAME).getCountries();
          const allLabels = countries.map(country => ({
            key: country.code,
            label: (0,external_wp_htmlEntities_.decodeEntities)(country.name)
          }));
          const labels = value.split(',');
          return await allLabels.filter(label => {
            return labels.includes(label.key);
          });
        }
      }
    },
    username: {
      labels: {
        add: (0,external_wp_i18n_.__)('Username', 'woocommerce'),
        placeholder: (0,external_wp_i18n_.__)('Search customer username', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove customer username filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a customer username filter match', 'woocommerce'),

        /* translators: A sentence describing a customer username filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: (0,external_wp_i18n_.__)('{{title}}Username{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select customer username', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer usernames including a given username(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Includes', 'customer usernames', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer usernames excluding a given username(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Excludes', 'customer usernames', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'usernames',
        getLabels: async_requests/* getCustomerLabels */.jk
      }
    },
    email: {
      labels: {
        add: (0,external_wp_i18n_.__)('Email', 'woocommerce'),
        placeholder: (0,external_wp_i18n_.__)('Search customer email', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove customer email filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a customer email filter match', 'woocommerce'),

        /* translators: A sentence describing a customer email filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: (0,external_wp_i18n_.__)('{{title}}Email{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select customer email', 'woocommerce')
      },
      rules: [{
        value: 'includes',

        /* translators: Sentence fragment, logical, "Includes" refers to customer emails including a given email(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Includes', 'customer emails', 'woocommerce')
      }, {
        value: 'excludes',

        /* translators: Sentence fragment, logical, "Excludes" refers to customer emails excluding a given email(s). Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Excludes', 'customer emails', 'woocommerce')
      }],
      input: {
        component: 'Search',
        type: 'emails',
        getLabels: (0,async_requests/* getRequestByIdString */.qc)(external_wc_data_.NAMESPACE + '/customers', customer => ({
          id: customer.id,
          label: customer.email
        }))
      }
    },
    orders_count: {
      labels: {
        add: (0,external_wp_i18n_.__)('No. of Orders', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove order filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select an order count filter match', 'woocommerce'),
        title: (0,external_wp_i18n_.__)('{{title}}No. of Orders{{/title}} {{rule /}} {{filter /}}', 'woocommerce')
      },
      rules: [{
        value: 'max',

        /* translators: Sentence fragment, logical, "Less Than" refers to number of orders a customer has placed, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Less Than', 'number of orders', 'woocommerce')
      }, {
        value: 'min',

        /* translators: Sentence fragment, logical, "More Than" refers to number of orders a customer has placed, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('More Than', 'number of orders', 'woocommerce')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to number of orders a customer has placed, between two given integers. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Between', 'number of orders', 'woocommerce')
      }],
      input: {
        component: 'Number'
      }
    },
    total_spend: {
      labels: {
        add: (0,external_wp_i18n_.__)('Total Spend', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove total spend filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a total spend filter match', 'woocommerce'),
        title: (0,external_wp_i18n_.__)('{{title}}Total Spend{{/title}} {{rule /}} {{filter /}}', 'woocommerce')
      },
      rules: [{
        value: 'max',

        /* translators: Sentence fragment, logical, "Less Than" refers to total spending by a customer, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Less Than', 'total spend by customer', 'woocommerce')
      }, {
        value: 'min',

        /* translators: Sentence fragment, logical, "Less Than" refers to total spending by a customer, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('More Than', 'total spend by customer', 'woocommerce')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to total spending by a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Between', 'total spend by customer', 'woocommerce')
      }],
      input: {
        component: 'Currency'
      }
    },
    avg_order_value: {
      labels: {
        add: (0,external_wp_i18n_.__)('AOV', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove average order value filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select an average order value filter match', 'woocommerce'),
        title: (0,external_wp_i18n_.__)('{{title}}AOV{{/title}} {{rule /}} {{filter /}}', 'woocommerce')
      },
      rules: [{
        value: 'max',

        /* translators: Sentence fragment, logical, "Less Than" refers to average order value of a customer, more than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Less Than', 'average order value of customer', 'woocommerce')
      }, {
        value: 'min',

        /* translators: Sentence fragment, logical, "Less Than" refers to average order value of a customer, less than a given amount. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('More Than', 'average order value of customer', 'woocommerce')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Between', 'average order value of customer', 'woocommerce')
      }],
      input: {
        component: 'Currency'
      }
    },
    registered: {
      labels: {
        add: (0,external_wp_i18n_.__)('Registered', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove registered filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a registered filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: (0,external_wp_i18n_.__)('{{title}}Registered{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select registered date', 'woocommerce')
      },
      rules: [{
        value: 'before',

        /* translators: Sentence fragment, logical, "Before" refers to customers registered before a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Before', 'date', 'woocommerce')
      }, {
        value: 'after',

        /* translators: Sentence fragment, logical, "after" refers to customers registered after a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('After', 'date', 'woocommerce')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Between', 'date', 'woocommerce')
      }],
      input: {
        component: 'Date'
      }
    },
    last_active: {
      labels: {
        add: (0,external_wp_i18n_.__)('Last active', 'woocommerce'),
        remove: (0,external_wp_i18n_.__)('Remove last active filter', 'woocommerce'),
        rule: (0,external_wp_i18n_.__)('Select a last active filter match', 'woocommerce'),

        /* translators: A sentence describing a Product filter. See screen shot for context: https://cloudup.com/cCsm3GeXJbE */
        title: (0,external_wp_i18n_.__)('{{title}}Last active{{/title}} {{rule /}} {{filter /}}', 'woocommerce'),
        filter: (0,external_wp_i18n_.__)('Select registered date', 'woocommerce')
      },
      rules: [{
        value: 'before',

        /* translators: Sentence fragment, logical, "Before" refers to customers registered before a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Before', 'date', 'woocommerce')
      }, {
        value: 'after',

        /* translators: Sentence fragment, logical, "after" refers to customers registered after a given date. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('After', 'date', 'woocommerce')
      }, {
        value: 'between',

        /* translators: Sentence fragment, logical, "Between" refers to average order value of a customer, between two given amounts. Screenshot for context: https://cloudup.com/cCsm3GeXJbE */
        label: (0,external_wp_i18n_._x)('Between', 'date', 'woocommerce')
      }],
      input: {
        component: 'Date'
      }
    }
  }
});
/*eslint-enable max-len*/
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(55609);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wc","number"]
var external_wc_number_ = __webpack_require__(81595);
// EXTERNAL MODULE: external ["wc","wcSettings"]
var external_wc_wcSettings_ = __webpack_require__(74617);
// EXTERNAL MODULE: external ["wc","date"]
var external_wc_date_ = __webpack_require__(81921);
// EXTERNAL MODULE: ./client/analytics/components/report-table/index.js + 2 modules
var report_table = __webpack_require__(13732);
// EXTERNAL MODULE: ./client/lib/currency-context.js + 1 modules
var currency_context = __webpack_require__(83199);
// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(4411);
;// CONCATENATED MODULE: ./client/analytics/report/customers/table.js


/**
 * External dependencies
 */









/**
 * Internal dependencies
 */





function CustomersReportTable(_ref) {
  let {
    isRequesting,
    query,
    filters,
    advancedFilters
  } = _ref;
  const context = (0,external_wp_element_.useContext)(currency_context/* CurrencyContext */.$);
  const {
    countries,
    loadingCountries
  } = (0,external_wp_data_.useSelect)(select => {
    const {
      getCountries,
      hasFinishedResolution
    } = select(external_wc_data_.COUNTRIES_STORE_NAME);
    return {
      countries: getCountries(),
      loadingCountries: !hasFinishedResolution('getCountries')
    };
  });

  const getHeadersContent = () => {
    return [{
      label: (0,external_wp_i18n_.__)('Name', 'woocommerce'),
      key: 'name',
      required: true,
      isLeftAligned: true,
      isSortable: true
    }, {
      label: (0,external_wp_i18n_.__)('Username', 'woocommerce'),
      key: 'username',
      hiddenByDefault: true
    }, {
      label: (0,external_wp_i18n_.__)('Last active', 'woocommerce'),
      key: 'date_last_active',
      defaultSort: true,
      isSortable: true
    }, {
      label: (0,external_wp_i18n_.__)('Date registered', 'woocommerce'),
      key: 'date_registered',
      isSortable: true
    }, {
      label: (0,external_wp_i18n_.__)('Email', 'woocommerce'),
      key: 'email'
    }, {
      label: (0,external_wp_i18n_.__)('Orders', 'woocommerce'),
      key: 'orders_count',
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Total spend', 'woocommerce'),
      key: 'total_spend',
      isSortable: true,
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('AOV', 'woocommerce'),
      screenReaderLabel: (0,external_wp_i18n_.__)('Average order value', 'woocommerce'),
      key: 'avg_order_value',
      isNumeric: true
    }, {
      label: (0,external_wp_i18n_.__)('Country / Region', 'woocommerce'),
      key: 'country',
      isSortable: true
    }, {
      label: (0,external_wp_i18n_.__)('City', 'woocommerce'),
      key: 'city',
      hiddenByDefault: true,
      isSortable: true
    }, {
      label: (0,external_wp_i18n_.__)('Region', 'woocommerce'),
      key: 'state',
      hiddenByDefault: true,
      isSortable: true
    }, {
      label: (0,external_wp_i18n_.__)('Postal code', 'woocommerce'),
      key: 'postcode',
      hiddenByDefault: true,
      isSortable: true
    }];
  };

  const getCountryName = code => {
    return typeof countries[code] !== 'undefined' ? countries[code] : null;
  };

  const getRowsContent = customers => {
    const dateFormat = (0,admin_settings/* getAdminSetting */.O3)('dateFormat', external_wc_date_.defaultTableDateFormat);
    const {
      formatAmount,
      formatDecimal: getCurrencyFormatDecimal,
      getCurrencyConfig
    } = context;
    return customers === null || customers === void 0 ? void 0 : customers.map(customer => {
      const {
        avg_order_value: avgOrderValue,
        date_last_active: dateLastActive,
        date_registered: dateRegistered,
        email,
        name,
        user_id: userId,
        orders_count: ordersCount,
        username,
        total_spend: totalSpend,
        postcode,
        city,
        state,
        country
      } = customer;
      const countryName = getCountryName(country);
      const customerNameLink = userId ? (0,external_wp_element_.createElement)(external_wc_components_.Link, {
        href: (0,external_wc_wcSettings_.getAdminLink)('user-edit.php?user_id=' + userId),
        type: "wp-admin"
      }, name) : name;
      const dateLastActiveDisplay = dateLastActive ? (0,external_wp_element_.createElement)(external_wc_components_.Date, {
        date: dateLastActive,
        visibleFormat: dateFormat
      }) : '—';
      const dateRegisteredDisplay = dateRegistered ? (0,external_wp_element_.createElement)(external_wc_components_.Date, {
        date: dateRegistered,
        visibleFormat: dateFormat
      }) : '—';
      const countryDisplay = (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(external_wp_components_.Tooltip, {
        text: countryName
      }, (0,external_wp_element_.createElement)("span", {
        "aria-hidden": "true"
      }, country)), (0,external_wp_element_.createElement)("span", {
        className: "screen-reader-text"
      }, countryName));
      return [{
        display: customerNameLink,
        value: name
      }, {
        display: username,
        value: username
      }, {
        display: dateLastActiveDisplay,
        value: dateLastActive
      }, {
        display: dateRegisteredDisplay,
        value: dateRegistered
      }, {
        display: (0,external_wp_element_.createElement)("a", {
          href: 'mailto:' + email
        }, email),
        value: email
      }, {
        display: (0,external_wc_number_.formatValue)(getCurrencyConfig(), 'number', ordersCount),
        value: ordersCount
      }, {
        display: formatAmount(totalSpend),
        value: getCurrencyFormatDecimal(totalSpend)
      }, {
        display: formatAmount(avgOrderValue),
        value: getCurrencyFormatDecimal(avgOrderValue)
      }, {
        display: countryDisplay,
        value: country
      }, {
        display: city,
        value: city
      }, {
        display: state,
        value: state
      }, {
        display: postcode,
        value: postcode
      }];
    });
  };

  const getSummary = totals => {
    const {
      customers_count: customersCount = 0,
      avg_orders_count: avgOrdersCount = 0,
      avg_total_spend: avgTotalSpend = 0,
      avg_avg_order_value: avgAvgOrderValue = 0
    } = totals;
    const {
      formatAmount,
      getCurrencyConfig
    } = context;
    const currency = getCurrencyConfig();
    return [{
      label: (0,external_wp_i18n_._n)('customer', 'customers', customersCount, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', customersCount)
    }, {
      label: (0,external_wp_i18n_._n)('Average order', 'Average orders', avgOrdersCount, 'woocommerce'),
      value: (0,external_wc_number_.formatValue)(currency, 'number', avgOrdersCount)
    }, {
      label: (0,external_wp_i18n_.__)('Average lifetime spend', 'woocommerce'),
      value: formatAmount(avgTotalSpend)
    }, {
      label: (0,external_wp_i18n_.__)('Average order value', 'woocommerce'),
      value: formatAmount(avgAvgOrderValue)
    }];
  };

  return (0,external_wp_element_.createElement)(report_table/* default */.Z, {
    endpoint: "customers",
    getHeadersContent: getHeadersContent,
    getRowsContent: getRowsContent,
    getSummary: getSummary,
    summaryFields: ['customers_count', 'avg_orders_count', 'avg_total_spend', 'avg_avg_order_value'],
    isRequesting: isRequesting || loadingCountries,
    itemIdField: "id",
    query: query,
    labels: {
      placeholder: (0,external_wp_i18n_.__)('Search by customer name', 'woocommerce')
    },
    searchBy: "customers",
    title: (0,external_wp_i18n_.__)('Customers', 'woocommerce'),
    columnPrefsKey: "customers_report_columns",
    filters: filters,
    advancedFilters: advancedFilters
  });
}

/* harmony default export */ var table = (CustomersReportTable);
// EXTERNAL MODULE: ./client/analytics/components/report-filters/index.js
var report_filters = __webpack_require__(25619);
;// CONCATENATED MODULE: ./client/analytics/report/customers/index.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




class CustomersReport extends external_wp_element_.Component {
  render() {
    const {
      isRequesting,
      query,
      path
    } = this.props;
    const tableQuery = {
      orderby: 'date_last_active',
      order: 'desc',
      ...query
    };
    return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(report_filters/* default */.Z, {
      query: query,
      path: path,
      filters: filters,
      showDatePicker: false,
      advancedFilters: advancedFilters,
      report: "customers"
    }), (0,external_wp_element_.createElement)(table, {
      isRequesting: isRequesting,
      query: tableQuery,
      filters: filters,
      advancedFilters: advancedFilters
    }));
  }

}
CustomersReport.propTypes = {
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

/***/ })

}]);