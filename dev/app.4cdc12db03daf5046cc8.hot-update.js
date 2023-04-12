webpackHotUpdate("app",{

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/*! exports provided: Card, TextDeep, Tag, NiceScroll, BoxNote, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDeep", function() { return TextDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NiceScroll", function() { return NiceScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxNote", function() { return BoxNote; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/maddie/Desktop/Work/junctionx/fire-phoenix/src/theme.tsx";




const breakpoints = Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__["createBreakpoints"])({
  xs: "",
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px"
});
const components = {
  Skeleton: {
    baseStyle: {
      borderRadius: "16px",
      mt: 8
    }
  },
  Button: {
    baseStyle: {
      // outline: "none",
      borderRadius: "16px"
    },
    sizes: {
      sm: {
        px: 7,
        h: "38px"
      }
    },
    defaultProps: {
      size: "sm"
    }
  },
  Input: {
    variants: {
      custom: {
        field: {
          bg: "gray.900",
          borderColor: "gray.900",
          borderRadius: "16px",
          fontSize: "sm",
          _placeholder: {
            color: "whiteAlpha.500"
          },
          _focus: {
            border: "1px solid",
            borderColor: "primary.300"
          }
        }
      }
    },
    defaultProps: {
      variant: "custom" // null here

    }
  },
  Modal: {
    baseStyle: {
      dialog: {
        borderRadius: "0px",
        bg: "gray.700"
      }
    }
  },
  Link: {
    baseStyle: {
      _focus: {// boxShadow: "none",
      }
    }
  },
  Tooltip: {
    baseStyle: {
      bg: "gray.700",
      color: "whiteAlpha.700"
    }
  }
};
const theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  fonts: {
    heading: '"Karla", sans-serif',
    body: '"Karla", sans-serif'
  },
  colors: {
    primary: {
      100: "#b9f5df",
      200: "#1de9b6",
      300: "#00e2a4",
      400: "#00e2a4",
      500: "#00da93",
      600: "#09c986",
      700: "#06b476",
      800: "#00a368",
      900: "#05814f"
    },
    secondary: {
      100: "#ffcbbb",
      200: "#ffa98f",
      300: "#fe8663",
      400: "#fe6d40",
      500: "#ff511f",
      600: "#f54c19",
      700: "#e64514",
      800: "#d73d12",
      900: "#bf3007"
    },
    orange: {
      200: "#fe6d40",
      300: "#bb5735"
    },
    gray: {
      500: "#3b3e3c",
      600: "#292d2c",
      700: "#1b1d1c",
      800: "#0f0f0f",
      900: "#010101"
    }
  },
  sizes: {
    xs: "180px"
  },
  breakpoints,
  components,
  config: {
    initialColorMode: "dark"
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        position: "relative",
        mx: "auto",
        fontSize: "100%"
      },
      "#root": {
        display: "flex",
        flexDir: "column",
        overflowX: "hidden",
        w: "400px",
        h: "400px"
      },
      ".root-options": {
        w: "100% !important",
        h: "100vh !important"
      },
      "&::-webkit-calendar-picker-indicator": {
        filter: "invert(1)"
      },

      /* width */
      "&::-webkit-scrollbar": {
        width: 2,
        display: "none"
      },

      /* Track */
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f11a",
        borderRadius: 1
      },

      /* Handle */
      "&::-webkit-scrollbar-thumb": {
        background: "#ffffff2b",
        borderRadius: 1
      },

      /* Handle on hover */
      "&::-webkit-scrollbar-thumb:hover": {
        borderRadius: 2,
        background: "#ffffff2b"
      },
      button: {// _focus: { boxShadow: "none!important" },
      },
      ".btn-react-share": {
        svg: {
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          marginRight: 4
        }
      },
      ".pagination": {
        display: "block",
        paddingLeft: "15px",
        paddingRight: "15px",
        marginTop: "32px",
        textAlign: "center",
        listStyle: "none"
      },
      ".pagination li": {
        display: "inline-block",
        width: 8,
        height: 8,
        marginX: 1,
        fontSize: "lg",
        "&.active": {
          color: "green.300"
        }
      },
      ".slick-slider": {
        width: "100%",
        ".slick-dots li": {
          width: "10px",
          height: "10px",
          padding: 0
        },
        ".slick-dots li.slick-active": {
          width: "20px"
        },
        ".slick-dots li button:before": {
          color: "gray.900",
          opacity: 1,
          width: "10px",
          height: "10px",
          borderRadius: "5px",
          background: "#333",
          content: `""`
        },
        ".slick-dots li.slick-active button:before": {
          background: "primary.200",
          width: "24px"
        }
      },
      ".nft-description": {
        a: {
          color: Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__["transparentize"])("primary.300", 0.7)
        }
      },
      ".alert-banner": {
        color: "whiteAlpha.900",
        a: {
          color: "primary.300",
          _hover: {
            textDecoration: "under"
          }
        }
      }
    }
  }
});
const Card = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
  bg: "gray.100",
  borderRadius: "16px",
  overflow: "hidden",
  px: 9,
  pt: 8,
  pb: 10,
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 244,
  columnNumber: 3
}, undefined);
const TextDeep = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
  opacity: "0.5",
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 247,
  columnNumber: 46
}, undefined);
const Tag = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
  bg: "gray.500",
  borderRadius: "13px",
  px: "2",
  h: "32px",
  fontSize: "sm",
  justify: "space-between",
  alignItems: "center",
  ...props
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 250,
  columnNumber: 3
}, undefined);
const NiceScroll = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
  overflow: "auto",
  pr: "5",
  maxH: "310",
  ...props,
  css: {
    "&::-webkit-scrollbar": {
      width: "6px",
      display: "block"
    },
    "&::-webkit-scrollbar-track": {
      width: "6px",
      background: "#000"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#454545",
      borderRadius: "24px"
    }
  },
  children: props.children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 263,
  columnNumber: 3
}, undefined);
const BoxNote = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
  minHeight: "10",
  paddingY: "4",
  px: "6",
  borderRadius: "2xl",
  marginBottom: "4",
  backgroundColor: Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__["transparentize"])("primary.200", 0.1),
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    color: "whiteAlpha.800",
    fontSize: {
      base: "sm",
      md: "md"
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 288,
  columnNumber: 3
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=app.4cdc12db03daf5046cc8.hot-update.js.map