webpackHotUpdate("background",{

/***/ "./src/background/bgHelper.js":
/*!************************************!*\
  !*** ./src/background/bgHelper.js ***!
  \************************************/
/*! exports provided: setupMultiplex, openPopup, getLastFocusedWindow, closeCurrentWindow, checkForError, listenMessageFromPopup, getListTrustedApps, getChainIdStorage, getCurrentPageInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupMultiplex", function() { return setupMultiplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopup", function() { return openPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastFocusedWindow", function() { return getLastFocusedWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeCurrentWindow", function() { return closeCurrentWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForError", function() { return checkForError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenMessageFromPopup", function() { return listenMessageFromPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListTrustedApps", function() { return getListTrustedApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChainIdStorage", function() { return getChainIdStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPageInfo", function() { return getCurrentPageInfo; });
/* harmony import */ var obj_multiplex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! obj-multiplex */ "./node_modules/obj-multiplex/index.js");
/* harmony import */ var obj_multiplex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(obj_multiplex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pump__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pump */ "./node_modules/pump/index.js");
/* harmony import */ var pump__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pump__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__);



function setupMultiplex(connectionStream) {
  const mux = new obj_multiplex__WEBPACK_IMPORTED_MODULE_0___default.a();
  pump__WEBPACK_IMPORTED_MODULE_1___default()(connectionStream, mux, connectionStream, err => {
    if (err) {
      console.error(err);
    }
  });
  return mux;
}
async function openPopup(queries, cb) {
  let width = 400;
  let height = 630;
  let top = 0;
  let left = global.screen.width - 400;
  const lastFocused = await getLastFocusedWindow(); // Position window in top right corner of lastFocused window.

  top = lastFocused.top;
  left = lastFocused.left + (lastFocused.width - width);
  const windowId = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.windows.create({
    url: `popup.html?${queries}`,
    type: "popup",
    width,
    height,
    left,
    top
  }); // TODO: need remove listener after the event fired.

  webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.windows.onRemoved.addListener(id => {
    if (windowId.id === id && cb) {
      cb();
    }
  });
}
function getLastFocusedWindow() {
  return new Promise((resolve, reject) => {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.windows.getLastFocused().then(windowObject => {
      const error = checkForError();

      if (error) {
        return reject(error);
      }

      return resolve(windowObject);
    });
  });
}
function closeCurrentWindow() {
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.windows.getCurrent().then(windowDetails => {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.windows.remove(windowDetails.id);
  });
}
function checkForError() {
  const {
    lastError
  } = webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.runtime;

  if (!lastError) {
    return undefined;
  } // if it quacks like an Error, its an Error


  if (lastError.stack && lastError.message) {
    return lastError;
  } // repair incomplete error object (eg chromium v77)


  return new Error(lastError.message);
}
function listenMessageFromPopup(cb) {
  const handleMessage = async (request, sender, sendResponse) => {
    const promise = new Promise((resolve, reject) => {
      cb(request, sender, sendResponse, resolve, reject);
    });
    promise.then(() => {
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.onMessage.removeListener(handleMessage);
    });
    return true;
  };

  webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.runtime.onMessage.addListener(handleMessage);
}
function getListTrustedApps(selectedAccount) {
  const rootStorage = JSON.parse(localStorage.getItem("persist:root") || "{}");
  const trustedApps = JSON.parse(rootStorage.trustedApps || "{}").trustedApps || {};
  return trustedApps[selectedAccount] || [];
}
function getChainIdStorage() {
  const rootStorage = JSON.parse(localStorage.getItem("persist:root") || "{}");
  return JSON.parse(rootStorage.global || "{}").chainId || "0x1";
}
function getCurrentPageInfo() {
  let url = ""; // eslint-disable-next-line no-undef

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    url = tabs;
  });
  return url;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=background.c33e8dfea42f244aa522.hot-update.js.map