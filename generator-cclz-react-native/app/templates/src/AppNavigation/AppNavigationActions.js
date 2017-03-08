import ActionTypes from './AppNavigationActionTypes';

let Actions = {
  jumpTo: scene => ({
    type: ActionTypes.JUMP_TO,
    key: scene,
  })
};

export default Actions;
