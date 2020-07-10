import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Welcome User!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go To List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go To Image Demo"
      />
       <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go To Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go To Color Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go To Square Demo"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go To Text Demo"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go To Box Demo"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  touchableStyle: {
    backgroundColor: '#000'
  }
});

export default HomeScreen;
