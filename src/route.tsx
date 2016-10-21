import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import  { App } from './components/app';
import { Home } from './components/HomePage';
import { About } from './components/about/AboutPage';
import { Authors } from './components/authors/AuthorPage';

var routeMap = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="authors" component={Authors} />
  </Route>
);

export default routeMap;