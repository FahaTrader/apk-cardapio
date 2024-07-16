import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import TextInputField from '../components/TextInputField';

const CheckoutScreen = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const { cart, total } = route.params;

  const handleCheckout = () => {
    navigation.navigate('Review', {
      name,
      address,
      phoneNumber,
      paymentMethod,
      cart,
      total,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Checkout</Text>
      <TextInputField
        label="Nome"
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
        required
      />
      <TextInputField
        label="Endereço"
        placeholder="Digite seu endereço"
        value={address}
        onChangeText={setAddress}
        required
      />
      <TextInputField
        label="Número para Contato"
        placeholder="Número do whatsapp"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        required
      />
      <TextInputField
        label="Forma de Pagamento"
        placeholder="Digite a forma de pagamento"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
        required
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleCheckout}>
        <Text style={styles.submitText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#1d1d1e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CheckoutScreen;
