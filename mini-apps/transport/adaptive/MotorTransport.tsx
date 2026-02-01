import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export const MotorTransport = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Where to?</Text>
      
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Home</Text>
        <Text style={styles.cardSubtitle}>123 Main St</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Work</Text>
        <Text style={styles.cardSubtitle}>Tech Plaza</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, styles.primary]}>
        <Text style={[styles.cardTitle, styles.primaryText]}>New Destination</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 30, // Large gap for motor ease
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    padding: 40, // Huge padding
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#DDD',
  },
  primary: {
    backgroundColor: '#007AFF',
    borderColor: '#0056b3',
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  primaryText: {
    color: '#FFF',
  },
  cardSubtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
});
