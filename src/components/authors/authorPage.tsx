import * as React from "react";
import * as AuthorApi from '../../api/authorApi';
import {Author} from './author';
import {AuthorList} from './authorList';

export interface AuthorProperties { authors:Author[] }

export class Authors extends React.Component<{}, AuthorProperties>{
      constructor(){
          super();
          this.state = { authors: new Array<Author>() };
      }
          
      componentDidMount(){
          this.setState({ authors: new AuthorApi.AuthorApi().getAllAuthors() })
      };

      render() : JSX.Element {
         return(
             <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
			</div>
         );
      }
}

