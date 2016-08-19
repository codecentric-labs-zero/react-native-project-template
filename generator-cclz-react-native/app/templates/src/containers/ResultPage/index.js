import ResultPageScene from '../../components/ResultPageScene'
import { connect } from 'react-redux'
import * as navigationActions from '../../reducers/navigation/actions'
import appActions from '../../reducers/app/actions'

const mapStateToProps = (state) => ({
  result: state.app.result
})

const mapDispatchToProps = (dispatch) => ({
  onBackButtonClick: () => { dispatch(navigationActions.back()) },
  onImmediateActionClick: () => { dispatch(appActions.immediateAction()) },
  onAsyncActionClick: () => { dispatch(appActions.asyncAction()) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultPageScene)
