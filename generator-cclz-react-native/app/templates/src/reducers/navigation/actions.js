import * as actionTypes from './actionTypes'

export function navigateTo(scene) {
  console.log('navigateTo(' + scene + ')')
  return {
    type: actionTypes.NAVIGATE_TO,
    key: scene
  }
}

export function back() {
  return {
    type: actionTypes.BACK
  }
}
