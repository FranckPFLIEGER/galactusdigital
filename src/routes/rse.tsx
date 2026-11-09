import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RSE } from '../components/RSE'

export const Route = createFileRoute('/rse')({
  head: () => ({
    meta: [
      { title: 'Notre engagement RSE — GALACTUS Digital' },
      { name: 'description', content: 'Responsabilité sociétale de GALACTUS Digital : un numérique responsable, inclusif et ancré dans les territoires ultramarins, aligné sur le vadémécum France Compétences 01/2026.' },
      { property: 'og:title', content: 'Notre engagement RSE — GALACTUS Digital' },
      { property: 'og:url', content: 'https://galactusdigital.com/rse' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/rse' }],
  }),
  component: RSEPage,
})

function RSEPage() {
  return (
    <>
      <Header />
      <main className="page-below-header" style={{ background: 'var(--g-black)' }}>
        <RSE />
      </main>
      <Footer />
    </>
  )
}
