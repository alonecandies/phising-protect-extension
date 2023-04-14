webpackHotUpdate(0,{

/***/ "./src/components/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/extension */ "./src/services/extension.ts");
/* harmony import */ var use_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-http */ "./node_modules/use-http/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/maddie/Desktop/Work/junctionx/ext-manifest2-ff/src/components/Home/index.tsx";






function Home() {
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [isShowDetail, setIsShowDetail] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [prediction, setPrediction] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    phishingPercentage: 0,
    result: "",
    url: ""
  });
  const [detail, setDetail] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    post: getPredict
  } = Object(use_http__WEBPACK_IMPORTED_MODULE_4__["default"])("/predict");
  const {
    post: getDetail
  } = Object(use_http__WEBPACK_IMPORTED_MODULE_4__["default"])("/detail");
  const getURL = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(async () => {
    const data = await Object(src_services_extension__WEBPACK_IMPORTED_MODULE_3__["sendMessage"])({
      type: "get_page_info"
    });
    setUrl(data.url || "");
    setSearch(data.url || "");
  }, []);
  const isNewTab = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => url.includes("chrome://"), [url]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getURL();

    if (!!url) {
      getPredict({
        url
      }).then(res => {
        setPrediction(res.predictions[0]);
      });
    }
  }, [getURL, getPredict, url]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!!url) {
      getDetail({
        url
      }).then(res => {
        console.log(res);
        setDetail(res.detail);
      });
    }
  }, [getDetail, url]);
  if (isNewTab) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
    children: "New tab"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 24
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        background: "#F7F7F7",
        value: search,
        onChange: e => {
          setSearch(e.target.value);
        },
        mx: 4,
        mt: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["InputRightElement"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 38
        }, this),
        mt: 4,
        mr: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      children: prediction.result
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      children: 100 - prediction.phishingPercentage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), detail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      justify: "center",
      align: "center",
      w: "100%",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => setIsShowDetail(prev => !prev),
        children: ["Detail ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronRightIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, this), isShowDetail && detail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      justify: "center",
      align: "center",
      w: "100%",
      children: Object.keys(detail).map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        children: [item, ": ", detail[item]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

/***/ })

})
//# sourceMappingURL=0.2a134f3f9ec00f71ec98.hot-update.js.map