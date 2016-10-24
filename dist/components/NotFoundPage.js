"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require('react-router');
var NotFoundPage = (function (_super) {
    __extends(NotFoundPage, _super);
    function NotFoundPage() {
        _super.apply(this, arguments);
    }
    NotFoundPage.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h1", null, "Page Not Found"), 
            React.createElement("p", null, "Whoops! Sorry, there is nothing to see here."), 
            React.createElement("p", null, 
                React.createElement(react_router_1.Link, {to: "/"}, "Back to Home")
            )));
    };
    return NotFoundPage;
}(React.Component));
exports.NotFoundPage = NotFoundPage;
//# sourceMappingURL=NotFoundPage.js.map