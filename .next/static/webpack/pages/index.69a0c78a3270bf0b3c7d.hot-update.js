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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/willypark22/Documents/weather-app-react/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var apiKey = \"3ae85c1c464adaa4838817f2916dbc89\";\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}),\n      weather = _useState[0],\n      setWeather = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      userData = _useState2[0],\n      setUserData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('imperial'),\n      units = _useState3[0],\n      setUnits = _useState3[1]; // useEffect(() => {\n  //   fetchData();\n  // }, [])\n\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = (0,_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var result;\n      return _Users_willypark22_Documents_weather_app_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(event.key === 'Enter')) {\n                _context.next = 13;\n                break;\n              }\n\n              _context.prev = 1;\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(userData, \"&units=\").concat(units, \"&appid=\").concat(apiKey));\n\n            case 4:\n              result = _context.sent;\n              setWeather(result.data);\n              setUserData('');\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n              console.error(_context.t0);\n\n            case 12:\n              console.log(weather);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function fetchData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var capitalizeWord = function capitalizeWord(word) {\n    var words = word.split(\" \");\n\n    for (var i in words) {\n      words[i] = words[i][0].toUpperCase() + words[i].substr(1);\n    }\n\n    return words.join(' ');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        children: \"Weather React App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Weather React Application using the Open Weather API\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        value: userData,\n        type: \"text\",\n        placeholder: \"Search for a city\",\n        onChange: function onChange(e) {\n          setUserData(e.target.value);\n          console.log(e.target.value);\n        },\n        onKeyPress: fetchData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), typeof weather.main != \"undefined\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [weather.name, \", \", weather.sys.country]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [Math.round(weather.main.temp), \"\\xB0\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: capitalizeWord(weather.weather[0].description)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [weather.main.temp_max, \" \", weather.main.temp_min]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, this) : '']\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"2KWutb2/0eeiNuyAGazXX3rqbQ0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU00sSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUcsa0NBQWY7O0FBRUEsa0JBQThCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFPRyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFnQ0osK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT0ssUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEJOLCtDQUFRLENBQUMsVUFBRCxDQUFsQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxRQUFkLGlCQUw2QixDQU83QjtBQUNBO0FBQ0E7OztBQUVBLE1BQU1DLFNBQVM7QUFBQSwrU0FBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDYkEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsT0FERDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBR1NiLGdEQUFBLDREQUE4RE8sUUFBOUQsb0JBQWdGRSxLQUFoRixvQkFBK0ZMLE1BQS9GLEVBSFQ7O0FBQUE7QUFHTlcsY0FBQUEsTUFITTtBQUlaVCxjQUFBQSxVQUFVLENBQUNTLE1BQU0sQ0FBQ0MsSUFBUixDQUFWO0FBQ0FSLGNBQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFMWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFaUyxjQUFBQSxPQUFPLENBQUNDLEtBQVI7O0FBUlk7QUFVZEQsY0FBQUEsT0FBTyxDQUFDRSxHQUFSLENBQVlkLE9BQVo7O0FBVmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVE0sU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQWNBLE1BQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQy9CLFFBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsR0FBWCxDQUFkOztBQUVBLFNBQUksSUFBSUMsQ0FBUixJQUFhRixLQUFiLEVBQW9CO0FBQ2xCQSxNQUFBQSxLQUFLLENBQUNFLENBQUQsQ0FBTCxHQUFXRixLQUFLLENBQUNFLENBQUQsQ0FBTCxDQUFTLENBQVQsRUFBWUMsV0FBWixLQUE0QkgsS0FBSyxDQUFDRSxDQUFELENBQUwsQ0FBU0UsTUFBVCxDQUFnQixDQUFoQixDQUF2QztBQUNEOztBQUVELFdBQU9KLEtBQUssQ0FBQ0ssSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNELEdBUkQ7O0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUU1QiwwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDZCQUNFO0FBQ0UsYUFBSyxFQUFFUSxRQURUO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxtQkFBVyxFQUFDLG1CQUhkO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQ3NCLENBQUQsRUFBTztBQUFDckIsVUFBQUEsV0FBVyxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE2QmQsVUFBQUEsT0FBTyxDQUFDRSxHQUFSLENBQVlVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFyQjtBQUE0QixTQUo3RTtBQUtFLGtCQUFVLEVBQUVwQjtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsRUFlSSxPQUFPTixPQUFPLENBQUMyQixJQUFmLElBQXVCLFdBQXhCLGdCQUNDO0FBQUEsOEJBQ0U7QUFBQSxtQkFBTTNCLE9BQU8sQ0FBQzRCLElBQWQsUUFBc0I1QixPQUFPLENBQUM2QixHQUFSLENBQVlDLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdoQyxPQUFPLENBQUMyQixJQUFSLENBQWFNLElBQXhCLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLGtCQUFNbEIsY0FBYyxDQUFDZixPQUFPLENBQUNBLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJrQyxXQUFwQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFBLG1CQUFNbEMsT0FBTyxDQUFDMkIsSUFBUixDQUFhUSxRQUFuQixPQUE4Qm5DLE9BQU8sQ0FBQzJCLElBQVIsQ0FBYVMsUUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FPSSxFQXRCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7R0E3RHVCdEM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGFwaUtleSA9IFwiM2FlODVjMWM0NjRhZGFhNDgzODgxN2YyOTE2ZGJjODlcIlxuXG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt1bml0cywgc2V0VW5pdHNdID0gdXNlU3RhdGUoJ2ltcGVyaWFsJyk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBmZXRjaERhdGEoKTtcbiAgLy8gfSwgW10pXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3VzZXJEYXRhfSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gKTtcbiAgICAgICAgc2V0V2VhdGhlcihyZXN1bHQuZGF0YSk7XG4gICAgICAgIHNldFVzZXJEYXRhKCcnKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2FwaXRhbGl6ZVdvcmQgPSAod29yZCkgPT4ge1xuICAgIGNvbnN0IHdvcmRzID0gd29yZC5zcGxpdChcIiBcIik7XG5cbiAgICBmb3IobGV0IGkgaW4gd29yZHMpIHtcbiAgICAgIHdvcmRzW2ldID0gd29yZHNbaV1bMF0udG9VcHBlckNhc2UoKSArIHdvcmRzW2ldLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldlYXRoZXIgUmVhY3QgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldlYXRoZXIgUmVhY3QgQXBwbGljYXRpb24gdXNpbmcgdGhlIE9wZW4gV2VhdGhlciBBUElcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17dXNlckRhdGF9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIGNpdHlcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFVzZXJEYXRhKGUudGFyZ2V0LnZhbHVlKTsgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICBvbktleVByZXNzPXtmZXRjaERhdGF9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsodHlwZW9mIHdlYXRoZXIubWFpbiAhPSBcInVuZGVmaW5lZFwiKSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2Pnt3ZWF0aGVyLm5hbWV9LCB7d2VhdGhlci5zeXMuY291bnRyeX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wKX3CsDwvZGl2PlxuICAgICAgICAgIDxkaXY+e2NhcGl0YWxpemVXb3JkKHdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbil9PC9kaXY+XG4gICAgICAgICAgPGRpdj57d2VhdGhlci5tYWluLnRlbXBfbWF4fSB7d2VhdGhlci5tYWluLnRlbXBfbWlufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoJycpfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJhcGlLZXkiLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1bml0cyIsInNldFVuaXRzIiwiZmV0Y2hEYXRhIiwiZXZlbnQiLCJrZXkiLCJnZXQiLCJyZXN1bHQiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwiY2FwaXRhbGl6ZVdvcmQiLCJ3b3JkIiwid29yZHMiLCJzcGxpdCIsImkiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsImpvaW4iLCJjb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYWluIiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJNYXRoIiwicm91bmQiLCJ0ZW1wIiwiZGVzY3JpcHRpb24iLCJ0ZW1wX21heCIsInRlbXBfbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});