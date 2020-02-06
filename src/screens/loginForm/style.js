import { StyleSheet } from 'react-native';

passwordInput = {
  width: '85%',
  borderRadius: 15,
  borderColor: '#175b53',
  borderWidth: 2
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  formInputs: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  passwordInput,
  
  emailInput: {
    ...passwordInput,
    marginBottom: 17,
  },
  confirmButton: {
    flex: 2
  },
  textInput: {
    color: 'grey',
    fontFamily: 'Roboto'
  },
  title: {
    color: '#175b53',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Roboto'
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
  registerView: {
    flexDirection: 'row',
    padding: 15,
    fontFamily: 'Roboto'
  }
});

module.exports = styles;