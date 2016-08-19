import React from 'react'
import { View, Text } from 'react-native'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import StartPageScene from './index'

const textIs = (text) => (
  (e) => e.props().children === text
)

describe('StartPageScene', () => {
  it('calls onButtonClick when clicking navigate to next page', () => {
    const onButtonClick = sinon.spy()
    const element = shallow(<StartPageScene onButtonClick={onButtonClick} />)
    element.findWhere(textIs('Navigate to next page')).simulate('press')
    expect(onButtonClick).to.have.been.called
  })

  it('shows text for initialAsyncState', () => {
    const initialAsyncState = 'the state'
    const element = shallow(<StartPageScene initialAsyncState={initialAsyncState} />)
    expect(element.containsMatchingElement(<Text>Initial async state: {initialAsyncState}</Text>)).to.be.true
  })
})
