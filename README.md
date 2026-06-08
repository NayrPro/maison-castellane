# Maison Castellane

Landing e-commerce fictive pour une épicerie fine provençale.  
Projet démo — portfolio développeur freelance.

**Stack :** Next.js 15 · React 19 · TypeScript · App Router

---

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Déploiement Vercel

```bash
npm i -g vercel
vercel
```

Ou en drag & drop sur [vercel.com/new](https://vercel.com/new).

---

## Structure

```
/app
  page.tsx          # Page principale (Server Component)
  layout.tsx        # Root layout, fonts Google, CartProvider
  globals.css       # Design tokens CSS, classes utilitaires

/components
  CartContext.tsx   # État panier global (useReducer + Context)
  Header.tsx        # Navigation fixe avec compteur panier live
  Hero.tsx          # Section hero 2 colonnes
  TrustBar.tsx      # Bande de réassurance
  ProductCard.tsx   # Carte produit avec hover state
  ProductGrid.tsx   # Grille 3×2 + logique toast
  Histoire.tsx      # Section storytelling
  Reviews.tsx       # Avis clients
  Newsletter.tsx    # Formulaire avec validation
  Footer.tsx        # Footer multi-colonnes

/data
  index.ts          # Données produits et avis (typées)

/types
  index.ts          # Interfaces Product, Review
```

---

## Ce que ce projet démontre

- Architecture Next.js App Router propre
- Composants React typés avec TypeScript
- Gestion d'état avec `useContext` + `useReducer` (panier)
- Séparation données / composants / types
- `'use client'` uniquement là où c'est nécessaire
- Fonts Google via `next/font` (optimisation automatique)
- Design système avec CSS variables
- Déployable sur Vercel en une commande
