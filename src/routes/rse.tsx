import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RSE } from '../components/RSE'

export const Route = createFileRoute('/rse')({
  component: RSEPage,
})

function RSEPage() {
  return (
    <>
      <Header />
      <main>
        <RSE />
      </main>
      <Footer />
    </>
  )
}
