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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var src_hooks_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hooks/useStore */ "./src/hooks/useStore.ts");
/* harmony import */ var src_services_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/extension */ "./src/services/extension.ts");
/* harmony import */ var src_store_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/store/global */ "./src/store/global.ts");
/* harmony import */ var use_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! use-http */ "./node_modules/use-http/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/maddie/Desktop/Work/junctionx/ext-manifest2-ff/src/components/Home/index.tsx";










function Home() {
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const [isShowDetail, setIsShowDetail] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [prediction, setPrediction] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    phishingPercentage: 0,
    result: "",
    url: ""
  });
  const [detail, setDetail] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  const dispatch = Object(src_hooks_useStore__WEBPACK_IMPORTED_MODULE_5__["useAppDispatch"])();
  const {
    post: getPredict
  } = Object(use_http__WEBPACK_IMPORTED_MODULE_8__["default"])("/predict");
  const {
    post: getDetail
  } = Object(use_http__WEBPACK_IMPORTED_MODULE_8__["default"])("/detail");
  const getURL = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(async () => {
    const data = await Object(src_services_extension__WEBPACK_IMPORTED_MODULE_6__["sendMessage"])({
      type: "get_page_info"
    });
    setUrl(data.url || "");
    setSearch(data.url || "");
    dispatch(Object(src_store_global__WEBPACK_IMPORTED_MODULE_7__["setSearchKey"])(data.url || ""));
  }, [dispatch]);
  const isNewTab = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(() => url.includes("chrome://"), [url]);
  const phishingPercentage = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(() => {
    if (!prediction.phishingPercentage) return 0;
    let result = 100 - prediction.phishingPercentage;
    return Number(result.toFixed(0));
  }, [prediction.phishingPercentage]);
  console.log(prediction);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    getURL();

    if (!!url) {
      getPredict({
        url
      }).then(res => {
        setPrediction(res.predictions[0]);
      });
    }
  }, [getURL, getPredict, url]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!!url) {
      getDetail({
        url
      }).then(res => {
        console.log(res);
        setDetail(res.detail);
      });
    }
  }, [getDetail, url]);
  if (isNewTab) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
    children: "New tab"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 24
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        background: "#F7F7F7",
        value: search,
        onChange: e => {
          setSearch(e.target.value);
          dispatch(Object(src_store_global__WEBPACK_IMPORTED_MODULE_7__["setSearchKey"])(e.target.value));
        },
        mx: 4,
        mt: 4,
        onKeyDown: e => {
          if (e.key === "Enter") {
            getPredict({
              url: search
            }).then(res => {
              setPrediction(res.predictions[0]);
            });
          }
        },
        placeholder: "Insert URL to check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["InputRightElement"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this),
        mt: 4,
        mr: 4,
        onClick: () => {
          getPredict({
            url: search
          }).then(res => {
            setPrediction(res.predictions[0]);
          });
        },
        cursor: "pointer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      justify: "center",
      align: "center",
      my: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
        value: phishingPercentage,
        color: phishingPercentage > 65 ? "primary.200" : phishingPercentage > 45 ? "orange.200" : "red.800",
        size: "135px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["CircularProgressLabel"], {
          fontSize: "2xl",
          fontWeight: "semibold",
          color: phishingPercentage > 65 ? "primary.200" : phishingPercentage > 45 ? "orange.200" : "red.800",
          children: [phishingPercentage, "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      mb: 3,
      fontWeight: "500",
      children: prediction.result
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this), !isNewTab && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      mx: 4,
      mb: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        w: "full",
        h: "45px",
        borderRadius: "3px",
        background: "#242424",
        color: "white",
        fontWeight: "semibold",
        _hover: {
          background: "#242424"
        },
        onClick: () => {
          history.push("/report");
        },
        disabled: !url && !search,
        children: "Report this website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      mx: 4,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => setIsShowDetail(prev => !prev),
        w: "full",
        h: "45px",
        borderRadius: "3px",
        background: isShowDetail ? "transparent" : "primary.200",
        color: isShowDetail ? "primary.200" : "white",
        fontWeight: "semibold",
        _hover: isShowDetail ? {
          background: "transparent"
        } : {
          background: "primary.200"
        },
        border: "2px solid",
        borderColor: "primary.200",
        _focus: {
          boxShadow: "none",
          outline: "none"
        },
        disabled: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(detail),
        children: "Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this), isShowDetail && detail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      justify: "center",
      align: "center",
      mx: 2,
      mt: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        wrap: "wrap",
        justify: "center",
        children: Object.keys(detail).map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: "primary.200",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: [item, ": ", detail[item]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronUpIcon"], {
        mt: 1,
        color: "#979797",
        boxSize: 5,
        cursor: "pointer",
        onClick: () => setIsShowDetail(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

/***/ })

})
//# sourceMappingURL=0.d3f6fde461db913ef49f.hot-update.js.map