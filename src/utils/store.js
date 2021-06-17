import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootSaga from './saga';
import reducers from './rootReducer';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(
  sagaMiddleware
)))

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  // console.log('store', store.getState())
})

export default store
