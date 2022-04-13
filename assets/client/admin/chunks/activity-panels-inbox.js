"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[8851],{

/***/ 55722:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": function() { return /* binding */ ActivityCard; },
  "e": function() { return /* reexport */ placeholder; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gridicons@3.4.0_react@17.0.2/node_modules/gridicons/dist/notice-outline.js
var notice_outline = __webpack_require__(59838);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(76292);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7862);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(55609);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(92819);
;// CONCATENATED MODULE: ./client/activity-panel/activity-card/placeholder.js


/**
 * External dependencies
 */





class ActivityCardPlaceholder extends external_wp_element_.Component {
  render() {
    const {
      className,
      hasAction,
      hasDate,
      hasSubtitle,
      lines
    } = this.props;
    const cardClassName = classnames_default()('woocommerce-activity-card is-loading', className);
    return (0,external_wp_element_.createElement)("div", {
      className: cardClassName,
      "aria-hidden": true
    }, (0,external_wp_element_.createElement)("span", {
      className: "woocommerce-activity-card__icon"
    }, (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder"
    })), (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-activity-card__header"
    }, (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-activity-card__title is-placeholder"
    }), hasSubtitle && (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-activity-card__subtitle is-placeholder"
    }), hasDate && (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-activity-card__date"
    }, (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder"
    }))), (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-activity-card__body"
    }, (0,external_lodash_.range)(lines).map(i => (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder",
      key: i
    }))), hasAction && (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-activity-card__actions"
    }, (0,external_wp_element_.createElement)("span", {
      className: "is-placeholder"
    })));
  }

}

ActivityCardPlaceholder.propTypes = {
  className: (prop_types_default()).string,
  hasAction: (prop_types_default()).bool,
  hasDate: (prop_types_default()).bool,
  hasSubtitle: (prop_types_default()).bool,
  lines: (prop_types_default()).number
};
ActivityCardPlaceholder.defaultProps = {
  hasAction: false,
  hasDate: false,
  hasSubtitle: false,
  lines: 1
};
/* harmony default export */ var placeholder = (ActivityCardPlaceholder);
;// CONCATENATED MODULE: ./client/activity-panel/activity-card/index.js


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Determine if the provided string is a date, as
 * formatted by wc_rest_prepare_date_response().
 *
 * @param {string} value String value
 */

const isDateString = value => // PHP date format: Y-m-d\TH:i:s.
/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value);

class ActivityCard extends external_wp_element_.Component {
  getCard() {
    const {
      actions,
      className,
      children,
      date,
      icon,
      subtitle,
      title,
      unread
    } = this.props;
    const cardClassName = classnames_default()('woocommerce-activity-card', className);
    const actionsList = Array.isArray(actions) ? actions : [actions];
    const dateString = isDateString(date) ? external_moment_default().utc(date).fromNow() : date;
    return (0,external_wp_element_.createElement)("section", {
      className: cardClassName
    }, unread && (0,external_wp_element_.createElement)("span", {
      className: "woocommerce-activity-card__unread"
    }), icon && (0,external_wp_element_.createElement)("span", {
      className: "woocommerce-activity-card__icon",
      "aria-hidden": true
    }, icon), title && (0,external_wp_element_.createElement)("header", {
      className: "woocommerce-activity-card__header"
    }, (0,external_wp_element_.createElement)(external_wc_components_.H, {
      className: "woocommerce-activity-card__title"
    }, title), subtitle && (0,external_wp_element_.createElement)("div", {
      className: "woocommerce-activity-card__subtitle"
    }, subtitle), dateString && (0,external_wp_element_.createElement)("span", {
      className: "woocommerce-activity-card__date"
    }, dateString)), children && (0,external_wp_element_.createElement)(external_wc_components_.Section, {
      className: "woocommerce-activity-card__body"
    }, children), actions && (0,external_wp_element_.createElement)("footer", {
      className: "woocommerce-activity-card__actions"
    }, actionsList.map((item, i) => (0,external_wp_element_.cloneElement)(item, {
      key: i
    }))));
  }

  render() {
    const {
      onClick
    } = this.props;

    if (onClick) {
      return (0,external_wp_element_.createElement)(external_wp_components_.Button, {
        className: "woocommerce-activity-card__button",
        onClick: onClick
      }, this.getCard());
    }

    return this.getCard();
  }

}

ActivityCard.propTypes = {
  actions: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).element), (prop_types_default()).element]),
  onClick: (prop_types_default()).func,
  className: (prop_types_default()).string,
  children: (prop_types_default()).node,
  date: (prop_types_default()).string,
  icon: (prop_types_default()).node,
  subtitle: (prop_types_default()).node,
  title: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).node]),
  unread: (prop_types_default()).bool
};
ActivityCard.defaultProps = {
  icon: (0,external_wp_element_.createElement)(notice_outline/* default */.Z, {
    size: 48
  }),
  unread: false
};



/***/ }),

/***/ 53919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxPanel": function() { return /* binding */ InboxPanel; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inbox_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27488);
/* harmony import */ var _abbreviated_notifications_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31610);


/**
 * Internal dependencies
 */



const InboxPanel = _ref => {
  let {
    hasAbbreviatedNotifications,
    thingsToDoNextCount
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "woocommerce-notification-panels"
  }, hasAbbreviatedNotifications && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_abbreviated_notifications_panel__WEBPACK_IMPORTED_MODULE_2__/* .AbbreviatedNotificationsPanel */ .vn, {
    thingsToDoNextCount: thingsToDoNextCount
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inbox_panel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    showHeader: false
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (InboxPanel);

/***/ }),

/***/ 27488:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ inbox_panel; }
});

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(69307);
// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(65736);
// EXTERNAL MODULE: external ["wc","components"]
var external_wc_components_ = __webpack_require__(86020);
// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(55609);
// EXTERNAL MODULE: external ["wc","data"]
var external_wc_data_ = __webpack_require__(67221);
// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(9818);
// EXTERNAL MODULE: external ["wc","tracks"]
var external_wc_tracks_ = __webpack_require__(14599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.2_react-dom@17.0.2+react@17.0.2/node_modules/react-transition-group/esm/TransitionGroup.js
var TransitionGroup = __webpack_require__(82418);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.2_react-dom@17.0.2+react@17.0.2/node_modules/react-transition-group/esm/CSSTransition.js
var CSSTransition = __webpack_require__(83786);
// EXTERNAL MODULE: external ["wc","experimental"]
var external_wc_experimental_ = __webpack_require__(14812);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(76292);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./client/activity-panel/activity-card/index.js + 1 modules
var activity_card = __webpack_require__(55722);
// EXTERNAL MODULE: ./client/inbox-panel/utils.js
var utils = __webpack_require__(82846);
// EXTERNAL MODULE: ./client/utils/index.js
var client_utils = __webpack_require__(92761);
;// CONCATENATED MODULE: ./client/inbox-panel/dismiss-all-modal.js


/**
 * External dependencies
 */






const DismissAllModal = _ref => {
  let {
    onClose
  } = _ref;
  const {
    createNotice
  } = (0,external_wp_data_.useDispatch)('core/notices');
  const {
    batchUpdateNotes,
    removeAllNotes
  } = (0,external_wp_data_.useDispatch)(external_wc_data_.NOTES_STORE_NAME);

  const dismissAllNotes = async () => {
    (0,external_wc_tracks_.recordEvent)('wcadmin_inbox_action_dismissall', {});

    try {
      const notesRemoved = await removeAllNotes({
        status: 'unactioned'
      });
      createNotice('success', (0,external_wp_i18n_.__)('All messages dismissed', 'woocommerce'), {
        actions: [{
          label: (0,external_wp_i18n_.__)('Undo', 'woocommerce'),
          onClick: () => {
            batchUpdateNotes(notesRemoved.map(note => note.id), {
              is_deleted: 0
            });
          }
        }]
      });
    } catch (e) {
      createNotice('error', (0,external_wp_i18n_.__)('Messages could not be dismissed', 'woocommerce'));
      onClose();
    }
  };

  return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, (0,external_wp_element_.createElement)(external_wp_components_.Modal, {
    title: (0,external_wp_i18n_.__)('Dismiss all messages', 'woocommerce'),
    className: "woocommerce-inbox-dismiss-all-modal",
    onRequestClose: onClose
  }, (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-inbox-dismiss-all-modal__wrapper"
  }, (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-usage-modal__message"
  }, (0,external_wp_i18n_.__)('Are you sure? Inbox messages will be dismissed forever.', 'woocommerce')), (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-usage-modal__actions"
  }, (0,external_wp_element_.createElement)(external_wp_components_.Button, {
    onClick: onClose
  }, (0,external_wp_i18n_.__)('Cancel', 'woocommerce')), (0,external_wp_element_.createElement)(external_wp_components_.Button, {
    isPrimary: true,
    onClick: () => {
      dismissAllNotes();
      onClose();
    }
  }, (0,external_wp_i18n_.__)('Yes, dismiss all', 'woocommerce'))))));
};

/* harmony default export */ var dismiss_all_modal = (DismissAllModal);
;// CONCATENATED MODULE: ./client/inbox-panel/index.js


/**
 * External dependencies
 */










/**
 * Internal dependencies
 */







const renderEmptyCard = () => (0,external_wp_element_.createElement)(activity_card/* ActivityCard */.U, {
  className: "woocommerce-empty-activity-card",
  title: (0,external_wp_i18n_.__)('Your inbox is empty', 'woocommerce'),
  icon: false
}, (0,external_wp_i18n_.__)('As things begin to happen in your store your inbox will start to fill up. ' + "You'll see things like achievements, new feature announcements, extension recommendations and more!", 'woocommerce'));

const onBodyLinkClick = (note, innerLink) => {
  (0,external_wc_tracks_.recordEvent)('inbox_action_click', {
    note_name: note.name,
    note_title: note.title,
    note_content_inner_link: innerLink
  });
};

let hasFiredPanelViewTrack = false;

const renderNotes = _ref => {
  let {
    hasNotes,
    isBatchUpdating,
    notes,
    onDismiss,
    onNoteActionClick,
    setShowDismissAllModal: onDismissAll,
    showHeader = true
  } = _ref;

  if (isBatchUpdating) {
    return;
  }

  if (!hasNotes) {
    return renderEmptyCard();
  }

  if (!hasFiredPanelViewTrack) {
    (0,external_wc_tracks_.recordEvent)('inbox_panel_view', {
      total: notes.length
    });
    hasFiredPanelViewTrack = true;
  }

  const screen = (0,client_utils/* getScreenName */.GG)();

  const onNoteVisible = note => {
    (0,external_wc_tracks_.recordEvent)('inbox_note_view', {
      note_content: note.content,
      note_name: note.name,
      note_title: note.title,
      note_type: note.type,
      screen
    });
  };

  const notesArray = Object.keys(notes).map(key => notes[key]);
  return (0,external_wp_element_.createElement)(external_wp_components_.Card, {
    size: "large"
  }, showHeader && (0,external_wp_element_.createElement)(external_wp_components_.CardHeader, {
    size: "medium"
  }, (0,external_wp_element_.createElement)("div", {
    className: "wooocommerce-inbox-card__header"
  }, (0,external_wp_element_.createElement)(external_wc_experimental_.Text, {
    size: "20",
    lineHeight: "28px",
    variant: "title.small"
  }, (0,external_wp_i18n_.__)('Inbox', 'woocommerce')), (0,external_wp_element_.createElement)(external_wc_components_.Badge, {
    count: notesArray.length
  })), (0,external_wp_element_.createElement)(external_wc_components_.EllipsisMenu, {
    label: (0,external_wp_i18n_.__)('Inbox Notes Options', 'woocommerce'),
    renderContent: _ref2 => {
      let {
        onToggle
      } = _ref2;
      return (0,external_wp_element_.createElement)("div", {
        className: "woocommerce-inbox-card__section-controls"
      }, (0,external_wp_element_.createElement)(external_wp_components_.Button, {
        onClick: () => {
          onDismissAll(true);
          onToggle();
        }
      }, (0,external_wp_i18n_.__)('Dismiss all', 'woocommerce')));
    }
  })), (0,external_wp_element_.createElement)(TransitionGroup/* default */.Z, {
    role: "menu"
  }, notesArray.map(note => {
    const {
      id: noteId,
      is_deleted: isDeleted
    } = note;

    if (isDeleted) {
      return null;
    }

    return (0,external_wp_element_.createElement)(CSSTransition/* default */.Z, {
      key: noteId,
      timeout: 500,
      classNames: "woocommerce-inbox-message"
    }, (0,external_wp_element_.createElement)(external_wc_experimental_.InboxNoteCard, {
      key: noteId,
      note: note,
      onDismiss: onDismiss,
      onNoteActionClick: onNoteActionClick,
      onBodyLinkClick: onBodyLinkClick,
      onNoteVisible: onNoteVisible
    }));
  })));
};

const INBOX_QUERY = {
  page: 1,
  per_page: external_wc_data_.QUERY_DEFAULTS.pageSize,
  status: 'unactioned',
  type: external_wc_data_.QUERY_DEFAULTS.noteTypes,
  orderby: 'date',
  order: 'desc',
  _fields: ['id', 'name', 'title', 'content', 'type', 'status', 'actions', 'date_created', 'date_created_gmt', 'layout', 'image', 'is_deleted', 'is_read', 'locale']
};

const InboxPanel = _ref3 => {
  let {
    showHeader = true
  } = _ref3;
  const {
    createNotice
  } = (0,external_wp_data_.useDispatch)('core/notices');
  const {
    removeNote,
    updateNote,
    triggerNoteAction
  } = (0,external_wp_data_.useDispatch)(external_wc_data_.NOTES_STORE_NAME);
  const {
    isError,
    isResolvingNotes,
    isBatchUpdating,
    notes
  } = (0,external_wp_data_.useSelect)(select => {
    const {
      getNotes,
      getNotesError,
      isResolving,
      isNotesRequesting
    } = select(external_wc_data_.NOTES_STORE_NAME);
    const WC_VERSION_61_RELEASE_DATE = external_moment_default()('2022-01-11', 'YYYY-MM-DD').valueOf();
    const supportedLocales = ['en_US', 'en_AU', 'en_CA', 'en_GB', 'en_ZA'];
    return {
      notes: getNotes(INBOX_QUERY).map(note => {
        const noteDate = external_moment_default()(note.date_created_gmt, 'YYYY-MM-DD').valueOf();

        if (supportedLocales.includes(note.locale) && noteDate >= WC_VERSION_61_RELEASE_DATE) {
          return { ...note,
            content: (0,utils/* truncateRenderableHTML */.r7)(note.content, 320)
          };
        }

        return note;
      }),
      isError: Boolean(getNotesError('getNotes', [INBOX_QUERY])),
      isResolvingNotes: isResolving('getNotes', [INBOX_QUERY]),
      isBatchUpdating: isNotesRequesting('batchUpdateNotes')
    };
  });
  const [showDismissAllModal, setShowDismissAllModal] = (0,external_wp_element_.useState)(false);

  const onDismiss = note => {
    const screen = (0,client_utils/* getScreenName */.GG)();
    (0,external_wc_tracks_.recordEvent)('inbox_action_dismiss', {
      note_name: note.name,
      note_title: note.title,
      note_name_dismiss_all: false,
      note_name_dismiss_confirmation: true,
      screen
    });
    const noteId = note.id;

    try {
      removeNote(noteId);
      createNotice('success', (0,external_wp_i18n_.__)('Message dismissed', 'woocommerce'), {
        actions: [{
          label: (0,external_wp_i18n_.__)('Undo', 'woocommerce'),
          onClick: () => {
            updateNote(noteId, {
              is_deleted: 0
            });
          }
        }]
      });
    } catch (e) {
      createNotice('error', (0,external_wp_i18n_._n)('Message could not be dismissed', 'Messages could not be dismissed', 1, 'woocommerce'));
    }
  };

  if (isError) {
    const title = (0,external_wp_i18n_.__)('There was an error getting your inbox. Please try again.', 'woocommerce');

    const actionLabel = (0,external_wp_i18n_.__)('Reload', 'woocommerce');

    const actionCallback = () => {
      // @todo Add tracking for how often an error is displayed, and the reload action is clicked.
      window.location.reload();
    };

    return (0,external_wp_element_.createElement)(external_wc_components_.EmptyContent, {
      title: title,
      actionLabel: actionLabel,
      actionURL: null,
      actionCallback: actionCallback
    });
  }

  const hasNotes = (0,utils/* hasValidNotes */.kS)(notes); // @todo After having a pagination implemented we should call the method "getNotes" with a different query since
  // the current one is only getting 25 notes and the count of unread notes only will refer to this 25 and not all the existing ones.

  return (0,external_wp_element_.createElement)(external_wp_element_.Fragment, null, showDismissAllModal && (0,external_wp_element_.createElement)(dismiss_all_modal, {
    onClose: () => {
      setShowDismissAllModal(false);
    }
  }), (0,external_wp_element_.createElement)("div", {
    className: "woocommerce-homepage-notes-wrapper"
  }, (isResolvingNotes || isBatchUpdating) && (0,external_wp_element_.createElement)(external_wc_components_.Section, null, (0,external_wp_element_.createElement)(external_wc_experimental_.InboxNotePlaceholder, {
    className: "banner message-is-unread"
  })), (0,external_wp_element_.createElement)(external_wc_components_.Section, null, !isResolvingNotes && !isBatchUpdating && renderNotes({
    hasNotes,
    isBatchUpdating,
    notes,
    onDismiss,
    onNoteActionClick: (note, action) => {
      triggerNoteAction(note.id, action.id);
    },
    setShowDismissAllModal,
    showHeader
  }))));
};

/* harmony default export */ var inbox_panel = (InboxPanel);

/***/ }),

/***/ 92761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DP": function() { return /* binding */ getUrlParams; },
/* harmony export */   "GG": function() { return /* binding */ getScreenName; }
/* harmony export */ });
/* unused harmony export sift */

/**
 * Get the URL params.
 *
 * @param {string} locationSearch - Querystring part of a URL, including the question mark (?).
 * @return {Object} - URL params.
 */

function getUrlParams(locationSearch) {
  if (locationSearch) {
    return locationSearch.substr(1).split('&').reduce((params, query) => {
      const chunks = query.split('=');
      const key = chunks[0];
      let value = decodeURIComponent(chunks[1]);
      value = isNaN(Number(value)) ? value : Number(value);
      return params[key] = value, params;
    }, {});
  }

  return {};
}
/**
 * Get the current screen name.
 *
 * @return {string} - Screen name.
 */

function getScreenName() {
  let screenName = '';
  const {
    page,
    path,
    post_type: postType
  } = getUrlParams(window.location.search);

  if (page) {
    const currentPage = page === 'wc-admin' ? 'home_screen' : page;
    screenName = path ? path.replace(/\//g, '_').substring(1) : currentPage;
  } else if (postType) {
    screenName = postType;
  }

  return screenName;
}
/**
 * Similar to filter, but return two arrays separated by a partitioner function
 *
 * @param {Array}    arr         - Original array of values.
 * @param {Function} partitioner - Function to return truthy/falsy values to separate items in array.
 *
 * @return {Array} - Array of two arrays, first including truthy values, and second including falsy.
 */

const sift = (arr, partitioner) => arr.reduce((all, curr) => {
  all[!!partitioner(curr) ? 0 : 1].push(curr);
  return all;
}, [[], []]);

/***/ }),

/***/ 59838:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.Z=_default;var _react=_interopRequireDefault(__webpack_require__(99196)),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-notice-outline",f,!!function isModulo18(a){return 0==a%18}(c)&&"needs-offset",!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z"})))}


/***/ })

}]);