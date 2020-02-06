import React from 'react';
import { View, TextInput, Text, ImageBackground, TouchableHighlight } from 'react-native';

import Button from '../../components/Button/index';

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

const RegisterForm = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <ImageBackground source={whatssBackground} style={backgroundImg}>
      <View style={mainView}>
        <Text style={title}>Cadastro</Text>
        <View style={formView}>
          <TextInput style={input} placeholder='Nome'></TextInput>
          <TextInput style={input} placeholder='Telefone'></TextInput>
          <TextInput style={input} placeholder='Email'></TextInput>
          <TextInput style={input} placeholder='Senha'></TextInput>
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