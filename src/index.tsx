import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, browserHistory  } from 'react-router';
import { Route, IndexRoute } from 'react-router';
import routes from './route'

import  { App } from './components/app';
import { Home } from './components/HomePage';
import { About } from './components/about/AboutPage';
import { Authors } from './components/authors/AuthorPage';

function render(){
    ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>, document.getElementById('app')); 
};

render();
