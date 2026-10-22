import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/financements')({
  head: () => ({
    meta: [
      { title: 'Guide du financement des formations — GALACTUS Digital' },
      { name: 'description', content: "Financer une formation GALACTUS Digital : OPCO, plan de développement des compétences, France Travail AIF et POEI via Kairos, dispositifs régionaux et FSE+ des territoires ultramarins. Formations non éligibles au CPF." },
      { property: 'og:title', content: 'Guide du financement des formations — GALACTUS Digital' },
      { property: 'og:url', content: 'https://galactusdigital.com/financements' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/financements' }],
  }),
  component: FinancementsPage,
})


function FinancementsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Financements</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Guide du financement<br />de vos formations
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Plusieurs dispositifs permettent de financer vos formations GALACTUS Digital. Nos formations sont exonérées de TVA (article 261-4-4° du CGI). Nous vous accompagnons dans vos démarches.
            </p>
            <div style={{ marginTop: '1.5rem', maxWidth: '760px', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.30)', borderLeft: '4px solid var(--g-red)', padding: '1.1rem 1.4rem' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.5rem' }}>
                À savoir avant toute démarche
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.72)', margin: 0, lineHeight: 1.75 }}>
                Nos formations <strong style={{ color: '#fff' }}>ne sont pas éligibles au compte personnel de formation (CPF)</strong> :
                GALACTUS Digital ne détient aucune habilitation de certificateur lui permettant de
                délivrer les certifications préparées au titre d'un enregistrement au RNCP ou au
                Répertoire spécifique de France Compétences. Aucune offre GALACTUS Digital n'est publiée
                sur Mon Compte Formation. Les dispositifs mobilisables sont ceux listés ci-dessous.
                Cette information est publiée au titre du critère 1 du Référentiel National Qualité
                (décret n° 2026-728 du 1er août 2026) et de l'article 12 bis de nos CGV.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Dispositifs de financement</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'OPCO — Opérateurs de Compétences',
                  tag: 'Entreprises',
                  items: [
                    'Prise en charge partielle ou totale selon votre branche',
                    'Organisme inscrit au catalogue de référence des prestataires AFDAS (art. R.6316-2)',
                    "L'accord de financement doit être communiqué avant le démarrage",
                    'En cas de prise en charge partielle, le reste est facturé au client',
                  ],
                  cta: 'Nous contacter pour identifier votre OPCO',
                  href: '/#contact',
                },
                {
                  title: 'Plan de Développement des Compétences',
                  tag: 'Entreprises',
                  items: [
                    "Financé directement par l'employeur",
                    "Intégré dans le plan de formation annuel de l'entreprise",
                    'Déductible des obligations de participation à la formation',
                    'Convention de formation établie par GALACTUS Digital',
                  ],
                  cta: 'Demander un devis',
                  href: '/#contact',
                },
                {
                  title: 'France Travail',
                  tag: "Demandeurs d'emploi",
                  items: [
                    'AIF — Aide Individuelle à la Formation, instruite via Kairos',
                    'POEI — Préparation Opérationnelle à l\'Emploi Individuelle, en lien avec un employeur',
                    'Dossier à constituer avec votre conseiller France Travail',
                    'GALACTUS Digital est référencé sur Kairos et monte le dossier avec vous',
                  ],
                  cta: 'Contactez votre conseiller France Travail',
                  href: 'https://www.francetravail.fr',
                },
                {
                  title: 'Financement Régional & DOM',
                  tag: 'Territoires ultramarins',
                  items: [
                    'Dispositifs spécifiques aux Antilles, Guyane et La Réunion, y compris FSE+',
                    'Financement AGEFIPH pour les personnes en situation de handicap',
                    'Dispositifs régionaux selon votre territoire',
                    'GALACTUS Digital vous oriente vers les bons interlocuteurs',
                  ],
                  cta: 'Nous consulter',
                  href: '/#contact',
                },
                {
                  title: 'Périmètre et reste à charge',
                  tag: 'À lire avant toute demande',
                  items: [
                    "Les formations ne sont pas vendues en direct à un particulier qui les financerait lui-même",
                    "Toute entrée en formation est adossée à un employeur ou à un financeur tiers",
                    "Lorsque la prise en charge est partielle, le solde est réglé par l'employeur ou un financeur complémentaire",
                    "TVA non applicable — article 261-4-4°-a du CGI",
                  ],
                  cta: 'Vérifier mon éligibilité',
                  href: '/#contact',
                },
              ].map(f => (
                <div key={f.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', margin: 0 }}>{f.title}</h3>
                    <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.65rem', whiteSpace: 'nowrap' }}>{f.tag}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {f.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: '#4a4a48' }}>
                        <CheckCircle size={14} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-title)', fontSize: '0.75rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-red)', textDecoration: 'none' }}>
                    <ArrowRight size={14} /> {f.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Besoin d'aide pour le financement ?</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Nous vous accompagnons dans l'identification du meilleur dispositif de financement adapté à votre situation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="/#contact" className="btn-red"><Mail size={16} /> Nous écrire</a>
            </div>
          </div>
        </section>


        <style>{`
          @media (max-width: 640px) {
            main section { padding: 2.5rem 1rem !important; }
          }
          @media (max-width: 480px) {
            main section { padding: 2rem 0.75rem !important; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
