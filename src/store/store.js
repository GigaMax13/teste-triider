import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducer),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(routerMiddleware(history), thunk, promiseMiddleware)),
);

export { history, store };
