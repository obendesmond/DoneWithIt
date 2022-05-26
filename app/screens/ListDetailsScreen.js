import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText";

import colors from "../config/colors";
import jacket from "../assets/jacket.jpg";
import desmond from "../assets/desmond.jpeg";

export default function ListDetailsScreen() {
  return (
    <View>
      <Image source={jacket} style={styles.headerImg} />
      <View style={styles.detailsContainer}>
        <AppText bold>Red Jacket For Sale</AppText>
        <Text style={styles.price}>$100</Text>

        <View style={styles.profileContainer}>
          <Image
            source={desmond}
            resizeMode="contain"
            style={styles.profileImg}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Desmond Oben</Text>
            <Text style={styles.listings}>5 Listings</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
  },
  nameContainer: {
    paddingHorizontal: 10,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 50,
  },
  headerImg: {
    width: "100%",
    height: 300,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  listings: {
    color: "grey",
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginTop: 10,
  },
});
