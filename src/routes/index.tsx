import { createFileRoute } from '@tanstack/react-router'
import { Header }         from '../components/Header'
import { Hero }           from '../components/Hero'
import { Stats }          from '../components/Stats'
import { President }      from '../components/President'
import { About }          from '../components/About'
import { Presence }       from '../components/Presence'
import { Clients }        from '../components/Clients'
import { Results }        from '../components/Results'
import { Services }       from '../components/Services'
import { Certifications } from '../components/Certifications'
import { WhyUs }          from '../components/WhyUs'
import { Partners }       from '../components/Partners'
import { News }           from '../components/News'
import { AwardsSection }  from '../components/Awards'
import { RSE }            from '../components/RSE'
import { ContactCTA }     from '../components/ContactCTA'
import { Footer }         from '../components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Hero />

        {/* Chiffres clés */}
        <Stats />

        {/* Qui Sommes-Nous */}
        <President />
        <About />
        <Presence />

        {/* Références & Résultats */}
        <Clients />
        <Results />

        {/* Nos Services */}
        <Services />

        {/* Certifications / Éditeurs */}
        <Certifications />

        {/* Pourquoi Nous Choisir */}
        <WhyUs />

        {/* Partenaires */}
        <Partners />

        {/* Actualités */}
        <News />

        {/* Awards */}
        <AwardsSection />

        {/* RSE */}
        <RSE />

        {/* Contact */}
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
