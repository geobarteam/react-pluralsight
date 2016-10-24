import * as React from "react";
import {Router, Link} from 'react-router';

import * as AuthorApi from '../../api/authorApi';
import {Author} from './author';
import {AuthorList} from './authorList';

export interface AuthorsProperties { authors:Author[] }

export class Authors extends React.Component<{}, AuthorsProperties>{
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
                <Link to="/author" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
			</div>
         );
      }
}

