import * as React from "react";
import {AuthorForm} from './authorForm';
import {Author} from './author';
import {AuthorApi} from '../../api/authorApi';

export class ManageAuthorPageErrors{
     firstName:string;
     lastName:string;
}

export interface ManageAuthorPageState { author:Author, errors:ManageAuthorPageErrors }
export class ManageAuthorPage extends React.Component<{}, ManageAuthorPageState>{
      
    private author:Author;
    public value: Author;
    private AuthorApi:AuthorApi;
    private errors:ManageAuthorPageErrors;

    constructor(){
        super();
        this.author = new Author();
        this.errors = new ManageAuthorPageErrors();
        this.state = { author: this.author, errors:this.errors };
        this.AuthorApi = new AuthorApi();
        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
        
    }

     
     setAuthorState(event:any):void {
         this.author[event.target.name] = event.target.value
         this.setState({ author: this.author, errors: this.errors });
         
    }

    authorFormIsValid():boolean{
        let formIsValid = true;
        this.errors = new ManageAuthorPageErrors(); 
        if (this.state.author.firstName.length < 3) {
			this.errors.firstName = 'First name must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			this.errors.lastName = 'Last name must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({author: this.author, errors: this.errors});
		return formIsValid;
    }

    saveAuthor(event:any):void{
        event.preventDefault();

        if (!this.authorFormIsValid()){
            return;
        }

        this.AuthorApi.saveAuthor(this.state.author);
    }

    render() : JSX.Element {
        
         return(
                <AuthorForm 
                author={this.state.author}
				onChange={this.setAuthorState}
				onSave={this.saveAuthor} 
                errors={this.errors} /> 
         );
      }
}
