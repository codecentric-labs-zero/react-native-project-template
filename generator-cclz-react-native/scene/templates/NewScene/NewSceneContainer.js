import {connect} from 'react-redux';
import Actions from './<%= projectName %>Actions';
import <%= projectName %>SceneComponent from './<%= projectName %>SceneComponent';

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
    action_1: name => dispatch(Actions.action_1(variable))
    action_2: () => dispatch(Actions.action_2())
});

export default connect(mapStateToProps, mapDispatchToProps)(<%= projectName %>SceneComponent);
