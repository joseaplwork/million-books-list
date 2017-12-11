import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import fetchBooksSaga from './containers/BooksList/saga';
import reducers from './index-reducers';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(fetchBooksSaga);

export default store;
