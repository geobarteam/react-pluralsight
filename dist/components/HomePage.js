"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
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
//# sourceMappingURL=HomePage.js.map