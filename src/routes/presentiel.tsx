import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MapPin, Users, CheckCircle, Clock, Phone, Mail } from 'lucide-react'

export const Route = createFileRoute('/presentiel')({
  component: PresentielPage,
})

function PresentielPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Solutions</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Formation en présentiel
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Nos formations en présentiel se déroulent directement dans vos locaux ou dans nos
              centres de formation en Martinique, Guadeloupe et à Paris. Un formateur certifié
              intervient en face-à-face pour maximiser les échanges et la progression.
            </p>
          </div>
        </section>

        {/* Avantages présentiel */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Pourquoi choisir le présentiel ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  icon: <Users size={24} color="white" />,
                  title: 'Immersion totale',
                  desc: 'La formation en présentiel favorise la concentration, l\'interaction directe avec le formateur et les échanges entre participants. Idéale pour les formations techniques avec ateliers pratiques intensifs.',
                },
                {
                  icon: <CheckCircle size={24} color="white" />,
                  title: 'Accompagnement direct',
                  desc: 'Le formateur adapte son rythme en temps réel selon le niveau du groupe. Les questions trouvent une réponse immédiate, les difficultés sont levées sur le moment.',
                },
                {
                  icon: <Clock size={24} color="white" />,
                  title: 'Efficacité pédagogique',
                  desc: 'Les ateliers pratiques sur équipements réels (simulateur Packet Tracer, environnements Microsoft) sont facilités en présentiel. Le taux de certification est maximum.',
                },
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

        {/* Nos lieux de formation */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Nos lieux de formation</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[
                {
                  zone: 'Martinique',
                  badge: 'Siège régional Caraïbes',
                  adresse: 'Pointe Madeleine — CAP EST\n97240 Le François',
                  desc: 'Notre centre régional aux Caraïbes. Toutes nos formations Cisco, Microsoft, CompTIA et IPv6 sont disponibles en présentiel depuis la Martinique.',
                  tel: '+596 07 81 07 47 46',
                },
                {
                  zone: 'Guadeloupe',
                  badge: 'Présence active',
                  adresse: 'Pointe de la Verdure\nGosier 97190',
                  desc: 'Interventions en présentiel en Guadeloupe chez vos équipes ou dans une salle partenaire adaptée à vos besoins.',
                  tel: '+596 07 81 07 47 46',
                },
                {
                  zone: 'Paris — France hexagonale',
                  badge: 'Siège social',
                  adresse: '66 avenue des Champs Élysées\n75008 Paris',
                  desc: 'Formations en présentiel à Paris et en régions. Interventions intra-entreprise partout en France hexagonale sur demande.',
                  tel: '+33 07 81 07 47 46',
                },
              ].map(l => (
                <div key={l.zone} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={20} color="white" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>{l.zone}</div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.6rem', display: 'inline-block', marginTop: '0.3rem' }}>{l.badge}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.50)', marginBottom: '1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{l.adresse}</p>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', marginBottom: '1rem' }}>{l.desc}</p>
                  <a href={`tel:${l.tel.replace(/\s/g,'')}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--g-red)', textDecoration: 'none' }}>
                    <Phone size={13} /> {l.tel}
                  </a>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', marginTop: '1.5rem', fontStyle: 'italic' }}>
              * Nous intervenons également sur tous les autres territoires ultramarins (Guyane, Saint-Martin, Saint-Barthélemy, Réunion) directement dans vos locaux sur demande.
            </p>
          </div>
        </section>

        {/* Organisation */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Organisation pratique</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Déroulement type d'une journée</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    '09h00 — Accueil des participants',
                    '09h30 — Démarrage de la formation',
                    '11h00 — Pause (15 minutes)',
                    '11h15 — Reprise — ateliers pratiques',
                    '13h00 — Pause déjeuner (1 heure)',
                    '14h00 — Reprise — cas pratiques avancés',
                    '15h45 — Pause (15 minutes)',
                    '16h00 — Évaluation des acquis du jour',
                    '17h30 — Fin de journée',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48' }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Ce que nous apportons</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Supports de cours officiels éditeurs',
                    'Accès à la plateforme NetAcad (Cisco) ou équivalent',
                    'Simulateurs et environnements de test',
                    'Matériel pédagogique inclus',
                    'Attestation de formation et de présence',
                    'Convocation avec règlement intérieur',
                    'Passage de la certification éditeur intégré',
                    'Accompagnement post-formation si nécessaire',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '1.5rem', background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '1.25rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.4rem' }}>Délai d'accès</div>
                  <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6 }}>
                    1 mois après signature du devis et de la convention.<br />
                    3 mois avec financement OPCO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations disponibles */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Formations disponibles en présentiel</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { editeur: 'Cisco', label: 'Partenaire n° 3018982', formations: ['CCNA ITN (1/3)', 'CCNA SRWE (2/3)', 'CCNA ENSA (3/3)', 'CCNP Enterprise', 'CCNP Security'] },
                { editeur: 'Microsoft', label: 'Officiel', formations: ['Azure Administrator (AZ-104)', 'Azure Fundamentals (AZ-900)', 'Microsoft 365 Fundamentals', 'Azure AI Fundamentals', 'Power Platform'] },
                { editeur: 'CompTIA', label: 'Officiel', formations: ['Security+', 'Network+', 'A+', 'CySA+', 'PenTest+'] },
                { editeur: 'IPv6 Forum', label: 'Officiel', formations: ['IPv6 Certified Network Engineer', 'IPv6 Certified Security Engineer', 'IPv6 Fundamentals'] },
                { editeur: 'EC-Council', label: 'Officiel', formations: ['Certified Ethical Hacker (CEH)', 'Certified Security Analyst (ECSA)', 'Computer Hacking Forensic Investigator'] },
                { editeur: 'PMI', label: 'Officiel', formations: ['Project Management Professional (PMP)', 'PMI Agile Certified Practitioner', 'CAPM'] },
              ].map(f => (
                <div key={f.editeur} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)' }}>{f.editeur}</div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.55rem' }}>{f.label}</div>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {f.formations.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58' }}>
                        <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Organiser une formation en présentiel</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour définir ensemble le programme, les dates et le lieu
              le plus adapté à votre équipe — en Martinique, Guadeloupe ou en France hexagonale.
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

