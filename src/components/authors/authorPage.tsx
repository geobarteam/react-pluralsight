import * as React from "react";
import * as AuthorApi from '../../api/authorApi';

export interface Author { 
    id: number;
    firstName: string; 
    lastName: string; 
}

export interface AuthorProperties { authors:Author[] }

export class Authors extends React.Component<{}, AuthorProperties>{
      componentWillMount(){
          var authors = new AuthorApi.AuthorApi().getAllAuthors() ;
          console.log(authors);
          this.setState({ authors: authors })
      };

      private createAuthorRow(author:Author) {
             <tr key={author.id}>
                <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
             </tr>
         };

      render(){
         return(
             <div>
                <h1>Authors</h1>
				<table className="table">
					<thead>
                    <tr>
						<th>ID</th>
						<th>Name</th>
                    </tr>
					</thead>
					<tbody>
						{ this.state.authors.map(x => this.createAuthorRow(x)) }
					</tbody>
				</table>
			</div>
         );
      }
}

