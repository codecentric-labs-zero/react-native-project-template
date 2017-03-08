import {StyleSheet} from 'react-native';
import {Colors} from '../Common';

let Styles = StyleSheet.create({
  registrationPrompt: {
    fontSize: 30,
    color: Colors.PRIMARY
  },
  registrationInput: {
    fontSize: 30,
    lineHeight: 40,
    height: 50,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    padding: 5
  }
});

export default Styles;
