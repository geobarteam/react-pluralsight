"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AuthorForm = (function (_super) {
    __extends(AuthorForm, _super);
    function AuthorForm() {
        _super.apply(this, arguments);
    }
    AuthorForm.prototype.render = function () {
        return (React.createElement("form", null, 
            React.createElement("h1", null, "Manage Author"), 
            React.createElement("label", {htmlFor: "firstName"}, "First Name"), 
            React.createElement("input", {type: "text", name: "firstName", className: "form-control", placeholder: "First Name", value: this.props.author.firstName, onChange: this.props.onChange}), 
            React.createElement("br", null), 
            React.createElement("label", {htmlFor: "lastName"}, "Last Name"), 
            React.createElement("input", {type: "text", name: "lastName", className: "form-control", placeholder: "Last Name", value: this.props.author.lastName, onChange: this.props.onChange}), 
            React.createElement("br", null), 
            React.createElement("input", {type: "submit", value: "Save", className: "btn btn-default"})));
    };
    return AuthorForm;
}(React.Component));
exports.AuthorForm = AuthorForm;
//# sourceMappingURL=authorForm.js.map