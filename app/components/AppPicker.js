import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
  selectedItem,
  onSelect,
  icon,
  items,
  placeholder,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsOpen(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons size={24} style={styles.icon} name={icon} />
          )}
          <AppText style={styles.appText}>
            {selectedItem || placeholder}
          </AppText>
          <MaterialCommunityIcons
            size={24}
            color={defaultStyles.colors.medium}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isOpen} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setIsOpen(false)} />
          <FlatList
            keyExtractor={item => item.value.toString()}
            data={items}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setIsOpen(false);
                  onSelect(item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    color: defaultStyles.colors.medium,
  },
  appText: {
    flexGrow: 1,
  },
});
