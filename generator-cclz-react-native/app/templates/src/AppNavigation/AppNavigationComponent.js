import React, {Component} from 'react';
import {NavigationExperimental} from 'react-native';
import Constants from './AppNavigationConstants';
import Home from '../Home';
import Registration from '../Registration';
import Styles from './AppNavigationStyles';

let {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigation extends Component {
  _renderScene(props) {
    let scene = props.scene.route.key;
    let sceneContent;
    switch (scene) {
      case Constants.REGISTRATION_SCENE:
        sceneContent = <Registration />;
        break;
      case Constants.HOME_SCENE:
        sceneContent = <Home />;
        break;
      default:
        sceneContent = <Registration />;
    }
    return sceneContent;
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.props.navigationState}
        renderScene={this._renderScene.bind(this)}
        style={Styles.navigator}
      />
    );
  }
}

AppNavigation.propTypes = {
  navigationState: React.PropTypes.object.isRequired
};

export default AppNavigation;
