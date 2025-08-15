import { StatusBar, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Login from "../components/Login";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar />
        <View>
          <Login />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
