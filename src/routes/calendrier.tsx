import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MapPin, Phone, Mail, Clock, Users, Info } from 'lucide-react'

export const Route = createFileRoute('/calendrier')({
  component: CalendrierPage,
})

const sessions = [
  {
    editeur: 'Cisco',
    certification: 'CCNA Routing & Switching (200-301)',
    territoire: 'Martinique',
    lieu: 'Pointe Madeleine — CAP EST, Le François',
    modalite: 'Présentiel',
    duree: '5 jours',
    places: 'Places disponibles',
  },
  {
    editeur: 'Cisco',
    certification: 'CCNA Routing & Switching (200-301)',
    territoire: 'FOAD — Tous territoires',
    lieu: 'En ligne via NetAcad & WEBEX',
    modalite: 'FOAD',
    duree: '5 jours',
    places: 'Places disponibles',
  },
  {
    editeur: 'Microsoft',
    certification: 'Microsoft Azure Fundamentals (AZ-900)',
    territoire: 'FOAD — Tous territoires',
    lieu: 'En ligne via Microsoft Learn & WEBEX',
    modalite: 'FOAD',
    duree: '3 jours',
    places: 'Places disponibles',
  },
  {
    editeur: 'Microsoft',
    certification: 'Microsoft Azure Administrator (AZ-104)',
    territoire: 'FOAD — Tous territoires',
    lieu: 'En ligne via Microsoft Learn & WEBEX',
    modalite: 'FOAD',
    duree: '5 jours',
    places: 'Places disponibles',
  },
  {
    editeur: 'CompTIA',
    certification: 'CompTIA Security+ (SY0-701)',
    territoire: 'Martinique',
    lieu: 'Pointe Madeleine — CAP EST, Le François',
    modalite: 'Présentiel',
    duree: '5 jours',
    places: 'Places disponibles',
  },
  {
    editeur: 'CompTIA',
    certification: 'CompTIA Security+ (SY0-701)',
    territoire: 'Guadeloupe',
    lieu: 'Pointe de la Verdure, Gosier',
    modalite: 'Présentiel',
    duree: '5 jours',
    places: 'Places disponibles',
  },
  {
    editeur: 'IPv6 Forum',
    certification: 'IPv6 Certified Network Engineer',
    territoire: 'FOAD — Tous territoires',
    lieu: 'En ligne via WEBEX',
    modalite: 'FOAD',
    duree: '3 jours',
    places: 'Places disponibles',
  },
  {
    editeur: 'Microsoft',
    certification: 'Azure AI Fundamentals (AI-900)',
    territoire: 'Paris',
    lieu: '66 avenue des Champs Élysées, 75008 Paris',
    modalite: 'Présentiel',
    duree: '2 jours',
    places: 'Places disponibles',
  },
]

const FILTRES = ['Tous', 'Présentiel', 'FOAD', 'Martinique', 'Guadeloupe', 'Paris']

const modaliteColors: Record<string, string> = {
  'Présentiel': '#E41F26',
  'FOAD': '#1D1D1B',
}

function matchFiltre(s: typeof sessions[0], filtre: string): boolean {
  if (filtre === 'Tous') return true
  if (filtre === 'Présentiel') return s.modalite === 'Présentiel'
  if (filtre === 'FOAD') return s.modalite === 'FOAD'
  if (filtre === 'Martinique') return s.territoire.toLowerCase().includes('martinique')
  if (filtre === 'Guadeloupe') return s.territoire.toLowerCase().includes('guadeloupe')
  if (filtre === 'Paris') return s.territoire.toLowerCase().includes('paris')
  return true
}

function CalendrierPage() {
  const [filtre, setFiltre] = useState('Tous')

  const sessionsFiltrees = sessions.filter(s => matchFiltre(s, filtre))

  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Formations
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Calendrier des sessions
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Retrouvez ci-dessous nos prochaines sessions de formation certifiante IT.
              Les dates précises sont communiquées sur demande — contactez-nous pour connaître
              les disponibilités dans votre territoire.
            </p>
          </div>
        </section>

        {/* Note légale */}
        <section style={{ background: 'var(--g-offwhite)', padding: '1.5rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.4)', borderLeft: '4px solid var(--g-red)', padding: '1rem 1.5rem' }}>
              <Info size={18} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.84rem', color: '#5a5a58', margin: 0, lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--g-black)' }}>Calendrier indicatif — mis à jour régulièrement.</strong> Conformément à nos obligations Qualiopi (Indicateur 4),
                les dates exactes, lieux et modalités sont confirmés sur la convocation remise à chaque stagiaire.
                Le délai d'accès standard est de <strong>1 mois</strong> après signature du devis et de la convention
                (3 mois avec financement OPCO). Contactez-nous pour toute demande spécifique.
              </p>
            </div>
          </div>
        </section>

        {/* Tableau sessions */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Sessions disponibles</h2>
            <div className="g-rule" />

            {/* Filtres actifs */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {FILTRES.map(f => {
                const actif = filtre === f
                return (
                  <button
                    key={f}
                    onClick={() => setFiltre(f)}
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.10em',
                      textTransform: 'uppercase',
                      padding: '0.4rem 1rem',
                      border: actif ? '1px solid var(--g-red)' : '1px solid rgba(187,187,187,0.5)',
                      color: actif ? '#fff' : '#666',
                      background: actif ? 'var(--g-red)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={e => {
                      if (!actif) {
                        e.currentTarget.style.borderColor = 'var(--g-red)'
                        e.currentTarget.style.color = 'var(--g-red)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!actif) {
                        e.currentTarget.style.borderColor = 'rgba(187,187,187,0.5)'
                        e.currentTarget.style.color = '#666'
                      }
                    }}
                  >
                    {f}
                  </button>
                )
              })}
            </div>

            {/* Compteur */}
            <p style={{ fontSize: '0.80rem', color: '#888', marginBottom: '1.25rem' }}>
              {sessionsFiltrees.length} session{sessionsFiltrees.length > 1 ? 's' : ''} affichée{sessionsFiltrees.length > 1 ? 's' : ''}
              {filtre !== 'Tous' ? ` — filtre : ${filtre}` : ''}
            </p>

            {sessionsFiltrees.length === 0 ? (
              <div style={{ padding: '3rem 2rem', textAlign: 'center', border: '1px solid rgba(187,187,187,0.3)', background: 'var(--g-offwhite)' }}>
                <p style={{ fontSize: '0.90rem', color: '#888', margin: 0 }}>
                  Aucune session disponible pour ce filtre. <a href="mailto:president@galactusdigital.com" style={{ color: 'var(--g-red)' }}>Contactez-nous</a> pour organiser une session sur mesure.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {sessionsFiltrees.map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '1.5rem', alignItems: 'center', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem 2rem', background: i % 2 === 0 ? 'var(--g-white)' : 'var(--g-offwhite)' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.55rem', display: 'inline-block', marginBottom: '0.4rem' }}>{s.editeur}</div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, color: 'var(--g-black)', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.3 }}>{s.certification}</div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.83rem', color: '#4a4a48' }}>
                        <MapPin size={14} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span><strong>{s.territoire}</strong><br />{s.lieu}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#4a4a48' }}>
                        <Clock size={13} color="#E41F26" />
                        {s.duree}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#4a4a48' }}>
                        <Users size={13} color="#E41F26" />
                        {s.places}
                      </div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', background: modaliteColors[s.modalite] || '#888', padding: '0.15rem 0.55rem', display: 'inline-block', width: 'fit-content' }}>
                        {s.modalite}
                      </div>
                    </div>
                    <div>
                      <a href="mailto:president@galactusdigital.com" className="btn-red" style={{ fontSize: '0.72rem', padding: '0.55rem 1.1rem', whiteSpace: 'nowrap' }}>
                        S'inscrire
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p style={{ fontSize: '0.82rem', color: '#888', marginTop: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
              * Les dates exactes sont communiquées sur demande et confirmées sur la convocation. D'autres formations sont disponibles sur demande.
            </p>
          </div>
        </section>

        {/* Sessions sur mesure */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Vous ne trouvez pas la date souhaitée ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.75rem' }}>
                  Session intra-entreprise
                </div>
                <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>
                  Vous avez un groupe à former ? Nous organisons une session sur mesure
                  à vos dates, dans vos locaux ou dans nos centres.
                </p>
                <a href="/presentiel#intra" className="btn-ghost" style={{ fontSize: '0.78rem' }}>En savoir plus</a>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.75rem' }}>
                  Formation à distance (FOAD)
                </div>
                <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem' }}>
                  Toutes nos formations sont disponibles en FOAD depuis n'importe quel territoire.
                  Inscrivez-vous à votre rythme, avec un formateur dédié.
                </p>
                <a href="/foad" className="btn-ghost" style={{ fontSize: '0.78rem' }}>En savoir plus</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA contact */}
        <section style={{ background: 'var(--g-offwhite)', padding: '3rem 2rem', borderTop: '3px solid var(--g-red)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', marginBottom: '0.4rem' }}>
                Besoin d'informations sur une session ?
              </div>
              <p style={{ fontSize: '0.90rem', color: '#5a5a58', margin: 0, lineHeight: 1.7 }}>
                Notre équipe vous répond sous 24h pour toute demande d'inscription ou de renseignement.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red" style={{ flexShrink: 0 }}>
                <Phone size={16} /> Nous appeler
              </a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost-dark" style={{ flexShrink: 0 }}>
                <Mail size={16} /> Nous écrire
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
