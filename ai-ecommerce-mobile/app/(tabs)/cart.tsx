import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // Importe useLocalSearchParams

type Produto = {
  id: string;
  nome: string;
  preco: string;
  imagem: string;
};

const Cart = () => {
  const { cartItems } = useLocalSearchParams<{ cartItems: string }>();
  console.log('Itens recebidos no carrinho:', cartItems); 

  let parsedCartItems: Produto[] = [];

  try {
    parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
  } catch (error) {
    console.error('Erro ao analisar os itens do carrinho:', error);
  }

  console.log('Itens decodificados:', parsedCartItems); 

  const calcularTotal = () => {
    return parsedCartItems.reduce((total, item) => {
      const preco = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
      return total + preco;
    }, 0).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      {parsedCartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={parsedCartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.productName}>{item.nome}</Text>
                  <Text style={styles.productPrice}>{item.preco}</Text>
                </View>
              </View>
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: R$ {calcularTotal()}</Text>
          </View>
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
});

export default Cart;