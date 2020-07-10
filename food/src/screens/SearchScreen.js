import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, searchApi, errorMsg] = useResults('');

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null }
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"></ResultsList>
        <ResultsList results={filterResultsByPrice('$$')} title="Price"></ResultsList>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"></ResultsList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({ });

export default SearchScreen;
