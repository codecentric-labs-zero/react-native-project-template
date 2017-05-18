import ActionTypes from './<%= projectName %>ActionTypes';
import timeout from 'timeout-then';

let Actions = {
    action_1: function (variable) {
        return async function (dispatch) {
            await timeout(500);
            return dispatch({
                type: ActionTypes.NEW_SCENE_ACTION_1,
                variable: variable
            });
        };
    },
    action_2: () => ({
        type: ActionTypes.NEW_SCENE_ACTION_2
    })
};

export default Actions;
