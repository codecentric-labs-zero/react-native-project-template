import 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import StartPageScene from './index'

const textIs = (text) => (
  (e) => e.props().children === text
);

describe('StartPageScene', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <StartPageScene />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onButtonClick when clicking navigate to next page', () => {
    const onButtonClick = jest.fn();
    const element = shallow(<StartPageScene onButtonClick={onButtonClick} />);
    element.findWhere(textIs('Navigate to next page')).simulate('press');
    expect(onButtonClick).toBeCalled();
  });

  it('shows text for initialAsyncState', () => {
    const initialAsyncState = 'the state';
    const element = shallow(<StartPageScene initialAsyncState={initialAsyncState} />);
    expect(element.containsMatchingElement(<Text>Initial async state: {initialAsyncState}</Text>)).toBeTruthy();
  });

});
