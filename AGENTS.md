# AGENTS.md

Site vitrine de **GALACTUS Digital** (PFLIEGER SASU), organisme de formation IT
certifié Qualiopi. Interface entièrement en français.

Construit avec **TanStack Start** (React 19, SSR), déployé sur **Cloudflare Workers**.

---

## Lancer le projet

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

Node 22 (`.nvmrc`). Il n'y a pas de script de test ni de lint.

---

## Architecture

```
src/
  data/                   # SOURCE UNIQUE DE VÉRITÉ — à lire avant tout le reste
    catalogue.ts          # 49 formations : tarifs, modalités, certifications, vouchers
    parcours.ts           # Parcours métier par blocs, renvoient aux slugs du catalogue
    sessions.ts           # Sessions programmées au calendrier
    resultats.ts          # Indicateurs Qualiopi publiés (formés, réussite, satisfaction)
    infoCertifiante.ts    # Passerelles, équivalences, blocs de compétences par formation
  routes/                 # Routing par fichiers (TanStack Router)
    __root.tsx            # Shell HTML, meta SEO, JSON-LD
    index.tsx             # Accueil
    formations/           # 49 fiches + index.tsx (catalogue)
    certifications-rs/    # Dossiers France Compétences déposés
    ...                   # Pages légales, modalités, qualité
  components/             # Header, Footer, et sections de l'accueil
  hooks/useIntersection.ts  # Animations au scroll, one-shot
  styles.css              # Tokens CSS, polices, classes partagées
  routeTree.gen.ts        # GÉNÉRÉ — ne jamais éditer à la main
```

`routeTree.gen.ts` est régénéré par `npm run build` ou `npm run dev` : après avoir
ajouté ou supprimé un fichier de route, lancer un build plutôt que de le modifier.

---

## Règles du projet

### Les données ne se dupliquent pas

Tarifs, durées, intitulés de certification et modalités vivent dans
`src/data/catalogue.ts`. Une valeur affichée ailleurs doit venir d'un helper
(`getTarifAffiche`, `getTarifsModalites`, `getPrixElearning`,
`getDetailPrixElearning`, `getVoucher`), jamais d'une constante recopiée.

**`prix.elearning` est le prix total à payer, voucher compris.** La mention légale
affichée sous les tarifs l'annonce ainsi (art. L.112-1 du code de la consommation).

**Ajouter une formation :** une entrée dans `FORMATIONS[]` et un fichier dans
`src/routes/formations/`. Les deux listes doivent rester alignées — une fiche sans
entrée catalogue est invisible dans la navigation, une entrée sans fiche produit un
lien mort.

**Supprimer une formation :** retirer l'entrée du catalogue, supprimer la fiche,
nettoyer `public/sitemap.xml`, puis vérifier les mentions dans `parcours.ts`,
`infoCertifiante.ts` et les « cours suivant recommandé » des autres fiches.

### Contraintes de conformité

Ce site est une pièce d'audit Qualiopi, pas seulement une vitrine. Avant de modifier
un contenu :

- **Aucun chiffre non justifiable sur pièces.** Les indicateurs publiés viennent de
  `resultats.ts` et sont consignés au registre de suivi. Ne jamais extrapoler, arrondir
  à l'avantage de l'organisme, ni reporter d'un périmètre à un autre.
- **Tarif visible partout où une formation est présentée** — méga-menu, grille,
  fiche (indicateur 1 du Référentiel National Qualité).
- **Aucune allégation de certificateur.** Les deux dossiers France Compétences sont
  en cours d'instruction : rien n'est enregistré, et les pages le disent.
- **L'organisme ne vend pas à des particuliers qui se financeraient eux-mêmes.**
  Toute entrée en formation est adossée à un employeur ou à un financeur tiers
  (article 2 des CGV). Ne jamais réintroduire d'autofinancement particulier.
- **Les intitulés de certification sont exacts.** Ne jamais attribuer une certification
  à un éditeur qui ne la délivre pas.
- **Pas de ressource tierce.** Les polices sont auto-hébergées via `@fontsource` et
  le site ne dépose aucun cookie : ne pas réintroduire Google Fonts, de mesure
  d'audience ou de CDN externe, sous peine de rendre la page RGPD inexacte.

Les mentions légales, CGV et la page RGPD sont des textes juridiques : les faire
relire plutôt que les reformuler spontanément.

---

## Conventions

- **Styles inline** dans les composants, avec les tokens CSS de `:root`
  (`--g-black`, `--g-red`, `--g-white`, `--g-offwhite`, `--font-title`, `--font-body`).
  Tailwind est présent dans la chaîne de build mais n'est pas la méthode employée.
- **Polices** : Barlow Condensed (titres) et Nunito Sans (corps), importées en haut
  de `styles.css`.
- **Icônes** : `lucide-react` uniquement.
- **Nommage** : composants en PascalCase, fichiers de route en kebab-case.
- **Animations** : classes `reveal` / `reveal-left` / `reveal-scale` avec le hook
  `useIntersection`, qui se désabonne au premier déclenchement.
- **TypeScript strict.** `npx tsc --noEmit` remonte beaucoup de TS6133 (imports
  inutilisés) préexistants : ne pas les confondre avec une régression.

## Palette

| Token | Hex | Usage |
|---|---|---|
| `--g-black` | `#1D1D1B` | Fonds sombres, en-têtes de section |
| `--g-red` | `#E41F26` | Accent unique, filets, CTA |
| `--g-white` | `#FFFFFF` | Fond principal |
| `--g-offwhite` | `#F7F7F6` | Fond alterné |
| `--g-gray` | `#BBBBBB` | Bordures, texte secondaire |
