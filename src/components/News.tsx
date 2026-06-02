import { useIntersection } from '../hooks/useIntersection'

const articles = [
  {
    date: 'Décembre 2025',
    title: 'IPv6 Hall of Fame 2025',
    desc: "Franck PFLIEGER intègre le IPv6 Hall of Fame 2025 — une reconnaissance mondiale pour son engagement dans le développement de l'IPv6 dans les territoires ultramarins.",
    tag: 'Distinction',
    image: '/awards/hof-2025.png',
  },
  {
    date: 'Septembre 2025',
    title: 'Rapport IPv6 Council Martinique',
    desc: "Publication du rapport d'activité du IPv6 Council Martinique, dont GALACTUS Digital est membre actif via l'association ASPIK.",
    tag: 'Rapport',
    image: '/actu/ipv6-martinique.png',
  },
  {
    date: 'Avril 2025',
    title: 'Métiers du numérique dans les territoires ultramarins',
    desc: "Étude sur les métiers du numérique dans les territoires ultramarins — un contexte dans lequel GALACTUS Digital accompagne la montée en compétences.",
    tag: 'Étude',
    image: null,
  },
  {
    date: 'Mars 2025',
    title: 'IPv6 Forum — Actualités',
    desc: "Les dernières actualités du IPv6 Forum international, dont GALACTUS Digital est partenaire officiel dans les territoires ultramarins.",
    tag: 'Veille',
    image: null,
  },
  {
    date: 'Mai 2024',
    title: 'Above and Beyond Instructor',
    desc: "Distinction décernée pour un engagement exceptionnel dans la formation IT — au-delà des standards habituels.",
    tag: 'Award',
    image: null,
  },
  {
    date: '2023 — 2024',
    title: 'Advisor Board Certificate',
    desc: "Membre du conseil consultatif d'un organisme IT international — reconnaissance de l'expertise de GALACTUS Digital.",
    tag: 'Distinction',
    image: null,
  },
]

export function News() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="news-section" id="actualites" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Actualités & Veille IT
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          ASPIK & rayonnement<br />international
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '3rem' }}>
          Via notre association ASPIK, GALACTUS Digital participe activement
          au développement du numérique dans les territoires ultramarins et rayonne à l'international.
        </p>
        <div className="news-grid">
          {articles.map((a, i) => (
            <div
              key={a.title}
              className={`news-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.08 * i + 0.2}s` }}
            >
              <div className="news-tag">{a.tag}</div>
              {a.image && (
                <div className="news-image">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
              )}
              <div className="news-date">{a.date}</div>
              <h3 className="news-title">{a.title}</h3>
              <p className="news-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
