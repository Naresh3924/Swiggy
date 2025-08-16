import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductCard = ({ products }) => {
  console.log(products.images);
  return (
    <ScrollView style={styles.cardContainer}>
      <View>
        <Image
          source={{
            uri: products.image,
          }}
          style={{ width: 350, height: 250 }}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.orderNowText}>Order Now</Text>
        </View>
        <View style={styles.foodDetailsContianer}>
          <Text style={styles.foodDetailsText}>
            {products.title.slice(0, 45)}
          </Text>
          <Text style={styles.foodDetailsText}>{products.price}</Text>
        </View>
        <View style={styles.likeContainer}>
          <Image
            source={{
              uri: "data:image/png;base64,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",
            }}
            style={{ width: 50, height: 50, borderRadius: 24 }}
            resizeMode="cover"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductCard;
const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 300,
    alignSelf: "center",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    marginVertical: 12,
    borderRadius: 20,
  },

  orderNowText: {
    textAlign: "center",
    padding: 12,
    fontSize: 18,
    fontWeight: "900",
    color: "#cd853f",
  },
  foodDetailsContianer: {
    position: "absolute",
    top: 200,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    opacity: 0.6,
    marginHorizontal: 12,
    borderRadius: 6,
  },
  foodDetailsText: {
    fontWeight: "bold",
    color: "#000000",
  },
  likeContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
