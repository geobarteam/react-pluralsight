"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var authorForm_1 = require('./authorForm');
var author_1 = require('./author');
var authorApi_1 = require('../../api/authorApi');
var ManageAuthorPageErrors = (function () {
    function ManageAuthorPageErrors() {
    }
    return ManageAuthorPageErrors;
}());
exports.ManageAuthorPageErrors = ManageAuthorPageErrors;
var ManageAuthorPage = (function (_super) {
    __extends(ManageAuthorPage, _super);
    function ManageAuthorPage() {
        _super.call(this);
        this.dirty = false;
        this.author = new author_1.Author();
        this.errors = new ManageAuthorPageErrors();
        this.state = { author: this.author, errors: this.errors, dirty: this.dirty };
        this.AuthorApi = new authorApi_1.AuthorApi();
        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
    }
    ManageAuthorPage.prototype.setAuthorState = function (event) {
        this.dirty = true;
        this.author[event.target.name] = event.target.value;
        this.setState({ author: this.author, errors: this.errors, dirty: this.dirty });
    };
    ManageAuthorPage.prototype.authorFormIsValid = function () {
        var formIsValid = true;
        this.errors = new ManageAuthorPageErrors();
        if (this.state.author.firstName.length < 3) {
            this.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 3) {
            this.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }
        this.setState({ author: this.author, errors: this.errors, dirty: this.dirty });
        return formIsValid;
    };
    ManageAuthorPage.prototype.saveAuthor = function (event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }
        this.AuthorApi.saveAuthor(this.state.author);
    };
    ManageAuthorPage.prototype.render = function () {
        return (React.createElement(authorForm_1.AuthorForm, {author: this.state.author, onChange: this.setAuthorState, onSave: this.saveAuthor, errors: this.errors}));
    };
    ManageAuthorPage.contextTypes = {
        router: React.PropTypes.object.isRequired,
    };
    return ManageAuthorPage;
}(React.Component));
exports.ManageAuthorPage = ManageAuthorPage;
//# sourceMappingURL=manageAuthorPage.js.map