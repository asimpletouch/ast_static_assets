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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("light"),
      theme = _useState[0],
      setTheme = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var localStorageTheme = window.localStorage.getItem("theme") || "light";
    console.log(localStorageTheme);
    setTheme(localStorageTheme);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log("1");
    window.localStorage.setItem("theme", theme);
    console.log("2");
    document.querySelector("body").classList.toggle("dark-theme");
    console.log("3");
  }, [theme]);

  function toggleDarkmode(e) {
    var newTheme = "";
    if (theme === "light") newTheme = "dark";else newTheme = "light";
    setTheme(newTheme);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_Darkmode_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleThemeButton),
    onClick: toggleDarkmode,
    children: theme === "light" ? "Light" : "Dark"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, _this);
};

_s(Darkmode, "+6C7zX0KFXKdtXxqQH7LMHLz9vo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRGFya21vZGUuanMiXSwibmFtZXMiOlsiRGFya21vZGUiLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2VUaGVtZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZURhcmttb2RlIiwiZSIsIm5ld1RoZW1lIiwiY3NzTW9kdWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEI7QUFEc0Isa0JBRUlDLCtDQUFRLENBQUMsT0FBRCxDQUZaO0FBQUEsTUFFZkMsS0FGZTtBQUFBLE1BRVJDLFFBRlE7O0FBSXRCQyxrREFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixLQUF3QyxPQUFsRTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsaUJBQVo7QUFDQUYsWUFBUSxDQUFDRSxpQkFBRCxDQUFSO0FBQ0EsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BRCxrREFBUyxDQUFDLFlBQU07QUFDZkssV0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNBSixVQUFNLENBQUNDLFlBQVAsQ0FBb0JJLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDVCxLQUFyQztBQUVBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0FFLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLE1BQXpDLENBQWdELFlBQWhEO0FBRUFOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQSxHQVJRLEVBUU4sQ0FBQ1IsS0FBRCxDQVJNLENBQVQ7O0FBVUEsV0FBU2MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDMUIsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFJaEIsS0FBSyxLQUFLLE9BQWQsRUFDQ2dCLFFBQVEsR0FBRyxNQUFYLENBREQsS0FHQ0EsUUFBUSxHQUFHLE9BQVg7QUFFRGYsWUFBUSxDQUFDZSxRQUFELENBQVI7QUFDQTs7QUFFRCxzQkFDQztBQUFRLGFBQVMsRUFBRUMsK0VBQW5CO0FBQWlELFdBQU8sRUFBRUgsY0FBMUQ7QUFBQSxjQUNFZCxLQUFLLEtBQUssT0FBVixHQUFvQixPQUFwQixHQUE4QjtBQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQW5DRDs7R0FBTUYsUTs7S0FBQUEsUTtBQXFDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJjOGU5MWE1ZDhlOGU1NmE5MmQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjc3NNb2R1bGVzIGZyb20gXCIuL0Rhcmttb2RlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IERhcmttb2RlID0gKCkgPT4ge1xyXG5cdC8vIHRvZG8odmljdG9yKTogc2F2ZSB0aGlzIHN0YXRlIGluIHRoZSBicm93c2VyIGxvY2FsU3RvcmFnZVxyXG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJsaWdodFwiKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGxvY2FsU3RvcmFnZVRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xyXG5cdFx0Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlVGhlbWUpO1xyXG5cdFx0c2V0VGhlbWUobG9jYWxTdG9yYWdlVGhlbWUpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKFwiMVwiKTtcclxuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIjJcIik7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIjNcIik7XHJcblx0fSwgW3RoZW1lXSk7XHJcblxyXG5cdGZ1bmN0aW9uIHRvZ2dsZURhcmttb2RlKGUpIHtcclxuXHRcdGxldCBuZXdUaGVtZSA9IFwiXCI7XHJcblx0XHRpZiAodGhlbWUgPT09IFwibGlnaHRcIilcclxuXHRcdFx0bmV3VGhlbWUgPSBcImRhcmtcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3VGhlbWUgPSBcImxpZ2h0XCJcclxuXHJcblx0XHRzZXRUaGVtZShuZXdUaGVtZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2Nzc01vZHVsZXMudG9nZ2xlVGhlbWVCdXR0b259IG9uQ2xpY2s9e3RvZ2dsZURhcmttb2RlfT5cclxuXHRcdFx0e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIkxpZ2h0XCIgOiBcIkRhcmtcIn1cclxuXHRcdDwvYnV0dG9uPlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9