import * as actionTypes from './actionTypes'
import app from './reducer'

describe('app reducer', () => {
  it('handles RESULT', () => {
    const theResult = 'the result'
    expect(app({}, {
      type: actionTypes.RESULT,
      result: theResult
    })).to.deep.equal({
      result: theResult
    })
  })
})
