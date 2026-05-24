import { Building2, Users2, CheckCircle2 } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const services = [
  {
    icon: <Building2 size={22} color="white" />,
    title: 'Formation Intra-Entreprise',
    desc: 'Sessions organisées directement au sein de vos locaux, conçues sur mesure pour vos équipes et adaptées à vos objectifs métiers spécifiques.',
    features: [
      'Programme entièrement personnalisé selon vos besoins',
      'Formateur dédié, expert certifié de l\'éditeur',
      'Flexibilité calendaire et logistique',
      'Suivi post-formation et accompagnement aux examens',
      'Groupes de 4 à 15 participants',
    ],
  },
  {
    icon: <Users2 size={22} color="white" />,
    title: 'Formation Inter-Entreprise',
    desc: 'Rejoignez nos sessions ouvertes planifiées tout au long de l\'année. Un format favorisant les échanges entre professionnels de secteurs variés.',
    features: [
      'Calendrier annuel disponible sur demande',
      'Accès à nos centres de formation aux Caraïbes',
      'Partage d\'expériences entre participants',
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
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'var(--gold-light)' }}>
          Nos Services
        </span>
        <div className={`gold-rule${isVisible ? ' visible' : ''}`} />
        <h2 className={`section-h2-light reveal${isVisible ? ' visible' : ''} delay-1`}>
          Deux modalités pour<br />accompagner votre montée en compétences
        </h2>
        <p className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: 0 }}>
          Que vous représentiez une PME locale ou un grand groupe régional, nous adaptons
          notre ingénierie pédagogique à votre contexte et vos contraintes.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal${isVisible ? ' visible' : ''} delay-${i + 3}`}
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f} className="service-feature">
                    <CheckCircle2 size={13} color="var(--teal-light)" className="service-feature-dot" style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
