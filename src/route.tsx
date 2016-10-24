import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import  { App } from './components/app';
import { Home } from './components/HomePage';
import { About } from './components/about/AboutPage';
import { Authors } from './components/authors/AuthorPage';
import { ManageAuthorPage } from './components/authors/manageAuthorPage';
import { NotFoundPage } from './components/NotFoundPage';

var Redirect = Router.Redirect;

var routeMap = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="authors" component={Authors} />
    <Route path="author" component={ManageAuthorPage} />
    <Redirect from='about-us' to='about' />
    <Route path='*' component={NotFoundPage} /> 
  </Route>
);

export default routeMap;