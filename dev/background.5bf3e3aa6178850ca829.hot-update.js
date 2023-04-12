webpackHotUpdate("background",{

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
/*! exports provided: notifyAllConnections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyAllConnections", function() { return notifyAllConnections; });
/* harmony import */ var _local_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-store */ "./src/background/local-store.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var json_rpc_middleware_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-rpc-middleware-stream */ "./node_modules/json-rpc-middleware-stream/dist/index.js");
/* harmony import */ var json_rpc_middleware_stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_rpc_middleware_stream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var extension_port_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! extension-port-stream */ "./node_modules/extension-port-stream/dist/index.js");
/* harmony import */ var extension_port_stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(extension_port_stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pump__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pump */ "./node_modules/pump/index.js");
/* harmony import */ var pump__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pump__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bgHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bgHelper */ "./src/background/bgHelper.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3-utils */ "./node_modules/web3-utils/lib/index.js");
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_7__);





 // import {
//   requestAccounts,
//   switchChain,
//   getChainId,
//   getProviderState,
//   getAccounts,
//   signAndSendTx,
//   personalSign,
//   getBlockNumber,
//   getPermittedAccounts,
// } from "./jsonRpcApi";




const JsonRpcEngine = __webpack_require__(/*! json-rpc-engine */ "./node_modules/json-rpc-engine/src/index.js");

const KeyringController = __webpack_require__(/*! eth-keyring-controller */ "./node_modules/eth-keyring-controller/index.js");

const localStore = new _local_store__WEBPACK_IMPORTED_MODULE_0__["default"]();
let keyringController = null;
let password = null;
let globalData = {
  selectedAccount: null,
  chainId: "0x1",
  // hex version of chainId
  networkVersion: "1",
  // chainId
  // Flag
  isOpenRequestedPopup: false,
  isRejectAccountOnce: false,
  isRejectSwitchChainOnce: false
};
const connections = {};
global.connections = connections;
initialize().catch(console.error);

async function initialize() {
  const data = await localStore.get();
  keyringController = new KeyringController({
    initState: data
  });
  global.keyringController = keyringController;

  if (password) {
    keyringController.submitPassword(password);
  }

  webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.runtime.onConnect.addListener(connectRemote);
}

webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default.a.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "create_new_vault") {
    keyringController.createNewVaultAndKeychain(request.password).then(() => {
      password = request.password;
      const mnemonic = keyringController.keyrings[0].mnemonic;
      sendResponse({
        mnemonic: mnemonic
      });
    });
  }

  if (request.type === "set_password") {
    password = request.password;

    if (password) {
      keyringController.submitPassword(password);
    } else {
      keyringController.setLocked();
    }

    sendResponse(password);
  }

  if (request.type === "get_password") {
    sendResponse(password);
  }

  if (request.type === "store_vault") {
    if (request.vault) {
      localStore.set(request.vault);
      sendResponse(request.vault);
    } else {
      const vault = keyringController.store.getState();
      localStore.set(vault);
      sendResponse(vault);
    }
  }

  if (request.type === "create_new_vault_and_restore") {
    keyringController.createNewVaultAndRestore(request.password, request.mnemonic).then(res => {
      const vault = keyringController.store.getState();
      password = request.password;
      localStore.set(vault);
      sendResponse({
        vault,
        isError: false
      });
    }).catch(err => {
      sendResponse({
        error: err.message,
        isError: true
      });
    });
  }

  if (request.type === "log") {
    console.log(request.message);
  }

  if (request.type === "get_page_info") {
    const pageInfo = Object(_bgHelper__WEBPACK_IMPORTED_MODULE_5__["getCurrentPageInfo"])(connections, request.url);
    sendResponse(pageInfo);
  }

  if (request.type === "set_reject_account_once") {
    globalData.isRejectAccountOnce = request.isRejected;
    sendResponse(request.isRejected);
  }

  if (request.type === "set_reject_switch_chain_once") {
    globalData.isRejectSwitchChainOnce = request.value;
    sendResponse(request.isRejectSwitchChainOnce);
  }

  if (request.type === "get_chain_id") {
    sendResponse(globalData.chainId);
  }

  return true;
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
  const connectionStream = new extension_port_stream__WEBPACK_IMPORTED_MODULE_3___default.a(remotePort);
  const {
    sender
  } = remotePort;
  const mux = Object(_bgHelper__WEBPACK_IMPORTED_MODULE_5__["setupMultiplex"])(connectionStream);
  const outStream = mux.createStream("metamask-provider");
  const engine = new JsonRpcEngine();
  const origin = new URL(sender.url).origin;
  engine.push(async (req, res, next, end) => {
    const pageInfo = Object(_bgHelper__WEBPACK_IMPORTED_MODULE_5__["getCurrentPageInfo"])(connections, origin); // const params = {
    //   req,
    //   res,
    //   next,
    //   end,
    //   keyringController,
    //   selectedAccount: globalData.selectedAccount,
    //   chainId: globalData.chainId,
    //   networkVersion: globalData.networkVersion,
    //   isOpenRequestedPopup: globalData.isOpenRequestedPopup,
    //   pageInfo,
    // };
    // getProviderState(params);
    // getAccounts(params);
    // requestAccounts(params);
    // switchChain(params);
    // getChainId(params);
    // signAndSendTx(params);
    // personalSign(params);
    // getBlockNumber(params);
  }); // setup connection

  const providerStream = Object(json_rpc_middleware_stream__WEBPACK_IMPORTED_MODULE_2__["createEngineStream"])({
    engine
  });
  const connectionId = addConnection(origin, {
    engine
  });
  pump__WEBPACK_IMPORTED_MODULE_4___default()(outStream, providerStream, outStream, err => {
    engine._middleware.forEach(mid => {
      if (mid.destroy && typeof mid.destroy === "function") {
        mid.destroy();
      }
    });

    connectionId && removeConnection(origin, connectionId);

    if (err) {
      console.log(err);
    }
  });
  remotePort.onMessage.addListener(msg => {
    console.log(msg, remotePort);
  });
}
/**
 * Adds a reference to a connection by origin. Ignores the 'metamask' origin.
 * Caller must ensure that the returned id is stored such that the reference
 * can be deleted later.
 *
 * @param {string} origin - The connection's origin string.
 * @param {Object} options - Data associated with the connection
 * @param {Object} options.engine - The connection's JSON Rpc Engine
 * @returns {string} The connection's id (so that it can be deleted later)
 */


function addConnection(origin, _ref) {
  let {
    engine
  } = _ref;

  if (origin === "metamask") {
    return null;
  }

  if (!connections[origin]) {
    connections[origin] = {};
  }

  const id = Object(nanoid__WEBPACK_IMPORTED_MODULE_6__["nanoid"])();
  connections[origin][id] = {
    engine
  };
  return id;
}
/**
 * Deletes a reference to a connection, by origin and id.
 * Ignores unknown origins.
 *
 * @param {string} origin - The connection's origin string.
 * @param {string} id - The connection's id, as returned from addConnection.
 */


function removeConnection(origin, id) {
  const data = connections[origin];

  if (!data) {
    return;
  }

  delete data[id];

  if (Object.keys(data).length === 0) {
    delete connections[origin];
  }
}
/**
 * Closes all connections for the given origin, and removes the references
 * to them.
 * Ignores unknown origins.
 *
 * @param {string} origin - The origin string.
 */


function removeAllConnections(origin) {
  const connections = connections[origin];

  if (!connections) {
    return;
  }

  Object.keys(connections).forEach(id => {
    removeConnection(origin, id);
  });
}
/**
 * Causes the RPC engines associated with the connections to the given origin
 * to emit a notification event with the given payload.
 *
 * The caller is responsible for ensuring that only permitted notifications
 * are sent.
 *
 * Ignores unknown origins.
 *
 * @param {string} origin - The connection's origin string.
 * @param {unknown} payload - The event payload.
 */


function notifyConnections(origin, payload) {
  const connections = global.connections[origin];
  const getPayload = typeof payload === "function" ? origin => payload(origin) : () => payload;

  if (connections) {
    Object.values(connections).forEach(async conn => {
      if (conn.engine) {
        conn.engine.emit("notification", await getPayload(origin));
      }
    });
  }
}
/**
 * Causes the RPC engines associated with all connections to emit a
 * notification event with the given payload.
 *
 * If the "payload" parameter is a function, the payload for each connection
 * will be the return value of that function called with the connection's
 * origin.
 *
 * The caller is responsible for ensuring that only permitted notifications
 * are sent.
 *
 * @param {unknown} payload - The event payload, or payload getter function.
 */


function notifyAllConnections(payload) {
  const getPayload = typeof payload === "function" ? origin => payload(origin) : () => payload;
  Object.keys(connections).forEach(origin => {
    Object.values(connections[origin]).forEach(async conn => {
      if (conn.engine) {
        conn.engine.emit("notification", await getPayload(origin));
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=background.5bf3e3aa6178850ca829.hot-update.js.map