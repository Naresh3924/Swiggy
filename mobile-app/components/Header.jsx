import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, View } from "react-native";
import Login from "./Login";

export default function Header() {
  const [isToggleLogin, setisToggleLogin] = useState(false);
  return (
    <View style={styles.headerBox}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png",
          }}
          style={{ width: 100, height: 25 }}
        />
        <Button
          color="rgb(255, 82, 0)"
          title="login"
          onPress={() => setisToggleLogin(true)}
        />
        <Image
          source={{
            uri: "https://tse3.mm.bing.net/th/id/OIP.0LvP1YUJ2stgbrp2srwnFQHaHa?pid=Api&P=0&h=180",
          }}
          style={{ width: 25, height: 25, borderRadius: 12 }}
        />
      </View>
      <Modal
        visible={isToggleLogin}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setisToggleLogin(false)}
      >
        <View style={styles.modalContent}>
          <Login />
          <Button title="close" onPress={() => setisToggleLogin(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: "rgb(255, 82, 0)",
    padding: 12,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  modalContent: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
});
