import { useState } from "react";
import { TextInput, Text, Switch } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
  {
    label: "Device",
    value: 4,
  },
];

export default function App() {
  const [category, setCategory] = useState("");
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelect={item => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
    </Screen>
  );
}
