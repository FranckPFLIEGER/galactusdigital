import { Globe, Users, BookOpen, ShieldCheck } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

const points = [
  {
    icon: <Globe size={18} color="white" />,
    title: "Réseau d'experts international",
    desc: 'Formateurs certifiés issus des plus grandes entreprises technologiques mondiales.',
  },
  {
    icon: <BookOpen size={18} color="white" />,
    title: 'Contenus officiels certifiants',
    desc: 'Programmes alignés sur les référentiels exacts des éditeurs — sans intermédiaire.',
  },
  {
    icon: <Users size={18} color="white" />,
    title: 'Ingénierie pédagogique sur mesure',
    desc: 'Chaque parcours est conçu pour maximiser le taux de réussite aux examens officiels.',
  },
  {
    icon: <ShieldCheck size={18} color="white" />,
    title: 'Ancrage territorial ultramarin',
    desc: 'Présents sur 6 territoires ultramarins et en France hexagonale, nous comprenons le tissu économique local et ses besoins.',
  },
]

const certPrograms = [
  { name: 'Microsoft Azure & M365',          meta: 'n° 4653557' },
  { name: 'Cisco Networking Academy — Réseaux & CCNA',  meta: 'n° 3018982' },
  { name: 'Cisco Networking Academy — Cybersécurité',   meta: 'n° 3018982' },
  { name: 'Cisco Networking Academy — IoT & DevNet',    meta: 'n° 3018982' },
  { name: 'IPv6 Forum',                      meta: 'Official' },
  { name: 'Linux & Python (LPI / OpenEDG)',  meta: 'Official' },
]

export function About() {
  const { ref, isVisible } = useIntersection()
  return (
    <section id="expertise" className="about-section" ref={ref}>
      <div className="section-inner">
        <div className="about-grid">

          <div>
            <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
              Notre Expertise
            </span>
            <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
            <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
              L'ingénierie de formation<br />certifiante IT, notre cœur de métier
            </h2>
            <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}>
              GALACTUS Digital est né d'une conviction : les professionnels des territoires ultramarins méritent
              d'accéder aux mêmes certifications IT de niveau mondial que leurs homologues en Europe
              ou en Amérique du Nord. Forts de plus de 20 ans d'expérience et d'un réseau
              d'experts certifiés à l'échelle internationale, nous avons bâti une offre complète,
              rigoureuse et adaptée aux réalités du marché ultramarin.
            </p>
            <div className="about-points">
              {points.map((p, i) => (
                <div key={p.title} className={`about-point reveal${isVisible ? ' visible' : ''} delay-${i + 2}`}>
                  <div className="about-point-icon">{p.icon}</div>
                  <div className="about-point-text">
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`about-visual reveal-scale${isVisible ? ' visible' : ''} delay-2`}>
            <div className="about-visual-bg" />
            <div className="about-big-num">IT</div>
            <ul className="about-cert-list">
              {certPrograms.map(c => (
                <li key={c.name} className="about-cert-item">
                  <span className="about-cert-dot" />
                  <span className="about-cert-name">{c.name}</span>
                  <span className="about-cert-meta">{c.meta}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
