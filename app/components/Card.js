import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subTitle, img }) {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.img} />
      <View style={styles.titleContainer}>
        <AppText>{title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: "100%",
    height: "auto",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },
  img: {
    height: 200,
    width: "100%",
  },
  price: {
    color: colors.secondary,
    fontWeight: "900",
    marginTop: 5,
  },
  titleContainer: {
    padding: 25,
  },
});
