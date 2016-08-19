import React from 'react-native'
import * as sinon from 'sinon'
import * as actionTypes from './actionTypes'
import actions from './actions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('createResult', () => {
  it('has type RESULT', () => {
    expect(actions.createResult()).to.have.property('type', actionTypes.RESULT)
  })

  it('has argument as result', () => {
    const theArgument = 'the argument'
    expect(actions.createResult(theArgument)).to.have.property('result', theArgument)
  })
})

describe('immediateAction', () => {
  it('immediately returns RESULT with some immediate value', () => {
    const store = mockStore({})
    store.dispatch(actions.immediateAction())
    expect(store.getActions()[0]).to.deep.equal(actions.createResult('some immediate value'))
  })
})

describe('asyncAction', () => {
  it('eventually dispatches RESULT with some asynchronously produced value', function (done) {
    const store = mockStore({})
    store.dispatch(actions.asyncAction()).then(() => {
      expect(store.getActions()[0]).to.deep.equal(actions.createResult('some asynchronously produced value'))
      done()
    }).then(null, done)
  })
})
