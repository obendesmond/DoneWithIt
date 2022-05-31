import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import desmond from "../assets/desmond.jpeg";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: desmond,
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: desmond,
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    image: desmond,
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item, index }) => (
          <ListItem
            img={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message was selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "Title 3",
              description: "Description 3",
              image: desmond,
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
