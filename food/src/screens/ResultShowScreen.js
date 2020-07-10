import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ResultShowScreen = (navigation) => {
  const id = navigation.getParam(id);

  return (
    <View >
      <Text > ResultShowScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultShowScreen;
