import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

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
      <Text style={styles.detailText}>Nome: {name}</Text>
      <Text style={styles.detailText}>Endereço: {address}</Text>
      <Text style={styles.detailText}>Número de Contato: {phoneNumber}</Text>
      <Text style={styles.detailText}>Forma de Pagamento: {paymentMethod}</Text>

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.totalText}>Total: ${total}</Text>

      <TouchableOpacity style={styles.submitButton} onPress={handleWhatsAppPress}>
        <Text style={styles.submitText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1d1d1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  detailText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
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
    color: '#FFF',
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
  totalText: {
    textAlign: 'right',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#FFF',
  },
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ReviewScreen;
