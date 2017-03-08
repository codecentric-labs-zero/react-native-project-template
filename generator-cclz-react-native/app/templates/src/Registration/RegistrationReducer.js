import {Map} from 'immutable';
import ActionTypes from './RegistrationActionTypes';
import {ActionTypes as HomeActionTypes} from '../Home';

let initialState = Map({});

export default function registration(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REGISTER:
      return state.merge({name: action.name});
    case HomeActionTypes.UNREGISTER:
      return state.delete('name');
    default:
      return state;
  }
}
