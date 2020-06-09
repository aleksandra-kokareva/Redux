import {createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

export const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const { dispatch } = Store;

export type Dispatch = typeof dispatch;


sagaMiddleware.run(rootSaga)