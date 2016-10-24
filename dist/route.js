"use strict";
var React = require('react');
var Router = require('react-router');
var react_router_1 = require('react-router');
var app_1 = require('./components/app');
var HomePage_1 = require('./components/HomePage');
var AboutPage_1 = require('./components/about/AboutPage');
var AuthorPage_1 = require('./components/authors/AuthorPage');
var manageAuthorPage_1 = require('./components/authors/manageAuthorPage');
var NotFoundPage_1 = require('./components/NotFoundPage');
var Redirect = Router.Redirect;
var routeMap = (React.createElement(react_router_1.Route, {path: "/", component: app_1.App}, 
    React.createElement(react_router_1.IndexRoute, {component: HomePage_1.Home}), 
    React.createElement(react_router_1.Route, {path: "about", component: AboutPage_1.About}), 
    React.createElement(react_router_1.Route, {path: "authors", component: AuthorPage_1.Authors}), 
    React.createElement(react_router_1.Route, {path: "author", component: manageAuthorPage_1.ManageAuthorPage}), 
    React.createElement(Redirect, {from: 'about-us', to: 'about'}), 
    React.createElement(react_router_1.Route, {path: '*', component: NotFoundPage_1.NotFoundPage})));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeMap;
//# sourceMappingURL=route.js.map