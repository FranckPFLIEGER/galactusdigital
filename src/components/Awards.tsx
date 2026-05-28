import { useIntersection } from '../hooks/useIntersection'
import { Award, Star, Trophy } from 'lucide-react'

const awards = [
  {
    icon: <Trophy size={24} color="white" />,
    year: '2025',
    title: 'IPv6 Hall of Fame',
    org: 'IPv6 Forum International',
    desc: "Intégration au IPv6 Hall of Fame mondial — distinction décernée aux personnalités ayant le plus contribué au déploiement de l'IPv6 dans le monde.",
    image: '/awards/hof-2025.png',
    highlight: true,
  },
  {
    icon: <Star size={24} color="white" />,
    year: '2021',
    title: 'Above and Beyond Instructor',
    org: 'Cisco Networking Academy',
    desc: "Récompense décernée aux formateurs qui dépassent les standards habituels d'excellence dans la formation certifiante.",
    image: null,
    highlight: false,
  },
  {
    icon: <Award size={24} color="white" />,
    year: '2022',
    title: 'Instructor 15 Years of Service',
    org: 'Cisco Networking Academy',
    desc: "15 ans de participation active et de service dédié à la Cisco Networking Academy — un gage d'expertise reconnue officiellement.",
    image: null,
    highlight: false,
  },
  {
    icon: <Award size={24} color="white" />,
    year: '2015',
    title: 'Instructor 10 Years of Service',
    org: 'Cisco Networking Academy',
    desc: "10 ans de participation active et de service dédié à la Cisco Networking Academy — reconnaissance d'un engagement continu dans la formation certifiante.",
    image: null,
    highlight: false,
  },
  {
    icon: <Star size={24} color="white" />,
    year: '2023 — 2024',
    title: 'Advisor Board Member',
    org: 'Organisme IT international',
    desc: "Membre du conseil consultatif international — reconnaissance de l'expertise stratégique de GALACTUS Digital dans l'écosystème IT.",
    image: null,
    highlight: false,
  },
]

export function AwardsSection() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="awards-section" id="awards" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.6)' }}>
          Distinctions
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2-light reveal${isVisible ? ' visible' : ''} delay-1`}>
          Nos reconnaissances<br />internationales
        </h2>
        <p className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '3rem' }}>
          Des distinctions obtenues auprès des plus grandes organisations IT mondiales,
          qui témoignent de notre niveau d'expertise et de notre engagement.
        </p>
        <div className="awards-grid">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className={`award-card reveal${isVisible ? ' visible' : ''} ${a.highlight ? 'award-card-highlight' : ''}`}
              style={{ animationDelay: `${0.08 * i + 0.2}s` }}
            >
              <div className="award-icon">{a.icon}</div>
              {a.image && (
                <div className="award-image">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
              )}
              <div className="award-year">{a.year}</div>
              <h3 className="award-title">{a.title}</h3>
              <div className="award-org">{a.org}</div>
              <p className="award-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
