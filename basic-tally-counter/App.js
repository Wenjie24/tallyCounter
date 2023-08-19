import React, { useEffect, useState, getState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Switch} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(true);


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const increment = () => {
    setCount(count + 1);
  };
   const decrement = () => {
    setCount(count - 1);
  };


  const reset = () => {
    setCount(0);
  };

  useEffect(()=>{
    if (isEnabled && count<0) {
      setCount(0)
    }
  },[isEnabled, decrement])


  return (
    load ? (
    <SafeAreaView style={styles.container}>
      <Text>Wenjie Project</Text>
      <Text style={styles.header}>Basic Tally Counter</Text>
        <View style={{flexDirection: 'row'}}>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
       
        </View>
        <Text> {isEnabled ? '+ve number only' : '+ve & -ve number'}</Text>
        <Text style={styles.countText}>{count}</Text>
        <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.background_green]} onPress={increment}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.background_orange]} onPress={decrement}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.background_red]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
    </SafeAreaView> )
    :
    (
      <View style={styles.container}>
        <Text style={styles.header}>Simple Tally Counter</Text>
        <Text>By Wenjie</Text>
      </View>
    )
    

  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  countText: {
    fontSize: 204,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin:5
    
  },
  background_red: {
    backgroundColor: 'red'
  },
  background_orange: {
    backgroundColor: 'orange'
  },
  background_green: {
    backgroundColor: 'green'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
