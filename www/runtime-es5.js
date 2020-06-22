/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"about-about-module":"about-about-module","auth-login-login-module":"auth-login-login-module","auth-register-register-module":"auth-register-register-module","blog-blog-module":"blog-blog-module","blog-detail-blog-detail-module":"blog-detail-blog-detail-module","common":"common","stencil-ion-action-sheet-ios-entry-js":"stencil-ion-action-sheet-ios-entry-js","stencil-ion-action-sheet-md-entry-js":"stencil-ion-action-sheet-md-entry-js","stencil-ion-alert-ios-entry-js":"stencil-ion-alert-ios-entry-js","stencil-ion-alert-md-entry-js":"stencil-ion-alert-md-entry-js","stencil-ion-app_8-ios-entry-js":"stencil-ion-app_8-ios-entry-js","stencil-ion-app_8-md-entry-js":"stencil-ion-app_8-md-entry-js","stencil-ion-avatar_3-ios-entry-js":"stencil-ion-avatar_3-ios-entry-js","stencil-ion-avatar_3-md-entry-js":"stencil-ion-avatar_3-md-entry-js","stencil-ion-back-button-ios-entry-js":"stencil-ion-back-button-ios-entry-js","stencil-ion-back-button-md-entry-js":"stencil-ion-back-button-md-entry-js","stencil-ion-button_2-ios-entry-js":"stencil-ion-button_2-ios-entry-js","stencil-ion-button_2-md-entry-js":"stencil-ion-button_2-md-entry-js","stencil-ion-card_5-ios-entry-js":"stencil-ion-card_5-ios-entry-js","stencil-ion-card_5-md-entry-js":"stencil-ion-card_5-md-entry-js","stencil-ion-checkbox-ios-entry-js":"stencil-ion-checkbox-ios-entry-js","stencil-ion-checkbox-md-entry-js":"stencil-ion-checkbox-md-entry-js","stencil-ion-chip-ios-entry-js":"stencil-ion-chip-ios-entry-js","stencil-ion-chip-md-entry-js":"stencil-ion-chip-md-entry-js","stencil-ion-datetime_3-ios-entry-js":"stencil-ion-datetime_3-ios-entry-js","stencil-ion-datetime_3-md-entry-js":"stencil-ion-datetime_3-md-entry-js","stencil-ion-fab_3-ios-entry-js":"stencil-ion-fab_3-ios-entry-js","stencil-ion-fab_3-md-entry-js":"stencil-ion-fab_3-md-entry-js","stencil-ion-infinite-scroll_2-ios-entry-js":"stencil-ion-infinite-scroll_2-ios-entry-js","stencil-ion-infinite-scroll_2-md-entry-js":"stencil-ion-infinite-scroll_2-md-entry-js","stencil-ion-input-ios-entry-js":"stencil-ion-input-ios-entry-js","stencil-ion-input-md-entry-js":"stencil-ion-input-md-entry-js","stencil-ion-item-option_3-ios-entry-js":"stencil-ion-item-option_3-ios-entry-js","stencil-ion-item-option_3-md-entry-js":"stencil-ion-item-option_3-md-entry-js","stencil-ion-item_8-ios-entry-js":"stencil-ion-item_8-ios-entry-js","stencil-ion-item_8-md-entry-js":"stencil-ion-item_8-md-entry-js","stencil-ion-loading-ios-entry-js":"stencil-ion-loading-ios-entry-js","stencil-ion-loading-md-entry-js":"stencil-ion-loading-md-entry-js","stencil-ion-menu_3-ios-entry-js":"stencil-ion-menu_3-ios-entry-js","stencil-ion-menu_3-md-entry-js":"stencil-ion-menu_3-md-entry-js","stencil-ion-modal-ios-entry-js":"stencil-ion-modal-ios-entry-js","stencil-ion-modal-md-entry-js":"stencil-ion-modal-md-entry-js","stencil-ion-nav_2-entry-js":"stencil-ion-nav_2-entry-js","stencil-ion-popover-ios-entry-js":"stencil-ion-popover-ios-entry-js","stencil-ion-popover-md-entry-js":"stencil-ion-popover-md-entry-js","stencil-ion-progress-bar-ios-entry-js":"stencil-ion-progress-bar-ios-entry-js","stencil-ion-progress-bar-md-entry-js":"stencil-ion-progress-bar-md-entry-js","stencil-ion-radio_2-ios-entry-js":"stencil-ion-radio_2-ios-entry-js","stencil-ion-radio_2-md-entry-js":"stencil-ion-radio_2-md-entry-js","stencil-ion-range-ios-entry-js":"stencil-ion-range-ios-entry-js","stencil-ion-range-md-entry-js":"stencil-ion-range-md-entry-js","stencil-ion-refresher_2-ios-entry-js":"stencil-ion-refresher_2-ios-entry-js","stencil-ion-refresher_2-md-entry-js":"stencil-ion-refresher_2-md-entry-js","stencil-ion-reorder_2-ios-entry-js":"stencil-ion-reorder_2-ios-entry-js","stencil-ion-reorder_2-md-entry-js":"stencil-ion-reorder_2-md-entry-js","stencil-ion-route_4-entry-js":"stencil-ion-route_4-entry-js","stencil-ion-searchbar-ios-entry-js":"stencil-ion-searchbar-ios-entry-js","stencil-ion-searchbar-md-entry-js":"stencil-ion-searchbar-md-entry-js","stencil-ion-segment_2-ios-entry-js":"stencil-ion-segment_2-ios-entry-js","stencil-ion-segment_2-md-entry-js":"stencil-ion-segment_2-md-entry-js","stencil-ion-select_3-ios-entry-js":"stencil-ion-select_3-ios-entry-js","stencil-ion-select_3-md-entry-js":"stencil-ion-select_3-md-entry-js","stencil-ion-spinner-entry-js":"stencil-ion-spinner-entry-js","stencil-ion-tab-bar_2-ios-entry-js":"stencil-ion-tab-bar_2-ios-entry-js","stencil-ion-tab-bar_2-md-entry-js":"stencil-ion-tab-bar_2-md-entry-js","stencil-ion-tab_2-entry-js":"stencil-ion-tab_2-entry-js","stencil-ion-text-entry-js":"stencil-ion-text-entry-js","stencil-ion-textarea-ios-entry-js":"stencil-ion-textarea-ios-entry-js","stencil-ion-textarea-md-entry-js":"stencil-ion-textarea-md-entry-js","stencil-ion-toast-ios-entry-js":"stencil-ion-toast-ios-entry-js","stencil-ion-toast-md-entry-js":"stencil-ion-toast-md-entry-js","stencil-ion-toggle-ios-entry-js":"stencil-ion-toggle-ios-entry-js","stencil-ion-toggle-md-entry-js":"stencil-ion-toggle-md-entry-js","contact-contact-module":"contact-contact-module","directors-directors-module":"directors-directors-module","folder-folder-module":"folder-folder-module","home-home-module":"home-home-module","leader-notes-leader-notes-module":"leader-notes-leader-notes-module","memory-verses-memory-verses-module":"memory-verses-memory-verses-module","notifications-notifications-module":"notifications-notifications-module","privacypolicy-privacypolicy-module":"privacypolicy-privacypolicy-module","resource-detail-resource-detail-module":"resource-detail-resource-detail-module","resource-single-content-resource-single-content-module":"resource-single-content-resource-single-content-module","resources-resources-module":"resources-resources-module","shadow-css-c018471d-js":"shadow-css-c018471d-js","speaking-speaking-module":"speaking-speaking-module","staff-staff-module":"staff-staff-module","stencil-ion-backdrop-ios-entry-js":"stencil-ion-backdrop-ios-entry-js","stencil-ion-backdrop-md-entry-js":"stencil-ion-backdrop-md-entry-js","stencil-ion-col_3-entry-js":"stencil-ion-col_3-entry-js","stencil-ion-img-entry-js":"stencil-ion-img-entry-js","stencil-ion-ripple-effect-entry-js":"stencil-ion-ripple-effect-entry-js","stencil-ion-slide_2-ios-entry-js":"stencil-ion-slide_2-ios-entry-js","stencil-ion-slide_2-md-entry-js":"stencil-ion-slide_2-md-entry-js","stencil-ion-split-pane-ios-entry-js":"stencil-ion-split-pane-ios-entry-js","stencil-ion-split-pane-md-entry-js":"stencil-ion-split-pane-md-entry-js","stencil-ion-virtual-scroll-entry-js":"stencil-ion-virtual-scroll-entry-js","stencil-polyfills-core-js":"stencil-polyfills-core-js","stencil-polyfills-css-shim":"stencil-polyfills-css-shim","stencil-polyfills-dom":"stencil-polyfills-dom","focus-visible-15ada7f7-js":"focus-visible-15ada7f7-js","input-shims-af289659-js":"input-shims-af289659-js","status-tap-fc3f3eb7-js":"status-tap-fc3f3eb7-js","swipe-back-69ef585b-js":"swipe-back-69ef585b-js","tap-click-8339ee48-js":"tap-click-8339ee48-js","swiper-bundle-3fe6462e-js":"swiper-bundle-3fe6462e-js"}[chunkId]||chunkId) +    "-es5.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=runtime-es5.js.map