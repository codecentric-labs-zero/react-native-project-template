import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Colors, Styles as CommonStyles, Config} from '../Common';
import Styles from './WelcomeSceneStyles';

class WelcomeSceneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  _onRegister() {
    this.props.register(this.state.name);
  }

  render() {
    let versionNumber = Config.VERSION;
    return (
      <View style={CommonStyles.contentContainer}>
        <Text style={Styles.registrationPrompt}>Please enter your name:</Text>
        <TextInput
          style={Styles.registrationInput}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Button
          onPress={this._onRegister.bind(this)}
          title="Register"
          color={Colors.PRIMARY}
          accessibilityLabel="Press this button to register"
        />
        <Text style={Styles.registrationPrompt}>Version: {versionNumber}</Text>
      </View>
    );
  }
}

WelcomeSceneComponent.propTypes = {
  register: React.PropTypes.func.isRequired
};

export default WelcomeSceneComponent;
