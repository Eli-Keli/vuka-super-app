import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const HearingTransport = () => {
  return (
    <View style={styles.container}>
      <View style={styles.alertBox}>
        <Ionicons name="notifications-outline" size={24} color="#FFF" />
        <Text style={styles.alertText}>No delays reported in your area.</Text>
      </View>

      <Text style={styles.header}>Request a Ride</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Destination</Text>
        <TouchableOpacity style={styles.input}>
          <Text>Enter location...</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Find Driver</Text>
      </TouchableOpacity>

      <View style={styles.infoSection}>
        <Ionicons name="information-circle-outline" size={24} color="#FF6B6B" />
        <Text style={styles.infoText}>
          Drivers will be notified that you prefer text communication.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  alertBox: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  alertText: {
    color: '#FFF',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F0',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFCDCD',
  },
  infoText: {
    marginLeft: 10,
    color: '#D00',
    flex: 1,
  },
});
