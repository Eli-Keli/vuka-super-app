import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export const CognitiveMode = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Simple Mode</Text>
        <Text style={styles.instruction}>Tap the button below to change your settings.</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/profile-selector')}
      >
        <Text style={styles.buttonText}>Change Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7FF', // Calming blue
    padding: 30,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    marginBottom: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 28,
    color: '#004080',
    marginBottom: 20,
    fontWeight: '600',
  },
  instruction: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    lineHeight: 28,
  },
  button: {
    backgroundColor: '#008CBA',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
});