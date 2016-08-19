import StartPageScene from '../../components/StartPageScene'
import { connect } from 'react-redux'
import * as navigationActions from '../../reducers/navigation/actions'

const mapStateToProps = (state) => ({
  initialAsyncState: state.app.initialAsyncState
})

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: () => { dispatch(navigationActions.navigateTo('resultPage')) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartPageScene)
