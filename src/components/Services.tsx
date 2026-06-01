import { Building2, Users2, Monitor, MapPin, ArrowRight } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const services = [
  {
    icon: <MapPin size={22} color="white" />,
    title: 'Formation en Présentiel',
    href: '/presentiel',
    desc: "Le formateur intervient directement dans vos locaux ou dans nos centres de formation en Martinique, Guadeloupe et Paris. Immersion totale, ateliers pratiques, interaction directe.",
    features: [
      'Formateur certifié en face-à-face',
      'Ateliers pratiques sur équipements réels',
      'Centres en Martinique, Guadeloupe, Paris',
      'Idéal pour les formations techniques intensives',
      'Groupes de 4 à 15 participants',
    ],
  },
  {
    icon: <Monitor size={22} color="white" />,
    title: 'Formation à Distance — FOAD',
    href: '/foad',
    desc: "Suivez nos formations certifiantes depuis n'importe quel territoire. Plateforme NetAcad, sessions live sur WEBEX, accompagnement individualisé à chaque étape.",
    features: [
      'Accessible depuis tous les territoires ultramarins',
      'Sessions live avec le formateur sur WEBEX',
      'Plateforme NetAcad / Microsoft Learn',
      'Rythme adapté à vos contraintes',
      'Conformité Art. D.6313-3-1 Code du travail',
    ],
  },
  {
    icon: <Building2 size={22} color="white" />,
    title: 'Formation Intra-Entreprise',
    href: '/intra',
    desc: "Sessions conçues sur mesure pour vos équipes, organisées directement dans vos locaux. Programme adapté à vos outils, vos processus et vos objectifs métiers spécifiques.",
    features: [
      'Programme entièrement personnalisé',
      "Formateur dédié, expert certifié de l'éditeur",
      'Flexibilité calendaire et logistique',
      'Suivi post-formation et accompagnement aux examens',
      'Groupes de 4 à 15 participants',
    ],
  },
  {
    icon: <Users2 size={22} color="white" />,
    title: 'Formation Inter-Entreprise',
    href: '/inter',
    desc: "Rejoignez nos sessions ouvertes planifiées tout au long de l'année dans les territoires ultramarins et en France. Un format favorisant les échanges entre professionnels de secteurs variés.",
    features: [
      'Calendrier annuel disponible sur demande',
      'Accès à nos centres de formation dans les territoires ultramarins',
      "Partage d'expériences entre participants",
      'Préparation intensive aux examens officiels',
      'Financement via OPCO ou aides régionales',
    ],
  },
]

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
          4 façons de vous former —<br />selon votre contexte et vos contraintes
        </h2>
        <p className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: 0 }}>
          Que vous représentiez une PME locale ou un grand groupe régional, que vous soyez
          dans les territoires ultramarins et en France hexagonale, nous adaptons notre
          ingénierie pédagogique à votre situation.
        </p>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)', marginTop: '3rem' }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal${isVisible ? ' visible' : ''} delay-${i + 3}`}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div className="service-icon">{s.icon}</div>
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
              <a href={s.href} className="btn-red"
                style={{ marginTop: 'auto', paddingTop: '1.5rem', fontSize: '0.78rem', padding: '0.65rem 1.4rem', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                En savoir plus <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
