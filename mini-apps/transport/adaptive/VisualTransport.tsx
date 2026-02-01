import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

export const VisualTransport = () => {
  const instructions = "Vuka Transport. To book a ride to Home, tap the top half of the screen. To book a ride to Work, tap the bottom half.";

  useEffect(() => {
    Speech.speak(instructions);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, styles.topButton]}
        onPress={() => Speech.speak("Booking ride to Home. Searching for driver.")}
        accessibilityLabel="Book ride to Home"
      >
        <Text style={styles.text}>HOME</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.bottomButton]}
        onPress={() => Speech.speak("Booking ride to Work. Searching for driver.")}
        accessibilityLabel="Book ride to Work"
      >
        <Text style={styles.text}>WORK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFF00',
    margin: 10,
  },
  topButton: {
    backgroundColor: '#222',
  },
  bottomButton: {
    backgroundColor: '#333',
  },
  text: {
    color: '#FFFF00',
    fontSize: 48,
    fontWeight: 'bold',
  },
});
