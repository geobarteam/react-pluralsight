import * as React from "react";

export class About extends React.Component<{}, {}> {
	static willTransitionTo(transition: any, params:any, query:any, callback:any){

		}
	
	render() {
		return (
			<div>
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					</p>
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				
			</div>
		); 
	}
};