import ActionTypes from './RegistrationActionTypes';
import {ActionTypes as HomeActionTypes} from '../Home';

let initialState = {};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REGISTER:
      return {...state, name: action.name};
    case HomeActionTypes.UNREGISTER:
      return {...state, name: ''};
    default:
      return state;
  }
}
