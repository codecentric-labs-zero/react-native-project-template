import {AsyncStorage} from 'react-native';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';
import * as reducers from './AppReducers';

let Store = createStore(
  combineReducers(reducers),
  {},
  composeWithDevTools(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

let Persistor = persistStore(Store, {storage: AsyncStorage});

export {Store, Persistor};
