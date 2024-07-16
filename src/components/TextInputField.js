import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ placeholder, value, onChangeText, keyboardType, required }) => {
  return (
    <View>
      <TextInput 
        style={styles.textInput}
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

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    marginBottom: 20,
    padding: 10,
    borderColor: '#FFF',
    borderBottomWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    color: '#FFF', // Cor do texto
  },
});

export default TextInputField;
