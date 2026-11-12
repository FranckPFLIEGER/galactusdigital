// ─────────────────────────────────────────────────────────────────────────────
// sessions.ts — SOURCE UNIQUE des sessions programmées
//
// Utilisé par : routes/calendrier.tsx, routes/formations/index.tsx (badge
// « prochaine session » des cartes) et le bloc tarifs des fiches formation.
//
// Pour ajouter une session : une ligne dans SESSIONS_PLANIFIEES. Les libellés
// de date sont calculés, il n'y a plus rien à recopier ailleurs.
// ─────────────────────────────────────────────────────────────────────────────

import type { Modalite, Territoire } from './catalogue'

export interface SessionPlanifiee {
  slug: string
  territoire: Territoire
  modalite: Modalite
  /** Date de début, ISO YYYY-MM-DD */
  debut: string
  /** Date de fin, ISO YYYY-MM-DD. Égale à `debut` pour une session d'une journée. */
  fin: string
  /** Nombre de places, par défaut 12 en présentiel et 20 à distance */
  placesMax?: number
  /**
   * Session dont l'effectif est atteint. Elle reste publiée — c'est une action
   * de formation réalisée, traçable en audit Qualiopi — mais l'inscription est
   * fermée : l'indicateur 1 interdit d'appeler à s'inscrire à une session qui
   * ne peut plus accueillir personne.
   */
  complet?: boolean
  /** Effectif inscrit, publié lorsque la session est complète */
  inscrits?: number
}

export const LIEUX: Record<Territoire, string> = {
  'Martinique':       'Pointe Madeleine — CAP EST, Le François 97240',
  'Guadeloupe':       'Pointe de la Verdure, Gosier 97190',
  'Paris':            '66 avenue des Champs-Élysées, 75008 Paris',
  'Tous territoires': 'En ligne — WEBEX · plateformes officielles éditeurs',
}

// ── Sessions programmées ─────────────────────────────────────────────────────
export const SESSIONS_PLANIFIEES: SessionPlanifiee[] = [
  // FOAD — Juniper
  { slug: 'jncia-junos', territoire: 'Tous territoires', modalite: 'FOAD', debut: '2026-10-20', fin: '2026-10-30', complet: true, inscrits: 1 },

  // Présentiel Martinique — planning 2027
{ slug: 'ccna-cisco', territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-03-15', fin: '2027-03-19' },
]

// ── Libellés ─────────────────────────────────────────────────────────────────

const MOIS_COURT = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
                    'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']

function d(iso: string): Date {
  const [y, m, j] = iso.split('-').map(Number)
  return new Date(y, m - 1, j)
}

function jjmmaa(iso: string): string {
  const [y, m, j] = iso.split('-')
  return `${j}/${m}/${y.slice(2)}`
}

/** « 25 janv. 2027 » — pour les badges de carte */
export function labelCourt(s: SessionPlanifiee): string {
  const dt = d(s.debut)
  return `${dt.getDate()} ${MOIS_COURT[dt.getMonth()]} ${dt.getFullYear()}`
}

/** « Du 25/01/27 au 29/01/27 » ou « Le 25/02/27 » — pour le calendrier */
export function labelPlage(s: SessionPlanifiee): string {
  return s.debut === s.fin
    ? `Le ${jjmmaa(s.debut)}`
    : `Du ${jjmmaa(s.debut)} au ${jjmmaa(s.fin)}`
}

export function places(s: SessionPlanifiee): number {
  return s.placesMax ?? (s.modalite === 'Présentiel' ? 12 : 20)
}

// ── Accès ────────────────────────────────────────────────────────────────────

function aVenir(s: SessionPlanifiee): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return d(s.debut) >= today
}

/** Toutes les sessions à venir, triées par date */
export function getSessionsAVenir(): SessionPlanifiee[] {
  return SESSIONS_PLANIFIEES.filter(aVenir).sort((a, b) => a.debut.localeCompare(b.debut))
}

/** Sessions à venir d'une formation donnée */
export function getSessionsFormation(slug: string): SessionPlanifiee[] {
  return getSessionsAVenir().filter(s => s.slug === slug)
}

/** Prochaine session à venir d'une formation (ou null) */
export function getProchaineSession(slug: string): (SessionPlanifiee & { dateLabel: string }) | null {
  const s = getSessionsFormation(slug)[0]
  return s ? { ...s, dateLabel: labelCourt(s) } : null
}

/** true si la formation a au moins une session programmée */
export function aUneSession(slug: string): boolean {
  return getSessionsFormation(slug).length > 0
}
