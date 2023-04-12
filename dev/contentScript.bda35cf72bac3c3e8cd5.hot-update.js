webpackHotUpdate("contentScript",{

/***/ "./node_modules/@metamask/post-message-stream/dist/BasePostMessageStream.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/dist/WindowPostMessageStream.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/dist/WorkerParentPostMessageStream.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/dist/WorkerPostMessageStream.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/dist/enums.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/dist/index.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/@metamask/post-message-stream/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/end-of-stream/index.js":
false,

/***/ "./node_modules/extension-port-stream/dist/index.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/stream-browserify/node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/obj-multiplex/index.js":
false,

/***/ "./node_modules/once/once.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/pump/index.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/wrappy/wrappy.js":
false,

/***/ "./src/contentScript/index.js":
/*!************************************!*\
  !*** ./src/contentScript/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// // If your extension doesn't need a content script, just leave this file empty
// // This is an example of a script that will run on every page. This can alter pages
// // Don't forget to change `matches` in manifest.json if you want to only change specific webpages
// // This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig
// import browser from "webextension-polyfill";
// import { WindowPostMessageStream } from "@metamask/post-message-stream";
// import PortStream from "extension-port-stream";
// import pump from "pump";
// import ObjectMultiplex from "obj-multiplex";
// const CONTENT_SCRIPT = "krystal-contentscript";
// const PROVIDER = "metamask-provider";
// const INPAGE = "krystal-inpage";
// export function injectScript(file_path, tag) {
//   console.log("inject");
//   const container = document.head || document.documentElement;
//   const scriptTag = document.createElement("script");
//   scriptTag.setAttribute("async", "false");
//   scriptTag.setAttribute("type", "text/javascript");
//   scriptTag.setAttribute("src", file_path);
//   container.insertBefore(scriptTag, container.children[0]);
//   container.removeChild(scriptTag);
//   // var node = document.getElementsByTagName(tag)[0];
//   // var script = document.createElement("script");
//   // script.setAttribute("type", "text/javascript");
//   // script.setAttribute("src", file_path);
//   // node.appendChild(script);
// }
// /**
//  * Sets up two-way communication streams between the
//  * browser extension and local per-page browser context.
//  *
//  */
// function forwardTrafficBetweenMuxes(channelName, muxA, muxB) {
//   const channelA = muxA.createStream(channelName);
//   const channelB = muxB.createStream(channelName);
//   pump(channelA, channelB, channelA, (error) =>
//     console.debug(`MetaMask: Muxed traffic for channel "${channelName}" failed.`, error),
//   );
// }
// async function setupStreams() {
//   // the transport-specific streams for communication between inpage and background
//   const pageStream = new WindowPostMessageStream({
//     name: CONTENT_SCRIPT,
//     target: INPAGE,
//   });
//   const extensionPort = browser.runtime.connect({ name: CONTENT_SCRIPT });
//   const extensionStream = new PortStream(extensionPort);
//   const pageMux = new ObjectMultiplex();
//   pageMux.setMaxListeners(25);
//   const extensionMux = new ObjectMultiplex();
//   extensionMux.setMaxListeners(25);
//   pump(pageMux, pageStream, pageMux, (err) => console.log(err));
//   pump(extensionMux, extensionStream, extensionMux, (err) => {
//     console.log(err);
//   });
//   forwardTrafficBetweenMuxes(PROVIDER, pageMux, extensionMux);
//   extensionStream.on("data", (data) => {
//     console.log(data.data)
//   });
//   // window.addEventListener("message",function (event) {
//   //     extensionPort.postMessage(event);
//   //   },false,
//   // );
// }
// injectScript(global.chrome.extension.getURL("inpage.js"), "body");
// setupStreams();

/***/ }),

/***/ 26:
false,

/***/ 6:
false,

/***/ 7:
false,

/***/ 8:
false

})
//# sourceMappingURL=contentScript.bda35cf72bac3c3e8cd5.hot-update.js.map