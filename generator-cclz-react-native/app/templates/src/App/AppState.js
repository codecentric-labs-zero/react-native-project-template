import {AsyncStorage} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers} from 'redux-immutable';
import {persistStore, autoRehydrate} from 'redux-persist-immutable';
import {Map} from 'immutable';
import thunk from 'redux-thunk';
import * as reducers from './AppReducers';

let Store = createStore(
  combineReducers(reducers),
  Map({}),
  composeWithDevTools(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

let Persistor = persistStore(Store, {storage: AsyncStorage});

export {Store, Persistor};
