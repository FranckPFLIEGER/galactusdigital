// ─────────────────────────────────────────────────────────────────────────────
// parcours.ts — Parcours métier, version « reconversion »
// Postulat : la personne qui arrive n'a aucune culture informatique.
// Chaque parcours démarre par un BLOC 0 sans aucun prérequis, puis progresse
// par blocs jusqu'à la certification métier.
//
// Les slugs pointent vers /formations/{slug} et existent tous dans catalogue.ts.
// Importé par : components/ParcoursMetier.tsx
//
// MAJ octobre 2026 — les deux CCNP Cybersecurity (CBRCOR 350-201 et CBRFIR
// 300-215) sont retirés du catalogue : hors périmètre de compétence de
// l'organisme. Le parcours Cybersécurité culmine désormais au niveau associate
// (CCNA Cybersecurity) et se prolonge par la voie offensive (Ethical Hacker).
// Aucune étape du parcours ne pointe vers une formation absente du catalogue.
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
  /**
   * Comment ce bloc se suit. Rédigé comme un avantage, pas comme une contrainte :
   * « 100 % à distance, à votre rythme » dit la même chose que « e-learning
   * uniquement » et ne ferme pas la porte.
   *
   * Règle de l'offre : le catalogue Cisco Networking Academy se suit en
   * e-learning tutoré ; le CCNA v2.0 parcours complet et les deux CCNP
   * Enterprise se suivent au choix en e-learning ou en présentiel ; le présentiel
   * se suit en présentiel ; Juniper se suit en FOAD.
   *
   * La phrase est calculée depuis les éditeurs réels des étapes du bloc, pas
   * depuis son rang.
   */
  modalite: string
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
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
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
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 1 — Le métier',
        intention: 'Tenir un poste de support de niveau 1 et décrocher une certification.',
        etapes: [
          { titre: 'Essentiels du support informatique (CCST IT Support)', slug: 'support-informatique-essentiels', heures: 56, nouveau: true },
        ],
      },
      {
        rang: 2,
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 2 — Aller plus loin',
        intention: 'Élargir vers le matériel et le réseau pour évoluer en technicien.',
        etapes: [
          { titre: 'IT Essentials', slug: 'it-essentials', heures: 70, nouveau: true },
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
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
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
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 1 — Les fondamentaux réseau',
        intention: 'Comprendre une architecture réseau et la manipuler en Packet Tracer.',
        etapes: [{ titre: 'Networking Essentials', slug: 'networking-essentials', heures: 35 }],
      },
      {
        rang: 2,
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 2 — CCNA',
        intention: 'Le référentiel d\'entrée du marché, en trois modules.',
        etapes: [
          { titre: 'CCNA v2.0 — ITN (1/3)', slug: 'ccna-itn', heures: 70 },
          { titre: 'CCNA v2.0 — SRWE (2/3)', slug: 'ccna-srwe', heures: 70 },
          { titre: 'CCNA v2.0 — ENSA (3/3)', slug: 'ccna-ensa', heures: 70 },
        ],
      },
      {
        rang: 3,
        modalite: "À distance à votre rythme, ou en immersion — ce bloc se suit aussi en présentiel, voucher d'examen compris",
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
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
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
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 1 — Le socle défensif',
        intention: 'Réseau puis principes de sécurité : la séquence exigée par le blueprint Cisco.',
        etapes: [
          { titre: 'Networking Essentials', slug: 'networking-essentials', heures: 35 },
          { titre: 'Cybersecurity Essentials', slug: 'cybersecurity-essentials', heures: 30 },
        ],
      },
      {
        rang: 2,
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 2 — Analyste SOC',
        intention: 'Surveillance, forensique et réponse à incident.',
        etapes: [{ titre: 'CCNA Cybersecurity', slug: 'cyberops', heures: 60, maj: 'Ex-CyberOps Associate · blueprint v1.2' }],
      },
      {
        rang: 3,
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 3 — La voie offensive',
        intention: 'Passer de la défense à l\'attaque : comprendre les techniques adverses pour mieux les contrer.',
        etapes: [
          { titre: 'Ethical Hacker', slug: 'ethical-hacker', heures: 30 },
        ],
      },
    ],
    debouche: 'Analyste SOC niveau 1 et 2, technicien réponse à incident, testeur d\'intrusion junior',
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
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
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
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 1 — Réseau et code',
        intention: 'Les deux jambes du métier, menées en parallèle.',
        etapes: [
          { titre: 'Networking Essentials', slug: 'networking-essentials', heures: 35 },
          { titre: 'Python Essentials 1', slug: 'python-essentials-1', heures: 40 },
        ],
      },
      {
        rang: 2,
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 2 — Consolidation',
        intention: 'Programmation objet et fondamentaux CCNA.',
        etapes: [
          { titre: 'Python Essentials 2', slug: 'python-essentials-2', heures: 40 },
          { titre: 'CCNA v2.0 — ITN (1/3)', slug: 'ccna-itn', heures: 70 },
        ],
      },
      {
        rang: 3,
        modalite: "100 % à distance, à votre rythme — e-learning tutoré, un tuteur certifié vous suit module par module",
        titre: 'Bloc 3 — Automatisation',
        intention: 'APIs, YANG/NETCONF, Ansible, Terraform et pipelines IA-ready.',
        etapes: [{ titre: 'CCNA Automation (ex-DevNet)', slug: 'devnet-associate', heures: 50, maj: 'Ex-DevNet · blueprint 2026' }],
      },
    ],
    debouche: 'Ingénieur automatisation, NetDevOps, développeur réseau',
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
