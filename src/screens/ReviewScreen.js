import React from 'react';
import { FlatList, Button, Linking } from 'react-native';
import {
  Container,
  Title,
  DetailText,
  ItemContainer,
  ItemName,
  ItemQuantity,
  ItemPrice,
  TotalText,
  SubmitButton,
  SubmitText,
} from '../styles/review';

const ReviewScreen = ({ route }) => {
  const { name, address, phoneNumber, paymentMethod, cart, total } = route.params;

  const renderItem = ({ item }) => (
    <ItemContainer>
      <ItemName>{item.name}</ItemName>
      <ItemQuantity>Quantidade: {item.quantity}</ItemQuantity>
      <ItemPrice>Preço: ${item.price.toFixed(2)}</ItemPrice>
    </ItemContainer>
  );

  const handleWhatsAppPress = () => {
    const cartDetails = cart
      .map(item => `Produto: ${item.name}, Quantidade: ${item.quantity}, Preço: $${item.price.toFixed(2)}`)
      .join('\n');
    const message = `*Detalhes da Compra*:\n\n*Nome*: ${name}\n*Endereço*: ${address}\n*Número de Contato*: ${phoneNumber}\n*Forma de Pagamento:* ${paymentMethod}\n\n*Itens do Carrinho:*\n${cartDetails}\n\n*Total:* R$${total}`;
    const url = `https://wa.me/5521982565890?text=${encodeURIComponent(message)}`;

    Linking.openURL(url)
      .then(() => {
        console.log('WhatsApp Opened');
      })
      .catch(err => {
        console.error('Error opening WhatsApp:', err);
      });
  };

  return (
    <Container>
      <Title>Revisão da Compra</Title>
      <DetailText>Nome: {name}</DetailText>
      <DetailText>Endereço: {address}</DetailText>
      <DetailText>Número de Contato: {phoneNumber}</DetailText>
      <DetailText>Forma de Pagamento: {paymentMethod}</DetailText>

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TotalText>Total: ${total}</TotalText>

      <SubmitButton onPress={handleWhatsAppPress} >
        <SubmitText>Finalizar Compra</SubmitText>
      </SubmitButton>
    </Container>
  );
};

export default ReviewScreen;
