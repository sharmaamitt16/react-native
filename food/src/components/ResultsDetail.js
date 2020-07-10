import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url}} style={styles.imageStyle} />
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5
  }
});

export default ResultsDetail;
