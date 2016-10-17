//This file is mocking a web API by hitting hard coded data.
import * as AuthorData from './authorData';
import * as _ from 'lodash';
var authors = AuthorData.AuthorData.authors;

export class AuthorApi {
	//This would be performed on the server in a real app. Just stubbing in.
	private _generateId(author: any) {
		return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
	};
	private _clone(item:any) {
		return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
	};

	getAllAuthors() {
			return this._clone(authors); 
		};

	getAuthorById(id: number) {
		var author = _.find(authors, {id: id});
		return this._clone(author);
	}
	
	saveAuthor(author:any) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		if (author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id})); 
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			author.id = this._generateId(author);
			authors.push(author);
		}

		return this._clone(author);
	}

	deleteAuthor(id: number) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(authors, { id: id});
	}

}
