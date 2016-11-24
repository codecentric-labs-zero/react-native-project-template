import React from 'react-native'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actionTypes from './actionTypes'
import actions from './actions'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('createResult', () => {

  it('has type RESULT', () => {
    expect(actions.createResult().type).toBe(actionTypes.RESULT);
  });

  it('has argument as result', () => {
    const theArgument = 'the argument';
    expect(actions.createResult(theArgument).result).toBe(theArgument);
  });

});

describe('immediateAction', () => {

  it('immediately returns RESULT with some immediate value', () => {
    const store = mockStore({});
    store.dispatch(actions.immediateAction());
    expect(store.getActions()[0]).toEqual(actions.createResult('some immediate value'));
  });

});

describe('asyncAction', () => {

  it('eventually dispatches RESULT with some asynchronously produced value', () => {
    const store = mockStore({});
    return store.dispatch(actions.asyncAction()).then(() => {
      expect(store.getActions()[0]).toEqual(actions.createResult('some asynchronously produced value'));
    })
  });

});
