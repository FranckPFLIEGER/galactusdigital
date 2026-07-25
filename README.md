# GALACTUS Digital

Site vitrine pour **GALACTUS Digital**, organisme de formation IT certifié Qualiopi. Le site présente l'offre de formations officielles éditeurs (Cisco Networking Academy, Microsoft, IPv6 Forum) en modalités présentiel, FOAD et e-learning tutoré, inter et intra-entreprise, avec une couverture de 6 territoires ultramarins et de la France hexagonale.

## Technologies

| Technologie | Rôle |
|---|---|
| [TanStack Start](https://tanstack.com/start) | Framework React SSR / routing |
| [TanStack Router](https://tanstack.com/router) | Routing type-safe |
| [Tailwind CSS v4](https://tailwindcss.com) | Utilitaires CSS |
| [Lucide React](https://lucide.dev) | Icônes |
| [Cloudflare Pages](https://pages.cloudflare.com) | Hébergement & déploiement |

**Polices** : Cormorant Garamond (titres) + Outfit (corps) via Google Fonts.

## Lancer localement

```bash
npm install
npm run dev        # démarrage sur http://localhost:3000
```

## Déploiement

Le déploiement est automatique sur **Cloudflare Pages** à chaque `push` sur la branche principale. Cloudflare exécute `npm run build` et ne met le site à jour que si le build réussit.
