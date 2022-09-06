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
      setTheme = _useState[1]; // check if localStorage already has a theme


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    var localStorageTheme = window.localStorage.getItem("theme") || "light";

    if (localStorageTheme === "dark") {
      document.querySelector("body").classList.toggle("dark-theme");
    }

    console.log(localStorageTheme);
    setTheme(localStorageTheme);
  }, []); // 	update localStorage theme and toggle state of theme

  function toggleDarkmode(e) {
    var newTheme = "";
    if (theme === "light") newTheme = "dark";else newTheme = "light";
    window.localStorage.setItem("theme", newTheme);
    document.querySelector("body").classList.toggle("dark-theme");
    setTheme(newTheme);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_Darkmode_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleThemeButton),
    onClick: toggleDarkmode,
    children: theme === "light" ? "Light" : "Dark"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }, _this);
};

_s(Darkmode, "S4193+P/zOCrsGoR06soQ4U2ul0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRGFya21vZGUuanMiXSwibmFtZXMiOlsiRGFya21vZGUiLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJsb2NhbFN0b3JhZ2VUaGVtZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlRGFya21vZGUiLCJlIiwibmV3VGhlbWUiLCJzZXRJdGVtIiwiY3NzTW9kdWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDdEI7QUFEc0Isa0JBRUlDLCtDQUFRLENBQUMsT0FBRCxDQUZaO0FBQUEsTUFFZkMsS0FGZTtBQUFBLE1BRVJDLFFBRlEsaUJBSXRCOzs7QUFDQUMsd0RBQWUsQ0FBQyxZQUFNO0FBQ3JCLFFBQU1DLGlCQUFpQixHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEtBQXdDLE9BQWxFOztBQUVBLFFBQUlILGlCQUFpQixLQUFLLE1BQTFCLEVBQWtDO0FBQ2pDSSxjQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDQyxNQUF6QyxDQUFnRCxZQUFoRDtBQUNBOztBQUVEQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsaUJBQVo7QUFDQUYsWUFBUSxDQUFDRSxpQkFBRCxDQUFSO0FBQ0EsR0FUYyxFQVNaLEVBVFksQ0FBZixDQUxzQixDQWdCdEI7O0FBQ0EsV0FBU1UsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDMUIsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFJZixLQUFLLEtBQUssT0FBZCxFQUNDZSxRQUFRLEdBQUcsTUFBWCxDQURELEtBR0NBLFFBQVEsR0FBRyxPQUFYO0FBRURYLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQlcsT0FBcEIsQ0FBNEIsT0FBNUIsRUFBcUNELFFBQXJDO0FBQ0FSLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLE1BQXpDLENBQWdELFlBQWhEO0FBQ0FULFlBQVEsQ0FBQ2MsUUFBRCxDQUFSO0FBQ0E7O0FBRUQsc0JBQ0M7QUFBUSxhQUFTLEVBQUVFLCtFQUFuQjtBQUFpRCxXQUFPLEVBQUVKLGNBQTFEO0FBQUEsY0FDRWIsS0FBSyxLQUFLLE9BQVYsR0FBb0IsT0FBcEIsR0FBOEI7QUFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBS0EsQ0FsQ0Q7O0dBQU1GLFE7O0tBQUFBLFE7QUFvQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNjllYWRlNjNiMDQ0YjY1MDQ5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNzc01vZHVsZXMgZnJvbSBcIi4vRGFya21vZGUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgRGFya21vZGUgPSAoKSA9PiB7XHJcblx0Ly8gdG9kbyh2aWN0b3IpOiBzYXZlIHRoaXMgc3RhdGUgaW4gdGhlIGJyb3dzZXIgbG9jYWxTdG9yYWdlXHJcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xyXG5cclxuXHQvLyBjaGVjayBpZiBsb2NhbFN0b3JhZ2UgYWxyZWFkeSBoYXMgYSB0aGVtZVxyXG5cdHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBsb2NhbFN0b3JhZ2VUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwibGlnaHRcIjtcclxuXHJcblx0XHRpZiAobG9jYWxTdG9yYWdlVGhlbWUgPT09IFwiZGFya1wiKSB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZVRoZW1lKTtcclxuXHRcdHNldFRoZW1lKGxvY2FsU3RvcmFnZVRoZW1lKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdC8vIFx0dXBkYXRlIGxvY2FsU3RvcmFnZSB0aGVtZSBhbmQgdG9nZ2xlIHN0YXRlIG9mIHRoZW1lXHJcblx0ZnVuY3Rpb24gdG9nZ2xlRGFya21vZGUoZSkge1xyXG5cdFx0bGV0IG5ld1RoZW1lID0gXCJcIjtcclxuXHRcdGlmICh0aGVtZSA9PT0gXCJsaWdodFwiKVxyXG5cdFx0XHRuZXdUaGVtZSA9IFwiZGFya1wiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdUaGVtZSA9IFwibGlnaHRcIlxyXG5cclxuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld1RoZW1lKTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xyXG5cdFx0c2V0VGhlbWUobmV3VGhlbWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtjc3NNb2R1bGVzLnRvZ2dsZVRoZW1lQnV0dG9ufSBvbkNsaWNrPXt0b2dnbGVEYXJrbW9kZX0+XHJcblx0XHRcdHt0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJMaWdodFwiIDogXCJEYXJrXCJ9XHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXJrbW9kZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==