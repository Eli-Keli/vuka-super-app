import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useAccessibility, AccessibilityProfile } from '@/context/AccessibilityContext';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface ProfileOption {
  id: AccessibilityProfile;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const profiles: ProfileOption[] = [
  {
    id: 'visual',
    title: 'Visual (Voice-First)',
    description: 'High contrast, large text, and optimized for screen readers.',
    icon: 'eye-outline',
    color: '#000000',
  },
  {
    id: 'motor',
    title: 'Motor (Gesture-Light)',
    description: 'Large tap targets and simplified navigation for limited motor control.',
    icon: 'hand-left-outline',
    color: '#007AFF',
  },
  {
    id: 'cognitive',
    title: 'Cognitive (Simple Mode)',
    description: 'Simplified language, calming colors, and step-by-step guidance.',
    icon: 'bulb-outline',
    color: '#008CBA',
  },
  {
    id: 'hearing',
    title: 'Hearing (Visual-First)',
    description: 'Visual alerts and captions for all audio information.',
    icon: 'ear-outline',
    color: '#FF6B6B',
  },
];

export default function ProfileSelector() {
  const { setProfile } = useAccessibility();
  const router = useRouter();

  const handleSelect = async (id: AccessibilityProfile) => {
    await setProfile(id);
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome to Vuka</Text>
          <Text style={styles.instruction}>Choose the profile that best fits your needs. You can always change this later.</Text>
        </View>

        <View style={styles.grid}>
          {profiles.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.card, { borderLeftColor: item.color }]}
              onPress={() => handleSelect(item.id)}
              accessibilityLabel={`Select ${item.title} profile`}
              accessibilityRole="button"
            >
              <View style={styles.cardHeader}>
                <Ionicons name={item.icon} size={32} color={item.color} />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
    marginTop: 20,
  },
  welcome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 18,
    color: '#666',
    lineHeight: 24,
  },
  grid: {
    gap: 16,
  },
  card: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 12,
    color: '#1A1A1A',
  },
  cardDescription: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});
