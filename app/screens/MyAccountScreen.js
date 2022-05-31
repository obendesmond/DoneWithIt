import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import Screen from "../components/Screen";

export default function MyAccountScreen() {
  return (
    <Screen style={styles.container}>
      <Text>MyAccountScreen</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
});
