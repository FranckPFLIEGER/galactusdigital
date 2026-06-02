import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'GALACTUS Digital — Formation certifiante IT des territoires ultramarins' },
      {
        name: 'description',
        content: 'Organisme de formation certifié Qualiopi spécialisé certifications IT — Cisco, Microsoft, CompTIA, IPv6 Forum, EC-Council, PMI. 7 territoires ultramarins. NDA : 11 75 59933 75.',
      },
      { property: 'og:type',        content: 'website' },
      { property: 'og:url',         content: 'https://galactusdigital.com/' },
      { property: 'og:title',       content: 'GALACTUS Digital — Formation certifiante IT des territoires ultramarins' },
      {
        property: 'og:description',
        content: 'Organisme de formation certifié Qualiopi. Certifications Cisco, Microsoft, CompTIA, IPv6 Forum. 100% de réussite. 7 territoires ultramarins.',
      },
      { property: 'og:image',       content: 'https://galactusdigital.com/galactus-icon.png' },
      { property: 'og:locale',      content: 'fr_FR' },
      { property: 'og:site_name',   content: 'GALACTUS Digital' },
      { name: 'twitter:card',        content: 'summary_large_image' },
      { name: 'twitter:title',       content: 'GALACTUS Digital — Formation certifiante IT des territoires ultramarins' },
      {
        name: 'twitter:description',
        content: 'Formations IT officielles aux Caraïbes et Océan Indien. Certifié Qualiopi. Microsoft, Cisco, CompTIA, EC-Council, PMI.',
      },
      { name: 'twitter:image',       content: 'https://galactusdigital.com/galactus-icon.png' },
      { name: 'robots',              content: 'index, follow' },
      { name: 'theme-color',         content: '#1D1D1B' },
      { name: 'author',              content: 'GALACTUS Digital' },
      { name: 'geo.region',          content: 'GP' },
      { name: 'geo.placename',       content: 'Guadeloupe, Martinique, Caraïbes, Océan Indien, France' },
      {
        name: 'keywords',
        content: 'formation IT territoires ultramarins, certification Cisco CCNA, formation Microsoft Azure, CompTIA, IPv6, Guadeloupe, Martinique, Guyane, Réunion, Qualiopi, organisme de formation certifié, NDA 11 75 59933 75',
      },
    ],
    links: [
      { rel: 'canonical', href: 'https://galactusdigital.com' },
      { rel: 'icon', type: 'image/png', href: '/galactus-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Nunito:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'GALACTUS Digital',
  url: 'https://galactusdigital.com',
  logo: 'https://galactusdigital.com/galactus-icon.png',
  description: "Organisme de formation certifié Qualiopi spécialisé dans les certifications IT des territoires ultramarins.",
  telephone: '+33781074746',
  email: 'president@galactusdigital.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '66 avenue des Champs Élysées',
    postalCode: '75008',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  identifier: [
    { '@type': 'PropertyValue', name: 'NDA',   value: '11755993375' },
    { '@type': 'PropertyValue', name: 'SIRET', value: '88043041800017' },
  ],
  areaServed: ['Guadeloupe', 'Martinique', 'Guyane', 'Saint-Martin', 'Saint-Barthélemy', 'Réunion', 'France Hexagonale'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Certification Qualiopi',
    credentialCategory: 'Actions de formation',
    recognizedBy: { '@type': 'Organization', name: 'ICPF — Accréditation n° 5-0616' },
  },
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
