"use strict";
(self["webpackChunk_wcAdmin_webpackJsonp"] = self["webpackChunk_wcAdmin_webpackJsonp"] || []).push([[9525],{

/***/ 51053:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69307);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65736);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9818);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67221);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _task_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44254);
/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93902);
/* harmony import */ var _tasks_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78162);


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







const TaskDashboard = _ref => {
  let {
    query,
    twoColumns
  } = _ref;
  const {
    task
  } = query;
  const {
    isResolving,
    taskLists
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return {
      taskLists: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__.ONBOARDING_STORE_NAME).getTaskListsByIds(['setup_two_column', 'extended_two_column']),
      isResolving: select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_3__.ONBOARDING_STORE_NAME).isResolving('getTaskListsByIds')
    };
  });

  const getCurrentTask = () => {
    if (!task) {
      return null;
    }

    const tasks = taskLists.reduce((acc, taskList) => [...acc, ...taskList.tasks], []);
    const currentTask = tasks.find(t => t.id === task);

    if (!currentTask) {
      return null;
    }

    return currentTask;
  };

  const currentTask = getCurrentTask();

  if (task && !currentTask) {
    return null;
  }

  if (isResolving || !taskLists[0]) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_placeholder__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      twoColumns: twoColumns
    });
  }

  if (currentTask) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "woocommerce-task-dashboard__container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tasks_task__WEBPACK_IMPORTED_MODULE_6__/* .Task */ .i, {
      query: query,
      task: currentTask
    }));
  } // List of task items to be shown on the main task list.
  // Any other remaining tasks will be moved to the extended task list.


  const taskList = taskLists[0];
  const setupTasks = taskList.tasks;
  const completedTasks = setupTasks.filter(setupTask => setupTask.isComplete);
  const isTaskListComplete = setupTasks.length === completedTasks.length;
  const dismissedTasks = setupTasks.filter(setupTask => setupTask.isDismissed);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, setupTasks && (taskList.isVisible || task) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_task_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    id: taskList.id,
    eventName: "tasklist",
    twoColumns: twoColumns,
    keepCompletedTaskList: taskList.keepCompletedTaskList,
    dismissedTasks: dismissedTasks || [],
    isComplete: isTaskListComplete,
    query: query,
    tasks: setupTasks,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Get ready to start selling', 'woocommerce')
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskDashboard);

/***/ })

}]);