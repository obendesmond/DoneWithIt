import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

export default function AppButton({ title, color }) {
  return (
    <View style={[styles.btn, { backgroundColor: color || colors.primary }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 100,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
