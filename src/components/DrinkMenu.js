import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import drinkData from '../assets/bebidas/drinksData';
import { useCart } from '../context/CartContext';
import { FontAwesome } from '@expo/vector-icons';

const DrinkMenu = () => {
  const { addToCart, message } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.dsc}</Text>
      <TouchableOpacity style={styles.submitButton} onPress={() => addToCart(item)}>
        <Text style={styles.submitText}>R${item.price.toFixed(2)}</Text>
        <FontAwesome name="shopping-cart" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={drinkData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    backgroundColor: '#1d1d1e',
  },
  itemImage: {
    width: '100%',
    height: 300,
    marginRight: 10,
  },
  itemName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 18,
    marginBottom: 25,
    color: '#FFF',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  message: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginVertical: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: -40,
    right: 5,
    padding: 10,
    borderRadius: 10,
  },
});

export default DrinkMenu;
