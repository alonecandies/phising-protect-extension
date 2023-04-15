webpackHotUpdate("background",{

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-undef */

const connections = {};
global.connections = connections;
initialize().catch(console.error);

async function initialize() {
  webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.runtime.onConnect.addListener(connectRemote);
}

webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "get_page_info") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      sendResponse(tabs[0]);
    });
  }

  return true;
});

var clickHandler = function (e) {
  fetch("http://localhost:45000/feedback", {
    method: "POST",
    headers: {},
    body: JSON.stringify({
      url: e.linkUrl,
      content
    })
  });
};

chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    title: "Report this link",
    contexts: ["link"],
    id: "report-link",
    onclick: clickHandler
  });
}); // /**
//  * A runtime.Port object, as provided by the browser:
//  *
//  * @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/Port
//  * @typedef Port
//  * @type Object
//  */
// /**
//  * @param {Port} remotePort - The port provided by a new context.
//  */

function connectRemote(remotePort) {
  remotePort.onMessage.addListener(msg => {
    console.log(msg, remotePort);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=background.2902f991847095376f02.hot-update.js.map