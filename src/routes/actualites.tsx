import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { News } from '../components/News'

export const Route = createFileRoute('/actualites')({
  component: ActualitesPage,
})

function ActualitesPage() {
  return (
    <>
      <Header />
      <main className="page-below-header" style={{ background: 'var(--g-offwhite)' }}>
        <News />
      </main>
      <Footer />
    </>
  )
}
