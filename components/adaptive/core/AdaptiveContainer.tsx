import React, { ReactNode } from 'react';
import { View, ViewProps, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { useAccessibility, AccessibilityProfile } from '@/context/AccessibilityContext';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AdaptiveContainerProps extends ViewProps {
  children: ReactNode;
  scrollable?: boolean;
}

export const AdaptiveContainer = ({ children, style, scrollable = false, ...props }: AdaptiveContainerProps) => {
  const { profile } = useAccessibility();

  const getContainerStyle = (currentProfile: AccessibilityProfile): ViewStyle => {
    switch (currentProfile) {
      case 'visual':
        return {
          backgroundColor: '#000000',
          padding: 20,
        };
      case 'motor':
        return {
          backgroundColor: '#F5F5F5',
          padding: 30, // Extra padding
        };
      case 'cognitive':
        return {
          backgroundColor: '#E6F7FF', // Calming blue
          padding: 24,
        };
      case 'hearing':
        return {
          backgroundColor: '#FFFFFF',
          padding: 20,
        };
      default:
        return {
          backgroundColor: '#FFFFFF',
          padding: 20,
        };
    }
  };

  const ContentWrapper = scrollable ? ScrollView : View;
  
  // @ts-ignore - style type compatibility
  const wrapperProps = scrollable ? { contentContainerStyle: { flexGrow: 1 } } : { style: { flex: 1 } };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: (getContainerStyle(profile) as any).backgroundColor }}>
      <ContentWrapper 
        {...wrapperProps}
      >
        <View style={[styles.base, getContainerStyle(profile), style]} {...props}>
          {children}
        </View>
      </ContentWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});
