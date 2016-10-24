"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var About = (function (_super) {
    __extends(About, _super);
    function About() {
        _super.apply(this, arguments);
    }
    About.willTransitionTo = function (transition, params, query, callback) {
    };
    About.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h1", null, "About"), 
            React.createElement("p", null, "This application uses the following technologies:"), 
            React.createElement("ul", null, 
                React.createElement("li", null, "React"), 
                React.createElement("li", null, "React Router"), 
                React.createElement("li", null, "Flux"), 
                React.createElement("li", null, "Node"), 
                React.createElement("li", null, "Gulp"), 
                React.createElement("li", null, "Browserify"), 
                React.createElement("li", null, "Bootstrap"))));
    };
    return About;
}(React.Component));
exports.About = About;
;
//# sourceMappingURL=aboutPage.js.map