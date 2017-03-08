import {mapStateToProps} from './AppNavigationContainer';
import {Map} from 'immutable';

describe('AppNavigationContainer', () => {
  it('is connected to navigation state', () => {
    let appNavigationState = 'the app navigation state';
    let state = Map({appNavigation: appNavigationState});
    expect(mapStateToProps(state)).toEqual({navigationState: appNavigationState});
  });
});
