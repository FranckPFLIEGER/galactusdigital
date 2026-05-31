import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Users, CheckCircle, Clock, Phone, Mail, Target, Settings } from 'lucide-react'

export const Route = createFileRoute('/intra')({
  component: IntraPage,
})

function IntraPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Solutions</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Formation Intra-Entreprise
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Nous intervenons directement dans vos locaux avec un programme conçu sur mesure
              pour vos équipes. Vos collaborateurs se forment sans quitter leur environnement de travail,
              aux Caraïbes, dans l'Océan Indien ou en France hexagonale.
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Pourquoi choisir l'intra-entreprise ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: <Target size={24} color="white" />, title: 'Programme sur mesure', desc: 'Le contenu est adapté à vos outils, vos processus et vos objectifs métiers spécifiques. Pas de formation générique — une ingénierie pédagogique taillée pour votre organisation.' },
                { icon: <Users size={24} color="white" />, title: 'Cohésion d\'équipe', desc: 'Toute votre équipe progresse ensemble, au même rythme, avec les mêmes références. Idéal pour harmoniser les compétences et créer un langage commun.' },
                { icon: <Settings size={24} color="white" />, title: 'Flexibilité totale', desc: 'Dates, horaires, lieu — tout s\'adapte à vos contraintes opérationnelles. Nous venons à vous, pas l\'inverse.' },
              ].map(a => (
                <div key={a.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Comment ça se passe ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { num: '01', title: 'Audit des besoins', desc: 'Entretien avec votre responsable formation pour identifier les compétences à développer et les certifications visées.' },
                { num: '02', title: 'Programme personnalisé', desc: 'Nous concevons un programme aligné sur vos objectifs, vos outils et le niveau de vos équipes.' },
                { num: '03', title: 'Convention & devis', desc: 'Signature de la convention de formation. Accompagnement sur les dispositifs de financement OPCO/PDC.' },
                { num: '04', title: 'Formation & certification', desc: 'Déploiement chez vous. Passage des examens officiels éditeurs. Attestations remises à chaque participant.' },
              ].map(s => (
                <div key={s.num} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '1.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Caractéristiques */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Caractéristiques</h2>
                <div className="g-rule" />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Groupes de 4 à 15 participants',
                    'Formateur certifié dédié à votre groupe',
                    'Programme entièrement personnalisé',
                    'Formation dans vos locaux ou en salle partenaire',
                    'Supports de cours officiels éditeurs inclus',
                    'Accès aux plateformes NetAcad / Microsoft Learn',
                    'Passage de la certification intégré au programme',
                    'Attestation de formation et de présence',
                    'Financement via OPCO ou plan de développement des compétences',
                    'Délai d\'accès : 1 mois (3 mois avec financement OPCO)',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Formations disponibles</h2>
                <div className="g-rule" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { editeur: 'Cisco', formations: 'CCNA · CCNP · CyberOps · Automation' },
                    { editeur: 'Microsoft', formations: 'Azure Administrator · AZ-900 · M365 · Security' },
                    { editeur: 'CompTIA', formations: 'Security+ · Network+ · A+ · CySA+' },
                    { editeur: 'IPv6 Forum', formations: 'Certified Network Engineer · Security Engineer' },
                    { editeur: 'EC-Council', formations: 'CEH · ECSA · Computer Hacking Forensic' },
                    { editeur: 'PMI', formations: 'PMP · CAPM · PMI-ACP' },
                  ].map(f => (
                    <div key={f.editeur} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '0.75rem 1rem' }}>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.6rem', flexShrink: 0 }}>{f.editeur}</div>
                      <span style={{ fontSize: '0.84rem', color: '#5a5a58' }}>{f.formations}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Organiser une formation intra-entreprise</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour un audit gratuit de vos besoins en formation. Nous vous proposons
              un programme et un devis sous 48 heures.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander un devis</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

