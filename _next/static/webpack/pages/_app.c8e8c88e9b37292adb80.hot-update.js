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
    var newTheme = "";
    if (theme === "light") newTheme = "dark";else newTheme = "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.querySelector("body").classList.toggle("dark-theme");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_Darkmode_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleThemeButton),
    onClick: toggleDarkmode,
    children: theme === "light" ? "Light" : "Dark"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};

_s(Darkmode, "5cNIZbH5OBtB/RjhTdephZhiXtI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRGFya21vZGUuanMiXSwibmFtZXMiOlsiRGFya21vZGUiLCJ1c2VTdGF0ZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlRGFya21vZGUiLCJlIiwibmV3VGhlbWUiLCJzZXRJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY3NzTW9kdWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEI7QUFEc0Isa0JBRUlDLCtDQUFRLENBQUMsWUFBTTtBQUN4QztBQUNBLFdBQU9DLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsS0FBd0MsT0FBL0M7QUFDQSxHQUhpQyxDQUZaO0FBQUEsTUFFZkMsS0FGZTtBQUFBLE1BRVJDLFFBRlE7O0FBT3RCLFdBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQzFCLFFBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsUUFBSUosS0FBSyxLQUFLLE9BQWQsRUFDQ0ksUUFBUSxHQUFHLE1BQVgsQ0FERCxLQUdDQSxRQUFRLEdBQUcsT0FBWDtBQUVESCxZQUFRLENBQUNHLFFBQUQsQ0FBUjtBQUNBUCxVQUFNLENBQUNDLFlBQVAsQ0FBb0JPLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDRCxRQUFyQztBQUVBRSxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDQyxNQUF6QyxDQUFnRCxZQUFoRDtBQUNBOztBQUVELHNCQUNDO0FBQVEsYUFBUyxFQUFFQywrRUFBbkI7QUFBaUQsV0FBTyxFQUFFUixjQUExRDtBQUFBLGNBQ0VGLEtBQUssS0FBSyxPQUFWLEdBQW9CLE9BQXBCLEdBQThCO0FBRGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtBLENBekJEOztHQUFNTCxROztLQUFBQSxRO0FBMkJOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzhlOGM4OGU5YjM3MjkyYWRiODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNzc01vZHVsZXMgZnJvbSBcIi4vRGFya21vZGUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgRGFya21vZGUgPSAoKSA9PiB7XHJcblx0Ly8gdG9kbyh2aWN0b3IpOiBzYXZlIHRoaXMgc3RhdGUgaW4gdGhlIGJyb3dzZXIgbG9jYWxTdG9yYWdlXHJcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcblx0XHQvLyBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIHRoZW1lXHJcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJsaWdodFwiO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiB0b2dnbGVEYXJrbW9kZShlKSB7XHJcblx0XHRsZXQgbmV3VGhlbWUgPSBcIlwiO1xyXG5cdFx0aWYgKHRoZW1lID09PSBcImxpZ2h0XCIpXHJcblx0XHRcdG5ld1RoZW1lID0gXCJkYXJrXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1RoZW1lID0gXCJsaWdodFwiXHJcblxyXG5cdFx0c2V0VGhlbWUobmV3VGhlbWUpO1xyXG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3VGhlbWUpO1xyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtjc3NNb2R1bGVzLnRvZ2dsZVRoZW1lQnV0dG9ufSBvbkNsaWNrPXt0b2dnbGVEYXJrbW9kZX0+XHJcblx0XHRcdHt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJMaWdodFwiIDogXCJEYXJrXCJ9XHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXJrbW9kZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==