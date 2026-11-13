import { getFormationBySlug, getPrixElearning, getPrixPresentiel } from '../data/catalogue'

/**
 * SchemaCours — données structurées schema.org/Course pour une fiche formation.
 *
 * Posé le 13/11/2026. Jusqu'ici seule la page d'accueil portait du JSON-LD, et
 * il décrivait l'organisme : aucune des 37 fiches n'était éligible aux
 * résultats enrichis « formation » des moteurs de recherche.
 *
 * RÈGLE : ce composant ne reçoit qu'un slug et lit tout le reste dans
 * `catalogue.ts`. Rien n'est recopié ici — ni tarif, ni durée, ni intitulé de
 * certification. Une correction au catalogue se propage donc d'elle-même aux
 * données structurées, et celles-ci ne peuvent pas diverger de ce que la page
 * affiche au visiteur. C'est une exigence de l'indicateur 1 du RNQ autant
 * qu'une règle des moteurs : les données structurées doivent correspondre au
 * contenu visible, sous peine de sanction.
 *
 * Le prix déclaré est celui réellement affiché au public. Quand aucun tarif
 * n'est public (JNCIA-Junos, devis au volume), aucune `offers` n'est émise :
 * mieux vaut pas de prix qu'un prix faux.
 */

const ORGANISME = {
  '@type': 'EducationalOrganization',
  name: 'GALACTUS Digital',
  url: 'https://galactusdigital.com',
  identifier: 'NDA 11 75 59933 75',
} as const

/** Correspondance modalité catalogue → vocabulaire schema.org */
function modeDeCours(modalites: readonly string[]): string[] {
  const modes: string[] = []
  if (modalites.includes('E-learning') || modalites.includes('FOAD')) modes.push('online')
  if (modalites.includes('Présentiel')) modes.push('onsite')
  return modes
}

/** Durée « 70 heures » → ISO 8601 « PT70H », exigé par schema.org */
function dureeIso(duree: string): string | undefined {
  const h = duree.match(/(\d+)\s*(?:heures?|h)\b/i)
  return h ? `PT${h[1]}H` : undefined
}

export function SchemaCours({ slug }: { slug: string }) {
  const f = getFormationBySlug(slug)
  if (!f) return null

  // Le prix annoncé est celui que la page affiche, jamais un autre.
  const prix = f.prixPublicElearning
    ? getPrixElearning(f)
    : f.prixPublic
      ? getPrixPresentiel(f)
      : f.prixPublicFoad
        ? f.prix.foad
        : null

  // Langue réellement dispensée. Trois cours Cisco du catalogue IA n'existent
  // qu'en anglais : annoncer « fr » contredirait leur propre fiche, qui le dit
  // dans ses prérequis.
  const langue = f.langue ?? 'fr'

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: f.titre,
    description: f.description,
    url: `https://galactusdigital.com/formations/${f.slug}`,
    inLanguage: langue,
    provider: ORGANISME,
    educationalLevel: f.niveau,
    teaches: f.titreLong,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: modeDeCours(f.modalites),
      courseWorkload: dureeIso(f.duree),
      inLanguage: langue,
      location: {
        '@type': 'VirtualLocation',
        url: `https://galactusdigital.com/formations/${f.slug}`,
      },
    },
  }

  // Éditeur du programme, quand il diffère de l'organisme qui dispense
  if (f.editeur) {
    schema.educationalCredentialAwarded = f.certification
    schema.provider = ORGANISME
    schema.publisher = { '@type': 'Organization', name: f.editeur }
  }

  if (prix !== null && prix !== undefined) {
    schema.offers = {
      '@type': 'Offer',
      price: String(prix),
      priceCurrency: 'EUR',
      category: 'Paid',
      url: `https://galactusdigital.com/formations/${f.slug}`,
      availability: 'https://schema.org/InStock',
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
