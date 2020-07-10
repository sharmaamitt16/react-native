import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue) }
      />
      <Text>My name is {name}</Text>
      {
        name.length >= 4 ? null : <Text>Name must be of minimum length of 4 characters.</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
 });

export default TextScreen;
