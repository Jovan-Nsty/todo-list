/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreate.js */ \"./src/todoCreate.js\");\n/* harmony import */ var _todoManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoManager.js */ \"./src/todoManager.js\");\n/* harmony import */ var _todoPrinter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoPrinter.js */ \"./src/todoPrinter.js\");\n/* harmony import */ var _todoItemCreate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoItemCreate.js */ \"./src/todoItemCreate.js\");\n\n\n\n\n\nconst todo = (0,_todoCreate_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)('TODO');\n\nconst todoItem = (0,_todoItemCreate_js__WEBPACK_IMPORTED_MODULE_3__.createTodoItem)();\ntodoItem.setTitle('todo item');\ntodoItem.setDescription('this is my todo item');\ntodoItem.setDueDate('feb 22 2024');\ntodoItem.setPriority('medium');\n\ntodo.setTaskListItem(todoItem);\n\n(0,_todoManager_js__WEBPACK_IMPORTED_MODULE_1__.addTodoToArray)(todo);\n\n(0,_todoPrinter_js__WEBPACK_IMPORTED_MODULE_2__.printTodoArray)(_todoManager_js__WEBPACK_IMPORTED_MODULE_1__.todosArray);\ntodo.getTaskList();\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/todoCreate.js":
/*!***************************!*\
  !*** ./src/todoCreate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nconst createTodo = (title => {\n    const titleName = title;\n\n    let taskList = [];\n\n    const setTaskListItem = value => {\n        taskList.unshift(value);\n    }\n\n    const getTaskList = () => {\n        for (const task of taskList) {\n            console.log(task.getTitle());\n            console.log(task.getDescription());\n            console.log(task.getDueDate());\n            console.log(task.getPriority());\n        }\n    }\n\n    const getTodoTitle = () => {\n        return titleName;\n    }\n\n    return { getTodoTitle, setTaskListItem, getTaskList }\n})\n\n//# sourceURL=webpack://todo-list/./src/todoCreate.js?");

/***/ }),

/***/ "./src/todoItemCreate.js":
/*!*******************************!*\
  !*** ./src/todoItemCreate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem)\n/* harmony export */ });\nconst createTodoItem = () => {\n    let title = '';\n    let description = '';\n    let dueDate = '';\n    let priority = '';\n\n    const setTitle = value => {\n        title = value;\n    }\n\n    const setDescription = value => {\n        description = value;\n    }\n\n    const setDueDate = value => {\n        dueDate = value;\n    }\n\n    const setPriority = value => {\n        priority = value;\n    }\n\n    const getTitle = () => {\n        return title;\n    }\n\n    const getDescription = () => {\n        return description;\n    }\n\n    const getDueDate = () => {\n        return dueDate;\n    }\n\n    const getPriority = () => {\n        return priority\n    }\n\n    return {\n        setTitle,\n        setDescription,\n        setDueDate,\n        setPriority,\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/todoItemCreate.js?");

/***/ }),

/***/ "./src/todoManager.js":
/*!****************************!*\
  !*** ./src/todoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoToArray: () => (/* binding */ addTodoToArray),\n/* harmony export */   todosArray: () => (/* binding */ todosArray)\n/* harmony export */ });\nlet todosArray = [];\n\nconst addTodoToArray = obj => {\n    todosArray.unshift(obj);\n}\n\n//# sourceURL=webpack://todo-list/./src/todoManager.js?");

/***/ }),

/***/ "./src/todoPrinter.js":
/*!****************************!*\
  !*** ./src/todoPrinter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   printTodoArray: () => (/* binding */ printTodoArray)\n/* harmony export */ });\nconst printTodoArray = array => {\n    for (const todo of array) {\n        console.log(todo.getTodoTitle());\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/todoPrinter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;