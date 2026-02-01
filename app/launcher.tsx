import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAccessibility } from '@/context/AccessibilityContext';
import { getAllMiniApps } from '@/mini-apps/registry';
import { AdaptiveAppCard } from '@/components/adaptive/core/AdaptiveAppCard';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

export default function LauncherScreen() {
  const { profile } = useAccessibility();
  const router = useRouter();
  const apps = getAllMiniApps();

  useEffect(() => {
    if (profile === 'visual') {
      Speech.speak("Vuka Launcher. Select an app to open.");
    }
  }, [profile]);

  const getHeaderStyle = () => {
    switch (profile) {
      case 'visual':
        return styles.headerVisual;
      case 'motor':
        return styles.headerMotor;
      case 'cognitive':
        return styles.headerCognitive;
      default:
        return styles.headerDefault;
    }
  };

  const getTitleStyle = () => {
    switch (profile) {
      case 'visual':
        return styles.titleVisual;
      case 'motor':
        return styles.titleMotor;
      default:
        return styles.titleDefault;
    }
  };

  return (
    <SafeAreaView style={[styles.container, profile === 'visual' && styles.containerVisual]}>
      <View style={styles.headerContainer}>
        <View style={getHeaderStyle()}>
          <Text style={getTitleStyle()}>Vuka Apps</Text>
          <TouchableOpacity 
            onPress={() => router.push('/profile-selector')}
            accessibilityLabel="Settings"
          >
             <Ionicons 
                name="settings-outline" 
                size={profile === 'motor' ? 40 : 28} 
                color={profile === 'visual' ? '#FFFF00' : '#333'} 
             />
          </TouchableOpacity>
        </View>
        <Text style={[
          styles.subtitle, 
          profile === 'visual' && styles.subtitleVisual,
          profile === 'motor' && styles.subtitleMotor
        ]}>
          Your accessible services
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {apps.map((app) => (
          <AdaptiveAppCard
            key={app.id}
            name={app.name}
            description={app.description}
            icon={app.icon}
            onPress={() => router.push(`/mini-app/${app.id}`)}
          />
        ))}

        {apps.length === 0 && (
          <Text style={styles.emptyText}>No apps available yet.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  containerVisual: {
    backgroundColor: '#000000',
  },
  headerContainer: {
    padding: 20,
    paddingBottom: 10,
  },
  headerDefault: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerVisual: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
  },
  headerMotor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerCognitive: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  titleDefault: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  titleVisual: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFF00',
  },
  titleMotor: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  subtitleVisual: {
    color: '#FFF',
    fontSize: 18,
  },
  subtitleMotor: {
    fontSize: 20,
    color: '#444',
  },
  list: {
    padding: 20,
    paddingTop: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 16,
  },
});
