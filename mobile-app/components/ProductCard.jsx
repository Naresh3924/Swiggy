import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const ProductCard = () => {

  const windowWidth = useWindowDimensions().width

  return (
    <ScrollView  >
      <View style={[styles.cardContainer, {
        width: windowWidth > 500 ? '80%' : '90%',
        height: windowWidth > 500 ? 200 : 300,
      }]}>
        <Text>HELLO</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: "center",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    marginVertical: 12,
    borderRadius: 12,
    padding: Platform.OS==='android'? 12: 24
  },
});

export default ProductCard;

