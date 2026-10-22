import type { CapacitorConfig } from '@capacitor/cli';

// Application iPhone de « Chiffres à l'abordage ! » : les fichiers du jeu sont embarqués (www/), le jeu marche sans réseau.
const config: CapacitorConfig = {
  appId: 'io.github.pierreroubydroid.chiffres',
  appName: 'À l’abordage',
  webDir: 'www',
  backgroundColor: '#0B2230',
  ios: {
    // Le jeu gère lui-même les zones de sécurité (encoche, barre du bas) avec env(safe-area-inset-*)
    contentInset: 'never',
    backgroundColor: '#0B2230',
  },
};

export default config;
