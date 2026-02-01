import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { getMiniApp } from '@/mini-apps/registry';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function MiniAppScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const router = useRouter();

  const miniApp = getMiniApp(id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: miniApp?.name || 'Mini App',
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, miniApp]);

  if (!miniApp) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Mini-app not found: {id}</Text>
      </View>
    );
  }

  const MiniAppComponent = miniApp.component;

  return (
    <View style={styles.container}>
      <MiniAppComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});
