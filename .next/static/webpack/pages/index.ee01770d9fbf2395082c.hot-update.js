"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/willypark22/Documents/weather-app-react/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var apiKey = \"3ae85c1c464adaa4838817f2916dbc89\";\n  var city = \"los angeles\";\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),\n      weather = _useState[0],\n      setWeather = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      userData = _useState2[0],\n      setUserData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('imperial'),\n      units = _useState3[0],\n      setUnits = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      cast = _useState4[0],\n      setCast = _useState4[1]; // useEffect(() => {\n  //   fetchData();\n  // }, [])\n\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = (0,_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var result;\n      return _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(event.key === 'Enter')) {\n                _context.next = 13;\n                break;\n              }\n\n              _context.prev = 1;\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(userData, \"&units=\").concat(units, \"&appid=\").concat(apiKey));\n\n            case 4:\n              result = _context.sent;\n              setWeather(result.data);\n              setUserData('');\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n              console.error(_context.t0);\n\n            case 12:\n              console.log(weather);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function fetchData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var capitalizeWord = function capitalizeWord(word) {\n    var words = word.split(\" \");\n\n    for (var i in words) {\n      words[i] = words[i][0].toUpperCase() + words[i].substr(1);\n    }\n\n    words.splice(word.split(\" \"), 1, \" \");\n    return words;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        children: \"Weather React App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Weather React Application using the Open Weather API\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        value: userData,\n        type: \"text\",\n        placeholder: \"Search for a city\",\n        onChange: function onChange(e) {\n          setUserData(e.target.value);\n          console.log(e.target.value);\n        },\n        onKeyPress: fetchData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), typeof weather.main != \"undefined\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [weather.name, \", \", weather.sys.country]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [Math.round(weather.main.temp), \"\\xB0\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: capitalizeWord(weather.weather[0].description)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, this) : '']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"YyUSaG6YghwFXogztthqK8/MBRQ=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNDLEtBQVYsQ0FBWDtBQUE2QmQsVUFBQUEsT0FBTyxDQUFDRSxHQUFSLENBQVlVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFyQjtBQUE0QixTQUo3RTtBQUtFLGtCQUFVLEVBQUVwQjtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsRUFlSSxPQUFPUixPQUFPLENBQUM2QixJQUFmLElBQXVCLFdBQXhCLGdCQUNDO0FBQUEsOEJBQ0U7QUFBQSxtQkFBTTdCLE9BQU8sQ0FBQzhCLElBQWQsUUFBc0I5QixPQUFPLENBQUMrQixHQUFSLENBQVlDLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdsQyxPQUFPLENBQUM2QixJQUFSLENBQWFNLElBQXhCLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLGtCQUFNbEIsY0FBYyxDQUFDakIsT0FBTyxDQUFDQSxPQUFSLENBQWdCLENBQWhCLEVBQW1Cb0MsV0FBcEI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEdBTUksRUFyQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBOUR1QnZDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBhcGlLZXkgPSBcIjNhZTg1YzFjNDY0YWRhYTQ4Mzg4MTdmMjkxNmRiYzg5XCJcbiAgY29uc3QgY2l0eSA9IFwibG9zIGFuZ2VsZXNcIlxuXG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1bml0cywgc2V0VW5pdHNdID0gdXNlU3RhdGUoJ2ltcGVyaWFsJyk7XG4gIGNvbnN0IFtjYXN0LCBzZXRDYXN0XSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoRGF0YSgpO1xuICAvLyB9LCBbXSlcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dXNlckRhdGF9JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7YXBpS2V5fWApO1xuICAgICAgICBzZXRXZWF0aGVyKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgc2V0VXNlckRhdGEoJycpO1xuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYXBpdGFsaXplV29yZCA9ICh3b3JkKSA9PiB7XG4gICAgY29uc3Qgd29yZHMgPSB3b3JkLnNwbGl0KFwiIFwiKTtcbiAgICBmb3IobGV0IGkgaW4gd29yZHMpIHtcbiAgICAgIHdvcmRzW2ldID0gd29yZHNbaV1bMF0udG9VcHBlckNhc2UoKSArIHdvcmRzW2ldLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICB3b3Jkcy5zcGxpY2Uod29yZC5zcGxpdChcIiBcIiksIDEsIFwiIFwiKTtcbiAgICByZXR1cm4gd29yZHM7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2VhdGhlciBSZWFjdCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2VhdGhlciBSZWFjdCBBcHBsaWNhdGlvbiB1c2luZyB0aGUgT3BlbiBXZWF0aGVyIEFQSVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgY2l0eVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VXNlckRhdGEoZS50YXJnZXQudmFsdWUpOyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIG9uS2V5UHJlc3M9e2ZldGNoRGF0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgeyh0eXBlb2Ygd2VhdGhlci5tYWluICE9IFwidW5kZWZpbmVkXCIpID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+e3dlYXRoZXIubmFtZX0sIHt3ZWF0aGVyLnN5cy5jb3VudHJ5fTwvZGl2PlxuICAgICAgICAgIDxkaXY+e01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXApfcKwPC9kaXY+XG4gICAgICAgICAgPGRpdj57Y2FwaXRhbGl6ZVdvcmQod2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKCcnKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiYXBpS2V5IiwiY2l0eSIsIndlYXRoZXIiLCJzZXRXZWF0aGVyIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInVuaXRzIiwic2V0VW5pdHMiLCJjYXN0Iiwic2V0Q2FzdCIsImZldGNoRGF0YSIsImV2ZW50Iiwia2V5IiwiZ2V0IiwicmVzdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImNhcGl0YWxpemVXb3JkIiwid29yZCIsIndvcmRzIiwic3BsaXQiLCJpIiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJzcGxpY2UiLCJjb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYWluIiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJNYXRoIiwicm91bmQiLCJ0ZW1wIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});