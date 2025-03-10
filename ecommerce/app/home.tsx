import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { pastelData } from "@/data/pastel";
import { LinearGradient } from "expo-linear-gradient";

interface Pastel {
  id: number;
  name: string;
  desc: string;
  price: number;
  promotion: number;
  img: string;
  expiration: string;
}

const home = () => {
  const [pasteis, setPasteis] = useState(
    pastelData.sort((a, b) => b.id - a.id)
  );
  
  const renderItem = ({ item }: { item: Pastel }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)} </Text>
      <Text style={styles.promotion}>R$ {item.promotion.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FFF5EE", "#FFF5EE"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        
        <Text style={styles.title}>Faça seu pedido</Text>
        
        <FlatList
          data={pasteis}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} 
          columnWrapperStyle={styles.row}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingTop: 40,
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  desc: {
    fontSize: 10,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },
  price: {
    fontSize: 12,
    color: "gray",
    marginTop: 16,
    textAlign: "center",
    textDecorationLine: "line-through",
  },
  promotion: {
    fontSize: 16,
    fontFamily: "extra-bold",
    color: "red",
    marginTop: 4,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20, 
  },
});
