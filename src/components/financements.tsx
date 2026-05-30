import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/financements')({
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
              Plusieurs dispositifs permettent de financer vos formations GALACTUS Digital. Nos formations sont exonérées de TVA (article 293B du CGI). Nous vous accompagnons dans vos démarches.
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Dispositifs de financement</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'CPF — Compte Personnel de Formation',
                  tag: 'Particuliers & Salariés',
                  color: '#E41F26',
                  items: [
                    'Utilisable par tout salarié ou demandeur d\'emploi',
                    'Consultez votre solde sur moncompteformation.gouv.fr',
                    'Nos formations certifiantes sont éligibles au CPF',
                    'Démarche 100% en ligne — simple et rapide',
                  ],
                  cta: 'moncompteformation.gouv.fr',
                  href: 'https://www.moncompteformation.gouv.fr',
                },
                {
                  title: 'OPCO — Opérateurs de Compétences',
                  tag: 'Entreprises',
                  color: '#E41F26',
                  items: [
                    'Prise en charge partielle ou totale selon votre branche',
                    'L\'accord de financement doit être communiqué avant le démarrage',
                    'GALACTUS Digital établit les documents nécessaires',
                    'En cas de prise en charge partielle, le reste est facturé au client',
                  ],
                  cta: 'Nous contacter pour identifier votre OPCO',
                  href: '#contact',
                },
                {
                  title: 'Plan de Développement des Compétences',
                  tag: 'Entreprises',
                  color: '#E41F26',
                  items: [
                    'Financé directement par l\'employeur',
                    'Intégré dans le plan de formation annuel de l\'entreprise',
                    'Déductible des obligations de participation à la formation',
                    'Convention de formation établie par GALACTUS Digital',
                  ],
                  cta: 'Demander un devis',
                  href: '#contact',
                },
                {
                  title: 'France Travail (Pôle Emploi)',
                  tag: 'Demandeurs d\'emploi',
                  color: '#E41F26',
                  items: [
                    'AIF — Aide Individuelle à la Formation',
                    'Financement possible pour les demandeurs d\'emploi',
                    'Dossier à constituer avec votre conseiller France Travail',
                    'GALACTUS Digital vous accompagne dans la constitution du dossier',
                  ],
                  cta: 'Contactez votre conseiller France Travail',
                  href: 'https://www.francetravail.fr',
                },
                {
                  title: 'Financement Régional & DOM',
                  tag: 'Territoires ultramarins',
                  color: '#E41F26',
                  items: [
                    'Dispositifs spécifiques aux Antilles, Guyane et Réunion',
                    'Financement AGEFIPH pour les personnes en situation de handicap',
                    'Dispositifs régionaux selon votre territoire',
                    'GALACTUS Digital vous oriente vers les bons interlocuteurs',
                  ],
                  cta: 'Nous consulter',
                  href: '#contact',
                },
                {
                  title: 'Financement personnel',
                  tag: 'Particuliers',
                  color: '#E41F26',
                  items: [
                    'Paiement à l\'issue de la formation, à réception de facture',
                    'TVA non applicable — article 293B du CGI',
                    'Paiement échelonné possible sur demande',
                    'Devis gratuit et sans engagement',
                  ],
                  cta: 'Demander un devis',
                  href: '#contact',
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
                  <a href={f.href} target={f.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
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
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Nous écrire</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
