import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Phone, Mail, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/handicap')({
  component: HandicapPage,
})

function HandicapPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Accessibilité
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Notre engagement en faveur de<br />l'Accessibilité pour les Personnes<br />en Situation de Handicap
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '780px', lineHeight: 1.8 }}>
              Chez GALACTUS Digital, nous avons à cœur de promouvoir l'égalité des chances
              et de lutter contre toute forme de discrimination. Dans le cadre de notre engagement RSE,
              nous nous engageons à offrir à tous nos stagiaires les mêmes opportunités d'accès
              au développement de leurs compétences — aux Caraïbes, dans l'Océan Indien
              et en France hexagonale.
            </p>
          </div>
        </section>

        {/* Accueil PSH */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Accueil des personnes<br />en situation de handicap</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginTop: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Afin de répondre aux besoins spécifiques de nos stagiaires en situation de handicap,
                  nous avons nommé un <strong>référent accueil PSH</strong> (Personnes en Situation de Handicap).
                  Ce dernier accorde une écoute attentive aux stagiaires concernés et collabore avec
                  tous les acteurs de la formation pour trouver les solutions les plus appropriées,
                  quel que soit le handicap (auditif, visuel, moteur, cognitif, etc.).
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Notre référent contribue à offrir un environnement inclusif et l'accès
                  à un parcours pédagogique optimal. Nous mettons tout en œuvre pour rendre
                  accessibles nos formations, en présentiel comme à distance (FOAD),
                  et sommes en capacité de proposer des solutions personnalisées adaptées à chaque situation.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48' }}>
                  Nous pouvons également compter sur un réseau de partenaires spécialisés
                  pour nous accompagner dans la prise en charge des situations individuelles
                  dans les territoires ultramarins et en France hexagonale.
                </p>
              </div>

              {/* Référent */}
              <div>
                <div style={{ background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '2.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '1rem' }}>
                    Référent Handicap — GALACTUS Digital
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.6rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.3rem' }}>
                    Franck PFLIEGER
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.50)', marginBottom: '2rem', lineHeight: 1.6 }}>
                    Certifié Référent Handicap — DFD Consulting<br />
                    Financement AGEFIPH Antilles Guyane — Février 2023
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a href="tel:+33781074746" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.80)', textDecoration: 'none', fontSize: '0.90rem' }}>
                      <div style={{ width: '36px', height: '36px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Phone size={16} color="white" />
                      </div>
                      +33 07 81 07 47 46
                    </a>
                    <a href="mailto:president@galactusdigital.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.80)', textDecoration: 'none', fontSize: '0.90rem' }}>
                      <div style={{ width: '36px', height: '36px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Mail size={16} color="white" />
                      </div>
                      president@galactusdigital.com
                    </a>
                  </div>
                </div>

                {/* Partenaires */}
                <div style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.4)', padding: '1.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '1rem' }}>
                    Nos partenaires RHF
                  </div>
                  {[
                    { name: 'RHF Martinique — AGEFMA', zone: 'Caraïbes', detail: 'Membre actif — réseau partenaire officiel' },
                    { name: 'RHF Île-de-France', zone: 'France hexagonale', detail: 'Réseau Handicap Formation IDF' },
                    { name: 'AGEFIPH Antilles Guyane', zone: 'Caraïbes & Guyane', detail: 'Financement et accompagnement DOM' },
                  ].map(p => (
                    <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.75rem 0', borderBottom: '1px solid rgba(187,187,187,0.25)' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)' }}>{p.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.2rem' }}>{p.detail}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.55rem', flexShrink: 0, marginLeft: '1rem', marginTop: '3px' }}>{p.zone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA contact */}
        <section style={{ background: 'var(--g-offwhite)', padding: '3rem 2rem', borderTop: '3px solid var(--g-red)', borderBottom: '3px solid var(--g-red)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', marginBottom: '0.4rem' }}>
                Vous êtes en situation de handicap ?
              </div>
              <p style={{ fontSize: '0.90rem', color: '#5a5a58', margin: 0, lineHeight: 1.7 }}>
                Vous avez un besoin spécifique ou des questions sur le déroulement de votre formation ?
              </p>
            </div>
            <a href="mailto:president@galactusdigital.com" className="btn-red" style={{ flexShrink: 0 }}>
              <Mail size={16} /> Contactez-nous
            </a>
          </div>
        </section>

        {/* Accessibilité numérique */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Accessibilité Numérique</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Nous attachons une grande importance à l'accessibilité de nos formations et de notre
                  site internet. Nous nous engageons à ce que toutes les personnes, indépendamment
                  de leurs capacités, puissent accéder à nos contenus et bénéficier pleinement
                  de notre offre de formation certifiante IT.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48' }}>
                  Notre plateforme FOAD (NetAcad, WEBEX) permet notamment aux personnes
                  à mobilité réduite de suivre nos formations certifiantes depuis leur domicile,
                  quelle que soit leur localisation aux Caraïbes, dans l'Océan Indien
                  ou en France hexagonale.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Formations disponibles en FOAD pour les personnes à mobilité réduite',
                  'Supports de cours adaptables (grands caractères sur demande)',
                  'Sessions WEBEX avec sous-titrage possible',
                  'Temps supplémentaire pour les examens sur demande',
                  'Accompagnement renforcé par le formateur',
                  'Pauses adaptées selon les besoins individuels',
                  'Logiciels d\'assistance compatibles avec nos plateformes',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)' }}>
                    <CheckCircle size={15} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.87rem', color: '#4a4a48', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  )
}
