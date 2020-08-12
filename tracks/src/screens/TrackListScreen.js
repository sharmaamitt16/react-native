import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {

  return <>
    <View>
      <Text style={{ fontSize:48 }}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      ></Button>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      ></Button>
    </View>
  </>
};

const styles = StyleSheet.create({ });

export default TrackListScreen;
