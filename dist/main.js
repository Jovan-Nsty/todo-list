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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-weight: bold;\n}\n\n:root {\n    --main-sidepanel-color: #121212;\n    --main-mainpanel-color: #161a1d;\n    --main-text-color: #e3e3e3;\n}\n\nhtml, body {\n    height: 100vh;\n}\n\n#main-container {\n    display: flex;\n    height: 100%;\n}\n\n#side-panel {\n    background-color: var(--main-sidepanel-color);\n    width: 250px;\n    min-width: 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#todo-project-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n\n#todo-name {\n    display: none;\n}\n\n#todo-title, #todo-list-name {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px;\n    background-color: var(--main-sidepanel-color);\n}\n\n#todo-list-name {\n    background-color: var(--main-mainpanel-color);\n}\n\n#main-panel {\n    background-color: var(--main-mainpanel-color);\n    flex: 2;\n}\n\nh1, h2 , li {\n    color: var(--main-text-color);\n}\n\n#todo-name {\n    height: 40px;\n    width: 210px;\n    min-width: 210px;\n    text-align: center;\n    border: none;\n    border-radius: 10px;\n}\n\n#todo-add-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    width: 210px;\n    min-width: 210px;\n    word-spacing: 2px;\n    border-radius: 10px;\n    border: none;\n    color: var(--main-text-color);\n    background-color: var(--main-sidepanel-color);\n}\n\n#todo-add-btn:hover {\n    cursor: pointer;\n    color: #fff;\n    background-color: var(--main-mainpanel-color);\n}\n\n#project-todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#project-todo-list > li {\n    list-style: none;\n    height: 40px;\n    width: 210px;\n    min-width: 210px;\n    word-spacing: 2px;\n    border-radius: 10px;\n    background-color: var(--main-sidepanel-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#project-todo-list > li:hover {\n    cursor: pointer;\n    color: #fff;\n    background-color: var(--main-mainpanel-color);\n}\n\n#todo-list-items {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#project-input-form {\n    margin-top: 35px;\n    height: 50px;\n    width: 1000px;\n    text-align: center;\n    font-size: large;\n}\n\n#todo-items-list {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.todo-item {\n    height: 50px;\n    width: 1000px;\n    padding: 10px;\n    list-style: none;\n    background-color: var(--main-sidepanel-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo-item > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.todo-item > div:nth-child(2) {\n    flex-grow: 2;\n}\n\n.todo-list-item-checkbox-btn {\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n    border: 1px solid #ccc; \n    border-radius: 3px; \n    cursor: pointer; \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UIComponents/MainPanel/formCreate.js":
/*!**************************************************!*\
  !*** ./src/UIComponents/MainPanel/formCreate.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formCreate: () => (/* binding */ formCreate)\n/* harmony export */ });\n// Module for creating the form that makes todo list items / tasks\n\nfunction formCreate() {\n    const form = document.createElement('form');\n    form.id = 'project-form';\n\n    const input = document.createElement('input');\n    input.setAttribute('type', 'text');\n    input.setAttribute('placeholder', 'Enter your task..');\n    input.setAttribute('id', 'project-input-form');\n    input.setAttribute('name', 'task-submit');\n\n    form.appendChild(input);\n\n    return form;\n}\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/MainPanel/formCreate.js?");

/***/ }),

/***/ "./src/UIComponents/MainPanel/formSubmit.js":
/*!**************************************************!*\
  !*** ./src/UIComponents/MainPanel/formSubmit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formSubmit: () => (/* binding */ formSubmit)\n/* harmony export */ });\n/* harmony import */ var _todo_createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../todo/createProject */ \"./src/todo/createProject.js\");\n/* harmony import */ var _todo_todoItemCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../todo/todoItemCreate */ \"./src/todo/todoItemCreate.js\");\n/* harmony import */ var _listItemCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listItemCreate */ \"./src/UIComponents/MainPanel/listItemCreate.js\");\n\n\n\n\n// Form submit action\nfunction formSubmit() {\n    const form = document.getElementById('project-input-form');\n    const listContainer = document.getElementById('todo-items-list');\n    const inputValue = form.value;\n\n    // Creating Todo Project sub-items / tasks\n    const todoItem = (0,_todo_todoItemCreate__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)();\n    todoItem.setTitle(inputValue);\n\n    // Adding sub items / tasks to Todo Project array task list\n    _todo_createProject__WEBPACK_IMPORTED_MODULE_0__.todo.setTaskListItem(todoItem);\n    \n    // Creating <li> sub items / tasks elements \n    listContainer.appendChild((0,_listItemCreate__WEBPACK_IMPORTED_MODULE_2__.listPopulate)(todoItem));\n\n    (0,_listItemCreate__WEBPACK_IMPORTED_MODULE_2__.updateDatasetIndex)();\n}\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/MainPanel/formSubmit.js?");

/***/ }),

/***/ "./src/UIComponents/MainPanel/listItemCreate.js":
/*!******************************************************!*\
  !*** ./src/UIComponents/MainPanel/listItemCreate.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listPopulate: () => (/* binding */ listPopulate),\n/* harmony export */   updateDatasetIndex: () => (/* binding */ updateDatasetIndex)\n/* harmony export */ });\n// Function for creating <li> for Todo Project sub items / tasks \nfunction listPopulate(value) {\n    const listItem = document.createElement('li');\n    listItem.classList.add('todo-item');\n    listItem.appendChild(createDivForElement(checkButtonPopulate()));\n    listItem.appendChild(createDivForElement(createTextElement(value)))\n    listItem.appendChild(createDivForElement(expandButtonPopulate()));\n    \n    return listItem;\n}\n\n// Checkbox button creation for Todo Project sub items / tasks toggle \nfunction checkButtonPopulate() {\n    const button = document.createElement('input');\n    button.setAttribute('type','checkbox');\n    button.setAttribute('name', 'delete');\n    button.classList.add('todo-list-item-checkbox-btn');\n\n    return button;\n}\n\n// Todo Project sub item / task title text content\nfunction createTextElement(title) {\n    const paragraph = document.createElement('p');\n    paragraph.innerText = title.getTitle();\n\n    return paragraph;\n}\n\n// Expand button creation for Todo Project sub items / tasks\nfunction expandButtonPopulate() {\n    const button = document.createElement('button');\n    button.classList.add('todo-list-item-expand-btn');\n    button.textContent = '+';\n\n    return button;\n}\n\n// Function to wrap <li> elements in <div>'s\nfunction createDivForElement(element) {\n    const div = document.createElement('div');\n    div.appendChild(element);\n    \n    return div;\n}\n\n// Function to add indexes to <li> sub item / task elements\nfunction updateDatasetIndex() {\n    const listItems = document.querySelectorAll('.todo-item');\n    listItems.forEach((item, index) => {\n        item.dataset.index = index++;\n    })\n}\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/MainPanel/listItemCreate.js?");

/***/ }),

/***/ "./src/UIComponents/MainPanel/updateMainPanel.js":
/*!*******************************************************!*\
  !*** ./src/UIComponents/MainPanel/updateMainPanel.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updateProjectTitle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateProjectTitle.js */ \"./src/UIComponents/MainPanel/updateProjectTitle.js\");\n/* harmony import */ var _updateProjectContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateProjectContent.js */ \"./src/UIComponents/MainPanel/updateProjectContent.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {  \n    (0,_updateProjectTitle_js__WEBPACK_IMPORTED_MODULE_0__.titleUpdate)();\n    (0,_updateProjectContent_js__WEBPACK_IMPORTED_MODULE_1__.updateContent)();\n})\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/MainPanel/updateMainPanel.js?");

/***/ }),

/***/ "./src/UIComponents/MainPanel/updateProjectContent.js":
/*!************************************************************!*\
  !*** ./src/UIComponents/MainPanel/updateProjectContent.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateContent: () => (/* binding */ updateContent)\n/* harmony export */ });\n/* harmony import */ var _formCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formCreate */ \"./src/UIComponents/MainPanel/formCreate.js\");\n/* harmony import */ var _formSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formSubmit */ \"./src/UIComponents/MainPanel/formSubmit.js\");\n\n\n\n// Function for individual Todo Project\nfunction updateContent() {\n    const content = document.getElementById('todo-list-items');\n    const todoList = document.getElementById('project-todo-list');\n    \n    // On each Todo Project click, form is created and <ul> list is created\n    function handleClick(event) {\n        const clickedListItem = event.target.closest('li.li-item');\n        \n        if(clickedListItem) {\n            content.textContent = '';\n            content.appendChild((0,_formCreate__WEBPACK_IMPORTED_MODULE_0__.formCreate)());\n            content.appendChild(listContainer());\n        }\n    }\n\n    todoList.addEventListener('click', handleClick);\n\n    content.addEventListener('submit', event => {\n        if(event.target.id === 'project-form') {\n            event.preventDefault();\n            (0,_formSubmit__WEBPACK_IMPORTED_MODULE_1__.formSubmit)();\n            document.getElementById('project-input-form').value = '';\n        }\n    })\n}\n\n// Function for creating the <ul> container for Todo Project sub items / tasks\nfunction listContainer() {\n    const list = document.createElement('ul');\n    list.id = 'todo-items-list';\n\n    return list;\n}\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/MainPanel/updateProjectContent.js?");

/***/ }),

/***/ "./src/UIComponents/MainPanel/updateProjectTitle.js":
/*!**********************************************************!*\
  !*** ./src/UIComponents/MainPanel/updateProjectTitle.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   titleUpdate: () => (/* binding */ titleUpdate)\n/* harmony export */ });\nfunction titleUpdate() {\n    const title = document.querySelector('h2');\n    const todoList = document.getElementById('project-todo-list');\n\n    function handleClick(event) {\n        const clickedListItem = event.target.closest('li.li-item');\n\n        if(clickedListItem) {\n            title.textContent = clickedListItem.textContent;\n        }\n    }\n\n    todoList.addEventListener('click', handleClick);\n}\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/MainPanel/updateProjectTitle.js?");

/***/ }),

/***/ "./src/UIComponents/SidePanel/buttonFormTransform.js":
/*!***********************************************************!*\
  !*** ./src/UIComponents/SidePanel/buttonFormTransform.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeFormOnSubmit: () => (/* binding */ closeFormOnSubmit)\n/* harmony export */ });\nconst button = document.getElementById('todo-add-btn');\nconst form = document.getElementById('todo-name');\n\nbutton.addEventListener('click', () => {\n    button.style.display = 'none';\n    form.style.display = 'block';\n})\n\ndocument.body.addEventListener('click', event => {\n    if (event.target !== form && event.target !== button) {\n        closeFormOnSubmit();\n    }\n})\n\nfunction closeFormOnSubmit() {\n    form.style.display = 'none';\n    button.style.display = 'block';\n}\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/SidePanel/buttonFormTransform.js?");

/***/ }),

/***/ "./src/UIComponents/SidePanel/manageTodoListDeleteButtons.js":
/*!*******************************************************************!*\
  !*** ./src/UIComponents/SidePanel/manageTodoListDeleteButtons.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDelBtn: () => (/* binding */ createDelBtn)\n/* harmony export */ });\n/* harmony import */ var _todo_todoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../todo/todoManager */ \"./src/todo/todoManager.js\");\n/* harmony import */ var _todoPrinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoPrinter */ \"./src/UIComponents/SidePanel/todoPrinter.js\");\n\n\n\n// Creating individual Todo Project delete button\nfunction createDelBtn() {\n    const todoList = document.querySelectorAll('.li-item');\n\n    for(let i = 1; i < todoList.length; i++) {\n        const createBtn = document.createElement('button');\n        createBtn.classList.add('del-btn');\n        createBtn.textContent = 'x';\n        todoList[i].appendChild(createBtn);\n\n        // Updating the Todo Project list\n        createBtn.addEventListener('click', () => {\n            updateTodoList(i);\n        })\n    }\n}\n\nfunction updateTodoList(index) {\n    (0,_todo_todoManager__WEBPACK_IMPORTED_MODULE_0__.deleteTodoFromArray)(index);\n    (0,_todoPrinter__WEBPACK_IMPORTED_MODULE_1__.printTodoArray)(_todo_todoManager__WEBPACK_IMPORTED_MODULE_0__.todosArray);\n    createDelBtn();\n}\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/SidePanel/manageTodoListDeleteButtons.js?");

/***/ }),

/***/ "./src/UIComponents/SidePanel/retrieveFormValueAndUpdateDOM.js":
/*!*********************************************************************!*\
  !*** ./src/UIComponents/SidePanel/retrieveFormValueAndUpdateDOM.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../todo/createProject */ \"./src/todo/createProject.js\");\n/* harmony import */ var _todo_todoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../todo/todoManager */ \"./src/todo/todoManager.js\");\n/* harmony import */ var _buttonFormTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonFormTransform */ \"./src/UIComponents/SidePanel/buttonFormTransform.js\");\n/* harmony import */ var _manageTodoListDeleteButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manageTodoListDeleteButtons */ \"./src/UIComponents/SidePanel/manageTodoListDeleteButtons.js\");\n/* harmony import */ var _todoPrinter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoPrinter */ \"./src/UIComponents/SidePanel/todoPrinter.js\");\n\n\n\n\n\n\nconst form = document.getElementById('todo-form');\n\nform.addEventListener('submit', event => {\n    event.preventDefault();\n\n    // Grabbing the form input value\n    const inputValue = document.getElementById('todo-name').value;\n    // Creating Todo Project with the form input value\n    (0,_todo_createProject__WEBPACK_IMPORTED_MODULE_0__.createTodoProject)(inputValue);\n    // Printing / Updating the Todo Project list to DOM\n    (0,_todoPrinter__WEBPACK_IMPORTED_MODULE_4__.printTodoArray)(_todo_todoManager__WEBPACK_IMPORTED_MODULE_1__.todosArray);\n    // Reseting the form input value\n    document.getElementById(\"todo-name\").value = \"\";\n    // Closing form on submit\n    (0,_buttonFormTransform__WEBPACK_IMPORTED_MODULE_2__.closeFormOnSubmit)();\n    // Creating delete buttons for each Todo Project\n    (0,_manageTodoListDeleteButtons__WEBPACK_IMPORTED_MODULE_3__.createDelBtn)();\n});\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/SidePanel/retrieveFormValueAndUpdateDOM.js?");

/***/ }),

/***/ "./src/UIComponents/SidePanel/todoPrinter.js":
/*!***************************************************!*\
  !*** ./src/UIComponents/SidePanel/todoPrinter.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   printTodoArray: () => (/* binding */ printTodoArray)\n/* harmony export */ });\n// Module for DOM manipulation & printing todo project list\n\nconst printTodoArray = array => {\n    const getList = document.getElementById('project-todo-list');\n    getList.textContent = '';\n\n    for (const todo of array) {\n        const makeListItem = document.createElement('li');\n        const makeAnchor = document.createElement('a');\n        makeListItem.classList.add('li-item');\n\n        makeAnchor.textContent = todo.getTodoTitle();\n        makeListItem.appendChild(makeAnchor);\n        getList.appendChild(makeListItem);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/UIComponents/SidePanel/todoPrinter.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todo_todoManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/todoManager.js */ \"./src/todo/todoManager.js\");\n/* harmony import */ var _UIComponents_SidePanel_todoPrinter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UIComponents/SidePanel/todoPrinter.js */ \"./src/UIComponents/SidePanel/todoPrinter.js\");\n/* harmony import */ var _UIComponents_SidePanel_buttonFormTransform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIComponents/SidePanel/buttonFormTransform.js */ \"./src/UIComponents/SidePanel/buttonFormTransform.js\");\n/* harmony import */ var _UIComponents_SidePanel_retrieveFormValueAndUpdateDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UIComponents/SidePanel/retrieveFormValueAndUpdateDOM.js */ \"./src/UIComponents/SidePanel/retrieveFormValueAndUpdateDOM.js\");\n/* harmony import */ var _UIComponents_MainPanel_updateMainPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UIComponents/MainPanel/updateMainPanel.js */ \"./src/UIComponents/MainPanel/updateMainPanel.js\");\n/* harmony import */ var _todo_createProject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/createProject.js */ \"./src/todo/createProject.js\");\n\n\n\n\n\n\n\n\n// Creating a default 'personal' todo list on page load\n(0,_todo_createProject_js__WEBPACK_IMPORTED_MODULE_6__.createTodoProject)('Personal');\n\n// Print all available todo projects\n(0,_UIComponents_SidePanel_todoPrinter_js__WEBPACK_IMPORTED_MODULE_2__.printTodoArray)(_todo_todoManager_js__WEBPACK_IMPORTED_MODULE_1__.todosArray);\n\n//# sourceURL=webpack://todo-list/./src/app.js?");

/***/ }),

/***/ "./src/todo/createProject.js":
/*!***********************************!*\
  !*** ./src/todo/createProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoProject: () => (/* binding */ createTodoProject),\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\n/* harmony import */ var _todoCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreate */ \"./src/todo/todoCreate.js\");\n/* harmony import */ var _todoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoManager */ \"./src/todo/todoManager.js\");\n\n\n\n// Module for creating todo projects\n\nlet todo;\n\nfunction createTodoProject(value) {\n    todo = (0,_todoCreate__WEBPACK_IMPORTED_MODULE_0__.createTodo)(value);\n    (0,_todoManager__WEBPACK_IMPORTED_MODULE_1__.addTodoToArray)(todo);\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/createProject.js?");

/***/ }),

/***/ "./src/todo/todoCreate.js":
/*!********************************!*\
  !*** ./src/todo/todoCreate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\n// Factory function for Todo Project\nconst createTodo = (title => {\n    const titleName = title;\n\n    let taskList = [];\n\n    const setTaskListItem = value => {\n        taskList.unshift(value);\n    }\n\n    const getTaskList = () => {\n        for (const task of taskList) {\n            console.log(task.getTitle());\n            console.log(task.getDescription());\n            console.log(task.getDueDate());\n            console.log(task.getPriority());\n        }\n    }\n\n    const getTodoTitle = () => {\n        return titleName;\n    }\n\n    return { getTodoTitle, setTaskListItem, getTaskList }\n})\n\n//# sourceURL=webpack://todo-list/./src/todo/todoCreate.js?");

/***/ }),

/***/ "./src/todo/todoItemCreate.js":
/*!************************************!*\
  !*** ./src/todo/todoItemCreate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem)\n/* harmony export */ });\n// Factory function for Todo Project sub-items\nconst createTodoItem = () => {\n    let title = '';\n    let description = '';\n    let dueDate = '';\n    let priority = '';\n\n    const setTitle = value => {\n        title = value;\n    }\n\n    const setDescription = value => {\n        description = value;\n    }\n\n    const setDueDate = value => {\n        dueDate = value;\n    }\n\n    const setPriority = value => {\n        priority = value;\n    }\n\n    const getTitle = () => {\n        return title;\n    }\n\n    const getDescription = () => {\n        return description;\n    }\n\n    const getDueDate = () => {\n        return dueDate;\n    }\n\n    const getPriority = () => {\n        return priority\n    }\n\n    return {\n        setTitle,\n        setDescription,\n        setDueDate,\n        setPriority,\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todoItemCreate.js?");

/***/ }),

/***/ "./src/todo/todoManager.js":
/*!*********************************!*\
  !*** ./src/todo/todoManager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoToArray: () => (/* binding */ addTodoToArray),\n/* harmony export */   deleteTodoFromArray: () => (/* binding */ deleteTodoFromArray),\n/* harmony export */   todosArray: () => (/* binding */ todosArray)\n/* harmony export */ });\n// Module for storing and manipulating todo projects - add/delete\n\nlet todosArray = [];\n\nconst addTodoToArray = obj => {\n    todosArray.push(obj);\n}\n\nconst deleteTodoFromArray = index => {\n    todosArray.splice(index, 1);\n}\n\n//# sourceURL=webpack://todo-list/./src/todo/todoManager.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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