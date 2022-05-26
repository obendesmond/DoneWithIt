import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

export default class ViewImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={styles.closeIcon} />
          <View style={styles.deleteIcon} />
        </View>
        <Image
          source={require("../assets/chair.jpg")}
          resizeMode="contain"
          style={styles.bgImg}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgImg: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    marginTop: 50,
    backgroundColor: colors.black,
    paddingTop: 50,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
