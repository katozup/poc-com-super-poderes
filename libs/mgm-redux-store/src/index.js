import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './lib/ducks';
import sagas from './lib/sagas';
import { Creators as analyticsActions } from './lib/ducks/analytics';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;

export {
  analyticsActions
};
