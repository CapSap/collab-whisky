import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseLoadingMiddleware from 'common/redux/promiseLoadingMiddleware';
import rootReducer from 'reducers/rootReducer';

// eslint-disable-next-line
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware, promiseLoadingMiddleware)),
);
