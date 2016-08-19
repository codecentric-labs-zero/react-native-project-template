import React from 'react'
import { View, Text } from 'react-native'

export default ResultPageScene = (props) => (
  <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <Text onPress={props.onBackButtonClick}>Back</Text>
    <Text onPress={props.onImmediateActionClick}>Trigger immediate action</Text>
    <Text onPress={props.onAsyncActionClick}>Trigger async action</Text>
    <Text>Result: {props.result}</Text>
  </View>
)
