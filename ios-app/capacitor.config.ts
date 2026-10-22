import type { CapacitorConfig } from '@capacitor/cli';

// Application iPhone de « Moussaillon : l’école pirate » : les fichiers du jeu sont embarqués (www/), le jeu marche sans réseau.
const config: CapacitorConfig = {
  appId: 'io.github.pierreroubydroid.chiffres',
  appName: 'Moussaillon',
  webDir: 'www',
  backgroundColor: '#0B2230',
  ios: {
    // Le jeu gère lui-même les zones de sécurité (encoche, barre du bas) avec env(safe-area-inset-*)
    contentInset: 'never',
    backgroundColor: '#0B2230',
  },
};

export default config;
