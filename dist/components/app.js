"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var header_1 = require('./common/header');
;
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var Child;
        return (React.createElement("div", null, 
            React.createElement(header_1.Header, null), 
            React.createElement("div", {className: "container-fluid"}, this.props.children)));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=app.js.map