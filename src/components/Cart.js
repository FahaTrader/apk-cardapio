import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
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
        <TouchableOpacity style={styles.styledButton} onPress={() => removeFromCart(item.id)}>
          <Text style={styles.styledText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity style={styles.styledButton} onPress={() => addToCart(item)}>
          <Text style={styles.styledText}>+</Text>
        </TouchableOpacity>
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
      <TouchableOpacity style={styles.submitButton} onPress={handleCheckoutPress}>
        <Text style={styles.submitText}>Preencher dados</Text>
      </TouchableOpacity>
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
    fontSize: 23,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#333',
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
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
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
  styledButton: {
    backgroundColor: 'red',
    padding: 7,
    paddingHorizontal: 13,
    borderRadius: 50,
  },
  styledText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Cart;
