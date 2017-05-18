import {Map} from 'immutable';
import ActionTypes from './<%= projectName %>ActionTypes';

let initialState = Map({});

export default function registration(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.NEWSCENEACTION1:
      return state.merge({variable: action.variable});
    case ActionTypes.NEWSCENEACTION2:
      return state.delete('variable');
    default:
      return state;
  }
}
