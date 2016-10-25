import * as React from "react";
import {AuthorForm} from './authorForm';
import {Author} from './author';
import {AuthorApi} from '../../api/authorApi';

export interface ManageAuthorPageState { author:Author }
export class ManageAuthorPage extends React.Component<{}, ManageAuthorPageState>{
      
    private author:Author;
    public value: Author;
    private AuthorApi:AuthorApi;
    constructor(){
        super();
        this.author = new Author();
        this.state = { author: new Author() };
        this.AuthorApi = new AuthorApi();
        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
    }

     
     setAuthorState(event:any):void {
         this.author[event.target.name] = event.target.value
         this.setState({ author: this.author });
         
    }

    saveAuthor(event:any):void{
        event.preventDefault();
        this.AuthorApi.saveAuthor(this.state.author);
    }

    render() : JSX.Element {
        
         return(
                <AuthorForm 
                author={this.state.author}
				onChange={this.setAuthorState}
				onSave={this.saveAuthor} /> 
         );
      }
}
