import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  mainView: {
    flex: 1
  },
  title: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#175b53',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Roboto'
  },
  formView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  input:{
    width: '85%',
    borderWidth: 2,
    borderColor: '#175b53',
    borderRadius: 15,
    marginBottom: 10,
    color: 'grey',
    fontFamily: 'Roboto'
  },
  registerButton: {
    flex: 2, 
    justifyContent: 'center'
  },
  loginScreen: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  backgroundImg: {
    width: '100%',
    height: '100%'
  }
});
