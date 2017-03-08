import React from 'react';
import {View, Text, Button} from 'react-native';
import {Styles as CommonStyles, Colors} from '../Common';
import Styles from './HomeSceneStyles';

let HomeSceneComponent = props => (
  <View style={CommonStyles.contentContainer}>
    <Text style={Styles.welcomeText}>Welcome, {props.name}!</Text>
    <Button
      onPress={props.unregister}
      title="Unregister"
      color={Colors.PRIMARY}
      accessibilityLabel="Press this button to unregister"
    />
  </View>
);

HomeSceneComponent.propTypes = {
  name: React.PropTypes.string,
  unregister: React.PropTypes.func.isRequired
};

export default HomeSceneComponent;
