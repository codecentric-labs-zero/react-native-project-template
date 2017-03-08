jest.mock('redux');
jest.mock('redux-immutable');
jest.mock('redux-persist-immutable');
import './AppState';
import {autoRehydrate, persistStore} from 'redux-persist-immutable';
import {applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutable';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';
import * as reducers from './AppReducers';

describe('Store', () => {
  it('is configured with the required middlewares', () => {
    expect(applyMiddleware).toBeCalledWith(thunk);
    expect(autoRehydrate).toBeCalled();
  });

  it('is configured with the required reducers', () => {
    expect(combineReducers).toBeCalledWith(reducers);
  });
});

describe('Persistor', () => {
  it('is configured with AsyncStorage', () => {
    expect(persistStore.mock.calls[0][1].storage).toBe(AsyncStorage);
  });
});
