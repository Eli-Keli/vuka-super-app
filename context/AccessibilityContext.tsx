import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AccessibilityProfile = 'visual' | 'motor' | 'cognitive' | 'hearing';

interface AccessibilityContextType {
  profile: AccessibilityProfile;
  setProfile: (profile: AccessibilityProfile) => Promise<void>;
  isLoading: boolean;
  hasSelectedProfile: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

const PROFILE_STORAGE_KEY = 'vuka_accessibility_profile';
const HAS_SELECTED_KEY = 'vuka_has_selected_profile';

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfileState] = useState<AccessibilityProfile>('visual');
  const [hasSelectedProfile, setHasSelectedProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const [storedProfile, storedHasSelected] = await Promise.all([
        AsyncStorage.getItem(PROFILE_STORAGE_KEY),
        AsyncStorage.getItem(HAS_SELECTED_KEY),
      ]);

      if (storedProfile && ['visual', 'motor', 'cognitive', 'hearing'].includes(storedProfile)) {
        setProfileState(storedProfile as AccessibilityProfile);
      }
      
      if (storedHasSelected === 'true') {
        setHasSelectedProfile(true);
      }
    } catch (error) {
      console.error('Failed to load accessibility profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setProfile = async (newProfile: AccessibilityProfile) => {
    try {
      setProfileState(newProfile);
      setHasSelectedProfile(true);
      await Promise.all([
        AsyncStorage.setItem(PROFILE_STORAGE_KEY, newProfile),
        AsyncStorage.setItem(HAS_SELECTED_KEY, 'true'),
      ]);
    } catch (error) {
      console.error('Failed to save accessibility profile:', error);
    }
  };

  return (
    <AccessibilityContext.Provider value={{ profile, setProfile, isLoading, hasSelectedProfile }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};