 import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Cart: { cartItems: string }; 
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Produto = {
  id: string;
  nome: string;
  preco: string;
  imagem: string;
};

const produtos: Produto[] = [
  { id: '1', nome: 'Café Espresso', preco: 'R$ 8,00', imagem: 'https://files.agro20.com.br/uploads/2020/01/Caf%C3%A9-expresso-1-1024x576.jpg' },
  { id: '2', nome: 'Cappuccino', preco: 'R$ 12,00', imagem: 'https://www.bongusto.ind.br/wp-content/uploads/2023/06/FRAPE-CAPUCCINO14.jpg' },
  { id: '3', nome: 'Chocolate Quente', preco: 'R$ 8,00', imagem: 'https://www.mococa.com.br/wp-content/uploads/2022/03/2313456.png' },
  { id: '4', nome: 'Gelato', preco: 'R$ 12,00', imagem: 'https://vejario.abril.com.br/wp-content/uploads/2016/11/vero-gelato-e-cafe_cacau-amma-com-nibs-de-cacau_foto-rodrigo-azevedo-1.jpeg?quality=70&strip=info&w=920&w=636' }
];

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  
  const [cart, setCart] = useState<Produto[]>([]);

  
  const adicionarAoCarrinho = (produto: Produto) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, produto];
      console.log('Itens no carrinho:', newCart); 
      return newCart;
    });
  };

  
  const irParaCarrinho = () => {
    console.log('Itens sendo passados para o carrinho:', cart); 
    navigation.navigate('Cart', { cartItems: JSON.stringify(cart) });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menu da Cafeteria</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>{item.nome}</Text>
              <Text style={styles.productPrice}>{item.preco}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => adicionarAoCarrinho(item)}>
                <Text style={styles.addButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.cartButton} onPress={irParaCarrinho}>
        <Text style={styles.cartButtonText}>Ir para o Carrinho ({cart.length})</Text>
      </TouchableOpacity>
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
    flex: 1, 
    backgroundColor: '#FFF8E1',
    margin: 8, 
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: '48%', 
  },
  image: {
    width: '100%', 
    height: 100, 
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center', 
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#6D4C41',
    textAlign: 'center',
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#6D4C41',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
  cartButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#3E2723',
    borderRadius: 10,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;