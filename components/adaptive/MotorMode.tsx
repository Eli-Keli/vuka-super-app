import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export const MotorMode = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Motor Mode</Text>
      <Text style={styles.subHeader}>Large Targets</Text>
      
      <TouchableOpacity 
        style={styles.largeButton} 
        onPress={() => router.push('/profile-selector')}
      >
        <Text style={styles.buttonText}>CHANGE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 40,
  },
  header: {
    color: '#333',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subHeader: {
    color: '#555',
    fontSize: 20,
  },
  largeButton: {
    backgroundColor: '#007AFF',
    width: '100%',
    height: 150, // Very large target
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});