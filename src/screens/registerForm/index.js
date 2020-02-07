import React from 'react';
import { View, TextInput, Text, ImageBackground, TouchableHighlight } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux';

import Button from '../../components/Button/index';
import { setName } from '../../actions/registerActions';


const whatssBackground = require('../../imgs/whatsapp-background.png')
const {
  mainView,
  title,
  formView,
  input,
  registerButton,
  loginScreen,
  backgroundImg
} = require('./style');


const RegisterForm = props => {
  const dispatch = useDispatch();
  const { email, password, name, phone } = useSelector((state) => {
    return state.registerReducer
  })
  const { navigation } = props
  const { navigate } = navigation;

  const changeHandler = text => {
    dispatch(setName(text));
  }

  return (
    <ImageBackground source={whatssBackground} style={backgroundImg}>
      <View style={mainView}>
        <Text style={title}>Cadastro</Text>
        <View style={formView}>
          <TextInput style={input} onChangeText={changeHandler} value={name} placeholder='Nome'></TextInput>
          <TextInput style={input} value={phone} placeholder='Telefone'></TextInput>
          <TextInput style={input} value={email} placeholder='Email'></TextInput>
          <TextInput style={input} value={password} placeholder='Senha'></TextInput>
        </View>
        <View style={loginScreen}>
          <Text>Ja tem uma conta? </Text>
          <TouchableHighlight onPress={() => navigate('Login')}>
            <Text style={{ color: 'blue' }}>Entrar</Text>
          </TouchableHighlight>
        </View>
        <View style={registerButton}>
          <Button buttonName='Cadastrar' />
        </View>
      </View>
    </ImageBackground>
  )
}

export default RegisterForm;