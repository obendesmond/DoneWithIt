import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

export default function AppText({ children, bold }) {
  return (
    <Text style={[styles.text, { fontWeight: bold ? "bold" : "normal" }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
