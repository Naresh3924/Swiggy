import { Alert, Button, Modal, StatusBar, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Login from "../components/Login";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Body from "../pages/Body";

export default function App() {
  const [isLoginToggle, setIsLoginToggle] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar />
        <View>
          <Button title="Login" onPress={() => setIsLoginToggle(true)} />
        </View>
        <View>
          <Body />
        </View>

        {/* Modal componnet to popup Login componennt / */}
        <Modal visible={isLoginToggle} animationType="slide">
          <View>
            <Login />
          </View>
          <View>
            <Button
              title="Close"
              color="#ff7f50"
              onPress={() => setIsLoginToggle(false)}
            />
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
