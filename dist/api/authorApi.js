"use strict";
//This file is mocking a web API by hitting hard coded data.
var AuthorData = require('./authorData');
var _ = require('lodash');
var authors = AuthorData.AuthorData.authors;
var AuthorApi = (function () {
    function AuthorApi() {
    }
    //This would be performed on the server in a real app. Just stubbing in.
    AuthorApi.prototype._generateId = function (author) {
        return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
    };
    ;
    AuthorApi.prototype._clone = function (item) {
        return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
    };
    ;
    AuthorApi.prototype.getAllAuthors = function () {
        return this._clone(authors);
    };
    ;
    AuthorApi.prototype.getAuthorById = function (id) {
        var author = _.find(authors, { id: id });
        return this._clone(author);
    };
    AuthorApi.prototype.saveAuthor = function (author) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the author to the DB via AJAX call...');
        if (author.id) {
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, { id: author.id }));
            authors.splice(existingAuthorIndex, 1, author);
        }
        else {
            //Just simulating creation here.
            //The server would generate ids for new authors in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            author.id = this._generateId(author);
            authors.push(author);
        }
        return this._clone(author);
    };
    AuthorApi.prototype.deleteAuthor = function (id) {
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
        _.remove(authors, { id: id });
    };
    return AuthorApi;
}());
exports.AuthorApi = AuthorApi;
//# sourceMappingURL=authorApi.js.map