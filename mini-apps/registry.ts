import React from 'react';
import { ImageSourcePropType } from 'react-native';

export interface MiniAppManifest {
  id: string;
  name: string;
  description: string;
  icon: string | ImageSourcePropType;
  component: React.ComponentType<any>;
}

// Registry to hold loaded mini-apps
const registry: Record<string, MiniAppManifest> = {};

export const registerMiniApp = (manifest: MiniAppManifest) => {
  registry[manifest.id] = manifest;
};

export const getMiniApp = (id: string): MiniAppManifest | undefined => {
  return registry[id];
};

export const getAllMiniApps = (): MiniAppManifest[] => {
  return Object.values(registry);
};

// Auto-register available apps (in a real scenario, this might be dynamic)
import { TransportManifest } from './transport/manifest';
registerMiniApp(TransportManifest);
