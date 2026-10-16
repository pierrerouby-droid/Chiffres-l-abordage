# Chiffres à l’abordage !

Un jeu de mathématiques pour les enfants de CE2, pensé pour l’iPhone et l’iPad. L’enfant navigue d’île en île avec le Capitaine Barbe-Grise et son perroquet Pi. Chaque île travaille une notion du programme de CE2 (BO n° 41 du 31 octobre 2024), et la difficulté s’adapte toute seule à son niveau.

Aucune publicité, aucun achat, aucun compte. La progression reste sur l’appareil.

## Jouer

Ce dépôt est le site complet : la page `index.html` à la racine se lance telle quelle.

- **GitHub Pages** : Settings → Pages → Source « Deploy from a branch », branche `main`, dossier `/ (root)`. L’adresse sera `https://pierrerouby-droid.github.io/Chiffres-l-abordage/`.
- **Sur iPhone** : ouvrir l’adresse dans Safari, Partager → « Sur l’écran d’accueil ». Une fois installé, le jeu fonctionne aussi hors connexion.
- **Guide pour les parents** : `aide.html` (aussi accessible depuis l’espace parents du jeu, en maintenant la roue crantée 2 secondes).

## Les îles

| Île | Notion |
|---|---|
| Île des Canons | Tables de multiplication |
| Stade des Vagues | Calcul mental |
| Mine aux Blocs | Nombres jusqu’à 10 000 |
| Jungle des Créatures | Droite graduée |
| Marché du Port | Monnaie et euros |
| Cuisine du Navire | Fractions |
| Île de l’Horloge | Heures et durées (prête, en attente de ses illustrations) |

## Organisation du dépôt

- `index.html`, `aide.html`, `sw.js`, `manifest.webmanifest`, icônes, `assets/` : le site publié.
- `src/app.html` : la source du jeu (HTML, CSS et JavaScript dans un seul fichier).
- `tools/build.sh` : construit `index.html` à partir de `src/app.html` (`sh tools/build.sh`).
- `tools/mk_sw.py` : régénère la liste des fichiers mis en cache hors connexion (`python3 tools/mk_sw.py <version>`).
- `design/` : liste des visuels à générer, liste des voix et bruitages, planches de direction artistique.

## Crédits

- Illustrations générées pour le projet.
- Voix du Capitaine Barbe-Grise : ElevenLabs (Voice Design).
- Musique de la carte : « Tavern », Ardie Son, sous licence Artlist.
