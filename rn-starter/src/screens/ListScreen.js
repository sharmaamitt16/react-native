import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen= () => {
  const friends = [
    {'name': 'Friend 1', 'age': 20},
    {'name': 'Friend 2', 'age': 30},
    {'name': 'Friend 3', 'age': 40},
    {'name': 'Friend 4', 'age': 50},
    {'name': 'Friend 5', 'age': 20},
    {'name': 'Friend 6', 'age': 30},
    {'name': 'Friend 7', 'age': 40},
    {'name': 'Friend 8', 'age': 50},
    {'name': 'Friend 9', 'age': 20},

  ];

  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical:20,
    marginHorizontal:15
  }
});

export default ListScreen;
