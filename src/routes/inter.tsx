import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Users, CheckCircle, Phone, Mail, Calendar, Network, TrendingUp } from 'lucide-react'

export const Route = createFileRoute('/inter')({
  component: InterPage,
})

function InterPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Solutions</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Formation Inter-Entreprise
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Rejoignez nos sessions ouvertes planifiées tout au long de l'année. Un format qui favorise
              les échanges entre professionnels de secteurs variés dans les territoires ultramarins
              et en France hexagonale.
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Pourquoi choisir l'inter-entreprise ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: <Network size={24} color="white" />, title: 'Réseau professionnel', desc: 'Échangez avec des professionnels d\'horizons différents. Les sessions inter-entreprises sont une opportunité unique de réseautage et de partage d\'expériences dans les territoires ultramarins.' },
                { icon: <Calendar size={24} color="white" />, title: 'Sessions planifiées', desc: 'Inscrivez-vous à la session qui correspond à vos disponibilités. Plusieurs dates disponibles dans l\'année sur nos différents territoires.' },
                { icon: <TrendingUp size={24} color="white" />, title: 'Financement facilité', desc: 'Les formations inter-entreprises sont éligibles CPF, OPCO, aides régionales DOM. Nous vous accompagnons dans le montage de votre dossier de financement.' },
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

        {/* Sessions & Lieux */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Nos lieux de sessions</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[
                { zone: 'Martinique', badge: 'Siège régional Caraïbes', desc: 'Sessions régulières tout au long de l\'année. Centre de formation principal des Caraïbes. Pointe Madeleine — CAP EST, 97240 Le François.' },
                { zone: 'Guadeloupe', badge: 'Présence active', desc: 'Sessions organisées en Guadeloupe en salle partenaire. Pointe de la Verdure, Gosier 97190.' },
                { zone: 'Paris — France', badge: 'Siège social', desc: 'Sessions disponibles à Paris et dans les grandes villes de France hexagonale. 66 avenue des Champs Élysées, 75008 Paris.' },
              ].map(l => (
                <div key={l.zone} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.4rem' }}>{l.zone}</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.6rem', display: 'inline-block', marginBottom: '1rem' }}>{l.badge}</div>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{l.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(228,31,38,0.08)', border: '1px solid rgba(228,31,38,0.20)', padding: '1.25rem 1.5rem', marginTop: '2rem' }}>
              <p style={{ fontSize: '0.90rem', color: 'rgba(255,255,255,0.70)', margin: 0, lineHeight: 1.7 }}>
                <strong style={{ color: '#fff' }}>Calendrier des sessions disponible sur demande.</strong> Contactez-nous pour connaître les prochaines dates dans votre territoire.
              </p>
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
                    'Groupes de 4 à 12 participants maximum',
                    'Formateur certifié officiel éditeur',
                    'Programme officiel certifiant éditeur',
                    'Sessions en présentiel ou en FOAD selon les dates',
                    'Supports de cours officiels inclus',
                    'Accès aux plateformes NetAcad / Microsoft Learn',
                    'Passage de la certification intégré',
                    'Attestation de formation et de présence',
                    'Éligible CPF, OPCO, aides régionales DOM',
                    'Délai d\'inscription : 2 semaines avant le démarrage',
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
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>S'inscrire à une session inter-entreprise</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour connaître les prochaines dates disponibles dans votre territoire
              et recevoir le programme détaillé de la formation souhaitée.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander le calendrier</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
