import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'GALACTUS Digital — Certifications IT aux Caraïbes' },
      {
        name: 'description',
        content:
          "GALACTUS Digital : organisme de formation certifié Qualiopi aux Caraïbes. Certifications officielles Microsoft, Cisco, CompTIA, EC-Council, IPv6 Forum, PMI — en intra et inter-entreprise sur 7 territoires ultramarins.",
      },
      { property: 'og:type',        content: 'website' },
      { property: 'og:url',         content: 'https://galactusdigital.com' },
      { property: 'og:title',       content: 'GALACTUS Digital — Certifications IT aux Caraïbes' },
      {
        property: 'og:description',
        content: "Formations officielles Microsoft, Cisco, CompTIA et plus — certifiées Qualiopi, déployées sur 7 territoires aux Caraïbes.",
      },
      { property: 'og:image',       content: 'https://galactusdigital.com/galactus-icon.png' },
      { property: 'og:locale',      content: 'fr_FR' },
      { property: 'og:site_name',   content: 'GALACTUS Digital' },
      { name: 'twitter:card',        content: 'summary_large_image' },
      { name: 'twitter:title',       content: 'GALACTUS Digital — Certifications IT aux Caraïbes' },
      {
        name: 'twitter:description',
        content: "Formations IT officielles aux Caraïbes. Certifié Qualiopi. Microsoft, Cisco, CompTIA, EC-Council, PMI.",
      },
      { name: 'twitter:image',       content: 'https://galactusdigital.com/galactus-icon.png' },
      { name: 'robots',              content: 'index, follow' },
      { name: 'theme-color',         content: '#1D1D1B' },
      { name: 'author',              content: 'GALACTUS Digital' },
      { name: 'geo.region',          content: 'GP' },
      { name: 'geo.placename',       content: 'Guadeloupe, Martinique, Caraïbes' },
      {
        name: 'keywords',
        content:
          'certifications IT Caraïbes, formation Microsoft Guadeloupe, formation Cisco Martinique, CompTIA Caraïbes, EC-Council, PMI, IPv6 Forum, formation certifiante, Qualiopi, intra-entreprise, inter-entreprise',
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
  description: "Organisme de formation certifié Qualiopi spécialisé dans les certifications IT officielles aux Caraïbes.",
  telephone: '+33781074746',
  email: 'galactusdigital@gmail.com',
  areaServed: ['Guadeloupe', 'Martinique', 'Guyane', 'Saint-Martin', 'Saint-Barthélemy', 'Réunion', 'France'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Qualiopi',
    credentialCategory: 'Certification qualité',
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
