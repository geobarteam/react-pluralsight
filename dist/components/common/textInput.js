"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        _super.apply(this, arguments);
    }
    Input.prototype.render = function () {
        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }
        return (React.createElement("div", {className: wrapperClass}, 
            React.createElement("label", {htmlFor: this.props.name}, this.props.label), 
            React.createElement("div", {className: "field"}, 
                React.createElement("input", {type: "text", name: this.props.name, className: "form-control", placeholder: this.props.placeholder, ref: this.props.name, value: this.props.value, onChange: this.props.onChange}), 
                React.createElement("div", {className: "input"}, this.props.error))));
    };
    return Input;
}(React.Component));
exports.Input = Input;
//# sourceMappingURL=textInput.js.map