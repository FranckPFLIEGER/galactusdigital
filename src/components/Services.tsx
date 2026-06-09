import { MapPin, Monitor, BookOpen, ArrowRight, Users, Building2 } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

// ─── Données ──────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <MapPin size={22} color="white" />,
    title: 'Formation en Présentiel',
    href: '/presentiel',
    badge: 'Art. L.6313-1',
    desc: "Un formateur certifié intervient en face-à-face dans nos centres ou directement chez vous. Immersion totale, ateliers pratiques sur équipements réels, taux de certification maximum.",
    features: [
      'Formateur certifié en face-à-face',
      'Ateliers pratiques sur équipements réels',
      'Centres en Martinique, Guadeloupe, Paris',
      'Idéal pour les formations techniques intensives',
      'Groupes de 4 à 15 participants',
    ],
    formats: [
      { label: 'Inter-entreprise', href: '/presentiel#inter', icon: <Users size={13} /> },
      { label: 'Intra-entreprise',  href: '/presentiel#intra',  icon: <Building2 size={13} /> },
    ],
  },
  {
    icon: <Monitor size={22} color="white" />,
    title: 'Formation à Distance — FOAD',
    href: '/foad',
    badge: 'Art. D.6313-3-1',
    desc: "Suivez nos formations certifiantes depuis n'importe quel territoire. Sessions live sur WEBEX, plateforme NetAcad / Microsoft Learn, accompagnement individualisé documenté.",
    features: [
      'Accessible depuis tous les territoires ultramarins',
      'Sessions live avec le formateur sur WEBEX',
      'Plateforme NetAcad / Microsoft Learn',
      'Conformité Art. D.6313-3-1 Code du travail',
      'Feuilles de présence numériques',
    ],
    formats: [
      { label: 'Inter à distance', href: '/foad#inter', icon: <Users size={13} /> },
      { label: 'Intra à distance',  href: '/foad#intra',  icon: <Building2 size={13} /> },
    ],
  },
  {
    icon: <BookOpen size={22} color="white" />,
    title: 'E-learning Tutoré',
    href: '/elearning',
    badge: 'FOAD asynchrone',
    desc: "Progressez à votre rythme sur NetAcad et Microsoft Learn. Un tuteur certifié vous accompagne module par module, avec un suivi individualisé documenté conforme Qualiopi.",
    features: [
      'Parcours asynchrone — rythme libre',
      'Tuteur certifié éditeur dédié',
      'NetAcad · Microsoft Learn 24h/24',
      'Labs virtuels Cisco Packet Tracer inclus',
      'Accès sous 72h après inscription',
    ],
    formats: [],
  },
]

// ─── Composant ────────────────────────────────────────────────────────────────

export function Services() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="services-section" id="services" ref={ref}>
      <div className="services-bg" />
      <div className="section-inner">

        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Nos Solutions
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2-light reveal${isVisible ? ' visible' : ''} delay-1`}>
          3 modalités de formation —<br />selon votre contexte et vos contraintes
        </h2>
        <p
          className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: 0 }}
        >
          Que vous représentiez une PME locale ou un grand groupe régional, que vous soyez
          dans les territoires ultramarins ou en France hexagonale, nous adaptons notre
          ingénierie pédagogique à votre situation. Chaque modalité est disponible en
          format inter-entreprise (sessions ouvertes) ou intra-entreprise (groupe dédié).
        </p>

        {/* ── Grille 3 cartes ── */}
        <div
          className="services-grid"
          style={{ marginTop: '3rem' }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal${isVisible ? ' visible' : ''} delay-${i + 3}`}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Icône + badge réglementaire */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div className="service-icon">{s.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.60rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#E41F26',
                  background: 'rgba(228,31,38,0.10)',
                  border: '1px solid rgba(228,31,38,0.20)',
                  padding: '0.2rem 0.55rem',
                  alignSelf: 'flex-start',
                  whiteSpace: 'nowrap',
                }}>
                  {s.badge}
                </div>
              </div>

              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>

              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f} className="service-feature">
                    <span className="service-feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Formats d'organisation (inter / intra) */}
              {s.formats.length > 0 && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.60rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: '0.5rem',
                  }}>
                    Formats disponibles
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {s.formats.map(f => (
                      <a
                        key={f.label}
                        href={f.href}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.72rem',
                          color: 'rgba(255,255,255,0.55)',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.10)',
                          padding: '0.25rem 0.65rem',
                          textDecoration: 'none',
                          transition: 'color 0.15s, border-color 0.15s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = '#E41F26'
                          e.currentTarget.style.borderColor = 'rgba(228,31,38,0.35)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                        }}
                      >
                        {f.icon} {f.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <a
                href={s.href}
                className="btn-red"
                style={{
                  marginTop: 'auto',
                  paddingTop: '1.5rem',
                  fontSize: '0.78rem',
                  padding: '0.65rem 1.4rem',
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                En savoir plus <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
