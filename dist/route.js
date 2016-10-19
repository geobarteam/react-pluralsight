"use strict";
var React = require('react');
var react_router_1 = require('react-router');
var index_1 = require('./index');
var HomePage_1 = require('./components/HomePage');
var AboutPage_1 = require('./components/about/AboutPage');
var AuthorPage_1 = require('./components/authors/AuthorPage');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Route, {path: "/", component: index_1.App}, 
    React.createElement(react_router_1.IndexRoute, {component: HomePage_1.Home}), 
    React.createElement(react_router_1.Route, {path: "about", component: AboutPage_1.About}), 
    React.createElement(react_router_1.Route, {path: "authors", component: AuthorPage_1.Authors})));
//# sourceMappingURL=route.js.map