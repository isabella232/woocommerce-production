"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[8597],{

/***/ 43285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "StoreAlerts": function() { return /* binding */ StoreAlerts; },
  "default": function() { return /* binding */ store_alerts; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(55609);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@automattic+interpolate-components@1.2.1_react@17.0.2/node_modules/@automattic/interpolate-components/dist/esm/index.js
var esm = __webpack_require__(29497);
// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(94333);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(76292);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@8.1.0/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__(62907);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@8.1.0/node_modules/@wordpress/icons/build-module/library/chevron-left.js
var chevron_left = __webpack_require__(78810);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@8.1.0/node_modules/@wordpress/icons/build-module/library/chevron-right.js
var chevron_right = __webpack_require__(64793);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(14599);
// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(14812);
// EXTERNAL MODULE: ./client/lib/sanitize-html/index.js
var sanitize_html = __webpack_require__(96862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./client/layout/store-alerts/placeholder.js


/**
 * External dependencies
 */




class StoreAlertsPlaceholder extends external_wp_element_.Component {
  render() {
    const {
      hasMultipleAlerts
    } = this.props;
    return (0,external_wp_element_.createElement)(external_wp_components_.Card, {
      className: "woocommerce-store-alerts is-loading",
      "aria-hidden": true,
      size: null
    }, (0,external_wp_element_.createElement)(external_wp_components_.CardHeader, {
      isBorderless: true
    }, (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder"
    }), hasMultipleAlerts && (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder"
    })), (0,external_wp_element_.createElement)(external_wp_components_.CardBody, null, (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-store-alerts__message"
    }, (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder"
    }), (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder"
    }))), (0,external_wp_element_.createElement)(external_wp_components_.CardFooter, {
      isBorderless: true
    }, (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder"
    })));
  }

}

/* harmony default export */ var placeholder = (StoreAlertsPlaceholder);
StoreAlertsPlaceholder.propTypes = {
  /**
   * Whether multiple alerts exists.
   */
  hasMultipleAlerts: (prop_types_default()).bool
};
StoreAlertsPlaceholder.defaultProps = {
  hasMultipleAlerts: false
};
// EXTERNAL MODULE: ./client/utils/admin-settings.js
var admin_settings = __webpack_require__(4411);
;// CONCATENATED MODULE: ./client/layout/store-alerts/index.js


/**
 * External dependencies
 */












/**
 * Internal dependencies
 */





class StoreAlerts extends external_wp_element_.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.previousAlert = this.previousAlert.bind(this);
    this.nextAlert = this.nextAlert.bind(this);
  }

  previousAlert(event) {
    event.stopPropagation();
    const {
      currentIndex
    } = this.state;

    if (currentIndex > 0) {
      this.setState({
        currentIndex: currentIndex - 1
      });
    }
  }

  nextAlert(event) {
    event.stopPropagation();
    const alerts = this.getAlerts();
    const {
      currentIndex
    } = this.state;

    if (currentIndex < alerts.length - 1) {
      this.setState({
        currentIndex: currentIndex + 1
      });
    }
  }

  renderActions(alert) {
    const {
      triggerNoteAction,
      updateNote
    } = this.props;
    const actions = alert.actions.map(action => {
      return (0,external_wp_element_.createElement)(external_wp_components_.Button, {
        key: action.name,
        isPrimary: action.primary,
        isSecondary: !action.primary,
        href: action.url || undefined,
        onClick: () => triggerNoteAction(alert.id, action.id)
      }, action.label);
    }); // TODO: should "next X" be the start, or exactly 1X from the current date?

    const snoozeOptions = [{
      value: external_moment_default()().add(4, 'hours').unix().toString(),
      label: (0,external_wp_i18n_.__)('Later Today', 'woocommerce')
    }, {
      value: external_moment_default()().add(1, 'day').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
      label: (0,external_wp_i18n_.__)('Tomorrow', 'woocommerce')
    }, {
      value: external_moment_default()().add(1, 'week').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
      label: (0,external_wp_i18n_.__)('Next Week', 'woocommerce')
    }, {
      value: external_moment_default()().add(1, 'month').hour(9).minute(0).second(0).millisecond(0).unix().toString(),
      label: (0,external_wp_i18n_.__)('Next Month', 'woocommerce')
    }];

    const setReminderDate = snoozeOption => {
      updateNote(alert.id, {
        status: 'snoozed',
        date_reminder: snoozeOption.value
      });
      const eventProps = {
        alert_name: alert.name,
        alert_title: alert.title,
        snooze_duration: snoozeOption.value,
        snooze_label: snoozeOption.label
      };
      (0,external_wc_tracks_.recordEvent)('store_alert_snooze', eventProps);
    };

    const snooze = alert.is_snoozable && (0,external_wp_element_.createElement)(external_wp_components_.SelectControl, {
      className: "woocommerce-store-alerts__snooze",
      options: [{
        label: (0,external_wp_i18n_.__)('Remind Me Later', 'woocommerce'),
        value: '0'
      }, ...snoozeOptions],
      onChange: value => {
        if (value === '0') {
          return;
        }

        const reminderOption = snoozeOptions.find(option => option.value === value);
        const reminderDate = {
          value,
          label: reminderOption && reminderOption.label
        };
        setReminderDate(reminderDate);
      }
    });

    if (actions || snooze) {
      return (0,external_wp_element_.createElement)("div", {
        className: "woocommerce-store-alerts__actions"
      }, actions, snooze);
    }
  }

  getAlerts() {
    return (this.props.alerts || []).filter(note => note.status === 'unactioned');
  }

  render() {
    const alerts = this.getAlerts();
    const preloadAlertCount = (0,admin_settings/* getAdminSetting */.O3)('alertCount', 0, count => parseInt(count, 10));

    if (preloadAlertCount > 0 && this.props.isLoading) {
      return (0,external_wp_element_.createElement)(placeholder, {
        hasMultipleAlerts: preloadAlertCount > 1
      });
    } else if (alerts.length === 0) {
      return null;
    }

    const {
      currentIndex
    } = this.state;
    const numberOfAlerts = alerts.length;
    const alert = alerts[currentIndex];
    const type = alert.type;
    const className = classnames_default()('woocommerce-store-alerts', {
      'is-alert-error': type === 'error',
      'is-alert-update': type === 'update'
    });
    return (0,external_wp_element_.createElement)(external_wp_components_.Card, {
      className: className,
      size: null
    }, (0,external_wp_element_.createElement)(external_wp_components_.CardHeader, {
      isBorderless: true
    }, (0,external_wp_element_.createElement)(external_wc_experimental_.Text, {
      variant: "title.medium",
      as: "h2",
      size: "24",
      lineHeight: "32px"
    }, alert.title), numberOfAlerts > 1 && (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-store-alerts__pagination"
    }, (0,external_wp_element_.createElement)(external_wp_components_.Button, {
      onClick: this.previousAlert,
      disabled: currentIndex === 0,
      label: (0,external_wp_i18n_.__)('Previous Alert', 'woocommerce')
    }, (0,external_wp_element_.createElement)(icon/* default */.Z, {
      icon: chevron_left/* default */.Z,
      className: "arrow-left-icon"
    })), (0,external_wp_element_.createElement)("span", {
      className: "woocommerce-store-alerts__pagination-label",
      role: "status",
      "aria-live": "polite"
    }, (0,esm/* default */.Z)({
      mixedString: (0,external_wp_i18n_.__)('{{current /}} of {{total /}}', 'woocommerce'),
      components: {
        current: (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, currentIndex + 1),
        total: (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, numberOfAlerts)
      }
    })), (0,external_wp_element_.createElement)(external_wp_components_.Button, {
      onClick: this.nextAlert,
      disabled: numberOfAlerts - 1 === currentIndex,
      label: (0,external_wp_i18n_.__)('Next Alert', 'woocommerce')
    }, (0,external_wp_element_.createElement)(icon/* default */.Z, {
      icon: chevron_right/* default */.Z,
      className: "arrow-right-icon"
    })))), (0,external_wp_element_.createElement)(external_wp_components_.CardBody, null, (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-store-alerts__message",
      dangerouslySetInnerHTML: (0,sanitize_html/* default */.ZP)(alert.content)
    })), (0,external_wp_element_.createElement)(external_wp_components_.CardFooter, {
      isBorderless: true
    }, this.renderActions(alert)));
  }

}
const ALERTS_QUERY = {
  page: 1,
  per_page: external_wc_data_.QUERY_DEFAULTS.pageSize,
  type: 'error,update',
  status: 'unactioned'
};
/* harmony default export */ var store_alerts = ((0,external_wp_compose_.compose)((0,external_wp_data_.withSelect)(select => {
  const {
    getNotes,
    isResolving
  } = select(external_wc_data_.NOTES_STORE_NAME); // Filter out notes that may have been marked actioned or not delayed after the initial request

  const alerts = getNotes(ALERTS_QUERY);
  const isLoading = isResolving('getNotes', [ALERTS_QUERY]);
  return {
    alerts,
    isLoading
  };
}), (0,external_wp_data_.withDispatch)(dispatch => {
  const {
    triggerNoteAction,
    updateNote
  } = dispatch(external_wc_data_.NOTES_STORE_NAME);
  return {
    triggerNoteAction,
    updateNote
  };
}))(StoreAlerts));

/***/ })

}]);