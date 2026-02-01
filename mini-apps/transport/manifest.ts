import { MiniAppManifest } from '../registry';
import VukaTransport from './VukaTransport';

export const TransportManifest: MiniAppManifest = {
  id: 'vuka-transport',
  name: 'Vuka Transport',
  description: 'Accessible ride-hailing for everyone.',
  icon: 'car-sport-outline', // Ionicons name
  component: VukaTransport,
};
