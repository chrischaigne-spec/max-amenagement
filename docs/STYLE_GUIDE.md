# Guide de Style Détaillé - "Luxe Architectural"

## Direction Artistique
Le site doit respirer le haut de gamme : beaucoup d'espace (whitespace), une typographie imposante mais fine, et un contraste élevé.

## Palette de Couleurs
- **Primary (BG)** : #000000 (Noir pur).
- **Surface** : #0A0A0A (Noir très légèrement gris pour les cartes).
- **Text Primary** : #FFFFFF (Blanc).
- **Text Secondary** : #A1A1AA (Gris neutre pour le corps de texte).
- **Accents/Borders** : #27272A (Gris sombre pour les lignes de séparation).

## Typographie
- **Titres (H1, H2)** : "Plus Jakarta Sans", Bold (700). 
  - Style : Letter-spacing -0.04em, line-height 1.1.
- **Corps de texte** : "Inter", Regular (400).
  - Style : Line-height 1.7, taille 16px ou 18px.

## UI & Layout
- **Grille** : Structure en colonnes asymétriques.
- **Angles** : `rounded-3xl` (24px) sur tous les conteneurs d'images.
- **Boutons** : 
  - Forme : Pilule (rounded-full).
  - État repos : Fond blanc / Texte noir.
  - État hover : Léger scale (1.05) avec transition de 0.3s.

## Moteur d'Animation (Framer Motion)
- **Easing** : `[0.22, 1, 0.36, 1]` (Cubic Bezier pour un mouvement fluide "premium").
- **Effet Signature** : 
  - Staggered Text : Décalage de 0.1s par ligne au chargement.
  - Scroll Reveal : Les sections s'élèvent de 30px avec un fondu d'opacité.