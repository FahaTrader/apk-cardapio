import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Title, SubmitButton, SubmitText } from '../styles/checkout';
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
    <Container>
      <Title>Página de Checkout</Title>
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
      <SubmitButton onPress={handleCheckout}>
        <SubmitText>Finalizar Compra</SubmitText>
      </SubmitButton>
    </Container>
  );
};

export default CheckoutScreen;
