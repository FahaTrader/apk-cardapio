import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TextInputField from '../components/TextInputField';
import { useNavigation, useRoute } from '@react-navigation/native';

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
      total
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
      />
      <TextInputField
        label="Endereço"
        placeholder="Digite seu endereço"
        value={address}
        onChangeText={setAddress}
      />
      <TextInputField
        label="Número para Contato"
        placeholder="Número do whatsapp"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInputField
        label="Forma de Pagamento"
        placeholder="Digite a forma de pagamento"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />
      <Button title="Finalizar Compra" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CheckoutScreen;
