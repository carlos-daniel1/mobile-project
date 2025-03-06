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
      <Text style={styles.price}>Preço: R${item.price.toFixed(2)}</Text>
      <Text style={styles.promotion}>Promoção: R${item.promotion.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#AD6F69", "#43302E"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
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
    flex: 1
  },
  gradient: {
    flex: 1,
    paddingTop: 40,
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
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
    fontSize: 12,
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
    color: "#000",
    marginTop: 5,
    textAlign: "center",
  },
  promotion: {
    fontSize: 12,
    color: "red",
    marginTop: 5,
    textAlign: "center",
  },
});