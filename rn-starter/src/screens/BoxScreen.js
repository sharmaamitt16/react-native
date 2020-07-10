import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { getCurrentFrame } from "expo/build/AR";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    borderColor: 'red',
    backgroundColor: 'green'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    borderColor: 'red',
    backgroundColor: 'red',
    alignSelf: 'flex-end'
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    borderColor: 'red',
    backgroundColor: 'blue'
  }
 });

export default BoxScreen;
