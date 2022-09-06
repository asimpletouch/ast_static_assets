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
    window.localStorage.setItem("theme", theme);
    document.querySelector("body").classList.toggle("dark-theme");
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
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRGFya21vZGUuanMiXSwibmFtZXMiOlsiRGFya21vZGUiLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2VUaGVtZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZURhcmttb2RlIiwiZSIsIm5ld1RoZW1lIiwiY3NzTW9kdWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEI7QUFEc0Isa0JBRUlDLCtDQUFRLENBQUMsT0FBRCxDQUZaO0FBQUEsTUFFZkMsS0FGZTtBQUFBLE1BRVJDLFFBRlE7O0FBSXRCQyxrREFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixLQUF3QyxPQUFsRTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsaUJBQVo7QUFDQUYsWUFBUSxDQUFDRSxpQkFBRCxDQUFSO0FBQ0EsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BRCxrREFBUyxDQUFDLFlBQU07QUFDZkUsVUFBTSxDQUFDQyxZQUFQLENBQW9CSSxPQUFwQixDQUE0QixPQUE1QixFQUFxQ1QsS0FBckM7QUFDQVUsWUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQixDQUF5Q0MsTUFBekMsQ0FBZ0QsWUFBaEQ7QUFDQSxHQUhRLEVBR04sQ0FBQ2IsS0FBRCxDQUhNLENBQVQ7O0FBS0EsV0FBU2MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDMUIsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFJaEIsS0FBSyxLQUFLLE9BQWQsRUFDQ2dCLFFBQVEsR0FBRyxNQUFYLENBREQsS0FHQ0EsUUFBUSxHQUFHLE9BQVg7QUFFRGYsWUFBUSxDQUFDZSxRQUFELENBQVI7QUFDQTs7QUFFRCxzQkFDQztBQUFRLGFBQVMsRUFBRUMsK0VBQW5CO0FBQWlELFdBQU8sRUFBRUgsY0FBMUQ7QUFBQSxjQUNFZCxLQUFLLEtBQUssT0FBVixHQUFvQixPQUFwQixHQUE4QjtBQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFLQSxDQTlCRDs7R0FBTUYsUTs7S0FBQUEsUTtBQWdDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjljMDgwOWYyYmZhMTlmMjVmNTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjc3NNb2R1bGVzIGZyb20gXCIuL0Rhcmttb2RlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IERhcmttb2RlID0gKCkgPT4ge1xyXG5cdC8vIHRvZG8odmljdG9yKTogc2F2ZSB0aGlzIHN0YXRlIGluIHRoZSBicm93c2VyIGxvY2FsU3RvcmFnZVxyXG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJsaWdodFwiKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGxvY2FsU3RvcmFnZVRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xyXG5cdFx0Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlVGhlbWUpO1xyXG5cdFx0c2V0VGhlbWUobG9jYWxTdG9yYWdlVGhlbWUpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xyXG5cdH0sIFt0aGVtZV0pO1xyXG5cclxuXHRmdW5jdGlvbiB0b2dnbGVEYXJrbW9kZShlKSB7XHJcblx0XHRsZXQgbmV3VGhlbWUgPSBcIlwiO1xyXG5cdFx0aWYgKHRoZW1lID09PSBcImxpZ2h0XCIpXHJcblx0XHRcdG5ld1RoZW1lID0gXCJkYXJrXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1RoZW1lID0gXCJsaWdodFwiXHJcblxyXG5cdFx0c2V0VGhlbWUobmV3VGhlbWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtjc3NNb2R1bGVzLnRvZ2dsZVRoZW1lQnV0dG9ufSBvbkNsaWNrPXt0b2dnbGVEYXJrbW9kZX0+XHJcblx0XHRcdHt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJMaWdodFwiIDogXCJEYXJrXCJ9XHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXJrbW9kZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==