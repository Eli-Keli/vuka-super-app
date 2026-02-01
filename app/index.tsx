import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const { isLoading, hasSelectedProfile } = useAccessibility();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (hasSelectedProfile) {
        router.replace('/launcher');
      } else {
        router.replace('/profile-selector');
      }
    }
  }, [isLoading, hasSelectedProfile]);

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
