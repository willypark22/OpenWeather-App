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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/willypark22/Documents/weather-app-react/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var apiKey = \"3ae85c1c464adaa4838817f2916dbc89\";\n  var city = \"los angeles\";\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),\n      weather = _useState[0],\n      setWeather = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      userData = _useState2[0],\n      setUserData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('imperial'),\n      units = _useState3[0],\n      setUnits = _useState3[1]; // useEffect(() => {\n  //   fetchData();\n  // }, [])\n\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = (0,_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var result;\n      return _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(event.key === 'Enter')) {\n                _context.next = 13;\n                break;\n              }\n\n              _context.prev = 1;\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(userData, \"&units=\").concat(units, \"&appid=\").concat(apiKey));\n\n            case 4:\n              result = _context.sent;\n              setWeather(result.data);\n              setUserData('');\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n              console.error(_context.t0);\n\n            case 12:\n              console.log(weather);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function fetchData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var capitalizeWord = function capitalizeWord(word) {\n    var words = word.split(\" \");\n\n    for (var i in words) {\n      words[i] = words[i][0].toUpperCase() + words[i].substr(1);\n    }\n\n    words.join(\" \");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        children: \"Weather React App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Weather React Application using the Open Weather API\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        value: userData,\n        type: \"text\",\n        placeholder: \"Search for a city\",\n        onChange: function onChange(e) {\n          setUserData(e.target.value);\n          console.log(e.target.value);\n        },\n        onKeyPress: fetchData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), typeof weather != undefined ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [weather.name, \", \", weather.sys.country]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [Math.round(weather.main.temp), \"\\xB0\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: function children() {\n          return capitalizeWord(weather.weather[0].description);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, this) : '']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"2KWutb2/0eeiNuyAGazXX3rqbQ0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBZUksT0FBT04sT0FBUCxJQUFrQjJCLFNBQW5CLGdCQUNDO0FBQUEsOEJBQ0U7QUFBQSxtQkFBTTNCLE9BQU8sQ0FBQzRCLElBQWQsUUFBc0I1QixPQUFPLENBQUM2QixHQUFSLENBQVlDLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdoQyxPQUFPLENBQUNpQyxJQUFSLENBQWFDLElBQXhCLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLGtCQUFNO0FBQUEsaUJBQU1uQixjQUFjLENBQUNmLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQixDQUFoQixFQUFtQm1DLFdBQXBCLENBQXBCO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FNSSxFQXJCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7R0E1RHVCdEM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGFwaUtleSA9IFwiM2FlODVjMWM0NjRhZGFhNDgzODgxN2YyOTE2ZGJjODlcIlxuICBjb25zdCBjaXR5ID0gXCJsb3MgYW5nZWxlc1wiXG5cbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VuaXRzLCBzZXRVbml0c10gPSB1c2VTdGF0ZSgnaW1wZXJpYWwnKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoRGF0YSgpO1xuICAvLyB9LCBbXSlcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dXNlckRhdGF9JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7YXBpS2V5fWApO1xuICAgICAgICBzZXRXZWF0aGVyKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgc2V0VXNlckRhdGEoJycpO1xuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYXBpdGFsaXplV29yZCA9ICh3b3JkKSA9PiB7XG4gICAgY29uc3Qgd29yZHMgPSB3b3JkLnNwbGl0KFwiIFwiKTtcbiAgICBmb3IobGV0IGkgaW4gd29yZHMpIHtcbiAgICAgIHdvcmRzW2ldID0gd29yZHNbaV1bMF0udG9VcHBlckNhc2UoKSArIHdvcmRzW2ldLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICB3b3Jkcy5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XZWF0aGVyIFJlYWN0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWF0aGVyIFJlYWN0IEFwcGxpY2F0aW9uIHVzaW5nIHRoZSBPcGVuIFdlYXRoZXIgQVBJXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3VzZXJEYXRhfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYSBjaXR5XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRVc2VyRGF0YShlLnRhcmdldC52YWx1ZSk7IGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgb25LZXlQcmVzcz17ZmV0Y2hEYXRhfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7KHR5cGVvZiB3ZWF0aGVyICE9IHVuZGVmaW5lZCkgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj57d2VhdGhlci5uYW1lfSwge3dlYXRoZXIuc3lzLmNvdW50cnl9PC9kaXY+XG4gICAgICAgICAgPGRpdj57TWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4udGVtcCl9wrA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PnsoKSA9PiBjYXBpdGFsaXplV29yZCh3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoJycpfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJhcGlLZXkiLCJjaXR5Iiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidW5pdHMiLCJzZXRVbml0cyIsImZldGNoRGF0YSIsImV2ZW50Iiwia2V5IiwiZ2V0IiwicmVzdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImNhcGl0YWxpemVXb3JkIiwid29yZCIsIndvcmRzIiwic3BsaXQiLCJpIiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJqb2luIiwiY29udGFpbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwidW5kZWZpbmVkIiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});