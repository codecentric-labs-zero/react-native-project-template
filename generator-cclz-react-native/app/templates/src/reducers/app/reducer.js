import * as actionTypes from './actionTypes'

export default function app(state = {}, action) {
  switch (action.type) {
    case actionTypes.RESULT:
      return {
        ...state,
        result: action.result
      }
    default:
      return state
  }
}
