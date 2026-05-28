import { createFileRoute } from '@tanstack/react-router'
import { Header }         from '../components/Header'
import { Hero }           from '../components/Hero'
import { Stats }          from '../components/Stats'
import { About }          from '../components/About'
import { Clients }        from '../components/Clients'
import { Results }        from '../components/Results'
import { Services }       from '../components/Services'
import { Certifications } from '../components/Certifications'
import { WhyUs }          from '../components/WhyUs'
import { News }           from '../components/News'
import { AwardsSection }  from '../components/Awards'
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
        <Hero />
        <Stats />
        <About />
        <Clients />
        <Results />
        <Services />
        <Certifications />
        <WhyUs />
        <News />
        <AwardsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
