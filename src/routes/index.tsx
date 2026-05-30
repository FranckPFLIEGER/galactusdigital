import { createFileRoute } from '@tanstack/react-router'
import { Header }         from '../components/Header'
import { Hero }           from '../components/Hero'
import { Stats }          from '../components/Stats'
import { President }      from '../components/President'
import { About }          from '../components/About'
import { Presence }       from '../components/Presence'
import { Clients }        from '../components/Clients'
import { Results }        from '../components/Results'
import { Satisfaction }   from '../components/Satisfaction'
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
        {/* 1 — Qui sommes-nous, accroche */}
        <Hero />
        {/* 2 — Nos chiffres clés */}
        <Stats />
        {/* 3 — Mot du Président — notre vision */}
        <President />
        {/* 4 — Notre expertise métier */}
        <About />
        {/* 5 — Notre présence sur 7 territoires */}
        <Presence />
        {/* 6 — Ils nous font confiance */}
        <Clients />
        {/* 7 — Nos résultats — preuve chiffrée */}
        <Results />
        {/* 8 — Satisfaction apprenants */}
        <Satisfaction />
        {/* 9 — Nos services intra/inter */}
        <Services />
        {/* 10 — Certifications éditeurs officiels */}
        <Certifications />
        {/* 11 — Pourquoi nous choisir */}
        <WhyUs />
        {/* 12 — Nos partenaires certificateurs */}
        <Partners />
        {/* 13 — Actualités & Veille IT */}
        <News />
        {/* 14 — Reconnaissances internationales */}
        <AwardsSection />
        {/* 15 — Engagement RSE */}
        <RSE />
        {/* 16 — Contact */}
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
