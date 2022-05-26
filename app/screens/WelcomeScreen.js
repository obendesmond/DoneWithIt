import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

import logo from "../assets/logo-red.png";
import bgImg from "../assets/background.jpg";

export default function Welcome() {
  return (
    <ImageBackground source={bgImg} style={styles.container}>
      <View style={[styles.con, styles.logoCon]}>
        <Image style={styles.logo} source={logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.con}>
        <View style={styles.loginBtn} />
        <View style={styles.registerBtn} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoCon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 80,
  },
  con: {
    height: "auto",
    width: "100%",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
});
