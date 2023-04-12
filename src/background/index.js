import browser from "webextension-polyfill";

const connections = {};
global.connections = connections;

initialize().catch(console.error);

async function initialize() {
  browser.runtime.onConnect.addListener(connectRemote);
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "get_page_info") {
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      sendResponse(tabs[0]);
    });
  }

  return true;
});

// /**
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
  remotePort.onMessage.addListener((msg) => {
    console.log(msg, remotePort);
  });
}
