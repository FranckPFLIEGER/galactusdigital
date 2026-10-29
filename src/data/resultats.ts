// ─────────────────────────────────────────────────────────────────────────────
// resultats.ts — Source unique de vérité des indicateurs de résultats
//
// RNQ V2 — décret n° 2026-728 du 1er août 2026 (JO du 04/08/2026),
// entrée en vigueur le 1er novembre 2026.
//
//  • Indicateur 2 : les indicateurs de résultats doivent être adaptés à la
//    nature des prestations et aux publics accueillis, et leurs MODALITÉS DE
//    CALCUL doivent être précisées de façon transparente.
//  • Indicateur 3 : pour toute action préparant à une certification,
//    l'organisme publie le taux d'obtention, les possibilités de validation
//    par blocs de compétences, les équivalences, passerelles, suites de
//    parcours et débouchés.
//  • Indicateur 1 : aucune communication susceptible d'induire le public en
//    erreur. Tout chiffre publié doit être justifiable sur pièces.
//
// RÈGLE DE PUBLICATION : on ne publie ici QUE des chiffres adossés au registre
// de suivi et aux attestations éditeurs. En l'absence de données consolidées
// pour une certification prise isolément, le site l'écrit explicitement
// plutôt que d'extrapoler le taux global.
// ─────────────────────────────────────────────────────────────────────────────

/** Date d'arrêté des données publiées sur le site */
export const RESULTATS_ARRETE_AU = '31 mai 2026'

/** Note de satisfaction globale publiée — source unique pour toutes les pages.
 *  Moyenne de l'item « Appréciation générale » du questionnaire FQ-08a,
 *  période 2023-2025, arrêtée à la date ci-dessus. Le détail par année et
 *  par item est publié dans RESULTATS_ANNUELS.
 *
 *  Dépouillement complet de l'archive, arrêté le 23/10/2026 :
 *  39 questionnaires remis et signés, somme des notes 187, moyenne 4,79.
 *    2023 — 7 questionnaires, somme 32, moyenne 4,57
 *    2024 — 23 questionnaires, somme 112, moyenne 4,87
 *    2025 — 9 questionnaires, somme 43, moyenne 4,78
 *  Aucune note inférieure à 4/5 sur les 39 : 31 notes à 5/5, 8 notes à 4/5. */
export const SATISFACTION_GLOBALE = '4,8/5'

/** Phrase de méthode affichée à côté du chiffre, partout où il apparaît. */
export const SATISFACTION_METHODE =
  'Note moyenne attribuée à l\'item « Appréciation générale » du questionnaire de fin '  +
  'de formation, sur une échelle de 1 (insatisfaisant) à 5 (excellent) — 39 questionnaires ' +
  'remis et signés sur la période 2023-2025, arrêtés au ' + RESULTATS_ARRETE_AU + '. ' +
  'Seuls les questionnaires effectivement remis sont comptés. ' +
  'Aucune note d\'appréciation générale inférieure à 4/5 n\'a été relevée : ' +
  '31 notes à 5/5 et 8 notes à 4/5.'

/** Périmètre couvert par les indicateurs globaux */
export const RESULTATS_PERIMETRE =
  'Actions de formation certifiantes IT dispensées par PFLIEGER SASU — GALACTUS Digital ' +
  '(Cisco Networking Academy, Microsoft, Juniper Networks), ' +
  'toutes modalités (présentiel, FOAD, e-learning tutoré), ' +
  'tous territoires (Martinique, Guadeloupe, Guyane, Saint-Martin, Saint-Barthélemy, La Réunion, France hexagonale). ' +
  'NDA 11 75 59933 75 — SIRET 880 430 418 00017. ' +
  'Les effectifs publiés sont ceux des apprenants entrés effectivement en formation. ' +
  'Un dossier engagé qui n\'aboutit pas à une entrée en formation n\'est pas comptabilisé : ' +
  'en 2025, 131 entrées effectives sont retenues sur les dossiers ouverts dans l\'année.'

/** Indicateur 2 — modalités de calcul, publiées en clair (exigence RNQ V2) */
export const METHODE_CALCUL: { libelle: string; formule: string; source: string }[] = [
  {
    libelle: 'Nombre de candidats formés',
    formule:
      'Somme des apprenants entrés effectivement en formation sur la période, ' +
      'constatée par feuille d\'émargement (présentiel et FOAD synchrone) ou par les traces ' +
      'd\'activité de la plateforme (e-learning tutoré, art. D.6313-3-1 du code du travail). ' +
      'Un apprenant inscrit à plusieurs modules est compté une fois par module suivi.',
    source: 'Registre de suivi des actions — émargements, relevés Cisco Networking Academy « Mes statistiques »',
  },
  {
    libelle: 'Taux de réussite parmi les candidats présentés',
    formule:
      'Nombre de candidats ayant obtenu la certification visée ÷ nombre de candidats ' +
      'effectivement présentés à l\'épreuve, sur la période. Les apprenants formés mais non ' +
      'présentés à l\'examen sont exclus du dénominateur — ce taux ne doit donc pas être lu ' +
      'comme un taux d\'obtention rapporté aux entrants.',
    source: 'Attestations de réussite des éditeurs (Cisco Networking Academy, Microsoft, Juniper Networks)',
  },
  {
    libelle: 'Taux d\'abandon',
    formule:
      'Nombre d\'interruptions définitives à l\'initiative de l\'apprenant après entrée ' +
      'effective en formation ÷ nombre d\'apprenants entrés en formation. ' +
      'Les désistements survenus avant le démarrage sont comptabilisés séparément en ' +
      '« annulations » et n\'entrent pas dans ce taux.',
    source: 'Registre de suivi — procédure FQ-15 « Prévention et traitement des ruptures de parcours »',
  },
  {
    libelle: 'Note de satisfaction',
    formule:
      'Moyenne arithmétique des notes portées à l\'item « Appréciation générale » du ' +
      'questionnaire de fin de formation FQ-08a, sur une échelle de 1 (insatisfaisant) à ' +
      '5 (excellent), tous répondants confondus. Les notes « formateur » et « impact sur le ' +
      'poste de travail » sont des items distincts du même questionnaire, publiés séparément. ' +
      'Seuls les questionnaires effectivement remis sont comptés : un questionnaire non ' +
      'retourné n\'est pas compté comme une note, ni favorable ni défavorable, et n\'entre ' +
      'donc ni au numérateur ni au dénominateur. La moyenne globale porte sur l\'ensemble ' +
      'des questionnaires remis sur la période ; le détail par année est publié dans le ' +
      'tableau des résultats annuels.',
    source: 'Questionnaires d\'appréciation FQ-08a, remplis et signés par les apprenants, ' +
      'archivés par session et communicables en audit. L\'archive est dépouillée en ' +
      'intégralité : 39 questionnaires remis sur 2023-2025 (7 en 2023, 23 en 2024, 9 en 2025), ' +
      'soit une moyenne d\'appréciation générale de 4,79/5. Aucune note d\'appréciation ' +
      'générale inférieure à 4/5 : 31 notes à 5/5 et 8 notes à 4/5. Sur la session du ' +
      'Workshop Cybersécurité WEB du 10 au 14 mars 2025, neuf questionnaires ont été remis. ' +
      // Le « 125 » était incompréhensible sans faire le calcul : 9 × 14 = 126 notes
      // possibles, dont une case laissée vide. Le compte est désormais écrit en
      // toutes lettres plutôt que ramené à un pourcentage. Corrigé le 29/10/2026.
      'Chaque questionnaire comporte quatorze items notés — accueil, cours, instructeur, ' +
      'impact — soit 126 notes possibles pour neuf questionnaires. 125 ont été renseignées, ' +
      'un item ayant été laissé vide par un apprenant : sur ces 125 notes, 122 sont ' +
      'supérieures ou égales à 4/5 et trois sont à 3/5. Cette lecture, item par item, ' +
      'est distincte de la note d\'appréciation générale publiée plus haut, qui est une ' +
      'note unique par questionnaire.',
  },
  {
    libelle: 'Évaluation des contenus et des enseignements',
    formule:
      'Questionnaire dédié à la qualité pédagogique (FQ-08c), distinct de l\'enquête de ' +
      'satisfaction générale, exploité en revue d\'amélioration continue.',
    source: 'FQ-08c — dispositif formalisé (indicateur 33 : applicable aux CFA, mis en œuvre volontairement)',
  },
]

/** Données annuelles publiées — indicateur 2 */
export interface ResultatAnnee {
  annee: string
  formes: number
  abandons: number
  annulations: number
  reussiteParmiPresentes: string
  /** Nombre de questionnaires FQ-08a effectivement remis et dépouillés pour
   *  l'année. null tant que le dépouillement n'est pas consolidé : aucune note
   *  n'est alors publiée pour cette année (indicateur 1 — ne rien publier qui
   *  ne soit justifiable sur pièces). */
  questionnaires: number | null
  /** Moyenne de l'item « Appréciation générale » sur ces questionnaires. */
  noteMoyenne: string | null
}

// Dépouillement intégral de l'archive, arrêté le 23/10/2026. Chaque note ci-dessous
// est relevée sur le questionnaire signé, pièce par pièce — jamais extrapolée.
//   2023 : 7 questionnaires (sessions Juniper JN0-104 d'octobre et novembre 2023)
//          somme 32, moyenne 4,571 — 4 notes à 5/5, 3 notes à 4/5
//   2024 : 23 questionnaires (JNCIA février, CCNA mars, CCNA septembre)
//          somme 112, moyenne 4,870 — 20 notes à 5/5, 3 notes à 4/5
//   2025 : 9 questionnaires (Workshop Cybersécurité WEB, 10 au 14 mars 2025)
//          somme 43, moyenne 4,778
// Total 39 questionnaires, somme 187, moyenne 4,795 → SATISFACTION_GLOBALE.
export const RESULTATS_ANNUELS: ResultatAnnee[] = [
  { annee: '2023', formes: 115, abandons: 0, annulations: 0, reussiteParmiPresentes: '100 %', questionnaires: 7, noteMoyenne: '4,6/5' },
  { annee: '2024', formes: 272, abandons: 0, annulations: 0, reussiteParmiPresentes: '100 %', questionnaires: 23, noteMoyenne: '4,9/5' },
  { annee: '2025', formes: 131, abandons: 0, annulations: 0, reussiteParmiPresentes: '100 %', questionnaires: 9, noteMoyenne: '4,8/5' },
]

export const RESULTATS_TOTAL_FORMES = RESULTATS_ANNUELS.reduce((s, r) => s + r.formes, 0)

// ─────────────────────────────────────────────────────────────────────────────
// Indicateur 3 — taux d'obtention PAR CERTIFICATION
//
// ⚠️  À RENSEIGNER PAR L'ORGANISME, certification par certification, à partir
//     du registre de suivi et des attestations éditeurs. Tant qu'une entrée
//     n'est pas renseignée, la fiche affiche la mention d'absence de données
//     consolidées — c'est volontaire : publier un taux extrapolé constituerait
//     une communication susceptible d'induire le public en erreur
//     (indicateur 1 du RNQ V2).
//
// Exemple d'entrée :
//   'ccna-itn': { presentes: 12, obtenus: 12, periode: '2024-2025' },
// ─────────────────────────────────────────────────────────────────────────────
export interface TauxObtention {
  presentes: number
  obtenus: number
  periode: string
  /**
   * Intitulé EXACT de ce que le taux mesure. À renseigner dès que le taux ne
   * porte pas sur l'examen de certification de l'éditeur lui-même : un certificat
   * de fin de cours Cisco Networking Academy n'est pas la certification
   * CCNA 200-301, et les confondre serait une communication susceptible
   * d'induire le public en erreur (indicateur 1 du RNQ V2).
   */
  libelle?: string
  /** Vrai si ce taux ne porte PAS sur l'examen certifiant de l'éditeur */
  horsExamenCertifiant?: boolean
  /** Commentaire éventuel publié sous le taux */
  note?: string
}

export const TAUX_OBTENTION: Record<string, TauxObtention> = {
  // Source : bilans pédagogiques annuels 2023, 2024 et 2025 (registre de suivi).
  // Sont comptées les seules lignes portant la mention « Obtenu » et rattachables
  // sans ambiguïté à une formation du catalogue. Les mentions « Pas de certif »
  // correspondent à des apprenants qui n'ont pas souhaité présenter la
  // certification, celle-ci n'étant pas leur objectif : ils ne sont donc pas
  // comptés comme présentés, ce qui est cohérent avec le taux global publié.
  // Les parcours vendus en « kit » de plusieurs modules sont écartés : une
  // obtention de kit ne s'impute pas à une fiche unique sans interprétation.
  'ccna-itn': {
    presentes: 13, obtenus: 13, periode: '2023-2024',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — ITN',
    horsExamenCertifiant: true,
  },
  'cyberops': {
    presentes: 12, obtenus: 12, periode: '2023-2025',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — CyberOps Associate',
    horsExamenCertifiant: true,
  },
  'ccna-srwe': {
    presentes: 11, obtenus: 11, periode: '2023-2024',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — SRWE',
    horsExamenCertifiant: true,
  },
  'ccna-ensa': {
    presentes: 8, obtenus: 8, periode: '2023-2025',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — ENSA',
    horsExamenCertifiant: true,
  },
  'python-essentials-1': {
    presentes: 5, obtenus: 5, periode: '2023-2025',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — Python Essentials',
    horsExamenCertifiant: true,
  },
  'introduction-cybersecurite': {
    presentes: 3, obtenus: 3, periode: '2024',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — Introduction to Cybersecurity',
    horsExamenCertifiant: true,
  },
  'networking-essentials': {
    presentes: 3, obtenus: 3, periode: '2024-2025',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — Networking Essentials',
    horsExamenCertifiant: true,
  },
  'iot-introduction': {
    presentes: 3, obtenus: 3, periode: '2024',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — Introduction to IoT',
    horsExamenCertifiant: true,
  },
  'devnet-associate': {
    presentes: 2, obtenus: 2, periode: '2024',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — DevNet Associate',
    horsExamenCertifiant: true,
  },
  'it-essentials': {
    presentes: 2, obtenus: 2, periode: '2024',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — IT Essentials',
    horsExamenCertifiant: true,
  },
  'cybersecurity-essentials': {
    presentes: 1, obtenus: 1, periode: '2023',
    libelle: 'Certificat de fin de cours Cisco Networking Academy — Cybersecurity Essentials',
    horsExamenCertifiant: true,
  },
}


export interface TauxObtentionAffichage {
  disponible: boolean
  valeur: string
  /** Ce que le taux mesure, affiché sous le chiffre */
  sousTitre?: string
  detail: string
}

export function getTauxObtention(slug: string): TauxObtentionAffichage {
  const t = TAUX_OBTENTION[slug]
  if (t && t.presentes > 0) {
    const pct = Math.round((t.obtenus / t.presentes) * 1000) / 10
    const quoi = t.libelle ?? 'la certification visée'
    return {
      disponible: true,
      valeur: `${pct.toString().replace('.', ',')} %`,
      sousTitre: t.libelle,
      detail:
        `${t.obtenus} obtention(s) sur ${t.presentes} candidat(s) évalué(s) — période ${t.periode}. ` +
        `Ce taux porte sur : ${quoi}. Justifié sur pièces : relevés et attestations de l'éditeur.` +
        (t.horsExamenCertifiant
          ? ' Il ne mesure PAS la réussite à l\'examen de certification de l\'éditeur, ' +
            'passé séparément en centre agréé : aucun taux consolidé n\'est publié à ce jour pour cet examen.'
          : '') +
        (t.note ? ` ${t.note}` : ''),
    }
  }
  return {
    disponible: false,
    valeur: 'Non communiqué',
    detail:
      'Aucune donnée consolidée n\'est publiée à ce jour pour cette certification prise isolément : ' +
      'nous préférons l\'écrire plutôt que de reporter le taux global, ce qui induirait le public en erreur. ' +
      `Résultats consolidés tous dispositifs confondus : ${RESULTATS_TOTAL_FORMES} candidats formés sur 2023-2025, ` +
      '100 % de réussite parmi les candidats présentés à l\'examen. ' +
      'Méthode de calcul et périmètre publiés sur la page Démarche qualité.',
  }
}
