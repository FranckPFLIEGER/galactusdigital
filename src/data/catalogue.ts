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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },

  {
    slug: 'ccnp-enterprise',
    titre: 'CCNP Enterprise',
    titreLong: 'CCNP Enterprise — ENCOR 350-401 + ENARSI 300-410',
    editeur: 'Cisco Networking Academy', famille: 'Réseaux & CCNA',
    niveau: 'Avancé', duree: '90 heures', dureeJours: 12,
    certification: 'Cisco Certified Network Professional (CCNP) Enterprise',
    examCode: '350-401 ENCOR + 300-410 ENARSI',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Routage avancé, OSPF, EIGRP, BGP, MPLS, DMVPN, sécurité et automatisation d entreprise. Niveau professionnel.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },

  // ── CISCO — Cybersécurité ──────────────────────────────────────────────────
  {
    slug: 'ccnp-security',
    titre: 'CCNP Security',
    titreLong: 'CCNP Security — SCOR 350-701 v2.0',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Avancé', duree: '80 heures', dureeJours: 10,
    certification: 'Cisco Certified Network Professional (CCNP) Security',
    examCode: '350-701 SCOR v2.0',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Sécurité réseau et cloud, VPN, Cisco ISE, Secure Firewall, endpoint, plus vulnérabilités IA/LLM et cryptographie post-quantique. Niveau professionnel.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'cyberops',
    titre: 'CCNA Cybersecurity',
    titreLong: 'CCNA Cybersecurity — Opérations de cybersécurité SOC (ex-CyberOps)',
    editeur: 'Cisco Networking Academy', famille: 'Cybersécurité',
    niveau: 'Intermédiaire', duree: '60 heures', dureeJours: 8,
    certification: 'Cisco Certified CCNA Cybersecurity 200-201',
    examCode: '200-201 CBROPS v1.2',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Formation SOC complète — surveillance réseau, forensique, réponse aux incidents et IA appliquée à la détection (ex-CyberOps, blueprint 2026).',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'devnet-associate',
    titre: 'CCNA Automation',
    titreLong: 'CCNA Automation — Automatisation réseau Cisco (ex-DevNet)',
    editeur: 'Cisco Networking Academy', famille: 'Programmation',
    niveau: 'Intermédiaire', duree: '50 heures', dureeJours: 6,
    certification: 'Cisco Certified CCNA Automation 200-901',
    examCode: '200-901 CCNAAUTO',
    modalites: ['Présentiel', 'FOAD'],
    description: 'APIs REST, Python réseau, YANG/NETCONF, Ansible, Terraform et automatisation IA-ready (ex-DevNet, blueprint 2026).',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'iot-security',
    titre: 'IoT — Security',
    titreLong: 'IoT Fundamentals — IoT Security',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Avancé', duree: '60 heures', dureeJours: 8,
    certification: 'Certificate of Completion — IoT Fundamentals: IoT Security',
    examCode: 'Cisco Networking Academy — Certificate of Completion',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Menaces IoT, cryptographie embarquée, segmentation réseau et audits de sécurité.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'iot-hackathon',
    titre: 'IoT — Hackathon',
    titreLong: 'IoT Fundamentals — Hackathon Playbook',
    editeur: 'Cisco Networking Academy', famille: 'IoT',
    niveau: 'Avancé', duree: '40 heures', dureeJours: 5,
    certification: 'Certificate of Completion — IoT Fundamentals: Hackathon Playbook',
    examCode: 'Cisco Networking Academy — Certificate of Completion',
    modalites: ['Présentiel', 'FOAD'],
    description: 'Projet IoT en équipe — design thinking, prototype fonctionnel et pitch jury.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    titre: 'AI-901 Azure AI Fundamentals',
    titreLong: 'Azure AI Fundamentals (AI-901)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Fondamental', duree: '15 heures', dureeJours: 2,
    certification: 'Microsoft Azure AI Fundamentals',
    examCode: 'AI-901',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'ML, vision, NLP, IA générative et Azure OpenAI Service (AI-901, remplace AI-900).',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'ms-900',
    titre: 'AB-900 Microsoft 365 Copilot',
    titreLong: 'Microsoft 365 Copilot & Agent Administration Fundamentals (AB-900)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Fondamental', duree: '18 heures', dureeJours: 2,
    certification: 'Microsoft Certified: Copilot and Agent Administration Fundamentals',
    examCode: 'AB-900',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Fondamentaux Microsoft 365, Copilot et administration d\'agents IA, sécurité, conformité et gouvernance (AB-900, remplace MS-900).',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'pl-300',
    titre: 'PL-300 Power BI Data Analyst',
    titreLong: 'Microsoft Power BI Data Analyst Associate (PL-300)',
    editeur: 'Microsoft', famille: 'Data & Analytics',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft Certified: Power BI Data Analyst Associate',
    examCode: 'PL-300',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Power Query, modélisation en étoile, DAX, visualisations et déploiement sécurisé de rapports Power BI.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'md-102',
    titre: 'MD-102 Endpoint Administrator',
    titreLong: 'Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft 365 Certified: Endpoint Administrator Associate',
    examCode: 'MD-102',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Intune, Windows Autopilot, conformité, Conditional Access, Defender for Endpoint et gestion des appareils à grande échelle.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'ms-4010',
    titre: 'MS-4010 Copilot Specialist',
    titreLong: 'Microsoft 365 Copilot Specialist (MS-4010)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '21 heures', dureeJours: 3,
    certification: 'Microsoft 365 Copilot Specialist',
    examCode: 'MS-4010',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Déploiement, configuration, sécurité et adoption de Microsoft 365 Copilot en entreprise (Teams, SharePoint, DLP, gouvernance).',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'az-802',
    titre: 'AZ-802 Administer Windows Server',
    titreLong: 'Administer Windows Server Hybrid Core Infrastructure (AZ-802)',
    editeur: 'Microsoft', famille: 'Azure & Cloud',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft Certified — Windows Server Hybrid Administrator (partie AZ-802)',
    examCode: 'AZ-802',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Administration Windows Server hybride : identité, stockage, calcul, haute disponibilité, migration et reprise d activité.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'ms-102',
    titre: 'MS-102 Microsoft 365 Administrator',
    titreLong: 'Microsoft 365 Administrator (MS-102)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '35 heures', dureeJours: 5,
    certification: 'Microsoft 365 Certified — Administrator Expert',
    examCode: 'MS-102',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Administration d un tenant Microsoft 365 : identité Entra ID, sécurité, conformité, gestion des services et déploiement.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'sc-300',
    titre: 'SC-300 Identity & Access Administrator',
    titreLong: 'Microsoft Identity and Access Administrator (SC-300)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '28 heures', dureeJours: 4,
    certification: 'Microsoft Certified — Identity and Access Administrator Associate',
    examCode: 'SC-300',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Gestion des identités et des accès avec Microsoft Entra ID : authentification, gouvernance, accès conditionnel et identités externes.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
  },
  {
    slug: 'sc-401',
    titre: 'SC-401 Information Security Administrator',
    titreLong: 'Administer Information Security in Microsoft 365 (SC-401)',
    editeur: 'Microsoft', famille: 'Microsoft 365',
    niveau: 'Intermédiaire', duree: '28 heures', dureeJours: 4,
    certification: 'Microsoft Certified — Information Security Administrator Associate',
    examCode: 'SC-401',
    modalites: ['Présentiel', 'FOAD', 'E-learning'],
    description: 'Protection des informations sensibles avec Microsoft Purview à l ère de l IA : étiquettes, DLP, chiffrement et gestion des risques internes.',
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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
    prix: { presentiel: 1790, foad: 1790, elearning: 490 },
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

/** Retourne une formation par son slug (ou undefined) */
export function getFormationBySlug(slug: string): Formation | undefined {
  return FORMATIONS.find(f => f.slug === slug)
}

/**
 * Tarifs par modalité pour l'affichage fiche.
 * Règle commerciale : le prix e-learning est affiché tel quel ;
 * Présentiel et FOAD sont "Sur devis". Une modalité non proposée
 * par la formation n'est pas retournée.
 */
export interface TarifModalite {
  modalite: Modalite
  label: string
  valeur: string
  surDevis: boolean
}

export function getTarifsModalites(f: Formation): TarifModalite[] {
  const LABELS: Record<Modalite, string> = {
    'Présentiel':  'Présentiel',
    'FOAD':        'FOAD synchrone',
    'E-learning':  'E-learning tutoré',
  }
  return f.modalites.map(m => {
    return {
      modalite: m,
      label: LABELS[m],
      valeur: 'Sur devis',
      surDevis: true,
    }
  })
}
