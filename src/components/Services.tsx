import { MapPin, Monitor, BookOpen, ArrowRight, Users, Building2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { useIntersection } from '../hooks/useIntersection'

// ─── Données ──────────────────────────────────────────────────────────────────

type Service = {
  icon: ReactNode
  title: string
  href: string
  badge: string
  desc: string
  features: string[]
  formats: { label: string; href: string; icon: ReactNode }[]
  /** Pour l'e-learning tutoré, qui n'a ni inter ni intra : la ligne équivalente. */
  formatsNote?: string
}

const services: Service[] = [
  {
    icon: <MapPin size={22} color="white" />,
    title: 'Formation en Présentiel',
    href: '/presentiel',
    badge: 'Art. L.6313-1',
    desc: "Un formateur certifié intervient en face-à-face, en inter-entreprise ou directement chez vous. Immersion totale, ateliers pratiques sur équipements réels, passage de la certification intégré au programme.",
    features: [
      'Formateur certifié en face-à-face',
      'Ateliers pratiques sur équipements réels',
      'Intervention sur site client ou en salle louée pour la session',
      'Idéal pour les formations techniques intensives',
      'Groupes de 4 à 12 en inter, jusqu\'à 15 en intra',
    ],
    formats: [
      { label: 'Inter-entreprise', href: '/presentiel#inter', icon: <Users size={13} /> },
      { label: 'Intra-entreprise',  href: '/presentiel#intra',  icon: <Building2 size={13} /> },
    ],
  },
  {
    icon: <Monitor size={22} color="white" />,
    title: 'FOAD — Juniper',
    href: '/foad',
    badge: 'Art. D.6313-3-1',
    desc: "Le parcours Juniper JNCIA-Junos en FOAD, depuis n'importe quel territoire. Sessions live sur WEBEX, maquette Junos à distance, accompagnement individualisé documenté.",
    features: [
      'Parcours Juniper JNCIA-Junos — examen JN0-106',
      'Sessions live avec le formateur sur WEBEX',
      '17 travaux pratiques sur maquette Junos',
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
    desc: "Progressez à votre rythme sur Cisco Networking Academy. Un tuteur certifié vous accompagne module par module, avec un suivi individualisé documenté conforme Qualiopi.",
    features: [
      'Parcours asynchrone — rythme libre',
      'Tuteur certifié éditeur dédié',
      'Plateforme Cisco Networking Academy accessible 24h/24',
      'Labs virtuels Cisco Packet Tracer inclus',
      'Accès sous 72 h après validation administrative',
    ],
    formats: [],
    formatsNote: 'Parcours individuel · entrées permanentes',
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
          PME locale, grand groupe régional ou particulier dont la formation est prise en
          charge, dans les territoires ultramarins comme en France hexagonale : nous adaptons
          notre ingénierie pédagogique à votre situation, en inter-entreprise (sessions
          ouvertes) comme en intra-entreprise (groupe dédié).
        </p>
        {/* Ce paragraphe portait la classe « section-body » : texte gris foncé et largeur
            bridée à 600 px, donc illisible sur fond noir et décalé par rapport au
            paragraphe au-dessus. Passé en « section-body-light », pleine largeur, et
            raccourci : le périmètre e-learning est désormais dit ici, puisque c'est la
            seule modalité ouverte à un particulier. Corrigé le 29 octobre 2026. */}
        <p
          className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginTop: '1.1rem', marginBottom: 0 }}
        >
          <strong style={{ color: '#fff' }}>Vous êtes un particulier ?</strong> Votre place
          est ici dès lors qu'un tiers finance — France&nbsp;Travail au titre de l'AIF, un
          employeur, un OPCO ou une collectivité. Les particuliers s'inscrivent uniquement
          sur les formations en <strong style={{ color: '#fff' }}>e-learning tutoré</strong>.
          Nous établissons le devis et montons le dossier avec votre conseiller ; la décision
          de financement lui appartient. Nous ne vendons pas de formation à un particulier sur
          ses fonds propres : nos tarifs ne constituent pas une offre de vente au consommateur
          (article&nbsp;2 des CGV).
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

              {/* flex:1 — la liste absorbe la hauteur disponible, de sorte que les
                  blocs « Formats disponibles » et les boutons s'alignent d'une
                  carte à l'autre quelle que soit la longueur des listes. */}
              <ul className="service-features" style={{ flex: 1 }}>
                {s.features.map(f => (
                  <li key={f} className="service-feature">
                    <span className="service-feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Formats d'organisation (inter / intra) */}
              {(s.formats.length > 0 || s.formatsNote) && (
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
                  {s.formatsNote && (
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)' }}>
                      {s.formatsNote}
                    </div>
                  )}
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
