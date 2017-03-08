import 'react-native';
import React from 'react';
import AppNavigationComponent from './AppNavigationComponent';
import {Store} from '../App/AppState';
import Constants from './AppNavigationConstants';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';

describe('AppNavigationComponent', () => {
  it('renders correctly for registration', () => {
    let navigationState = {
      index: 0,
      routes: [
        {
          key: Constants.REGISTRATION_SCENE
        }
      ]
    };
    let tree = renderer.create(<Provider store={Store}><AppNavigationComponent navigationState={navigationState} /></Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly for home', () => {
    let navigationState = {
      index: 0,
      routes: [
        {
          key: Constants.HOME_SCENE
        }
      ]
    };
    let tree = renderer.create(<Provider store={Store}><AppNavigationComponent navigationState={navigationState} /></Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
