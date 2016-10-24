"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require('react-router');
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return (React.createElement("nav", {className: "navbar navbar-default"}, 
            React.createElement("div", {className: "container-fluid"}, 
                React.createElement("a", {href: "/", className: "navbar-brand"}, 
                    React.createElement("img", {src: "images/pluralsight-logo.png"})
                ), 
                React.createElement("ul", {className: "nav navbar-nav"}, 
                    React.createElement("li", null, 
                        React.createElement(react_router_1.Link, {to: "/"}, "Home")
                    ), 
                    React.createElement("li", null, 
                        React.createElement(react_router_1.Link, {to: "/authors"}, "Authors")
                    ), 
                    React.createElement("li", null, 
                        React.createElement(react_router_1.Link, {to: "/about"}, "About")
                    )))
        ));
    };
    return Header;
}(React.Component));
exports.Header = Header;
//# sourceMappingURL=header.js.map