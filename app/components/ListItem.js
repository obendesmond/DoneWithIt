import { View, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({ img, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={img} resizeMode="contain" style={styles.img} />
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  titleContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "400",
  },
  subTitle: {
    color: colors.medium,
  },
});
