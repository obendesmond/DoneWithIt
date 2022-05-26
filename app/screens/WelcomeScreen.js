import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

import logo from "../assets/logo-red.png";
import bgImg from "../assets/background.jpg";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";

export default function WelcomeScreen() {
  return (
    <ImageBackground source={bgImg} blurRadius={10} style={styles.container}>
      <View style={styles.logoCon}>
        <Image style={styles.logo} source={logo} />
        <AppText bold style={styles.title}>
          Sell What You Don't Need
        </AppText>
      </View>
      <View style={styles.btns}>
        <AppButton title="Login" />
        <AppButton title="Register" color={colors.secondary} />
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
    justifyContent: "space-between",
    alignItems: "center",
    top: 80,
    width: "100%",
    height: 140,
  },
  btns: {
    width: "100%",
    height: 150,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
