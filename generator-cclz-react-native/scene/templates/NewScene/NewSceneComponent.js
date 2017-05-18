import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Colors, Styles as CommonStyles, Config} from '../Common';
import Styles from './<%= projectName %>SceneStyles';

class <%= projectName %>SceneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variable: ''
    };
  }

  _onAction_1() {
    this.props.action_1(this.state.variable);
  }

  _onAction_2() {
    this.props.action_2;
  }


  render() {
    let versionNumber = Config.VERSION;
    return (
      <View style={CommonStyles.contentContainer}>
        <Text style={Styles.insertPrompt}>Please enter your variable:</Text>
        <TextInput
          style={Styles.input}
          onChangeText={(variable) => this.setState({variable})}
          value={this.state.variable}
        />
        <Button
          onPress={this._onAction_1.bind(this)}
          title="Register"
          color={Colors.PRIMARY}
          accessibilityLabel="Press this button to set variable"
        />

        <Button
          onPress={this._onAction_2.bind(this)}
          title="Register"
          color={Colors.PRIMARY}
          accessibilityLabel="Press this button to remove variable"
        />

    <Text style={Styles.insertPrompt}>Version: {versionNumber}</Text>
      </View>
    );
  }
}

<%= projectName %>SceneComponent.propTypes = {
    action_1: React.PropTypes.func.isRequired
    action_2: React.PropTypes.func.isRequired
};

export default <%= projectName %>SceneComponent;
