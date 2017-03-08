import {Platform, StyleSheet} from 'react-native';

let Styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    ...Platform.select({
      ios: {
        backgroundColor: 'lightgrey'
      },
      android: {
        backgroundColor: 'white'
      }
    })
  }
});

export default Styles;
