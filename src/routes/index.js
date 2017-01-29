import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../pages/App';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import PostCreate from '../pages/PostCreate';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="post/create" component={PostCreate} />
    <Route path="post/:id" component={PostDetail} />
  </Route>
);
