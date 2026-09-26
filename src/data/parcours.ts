// ─────────────────────────────────────────────────────────────────────────────
// parcours.ts — Parcours métier, version « reconversion »
// Postulat : la personne qui arrive n'a aucune culture informatique.
// Chaque parcours démarre par un BLOC 0 sans aucun prérequis, puis progresse
// par blocs jusqu'à la certification métier.
//
// Les slugs pointent vers /formations/{slug} et existent tous dans catalogue.ts.
// Importé par : components/ParcoursMetier.tsx
//
// MAJ septembre 2026 — CCNP Security retiré du catalogue. Le Bloc 3 du parcours
// Cybersécurité est reconstruit autour du CCNP Cybersecurity (CBRCOR + CBRFIR),
// suite directe du CCNA Cybersecurity, avec Ethical Hacker en voie offensive.
// ─────────────────────────────────────────────────────────────────────────────

export interface EtapeParcours {
  titre: string
  slug: string
  heures: number
  /** true = formation socle nouvellement ajoutée au catalogue */
  nouveau?: boolean
  /** Mention de mise à jour éditeur (nouveau blueprint, renommage, remplacement) */
  maj?: string
}

export interface BlocParcours {
  rang: 0 | 1 | 2 | 3
  titre: string
  intention: string
  etapes: EtapeParcours[]
}

export interface Parcours {
  id: string
  titre: string
  couleur: string
  pitch: string
  /** Conditions d'entrée, affichées en clair */
  entree: string
  blocs: BlocParcours[]
  debouche: string
}

export const PARCOURS: Parcours[] = [
  {
    id: 'support-helpdesk',
    titre: 'Support informatique & Helpdesk',
    couleur: '#E41F26',
    pitch: 'La porte d\'entrée la plus courte vers un premier emploi IT. Aucun prérequis, une certification reconnue au bout.',
    entree: 'Ouvert à toute personne en reconversion, sans expérience informatique.',
    blocs: [
      {
        rang: 0,
        titre: 'Bloc 0 — Se remettre à niveau',
        intention: 'Prendre en main un poste de travail et le vocabulaire du métier.',
        etapes: [
          { titre: 'Sensibilisation au numérique', slug: 'sensibilisation-numerique', heures: 6, nouveau: true },
          { titre: 'Utilisation d\'ordinateurs et de mobiles', slug: 'utilisation-ordinateurs-mobiles', heures: 6, nouveau: true },
          { titre: 'Les bases du matériel informatique', slug: 'bases-materiel-informatique', heures: 6, nouveau: true },
        ],
      },
      {
        rang: 1,
        titre: 'Bloc 1 — Le métier',
        intention: 'Tenir un poste de support de niveau 1 et décrocher une certification.',
        etapes: [
          { titre: 'Essentiels du support informatique (CCST IT Support)', slug: 'support-informatique-essentiels', heures: 56, nouveau: true },
        ],
      },
      {
        rang: 2,
        titre: 'Bloc 2 — Aller plus loin',
        intention: 'Élargir vers le matériel et le réseau pour évoluer en technicien.',
        etapes: [
          { titre: 'IT Essentials (CompTIA A+)', slug: 'it-essentials', heures: 70, nouveau: true },
          { titre: 'Networking Essentials', slug: 'networking-essentials', heures: 35 },
        ],
      },
    ],
    debouche: 'Technicien support / helpdesk, technicien de proximité, assistant technique',
  },
  {
    id: 'reseaux-infrastructure',
    titre: 'Réseaux & Infrastructure',
    couleur: '#1D1D1B',
    pitch: 'Le socle universellement reconnu, du câblage au réseau d\'entreprise piloté par l\'IA.',
    entree: 'Ouvert sans prérequis via le Bloc 0. Les profils déjà techniques démarrent au Bloc 1 après positionnement.',
    blocs: [
      {
        rang: 0,
        titre: 'Bloc 0 — Se remettre à niveau',
        intention: 'Poste de travail, systèmes d\'exploitation et premiers réseaux.',
        etapes: [
          { titre: 'Sensibilisation au numérique', slug: 'sensibilisation-numerique', heures: 6, nouveau: true },
          { titre: 'Les bases du matériel informatique', slug: 'bases-materiel-informatique', heures: 6, nouveau: true },
          { titre: 'Operating System Basics', slug: 'operating-system-basics', heures: 12, nouveau: true },
          { titre: 'Notions de base sur les réseaux', slug: 'notions-base-reseaux', heures: 22, nouveau: true },
        ],
      },
      {
        rang: 1,
        titre: 'Bloc 1 — Les fondamentaux réseau',
        intention: 'Comprendre une architecture réseau et la manipuler en Packet Tracer.',
        etapes: [{ titre: 'Networking Essentials', slug: 'networking-essentials', heures: 35 }],
      },
      {
        rang: 2,
        titre: 'Bloc 2 — CCNA',
        intention: 'Le référentiel d\'entrée du marché, en trois modules.',
        etapes: [
          { titre: 'CCNAv2 — ITN (1/3)', slug: 'ccna-itn', heures: 70 },
          { titre: 'CCNAv2 — SRWE (2/3)', slug: 'ccna-srwe', heures: 70 },
          { titre: 'CCNAv2 — ENSA (3/3)', slug: 'ccna-ensa', heures: 70 },
        ],
      },
      {
        rang: 3,
        titre: 'Bloc 3 — Niveau professionnel',
        intention: 'Passer d\'exécutant à concepteur d\'infrastructure. RS en cours d\'enregistrement.',
        etapes: [
          { titre: 'CCNP Enterprise — ENCOR', slug: 'ccnp-encor', heures: 70, maj: 'Blueprint v9' },
          { titre: 'CCNP Enterprise — ENARSI', slug: 'ccnp-enarsi', heures: 70, maj: 'Blueprint v9' },
        ],
      },
    ],
    debouche: 'Technicien réseau, administrateur infrastructure, ingénieur réseau',
  },
  {
    id: 'cybersecurite',
    titre: 'Cybersécurité',
    couleur: '#E41F26',
    pitch: 'Un des axes les plus porteurs en salaire : défense, SOC et sécurité offensive.',
    entree: 'Ouvert sans prérequis via le Bloc 0. Un socle réseau reste indispensable avant le SOC.',
    blocs: [
      {
        rang: 0,
        titre: 'Bloc 0 — Se remettre à niveau',
        intention: 'Découvrir la menace, le poste de travail et le réseau avant d\'aborder la défense.',
        etapes: [
          { titre: 'Introduction à la cybersécurité', slug: 'introduction-cybersecurite', heures: 6, nouveau: true },
          { titre: 'Les bases du matériel informatique', slug: 'bases-materiel-informatique', heures: 6, nouveau: true },
          { titre: 'Operating System Basics', slug: 'operating-system-basics', heures: 12, nouveau: true },
          { titre: 'Notions de base sur les réseaux', slug: 'notions-base-reseaux', heures: 22, nouveau: true },
        ],
      },
      {
        rang: 1,
        titre: 'Bloc 1 — Le socle défensif',
        intention: 'Réseau puis principes de sécurité : la séquence exigée par le blueprint Cisco.',
        etapes: [
          { titre: 'Networking Essentials', slug: 'networking-essentials', heures: 35 },
          { titre: 'Cybersecurity Essentials', slug: 'cybersecurity-essentials', heures: 30 },
        ],
      },
      {
        rang: 2,
        titre: 'Bloc 2 — Analyste SOC',
        intention: 'Surveillance, forensique et réponse à incident.',
        etapes: [{ titre: 'CCNA Cybersecurity', slug: 'cyberops', heures: 60, maj: 'Ex-CyberOps Associate · blueprint v1.2' }],
      },
      {
        rang: 3,
        titre: 'Bloc 3 — Niveau professionnel',
        intention: 'Monter au niveau professionnel du SOC, ou bifurquer vers la sécurité offensive.',
        etapes: [
          { titre: 'CCNP Cybersecurity — CBRCOR (cœur)', slug: 'ccnp-cybersecurity-cbrcor', heures: 70, nouveau: true, maj: 'Ex-CyberOps Professional' },
          { titre: 'CCNP Cybersecurity — CBRFIR (concentration)', slug: 'ccnp-cybersecurity-cbrfir', heures: 60, nouveau: true },
          { titre: 'Ethical Hacker — voie offensive', slug: 'ethical-hacker', heures: 30 },
        ],
      },
    ],
    debouche: 'Analyste SOC, analyste forensique, responsable réponse à incident, pentester',
  },
  {
    id: 'automatisation-ia-reseau',
    titre: 'Automatisation & IA réseau',
    couleur: '#1D1D1B',
    pitch: 'Le virage 2026 : d\'ici 2027, l\'essentiel des opérations réseau sera automatisé.',
    entree: 'Ouvert sans prérequis via le Bloc 0. Aucune expérience du code n\'est demandée.',
    blocs: [
      {
        rang: 0,
        titre: 'Bloc 0 — Se remettre à niveau',
        intention: 'Comprendre le numérique, l\'IA et le réseau avant la première ligne de code.',
        etapes: [
          { titre: 'Sensibilisation au numérique', slug: 'sensibilisation-numerique', heures: 6, nouveau: true },
          { titre: 'Introduction à l\'IA moderne', slug: 'introduction-ia-moderne', heures: 6, nouveau: true },
          { titre: 'Notions de base sur les réseaux', slug: 'notions-base-reseaux', heures: 22, nouveau: true },
        ],
      },
      {
        rang: 1,
        titre: 'Bloc 1 — Réseau et code',
        intention: 'Les deux jambes du métier, menées en parallèle.',
        etapes: [
          { titre: 'Networking Essentials', slug: 'networking-essentials', heures: 35 },
          { titre: 'Python Essentials 1', slug: 'python-essentials-1', heures: 40 },
        ],
      },
      {
        rang: 2,
        titre: 'Bloc 2 — Consolidation',
        intention: 'Programmation objet et fondamentaux CCNA.',
        etapes: [
          { titre: 'Python Essentials 2', slug: 'python-essentials-2', heures: 40 },
          { titre: 'CCNAv2 — ITN (1/3)', slug: 'ccna-itn', heures: 70 },
        ],
      },
      {
        rang: 3,
        titre: 'Bloc 3 — Automatisation',
        intention: 'APIs, YANG/NETCONF, Ansible, Terraform et pipelines IA-ready.',
        etapes: [{ titre: 'CCNA Automation (ex-DevNet)', slug: 'devnet-associate', heures: 50, maj: 'Ex-DevNet · blueprint 2026' }],
      },
    ],
    debouche: 'Ingénieur automatisation, NetDevOps, développeur réseau',
  },
  {
    id: 'cloud-azure',
    titre: 'Cloud & Infrastructure Azure',
    couleur: '#E41F26',
    pitch: 'Administrer le cloud Azure et l\'infrastructure serveur de bout en bout.',
    entree: 'Ouvert sans prérequis via le Bloc 0.',
    blocs: [
      {
        rang: 0,
        titre: 'Bloc 0 — Se remettre à niveau',
        intention: 'Systèmes et réseau : sans eux, le cloud reste abstrait.',
        etapes: [
          { titre: 'Sensibilisation au numérique', slug: 'sensibilisation-numerique', heures: 6, nouveau: true },
          { titre: 'Operating System Basics', slug: 'operating-system-basics', heures: 12, nouveau: true },
          { titre: 'Notions de base sur les réseaux', slug: 'notions-base-reseaux', heures: 22, nouveau: true },
        ],
      },
      {
        rang: 1,
        titre: 'Bloc 1 — Fondamentaux cloud',
        intention: 'Vocabulaire, modèles de service et tarification.',
        etapes: [{ titre: 'AZ-900 Azure Fundamentals', slug: 'az-900', heures: 20 }],
      },
      {
        rang: 2,
        titre: 'Bloc 2 — Administration',
        intention: 'Le cœur du métier d\'administrateur Azure.',
        etapes: [{ titre: 'AZ-104 Azure Administrator', slug: 'az-104', heures: 40 }],
      },
      {
        rang: 3,
        titre: 'Bloc 3 — Infrastructure hybride',
        intention: 'Serveurs et annuaire : la réalité des SI d\'entreprise.',
        etapes: [
          { titre: 'AZ-802 Administer Windows Server', slug: 'az-802', heures: 35, maj: 'Remplace AZ-800 et AZ-801' },
          { titre: 'AZ-1008 Active Directory DS', slug: 'az-1008', heures: 7 },
        ],
      },
    ],
    debouche: 'Administrateur Azure, administrateur systèmes, ingénieur infrastructure',
  },
  {
    id: 'modern-workplace',
    titre: 'Modern Workplace Microsoft 365',
    couleur: '#1D1D1B',
    pitch: 'Déployer et sécuriser le poste de travail moderne et le tenant M365.',
    entree: 'Ouvert sans prérequis via le Bloc 0. Adapté aux profils bureautique en reconversion.',
    blocs: [
      {
        rang: 0,
        titre: 'Bloc 0 — Se remettre à niveau',
        intention: 'Poste de travail et systèmes vus cette fois côté administrateur.',
        etapes: [
          { titre: 'Sensibilisation au numérique', slug: 'sensibilisation-numerique', heures: 6, nouveau: true },
          { titre: 'Utilisation d\'ordinateurs et de mobiles', slug: 'utilisation-ordinateurs-mobiles', heures: 6, nouveau: true },
          { titre: 'Operating System Basics', slug: 'operating-system-basics', heures: 12, nouveau: true },
        ],
      },
      {
        rang: 1,
        titre: 'Bloc 1 — Fondamentaux M365 & Copilot',
        intention: 'Le tenant, les services et l\'IA générative en entreprise.',
        etapes: [{ titre: 'AB-900 Microsoft 365 Copilot', slug: 'ab-900', heures: 18, maj: 'Remplace MS-900' }],
      },
      {
        rang: 2,
        titre: 'Bloc 2 — Gestion du parc',
        intention: 'Intune, Autopilot, conformité et accès conditionnel.',
        etapes: [{ titre: 'MD-102 Endpoint Administrator', slug: 'md-102', heures: 35 }],
      },
      {
        rang: 3,
        titre: 'Bloc 3 — Administration du tenant',
        intention: 'Identité, Defender, Purview et gouvernance des agents IA.',
        etapes: [{ titre: 'AB-650 Microsoft 365 & AI Services', slug: 'ab-650', heures: 35, maj: 'Remplace MS-102' }],
      },
    ],
    debouche: 'Administrateur Microsoft 365, endpoint administrator, admin collaboratif',
  },
  {
    id: 'securite-microsoft',
    titre: 'Sécurité Microsoft',
    couleur: '#E41F26',
    pitch: 'Le parcours sécurité officiel Microsoft : identité, accès et protection des données.',
    entree: 'Ouvert sans prérequis via le Bloc 0.',
    blocs: [
      {
        rang: 0,
        titre: 'Bloc 0 — Se remettre à niveau',
        intention: 'Comprendre la menace et le système avant d\'aborder les outils Microsoft.',
        etapes: [
          { titre: 'Introduction à la cybersécurité', slug: 'introduction-cybersecurite', heures: 6, nouveau: true },
          { titre: 'Operating System Basics', slug: 'operating-system-basics', heures: 12, nouveau: true },
          { titre: 'Notions de base sur les réseaux', slug: 'notions-base-reseaux', heures: 22, nouveau: true },
        ],
      },
      {
        rang: 1,
        titre: 'Bloc 1 — Fondamentaux sécurité',
        intention: 'Zero Trust, Entra ID, Defender, Purview et conformité.',
        etapes: [{ titre: 'SC-900 Security Fundamentals', slug: 'sc-900', heures: 15 }],
      },
      {
        rang: 2,
        titre: 'Bloc 2 — Identité et information',
        intention: 'Les deux briques les plus demandées sur le marché.',
        etapes: [
          { titre: 'SC-300 Identity & Access Administrator', slug: 'sc-300', heures: 28 },
          { titre: 'SC-401 Information Security Administrator', slug: 'sc-401', heures: 28, maj: 'Nouveau 2026' },
        ],
      },
      {
        rang: 3,
        titre: 'Bloc 3 — Cloud & IA',
        intention: 'Sécuriser les charges cloud, les agents et Copilot.',
        etapes: [{ titre: 'SC-500 Cloud & AI Security Engineer', slug: 'sc-500', heures: 28, maj: 'Nouveau 2026' }],
      },
    ],
    debouche: 'Administrateur identité, ingénieur sécurité, référent conformité',
  },
  {
    id: 'data-ia-copilot',
    titre: 'Data, IA & Copilot Microsoft',
    couleur: '#1D1D1B',
    pitch: 'Transformer la donnée en décision et déployer l\'IA Copilot en entreprise.',
    entree: 'Ouvert sans prérequis via le Bloc 0. Aucun niveau en mathématiques n\'est exigé.',
    blocs: [
      {
        rang: 0,
        titre: 'Bloc 0 — Se remettre à niveau',
        intention: 'Situer la donnée et l\'IA avant de manipuler les outils.',
        etapes: [
          { titre: 'Sensibilisation au numérique', slug: 'sensibilisation-numerique', heures: 6, nouveau: true },
          { titre: 'Introduction à la science des données', slug: 'introduction-science-donnees', heures: 6, nouveau: true },
          { titre: 'Introduction à l\'IA moderne', slug: 'introduction-ia-moderne', heures: 6, nouveau: true },
        ],
      },
      {
        rang: 1,
        titre: 'Bloc 1 — Fondamentaux',
        intention: 'Premiers traitements de données et vocabulaire IA Azure.',
        etapes: [
          { titre: 'Data Analytics Essentials', slug: 'data-analytics-essentials', heures: 30 },
          { titre: 'AI-901 Azure AI Fundamentals', slug: 'ai-901', heures: 15, maj: 'Remplace AI-900' },
        ],
      },
      {
        rang: 2,
        titre: 'Bloc 2 — Analyste Power BI',
        intention: 'Power Query, modélisation en étoile, DAX et publication sécurisée.',
        etapes: [{ titre: 'PL-300 Power BI Data Analyst', slug: 'pl-300', heures: 35 }],
      },
      {
        rang: 3,
        titre: 'Bloc 3 — Automatisation & agents',
        intention: 'Déployer Copilot et construire des agents en entreprise.',
        etapes: [
          { titre: 'MS-4010 Copilot Specialist', slug: 'ms-4010', heures: 21 },
          { titre: 'PL-7002 Power Automate', slug: 'pl-7002', heures: 7 },
          { titre: 'PL-7008 Copilot Studio', slug: 'pl-7008', heures: 7 },
          { titre: 'MS-4017 Étendre Microsoft 365 Copilot', slug: 'ms-4017', heures: 7 },
        ],
      },
    ],
    debouche: 'Data analyst, référent Power BI, spécialiste automatisation & Copilot',
  },
]

/** Heures totales d'un parcours, Bloc 0 compris */
export function heuresParcours(p: Parcours): number {
  return p.blocs.reduce((t, b) => t + b.etapes.reduce((s, e) => s + e.heures, 0), 0)
}

/** Heures du seul Bloc 0 — utile pour l'argumentaire OPCO */
export function heuresSocle(p: Parcours): number {
  return p.blocs
    .filter(b => b.rang === 0)
    .reduce((t, b) => t + b.etapes.reduce((s, e) => s + e.heures, 0), 0)
}

export function getParcoursById(id: string): Parcours | undefined {
  return PARCOURS.find(p => p.id === id)
}
