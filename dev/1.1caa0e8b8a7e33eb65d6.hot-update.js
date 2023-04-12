webpackHotUpdate(1,{

/***/ "./src/components/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_services_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/extension */ "./src/services/extension.ts");
/* harmony import */ var use_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-http */ "./node_modules/use-http/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/maddie/Desktop/Work/junctionx/fire-phoenix/src/components/Home/index.tsx";





function Home() {
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const [prediction, setPrediction] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    phishingPercentage: 0,
    result: "",
    url
  });
  const {
    post
  } = Object(use_http__WEBPACK_IMPORTED_MODULE_3__["default"])("/predict");
  const getURL = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    const data = await Object(src_services_extension__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])({
      type: "get_page_info"
    });
    setUrl(data.url || "");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getURL();

    if (!!url) {
      post({
        url
      }).then(res => {
        console.log(res.predictions[0]);
        setPrediction(res.predictions[0]);
      });
    }
  }, [getURL, post, url]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Center"], {
    children: url
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 10
  }, this);
}

/***/ })

})
//# sourceMappingURL=1.1caa0e8b8a7e33eb65d6.hot-update.js.map