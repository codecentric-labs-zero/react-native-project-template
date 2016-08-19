import React from 'react'
import { View, Text } from 'react-native'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import ResultPageScene from './index'

const textIs = (text) => (
  (e) => e.props().children === text
)

describe('ResultPageScene', () => {
  it('calls onBackButtonClick when clicking back', () => {
    const onButtonClick = sinon.spy()
    const element = shallow(<ResultPageScene onBackButtonClick={onButtonClick} />)
    element.findWhere(textIs('Back')).simulate('press')
    expect(onButtonClick).to.have.been.called
  })

  it('calls onImmediateActionClick when clicking trigger immediate action', () => {
    const onImmediateActionClick = sinon.spy()
    const element = shallow(<ResultPageScene onImmediateActionClick={onImmediateActionClick} />)
    element.findWhere(textIs('Trigger immediate action')).simulate('press')
    expect(onImmediateActionClick).to.have.been.called
  })

  it('calls onAsyncActionClick when clicking trigger async action', () => {
    const onAsyncActionClick = sinon.spy()
    const element = shallow(<ResultPageScene onAsyncActionClick={onAsyncActionClick} />)
    element.findWhere(textIs('Trigger async action')).simulate('press')
    expect(onAsyncActionClick).to.have.been.called
  })

  it('shows text for result', () => {
    const result = 'the result'
    const element = shallow(<ResultPageScene result={result} />)
    expect(element.containsMatchingElement(<Text>Result: {result}</Text>)).to.be.true
  })
})
