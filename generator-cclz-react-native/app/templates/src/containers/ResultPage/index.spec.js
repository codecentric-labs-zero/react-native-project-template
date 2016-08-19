import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import React from 'react-native'
import { mount } from 'enzyme'
import * as sinon from 'sinon'
import ResultPage from './index'
import * as navigationActions from '../../reducers/navigation/actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('ResultPage', (done) => {
  it('has onBackButtonClick prop bound to function that dispatches BACK navigation action', () => {
    const store = mockStore({ app: {}, navigation: {}})
    const wrapper = mount(<Provider store={store}><ResultPage /></Provider>)
    wrapper.find(ResultPage).node.renderedElement.props.onBackButtonClick()
    expect(store.getActions()[0]).to.deep.equal(navigationActions.back())
  })
})
