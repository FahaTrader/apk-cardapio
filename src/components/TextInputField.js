import React from 'react';
import { View } from 'react-native';
import { StyledTextInput } from '../styles/Form';

const TextInputField = ({ placeholder, value, onChangeText, keyboardType, required }) => {
  return (
    <View>
      <StyledTextInput 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor="#FFF"
        required={required}
      />
    </View>
  );
};

export default TextInputField;
