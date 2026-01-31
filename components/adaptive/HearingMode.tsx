import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export const HearingMode = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="ear-outline" size={80} color="#FF6B6B" />
        <Text style={styles.label}>Visual Alerts On</Text>
      </View>
      
      <Text style={styles.header}>Hearing Mode</Text>
      <Text style={styles.subHeader}>All audio is captioned.</Text>
      
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
    backgroundColor: '#FFF0F0',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
    borderWidth: 2,
    borderColor: '#FF6B6B',
    padding: 20,
    borderRadius: 50,
  },
  label: {
    marginTop: 10,
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    color: '#666',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});