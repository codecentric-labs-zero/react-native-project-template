import {mapStateToProps} from './AppNavigationContainer';

describe('AppNavigationContainer', () => {
  it('is connected to navigation state', () => {
    let appNavigationState = 'the app navigation state';
    let state = {appNavigation: appNavigationState};
    expect(mapStateToProps(state)).toEqual({navigationState: appNavigationState});
  });
});
