import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

import  { App } from './index';
import { Home } from './components/HomePage';
import { About } from './components/about/AboutPage';
import { Authors } from './components/authors/AuthorPage';
 //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="authors" component={Authors} />
  </Route>
);