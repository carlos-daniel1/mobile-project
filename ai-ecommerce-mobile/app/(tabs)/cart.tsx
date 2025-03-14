import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../cartcontext';

const Cart = () => {
  const { cart, removerDoCarrinho } = useCart();

  const calcularTotal = () => {
    return cart
      .reduce((total, item) => {
        const preco = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
        return total + preco;
      }, 0)
      .toFixed(2);
  };

  const finalizarPedido = () => {
    if (cart.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione itens ao carrinho antes de finalizar o pedido.');
      return;
    }

    Alert.alert(
      'Pedido Finalizado',
      `Seu pedido no valor de R$ ${calcularTotal()} foi confirmado. Obrigado!`,
      [
        { text: 'OK', onPress: () => console.log('Pedido finalizado') }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.cartId}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.productName}>{item.nome}</Text>
                  <Text style={styles.productPrice}>{item.preco}</Text>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removerDoCarrinho(item.cartId)}
                  >
                    <Text style={styles.removeButtonText}>Remover</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: R$ {calcularTotal()}</Text>
          </View>
          
          <TouchableOpacity style={styles.finalizarButton} onPress={finalizarPedido}>
            <Text style={styles.finalizarButtonText}>Finalizar Pedido</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF8E1',
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  productPrice: {
    fontSize: 16,
    color: '#6D4C41',
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#FF6B6B',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
  },
  emptyCart: {
    fontSize: 18,
    color: '#3E2723',
    textAlign: 'center',
    marginTop: 20,
  },
  finalizarButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#3E2723',
    borderRadius: 10,
    alignItems: 'center',
  },
  finalizarButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;