import * as React from "react";
import {AuthorForm} from './authorForm';
import {Author} from './author';

export interface ManageAuthorPageState { author:Author }
export class ManageAuthorPage extends React.Component<{}, ManageAuthorPageState>{
      
    private author:Author;
    public value: Author;
    constructor(){
        super();
        this.author = new Author();
        this.state = { author: new Author() };
        this.setAuthorState = this.setAuthorState.bind(this);
    }

     
     setAuthorState(event:any) {
         this.author[event.target.name] = event.target.value
         this.setState({ author: this.author });
         
    }

    render() : JSX.Element {
        
         return(
                <AuthorForm 
                author={this.state.author}
				onChange={this.setAuthorState}
				 /> 
         );
      }
}
