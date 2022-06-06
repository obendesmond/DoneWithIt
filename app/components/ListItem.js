import { View, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";
import { Swipeable } from "react-native-gesture-handler";

export default function ListItem({
  style,
  iconComponent,
  title,
  subTitle,
  renderRightActions,
  onPress,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {iconComponent}
          <View style={styles.subTitle}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText>obendesmond2@gmail.com</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    width: "100%",
    padding: 15,
  },
  subTitle: {
    marginHorizontal: 15,
  },
  title: {
    fontWeight: "bold",
  },
});
