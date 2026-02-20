# Instructions Techniques - Max Aménagement

## Vision du Projet
Créer une interface "Luxury Minimalist" haut de gamme pour un artisan. 
L'objectif est la fluidité absolue et une clarté visuelle maximale.

## Stack Technique
- **Framework** : Next.js 15 (App Router).
- **Styles** : Tailwind CSS.
- **Animations** : Framer Motion (Lazy Loading requis).
- **Icônes** : Lucide React (poids des lignes fin : 1.5px).

## Structure des Pages (Routes)
1. `/` : Page d'accueil immersive (One-page style avec ancres).
2. `/nos-expertises` : Catalogue détaillé des 6 services.
3. `/realisations` : Galerie haute résolution (3 projets).
4. `/mentions-legales` : Page texte statique.

## Impératifs de Performance
- Zéro décalage de mise en page (CLS).
- Score Lighthouse : 100/100 partout.
- Images : Utilisation systématique de `next/image` avec `placeholder="blur"`.