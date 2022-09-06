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
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_Darkmode_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleThemeButton),
    onClick: toggleDarkmode,
    children: theme === "light" ? "Light" : "Dark"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRGFya21vZGUuanMiXSwibmFtZXMiOlsiRGFya21vZGUiLCJ1c2VTdGF0ZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlRGFya21vZGUiLCJlIiwicHJldlRoZW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsImNzc01vZHVsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCO0FBRHNCLGtCQUVJQywrQ0FBUSxDQUFDLFlBQU07QUFDeEM7QUFDQSxXQUFPQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEtBQXdDLE9BQS9DO0FBQ0EsR0FIaUMsQ0FGWjtBQUFBLE1BRWZDLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQU90QixXQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUMxQkYsWUFBUSxDQUFDLFVBQUNHLFNBQUQsRUFBZTtBQUN2QixVQUFJQSxTQUFTLEtBQUssT0FBbEIsRUFDQyxPQUFPLE1BQVAsQ0FERCxLQUdDLE9BQU8sT0FBUDtBQUNELEtBTE8sQ0FBUjtBQU1BQyxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDQyxNQUF6QyxDQUFnRCxZQUFoRDtBQUNBOztBQUVEQyxrREFBUyxDQUFDLFlBQU07QUFDZlosVUFBTSxDQUFDQyxZQUFQLENBQW9CWSxPQUFwQixDQUE0QixPQUE1QixFQUFxQ1YsS0FBckM7QUFDQSxHQUZRLEVBRU4sQ0FBQ0EsS0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDQztBQUFRLGFBQVMsRUFBRVcsK0VBQW5CO0FBQWlELFdBQU8sRUFBRVQsY0FBMUQ7QUFBQSxjQUNFRixLQUFLLEtBQUssT0FBVixHQUFvQixPQUFwQixHQUE4QjtBQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQTFCRDs7R0FBTUwsUTs7S0FBQUEsUTtBQTRCTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE4ZGYzYjRlNTdiNjNiNDRjNTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjc3NNb2R1bGVzIGZyb20gXCIuL0Rhcmttb2RlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IERhcmttb2RlID0gKCkgPT4ge1xyXG5cdC8vIHRvZG8odmljdG9yKTogc2F2ZSB0aGlzIHN0YXRlIGluIHRoZSBicm93c2VyIGxvY2FsU3RvcmFnZVxyXG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG5cdFx0Ly8gY2hlY2sgbG9jYWxTdG9yYWdlIGZvciB0aGVtZVxyXG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwibGlnaHRcIjtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gdG9nZ2xlRGFya21vZGUoZSkge1xyXG5cdFx0c2V0VGhlbWUoKHByZXZUaGVtZSkgPT4ge1xyXG5cdFx0XHRpZiAocHJldlRoZW1lID09PSBcImxpZ2h0XCIpXHJcblx0XHRcdFx0cmV0dXJuIFwiZGFya1wiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIFwibGlnaHRcIlxyXG5cdFx0fSk7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGVtZSlcclxuXHR9LCBbdGhlbWVdKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2Nzc01vZHVsZXMudG9nZ2xlVGhlbWVCdXR0b259IG9uQ2xpY2s9e3RvZ2dsZURhcmttb2RlfT5cclxuXHRcdFx0e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIkxpZ2h0XCIgOiBcIkRhcmtcIn1cclxuXHRcdDwvYnV0dG9uPlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9