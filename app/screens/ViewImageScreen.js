import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class ViewImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <View style={{ width: 50, height: 50, backgroundColor: "#fc5c65" }} />
          <View style={{ width: 50, height: 50, backgroundColor: "#4ECDC4" }} />
        </View>
        <Image
          source={require("../assets/chair.jpg")}
          resizeMode="contain"
          style={{
            height: 600,
            width: "auto",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    marginTop: 50,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
