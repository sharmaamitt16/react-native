import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({imageSrc, title, score}) => {
  return (
    <View>
      <Image source={imageSrc} />
      <Text>Show Image of {title} having score {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ImageDetail;
