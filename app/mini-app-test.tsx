import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MiniAppLoader from '@/components/MiniAppLoader';

export default function MiniAppTestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Module Federation Test</Text>
      <View style={styles.loaderContainer}>
        <MiniAppLoader />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loaderContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    minHeight: 200,
    justifyContent: 'center',
  },
});
