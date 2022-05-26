import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

import img from "../assets/jacket.jpg";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image source={img} style={styles.img} />
      <View style={styles.titleContainer}>
        <AppText>{title}</AppText>
        <Text style={styles.price}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: "100%",
    height: "auto",
    borderRadius: 20,
    overflow: "hidden",
  },
  img: {
    height: 200,
    width: "100%",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginTop: 5,
  },
  titleContainer: {
    padding: 25,
  },
});
