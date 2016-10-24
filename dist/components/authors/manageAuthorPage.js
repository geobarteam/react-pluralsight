"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var authorForm_1 = require('./authorForm');
var author_1 = require('./author');
var ManageAuthorPage = (function (_super) {
    __extends(ManageAuthorPage, _super);
    function ManageAuthorPage() {
        _super.call(this);
        this.author = new author_1.Author();
        this.state = { author: new author_1.Author() };
        this.setAuthorState = this.setAuthorState.bind(this);
    }
    ManageAuthorPage.prototype.setAuthorState = function (event) {
        this.author[event.target.name] = event.target.value;
        this.setState({ author: this.author });
    };
    ManageAuthorPage.prototype.render = function () {
        return (React.createElement(authorForm_1.AuthorForm, {author: this.state.author, onChange: this.setAuthorState}));
    };
    return ManageAuthorPage;
}(React.Component));
exports.ManageAuthorPage = ManageAuthorPage;
//# sourceMappingURL=manageAuthorPage.js.map