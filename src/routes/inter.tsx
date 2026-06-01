import '../styles.css'
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
        <Hero />
        <Stats />
        <President />
        <About />
        <Presence />
        <Services />
        <Satisfaction />
        <Clients />
        <Results />
        <Certifications />
        <Partners />
        <WhyUs />
        <News />
        <AwardsSection />
        <RSE />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
