import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Linking } from 'react-native';
import 'react-native-url-polyfill/auto';

const ReviewScreen = ({ route }) => {
  const { name, address, phoneNumber, paymentMethod, cart, total } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
      <Text style={styles.itemPrice}>Preço: ${item.price.toFixed(2)}</Text>
    </View>
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
    <View style={styles.container}>
      <Text style={styles.title}>Revisão da Compra</Text>
      <Text style={styles.detail}>Nome: {name}</Text>
      <Text style={styles.detail}>Endereço: {address}</Text>
      <Text style={styles.detail}>Número de Contato: {phoneNumber}</Text>
      <Text style={styles.detail}>Forma de Pagamento: {paymentMethod}</Text>

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.total}>Total: ${total}</Text>

      <Button title="Enviar para WhatsApp" onPress={handleWhatsAppPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
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
  itemQuantity: {
    fontSize: 16,
    color: '#888',
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
    marginRight: 10,
  },
  total: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ReviewScreen;
