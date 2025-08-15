import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import Header from "../components/Header";
import Body from "../pages/Body";
import Footer from "../components/Footer";

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar />
        <View>
          <Header />
        </View>
        <ScrollView style={styles.container}>
          <Body />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },

});
