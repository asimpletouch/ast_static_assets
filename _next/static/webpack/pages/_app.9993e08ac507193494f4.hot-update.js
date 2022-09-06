self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/shared/Darkmode.js":
/*!***************************************!*\
  !*** ./components/shared/Darkmode.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Darkmode_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Darkmode.module.css */ "./components/shared/Darkmode.module.css");
/* harmony import */ var _Darkmode_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Darkmode_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Files\\Programming\\website\\nextjs\\components\\shared\\Darkmode.js",
    _this = undefined,
    _s = $RefreshSig$();




var Darkmode = function Darkmode() {
  _s();

  // todo(victor): save this state in the browser localStorage
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    // check localStorage for theme
    return window.localStorage.getItem("theme") || "light";
  }),
      theme = _useState[0],
      setTheme = _useState[1];

  function toggleDarkmode(e) {
    setTheme(function (prevTheme) {
      if (prevTheme === "light") return "dark";else return "light";
    });
    document.querySelector("body").classList.toggle("dark-theme");
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return window.localStorage.setItem("theme", theme, [theme]);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_Darkmode_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleThemeButton),
    onClick: toggleDarkmode,
    children: theme === "light" ? "Light" : "Dark"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, _this);
};

_s(Darkmode, "S1MhA4OfDx9hX5bMXurEQj+jFNE=");

_c = Darkmode;
/* harmony default export */ __webpack_exports__["default"] = (Darkmode);

var _c;

$RefreshReg$(_c, "Darkmode");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRGFya21vZGUuanMiXSwibmFtZXMiOlsiRGFya21vZGUiLCJ1c2VTdGF0ZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlRGFya21vZGUiLCJlIiwicHJldlRoZW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsImNzc01vZHVsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCO0FBRHNCLGtCQUVJQywrQ0FBUSxDQUFDLFlBQU07QUFDeEM7QUFDQSxXQUFPQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEtBQXdDLE9BQS9DO0FBQ0EsR0FIaUMsQ0FGWjtBQUFBLE1BRWZDLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQU90QixXQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUMxQkYsWUFBUSxDQUFDLFVBQUNHLFNBQUQsRUFBZTtBQUN2QixVQUFJQSxTQUFTLEtBQUssT0FBbEIsRUFDQyxPQUFPLE1BQVAsQ0FERCxLQUdDLE9BQU8sT0FBUDtBQUNELEtBTE8sQ0FBUjtBQU1BQyxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDQyxNQUF6QyxDQUFnRCxZQUFoRDtBQUNBOztBQUVEQyxrREFBUyxDQUFDO0FBQUEsV0FBTVosTUFBTSxDQUFDQyxZQUFQLENBQW9CWSxPQUFwQixDQUE0QixPQUE1QixFQUFxQ1YsS0FBckMsRUFBNEMsQ0FBQ0EsS0FBRCxDQUE1QyxDQUFOO0FBQUEsR0FBRCxDQUFUO0FBRUEsc0JBQ0M7QUFBUSxhQUFTLEVBQUVXLCtFQUFuQjtBQUFpRCxXQUFPLEVBQUVULGNBQTFEO0FBQUEsY0FDRUYsS0FBSyxLQUFLLE9BQVYsR0FBb0IsT0FBcEIsR0FBOEI7QUFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0F4QkQ7O0dBQU1MLFE7O0tBQUFBLFE7QUEwQk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45OTkzZTA4YWM1MDcxOTM0OTRmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY3NzTW9kdWxlcyBmcm9tIFwiLi9EYXJrbW9kZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBEYXJrbW9kZSA9ICgpID0+IHtcclxuXHQvLyB0b2RvKHZpY3Rvcik6IHNhdmUgdGhpcyBzdGF0ZSBpbiB0aGUgYnJvd3NlciBsb2NhbFN0b3JhZ2VcclxuXHRjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuXHRcdC8vIGNoZWNrIGxvY2FsU3RvcmFnZSBmb3IgdGhlbWVcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImxpZ2h0XCI7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIHRvZ2dsZURhcmttb2RlKGUpIHtcclxuXHRcdHNldFRoZW1lKChwcmV2VGhlbWUpID0+IHtcclxuXHRcdFx0aWYgKHByZXZUaGVtZSA9PT0gXCJsaWdodFwiKVxyXG5cdFx0XHRcdHJldHVybiBcImRhcmtcIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBcImxpZ2h0XCJcclxuXHRcdH0pO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4gd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUsIFt0aGVtZV0pKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2Nzc01vZHVsZXMudG9nZ2xlVGhlbWVCdXR0b259IG9uQ2xpY2s9e3RvZ2dsZURhcmttb2RlfT5cclxuXHRcdFx0e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIkxpZ2h0XCIgOiBcIkRhcmtcIn1cclxuXHRcdDwvYnV0dG9uPlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9