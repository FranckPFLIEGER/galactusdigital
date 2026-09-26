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
// MAJ septembre 2026 — CCNP Security retiré (50 formations). Les formations
// Cisco Networking Academy, sauf le CCNA v2.0 accéléré, sont proposées en
// e-learning tutoré,
// à un tarif public qui comprend le titre officiel de l'éditeur (champ
// `voucher`). Le catalogue Microsoft n'est PAS proposé en e-learning : ces
// formations restent en présentiel et FOAD, sur devis. Présentiel et FOAD
// restent sur devis, leur coût dépendant du territoire et de la taille du groupe.
//
// MAJ septembre 2026 — ajout du CCNP Cybersecurity (CBRCOR + CBRFIR), niveau
// professionnel du parcours Cybersécurité. Anciennement CyberOps Professional,
// renommé par Cisco le 3 février 2026 en même temps que CCNA Cybersecurity.
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
  examCode: string             // Ex: "200-301", "AZ-900"
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
  voucher?: number
  /** true = cours d'entrée sans aucun prérequis (Bloc 0 des parcours) */
  socle?: boolean
}

// ─── Familles pour l'affichage groupé ────────────────────────────────────────
export const FAMILLES: Record<string, { label: string; icon: string }> = {
  'Socle & Reconversion':  { label: 'Socle & Reconversion',   icon: 'GraduationCap' },
  'CCNA et CCNP':          { label: 'CCNA & CCNP',        icon: 'Network'  },
  'Cybersécurité':         { label: 'Cybersécurité',          icon: 'Shield'   },
  'Programmation':         { label: 'Programmation',          icon: 'Code'     },
  'IoT':                   { label: 'IoT & Objets Connectés', icon: 'Wifi'     },
  'Linux & Open Source':   { label: 'Linux & Open Source',    icon: 'Terminal' },
  'Data & Analytics':      { label: 'Data & Analytics',       icon: 'BarChart2'},
  'Azure & Cloud':         { label: 'Azure & Cloud',          icon: 'Cloud'    },
  'Microsoft 365':         { label: 'Microsoft 365',          icon: 'Grid'     },
}

// ─── Éditeurs ─────────────────────────────────────────────────────────────────
export const EDITEURS: Record<string, { label: string; badge?: string }> = {
  'Cisco Networking Academy': { label: 'Cisco Networking Academy', badge: 'Partenaire n° 3018982' },
  'Microsoft':     { label: 'Microsoft',     badge: 'Partenaire Microsoft n° 4653557' },
}

// ─────────────────────────────────────────────────────────────────────────────
// CATALOGUE PRINCIPAL — 52 formations
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Première marche du parcours : outils numériques, identité en ligne, recherche, mots de passe et premiers réflexes IA. Aucun prérequis.',
    prix: { presentiel: 390, foad: 390, elearning: 180 },
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Poste de travail et mobile : matériel, systèmes, logiciels, fichiers et connectivité Wi-Fi, Bluetooth et cellulaire. Aucun prérequis.',
    prix: { presentiel: 390, foad: 390, elearning: 180 },
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Monter, réparer et faire évoluer un PC. Composants d\'un poste fixe, d\'un portable et d\'un terminal mobile. Aucun prérequis.',
    prix: { presentiel: 390, foad: 390, elearning: 180 },
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Rôle et caractéristiques des systèmes d\'exploitation, outils d\'administration Windows, bases de la sécurité Linux. Aucun prérequis.',
    prix: { presentiel: 690, foad: 690, elearning: 210 },
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Périphériques, supports et protocoles réseau avec Packet Tracer. Construire un réseau local simple. Aucun prérequis.',
    prix: { presentiel: 990, foad: 990, elearning: 270 },
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Cybermenaces, protection des données personnelles et professionnelles, panorama des métiers de la cybersécurité. Aucun prérequis.',
    prix: { presentiel: 390, foad: 390, elearning: 180 },
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Installation, configuration de base et ligne de commande Linux. Porte d\'entrée vers Linux Essentials et le LPIC-1. Aucun prérequis.',
    prix: { presentiel: 490, foad: 490, elearning: 190 },
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Bases de l\'IA en pratique : vision par ordinateur, traduction automatique, chatbots et rédaction de prompts. Aucun prérequis.',
    prix: { presentiel: 390, foad: 390, elearning: 180 },
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
    examCode: 'Badge Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Bases de la science des données, de l\'analyse et de l\'ingénierie de la donnée. Rôle du machine learning en entreprise. Aucun prérequis.',
    prix: { presentiel: 390, foad: 390, elearning: 180 },
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
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Entrée directe dans l\'emploi : matériel, Windows et macOS, dépannage réseau. 103 laboratoires pratiques. Aucun prérequis.',
    prix: { presentiel: 1790, foad: 1790, elearning: 580 },
    prixPublicElearning: true,
    voucher: 125,
    socle: true,
  },
  {
    slug: 'it-essentials',
    titre: 'IT Essentials',
    titreLong: 'IT Essentials — Matériel, systèmes et dépannage (préparation CompTIA A+)',
    editeur: 'Cisco Networking Academy', famille: 'Socle & Reconversion',
    niveau: 'Fondamental', duree: '70 heures', dureeJours: 9,
    certification: 'CompTIA A+',
    examCode: 'CompTIA A+',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Installer, configurer et dépanner ordinateurs, terminaux mobiles et logiciels. 14 chapitres, 99 TP. Aucun prérequis.',
    prix: { presentiel: 1790, foad: 1790, elearning: 990 },
    prixPublicElearning: true,
    voucher: 460,
    socle: true,
  },

  // ── CISCO — Réseaux & CCNA ─────────────────────────────────────────────────
  {
    slug: 'networking-essentials',
    titre: 'Networking Essentials',
    titreLong: 'Networking Essentials — Fondamentaux des réseaux',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Fondamental', duree: '35 heures', dureeJours: 4,
    certification: 'Cisco Networking Essentials Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Introduction complète aux réseaux sans prérequis. Base recommandée avant le cursus CCNA.',
    prix: { presentiel: 1790, foad: 1790, elearning: 340 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'ccna-itn',
    titre: 'CCNAv2 — ITN (1/3)',
    titreLong: 'CCNA Introduction aux réseaux (Module 1/3)',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Fondamental', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNAv2 200-301',
    examCode: '200-301',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Premiers modules du cursus CCNA officiel — OSI, TCP/IP, IPv4, IPv6, CLI Cisco.',
    prix: { presentiel: 1790, foad: 1790, elearning: 530 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'ccna-srwe',
    titre: 'CCNAv2 — SRWE (2/3)',
    titreLong: 'CCNA Commutation, Routage et Wi-Fi (Module 2/3)',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Intermédiaire', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNAv2 200-301',
    examCode: '200-301',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'VLANs, STP, EtherChannel, DHCP, Wi-Fi 802.11 et routage statique avancé.',
    prix: { presentiel: 1790, foad: 1790, elearning: 530 },
    prixPublicElearning: true,
    voucher: 0,
  },
  {
    slug: 'ccna-ensa',
    titre: 'CCNAv2 — ENSA (3/3)',
    titreLong: 'CCNA Réseaux d\'entreprise, Sécurité et Automatisation (Module 3/3)',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNAv2 200-301',
    examCode: '200-301',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'OSPF, ACL, NAT, VPN, SDN et automatisation réseau. Dernier module avant l\'examen CCNA.',
    prix: { presentiel: 1790, foad: 1790, elearning: 820 },
    prixPublicElearning: true,
    voucher: 290,
  },

  {
    slug: 'ccna-cisco',
    titre: 'CCNA v2.0 — Cisco (accéléré)',
    titreLong: 'CCNA v2.0 — Implementing and Administering Cisco Solutions (parcours accéléré Cisco)',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Intermédiaire', duree: '40 heures', dureeJours: 5,
    certification: 'Cisco CCNA 200-301 (blueprint v2.0)',
    examCode: '200-301 v2.0',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Parcours accéléré officiel Cisco (5 jours) préparant à l\'examen CCNA 200-301 v2.0 : nouvelle section IA dans les opérations réseau, virage troubleshooting, allègement théorique. Distinct du parcours NetAcad en 3 modules.',
    prix: { presentiel: 2590, foad: 2490, elearning: 0 }, prixPublic: true,
  },

  {
    slug: 'ccnp-encor',
    titre: 'CCNP Enterprise — ENCOR',
    titreLong: 'CCNP Enterprise : Core Networking (ENCOR 350-401) v9',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 10,
    certification: 'Cisco Certified Specialist – Enterprise Core',
    examCode: '350-401 ENCOR v1.2',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Cœur du CCNP Enterprise (v9) : architecture SD-Access, LISP/VXLAN, dual-stack, virtualisation, assurance réseau, sécurité et automatisation.',
    prix: { presentiel: 1790, foad: 1790, elearning: 920 },
    prixPublicElearning: true,
    voucher: 390,
  },
  {
    slug: 'ccnp-enarsi',
    titre: 'CCNP Enterprise — ENARSI',
    titreLong: 'CCNP Enterprise : Advanced Routing (ENARSI 300-410) v9',
    editeur: 'Cisco Networking Academy', famille: 'CCNA et CCNP',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 10,
    certification: 'Cisco Certified Specialist – Enterprise Advanced Infrastructure',
    examCode: '300-410 ENARSI v1.2',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Concentration Advanced Routing (v9) : Layer 3 (EIGRP, OSPF, BGP), MPLS L3 VPN, DMVPN, sécurité d\'infrastructure et services, dépannage avancé.',
    prix: { presentiel: 1790, foad: 1790, elearning: 820 },
    prixPublicElearning: true,
    voucher: 290,
  },

  // ── CISCO — Cybersécurité ──────────────────────────────────────────────────
  {
    slug: 'cybersecurity-essentials',
    titre: 'Cybersecurity Essentials',
    titreLong: 'Cybersecurity Essentials — Fondamentaux de la cybersécurité',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Fondamental', duree: '30 heures', dureeJours: 4,
    certification: 'Cisco Cybersecurity Essentials Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'CIA Triad, cryptographie, sécurité OS, firewalls et réponse aux incidents.',
    prix: { presentiel: 1790, foad: 1790, elearning: 310 },
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
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Formation SOC complète — surveillance réseau, forensique, réponse aux incidents et IA appliquée à la détection. Anciennement CyberOps Associate, renommée CCNA Cybersecurity par Cisco le 3 février 2026 ; examen 200-201 inchangé, blueprint v1.2.',
    prix: { presentiel: 1790, foad: 1790, elearning: 770 },
    prixPublicElearning: true,
    voucher: 290,
  },
  {
    slug: 'ccnp-cybersecurity-cbrcor',
    titre: 'CCNP Cybersecurity — CBRCOR',
    titreLong: 'CCNP Cybersecurity : examen cœur — Performing Cybersecurity Using Cisco Security Technologies (CBRCOR 350-201) v1.2',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco Certified Specialist – Cybersecurity Core (examen cœur du CCNP Cybersecurity)',
    examCode: '350-201 CBRCOR v1.2',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Examen cœur du CCNP Cybersecurity : fondamentaux, techniques, processus et automatisation des opérations de cybersécurité. Anciennement CyberOps Professional, renommé par Cisco le 3 février 2026.',
    prix: { presentiel: 1790, foad: 1790, elearning: 920 },
    prixPublicElearning: true,
    voucher: 390,
  },
  {
    slug: 'ccnp-cybersecurity-cbrfir',
    titre: 'CCNP Cybersecurity — CBRFIR',
    titreLong: 'CCNP Cybersecurity : concentration — Conducting Forensic Analysis and Incident Response (CBRFIR 300-215)',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Avancé', duree: '60 heures', dureeJours: 8,
    certification: 'Cisco Certified Network Professional (CCNP) Cybersecurity',
    examCode: '300-215 CBRFIR',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Concentration forensique et réponse à incident : analyse post-incident, collecte de preuves, investigation et remédiation. Associée au CBRCOR, elle délivre le CCNP Cybersecurity.',
    prix: { presentiel: 1790, foad: 1790, elearning: 770 },
    prixPublicElearning: true,
    voucher: 290,
  },
  {
    slug: 'ethical-hacker',
    titre: 'Ethical Hacker',
    titreLong: 'Ethical Hacker — Tests d\'intrusion et sécurité offensive',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Avancé', duree: '30 heures', dureeJours: 4,
    certification: 'Cisco Ethical Hacker Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Méthodologie pentest, Kali Linux, Nmap, Metasploit, Burp Suite et rapport.',
    prix: { presentiel: 1790, foad: 1790, elearning: 310 },
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
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Python from scratch — types, boucles, fonctions, collections, fichiers.',
    prix: { presentiel: 1790, foad: 1790, elearning: 440 },
    prixPublicElearning: true,
    voucher: 69,
  },
  {
    slug: 'python-essentials-2',
    titre: 'Python Essentials 2',
    titreLong: 'Python Essentials 2 — Python avancé et POO (PCAP)',
    editeur: 'Cisco Networking Academy', famille: 'Programmation',
    niveau: 'Intermédiaire', duree: '40 heures', dureeJours: 5,
    certification: 'PCAP — Python Associate (OpenEDG)',
    examCode: 'PCAP-31-03',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'POO, modules, exceptions, générateurs, décorateurs et programmation fonctionnelle.',
    prix: { presentiel: 1790, foad: 1790, elearning: 660 },
    prixPublicElearning: true,
    voucher: 285,
  },
  {
    slug: 'devnet-associate',
    titre: 'CCNA Automation',
    titreLong: 'CCNA Automation — Automatisation réseau Cisco (ex-DevNet)',
    editeur: 'Cisco Networking Academy', famille: 'Programmation',
    niveau: 'Intermédiaire', duree: '50 heures', dureeJours: 6,
    certification: 'Cisco Certified CCNA Automation 200-901',
    examCode: '200-901 CCNAAUTO',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'APIs REST, Python réseau, YANG/NETCONF, Ansible, Terraform et automatisation IA-ready (ex-DevNet, blueprint 2026).',
    prix: { presentiel: 1790, foad: 1790, elearning: 710 },
    prixPublicElearning: true,
    voucher: 290,
  },

  // ── CISCO — IoT ───────────────────────────────────────────────────────────
  {
    slug: 'iot-introduction',
    titre: 'IoT — Introduction',
    titreLong: 'Introduction to IoT — La transformation digitale des industries',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Fondamental', duree: '20 heures', dureeJours: 3,
    certification: 'Certificate of Completion — Introduction to IoT',
    examCode: 'Cisco Networking Academy — Certificate of Completion',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Comprendre l\'IoT et la transformation digitale sans prérequis technique.',
    prix: { presentiel: 1790, foad: 1790, elearning: 260 },
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
    examCode: 'Cisco Networking Academy — Certificate of Completion',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Arduino, Raspberry Pi, MQTT, protocoles IoT et sécurisation des déploiements.',
    prix: { presentiel: 1790, foad: 1790, elearning: 530 },
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
    examCode: 'Cisco Networking Academy — Certificate of Completion',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Collecte, stockage, analyse et visualisation des données IoT avec Python.',
    prix: { presentiel: 1790, foad: 1790, elearning: 530 },
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
    examCode: 'Cisco Networking Academy — Certificate of Completion',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Menaces IoT, cryptographie embarquée, segmentation réseau et audits de sécurité.',
    prix: { presentiel: 1790, foad: 1790, elearning: 480 },
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
    examCode: 'Cisco Networking Academy — Certificate of Completion',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Projet IoT en équipe — design thinking, prototype fonctionnel et pitch jury.',
    prix: { presentiel: 1790, foad: 1790, elearning: 370 },
    prixPublicElearning: true,
    voucher: 0,
  },

  // ── CISCO — Linux & Open Source ───────────────────────────────────────────
  {
    slug: 'linux-essentials',
    titre: 'Linux Essentials',
    titreLong: 'NDG Linux Essentials — Introduction à Linux (LPI 010)',
    editeur: 'Cisco Networking Academy', famille: 'Linux & Open Source',
    niveau: 'Fondamental', duree: '40 heures', dureeJours: 5,
    certification: 'LPI Linux Essentials 010-160',
    examCode: '010-160',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Commandes Linux, gestion des fichiers, utilisateurs, processus et scripts Bash.',
    prix: { presentiel: 1790, foad: 1790, elearning: 480 },
    prixPublicElearning: true,
    voucher: 110,
  },
  {
    slug: 'ndg-linux-1',
    titre: 'NDG Linux I',
    titreLong: 'NDG Linux I — Administration Linux, préparation LPIC-1 (Exam 101)',
    editeur: 'Cisco Networking Academy', famille: 'Linux & Open Source',
    niveau: 'Intermédiaire', duree: '70 heures', dureeJours: 9,
    certification: 'LPIC-1 — Linux Administrator (Exam 101)',
    examCode: '101-500',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Architecture système, installation et gestion de paquets, commandes GNU/Unix, périphériques et systèmes de fichiers. Premier des deux cours vers le LPIC-1.',
    prix: { presentiel: 1790, foad: 1790, elearning: 710 },
    prixPublicElearning: true,
    voucher: 176,
  },
  {
    slug: 'ndg-linux-2',
    titre: 'NDG Linux II',
    titreLong: 'NDG Linux II — Administration Linux, préparation LPIC-1 (Exam 102)',
    editeur: 'Cisco Networking Academy', famille: 'Linux & Open Source',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 9,
    certification: 'LPIC-1 — Linux Administrator (Exam 102)',
    examCode: '102-500',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Shells et scripts, interfaces et bureaux, tâches d\'administration, services système, réseau et sécurité. Second cours vers le LPIC-1. Prérequis : NDG Linux I.',
    prix: { presentiel: 1790, foad: 1790, elearning: 710 },
    prixPublicElearning: true,
    voucher: 176,
  },

  // ── CISCO — Data & Analytics ──────────────────────────────────────────────
  {
    slug: 'data-analytics-essentials',
    titre: 'Data Analytics Essentials',
    titreLong: 'Data Analytics Essentials — Introduction à l\'analyse de données',
    editeur: 'Cisco Networking Academy', famille: 'Data & Analytics',
    niveau: 'Fondamental', duree: '30 heures', dureeJours: 4,
    certification: 'Cisco Data Analytics Essentials Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'SQL, Python Pandas, visualisation et storytelling data sans prérequis avancé.',
    prix: { presentiel: 1790, foad: 1790, elearning: 310 },
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
    modalites: ['Présentiel', 'FOAD'],
    description: 'IaaS, PaaS, SaaS, services Azure principaux, sécurité et tarification cloud.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'az-104',
    titre: 'AZ-104 Azure Administrator',
    titreLong: 'Azure Administrator Associate (AZ-104)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Intermédiaire', duree: '40 heures', dureeJours: 5,
    certification: 'Microsoft Azure Administrator Associate',
    examCode: 'AZ-104',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Entra ID, stockage, VM, VNet, supervision et gouvernance Azure.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'sc-900',
    titre: 'SC-900 Security Fundamentals',
    titreLong: 'Security, Compliance and Identity Fundamentals (SC-900)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Fondamental', duree: '15 heures', dureeJours: 2,
    certification: 'Microsoft Security, Compliance & Identity Fundamentals',
    examCode: 'SC-900',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Zero Trust, Entra ID, Defender, Purview et conformité réglementaire Microsoft.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'ai-901',
    titre: 'AI-901 Azure AI Fundamentals',
    titreLong: 'Azure AI Fundamentals (AI-901)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Fondamental', duree: '15 heures', dureeJours: 2,
    certification: 'Microsoft Azure AI Fundamentals',
    examCode: 'AI-901',
    modalites: ['Présentiel', 'FOAD'],
    description: 'ML, vision, NLP, IA générative et Azure OpenAI Service (AI-901, remplace AI-900).',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'ab-900',
    titre: 'AB-900 Microsoft 365 Copilot',
    titreLong: 'Microsoft 365 Copilot & Agent Administration Fundamentals (AB-900)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Fondamental', duree: '18 heures', dureeJours: 2,
    certification: 'Microsoft Certified: Copilot and Agent Administration Fundamentals',
    examCode: 'AB-900',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Fondamentaux Microsoft 365, Copilot et administration d\'agents IA, sécurité, conformité et gouvernance (AB-900, remplace MS-900).',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'pl-300',
    titre: 'PL-300 Power BI Data Analyst',
    titreLong: 'Microsoft Power BI Data Analyst Associate (PL-300)',
    editeur: 'Microsoft', famille: 'Data & Analytics',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft Certified: Power BI Data Analyst Associate',
    examCode: 'PL-300',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Power Query, modélisation en étoile, DAX, visualisations et déploiement sécurisé de rapports Power BI.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'md-102',
    titre: 'MD-102 Endpoint Administrator',
    titreLong: 'Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft 365 Certified: Endpoint Administrator Associate',
    examCode: 'MD-102',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Intune, Windows Autopilot, conformité, Conditional Access, Defender for Endpoint et gestion des appareils à grande échelle.',
    prix: { presentiel: 2390, foad: 1790, elearning: null },
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
    modalites: ['Présentiel', 'FOAD'],
    description: 'Déploiement, configuration, sécurité et adoption de Microsoft 365 Copilot en entreprise (Teams, SharePoint, DLP, gouvernance).',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'az-802',
    titre: 'AZ-802 Administer Windows Server',
    titreLong: 'Administering Windows Server (AZ-802) — examen unique, remplace AZ-800 et AZ-801',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft Certified — Windows Server Administrator Associate',
    examCode: 'AZ-802',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Administration Windows Server hybride : identité, stockage, calcul, haute disponibilité, migration et reprise d activité.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'ab-650',
    titre: 'AB-650 Microsoft 365 & AI Services',
    titreLong: 'Administering Microsoft 365 and AI Services (AB-650)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft 365 Certified — AI Services Administrator Associate',
    examCode: 'AB-650',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Administration d un tenant Microsoft 365 et des services IA : identité Entra ID, Defender, Purview, Copilot et gouvernance des agents (AB-650, remplace MS-102 retiré le 31/10/2026).',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'sc-300',
    titre: 'SC-300 Identity & Access Administrator',
    titreLong: 'Microsoft Identity and Access Administrator (SC-300)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '28 heures', dureeJours: 4,
    certification: 'Microsoft Certified — Identity and Access Administrator Associate',
    examCode: 'SC-300',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Gestion des identités et des accès avec Microsoft Entra ID : authentification, gouvernance, accès conditionnel et identités externes.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'sc-401',
    titre: 'SC-401 Information Security Administrator',
    titreLong: 'Administer Information Security in Microsoft 365 (SC-401)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '28 heures', dureeJours: 4,
    certification: 'Microsoft Certified — Information Security Administrator Associate',
    examCode: 'SC-401',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Protection des informations sensibles avec Microsoft Purview à l ère de l IA : étiquettes, DLP, chiffrement et gestion des risques internes.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'sc-500',
    titre: 'SC-500 Cloud & AI Security Engineer',
    titreLong: 'Cloud and AI Security Engineer (SC-500)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Avancé', duree: '28 heures', dureeJours: 4,
    certification: 'Microsoft Certified — Cloud and AI Security Engineer Associate',
    examCode: 'SC-500',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Sécurisation des charges cloud et des services IA : Defender for Cloud, protection des workloads, sécurité des agents et de Copilot, gouvernance des données IA (nouvelle certification 2026).',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },

  {
    slug: 'pl-7002',
    titre: 'PL-7002 Power Automate',
    titreLong: 'Applied Skills — Automatiser des processus avec Power Automate (PL-7002)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Fondamental', duree: '7 heures', dureeJours: 1,
    certification: 'Microsoft Applied Skills (évaluation en lab Microsoft Learn)',
    examCode: 'PL-7002',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Créer et gérer des processus automatisés avec Power Automate : flux cloud, connecteurs, approbations et intégration Microsoft 365.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'pl-7008',
    titre: 'PL-7008 Copilot Studio',
    titreLong: 'Applied Skills — Créer des agents avec Copilot Studio (PL-7008)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '7 heures', dureeJours: 1,
    certification: 'Microsoft Applied Skills (évaluation en lab Microsoft Learn)',
    examCode: 'PL-7008',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Créer des agents dans Microsoft Copilot Studio : sujets, actions, connaissances, déploiement et gouvernance des agents IA.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'ms-4017',
    titre: 'MS-4017 Étendre Microsoft 365 Copilot',
    titreLong: 'Applied Skills — Gérer et étendre Microsoft 365 Copilot (MS-4017)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '7 heures', dureeJours: 1,
    certification: 'Microsoft Applied Skills (évaluation en lab Microsoft Learn)',
    examCode: 'MS-4017',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Gérer et étendre Microsoft 365 Copilot : agents déclaratifs, connecteurs Graph, extensibilité et personnalisation.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
  {
    slug: 'az-1008',
    titre: 'AZ-1008 Active Directory DS',
    titreLong: 'Applied Skills — Administrer Active Directory Domain Services (AZ-1008)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Intermédiaire', duree: '7 heures', dureeJours: 1,
    certification: 'Microsoft Applied Skills (évaluation en lab Microsoft Learn)',
    examCode: 'AZ-1008',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Administrer Active Directory Domain Services : domaines, OU, GPO, réplication et sécurisation de l annuaire.',
    prix: { presentiel: 1790, foad: 1790, elearning: null },
  },
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
 *  - FOAD               → sur devis, le coût dépend de la taille du groupe
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
  "Comprend l'accès à la plateforme, les supports officiels, le tutorat, le suivi individuel " +
  "et le titre officiel de l'éditeur : certificat et badge Cisco Networking Academy, ou voucher " +
  "d'examen surveillé (Pearson VUE, Certiport) lorsque la certification en requiert un. " +
  "Aucun frais supplémentaire pour la première présentation à l'examen."

/** Mention courte, pour les listes et le calendrier */
export const MENTION_PRIX_COURTE =
  "Prix total à payer, par personne — TVA non applicable, art. 261-4-4°-a du CGI."
