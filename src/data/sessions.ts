// Prochaines sessions planifiées (source légère pour les cartes du catalogue).
// Miroir des sessions présentiel Martinique du calendrier — tenir à jour ici
// quand une date change. Format dateLabel identique au calendrier.
export interface SessionPlanifiee {
  slug: string
  territoire: string
  dateLabel: string
  // Date de début, pour trier « la plus proche » et masquer les sessions passées.
  debut: string // ISO YYYY-MM-DD
}

export const SESSIONS_PLANIFIEES: SessionPlanifiee[] = [
  { slug: 'md-102',     territoire: 'Martinique', dateLabel: '25 janv. 2027', debut: '2027-01-25' },
  { slug: 'pl-7002',    territoire: 'Martinique', dateLabel: '25 févr. 2027', debut: '2027-02-25' },
  { slug: 'az-802',     territoire: 'Martinique', dateLabel: '8 mars 2027',   debut: '2027-03-08' },
  { slug: 'ccna-cisco', territoire: 'Martinique', dateLabel: '15 mars 2027',  debut: '2027-03-15' },
  { slug: 'ms-102',     territoire: 'Martinique', dateLabel: '5 avr. 2027',   debut: '2027-04-05' },
  { slug: 'pl-7008',    territoire: 'Martinique', dateLabel: '20 avr. 2027',  debut: '2027-04-20' },
  { slug: 'sc-300',     territoire: 'Martinique', dateLabel: '4 mai 2027',    debut: '2027-05-04' },
  { slug: 'ms-4017',    territoire: 'Martinique', dateLabel: '18 mai 2027',   debut: '2027-05-18' },
  { slug: 'az-1008',    territoire: 'Martinique', dateLabel: '3 juin 2027',   debut: '2027-06-03' },
  { slug: 'az-104',     territoire: 'Martinique', dateLabel: '14 juin 2027',  debut: '2027-06-14' },
  { slug: 'sc-401',     territoire: 'Martinique', dateLabel: '4 oct. 2027',   debut: '2027-10-04' },
  { slug: 'pl-300',     territoire: 'Martinique', dateLabel: '15 nov. 2027',  debut: '2027-11-15' },
]

// Retourne la prochaine session à venir pour une formation (ou null).
// « À venir » = date de début >= aujourd'hui ; la plus proche est renvoyée.
export function getProchaineSession(slug: string): SessionPlanifiee | null {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const futures = SESSIONS_PLANIFIEES
    .filter(s => s.slug === slug && new Date(s.debut) >= today)
    .sort((a, b) => a.debut.localeCompare(b.debut))
  return futures[0] ?? null
}
