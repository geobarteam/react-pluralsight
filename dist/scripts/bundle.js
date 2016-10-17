/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var HomePage_1 = __webpack_require__(3);
	;
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        var Child;
	        switch (this.props.route) {
	            //            case 'about': Child = About; break;
	            //            case 'authors': Child = Authors; break;
	            default: Child = HomePage_1.Home;
	        }
	        return (React.createElement("div", null, 
	            React.createElement(Child, null)
	        ));
	    };
	    return App;
	}(React.Component));
	exports.App = App;
	function render() {
	    var route = window.location.hash.substr(1);
	    ReactDOM.render(React.createElement(App, {route: route}), document.getElementById('app'));
	}
	;
	window.addEventListener('hashchange', render);
	render();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Home = (function (_super) {
	    __extends(Home, _super);
	    function Home() {
	        _super.apply(this, arguments);
	    }
	    Home.prototype.render = function () {
	        return (React.createElement("div", {className: "jumbotron"}, 
	            React.createElement("h1", null, "Pluralsight Administration"), 
	            React.createElement("p", null, "React, React Router, and Flux for ultra-responsive web apps.")));
	    };
	    return Home;
	}(React.Component));
	exports.Home = Home;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map