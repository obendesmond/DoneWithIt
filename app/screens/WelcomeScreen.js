import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

import logo from "../assets/logo-red.png";
import bgImg from "../assets/background.jpg";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

export default function WelcomeScreen() {
  return (
    <ImageBackground source={bgImg} blurRadius={10} style={styles.container}>
      <View style={styles.logoCon}>
        <Image style={styles.logo} source={logo} />
        <AppText style={styles.title}>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.btns}>
        <AppButton title="Login" onPress={() => alert("tapped")} />
        <AppButton title="Register" color="secondary" />
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  logoCon: {
    top: 80,
  },
  btns: {
    width: "100%",
    height: 150,
    paddingHorizontal: 20,
  },
});
