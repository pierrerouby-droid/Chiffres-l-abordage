# Chiffres à l’abordage !

Un jeu de mathématiques et de français pour les enfants de CE2 et de CM1, pensé pour l’iPhone et l’iPad. L’enfant navigue d’île en île avec le Capitaine Barbe-Grise et son perroquet Pi. Chaque île travaille une notion du programme de sa classe (CE2 : BO n° 41 du 31 octobre 2024 ; CM1 : programmes du cycle 3 applicables à la rentrée 2025), et la difficulté s’adapte toute seule à son niveau.

Aucune publicité, aucun achat, aucun compte. La progression reste sur l’appareil.

## Jouer

Ce dépôt est le site complet : la page `index.html` à la racine se lance telle quelle.

- **GitHub Pages** : Settings → Pages → Source « Deploy from a branch », branche `main`, dossier `/ (root)`. L’adresse sera `https://pierrerouby-droid.github.io/Chiffres-l-abordage/`.
- **Sur iPhone** : ouvrir l’adresse dans Safari, Partager → « Sur l’écran d’accueil ». Une fois installé, le jeu fonctionne aussi hors connexion.
- **Version administrateur** : ajouter `?admin` à l’adresse (`…/Chiffres-l-abordage/?admin`). Toutes les îles et tous les niveaux sont ouverts, avec une sauvegarde à part : la progression de l’enfant n’est pas touchée. Un bouton y mène aussi depuis l’espace parents.
- **Guide pour les parents** : `aide.html` (aussi accessible depuis l’espace parents du jeu, en maintenant la roue crantée 2 secondes).

## Les îles

Au premier lancement, l’enfant choisit sa classe (CE2 ou CM1). Chaque classe garde sa propre progression ; les parents peuvent changer de classe dans l’espace parents.

### Mer des Chiffres (mathématiques)

| Île | CE2 | CM1 |
|---|---|---|
| Île des Canons | Tables de multiplication | Tables, multiples, divisions avec reste, 2 chiffres × 1 chiffre |
| Stade des Vagues | Calcul mental | × et ÷ par 10, 100, 1 000, compléments à 1 000, décimaux |
| Mine aux Blocs | Nombres jusqu’à 10 000 | Nombres jusqu’à 999 999, dixièmes et centièmes |
| Jungle des Créatures | Droite graduée | Graduations de 100 à 10 000, dixièmes et centièmes |
| Marché du Port | Monnaie et euros | Prix à virgule, rendu sur 50 €, quantités |
| Cuisine du Navire | Fractions | Fraction d’une quantité, fractions décimales, sommes |
| Île de l’Horloge | Heures et durées | Lecture à la minute, conversions, durées |

### Mer des Lettres (français)

| Île | CE2 | CM1 |
|---|---|---|
| Grotte aux Histoires | Textes courts : informations explicites, inférences, reprises, vocabulaire | Textes plus longs, documentaires, contes, légendes |
| Forge des Verbes | Présent, futur, imparfait, passé composé des verbes du programme | 2e groupe, verbes en -ger, -cer, -eler, -eter, -yer, accord avec être |
| Récif des Phrases | Types de phrases, verbe, noms, déterminants, adjectifs, sujet, négation | Nature et fonction, compléments du verbe et de phrase, nom noyau |
| Pont des Accords | Pluriels, accords dans le groupe nominal, sujet-verbe, a/à, et/est, son/sont | Pluriels irréguliers, féminins, sujet éloigné, participe passé avec être, on/ont, ces/ses, ou/où |
| Baie des Mots | Ordre alphabétique, familles, préfixes et suffixes, synonymes, sens figuré | Radical, niveaux de langue, polysémie, mots génériques, homonymes |

Un bouton en haut de la carte passe de la Mer des Chiffres à la Mer des Lettres. Dès qu’une île de français est ouverte, la marée du jour propose deux escales de maths et une de français.

## Organisation du dépôt

- `index.html`, `aide.html`, `sw.js`, `manifest.webmanifest`, icônes, `assets/` : le site publié.
- `src/app.html` : la source du jeu (HTML, CSS et JavaScript dans un seul fichier).
- `tools/build.sh` : construit `index.html` à partir de `src/app.html` (`sh tools/build.sh`).
- `tools/mk_sw.py` : régénère la liste des fichiers mis en cache hors connexion (`python3 tools/mk_sw.py <version>`).
- `assets/fonts/` : les trois polices (Fraunces, IM Fell English SC, Lexend), hébergées avec le jeu pour marcher hors connexion sans appel à un service tiers ; licences SIL OFL jointes.
- `design/` : liste des visuels à générer, liste des voix et bruitages, planches de direction artistique.

## Crédits

- Illustrations générées pour le projet.
- Voix du Capitaine Barbe-Grise : ElevenLabs (Voice Design).
- Musique de la carte : « Tavern », Ardie Son, sous licence Artlist.
