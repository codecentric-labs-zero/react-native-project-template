import * as actionTypes from './actionTypes'
import { NavigationExperimental } from 'react-native'

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  routes: [
    {
      key: 'startPage'
    }
  ]
}

export default function navigation(state = initialState, action) {
  console.log('navigation')
  console.log('state:', state)
  console.log('action:', action)
  switch (action.type) {
    case actionTypes.NAVIGATE_TO:
      return NavigationStateUtils.push(state, { key: action.key })
    case actionTypes.BACK:
      return NavigationStateUtils.pop(state)
    default:
      return state
  }
}
