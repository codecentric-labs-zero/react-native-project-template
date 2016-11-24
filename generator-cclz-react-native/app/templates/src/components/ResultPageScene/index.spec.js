import 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ResultPageScene from './index';

const textIs = (text) => (
  (e) => e.props().children === text
);

describe('ResultPageScene', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <ResultPageScene />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onBackButtonClick when clicking back', () => {
    const onButtonClick = jest.fn();
    const element = shallow(<ResultPageScene onBackButtonClick={onButtonClick} />);
    element.findWhere(textIs('Back')).simulate('press');
    expect(onButtonClick).toBeCalled();
  });

  it('calls onImmediateActionClick when clicking trigger immediate action', () => {
    const onImmediateActionClick = jest.fn();
    const element = shallow(<ResultPageScene onImmediateActionClick={onImmediateActionClick} />);
    element.findWhere(textIs('Trigger immediate action')).simulate('press');
    expect(onImmediateActionClick).toBeCalled();
  });

  it('calls onAsyncActionClick when clicking trigger async action', () => {
    const onAsyncActionClick = jest.fn();
    const element = shallow(<ResultPageScene onAsyncActionClick={onAsyncActionClick} />);
    element.findWhere(textIs('Trigger async action')).simulate('press');
    expect(onAsyncActionClick).toBeCalled();
  });

  it('shows text for result', () => {
    const result = 'the result';
    const element = shallow(<ResultPageScene result={result} />);
    expect(element.containsMatchingElement(<Text>Result: {result}</Text>)).toBeTruthy();
  })
})
