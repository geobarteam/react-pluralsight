"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var textInput_1 = require('../common/textInput');
var AuthorForm = (function (_super) {
    __extends(AuthorForm, _super);
    function AuthorForm() {
        _super.apply(this, arguments);
    }
    AuthorForm.prototype.render = function () {
        return (React.createElement("form", null, 
            React.createElement("h1", null, "Manage Author"), 
            React.createElement(textInput_1.Input, {name: "firstName", label: "First Name", value: this.props.author.firstName, onChange: this.props.onChange}), 
            React.createElement(textInput_1.Input, {name: "lastName", label: "Last Name", value: this.props.author.lastName, onChange: this.props.onChange}), 
            React.createElement("input", {type: "submit", value: "Save", className: "btn btn-default"})));
    };
    return AuthorForm;
}(React.Component));
exports.AuthorForm = AuthorForm;
//# sourceMappingURL=authorForm.js.map