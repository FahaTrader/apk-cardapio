import React from 'react';
import { FlatList } from 'react-native';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { 
  Container, 
  ItemContainer, 
  ItemName, 
  ItemPrice,
  QuantityContainer,
  QuantityText,
  Total,
  EmptyMessage,
  Message,
  StyledButton,
  StyledText
} from '../styles/cart'
import { SubmitButton, SubmitText } from '../styles/burger';

const Cart = () => {
  const { cart, removeFromCart, message, addToCart } = useCart();
  const navigation = useNavigation();

  // Função para calcular o valor total do carrinho
  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2); // Formata para duas casas decimais
  };

  const handleCheckoutPress = () => {
    navigation.navigate('Checkout', {
      cart,
      total: calculateTotal()
    });
  };
  

  const renderItem = ({ item }) => (
    <ItemContainer>
      <ItemName>{item.name}</ItemName>
      <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
      <QuantityContainer>
        <StyledButton onPress={() => removeFromCart(item.id)}>
          <StyledText>-</StyledText>
        </StyledButton>
        <QuantityText>{item.quantity}</QuantityText>
        <StyledButton onPress={() => addToCart(item)}>
          <StyledText>+</StyledText>
        </StyledButton>
      </QuantityContainer>
    </ItemContainer>
  );

  return (
    <Container>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {cart.length === 0 && <EmptyMessage>O carrinho está vazio</EmptyMessage>}
      {message ? <Message>{message}</Message> : null}

      {/* Exibição do valor total */}
      <Total>Total: ${calculateTotal()}</Total>

      {/* Botão para navegar para a tela de checkout */}
      <SubmitButton onPress={handleCheckoutPress}>
        <SubmitText>Preencher dados</SubmitText>
      </SubmitButton>
    </Container>
  );
};

export default Cart;
