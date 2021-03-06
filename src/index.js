import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import './index.css';
import routes from './routes/index';
import store from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.css'; //https://reactstrap.github.io/

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
