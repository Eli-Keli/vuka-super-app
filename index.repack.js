import { ScriptManager, Federated } from '@callstack/repack/client';
import { Platform } from 'react-native';

// Resolve the remote URL dynamically
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  // In a real app, you might fetch this URL from a remote config
  if (scriptId === 'mini-app') {
    const url = Platform.select({
      ios: 'http://localhost:9000/mini-app.container.bundle',
      android: 'http://10.0.2.2:9000/mini-app.container.bundle', // 10.0.2.2 for Android Emulator
      default: 'http://localhost:9000/mini-app.container.bundle',
    });
    return {
      url,
      query: {
        platform: Platform.OS,
      },
    };
  }
});

// Import the main Expo entry
import 'expo-router/entry';
