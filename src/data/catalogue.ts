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
// e-learning tutoré, à un tarif public.
//
// MAJ 12/11/2026 — le catalogue Microsoft (17 formations) est retiré. Ces
// formations relevaient d'un formateur MCT tiers, exerçant pour son propre
// compte : les présenter ici revenait à commercialiser l'offre d'un autre
// organisme sous notre certificat Qualiopi, nos tarifs et notre convention.
// Le catalogue ne porte plus que ce que l'organisme assure lui-même.
//
// MAJ 18 octobre 2026 — Le CCNP Cybersecurity (examens CBRCOR 350-201 et
// CBRFIR 300-215, anciennement CyberOps Professional) est retiré du catalogue :
// hors périmètre de compétence de l'organisme. Le parcours Cybersécurité
// s'arrête donc au CCNA Cybersecurity pour la voie défensive, et à Ethical
// Hacker pour la voie offensive.
//
// VOUCHER D'EXAMEN SURVEILLÉ PEARSON VUE — POLITIQUE AU 31 OCTOBRE 2026.
// Le voucher n'est COMPRIS dans AUCUN tarif du catalogue. Il est proposé en
// option et ajouté au devis sur demande. Les tarifs publiés rémunèrent la
// formation seule : plateforme, supports officiels, tutorat, suivi individuel,
// badge et certificat Cisco Networking Academy.
//
// Le champ `voucher` conserve le montant de l'option, à titre indicatif, pour
// les cours qui préparent un examen surveillé :
//   · CCNA v2.0 parcours complet          (option : 350)
//   · CCNP Enterprise ENCOR               (option : 390)
//   · CCNP Enterprise ENARSI              (option : 290)
//   · CCNA Cybersecurity                  (option : 350)
//   · CCNA Automation                     (option : 350)
//   · JNCIA-Junos                         (vendu sur devis, option au devis)
// Tous les autres cours ne préparent aucun examen surveillé : voucher 0.
//
// Changement du 31 octobre 2026 : les tarifs des cinq cours ci-dessus ont été
// revus à la baisse en conséquence, le voucher en sortant, puis alignés par
// niveau — 1 290 € au niveau associate, 1 490 € au niveau professional. Ils sont par
// ailleurs alignés sur les deux offres CPF adossées aux certifications RS
// n° 53224 et n° 53693, à déclarer après décision de France Compétences.
//
// Cette politique est reprise telle quelle sur /certifications, /elearning et
// /demarche-pedagogique. Toute modification ici doit être répercutée sur ces
// trois pages, sinon le site promet un voucher à un endroit et le refuse à un
// autre — c'est arrivé jusqu'au 28 octobre 2026 pour CCNA Cybersecurity et
// CCNA Automation.
//
// Le champ `prix.elearning` est le PRIX TOTAL À PAYER de la FORMATION
// (art. L.112-1 du code de la consommation). Il ne comprend aucun voucher
// depuis le 31 octobre 2026. Toute nouvelle entrée suit la même règle :
// le voucher est une option, jamais une composante du prix.
//
// MAJ 24 octobre 2026 — IT Essentials ne prépare plus la certification
// CompTIA A+ : le cours délivre le certificat de fin de cours Cisco Networking
// Academy. Aucun examen éditeur n'est compris ni annoncé.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// POSITIONNEMENT COMMERCIAL (MAJ 12/11/2026) — deux axes, une modalité chacun
//
//   1. Cisco Networking Academy  → E-learning tutoré EXCLUSIVEMENT, tarif public
//   2. Juniper (JNCIA-Junos)                    → FOAD EXCLUSIVEMENT, sur devis
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
  editeur: string              // Cisco Networking Academy | Juniper Networks
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
  /**
   * Langue dans laquelle l'éditeur dispense le cours sur sa plateforme.
   * Absent = français. Relevé le 12/11/2026 dans la console instructeur
   * NetAcad et sur netacad.com, cours par cours.
   *
   * Sert à deux choses, et les deux comptent : la fiche l'annonce dans ses
   * prérequis, et `SchemaCours` le déclare aux moteurs. Une donnée structurée
   * qui annoncerait « fr » sur un cours dispensé en anglais contredirait le
   * contenu visible de la page — c'est précisément ce que les moteurs
   * sanctionnent, et ce serait une information trompeuse pour un apprenant.
   */
  langue?: 'fr' | 'en'
  /** Vrai quand le tarif FOAD est un tarif catalogue, affichable tel quel */
  prixPublicFoad?: boolean
  /** Coût du titre officiel compris dans le prix e-learning (€, 0 = certificat éditeur sans examen surveillé) */
  /** Montant indicatif de l'OPTION voucher d'examen surveillé Pearson VUE.
   *  RÈGLE depuis le 31/10/2026 : le voucher n'est compris dans aucun tarif.
   *  Il est ajouté au devis sur demande. Une valeur > 0 signale seulement que
   *  le cours prépare un examen surveillé et que l'option existe.
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
// La famille « Data & Analytics » a été supprimée le 13/11/2026. Elle ne
// contenait plus qu'une formation, Data Analytics Essentials, ses deux voisines
// étant parties l'une en Socle & Reconversion, l'autre en Intelligence
// artificielle. Une famille à une seule entrée dans un filtre de catalogue
// n'apporte rien au visiteur : la formation a rejoint Intelligence
// artificielle, où elle sert déjà de Bloc 2 au parcours IA au quotidien.
export const FAMILLES: Record<string, { label: string; icon: string }> = {
  'Socle & Reconversion':  { label: 'Socle & Reconversion',   icon: 'GraduationCap' },
  'CCNA et CCNP':          { label: 'CCNA & CCNP',        icon: 'Network'  },
  'Cybersécurité':         { label: 'Cybersécurité',          icon: 'Shield'   },
  'Programmation':         { label: 'Programmation',          icon: 'Code'     },
  'IoT':                   { label: 'IoT & Objets Connectés', icon: 'Wifi'     },
  'Intelligence artificielle': { label: 'Intelligence artificielle', icon: 'Sparkles' },
  'Juniper Junos':         { label: 'Juniper Junos',          icon: 'Router'   },
}

// ─── Éditeurs ─────────────────────────────────────────────────────────────────
export const EDITEURS: Record<string, { label: string; badge?: string }> = {
  'Cisco Networking Academy': { label: 'Cisco Networking Academy', badge: 'Partenaire n° 3018982' },
  'Juniper Networks': { label: 'Juniper Networks', badge: 'Formateur réseau CCNP / CCDP — parcours JNCIA' },
}

// ─────────────────────────────────────────────────────────────────────────────
// CATALOGUE PRINCIPAL — 37 formations
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
    prix: { presentiel: 1950, foad: null, elearning: 1290 },
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
    prix: { presentiel: 1950, foad: null, elearning: 1490 },
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
    prix: { presentiel: 1950, foad: null, elearning: 1490 },
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
    prix: { presentiel: null, foad: null, elearning: 1160 },
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
    prix: { presentiel: null, foad: null, elearning: 1290 },
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

  // ── CISCO — Data & Analytics, rattaché à Intelligence artificielle le 13/11/2026 ───────────────────────────────────────────────
  {
    slug: 'data-analytics-essentials',
    titre: 'Data Analytics Essentials',
    titreLong: 'Data Analytics Essentials — Introduction à l\'analyse de données',
    editeur: 'Cisco Networking Academy', famille: 'Intelligence artificielle',
    niveau: 'Fondamental', duree: '30 heures', dureeJours: 4,
    certification: 'Cisco Data Analytics Essentials Certificat',
    examCode: '',
    modalites: ['E-learning'],
    description: 'Analyse de données de bout en bout : interrogation SQL, manipulation avec Python Pandas, visualisation et restitution des résultats aux décideurs.',
    prix: { presentiel: null, foad: null, elearning: 330 },
    prixPublicElearning: true,
    voucher: 0,
  },

// ── Juniper Networks ───────────────────────────────────────────────────────
  // MAJ octobre 2026 — ouverture du catalogue Juniper. Certification éditeur,
  // non enregistrée au RNCP ni au Répertoire spécifique : non éligible au CPF.
  {
    slug: 'jncia-junos',
    titre: 'JNCIA-Junos',
    // Intitulés repris du flyer d'examen Juniper (JN0-106) : la certification
    // s'appelle « Junos, Associate (JNCIA-Junos) ». « IJOS — Introduction to the
    // Junos Operating System » est le nom du cours Juniper, pas de la certification :
    // il reste sur la fiche, en sous-titre. Corrigé le 29 octobre 2026.
    titreLong: 'Junos, Associate (JNCIA-Junos) — examen JN0-106',
    editeur: 'Juniper Networks', famille: 'Juniper Junos',
    niveau: 'Fondamental', duree: '35 heures', dureeJours: 5,
    certification: 'Junos, Associate (JNCIA-Junos)',
    examCode: 'JN0-106',
    modalites: ['FOAD'],
    description: "Premier niveau du parcours de certification Juniper : architecture de Junos OS, interface en ligne de commande, interfaces réseau, routage, politiques et filtres, supervision et dépannage.",
    prix: { presentiel: null, foad: null, elearning: null },
  },

  // ── INTELLIGENCE ARTIFICIELLE — catalogue Cisco AI relevé le 12/11/2026
  // dans la console instructeur NetAcad. Les cours IBM SkillsBuild (AI
  // Fundamentals) ne figurent pas dans l'offre de l'académie : ils ne sont
  // pas proposés. La langue de chaque cours est indiquée sur sa fiche.
  {
    slug: 'find-insights-ai',
    titre: 'Trouver des informations utiles avec l\'IA',
    titreLong: 'Find Insights with AI — analyse thématique de données textuelles assistée par IA',
    editeur: 'Cisco Networking Academy', famille: 'Intelligence artificielle',
    niveau: 'Grand débutant', duree: '6 heures', dureeJours: 1,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    // Langue de dispension du cours sur la plateforme Cisco Networking Academy,
    // relevée le 12/11/2026 dans la console instructeur et sur netacad.com.
    description: 'Transformer des avis, des retours clients ou des signalements en informations exploitables, par analyse thématique assistée par IA. Choisir le bon outil pour chaque tâche — modèle de langage, agent capable d\'exécuter du code, tableur, éditeur de texte — fiabiliser les résultats et garder l\'humain dans la boucle de décision.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'build-resume-ai',
    titre: 'Construire son CV avec l\'IA',
    titreLong: 'Build your Resume with AI — rédaction et personnalisation de CV assistées par IA, avec protection des données',
    editeur: 'Cisco Networking Academy', famille: 'Intelligence artificielle',
    niveau: 'Grand débutant', duree: '9 heures', dureeJours: 2,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    // Langue de dispension du cours sur la plateforme Cisco Networking Academy,
    // relevée le 12/11/2026 dans la console instructeur et sur netacad.com.
    description: 'Améliorer et personnaliser son CV à l\'aide de l\'IA, sans exposer ses données personnelles. Le cours enseigne un flux de travail qui combine un modèle local pour les informations sensibles et un agent public pour les tâches générales, puis l\'adaptation du CV à une offre précise et sa lecture par les systèmes de tri automatisés.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    socle: true,
  },
  {
    slug: 'data-science-python',
    titre: 'Data Science Essentials with Python',
    titreLong: 'Data Science Essentials with Python — Pandas, Matplotlib et modélisation statistique sur projets',
    editeur: 'Cisco Networking Academy', famille: 'Intelligence artificielle',
    niveau: 'Intermédiaire', duree: '40 heures', dureeJours: 8,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    // Langue de dispension du cours sur la plateforme Cisco Networking Academy,
    // relevée le 12/11/2026 dans la console instructeur et sur netacad.com.
    description: 'Le cycle complet du travail sur données, de la première instruction Python jusqu\'au récit chiffré : nettoyage, analyse, visualisation et modélisation sur des jeux de données réels, avec Pandas et Matplotlib. Six chapitres, quinze projets guidés et cinq projets ouverts. Cours dispensé en anglais.',
    prix: { presentiel: null, foad: null, elearning: 440 },
    prixPublicElearning: true,
    voucher: 0,
    langue: 'en',
    socle: false,
  },
  {
    slug: 'aitech',
    titre: 'Cisco AI Technical Practitioner (AITECH)',
    titreLong: 'Cisco AI Technical Practitioner (AITECH) — préparation à la certification Cisco 810-110',
    editeur: 'Cisco Networking Academy', famille: 'Intelligence artificielle',
    niveau: 'Avancé', duree: '16 heures', dureeJours: 3,
    certification: 'Cisco AI Technical Practitioner (810-110 AITECH)',
    examCode: '810-110',
    modalites: ['Présentiel', 'FOAD'],
    // Langue de dispension du cours sur la plateforme Cisco Networking Academy,
    // relevée le 12/11/2026 dans la console instructeur et sur netacad.com.
    description: 'Le parcours technique complet de Cisco sur l\'IA générative appliquée au travail d\'ingénieur : écosystème et outillage, ingénierie de prompt pour la précision technique, sécurité et confidentialité, correction des sorties de modèle, recherche et synthèse assistées, ingénierie logicielle et données, personnalisation de modèles et agents. Prépare à l\'examen Cisco 810-110. Cours et examen dispensés en anglais.',
    prix: { presentiel: null, foad: 690, elearning: null },
    prixPublicElearning: false,
    prixPublicFoad: true,
    voucher: 150,
    langue: 'en',
    socle: false,
  },
  {
    slug: 'prompt-like-an-engineer',
    titre: 'Prompt Like an Engineer',
    titreLong: 'Prompt Like an Engineer — concevoir, vérifier et réutiliser des prompts comme un processus d\'ingénierie',
    editeur: 'Cisco Networking Academy', famille: 'Intelligence artificielle',
    niveau: 'Fondamental', duree: '9 heures', dureeJours: 2,
    certification: 'Badge numérique Cisco Networking Academy',
    examCode: '',
    modalites: ['E-learning'],
    // Langue de dispension du cours sur la plateforme Cisco Networking Academy,
    // relevée le 12/11/2026 dans la console instructeur et sur netacad.com.
    description: 'Appliquer une méthode d\'ingénieur au travail avec l\'IA : concevoir, itérer, vérifier et réutiliser des prompts comme un processus reproductible. Plutôt que de traiter le modèle comme une boîte noire, l\'apprenant comprend ce qui se passe à l\'intérieur et se place en chef d\'orchestre d\'une équipe mixte, humaine et logicielle. Il reste responsable de la qualité de son travail. Cours dispensé en anglais.',
    prix: { presentiel: null, foad: null, elearning: 180 },
    prixPublicElearning: true,
    voucher: 0,
    langue: 'en',
    socle: false,
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
    // La FOAD était systématiquement « Sur devis ». C'est juste pour JNCIA-Junos,
    // dont le tarif dépend du volume, mais faux pour une FOAD à tarif catalogue :
    // l'indicateur 1 du RNQ impose alors d'afficher le prix. 12/11/2026.
    else if (m === 'FOAD')       v = f.prixPublicFoad ? f.prix?.foad : undefined
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
 * Les cours Juniper ne délivrent aucune sanction d'éditeur du
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
 * Le nom complet d'une certification éditeur fait jusqu'à soixante
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
  if (f.voucher) return 'Examen en option — voucher Pearson VUE ajouté au devis sur demande'
  // Parcours vendu sur devis : le voucher y est intégré, mais aucun montant n'est
  // publié puisqu'aucun prix ne l'est. Sans ce cas, le JNCIA-Junos affichait
  // « certification en option » alors que sa fiche annonce l'inverse.
  const aucunPrixPublie = !f.prix || (!f.prix.presentiel && !f.prix.foad && !f.prix.elearning)
  if (aucunPrixPublie) return 'Certification officielle comprise dans le devis'
  // Le voucher n'est compris dans aucun tarif (décision du 31 octobre 2026) :
  // les prix rémunèrent la formation seule et le candidat acquiert son voucher
  // Pearson VUE séparément. Si une fiche affirme l'inverse, c'est elle qui a tort.
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
  // Le voucher n'est plus compris dans le prix (31/10/2026) : la totalité du
  // tarif rémunère la formation. La part « titre » reste à 0 pour ne pas
  // casser les appelants, qui affichent un détail désormais sans objet.
  return { total, formation: total, titre: 0 }
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
  "L'examen de certification de l'éditeur n'est pas compris : lorsqu'il existe un examen " +
  "surveillé Pearson VUE, le voucher est proposé en option et ajouté au devis sur demande. " +
  "Tarif communiqué aux employeurs, opérateurs de compétences et financeurs publics : "
  + "toute entrée en formation est adossée à un employeur ou à un financeur tiers "
  + "(art. 2 des CGV)."

/** Mention courte, pour les listes et le calendrier */
export const MENTION_PRIX_COURTE =
  "Prix total à payer, par personne — TVA non applicable, art. 261-4-4°-a du CGI."

/**
 * POURQUOI LE PRÉSENTIEL COÛTE PLUS CHER QUE L'E-LEARNING À DURÉE AFFICHÉE PLUS LONGUE
 *
 * Sur le parcours CCNA complet : 1 950 € pour 35 h en présentiel, 1 290 € pour 210 h
 * en e-learning tutoré. Rapporté à l'heure, l'écart saute aux yeux — et un financeur
 * qui compare deux lignes d'un même devis pose la question. Sans réponse écrite, la
 * prise en charge se discute.
 *
 * Les deux durées ne mesurent pas la même chose. Les 210 h de l'e-learning sont la
 * charge de travail estimée de l'apprenant, en autonomie, sur une plateforme ouverte
 * plusieurs mois, avec un tutorat sollicité au besoin. Les 35 h du présentiel sont
 * 35 heures de formateur mobilisé en continu, sur équipements réels, à un rythme
 * imposé. Ce que le prix rémunère n'est pas la durée : c'est la mobilisation.
 *
 * Affiché sur les fiches qui proposent les deux modalités (indicateur 1 : une
 * information claire et vérifiable sur les tarifs). Ajouté le 10/11/2026.
 */
export const MENTION_ECART_PRESENTIEL = {
  titre: "Pourquoi le présentiel et l'e-learning n'ont pas le même tarif",
  texte:
    "Les deux durées affichées ne mesurent pas la même chose. Les heures d'e-learning tutoré "
    + "correspondent à la charge de travail estimée de l'apprenant, en autonomie, sur une plateforme "
    + "ouverte plusieurs mois, avec un tuteur qu'il sollicite au besoin. Les heures de présentiel sont "
    + "des heures de formateur mobilisé en continu, sur équipements réels, à un rythme soutenu et en "
    + "petit effectif. Le tarif ne rémunère donc pas une durée mais une mobilisation : c'est ce qui "
    + "explique qu'un parcours présentiel plus court soit facturé davantage. Les deux modalités "
    + "préparent au même examen et ouvrent au même badge éditeur ; le choix se fait sur le rythme "
    + "souhaité, la disponibilité et le besoin d'accompagnement, non sur le nombre d'heures.",
}
