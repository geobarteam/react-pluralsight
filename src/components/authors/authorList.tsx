import * as React from "react";
import {Author} from './author';

export interface AuthorProperties { authors:Author[] }

export class AuthorList extends React.Component<AuthorProperties, {}>{

      render() : JSX.Element {
          let createAuthorRow = (author:Author) => 
             <tr key={author.id}>
                <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
             </tr>;
         
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
						{ this.props.authors.map(x => createAuthorRow(x)) }
					</tbody>
				</table>
			</div>
         );
      }
}

