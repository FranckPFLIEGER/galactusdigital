// ─────────────────────────────────────────────────────────────────────────────
// infoCertifiante.ts — Information du public sur les actions certifiantes
//
// RNQ V2 — décret n° 2026-728 du 1er août 2026, en vigueur le 1er novembre 2026.
// Indicateur 3 : pour toute action préparant à une certification, l'organisme
// publie le taux d'obtention, les possibilités de validation par blocs de
// compétences, les équivalences, passerelles, suites de parcours et débouchés.
//
// Tout est dérivé des sources déjà en place — catalogue.ts et parcours.ts —
// afin qu'une seule vérité circule sur le site. Les champs non déductibles
// (équivalences réglementaires, mentions propres à un éditeur) sont déclarés
// dans OVERRIDES ci-dessous.
// ─────────────────────────────────────────────────────────────────────────────

import { FORMATIONS, getFormationBySlug, type Formation } from './catalogue'
import { PARCOURS } from './parcours'

export interface InfoCertifiante {
  /** Intitulé exact de la certification visée */
  certification: string
  /** Code officiel de l'examen ou du titre */
  examCode: string
  /** Enregistrement au RNCP ou au Répertoire spécifique */
  enregistrement: string
  /** Validation par blocs de compétences / validation partielle */
  blocs: string
  /** Équivalences et passerelles */
  passerelles: string[]
  /** Suites de parcours possibles, déduites des parcours métier */
  suites: { libelle: string; slug?: string }[]
  /** Débouchés métiers */
  debouches: string[]
  /** Parcours métier dans lesquels la formation est positionnée */
  parcours: { id: string; titre: string; bloc: number }[]
}

/** Modes de financement — identiques pour tout le catalogue (indicateur 1 RNQ V2) */
export const MODES_FINANCEMENT: string[] = [
  'Plan de développement des compétences de l\'employeur',
  'OPCO (AFDAS, AKTO, ATLAS, OPCO 2i… selon la branche du client)',
  'France Travail — AIF ou POEI, via Kairos, pour les demandeurs d\'emploi',
  'Aides régionales et dispositifs FSE+ des collectivités ultramarines',
  'Autofinancement par le particulier',
]

/** Mention de transparence exigée par l'indicateur 1 du RNQ V2 */
export const MENTION_NON_CPF =
  'Aucune formation du catalogue GALACTUS Digital n\'est éligible au compte personnel ' +
  'de formation (CPF) : l\'organisme ne détient aucune habilitation de certificateur lui ' +
  'permettant de délivrer ces certifications au titre d\'un enregistrement au RNCP ou au ' +
  'Répertoire spécifique de France Compétences. Aucune offre n\'est publiée sur ' +
  'Mon Compte Formation. L\'organisme s\'inscrit dans le plan national de lutte contre la ' +
  'fraude à la formation professionnelle.'

/** Débouchés par défaut, par famille, pour les formations hors parcours métier */
const DEBOUCHES_FAMILLE: Record<string, string[]> = {
  'Socle & Reconversion': [
    'Entrée en parcours qualifiant IT après remise à niveau',
    'Agent ou assistant administratif outillé sur le poste de travail numérique',
  ],
  'CCNA et CCNP': [
    'Technicien réseau', 'Administrateur infrastructure', 'Ingénieur réseau',
  ],
  'Cybersécurité': [
    'Analyste SOC', 'Analyste réponse à incident', 'Technicien sécurité des SI',
  ],
  'Programmation': [
    'Développeur junior', 'Automatisation et scripting en environnement réseau',
  ],
  'IoT': [
    'Technicien IoT', 'Chargé de déploiement objets connectés', 'Technicien réseaux industriels',
  ],
  'Linux & Open Source': [
    'Administrateur systèmes Linux', 'Technicien exploitation', 'Technicien support niveau 2',
  ],
  'Data & Analytics': [
    'Data analyst junior', 'Référent reporting et tableaux de bord',
  ],
  'Azure & Cloud': [
    'Administrateur cloud Azure', 'Administrateur systèmes', 'Ingénieur infrastructure',
  ],
  'Microsoft 365': [
    'Administrateur Microsoft 365', 'Endpoint administrator', 'Référent collaboratif et Copilot',
  ],
  'Juniper Junos': [
    'Technicien réseau opérateur', 'Administrateur réseau Junos', 'Ingénieur support opérateur',
  ],
}

/** Déclarations non déductibles du catalogue ou des parcours */
interface Override {
  enregistrement?: string
  blocs?: string
  passerelles?: string[]
  debouches?: string[]
}

const OVERRIDES: Record<string, Override> = {
  // ── Parcours CCNA en 3 modules — modularité réelle, attestable module par module
  'ccna-itn': {
    blocs:
      'La certification CCNA 200-301 n\'est pas découpée en blocs de compétences au sens de ' +
      'l\'article L.6113-1 du code du travail. Le parcours est en revanche modulaire : ITN, SRWE ' +
      'et ENSA font chacun l\'objet d\'une attestation de formation et d\'un badge numérique ' +
      'Cisco Networking Academy acquis définitivement, indépendamment du passage de l\'examen.',
    passerelles: [
      'Entrée directe au module ITN pour les profils déjà techniques, après test de positionnement',
      'Les titulaires d\'un BTS SIO option SISR, d\'un diplôme équivalent ou d\'une expérience réseau peuvent être dispensés du Bloc 0 et du module Networking Essentials, après test de positionnement',
      'Les compétences réseau travaillées ici correspondent à celles de la certification « Mettre en œuvre, sécuriser et superviser une infrastructure réseau », dossier n° 53224 déposé par GALACTUS Digital au Répertoire spécifique — en cours d\'instruction par France Compétences, sans équivalence automatique à ce stade',
    ],
  },
  'ccna-srwe': {
    blocs:
      'Module 2 sur 3 du parcours CCNA. Attestation de formation et badge numérique Cisco ' +
      'délivrés pour ce module, indépendamment de l\'examen 200-301. La certification CCNA ' +
      'n\'est pas découpée en blocs de compétences au sens de l\'article L.6113-1.',
  },
  'ccna-ensa': {
    blocs:
      'Module 3 sur 3 du parcours CCNA : son achèvement, après ITN et SRWE, ouvre le passage de ' +
      'l\'examen 200-301. Attestation et badge numérique délivrés par module. La certification ' +
      'CCNA n\'est pas découpée en blocs de compétences au sens de l\'article L.6113-1.',
  },
  'ccna-cisco': {
    blocs:
      'Parcours officiel Cisco accéléré de 5 jours, non modulaire : l\'attestation porte sur ' +
      'l\'ensemble du parcours. La certification CCNA 200-301 n\'est pas découpée en blocs de ' +
      'compétences au sens de l\'article L.6113-1.',
    passerelles: [
      'Réservé aux profils déjà techniques — alternative accélérée au parcours NetAcad en 3 modules (ITN, SRWE, ENSA)',
      'Validation des prérequis par test de positionnement avant inscription',
    ],
  },
  // ── Cybersécurité — lien explicite avec la RS2 déposée
  'cyberops': {
    passerelles: [
      'Suite directe de Cybersecurity Essentials ; accessible aux titulaires du CCNA ou d\'une expérience équivalente après positionnement',
      'Les compétences de détection, d\'analyse et de traitement des incidents travaillées ici correspondent à celles de la certification « Détecter, analyser et traiter les incidents de sécurité d\'un système d\'information », dossier n° 53693 déposé par GALACTUS Digital au Répertoire spécifique le 28 septembre 2026 — en cours d\'instruction par France Compétences, sans équivalence automatique à ce stade',
      'D\'autres organismes portent au Répertoire spécifique des certifications voisines sur l\'analyse des incidents de sécurité : leur statut est à vérifier sur le site de France Compétences, seul référentiel opposable',
    ],
  },
  'ccnp-cybersecurity-cbrcor': {
    blocs:
      'Le CCNP Cybersecurity s\'obtient par deux examens : CBRCOR 350-201 (cœur) et une ' +
      'concentration, CBRFIR 300-215 chez GALACTUS Digital. Chaque examen réussi est capitalisé ' +
      'par Cisco et reste acquis — mécanisme de validation partielle propre à l\'éditeur, ' +
      'distinct des blocs de compétences de l\'article L.6113-1.',
  },
  'ccnp-cybersecurity-cbrfir': {
    blocs:
      'Concentration du CCNP Cybersecurity, à associer à l\'examen cœur CBRCOR 350-201. ' +
      'Chaque examen réussi est capitalisé par Cisco et reste acquis — mécanisme de validation ' +
      'partielle propre à l\'éditeur, distinct des blocs de compétences de l\'article L.6113-1.',
  },
  'ccnp-encor': {
    blocs:
      'Le CCNP Enterprise s\'obtient par deux examens : ENCOR 350-401 (cœur) et une concentration, ' +
      'ENARSI 300-410 chez GALACTUS Digital. Chaque examen réussi est capitalisé par Cisco et ' +
      'reste acquis — mécanisme de validation partielle propre à l\'éditeur, distinct des blocs ' +
      'de compétences de l\'article L.6113-1.',
  },
  'ccnp-enarsi': {
    blocs:
      'Concentration du CCNP Enterprise, à associer à l\'examen cœur ENCOR 350-401. Chaque examen ' +
      'réussi est capitalisé par Cisco et reste acquis — mécanisme de validation partielle propre ' +
      'à l\'éditeur, distinct des blocs de compétences de l\'article L.6113-1.',
  },
  'jncia-junos': {
    passerelles: [
      'Accessible aux titulaires du CCNA ou d\'une expérience réseau équivalente, après positionnement',
      'Première marche de la filière Juniper : JNCIA-Junos puis JNCIS-SP (Junos MPLS Fundamentals)',
    ],
  },
  'it-essentials': {
    passerelles: [
      'Prépare aux deux examens CompTIA A+ (Core 1 et Core 2), passés séparément',
      'Dispense du Bloc 0 pour les titulaires d\'un diplôme ou d\'une expérience en support informatique',
    ],
    blocs:
      'La certification CompTIA A+ s\'obtient par deux examens distincts (Core 1 220-1201 et ' +
      'Core 2 220-1202), chacun capitalisable séparément chez l\'éditeur — mécanisme de validation ' +
      'partielle propre à CompTIA, distinct des blocs de compétences de l\'article L.6113-1.',
  },
}

/** Formations sanctionnées par un badge seul, sans examen surveillé */
function estBadgeSeul(f: Formation): boolean {
  return /badge/i.test(f.certification) || /badge/i.test(f.examCode)
}

// ─── Index inverse slug → positions dans les parcours métier ─────────────────
interface PositionParcours {
  id: string
  titre: string
  bloc: number
  debouche: string
  /** Étapes des blocs suivants, dans l'ordre */
  suivantes: { libelle: string; slug: string }[]
  /** Étapes des blocs précédents, dans l'ordre */
  precedentes: { libelle: string; slug: string }[]
}

const INDEX: Record<string, PositionParcours[]> = {}

for (const p of PARCOURS) {
  for (const bloc of p.blocs) {
    for (const etape of bloc.etapes) {
      const suivantes = p.blocs
        .filter(b => b.rang > bloc.rang)
        .flatMap(b => b.etapes.map(e => ({ libelle: e.titre, slug: e.slug })))
      const precedentes = p.blocs
        .filter(b => b.rang < bloc.rang)
        .flatMap(b => b.etapes.map(e => ({ libelle: e.titre, slug: e.slug })))
      const entree: PositionParcours = {
        id: p.id, titre: p.titre, bloc: bloc.rang,
        debouche: p.debouche, suivantes, precedentes,
      }
      INDEX[etape.slug] = [...(INDEX[etape.slug] || []), entree]
    }
  }
}

/** Dédoublonne une liste d'étapes par slug, en préservant l'ordre */
function dedupe(items: { libelle: string; slug: string }[], exclure: string) {
  const vus = new Set<string>([exclure])
  const out: { libelle: string; slug: string }[] = []
  for (const it of items) {
    if (vus.has(it.slug)) continue
    vus.add(it.slug)
    out.push(it)
  }
  return out
}

export function getInfoCertifiante(slug: string): InfoCertifiante | null {
  const f = getFormationBySlug(slug)
  if (!f) return null

  const o = OVERRIDES[slug] || {}
  const positions = INDEX[slug] || []

  // ── Enregistrement RNCP / RS
  const enregistrement =
    o.enregistrement ??
    `${f.certification} — certification délivrée par ${f.editeur}. ` +
      'GALACTUS Digital ne détient aucune habilitation de certificateur lui permettant de la ' +
      'délivrer au titre d\'un enregistrement au RNCP ou au Répertoire spécifique de ' +
      'France Compétences. Cette formation n\'est donc pas éligible au CPF, aucune offre ' +
      'correspondante n\'est publiée sur Mon Compte Formation, et elle ne confère aucun niveau ' +
      'de qualification au sens du cadre national des certifications professionnelles.'

  // ── Validation par blocs / validation partielle
  const blocs =
    o.blocs ??
    (estBadgeSeul(f)
      ? 'Formation sanctionnée par une attestation de formation et un badge numérique de ' +
        `${f.editeur}, acquis définitivement. Aucun découpage en blocs de compétences au sens ` +
        'de l\'article L.6113-1 du code du travail : la certification visée n\'est pas enregistrée ' +
        'aux répertoires nationaux. En cas d\'interruption du parcours, une attestation de ' +
        'formation partielle mentionnant les compétences effectivement acquises est délivrée ' +
        '(procédure FQ-15).'
      : `La certification ${f.examCode} s'obtient par un examen unique et n'est pas découpée en ` +
        'blocs de compétences au sens de l\'article L.6113-1 du code du travail. En cas ' +
        'd\'interruption du parcours, une attestation de formation partielle mentionnant les ' +
        'compétences effectivement acquises est délivrée (procédure FQ-15).')

  // ── Passerelles et équivalences
  let passerelles = o.passerelles ?? []
  if (passerelles.length === 0) {
    const prec = dedupe(positions.flatMap(p => p.precedentes), slug)
    if (f.socle) {
      passerelles = [
        'Aucun prérequis : cours d\'entrée du Bloc 0, ouvert à toute personne en reconversion',
        'Les titulaires d\'un diplôme ou d\'une expérience en informatique peuvent en être dispensés après test de positionnement',
      ]
    } else if (prec.length > 0) {
      passerelles = [
        `Accès après le Bloc précédent du parcours métier (${prec.slice(0, 3).map(e => e.libelle).join(', ')})`,
        'Accès direct possible pour les profils déjà techniques, après validation des prérequis par test de positionnement',
        'Les acquis de l\'expérience professionnelle sont pris en compte lors de l\'entretien préalable pour alléger le parcours',
      ]
    } else {
      passerelles = [
        'Validation des prérequis par test de positionnement avant inscription',
        'Les acquis de l\'expérience professionnelle sont pris en compte lors de l\'entretien préalable pour alléger le parcours',
      ]
    }
    passerelles.push(
      'Aucune équivalence réglementaire ni dispense d\'examen n\'est accordée au titre de cette formation : l\'organisme n\'est pas certificateur de la certification visée',
    )
  }

  // ── Suites de parcours
  const suivantes = dedupe(positions.flatMap(p => p.suivantes), slug)
  const suites: { libelle: string; slug?: string }[] = suivantes.slice(0, 5).map(e => ({
    libelle: e.libelle, slug: e.slug,
  }))
  if (suites.length === 0) {
    const memeFamille = FORMATIONS.filter(
      x => x.famille === f.famille && x.slug !== slug && x.niveau !== 'Grand débutant',
    ).slice(0, 3)
    for (const x of memeFamille) suites.push({ libelle: x.titre, slug: x.slug })
  }
  if (suites.length === 0) {
    suites.push({ libelle: 'Nous consultons avec vous la suite de parcours la plus pertinente lors de l\'entretien de bilan' })
  }

  // ── Débouchés
  const debouches =
    o.debouches ??
    (positions.length > 0
      ? Array.from(new Set(positions.flatMap(p =>
          p.debouche.split(',').map(s => {
            const t = s.trim()
            return t.charAt(0).toUpperCase() + t.slice(1)
          }),
        )))
      : DEBOUCHES_FAMILLE[f.famille] ?? [
          'Évolution sur le poste de travail actuel',
          'Entrée en parcours qualifiant IT après positionnement',
        ])

  return {
    certification: f.certification,
    examCode: f.examCode,
    enregistrement,
    blocs,
    passerelles,
    suites,
    debouches,
    parcours: positions.map(p => ({ id: p.id, titre: p.titre, bloc: p.bloc })),
  }
}
