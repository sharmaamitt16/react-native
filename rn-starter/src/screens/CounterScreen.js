import React, { useReducer } from "react";
import { Text, StyleSheet, View , Button} from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0})
  const {count} = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => { dispatch({ type: 'increment', payload: 10 }) }}
      />
      <Button
        title="Decrease"
        onPress={() => { dispatch({ type: 'decrement', payload: 10 }) }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ });

export default CounterScreen;
