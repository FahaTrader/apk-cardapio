import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button } from 'react-native';
import burgersData from '../assets/pizzas/pizzasData';
import { useCart } from '../context/CartContext';

const PizzaMenu = () => {
  const { addToCart, message } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <Button title="+" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={burgersData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginLeft: 'auto',
    fontSize: 16,
    color: '#888',
  },
  message: {
    textAlign: 'center',
    color: 'green',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default PizzaMenu;
