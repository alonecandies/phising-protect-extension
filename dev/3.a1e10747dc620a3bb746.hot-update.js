webpackHotUpdate(3,{

/***/ "./src/components/Report/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Report/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Report; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_hooks_useStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useStore */ "./src/hooks/useStore.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/global */ "./src/store/global.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/maddie/Desktop/Work/junctionx/ext-manifest2-ff/src/components/Report/index.tsx";





function Report() {
  const {
    searchKey
  } = Object(src_hooks_useStore__WEBPACK_IMPORTED_MODULE_2__["useAppSelector"])(_store_global__WEBPACK_IMPORTED_MODULE_3__["globalSelector"]);
  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(searchKey);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    direction: "column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Center"], {
      children: "Report this website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["InputGroup"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Input"], {
        background: "#F7F7F7",
        value: search,
        onChange: e => {
          setSearch(e.target.value);
        },
        mx: 4,
        mt: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ })

})
//# sourceMappingURL=3.a1e10747dc620a3bb746.hot-update.js.map