import ActionTypes from './RegistrationActionTypes';
import timeout from 'timeout-then';

let Actions = {
  register: function (name) {
    return async function (dispatch) {
      await timeout(500);
      return dispatch({
        type: ActionTypes.REGISTER,
        name: name
      });
    };
  },
};

export default Actions;
