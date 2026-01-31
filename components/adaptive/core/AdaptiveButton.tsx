import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, ViewStyle } from 'react-native';
import { useAccessibility, AccessibilityProfile } from '@/context/AccessibilityContext';
import { AdaptiveText } from './AdaptiveText';

interface AdaptiveButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export const AdaptiveButton = ({ label, onPress, style, variant = 'primary', ...props }: AdaptiveButtonProps) => {
  const { profile } = useAccessibility();

  const getContainerStyle = (currentProfile: AccessibilityProfile): ViewStyle => {
    switch (currentProfile) {
      case 'visual':
        return {
          backgroundColor: '#000000',
          borderWidth: 2,
          borderColor: '#FFFF00',
          paddingVertical: 20,
          paddingHorizontal: 30,
          borderRadius: 8,
          marginBottom: 20,
        };
      case 'motor':
        return {
          backgroundColor: variant === 'primary' ? '#007AFF' : '#E0E0E0',
          minHeight: 80, // Large target
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
          padding: 20,
          marginVertical: 15, // Extra spacing
        };
      case 'cognitive':
        return {
          backgroundColor: variant === 'primary' ? '#008CBA' : '#F0F8FF',
          paddingVertical: 16,
          paddingHorizontal: 32,
          borderRadius: 50, // Pill shape is friendly
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        };
      case 'hearing':
        return {
          backgroundColor: variant === 'primary' ? '#FF6B6B' : '#FFF0F0',
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
        };
      default:
        return {
          backgroundColor: '#007AFF',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        };
    }
  };

  return (
    <TouchableOpacity
      style={[getContainerStyle(profile), style]}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={label}
      {...props}
    >
      <AdaptiveText 
        variant={profile === 'motor' ? 'h2' : 'body'}
        style={{ 
          color: profile === 'visual' ? '#FFFF00' : 
                 (profile === 'motor' || profile === 'cognitive') && variant === 'primary' ? '#FFFFFF' : 
                 '#000000',
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        {label}
      </AdaptiveText>
    </TouchableOpacity>
  );
};
