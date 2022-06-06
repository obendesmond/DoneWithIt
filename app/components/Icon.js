import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name,
  backgroundColor = "black",
  size = 30,
  iconColor = "white",
}) {
  return (
    <View style={[styles.iconContainer, { backgroundColor }]}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
    borderRadius: "100%",
  },
});
