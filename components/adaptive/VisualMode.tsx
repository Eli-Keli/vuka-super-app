import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import * as Speech from 'expo-speech';

export const VisualMode = () => {
  const router = useRouter();
  
  const welcomeMessage = "Welcome to Visual Mode. This interface is optimized for voice. Tap the bottom button to change your profile.";

  useEffect(() => {
    speak(welcomeMessage);
    
    // Cleanup function to stop speech if component unmounts
    return () => {
      Speech.stop();
    };
  }, []);

  const speak = (text: string) => {
    Speech.stop(); // Stop any current speech before starting new
    Speech.speak(text, {
      language: 'en',
      pitch: 1.0,
      rate: 0.9, // Slightly slower for better clarity
    });
  };

  const handleChangeProfile = () => {
    speak("Navigating to profile selector.");
    router.push('/profile-selector');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>VISUAL MODE</Text>
      <Text style={styles.subHeader}>Voice optimized</Text>
      
      <TouchableOpacity 
        style={styles.actionButton} 
        onPress={() => speak(welcomeMessage)}
        accessibilityLabel="Repeat Instructions"
      >
        <Text style={styles.buttonText}>Repeat Instructions</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleChangeProfile}
        accessibilityLabel="Change Accessibility Profile"
      >
        <Text style={styles.buttonText}>Change Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  header: {
    color: '#FFFF00', // Yellow on Black
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 50,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: '#333333',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFFF00',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
