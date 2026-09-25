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
}

export const LIEUX: Record<Territoire, string> = {
  'Martinique':       'Pointe Madeleine — CAP EST, Le François 97240',
  'Guadeloupe':       'Pointe de la Verdure, Gosier 97190',
  'Paris':            '66 avenue des Champs Élysées, 75008 Paris',
  'Tous territoires': 'En ligne — WEBEX · NetAcad · Microsoft Learn',
}

// ── Planning 2027 — sessions présentiel Martinique ───────────────────────────
export const SESSIONS_PLANIFIEES: SessionPlanifiee[] = [
  { slug: 'md-102',     territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-01-25', fin: '2027-01-29' },
  { slug: 'pl-7002',    territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-02-25', fin: '2027-02-25' },
  { slug: 'az-802',     territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-03-08', fin: '2027-03-12' },
  { slug: 'ccna-cisco', territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-03-15', fin: '2027-03-19' },
  { slug: 'ab-650',     territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-04-05', fin: '2027-04-09' },
  { slug: 'pl-7008',    territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-04-20', fin: '2027-04-20' },
  { slug: 'sc-300',     territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-05-04', fin: '2027-05-07' },
  { slug: 'ms-4017',    territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-05-18', fin: '2027-05-18' },
  { slug: 'az-1008',    territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-06-03', fin: '2027-06-03' },
  { slug: 'az-104',     territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-06-14', fin: '2027-06-17' },
  { slug: 'sc-401',     territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-10-04', fin: '2027-10-07' },
  { slug: 'pl-300',     territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-11-15', fin: '2027-11-18' },
  { slug: 'sc-500',     territoire: 'Martinique', modalite: 'Présentiel', debut: '2027-11-22', fin: '2027-11-25' },
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
