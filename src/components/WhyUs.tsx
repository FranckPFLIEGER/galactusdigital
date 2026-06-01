import { useIntersection } from '../hooks/useIntersection'

const reasons = [
  {
    num: '01',
    title: 'Expertise certifiée par les éditeurs',
    desc: "Nos formateurs sont eux-mêmes certifiés au plus haut niveau par chaque éditeur. Pas de sous-traitance — un expert dédié par domaine, reconnu officiellement.",
  },
  {
    num: '02',
    title: 'Couverture unique dans les territoires ultramarins',
    desc: "Présents sur 7 territoires, nous sommes le seul organisme capable de déployer des formations officielles à cette échelle dans les territoires ultramarins et en France hexagonale.",
  },
  {
    num: '03',
    title: 'Taux de réussite aux examens',
    desc: "Notre ingénierie pédagogique est conçue pour maximiser la réussite. Nos apprenants atteignent un taux de passage aux certifications largement supérieur à la moyenne mondiale.",
  },
  {
    num: '04',
    title: 'Accompagnement de bout en bout',
    desc: "De l'audit des besoins à la présentation de l'examen, nous accompagnons chaque apprenant et chaque entreprise à chaque étape du parcours.",
  },
]

const territories = [
  'Guadeloupe', 'Martinique', 'Guyane', 'Saint-Martin',
  'Saint-Barthélemy', 'Réunion', 'France Hexagonale',
]

export function WhyUs() {
  const { ref, isVisible } = useIntersection()
  return (
    // ✓ Fond blanc → cohérence avec section Certifications
    <section id="pourquoi" className="whyus-section" ref={ref}>
      <div className="section-inner">
        <div className="whyus-grid">

          {/* Gauche : raisons */}
          <div>
            <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
              Pourquoi Nous Choisir
            </span>
            <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
            <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
              Un partenaire de confiance<br />pour vos projets de formation
            </h2>
            <div className="whyus-items">
              {reasons.map((r, i) => (
                <div
                  key={r.num}
                  className={`whyus-item reveal${isVisible ? ' visible' : ''} delay-${i + 2}`}
                >
                  {/* ✓ Numéros taille réduite */}
                  <div className="whyus-num">{r.num}</div>
                  <div>
                    <p className="whyus-item-title">{r.title}</p>
                    <p className="whyus-item-desc">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Droite : citation + territoires */}
          <div className={`whyus-visual reveal-scale${isVisible ? ' visible' : ''} delay-3`}>
            <div className="whyus-visual-pattern" />
            <blockquote className="whyus-quote">
              Nous ne formons pas pour former.
              Nous formons pour certifier, et certifier pour transformer.
            </blockquote>
            <p className="whyus-map-label">Présence dans les territoires ultramarins</p>
            {/* ✓ Tags avec bordure rouge visible */}
            <div className="territories">
              {territories.map(t => (
                <span key={t} className="territory-tag">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
