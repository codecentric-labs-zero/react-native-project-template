import { NavigationExperimental } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import StartPage from '../StartPage'
import ResultPage from '../ResultPage'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class AppNavigation extends Component {
  constructor(props) {
    super(props)
    console.log('AppNavigation with props:', props)
    this._renderScene = this._renderScene.bind(this)
  }
  render() {
    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        renderScene={this._renderScene} />
    )
  }

  _renderScene(props) {
    console.log('_renderScene with props:', props)
    const scene = props.scene.route.key
    switch (scene) {
      case 'startPage':
        return (
          <StartPage />
        )
      case 'resultPage':
        return (
          <ResultPage />
        )
    }
  }

}

const mapStateToProps = (state) => ({
  navigation: state.navigation
})

export default connect(mapStateToProps)(AppNavigation)
