webpackHotUpdate("options",{

/***/ "./src/store/global.ts":
/*!*****************************!*\
  !*** ./src/store/global.ts ***!
  \*****************************/
/*! exports provided: globalSlice, setSearchKey, globalSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalSlice", function() { return globalSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchKey", function() { return setSearchKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalSelector", function() { return globalSelector; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
  searchKey: ""
};
const globalSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "global",
  initialState,
  reducers: {
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    }
  }
});
const {
  setSearchKey
} = globalSlice.actions;
const globalSelector = state => state.global;
/* harmony default export */ __webpack_exports__["default"] = (globalSlice.reducer);

/***/ })

})
//# sourceMappingURL=options.5b71ee5f0e8d858a5b67.hot-update.js.map