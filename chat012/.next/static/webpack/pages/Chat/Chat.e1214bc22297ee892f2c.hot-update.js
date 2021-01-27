webpackHotUpdate_N_E("pages/Chat/Chat",{

/***/ "./pages/Chat/Chat.js":
/*!****************************!*\
  !*** ./pages/Chat/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Chat_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chat.module.scss */ \"./pages/Chat/Chat.module.scss\");\n/* harmony import */ var _Chat_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Chat_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/th3h00d/Desktop/testing/finalchat/chat01/pages/Chat/Chat.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ENDPOINT = 'http://localhost:4000';\nvar socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(ENDPOINT);\n\nfunction Chat() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      room = _useState2[0],\n      setRoom = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(location.search),\n        name = _queryString$parse.name,\n        room = _queryString$parse.room;\n\n    setRoom(room);\n    setName(name); // From here emit is thrown to the server\n\n    socket.emit('join', function (name) {\n      console.log(socket);\n    });\n  }, [ENDPOINT]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Chat, \"d0IL40A6in8C0M9kpYxzMuyI8u0=\");\n\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chat\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2hhdC9DaGF0LmpzPzI5ZWUiXSwibmFtZXMiOlsiRU5EUE9JTlQiLCJzb2NrZXQiLCJzb2NrZXRJT0NsaWVudCIsIkNoYXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicm9vbSIsInNldFJvb20iLCJ1c2VFZmZlY3QiLCJxdWVyeVN0cmluZyIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJlbWl0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsUUFBUSxHQUFHLHVCQUFqQjtBQUNBLElBQU1DLE1BQU0sR0FBR0MsdURBQWMsQ0FBQ0YsUUFBRCxDQUE3Qjs7QUFFQSxTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBRVlDLHNEQUFRLENBQUMsRUFBRCxDQUZwQjtBQUFBLE1BRUxDLElBRks7QUFBQSxNQUVDQyxPQUZEOztBQUFBLG1CQUdZRixzREFBUSxDQUFDLEVBQUQsQ0FIcEI7QUFBQSxNQUdMRyxJQUhLO0FBQUEsTUFHQ0MsT0FIRDs7QUFPWkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsNkJBRVdDLG1EQUFXLENBQUNDLEtBQVosQ0FBa0JDLFFBQVEsQ0FBQ0MsTUFBM0IsQ0FGWDtBQUFBLFFBRUpSLElBRkksc0JBRUpBLElBRkk7QUFBQSxRQUVFRSxJQUZGLHNCQUVFQSxJQUZGOztBQUlaQyxXQUFPLENBQUNELElBQUQsQ0FBUDtBQUNBRCxXQUFPLENBQUNELElBQUQsQ0FBUCxDQUxZLENBT1o7O0FBQ0FKLFVBQU0sQ0FBQ2EsSUFBUCxDQUFZLE1BQVosRUFBb0IsVUFBQ1QsSUFBRCxFQUFVO0FBQzFCVSxhQUFPLENBQUNDLEdBQVIsQ0FBWWYsTUFBWjtBQUNILEtBRkQ7QUFLSCxHQWJRLEVBYU4sQ0FBQ0QsUUFBRCxDQWJNLENBQVQ7QUFlQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsZ0JBQUtLO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQTNCUUYsSTs7S0FBQUEsSTtBQTZCTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9DaGF0L0NoYXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGF0Lm1vZHVsZS5zY3NzJ1xuXG5cblxuY29uc3QgRU5EUE9JTlQgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcbmNvbnN0IHNvY2tldCA9IHNvY2tldElPQ2xpZW50KEVORFBPSU5UKTtcblxuZnVuY3Rpb24gQ2hhdCgpIHtcblxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcm9vbSwgc2V0Um9vbV0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCB7IG5hbWUsIHJvb20gfSA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICAgICAgc2V0Um9vbShyb29tKTtcbiAgICAgICAgc2V0TmFtZShuYW1lKTtcblxuICAgICAgICAvLyBGcm9tIGhlcmUgZW1pdCBpcyB0aHJvd24gdG8gdGhlIHNlcnZlclxuICAgICAgICBzb2NrZXQuZW1pdCgnam9pbicsIChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb2NrZXQpO1xuICAgICAgICB9KTtcblxuXG4gICAgfSwgW0VORFBPSU5UXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Chat/Chat.js\n");

/***/ })

})