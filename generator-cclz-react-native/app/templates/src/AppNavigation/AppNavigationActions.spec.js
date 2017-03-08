import Actions from './AppNavigationActions';
import ActionTypes from './AppNavigationActionTypes';

describe('jumpTo', () => {
  it('creates JUMP_TO action for given scene', () => {
    let expectedScene = 'the scene';
    expect(Actions.jumpTo(expectedScene).type).toBe(ActionTypes.JUMP_TO);
    expect(Actions.jumpTo(expectedScene).key).toBe(expectedScene);
  });
});
