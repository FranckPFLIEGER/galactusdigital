import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { News } from '../components/News'
import { BanniereInstruction } from '../components/BanniereInstruction'

export const Route = createFileRoute('/actualites')({
  head: () => ({
    meta: [
      { title: 'Actualités & veille réglementaire — GALACTUS Digital' },
      { name: 'description', content: "Veille reglementaire et technologique de GALACTUS Digital : Referentiel National Qualite V2 (decret 2026-728, applicable au 1er novembre 2026), dossiers de certification deposes au Repertoire specifique, evolutions Cisco CCNA v2.0 et certifications Microsoft." },
      { property: 'og:title', content: 'Actualités & veille réglementaire — GALACTUS Digital' },
      { property: 'og:description', content: "Veille reglementaire Qualiopi RNQ V2 et veille technologique Cisco, Microsoft et Juniper." },
      { property: 'og:url', content: 'https://galactusdigital.com/actualites' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/actualites' }],
  }),
  component: ActualitesPage,
})

function ActualitesPage() {
  return (
    <>
      <Header />
      <main className="page-below-header" style={{ background: 'var(--g-offwhite)' }}>

        <News />

        {/* ── Message aux instructeurs et auditeurs France Compétences ── */}
        <BanniereInstruction />

      </main>
      <Footer />
    </>
  )
}
