(this["webpackJsonpfire-phoenix"] = this["webpackJsonpfire-phoenix"] || []).push([[1],{

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










const mappingCriteria = ["URL length", "Hostname length", "IP", "Dots (.)", "Exclamation (!)", "Equal (=)", "Slash (/)", "Www", "Ratio digits URL", "Ratio digits host", "Tld in subdomain", "(-) Prefix/suffix", "Shortest word host", "Longest words raw", "Longest word path", "Phish hints", "Hyperlinks", "Ratio internal hyperlinks", "Empty title", "Domain in title", "Page rank"];
function Home() {
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const [isShowDetail, setIsShowDetail] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const [prediction, setPrediction] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    phishingPercentage: null,
    result: "",
    url: "",
    detail: {}
  });
  const [search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  const dispatch = Object(src_hooks_useStore__WEBPACK_IMPORTED_MODULE_5__["useAppDispatch"])();
  const {
    post: getPredict
  } = Object(use_http__WEBPACK_IMPORTED_MODULE_8__["default"])("/predict");
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
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(prediction.phishingPercentage)) return 0;
    let result = 100 - prediction.phishingPercentage;
    return Number(result.toFixed(0));
  }, [prediction.phishingPercentage]);
  const handlePredict = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(url => {
    setLoading(true);
    setError("");
    getPredict({
      url
    }).then(res => {
      if (!!res.message) {
        setError(res.message);
        setPrediction({
          phishingPercentage: null,
          result: "",
          url: "",
          detail: {}
        });
        return;
      } else {
        setPrediction(res.predictions[0]);
      }
    }).finally(() => {
      setLoading(false);
    });
  }, [getPredict]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    getURL();

    if (!!url) {
      handlePredict(url);
    }
  }, [getURL, handlePredict, url]);
  if (isNewTab) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
    children: "New tab"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
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
            handlePredict(search);
          }
        },
        placeholder: "Insert URL to check"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["InputRightElement"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this),
        mt: 4,
        mr: 4,
        onClick: () => {
          handlePredict(search);
        },
        cursor: "pointer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this), !error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      justify: "center",
      align: "center",
      my: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
        value: phishingPercentage,
        color: phishingPercentage > 65 ? "primary.200" : phishingPercentage > 45 ? "orange.200" : "red.800",
        size: "135px",
        isIndeterminate: loading,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["CircularProgressLabel"], {
          fontSize: "2xl",
          fontWeight: "semibold",
          color: phishingPercentage > 65 ? "primary.200" : phishingPercentage > 45 ? "orange.200" : "red.800",
          children: [phishingPercentage, "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }, this), !error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      mb: 3,
      fontWeight: "500",
      children: prediction.result
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }, this), !!error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      mb: 3,
      fontWeight: "500",
      mt: 2,
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
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
        lineNumber: 188,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
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
        disabled: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(prediction.detail),
        children: "Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, this), isShowDetail && prediction.detail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      justify: "center",
      align: "center",
      mx: 2,
      mt: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        wrap: "wrap",
        justify: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["length_url"] < 54 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["length_hostname"] < 54 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["ip"] === 0 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[2]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["nb_dots"] < 4 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[3]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["nb_qm"] < 3 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[4]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["nb_eq"] < 6 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[5]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["nb_slash"] < 10 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[6]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["nb_www"] < 2 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[7]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["ratio_digits_url"] < 0.65 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[8]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["ratio_digits_host"] < 0.5 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[9]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["tld_in_subdomain"] <= 0 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[10]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["prefix_suffix"] <= 0 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[11]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["shortest_word_host"] < 15 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[12]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["longest_words_raw"] < 30 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[13]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["longest_word_path"] < 10 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[14]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["phish_hints"] < 10 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[15]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["nb_hyperlinks"] < 30 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[16]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["ratio_intHyperlinks"] > 0.4 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[17]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 491,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["empty_title"] < 5 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[18]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["domain_in_title"] === 0 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[19]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          background: prediction.detail["page_rank"] > 0 ? "primary.200" : "red.800",
          mx: 2,
          my: 1,
          color: "white",
          py: 1,
          px: 2,
          borderRadius: "5px",
          fontSize: "sm",
          children: mappingCriteria[20]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 537,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronUpIcon"], {
        mt: 1,
        color: "#979797",
        boxSize: 5,
        cursor: "pointer",
        onClick: () => setIsShowDetail(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/hooks/useStore.ts":
/*!*******************************!*\
  !*** ./src/hooks/useStore.ts ***!
  \*******************************/
/*! exports provided: useAppDispatch, useAppSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppDispatch", function() { return useAppDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppSelector", function() { return useAppSelector; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"];

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map