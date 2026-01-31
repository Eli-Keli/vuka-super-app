import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useAccessibility } from '@/context/AccessibilityContext';
import { VisualMode } from '@/components/adaptive/VisualMode';
import { MotorMode } from '@/components/adaptive/MotorMode';
import { CognitiveMode } from '@/components/adaptive/CognitiveMode';
import { HearingMode } from '@/components/adaptive/HearingMode';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const { profile, isLoading, hasSelectedProfile } = useAccessibility();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !hasSelectedProfile) {
      router.replace('/profile-selector');
    }
  }, [isLoading, hasSelectedProfile]);

  if (isLoading || !hasSelectedProfile) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderMode = () => {
    switch (profile) {
      case 'visual':
        return <VisualMode />;
      case 'motor':
        return <MotorMode />;
      case 'cognitive':
        return <CognitiveMode />;
      case 'hearing':
        return <HearingMode />;
      default:
        return <VisualMode />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderMode()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});