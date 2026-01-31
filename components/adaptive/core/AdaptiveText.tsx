import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import { useAccessibility, AccessibilityProfile } from '@/context/AccessibilityContext';

interface AdaptiveTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'body' | 'caption';
}

export const AdaptiveText = ({ style, variant = 'body', ...props }: AdaptiveTextProps) => {
  const { profile } = useAccessibility();
  
  const getProfileStyles = (currentProfile: AccessibilityProfile): TextStyle => {
    switch (currentProfile) {
      case 'visual':
        return {
          color: '#FFFF00', // High contrast yellow
          fontWeight: 'bold',
          fontSize: getFontSize(variant, 1.2), // 20% larger
        };
      case 'motor':
        return {
          color: '#333333',
          fontSize: getFontSize(variant, 1.1), // 10% larger
          lineHeight: getFontSize(variant, 1.1) * 1.5, // Generous spacing
        };
      case 'cognitive':
        return {
          color: '#004080', // Dark Blue for clarity/calm
          fontFamily: 'System', // Clean sans-serif
          fontSize: getFontSize(variant, 1.0),
        };
      case 'hearing':
        return {
          color: '#1A1A1A',
          fontSize: getFontSize(variant, 1.0),
        };
      default:
        return {
          color: '#000000',
          fontSize: getFontSize(variant, 1.0),
        };
    }
  };

  const getFontSize = (variant: string, scale: number) => {
    const baseSizes = {
      h1: 32,
      h2: 24,
      body: 16,
      caption: 12,
    };
    // @ts-ignore - straightforward mapping
    return baseSizes[variant] * scale;
  };

  return (
    <Text 
      style={[
        styles.base, 
        getProfileStyles(profile), 
        style
      ]} 
      {...props} 
    />
  );
};

const styles = StyleSheet.create({
  base: {
    // Base styles
  },
});
