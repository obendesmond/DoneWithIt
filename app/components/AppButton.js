import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

export default function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: colors[color] }]}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
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
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
