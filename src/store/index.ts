import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { Middleware } from 'redux';

import persistedReducer from './modules/persistedReducer'
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';




const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(persistedReducer,middlewares);
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export { store, persistor };