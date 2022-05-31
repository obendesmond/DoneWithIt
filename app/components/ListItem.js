import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";

export default function ListItem({
  img,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={img} resizeMode="contain" style={styles.img} />
          <View style={styles.titleContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15,
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
