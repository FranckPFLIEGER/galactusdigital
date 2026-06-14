// ─────────────────────────────────────────────────────────────────────────────
// catalogue.ts — Source unique de vérité pour toutes les formations Galactus
// Importé par : Header, Footer, presentiel, foad, elearning, calendrier
// Pour ajouter une formation : ajouter une entrée dans FORMATIONS[]
// Pour ajouter un prix : renseigner le champ `prix` de la session concernée
// ─────────────────────────────────────────────────────────────────────────────

export type Modalite = 'Présentiel' | 'FOAD' | 'E-learning'
export type Territoire = 'Martinique' | 'Guadeloupe' | 'Paris' | 'Tous territoires'
export type Niveau = 'Fondamental' | 'Intermédiaire' | 'Avancé'

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
  // Prix par modalité (€ HT, null = sur demande)
  prix: {
    presentiel: number | null
    foad: number | null
    elearning: number | null
  }
}

// ─── Familles pour l'affichage groupé ────────────────────────────────────────
export const FAMILLES: Record<string, { label: string; icon: string }> = {
  'Réseaux & CCNA':        { label: 'Réseaux & CCNA',        icon: 'Network'  },
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
// CATALOGUE PRINCIPAL — 22 formations
// prix: null = sur demande / 0 = inclus dans pack / nombre = tarif public HT €
// ─────────────────────────────────────────────────────────────────────────────
export const FORMATIONS: Formation[] = [

  // ── CISCO — Réseaux & CCNA ─────────────────────────────────────────────────
  {
    slug: 'networking-essentials',
    titre: 'Networking Essentials',
    titreLong: 'Networking Essentials — Fondamentaux des réseaux',
    editeur: 'Cisco Networking Academy', famille: 'Réseaux & CCNA',
    niveau: 'Fondamental', duree: '35 heures', dureeJours: 4,
    certification: 'Cisco Networking Essentials Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Introduction complète aux réseaux sans prérequis. Base recommandée avant le cursus CCNA.',
    prix: { presentiel: 1790, foad: 1790, elearning: 390 },
  },
  {
    slug: 'ccna-itn',
    titre: 'CCNA — ITN (1/3)',
    titreLong: 'CCNA Introduction aux réseaux (Module 1/3)',
    editeur: 'Cisco Networking Academy', famille: 'Réseaux & CCNA',
    niveau: 'Fondamental', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNA 200-301',
    examCode: '200-301',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Premiers modules du cursus CCNA officiel — OSI, TCP/IP, IPv4, IPv6, CLI Cisco.',
    prix: { presentiel: 1790, foad: 1790, elearning: 590 },
  },
  {
    slug: 'ccna-srwe',
    titre: 'CCNA — SRWE (2/3)',
    titreLong: 'CCNA Commutation, Routage et Wi-Fi (Module 2/3)',
    editeur: 'Cisco Networking Academy', famille: 'Réseaux & CCNA',
    niveau: 'Intermédiaire', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNA 200-301',
    examCode: '200-301',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'VLANs, STP, EtherChannel, DHCP, Wi-Fi 802.11 et routage statique avancé.',
    prix: { presentiel: 1790, foad: 1790, elearning: 590 },
  },
  {
    slug: 'ccna-ensa',
    titre: 'CCNA — ENSA (3/3)',
    titreLong: 'CCNA Réseaux d\'entreprise, Sécurité et Automatisation (Module 3/3)',
    editeur: 'Cisco Networking Academy', famille: 'Réseaux & CCNA',
    niveau: 'Avancé', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco CCNA 200-301',
    examCode: '200-301',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'OSPF, ACL, NAT, VPN, SDN et automatisation réseau. Dernier module avant l\'examen CCNA.',
    prix: { presentiel: 1790, foad: 1790, elearning: 590 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 390 },
  },
  {
    slug: 'cyberops',
    titre: 'CyberOps Associate',
    titreLong: 'CyberOps Associate — Opérations de cybersécurité SOC',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Intermédiaire', duree: '60 heures', dureeJours: 8,
    certification: 'Cisco CyberOps Associate 200-201',
    examCode: '200-201 CBROPS',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Formation SOC complète — surveillance réseau, forensique, réponse aux incidents.',
    prix: { presentiel: 1790, foad: 1790, elearning: 590 },
  },
  {
    slug: 'ethical-hacker',
    titre: 'Ethical Hacker',
    titreLong: 'Ethical Hacker — Tests d\'intrusion et sécurité offensive',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Avancé', duree: '30 heures', dureeJours: 4,
    certification: 'Cisco Ethical Hacker Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Méthodologie pentest, Kali Linux, Nmap, Metasploit, Burp Suite et rapport.',
    prix: { presentiel: 1790, foad: 1790, elearning: 390 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 290 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 290 },
  },
  {
    slug: 'devnet-associate',
    titre: 'DevNet Associate',
    titreLong: 'DevNet Associate — Automatisation réseau Cisco',
    editeur: 'Cisco Networking Academy', famille: 'Programmation',
    niveau: 'Intermédiaire', duree: '50 heures', dureeJours: 6,
    certification: 'Cisco DevNet Associate 200-901',
    examCode: '200-901 DEVASC',
    modalites: ['Présentiel', 'FOAD'],
    description: 'APIs REST, Python réseau, YANG/NETCONF, Ansible et CI/CD pour le réseau.',
    prix: { presentiel: 1790, foad: 1790, elearning: 590 },
  },

  // ── CISCO — IoT ───────────────────────────────────────────────────────────
  {
    slug: 'iot-introduction',
    titre: 'IoT — Introduction',
    titreLong: 'Introduction à l\'IoT et à la Transformation Digitale',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Fondamental', duree: '20 heures', dureeJours: 3,
    certification: 'Cisco IoT Introduction Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Comprendre l\'IoT et la transformation digitale sans prérequis technique.',
    prix: { presentiel: 1790, foad: 1790, elearning: 390 },
  },
  {
    slug: 'iot-connecting-things',
    titre: 'IoT — Connecting Things',
    titreLong: 'IoT Fundamentals — Connecting Things (1/3)',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Intermédiaire', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco IoT Connecting Things Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Arduino, Raspberry Pi, MQTT, protocoles IoT et sécurisation des déploiements.',
    prix: { presentiel: 1790, foad: 1790, elearning: 390 },
  },
  {
    slug: 'iot-big-data-analytics',
    titre: 'IoT — Big Data & Analytics',
    titreLong: 'IoT Fundamentals — Big Data & Analytics (2/3)',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Intermédiaire', duree: '70 heures', dureeJours: 9,
    certification: 'Cisco IoT Big Data & Analytics Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Collecte, stockage, analyse et visualisation des données IoT avec Python.',
    prix: { presentiel: 1790, foad: 1790, elearning: 390 },
  },
  {
    slug: 'iot-security',
    titre: 'IoT — Security',
    titreLong: 'IoT Fundamentals — IoT Security',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Avancé', duree: '60 heures', dureeJours: 8,
    certification: 'Cisco IoT Security Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Menaces IoT, cryptographie embarquée, segmentation réseau et audits de sécurité.',
    prix: { presentiel: 1790, foad: 1790, elearning: 390 },
  },
  {
    slug: 'iot-hackathon',
    titre: 'IoT — Hackathon',
    titreLong: 'IoT Fundamentals — Hackathon Playbook (3/3)',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Avancé', duree: '40 heures', dureeJours: 5,
    certification: 'Cisco IoT Hackathon Certificat',
    examCode: 'Certificat Cisco Networking Academy',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Projet IoT en équipe — design thinking, prototype fonctionnel et pitch jury.',
    prix: { presentiel: 1790, foad: 1790, elearning: 390 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 290 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 290 },
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
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'IaaS, PaaS, SaaS, services Azure principaux, sécurité et tarification cloud.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'az-104',
    titre: 'AZ-104 Azure Administrator',
    titreLong: 'Azure Administrator Associate (AZ-104)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Intermédiaire', duree: '40 heures', dureeJours: 5,
    certification: 'Microsoft Azure Administrator Associate',
    examCode: 'AZ-104',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Entra ID, stockage, VM, VNet, supervision et gouvernance Azure.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'sc-900',
    titre: 'SC-900 Security Fundamentals',
    titreLong: 'Security, Compliance and Identity Fundamentals (SC-900)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Fondamental', duree: '15 heures', dureeJours: 2,
    certification: 'Microsoft Security, Compliance & Identity Fundamentals',
    examCode: 'SC-900',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Zero Trust, Entra ID, Defender, Purview et conformité réglementaire Microsoft.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'ai-900',
    titre: 'AI-900 Azure AI Fundamentals',
    titreLong: 'Azure AI Fundamentals (AI-900)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Fondamental', duree: '15 heures', dureeJours: 2,
    certification: 'Microsoft Azure AI Fundamentals',
    examCode: 'AI-900',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'ML, vision, NLP, IA générative et Azure OpenAI Service.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'ms-900',
    titre: 'MS-900 Microsoft 365',
    titreLong: 'Microsoft 365 Fundamentals (MS-900)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Fondamental', duree: '18 heures', dureeJours: 2,
    certification: 'Microsoft 365 Fundamentals',
    examCode: 'MS-900',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Teams, Exchange, SharePoint, Intune, sécurité M365 et licences.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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

/** Formate un prix ou retourne "Sur demande" */
export function formatPrix(prix: number | null): string {
  if (prix === null) return 'Sur demande'
  if (prix === 0) return 'Inclus'
  return `${prix.toLocaleString('fr-FR')} € HT`
}
