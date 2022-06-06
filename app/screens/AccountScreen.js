import { View, StyleSheet, Image, FlatList } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import desmond from "../assets/desmond.jpeg";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Mesages s",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.container}>
      <ListItem
        iconComponent={
          <Image source={desmond} alt="desmond" style={styles.img} />
        }
        title="Desmond Oben"
        subTitle="obendesmond2@gmail.com"
        style={styles.profile}
        onPress={() => console.log("Profile was selected")}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              iconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              title={item.title}
              onPress={() => console.log("My Listings was selected")}
            />
          )}
        />
      </View>
      <ListItem
        style={styles.logout}
        iconComponent={<Icon name="logout" />}
        title="Log Out"
        onPress={() => console.log("Log Out was selected")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  img: {
    borderRadius: 200,
    width: 70,
    height: 70,
  },
  profile: { marginTop: 50 },
  listContainer: { marginTop: 40 },
  logout: { marginTop: 20 },
});
