import React from 'react'
import { View, Text } from 'react-native'

export default StartPageScene = (props) => (
  <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Text onPress={props.onButtonClick}>Navigate to next page</Text>
    <Text>Initial async state: {props.initialAsyncState}</Text>
  </View>
)
