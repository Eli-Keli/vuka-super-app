import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAccessibility } from '@/context/AccessibilityContext';
import { VisualTransport } from './adaptive/VisualTransport';
import { MotorTransport } from './adaptive/MotorTransport';
import { CognitiveTransport } from './adaptive/CognitiveTransport';
import { HearingTransport } from './adaptive/HearingTransport';

export default function VukaTransport() {
  const { profile } = useAccessibility();

  switch (profile) {
    case 'visual':
      return <VisualTransport />;
    case 'motor':
      return <MotorTransport />;
    case 'cognitive':
      return <CognitiveTransport />;
    case 'hearing':
      return <HearingTransport />;
    default:
      return <VisualTransport />;
  }
}
