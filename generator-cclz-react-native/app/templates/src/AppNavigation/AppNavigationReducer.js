import {NavigationExperimental} from 'react-native';
import ActionTypes from './AppNavigationActionTypes';
import {ActionTypes as HomeActionTypes} from '../Home';
import {ActionTypes as RegistrationActionTypes} from '../Registration';
import Constants from './AppNavigationConstants';

let {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;


let initialState = {
  index: 0,
  routes: [
    {
      key: Constants.REGISTRATION_SCENE
    }
  ]
};

export default function appNavigation(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.JUMP_TO:
      return NavigationStateUtils.reset(state, [{key: action.key}], 0);
    case HomeActionTypes.UNREGISTER:
      return initialState;
    case RegistrationActionTypes.REGISTER:
      return NavigationStateUtils.reset(state, [{key: Constants.HOME_SCENE}], 0);
    default:
      return state;
  }
}
