import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppText from "./app/components/AppText";
import { Ionicons } from "@expo/vector-icons";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>I love React Native</Text>
      <AppText>I love React Nativel</AppText>
      <Ionicons name="ios-close" size={40} color="dodgerblue" />
    </View>
  );
}

const styles = StyleSheet.create({});
