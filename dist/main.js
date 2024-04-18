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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\n\r\nconst form = document.querySelector(\"form\");\r\n\r\nconst input = document.querySelector(\"#search\");\r\n\r\nasync function getData() {\r\n  form.addEventListener(\"submit\", async (e) => {\r\n    e.preventDefault();\r\n    const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(input.value);\r\n    await (0,_view__WEBPACK_IMPORTED_MODULE_0__.displayInfo)(data);\r\n    input.value = ''\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://weather_app/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n// api_key = 2e7f9704618e4a8ca33154215241304\r\n\r\n\r\n\r\n(0,_data__WEBPACK_IMPORTED_MODULE_0__.getData)();\r\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayInfo: () => (/* binding */ displayInfo)\n/* harmony export */ });\nasync function displayInfo(weatherData) {\r\n  const temp = document.querySelector(\".temp\");\r\n  const time = document.querySelector(\".time\");\r\n  const country = document.querySelector(\".country\");\r\n  const humidity = document.querySelector(\".humidity\");\r\n  const city = document.querySelector(\".city\");\r\n\r\n  temp.textContent = (await weatherData.current.feelslike_c) + \"°C\";\r\n\r\n  temp.innerHTML += `<img src=\"images/cloudy_1163661.png\" width=\"80\" height=\"80\">`\r\n  country.textContent = await weatherData.location.country;\r\n  city.textContent = await weatherData.location.name;\r\n\r\n  humidity.textContent = \"humididty \" + await weatherData.current.humidity;\r\n  time.textContent = await weatherData.location.localtime;\r\n}\r\n\n\n//# sourceURL=webpack://weather_app/./src/view.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(location) {\r\n  const url = `https://api.weatherapi.com/v1/current.json?key=2e7f9704618e4a8ca33154215241304&q=${location}`;\r\n  const response = await fetch(url);\r\n  const dataJson = await response.json();\r\n  return dataJson\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather_app/./src/weather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;