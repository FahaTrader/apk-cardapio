import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button } from 'react-native';
import burgersData from '../assets/bebidas/drinksData';
import { useCart } from '../context/CartContext';
import { FontAwesome } from '@expo/vector-icons';
import {
  ItemContainer,
  ItemImage,
  ItemName,
  SubmitButton,
  SubmitText,
  Message,
  ItemPrice,
} from '../styles/burger';

const DrinkMenu = () => {
  const { addToCart, message } = useCart();

  const renderItem = ({ item }) => (
    <ItemContainer>
      <ItemImage source={item.image} />
      <ItemName>{item.name}</ItemName>
      <ItemPrice>{item.dsc}</ItemPrice>
      <SubmitButton onPress={() => addToCart(item)}>
        <SubmitText>R${item.price.toFixed(2)}</SubmitText>
        <FontAwesome name="shopping-cart" size={20} color="white" />
      </SubmitButton>
    </ItemContainer>
  );

  return (
    <View>
      <FlatList
        data={burgersData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {message ? <Message>{message}</Message> : null}
    </View>
  );
};

export default DrinkMenu;
