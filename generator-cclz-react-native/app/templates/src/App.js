import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as asyncInitialState from 'redux-async-initial-state'
import * as reducers from './reducers'
import AppNavigation from './containers/AppNavigation'

async function loadInitialState() {
  const state = await Promise.resolve('some async initial state')
  return {
    app: {
      initialAsyncState: state
    }
  }
}

const store = createStore(
  asyncInitialState.outerReducer(combineReducers(reducers)),
  applyMiddleware(thunk, asyncInitialState.middleware(loadInitialState))
)

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }
}

export default App
