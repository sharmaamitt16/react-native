import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={ onTermChange}
        // onEndEditing={onTermSubmit }
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }

});

export default SearchBar;
