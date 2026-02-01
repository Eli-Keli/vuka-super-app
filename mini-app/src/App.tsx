import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MiniApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Mini App!</Text>
      <Text style={styles.subtext}>Loaded via Module Federation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#006064',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006064',
  },
  subtext: {
    fontSize: 14,
    color: '#00838F',
    marginTop: 5,
  },
});

export default MiniApp;
