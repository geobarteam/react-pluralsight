"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AuthorList = (function (_super) {
    __extends(AuthorList, _super);
    function AuthorList() {
        _super.apply(this, arguments);
    }
    AuthorList.prototype.render = function () {
        var createAuthorRow = function (author) {
            return React.createElement("tr", {key: author.id}, 
                React.createElement("td", null, 
                    React.createElement("a", {href: "/#authors/" + author.id}, author.id)
                ), 
                React.createElement("td", null, 
                    author.firstName, 
                    " ", 
                    author.lastName));
        };
        return (React.createElement("div", null, 
            React.createElement("h1", null, "Authors"), 
            React.createElement("table", {className: "table"}, 
                React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "ID"), 
                        React.createElement("th", null, "Name"))
                ), 
                React.createElement("tbody", null, this.props.authors.map(function (x) { return createAuthorRow(x); })))));
    };
    return AuthorList;
}(React.Component));
exports.AuthorList = AuthorList;
//# sourceMappingURL=authorList.js.map