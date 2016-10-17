import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/HomePage";

export interface AppProperties { route:string };
export class App extends React.Component<AppProperties, {}>{

    render(){
        var Child:any;

        switch(this.props.route){
//            case 'about': Child = About; break;
//            case 'authors': Child = Authors; break;
            default : Child = Home;
        }
        return(
            <div>
                <Child/>
            </div>
        );
    }
}


function render(){
    var route = window.location.hash.substr(1);
    ReactDOM.render(
        <App route={route} />, document.getElementById('app'));
};
window.addEventListener('hashchange', render);
render();
