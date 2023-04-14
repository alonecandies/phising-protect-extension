webpackHotUpdate("app",{

/***/ "./src/store/global.ts":
/*!*****************************!*\
  !*** ./src/store/global.ts ***!
  \*****************************/
/*! exports provided: globalSlice, setChecked, globalSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalSlice", function() { return globalSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChecked", function() { return setChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalSelector", function() { return globalSelector; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialState = {
  searchKey: ""
};
const globalSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "global",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchKey = action.payload;
    }
  }
});
const {
  setChecked
} = globalSlice.actions;
const globalSelector = state => state.global;
/* harmony default export */ __webpack_exports__["default"] = (globalSlice.reducer);

/***/ })

})
//# sourceMappingURL=app.332cf7fa2a0f00f6bb10.hot-update.js.map