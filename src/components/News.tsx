import { useIntersection } from '../hooks/useIntersection'

const articles = [
  {
    date: 'Veille 2024',
    title: "Big Data et visibilité en ligne",
    desc: "Ouvrage de référence des Presses des Mines (IMT Mines Alès) dirigé par C. Alcantara, F. Charest et S. Agostinelli. Un enjeu pluridisciplinaire de l'économie numérique : volumétrie, vélocité, variété et valeur des données massives. Une veille de fond sur les mutations du numérique.",
    tag: 'Veille',
    image: '/actu/bigdata-visibilite.png',
    pdf: '/docs/bigdata-visibilite-en-ligne.pdf',
  },
  {
    date: '2019',
    title: "Rapport IPv6 Council Martinique",
    desc: "Rapport d'activité du IPv6 Council Martinique — atelier réunissant les opérateurs télécoms de la Caraïbe française pour accélérer le déploiement de l'IPv6. GALACTUS Digital en est membre actif via l'association ASPIK.",
    tag: 'Rapport',
    image: '/actu/ipv6-council-report-2019.png',
    pdf: '/docs/ipv6-council-report-2019.pdf',
  },
  {
    date: 'Juillet 2016',
    title: "Création du IPv6 Council Martinique",
    desc: "Communiqué officiel du IPv6 Forum annonçant la fondation du IPv6 Council Martinique, sous la présidence de notre fondateur, en collaboration avec l'écosystème télécom de la Caraïbe française.",
    tag: 'Communiqué',
    image: '/actu/ipv6-council-2016.png',
    pdf: '/docs/ipv6-council-2016.pdf',
  },
  {
    date: '2024',
    title: "Métiers du numérique dans les territoires ultramarins",
    desc: "Étude de l'Observatoire Régional de l'Emploi et de la Formation sur les métiers du numérique — un contexte dans lequel GALACTUS Digital accompagne la montée en compétences.",
    tag: 'Étude',
    image: '/actu/metiers-numerique.png',
    pdf: '/docs/metiers-numerique.pdf',
  },
  {
    date: 'Juin 2019',
    title: "ARCEP — L'état d'internet en France",
    desc: "Rapport d'activité de l'ARCEP (Tome 3) sur l'état d'internet en France, incluant la transition vers l'IPv6 — une veille de référence sur les enjeux d'infrastructure réseau.",
    tag: 'Veille',
    image: '/actu/arcep-internet-2019.png',
    pdf: '/docs/arcep-internet-2019.pdf',
  },
]

export function News() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="news-section" id="actualites" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Actualités &amp; Veille IT
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          ASPIK &amp; rayonnement<br />international
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
              {a.pdf && (
                <a
                  className="news-doc-link"
                  href={a.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulter le document (PDF) &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
