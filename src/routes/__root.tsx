import '../styles.css'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'GALACTUS Digital — Formation certifiée IT aux Caraïbes' },
      { name: 'description', content: 'Organisme de formation certifié Qualiopi spécialisé certifications IT — Cisco, Microsoft, CompTIA, IPv6 Forum, EC-Council, PMI. Présence sur 7 territoires ultramarins. NDA : 11 75 59933 75.' },
      { name: 'keywords', content: 'formation IT Caraïbes, certification Cisco CCNA, formation Microsoft Azure, CompTIA, IPv6, Guadeloupe, Martinique, Guyane, Réunion, Qualiopi' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://galactusdigital.com/' },
      { property: 'og:title', content: 'GALACTUS Digital — Formation certifiée IT aux Caraïbes' },
      { property: 'og:description', content: 'Organisme de formation certifié Qualiopi. Certifications Cisco, Microsoft, CompTIA, IPv6 Forum. 100% de réussite. 7 territoires ultramarins.' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'geo.region', content: 'GP' },
      { name: 'geo.placename', content: 'Guadeloupe, Martinique, Guyane, Réunion, France' },
    ],
    links: [
      { rel: 'icon', href: '/galactus-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Nunito:wght@400;600;700&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: 'GALACTUS Digital',
          url: 'https://galactusdigital.com',
          logo: 'https://galactusdigital.com/galactus-icon.png',
          description: 'Organisme de formation certifié Qualiopi spécialisé dans les certifications IT aux Caraïbes.',
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
            { '@type': 'PropertyValue', name: 'NDA', value: '11755993375' },
            { '@type': 'PropertyValue', name: 'SIRET', value: '88043041800017' },
          ],
          areaServed: [
            'Guadeloupe', 'Martinique', 'Guyane', 'Saint-Martin',
            'Saint-Barthélemy', 'Réunion', 'France Hexagonale',
          ],
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            name: 'Certification Qualiopi',
            credentialCategory: 'Actions de formation',
            recognizedBy: { '@type': 'Organization', name: 'ICPF — Accréditation n° 5-0616' },
          },
        }),
      },
    ],
  }),
  component: () => <Outlet />,
})
