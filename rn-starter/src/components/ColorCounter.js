import React, { useState } from "react";
import { Text, StyleSheet, View , Button, FlatList} from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => onDecrease()}
      />

      <FlatList
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{height:100, width: 100, backgroundColor: item}}/>
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
};

const styles = StyleSheet.create({ });

export default ColorCounter;
