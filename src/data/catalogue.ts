// ─────────────────────────────────────────────────────────────────────────────
// catalogue.ts — Source unique de vérité pour toutes les formations Galactus
// Importé par : Header, Footer, presentiel, foad, elearning, calendrier
// Pour ajouter une formation : ajouter une entrée dans FORMATIONS[]
// Pour ajouter un prix : renseigner le champ `prix` de la session concernée
//
// MAJ août 2026 — ajout de la famille « Socle & Reconversion » (11 formations
// sans aucun prérequis, portfolio Cisco Networking Academy FR du 25/07/2026).
// Elles ouvrent le Bloc 0 de chaque parcours métier (voir data/parcours.ts).
//
// MAJ septembre 2026 — CCNP Security retiré. Les formations
// Cisco Networking Academy, sauf le CCNA v2.0 complet, sont proposées en
// e-learning tutoré, à un tarif public. Le catalogue Microsoft n'est PAS
// proposé en e-learning : ces formations restent en présentiel, sur devis,
// leur coût dépendant du territoire et de la taille du groupe.
//
// MAJ 18 octobre 2026 — Le CCNP Cybersecurity (examens CBRCOR 350-201 et
// CBRFIR 300-215, anciennement CyberOps Professional) est retiré du catalogue :
// hors périmètre de compétence de l'organisme. Le parcours Cybersécurité
// s'arrête donc au CCNA Cybersecurity pour la voie défensive, et à Ethical
// Hacker pour la voie offensive.
//
// VOUCHER D'EXAMEN SURVEILLÉ PEARSON VUE — liste à jour au 28 octobre 2026.
// Compris dans :
//   · CCNA v2.0 parcours complet          (champ voucher: 350)
//   · CCNP Enterprise ENCOR               (champ voucher: 390)
//   · CCNP Enterprise ENARSI              (champ voucher: 290)
//   · CCNA Cybersecurity                  (champ voucher: 350)
//   · CCNA Automation                     (champ voucher: 350)
//   · JNCIA-Junos                         (vendu sur devis, voucher intégré)
//
// PAS compris : tout le catalogue Microsoft (décision du 28 octobre 2026). Les
// prix par niveau — 890 € Applied Skills, 990 € Fundamentals, 1 690 € Associate,
// 1 890 € Associate avancé — rémunèrent la formation seule. Le candidat acquiert
// son voucher Pearson VUE séparément.
// Tous les autres cours Networking Academy délivrent le badge et le certificat
// Cisco Networking Academy, et leur tarif ne comprend aucun voucher.
//
// Cette liste est reprise telle quelle sur /certifications, /elearning et
// /demarche-pedagogique. Toute modification ici doit être répercutée sur ces
// trois pages, sinon le site promet un voucher à un endroit et le refuse à un
// autre — c'est arrivé jusqu'au 28 octobre 2026 pour CCNA Cybersecurity et
// CCNA Automation, dont les fiches disaient « non compris » alors que leur
// prix et leur champ voucher disaient l'inverse.
//
// Le champ `prix.elearning` est le PRIX TOTAL À PAYER, voucher compris
// (art. L.112-1 du code de la consommation). Toute nouvelle entrée suit la
// même règle : si le voucher est annoncé compris, il est DANS le prix.
//
// MAJ 24 octobre 2026 — IT Essentials ne prépare plus la certification
// CompTIA A+ : le cours délivre le certificat de fin de cours Cisco Networking
// Academy. Aucun examen éditeur n'est compris ni annoncé.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// POSITIONNEMENT COMMERCIAL (octobre 2026) — trois axes, une modalité chacun
//
//   1. Cisco Networking Academy  → E-learning tutoré EXCLUSIVEMENT, tarif public
//   2. Microsoft                                → PRÉSENTIEL EXCLUSIVEMENT, sur devis
//   3. Juniper (JNCIA-Junos)                    → FOAD EXCLUSIVEMENT, sur devis
//
// Une seule exception : le CCNA v2.0 parcours complet (ccna-cisco) déclare les
// deux modalités. L'e-learning est l'offre standard — le pack des 3 modules
// ITN · SRWE · ENSA. Le présentiel de 5 jours reste proposé lors des
// sessions programmées, visibles au calendrier.
//
// La FOAD est réservée au parcours Juniper (JNCIA-Junos), seule entrée du
// catalogue à déclarer cette modalité.
// ─────────────────────────────────────────────────────────────────────────────

export type Modalite = 'Présentiel' | 'FOAD' | 'E-learning'
export type Territoire = 'Martinique' | 'Guadeloupe' | 'Paris' | 'Tous territoires'
export type Niveau = 'Grand débutant' | 'Fondamental' | 'Intermédiaire' | 'Avancé'

export interface Formation {
  slug: string                 // route → /formations/{slug}
  titre: string                // Titre court affiché en navigation et catalogue
  titreLong: string            // Titre complet de la fiche
  editeur: string              // Cisco Networking Academy | Microsoft | ...
  famille: string              // Sous-catégorie pour regroupement
  niveau: Niveau
  duree: string                // Ex: "70 heures"
  dureeJours: number           // Pour le calendrier
  certification: string        // Intitulé certification officielle
  /**
   * Référence de l'examen de certification PRÉPARÉ par le cours, et rien
   * d'autre. Chaîne vide quand le cours ne prépare aucun examen éditeur.
   * Ne jamais y mettre une sanction de fin de cours : c'est le rôle de
   * `getSanction()`.
   */
  examCode: string             // Ex: "200-301", "AZ-900", "" si aucun examen
  modalites: Modalite[]        // Modalités disponibles
  description: string          // Courte description (2 lignes max)
  // Prix par modalité (€, organisme exonéré de TVA — null = sur demande)
  prix: {
    presentiel: number | null
    foad: number | null
    elearning: number | null
  }
  /** true = le tarif présentiel est affiché publiquement */
  prixPublic?: boolean
  /** true = le tarif e-learning tutoré est affiché publiquement */
  prixPublicElearning?: boolean
  /** Coût du titre officiel compris dans le prix e-learning (€, 0 = certificat éditeur sans examen surveillé) */
  /** Coût du voucher d'examen surveillé Pearson VUE, compris dans le tarif.
   *  RÈGLE : le CCNA v2.0 parcours complet et les deux parcours CCNP
   *  Enterprise (ENCOR, ENARSI) comprennent un voucher d'examen surveillé.
   *  Tous les autres cours Networking Academy délivrent le badge et le
   *  certificat Cisco Networking Academy — voucher: 0.
   *  Usage interne : le montant n'est jamais affiché sur le site. */
  voucher?: number
  /** true = cours d'entrée sans aucun prérequis (Bloc 0 des parcours) */
  socle?: boolean
  /**
   * true = au symbole diplôme, n'afficher que la référence de l'examen, sans
   * la sanction de fin de cours. Réservé aux parcours vendus pour la
   * certification éditeur elle-même — CCNA v2.0 complet, CCNA Cybersecurity,
   * CCNP ENCOR et ENARSI : c'est l'examen qui est l'objet de l'achat, le badge
   * et le certificat Cisco Networking Academy n'y sont qu'accessoires.
   */
  examenSeul?: boolean
}

// ─── Familles pour l'affichage groupé ────────────────────────────────────────
export const FAMILLES: Record<string, { label: string; icon: string }> = {
  'Socle & Reconversion':  { label: 'Socle & Reconversion',   icon: 'GraduationCap' },
  'CCNA et CCNP':          { label: 'CCNA & CCNP',        icon: 'Network'  },
  'Cybersécurité':         { label: 'Cybersécurité',          icon: 'Shield'   },
  'Programmation':         { label: 'Programmation',          icon: 'Code'     },
  'IoT':                   { label: 'IoT & Objets Connectés', icon: 'Wifi'     },
  'Data & Analytics':      { label: 'Data & Analytics',       icon: 'BarChart2'},
  'Azure & Cloud':         { label: 'Azure & Cloud',          icon: 'Cloud'    },
  'Microsoft 365':         { label: 'Microsoft 365',          icon: 'Grid'     },
  'Juniper Junos':         { label: 'Juniper Junos',          icon: 'Router'   },
}

// ─── Éditeurs ─────────────────────────────────────────────────────────────────
export const EDITEURS: Record<string, { label: string; badge?: string }> = {
  'Cisco Networking Academy': { label: 'Cisco Networking Academy', badge: 'Partenaire n° 3018982' },
  'Microsoft':     { label: 'Microsoft',     badge: 'Partenaire Microsoft n° 4653557' },
  'Juniper Networks': { label: 'Juniper Networks', badge: 'Formateur réseau CCNP / CCDP — parcours JNCIA' },
}

// ─────────────────────────────────────────────────────────────────────────────
// CATALOGUE PRINCIPAL — 49 formations
// Le commentaire annonçait 51 : il datait d'avant le retrait de deux entrées et
// contredisait le décompte réel, celui que publient les pages du site. Corrigé
// le 29 octobre 2026 — à mettre à jour en même temps que FORMATIONS[].
// prix: null = sur demande / 0 = inclus dans pack / nombre = tarif public en €
// ─────────────────────────────────────────────────────────────────────────────
export const FORMATIONS: Formation[] = [

  // ── SOCLE & RECONVERSION — aucun prérequis ────────────────────────────────
  {
    slug: 'sensibilisation-numerique',
    titre: 'Sensibilisation au numérique',
    titreLong: 'Sensibilisation au numérique — Premiers repères dans le monde digital',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '6 heures', dureeJours: 1,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Première marche du parcours : prise en main des outils numériques du quotidien, identité en ligne, recherche d\'information, mots de passe et premiers réflexes face à l\'IA générative.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'utilisation-ordinateurs-mobiles',
    titre: 'Utilisation d\'ordinateurs et de mobiles',
    titreLong: 'Utilisation d\'ordinateurs et d\'équipements mobiles',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '6 heures', dureeJours: 1,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Poste de travail et terminal mobile : matériel, systèmes d\'exploitation, installation de logiciels, organisation des fichiers et connectivité Wi-Fi, Bluetooth et cellulaire.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'bases-materiel-informatique',
    titre: 'Les bases du matériel informatique',
    titreLong: 'Les bases du matériel informatique — Composants, PC et terminaux mobiles',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '6 heures', dureeJours: 1,
    certification: 'Badge numérique — brique CCST Cybersecurity',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Monter, réparer et faire évoluer un poste : composants d\'un PC fixe, d\'un portable et d\'un terminal mobile, choix des pièces et gestes de démontage.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'operating-system-basics',
    titre: 'Operating System Basics',
    titreLong: 'Operating System Basics — Windows, Linux, Android et iOS',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '12 heures', dureeJours: 2,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Rôle et fonctionnement des systèmes d\'exploitation, outils d\'administration Windows, premières commandes et notions de sécurité sous Linux.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'notions-base-reseaux',
    titre: 'Notions de base sur les réseaux',
    titreLong: 'Notions de base sur les réseaux — Networking Basics',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '22 heures', dureeJours: 3,
    certification: 'Badge numérique — brique CCST Cybersecurity',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Périphériques, supports et protocoles réseau manipulés dans Packet Tracer, jusqu\'à la construction et au test d\'un réseau local simple.',
    prix: { presentiel: null, foad: null, elearning: 240 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'introduction-cybersecurite',
    titre: 'Introduction à la cybersécurité',
    titreLong: 'Introduction à la cybersécurité — Menaces, protection et métiers',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '6 heures', dureeJours: 1,
    certification: 'Badge numérique — brique CCST Cybersecurity',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Panorama des cybermenaces, protection des données personnelles et professionnelles, bonnes pratiques en entreprise et découverte des métiers de la cybersécurité.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'linux-unhatched',
    titre: 'Linux Unhatched',
    titreLong: 'Linux Unhatched — Première approche du système Linux',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '8 heures', dureeJours: 1,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Installation, configuration de base et premières commandes Linux en ligne de commande, dans un environnement guidé pas à pas.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'introduction-ia-moderne',
    titre: 'Introduction à l\'IA moderne',
    titreLong: 'Introduction à l\'IA moderne — Chatbots, vision et prompts',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '6 heures', dureeJours: 1,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    description: 'L\'IA en pratique : vision par ordinateur, traduction automatique, agents conversationnels et rédaction de prompts, avec des ateliers sur cas concrets.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'introduction-science-donnees',
    titre: 'Introduction à la science des données',
    titreLong: 'Introduction à la science des données — Donnée, analyse et machine learning',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Grand débutant', duree: '6 heures', dureeJours: 1,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Bases de la science des données : collecte, nettoyage et analyse, rôle de l\'ingénierie de la donnée et place du machine learning dans l\'entreprise.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'support-informatique-essentiels',
    titre: 'Essentiels du support informatique',
    titreLong: 'Essentiels du support informatique — Préparation CCST IT Support',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Fondamental', duree: '56 heures', dureeJours: 7,
    certification: 'Cisco Certified Support Technician (CCST) IT Support',
    examCode: 'CCST IT Support',
    modalites: ['E-learning'],
    description: 'Préparation au métier de technicien support : matériel, Windows et macOS, dépannage réseau et relation utilisateur, appuyés sur 103 laboratoires pratiques.',
    prix: { presentiel: null, foad: null, elearning: 500 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'it-essentials',
    titre: 'IT Essentials',
    titreLong: 'IT Essentials — Matériel, systèmes et dépannage',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Fondamental', duree: '70 heures', dureeJours: 9,
    certification: 'Certificat de fin de cours Cisco Networking Academy — IT Essentials',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Installer, configurer et dépanner ordinateurs, terminaux mobiles et logiciels : postes fixes, portables, périphériques, Windows et macOS, et mise en réseau du poste. 14 chapitres et 99 travaux pratiques, avec ordinateur portable virtuel et Packet Tracer.',
    prix: { presentiel: null, foad: null, elearning: 630 },
    prixPublicElearning: true,
    voucher: 0,
  },

  // ── CISCO — Réseaux & CCNA ─────────────────────────────────────────────────
  {
    slug: 'networking-essentials',
    titre: 'Networking Essentials',
    titreLong: 'Networking Essentials — Fondamentaux des réseaux',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Fondamental', duree: '35 heures', dureeJours: 4,
    certification: 'Cisco Networking Essentials Certificat',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Fondamentaux des réseaux : adressage IP, commutation, routage, Wi-Fi et sécurité de base, avec configuration d\'équipements dans Packet Tracer. Base recommandée avant le cursus CCNA.',
    prix: { presentiel: null, foad: null, elearning: 380 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'ccna-itn',
    titre: 'CCNA v2.0 — ITN (1/3)',
    titreLong: 'CCNA Introduction aux réseaux (Module 1/3)',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Fondamental', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNA v2.0 200-301',
    examCode: '200-301 1/3',
    modalites: ['E-learning'],
    description: 'Premiers modules du cursus CCNA officiel — OSI, TCP/IP, IPv4, IPv6, CLI Cisco.',
    prix: { presentiel: null, foad: null, elearning: 630 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'ccna-srwe',
    titre: 'CCNA v2.0 — SRWE (2/3)',
    titreLong: 'CCNA Commutation, Routage et Wi-Fi (Module 2/3)',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Intermédiaire', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNA v2.0 200-301',
    examCode: '200-301 2/3',
    modalites: ['E-learning'],
    description: 'VLAN, STP, EtherChannel, DHCP, Wi-Fi 802.11 et routage statique avancé.',
    prix: { presentiel: null, foad: null, elearning: 630 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'ccna-ensa',
    titre: 'CCNA v2.0 — ENSA (3/3)',
    titreLong: 'CCNA Réseaux d\'entreprise, Sécurité et Automatisation (Module 3/3)',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNA v2.0 200-301',
    examCode: '200-301 3/3',
    modalites: ['E-learning'],
    description: 'OSPF, ACL, NAT, VPN, SDN et automatisation réseau. Dernier module avant l\'examen CCNA.',
    prix: { presentiel: null, foad: null, elearning: 630 },
    prixPublicElearning: true,
    voucher: 0,
  },

  {
    slug: 'ccna-cisco',
    titre: 'CCNA v2.0 — Parcours complet',
    titreLong: 'CCNA v2.0 — Parcours complet ITN · SRWE · ENSA, préparation à la certification Cisco 200-301',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Intermédiaire', duree: '210 h (e-learning) · 35 h (présentiel)', dureeJours: 27,
    certification: 'Cisco CCNA 200-301 (blueprint v2.0)',
    examCode: '200-301 v2.0',
    // Double modalité, seule exception du catalogue :
    //  · E-learning tutoré — le pack des 3 modules Cisco Networking Academy (210 h), offre standard
    //  · Présentiel — parcours complet condensé sur 5 jours (35 h), session programmée
    modalites: ['E-learning', 'Présentiel'],
    description: 'Les trois modules du cursus CCNA réunis en un seul parcours — ITN, SRWE et ENSA — avec l\'accès à Packet Tracer : 210 heures en e-learning tutoré, voucher d\'examen 200-301 compris. Également proposé en présentiel, parcours complet condensé sur 5 jours (35 h), lors des sessions programmées.',
    prix: { presentiel: 1950, foad: null, elearning: 1880 },
    prixPublic: true,
    prixPublicElearning: true,
    voucher: 350,
    examenSeul: true,
  },

  {
    slug: 'ccnp-encor',
    titre: 'CCNP Enterprise — ENCOR',
    titreLong: 'CCNP Enterprise : Core Networking (ENCOR 350-401) v9',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 10,
    certification: 'Cisco Certified Specialist – Enterprise Core',
    examCode: '350-401 ENCOR v1.2',
    modalites: ['E-learning', 'Présentiel'],
    description: 'Cœur du CCNP Enterprise (v9) : architecture SD-Access, LISP/VXLAN, dual-stack, virtualisation, assurance réseau, sécurité et automatisation.',
    prix: { presentiel: 1950, foad: null, elearning: 1950 },
    prixPublicElearning: true,
    voucher: 390,
    examenSeul: true,
  },
  {
    slug: 'ccnp-enarsi',
    titre: 'CCNP Enterprise — ENARSI',
    titreLong: 'CCNP Enterprise : Advanced Routing (ENARSI 300-410) v9',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 10,
    certification: 'Cisco Certified Specialist – Enterprise Advanced Infrastructure',
    examCode: '300-410 ENARSI v1.2',
    modalites: ['E-learning', 'Présentiel'],
    description: 'Concentration Advanced Routing (v9) : Layer 3 (EIGRP, OSPF, BGP), MPLS L3 VPN, DMVPN, sécurité d\'infrastructure et services, dépannage avancé.',
    prix: { presentiel: 1950, foad: null, elearning: 1950 },
    prixPublicElearning: true,
    voucher: 290,
    examenSeul: true,
  },

  // ── CISCO — Cybersécurité ──────────────────────────────────────────────────
  {
    slug: 'cybersecurity-essentials',
    titre: 'Cybersecurity Essentials',
    titreLong: 'Cybersecurity Essentials — Fondamentaux de la cybersécurité',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Fondamental', duree: '30 heures', dureeJours: 4,
    certification: 'Cisco Cybersecurity Essentials Certificat',
    examCode: '',
    modalites: ['E-learning'],
    description: 'CIA Triad, cryptographie, sécurité OS, firewalls et réponse aux incidents.',
    prix: { presentiel: null, foad: null, elearning: 330 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'cyberops',
    titre: 'CCNA Cybersecurity',
    titreLong: 'CCNA Cybersecurity — Opérations de cybersécurité SOC (ex-CyberOps Associate)',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Intermédiaire', duree: '60 heures', dureeJours: 8,
    certification: 'Cisco Certified CCNA Cybersecurity 200-201',
    examCode: '200-201 CCNACBR v1.2',
    modalites: ['E-learning'],
    description: 'Formation SOC complète — surveillance réseau, forensique, réponse aux incidents et IA appliquée à la détection. Anciennement CyberOps Associate, renommée CCNA Cybersecurity par Cisco le 3 février 2026 ; examen 200-201 inchangé, blueprint v1.2.',
    prix: { presentiel: null, foad: null, elearning: 1950 },
    prixPublicElearning: true,
    voucher: 350,
    examenSeul: true,
  },
  {
    slug: 'ethical-hacker',
    titre: 'Ethical Hacker',
    titreLong: 'Ethical Hacker — Tests d\'intrusion et sécurité offensive',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Avancé', duree: '30 heures', dureeJours: 4,
    certification: 'Cisco Ethical Hacker Certificat',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Méthodologie pentest, Kali Linux, Nmap, Metasploit, Burp Suite et rapport.',
    prix: { presentiel: null, foad: null, elearning: 330 },
    prixPublicElearning: true,
    voucher: 0,
  },

  // ── CISCO — Programmation ─────────────────────────────────────────────────
  {
    slug: 'python-essentials-1',
    titre: 'Python Essentials 1',
    titreLong: 'Python Essentials 1 — Introduction à Python (PCEP)',
    editeur: 'Cisco Networking Academy', famille: 'Programmation',
    niveau: 'Fondamental', duree: '40 heures', dureeJours: 5,
    certification: 'PCEP — Python Entry-Level (OpenEDG)',
    examCode: 'PCEP-30-02',
    modalites: ['E-learning'],
    description: 'Python from scratch — types, boucles, fonctions, collections, fichiers.',
    prix: { presentiel: null, foad: null, elearning: 440 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'python-essentials-2',
    titre: 'Python Essentials 2',
    titreLong: 'Python Essentials 2 — Python avancé et POO (PCAP)',
    editeur: 'Cisco Networking Academy', famille: 'Programmation',
    niveau: 'Intermédiaire', duree: '40 heures', dureeJours: 5,
    certification: 'PCAP — Python Associate (OpenEDG)',
    examCode: 'PCAP-31-03',
    modalites: ['E-learning'],
    description: 'POO, modules, exceptions, générateurs, décorateurs et programmation fonctionnelle.',
    prix: { presentiel: null, foad: null, elearning: 440 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'devnet-associate',
    titre: 'CCNA Automation',
    titreLong: 'CCNA Automation — Automatisation réseau Cisco (ex-DevNet)',
    editeur: 'Cisco Networking Academy', famille: 'Programmation',
    niveau: 'Intermédiaire', duree: '50 heures', dureeJours: 6,
    certification: 'Cisco Certified CCNA Automation 200-901',
    examCode: '200-901 CCNAAUTO',
    modalites: ['E-learning'],
    description: 'APIs REST, Python réseau, YANG/NETCONF, Ansible, Terraform et automatisation IA-ready (ex-DevNet, blueprint 2026).',
    prix: { presentiel: null, foad: null, elearning: 1880 },
    prixPublicElearning: true,
    voucher: 350,
    examenSeul: true,
  },

  // ── CISCO — IoT ───────────────────────────────────────────────────────────
  {
    slug: 'iot-introduction',
    titre: 'IoT — Introduction',
    titreLong: 'Introduction to IoT — La transformation digitale des industries',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Fondamental', duree: '20 heures', dureeJours: 3,
    certification: 'Certificate of Completion — Introduction to IoT',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Comprendre l\'Internet des objets et la transformation digitale : capteurs, connectivité, flux de données et cas d\'usage en entreprise et en collectivité.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'iot-connecting-things',
    titre: 'IoT — Connecting Things',
    titreLong: 'IoT Fundamentals — Connecting Things',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Intermédiaire', duree: '70 heures', dureeJours: 9,
    certification: 'Certificate of Completion — IoT Fundamentals: Connecting Things',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Arduino, Raspberry Pi, MQTT, protocoles IoT et sécurisation des déploiements.',
    prix: { presentiel: null, foad: null, elearning: 630 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'iot-big-data-analytics',
    titre: 'IoT — Big Data & Analytics',
    titreLong: 'IoT Fundamentals — Big Data & Analytics',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Intermédiaire', duree: '70 heures', dureeJours: 9,
    certification: 'Certificate of Completion — IoT Fundamentals: Big Data & Analytics',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Collecte, stockage, analyse et visualisation des données IoT avec Python.',
    prix: { presentiel: null, foad: null, elearning: 630 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'iot-security',
    titre: 'IoT — Security',
    titreLong: 'IoT Fundamentals — IoT Security',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Avancé', duree: '60 heures', dureeJours: 8,
    certification: 'Certificate of Completion — IoT Fundamentals: IoT Security',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Menaces IoT, cryptographie embarquée, segmentation réseau et audits de sécurité.',
    prix: { presentiel: null, foad: null, elearning: 540 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'iot-hackathon',
    titre: 'IoT — Hackathon',
    titreLong: 'IoT Fundamentals — Hackathon Playbook',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Avancé', duree: '40 heures', dureeJours: 5,
    certification: 'Certificate of Completion — IoT Fundamentals: Hackathon Playbook',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Projet IoT en équipe — design thinking, prototype fonctionnel et pitch jury.',
    prix: { presentiel: null, foad: null, elearning: 440 },
    prixPublicElearning: true,
    voucher: 0,
  },

  // ── CISCO — Linux ─────────────────────────────────────────────────────────
  // Rattaché à « Socle & Reconversion » depuis le 24/10/2026 : après le retrait
  // de NDG Linux I et II, la famille « Linux & Open Source » n'aurait plus
  // compté qu'une entrée. Linux Essentials rejoint Linux Unhatched, les deux
  // cours Linux sans prérequis étant désormais présentés ensemble.
  {
    slug: 'linux-essentials',
    titre: 'Linux Essentials',
    titreLong: 'NDG Linux Essentials — Introduction à Linux (LPI 010)',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Fondamental', duree: '40 heures', dureeJours: 5,
    certification: 'LPI Linux Essentials 010-160',
    examCode: '010-160',
    modalites: ['E-learning'],
    description: 'Commandes Linux, gestion des fichiers, utilisateurs, processus et scripts Bash.',
    prix: { presentiel: null, foad: null, elearning: 440 },
    prixPublicElearning: true,
    voucher: 0,
  },

  // ── CISCO — Data & Analytics ──────────────────────────────────────────────
  {
    slug: 'data-analytics-essentials',
    titre: 'Data Analytics Essentials',
    titreLong: 'Data Analytics Essentials — Introduction à l\'analyse de données',
    editeur: 'Cisco Networking Academy', famille: 'Data & Analytics',
    niveau: 'Fondamental', duree: '30 heures', dureeJours: 4,
    certification: 'Cisco Data Analytics Essentials Certificat',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Analyse de données de bout en bout : interrogation SQL, manipulation avec Python Pandas, visualisation et restitution des résultats aux décideurs.',
    prix: { presentiel: null, foad: null, elearning: 330 },
    prixPublicElearning: true,
    voucher: 0,
  },

  // ── MICROSOFT — Azure & Cloud ─────────────────────────────────────────────
  {
    slug: 'az-900',
    titre: 'AZ-900 Azure Fundamentals',
    titreLong: 'Azure Fundamentals (AZ-900)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Fondamental', duree: '20 heures', dureeJours: 3,
    certification: 'Microsoft Azure Fundamentals',
    examCode: 'AZ-900',
    modalites: ['Présentiel'],
    description: 'IaaS, PaaS, SaaS, services Azure principaux, sécurité et tarification cloud.',
    prix: { presentiel: 990, foad: null, elearning: null },
  },
  {
    slug: 'az-104',
    titre: 'AZ-104 Azure Administrator',
    titreLong: 'Azure Administrator Associate (AZ-104)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Intermédiaire', duree: '40 heures', dureeJours: 5,
    certification: 'Microsoft Azure Administrator Associate',
    examCode: 'AZ-104',
    modalites: ['Présentiel'],
    description: 'Entra ID, stockage, VM, VNet, supervision et gouvernance Azure.',
    prix: { presentiel: 1690, foad: null, elearning: null },
  },
  {
    slug: 'sc-900',
    titre: 'SC-900 Security Fundamentals',
    titreLong: 'Security, Compliance and Identity Fundamentals (SC-900)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Fondamental', duree: '15 heures', dureeJours: 2,
    certification: 'Microsoft Security, Compliance & Identity Fundamentals',
    examCode: 'SC-900',
    modalites: ['Présentiel'],
    description: 'Zero Trust, Entra ID, Defender, Purview et conformité réglementaire Microsoft.',
    prix: { presentiel: 990, foad: null, elearning: null },
  },
  {
    slug: 'ai-901',
    titre: 'AI-901 Azure AI Fundamentals',
    titreLong: 'Azure AI Fundamentals (AI-901)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Fondamental', duree: '15 heures', dureeJours: 2,
    certification: 'Microsoft Azure AI Fundamentals',
    examCode: 'AI-901',
    modalites: ['Présentiel'],
    description: 'ML, vision, NLP, IA générative et Azure OpenAI Service (AI-901, remplace AI-900).',
    prix: { presentiel: 990, foad: null, elearning: null },
  },
  {
    slug: 'ab-900',
    titre: 'AB-900 Microsoft 365 Copilot',
    titreLong: 'Microsoft 365 Copilot & Agent Administration Fundamentals (AB-900)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Fondamental', duree: '18 heures', dureeJours: 2,
    certification: 'Microsoft Certified: Copilot and Agent Administration Fundamentals',
    examCode: 'AB-900',
    modalites: ['Présentiel'],
    description: 'Fondamentaux Microsoft 365, Copilot et administration d\'agents IA, sécurité, conformité et gouvernance (AB-900, remplace MS-900).',
    prix: { presentiel: 990, foad: null, elearning: null },
  },
  {
    slug: 'pl-300',
    titre: 'PL-300 Power BI Data Analyst',
    titreLong: 'Microsoft Power BI Data Analyst Associate (PL-300)',
    editeur: 'Microsoft', famille: 'Data & Analytics',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft Certified: Power BI Data Analyst Associate',
    examCode: 'PL-300',
    modalites: ['Présentiel'],
    description: 'Power Query, modélisation en étoile, DAX, visualisations et déploiement sécurisé de rapports Power BI.',
    prix: { presentiel: 1690, foad: null, elearning: null },
  },
  {
    slug: 'md-102',
    titre: 'MD-102 Endpoint Administrator',
    titreLong: 'Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft 365 Certified: Endpoint Administrator Associate',
    examCode: 'MD-102',
    modalites: ['Présentiel'],
    description: 'Intune, Windows Autopilot, conformité, Conditional Access, Defender for Endpoint et gestion des appareils à grande échelle.',
    prix: { presentiel: 1690, foad: null, elearning: null },
    prixPublic: true,
  },
  {
    slug: 'ms-4010',
    titre: 'MS-4010 Copilot Specialist',
    titreLong: 'Microsoft 365 Copilot Specialist (MS-4010)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '21 heures', dureeJours: 3,
    certification: 'Microsoft 365 Copilot Specialist',
    examCode: 'MS-4010',
    modalites: ['Présentiel'],
    description: 'Déploiement, configuration, sécurité et adoption de Microsoft 365 Copilot en entreprise (Teams, SharePoint, DLP, gouvernance).',
    prix: { presentiel: 1690, foad: null, elearning: null },
  },
  {
    slug: 'az-802',
    titre: 'AZ-802 Administer Windows Server',
    titreLong: 'Administering Windows Server (AZ-802) — examen unique, remplace AZ-800 et AZ-801',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft Certified — Windows Server Administrator Associate',
    examCode: 'AZ-802',
    modalites: ['Présentiel'],
    description: 'Administration Windows Server hybride : identité, stockage, calcul, haute disponibilité, migration et reprise d activité.',
    prix: { presentiel: 1690, foad: null, elearning: null },
  },
  {
    slug: 'ab-650',
    titre: 'AB-650 Microsoft 365 & AI Services',
    titreLong: 'Administering Microsoft 365 and AI Services (AB-650)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft 365 Certified — AI Services Administrator Associate',
    examCode: 'AB-650',
    modalites: ['Présentiel'],
    description: 'Administration d un tenant Microsoft 365 et des services IA : identité Entra ID, Defender, Purview, Copilot et gouvernance des agents (AB-650, remplace MS-102 retiré le 31/10/2026).',
    prix: { presentiel: 1690, foad: null, elearning: null },
  },
  {
    slug: 'sc-300',
    titre: 'SC-300 Identity & Access Administrator',
    titreLong: 'Microsoft Identity and Access Administrator (SC-300)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '28 heures', dureeJours: 4,
    certification: 'Microsoft Certified — Identity and Access Administrator Associate',
    examCode: 'SC-300',
    modalites: ['Présentiel'],
    description: 'Gestion des identités et des accès avec Microsoft Entra ID : authentification, gouvernance, accès conditionnel et identités externes.',
    prix: { presentiel: 1690, foad: null, elearning: null },
  },
  {
    slug: 'sc-401',
    titre: 'SC-401 Information Security Administrator',
    titreLong: 'Administer Information Security in Microsoft 365 (SC-401)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '28 heures', dureeJours: 4,
    certification: 'Microsoft Certified — Information Security Administrator Associate',
    examCode: 'SC-401',
    modalites: ['Présentiel'],
    description: 'Protection des informations sensibles avec Microsoft Purview à l ère de l IA : étiquettes, DLP, chiffrement et gestion des risques internes.',
    prix: { presentiel: 1690, foad: null, elearning: null },
  },
  {
    slug: 'sc-500',
    titre: 'SC-500 Cloud & AI Security Engineer',
    titreLong: 'Cloud and AI Security Engineer (SC-500)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Avancé', duree: '28 heures', dureeJours: 4,
    certification: 'Microsoft Certified — Cloud and AI Security Engineer Associate',
    examCode: 'SC-500',
    modalites: ['Présentiel'],
    description: 'Sécurisation des charges cloud et des services IA : Defender for Cloud, protection des workloads, sécurité des agents et de Copilot, gouvernance des données IA (nouvelle certification 2026).',
    prix: { presentiel: 1890, foad: null, elearning: null },
  },

  {
    slug: 'pl-7002',
    titre: 'PL-7002 Power Automate',
    titreLong: 'Applied Skills — Automatiser des processus avec Power Automate (PL-7002)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Fondamental', duree: '7 heures', dureeJours: 1,
    certification: 'Microsoft Applied Skills (évaluation en lab Microsoft Learn)',
    examCode: 'PL-7002',
    modalites: ['Présentiel'],
    description: 'Créer et gérer des processus automatisés avec Power Automate : flux cloud, connecteurs, approbations et intégration Microsoft 365.',
    prix: { presentiel: 890, foad: null, elearning: null },
  },
  {
    slug: 'pl-7008',
    titre: 'PL-7008 Copilot Studio',
    titreLong: 'Applied Skills — Créer des agents avec Copilot Studio (PL-7008)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '7 heures', dureeJours: 1,
    certification: 'Microsoft Applied Skills (évaluation en lab Microsoft Learn)',
    examCode: 'PL-7008',
    modalites: ['Présentiel'],
    description: 'Créer des agents dans Microsoft Copilot Studio : sujets, actions, connaissances, déploiement et gouvernance des agents IA.',
    prix: { presentiel: 890, foad: null, elearning: null },
  },
  {
    slug: 'ms-4017',
    titre: 'MS-4017 Étendre Microsoft 365 Copilot',
    titreLong: 'Applied Skills — Gérer et étendre Microsoft 365 Copilot (MS-4017)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '7 heures', dureeJours: 1,
    certification: 'Microsoft Applied Skills (évaluation en lab Microsoft Learn)',
    examCode: 'MS-4017',
    modalites: ['Présentiel'],
    description: 'Gérer et étendre Microsoft 365 Copilot : agents déclaratifs, connecteurs Graph, extensibilité et personnalisation.',
    prix: { presentiel: 890, foad: null, elearning: null },
  },
  {
    slug: 'az-1008',
    titre: 'AZ-1008 Active Directory DS',
    titreLong: 'Applied Skills — Administrer Active Directory Domain Services (AZ-1008)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Intermédiaire', duree: '7 heures', dureeJours: 1,
    certification: 'Microsoft Applied Skills (évaluation en lab Microsoft Learn)',
    examCode: 'AZ-1008',
    modalites: ['Présentiel'],
    description: 'Administrer Active Directory Domain Services : domaines, OU, GPO, réplication et sécurisation de l annuaire.',
    prix: { presentiel: 890, foad: null, elearning: null },
  },
  // ── Juniper Networks ───────────────────────────────────────────────────────
  // MAJ octobre 2026 — ouverture du catalogue Juniper. Certification éditeur,
  // non enregistrée au RNCP ni au Répertoire spécifique : non éligible au CPF.
  {
    slug: 'jncia-junos',
    titre: 'JNCIA-Junos',
    titreLong: 'JNCIA-Junos — Introduction to the Junos Operating System (IJOS)',
    editeur: 'Juniper Networks', famille: 'Juniper Junos',
    niveau: 'Fondamental', duree: '35 heures', dureeJours: 5,
    certification: 'Juniper Networks Certified Associate — Junos (JNCIA-Junos)',
    examCode: 'JN0-106',
    modalites: ['FOAD'],
    description: "Premier niveau du parcours de certification Juniper : architecture de Junos OS, interface en ligne de commande, interfaces réseau, routage, politiques et filtres, supervision et dépannage.",
    prix: { presentiel: null, foad: null, elearning: null },
  }
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Retourne les formations regroupées par famille */
export function getFormationsParFamille(): Record<string, Formation[]> {
  const result: Record<string, Formation[]> = {}
  for (const f of FORMATIONS) {
    if (!result[f.famille]) result[f.famille] = []
    result[f.famille].push(f)
  }
  return result
}

/** Retourne les formations regroupées par éditeur */
export function getFormationsParEditeur(): Record<string, Formation[]> {
  const result: Record<string, Formation[]> = {}
  for (const f of FORMATIONS) {
    if (!result[f.editeur]) result[f.editeur] = []
    result[f.editeur].push(f)
  }
  return result
}

/** Retourne les formations disponibles pour une modalité donnée */
export function getFormationsParModalite(modalite: Modalite): Formation[] {
  return FORMATIONS.filter(f => f.modalites.includes(modalite))
}

/** Retourne les formations d'entrée sans prérequis (Bloc 0 des parcours) */
export function getFormationsSocle(): Formation[] {
  return FORMATIONS.filter(f => f.socle)
}

/**
 * Formate un prix ou retourne "Sur demande".
 * L'organisme est exonéré de TVA (art. 261-4-4°-a du CGI) : le montant affiché
 * est le prix total à payer. Ni « HT » (qui laisserait croire qu'une taxe
 * s'ajoute) ni « TTC » (il n'y a pas de taxe) n'ont de sens ici.
 */
export function formatPrix(prix: number | null): string {
  if (prix === null) return 'Sur demande'
  if (prix === 0) return 'Inclus'
  return `${prix.toLocaleString('fr-FR')} €`
}

/** Retourne une formation par son slug (ou undefined) */
export function getFormationBySlug(slug: string): Formation | undefined {
  return FORMATIONS.find(f => f.slug === slug)
}

/**
 * Tarifs par modalité pour l'affichage fiche.
 *
 *  - E-learning tutoré  → prix public (prixPublicElearning), titre officiel compris
 *  - Présentiel         → prix public seulement si prixPublic est vrai
 *
 * Une modalité non proposée par la formation n'est pas retournée.
 */
export interface TarifModalite {
  modalite: Modalite
  label: string
  valeur: string
  montant: number | null
  surDevis: boolean
}

export function getTarifsModalites(f: Formation): TarifModalite[] {
  const LABELS: Record<Modalite, string> = {
    'Présentiel':  'Présentiel',
    'FOAD':        'FOAD synchrone',
    'E-learning':  'E-learning tutoré',
  }
  return f.modalites.map(m => {
    let v: number | null | undefined
    if (m === 'E-learning')      v = f.prixPublicElearning ? f.prix?.elearning : undefined
    else if (m === 'Présentiel') v = f.prixPublic ? f.prix?.presentiel : undefined
    else                         v = undefined
    return {
      modalite: m,
      label: LABELS[m],
      valeur: v ? `${v.toLocaleString('fr-FR')} €` : 'Sur devis',
      montant: v ?? null,
      surDevis: !v,
    }
  })
}

/**
 * Ce que l'apprenant REÇOIT à l'issue du cours, par opposition à l'examen
 * qu'il prépare (`examCode`). C'est cette mention qui s'affiche au symbole
 * diplôme des cartes et du méga-menu.
 *
 * Tous les cours Cisco Networking Academy délivrent le badge numérique ET le
 * certificat de fin de cours de l'éditeur (confirmé le 24/10/2026) : la règle
 * est uniforme, sans exception par niveau.
 *
 * Les cours Microsoft et Juniper ne délivrent aucune sanction d'éditeur du
 * seul fait de les suivre : la certification s'obtient en passant l'examen.
 * Le cours est sanctionné par l'attestation de formation de l'organisme.
 */
export function getSanction(f: Formation): string {
  if (f.examenSeul) return ''
  if (f.editeur === 'Cisco Networking Academy') {
    return 'Badge et certificat Cisco Networking Academy'
  }
  // Au symbole diplôme, on nomme la certification préparée plutôt que
  // « Attestation de formation » : l'attestation est un livrable administratif,
  // elle ne dit rien de ce que l'apprenant vient chercher. Ce que la
  // certification coûte, et si elle est comprise, est dit juste à côté par
  // getMentionCertification() — jamais sous-entendu.
  return f.certification
}

/**
 * Forme courte pour les listes denses (cartes du catalogue, méga-menu).
 * Le nom complet d'une certification Microsoft fait jusqu'à soixante
 * caractères : il déborde d'une pastille de carte. Comme le code d'examen est
 * déjà affiché juste à côté, la pastille porte l'information que l'acheteur
 * cherche vraiment — la certification est-elle comprise ou non.
 */
export function getSanctionCourte(f: Formation): string {
  if (f.examenSeul) return ''
  if (f.editeur === 'Cisco Networking Academy' && !f.voucher) {
    return 'Badge et certificat Cisco Networking Academy'
  }
  return f.voucher ? 'Certification comprise' : 'Certification en option'
}

/**
 * Mention affichée sous la ligne diplôme : la certification de l'éditeur est-elle
 * comprise dans le prix, ou passée séparément ?
 *
 * Un voucher déclaré signifie que GALACTUS Digital achète le code d'examen et le
 * remet à l'apprenant, qui passe l'épreuve en centre agréé ou en ligne via OnVUE.
 * Sans voucher, le cours prépare la certification sans l'inclure : le dire
 * explicitement évite qu'un acheteur découvre le coût de l'examen après coup
 * (indicateur 1 du RNQ V2 — information exhaustive avant engagement).
 */
export function getMentionCertification(f: Formation): string {
  if (f.editeur === 'Cisco Networking Academy' && !f.voucher) return ''
  if (f.voucher) return 'Certification officielle comprise dans le prix — voucher Pearson VUE fourni'
  // Parcours vendu sur devis : le voucher y est intégré, mais aucun montant n'est
  // publié puisqu'aucun prix ne l'est. Sans ce cas, le JNCIA-Junos affichait
  // « certification en option » alors que sa fiche annonce l'inverse.
  const aucunPrixPublie = !f.prix || (!f.prix.presentiel && !f.prix.foad && !f.prix.elearning)
  if (aucunPrixPublie) return 'Certification officielle comprise dans le devis'
  // Microsoft : le voucher n'est PAS compris (décision du 28 octobre 2026). Les
  // prix par niveau rémunèrent la formation seule ; le candidat acquiert son
  // voucher Pearson VUE séparément. Les 10 fiches qui annonçaient l'inverse ont
  // été corrigées le même jour — si l'une le réaffirme, c'est elle qui a tort.
  return 'Certification officielle en option — examen Pearson VUE non compris'
}

/**
 * Ligne complète du symbole diplôme : la sanction, puis la référence de
 * l'examen préparé. Sur les parcours vendus pour la certification elle-même
 * (`examenSeul`), seule la référence de l'examen s'affiche.
 */
export function getLigneDiplome(f: Formation): string {
  const sanction = getSanction(f)
  if (!sanction) return f.examCode
  // Juniper : la carte affichait « Attestation de formation · JN0-106 », ce qui
  // mélangeait l'attestation de l'organisme et l'examen de l'éditeur. Franck a
  // demandé le code d'examen seul. L'intitulé complet de la certification reste
  // affiché sur la fiche, où il y a la place de l'écrire en entier.
  if (f.editeur === 'Juniper Networks' && f.examCode) return f.examCode
  return f.examCode ? `${sanction} · ${f.examCode}` : sanction
}

/**
 * Tarif public à afficher dans les listes (méga-menu, grille du catalogue).
 * RNQ V2, indicateur 1 : le tarif doit être accessible partout où la formation
 * est présentée, pas seulement sur sa fiche. Retourne le prix public le plus
 * bas parmi les modalités déclarées, ou « Sur devis » si aucun n'est public.
 */
export function getTarifAffiche(f: Formation): string {
  const montants = getTarifsModalites(f)
    .map(t => t.montant)
    .filter((m): m is number => m !== null)
  if (montants.length === 0) return 'Sur devis'
  return `${Math.min(...montants).toLocaleString('fr-FR')} €`
}

/** Prix e-learning affichable, ou null si la formation n'est pas proposée en e-learning */
export function getPrixElearning(f: Formation): number | null {
  if (!f.prixPublicElearning || !f.prix?.elearning) return null
  return f.prix.elearning
}

/** Prix présentiel affichable, ou null */
export function getPrixPresentiel(f: Formation): number | null {
  if (!f.prixPublic || !f.prix?.presentiel) return null
  return f.prix.presentiel
}

/** Coût du titre officiel compris dans le prix e-learning (0 si certificat éditeur) */
export function getVoucher(f: Formation): number {
  return f.voucher ?? 0
}

/** Détail du prix e-learning : part formation et part titre officiel */
export function getDetailPrixElearning(f: Formation):
  { total: number; formation: number; titre: number } | null {
  const total = getPrixElearning(f)
  if (total === null) return null
  const titre = getVoucher(f)
  return { total, formation: total - titre, titre }
}

/**
 * Mention obligatoire affichée sous les tarifs.
 *
 * Article L.112-1 du code de la consommation et arrêté du 3 décembre 1987 :
 * le consommateur doit connaître à l'avance la dépense totale. L'organisme
 * étant exonéré de TVA, le prix affiché est ce montant total.
 */
export const MENTION_PRIX_ELEARNING =
  "Prix total à payer, par personne. TVA non applicable — art. 261-4-4°-a du CGI. " +
  "Comprend l'accès à la plateforme, les supports officiels, le tutorat et le suivi individuel. " +
  "Le badge et le certificat Cisco Networking Academy sont délivrés à l'issue de chaque cours. " +
  "Le voucher d'examen surveillé Pearson VUE est compris pour le CCNA v2.0 parcours complet " +
  "et pour les deux parcours CCNP Enterprise ; aucun frais supplémentaire pour la première " +
  "présentation à cet examen. " +
  "Pour les autres cours, l'examen de certification de l'éditeur reste à la charge du candidat " +
  "s'il choisit de le passer. " +
  "Tarif communiqué aux employeurs, opérateurs de compétences et financeurs publics : "
  + "toute entrée en formation est adossée à un employeur ou à un financeur tiers "
  + "(art. 2 des CGV)."

/** Mention courte, pour les listes et le calendrier */
export const MENTION_PRIX_COURTE =
  "Prix total à payer, par personne — TVA non applicable, art. 261-4-4°-a du CGI."
