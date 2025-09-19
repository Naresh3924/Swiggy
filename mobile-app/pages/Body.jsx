import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <ScrollView style={styles.bodyContainer}>
      <View>
       <ProductCard products={products}/>
      </View>
    </ScrollView>
  );
};

export default Body;

const styles = StyleSheet.create({
  bodyContainer: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
});
