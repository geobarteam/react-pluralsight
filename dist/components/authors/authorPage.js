"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require('react-router');
var AuthorApi = require('../../api/authorApi');
var authorList_1 = require('./authorList');
var Authors = (function (_super) {
    __extends(Authors, _super);
    function Authors() {
        _super.call(this);
        this.state = { authors: new Array() };
    }
    Authors.prototype.componentDidMount = function () {
        this.setState({ authors: new AuthorApi.AuthorApi().getAllAuthors() });
    };
    ;
    Authors.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h1", null, "Authors"), 
            React.createElement(react_router_1.Link, {to: "/author", className: "btn btn-default"}, "Add Author"), 
            React.createElement(authorList_1.AuthorList, {authors: this.state.authors})));
    };
    return Authors;
}(React.Component));
exports.Authors = Authors;
//# sourceMappingURL=authorPage.js.map