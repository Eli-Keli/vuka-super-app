import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ImageSourcePropType, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAccessibility, AccessibilityProfile } from '@/context/AccessibilityContext';
import * as Speech from 'expo-speech';

interface AdaptiveAppCardProps {
  name: string;
  description: string;
  icon: any; // Ionicons name
  onPress: () => void;
}

export const AdaptiveAppCard = ({ name, description, icon, onPress }: AdaptiveAppCardProps) => {
  const { profile } = useAccessibility();

  const handlePress = () => {
    if (profile === 'visual') {
      Speech.stop();
      Speech.speak(`Opening ${name}. ${description}`);
    }
    onPress();
  };

  const styles = getStyles(profile);

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={`Open ${name}`}
      accessibilityHint={description}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={styles.iconSize} color={styles.iconColor} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (profile: AccessibilityProfile) => {
  const baseCard = {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  };

  switch (profile) {
    case 'visual':
      return {
        card: {
          ...baseCard,
          backgroundColor: '#000000',
          borderWidth: 2,
          borderColor: '#FFFF00',
          padding: 24,
        },
        iconContainer: {
          marginRight: 20,
        },
        content: {
          flex: 1,
        },
        title: {
          color: '#FFFF00',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 8,
        },
        description: {
          color: '#FFFFFF',
          fontSize: 16,
        },
        iconSize: 40,
        iconColor: '#FFFF00',
      };
    
    case 'motor':
      return {
        card: {
          ...baseCard,
          backgroundColor: '#F0F0F0',
          borderWidth: 2,
          borderColor: '#CCC',
          padding: 30, // Large touch target
          minHeight: 120,
        },
        iconContainer: {
          marginRight: 24,
          backgroundColor: '#E0E0E0',
          padding: 16,
          borderRadius: 50,
        },
        content: {
          flex: 1,
        },
        title: {
          color: '#000000',
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 8,
        },
        description: {
          color: '#444444',
          fontSize: 18,
        },
        iconSize: 48,
        iconColor: '#007AFF',
      };

    case 'cognitive':
      return {
        card: {
          ...baseCard,
          backgroundColor: '#E6F7FF', // Calming blue
          borderRadius: 20,
          padding: 20,
          borderWidth: 0,
        },
        iconContainer: {
          marginRight: 16,
          backgroundColor: '#FFF',
          padding: 12,
          borderRadius: 12,
        },
        content: {
          flex: 1,
        },
        title: {
          color: '#0050b3',
          fontSize: 22,
          fontWeight: '700',
          marginBottom: 4,
        },
        description: {
          color: '#555',
          fontSize: 16,
        },
        iconSize: 32,
        iconColor: '#008CBA',
      };

    case 'hearing':
      return {
        card: {
          ...baseCard,
          backgroundColor: '#FFFFFF',
          borderLeftWidth: 6,
          borderLeftColor: '#FF6B6B',
        },
        iconContainer: {
          marginRight: 16,
        },
        content: {
          flex: 1,
        },
        title: {
          color: '#333',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 4,
        },
        description: {
          color: '#666',
          fontSize: 14,
        },
        iconSize: 28,
        iconColor: '#FF6B6B',
      };

    default: // Fallback same as cognitive but generic colors
      return {
        card: {
          ...baseCard,
          backgroundColor: '#FFFFFF',
        },
        iconContainer: {
          marginRight: 16,
        },
        content: {
          flex: 1,
        },
        title: {
          color: '#000',
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 4,
        },
        description: {
          color: '#666',
          fontSize: 14,
        },
        iconSize: 24,
        iconColor: '#007AFF',
      };
  }
};
