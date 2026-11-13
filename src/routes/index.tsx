import '@/styles.css'
import { createFileRoute } from '@tanstack/react-router'
import { Header }         from '@/components/Header'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Hero }           from '@/components/Hero'
import { QualiopiBanner } from '@/components/QualiopiBanner'
import { BanniereInstruction } from '@/components/BanniereInstruction'
import { Stats }          from '@/components/Stats'
import { President }      from '@/components/President'
import { About }          from '@/components/About'
import { Presence }       from '@/components/Presence'
import { Clients }        from '@/components/Clients'
import { Results }        from '@/components/Results'
import { Satisfaction }   from '@/components/Satisfaction'
import { Services }       from '@/components/Services'
import { WhyUs }          from '@/components/WhyUs'
import { Partners }       from '@/components/Partners'
import { NewsTeaser }     from '@/components/NewsTeaser'
import { AwardsSection }  from '@/components/Awards'
import { TemoignagesTeaser } from '@/components/TemoignagesTeaser'
import { RSETeaser }      from '@/components/RSETeaser'
import { ContactCTA }     from '@/components/ContactCTA'
import { Footer }         from '@/components/Footer'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { property: 'og:url', content: 'https://galactusdigital.com/' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/' }],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <QualiopiBanner />
        <BanniereInstruction compact />
        <Stats />
        <President />
        <About />
        <Presence />
        <Services />
        <Satisfaction />
        <Clients />
        <Results />
        {/*
          Posé juste après les indicateurs, et c'est voulu : les chiffres
          disent que ça marche, ces trois paroles disent à qui. L'accueil
          comptait vingt sections et aucune ne donnait la parole à une
          apprenante. Les citations viennent de data/temoignages.ts, jamais
          recopiées ici. 13/11/2026.
        */}
        <TemoignagesTeaser />
        <Partners />
        <WhyUs />
        <NewsTeaser />
        <AwardsSection />
        <RSETeaser />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
