import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
const { confirmButton, text } = require('./styles');

const Button = (props) => {
  return (
    <View>
      <TouchableHighlight style={confirmButton}>
        <Text style={text}>{props.buttonName}</Text>
      </TouchableHighlight>
    </View>
  )
};

export default Button;