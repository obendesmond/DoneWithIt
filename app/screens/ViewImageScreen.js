import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.white}
        />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.bgImg}
      />
    </View>
  );
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
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
