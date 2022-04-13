"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[1920],{

/***/ 57038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55609);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86158);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14599);
/* harmony import */ var _woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _activity_panel_display_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27240);
/* harmony import */ var _tasks_task_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23720);
/* harmony import */ var _tasks_placeholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76388);


/**
 * External dependencies
 */







/**
 * Internal dependencies
 */






const ExtendedTask = _ref => {
  let {
    query
  } = _ref;
  const {
    hideTaskList
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.ONBOARDING_STORE_NAME);
  const {
    updateOptions
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.OPTIONS_STORE_NAME);
  const {
    task
  } = query;
  const {
    isResolving,
    taskLists
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      isResolving: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.ONBOARDING_STORE_NAME).isResolving('getTaskListsByIds'),
      taskLists: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_4__.ONBOARDING_STORE_NAME).getTaskListsByIds(['extended_two_column'])
    };
  });

  const toggleTaskList = taskList => {
    const {
      id,
      isHidden
    } = taskList;
    const newValue = !isHidden;
    (0,_woocommerce_tracks__WEBPACK_IMPORTED_MODULE_5__.recordEvent)(newValue ? `${id}_tasklist_hide` : `${id}_tasklist_show`, {});
    hideTaskList(id);
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateOptions({
      woocommerce_task_list_prompt_shown: true
    });
  }, [taskLists, isResolving]); // If a task detail is being shown, we shouldn't show the extended tasklist.

  if (task) {
    return null;
  }

  if (isResolving) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tasks_placeholder__WEBPACK_IMPORTED_MODULE_8__/* .TasksPlaceholder */ .S, {
      query: query
    });
  }

  const extendedTaskList = taskLists[0];

  if (!extendedTaskList || extendedTaskList.tasks.length === 0) {
    return null;
  }

  const completedTasks = extendedTaskList.tasks.filter(extendedTaskListTask => {
    return extendedTaskListTask.completed;
  }); // Use custom isComplete since we're manually adding tasks
  // to the extended task list.

  const isComplete = completedTasks.length === extendedTaskList.tasks.length;
  const {
    id,
    eventPrefix,
    isHidden,
    isVisible,
    isToggleable,
    title,
    tasks
  } = extendedTaskList;

  if (!isVisible) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tasks_task_list__WEBPACK_IMPORTED_MODULE_7__/* .TaskList */ .a, {
    id: id,
    eventPrefix: eventPrefix,
    isComplete: isComplete,
    query: query,
    tasks: tasks,
    title: title
  }), isToggleable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_activity_panel_display_options__WEBPACK_IMPORTED_MODULE_6__/* .DisplayOption */ .z, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    className: "woocommerce-layout__homescreen-display-options",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display', 'woocommerce')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    className: "woocommerce-layout__homescreen-extension-tasklist-toggle",
    icon: !isHidden && _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    isSelected: !isHidden,
    role: "menuitemcheckbox",
    onClick: () => toggleTaskList(extendedTaskList)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show things to do next', 'woocommerce')))));
};

/* harmony default export */ __webpack_exports__["default"] = (ExtendedTask);

/***/ })

}]);