import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from './common/header';

export interface AppProperties { route:string };
export class App extends React.Component<AppProperties, {}>{

    render(){
        var Child:any;
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
