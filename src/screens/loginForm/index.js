import React from 'react';
import { View, Text, TextInput, ImageBackground, TouchableHighlight } from 'react-native';

import Button from '../../components/Button/index';

const whatssBackground = require('../../imgs/whatsapp-background.png');

const {
  mainView,
  titleView,
  formInputs,
  emailInput,
  passwordInput,
  confirmButton,
  textInput,
  title,
  backgroundImg,
  registerView
} = require('./style');

const LoginForm = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <ImageBackground source={whatssBackground} style={backgroundImg}>
      <View style={mainView}>
        <View style={titleView}>
          <Text style={title}>WhatsApp</Text>
        </View>
        <View style={formInputs}>
          <View style={emailInput}>
            <TextInput style={textInput} placeholder='Email' />
          </View>
          <View style={passwordInput}>
            <TextInput style={textInput} placeholder='Senha' />
          </View>
          <View style={registerView}>
            <Text>Ainda não tem cadastro? </Text>
            <TouchableHighlight onPress={() => navigate('Register')}>
              <Text style={{ color: 'blue' }}>Cadastre-se</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={confirmButton}>
          <Button buttonName='Confirmar' />
        </View>
      </View>
    </ImageBackground>
  )
};

export default LoginForm;