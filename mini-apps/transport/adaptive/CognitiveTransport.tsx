import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const CognitiveTransport = () => {
  const [step, setStep] = useState(1);

  if (step === 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>Where do you want to go?</Text>
        
        <TouchableOpacity style={styles.option} onPress={() => setStep(2)}>
          <Ionicons name="home-outline" size={50} color="#008CBA" />
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => setStep(2)}>
          <Ionicons name="briefcase-outline" size={50} color="#008CBA" />
          <Text style={styles.optionText}>Work</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle-outline" size={100} color="#4CAF50" />
      <Text style={styles.success}>Driver Found!</Text>
      <Text style={styles.details}>John is coming in a Red Toyota.</Text>
      
      <TouchableOpacity style={styles.backButton} onPress={() => setStep(1)}>
        <Text style={styles.backButtonText}>Start Over</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
  },
  question: {
    fontSize: 28,
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 24,
    marginLeft: 20,
    color: '#008CBA',
    fontWeight: 'bold',
  },
  success: {
    fontSize: 32,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  details: {
    fontSize: 20,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: '#008CBA',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
