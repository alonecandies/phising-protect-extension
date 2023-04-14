webpackHotUpdate(4,{

/***/ "./src/components/Report/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Report/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Report; });
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var src_hooks_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/hooks/useStore */ "./src/hooks/useStore.ts");
/* harmony import */ var _store_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/global */ "./src/store/global.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/maddie/Desktop/Work/junctionx/ext-manifest2-ff/src/components/Report/index.tsx";







const typeRp = ["Fake", "Scam", "Malware", "Prohibited", "Phishing", "Other"];
function Report() {
  const {
    searchKey
  } = Object(src_hooks_useStore__WEBPACK_IMPORTED_MODULE_4__["useAppSelector"])(_store_global__WEBPACK_IMPORTED_MODULE_5__["globalSelector"]);
  const [url, setUrl] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(searchKey);
  const [description, setDescription] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [type, setType] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    position: "relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronLeftIcon"], {
      position: "absolute",
      boxSize: 8,
      top: 3,
      left: 2,
      cursor: "pointer",
      onClick: () => {
        history.goBack();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      color: "primary.200",
      fontWeight: "semibold",
      mt: 3,
      fontSize: "xl",
      children: "Report this website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        background: "#F7F7F7",
        value: url,
        onChange: e => {
          setUrl(e.target.value);
        },
        mx: 4,
        mt: 4,
        placeholder: "Insert URL to report"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], {
      onChange: setType,
      value: type,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        gridTemplateColumns: "repeat(2,1fr)",
        mx: 4,
        children: typeRp.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
          value: item,
          _focus: {
            boxShadow: "none",
            outline: "none"
          },
          size: "lg",
          mt: 2,
          children: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      mx: 4,
      mt: 4,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Textarea"], {
        value: description,
        onChange: e => {
          setDescription(e.target.value);
        },
        placeholder: "Tell us why you consider this website is a phishing website",
        size: "sm",
        background: "#F7F7F7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        children: "Checkbox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ })

})
//# sourceMappingURL=4.ddcb5147eb5e35d10d20.hot-update.js.map