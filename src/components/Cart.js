import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

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
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => removeFromCart(item.id)} />
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <Button title="+" onPress={() => addToCart(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {cart.length === 0 && <Text style={styles.emptyMessage}>O carrinho está vazio</Text>}
      {message ? <Text style={styles.message}>{message}</Text> : null}

      {/* Exibição do valor total */}
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>

      {/* Botão para navegar para a tela de checkout */}
      <Button title="Finalizar Compra" onPress={handleCheckoutPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  itemName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
    marginRight: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  total: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emptyMessage: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
    color: '#888',
  },
  message: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
    color: 'green',
  },
});

export default Cart;
