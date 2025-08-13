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

export default function App() {
  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e?.target?.value);
  };
  const handleLogin = () => {};

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar />
        <ScrollView style={styles.container}>
          <View>
            <TextInput
              style={styles.input}
              value={userName}
              placeholder="Username"
              onChange={handleUserName}
            />
            <Button title="Login" onPress={handleLogin} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
    marginBottom: 12,
  },
});
