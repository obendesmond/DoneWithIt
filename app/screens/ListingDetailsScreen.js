import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText";

import colors from "../config/colors";
import jacket from "../assets/jacket.jpg";
import desmond from "../assets/desmond.jpeg";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image source={jacket} style={styles.headerImg} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem title="Desmond Oben" subTitle="5 Listings" img={desmond} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    paddingVertical: 40,
  },
  headerImg: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
