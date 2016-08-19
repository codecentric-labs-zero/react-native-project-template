import * as actionTypes from './actionTypes'

export default actions = {
  createResult: function (result) {
    return {
      type: actionTypes.RESULT,
      result: result
    }
  },

  immediateAction: function () {
    const result = 'some immediate value'
    return this.createResult(result)
  },

  asyncAction: function () {
    const that = this
    return async function (dispatch) {
      const result = await Promise.resolve('some asynchronously produced value')
      return dispatch(that.createResult(result))
    }
  }
}
