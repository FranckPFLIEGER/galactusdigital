import { useIntersection } from '../hooks/useIntersection'

const territories = [
  { name: 'Guadeloupe',       flag: '🇬🇵', desc: 'Siège régional Caraïbes' },
  { name: 'Martinique',       flag: '🇲🇶', desc: 'Centre de formation' },
  { name: 'Guyane',           flag: '🇬🇫', desc: 'Présence active' },
  { name: 'Saint-Martin',     flag: '🏝',  desc: 'Présence active' },
  { name: 'Saint-Barthélemy', flag: '🏝',  desc: 'Présence active' },
  { name: 'Réunion',          flag: '🇷🇪', desc: 'Présence active' },
  { name: 'France Hexagonale',flag: '🇫🇷', desc: 'Siège administratif' },
]

export function Presence() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="presence-section" id="presence" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Notre Présence
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Une couverture unique<br />aux Caraïbes et en France
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '3rem' }}>
          Seul organisme de formation certifiante IT capable de déployer
          des formations officielles sur 7 territoires ultramarins.
        </p>

        <div className="presence-grid">
          {territories.map((t, i) => (
            <div
              key={t.name}
              className={`presence-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.06 * i + 0.2}s` }}
            >
              <div className="presence-flag">{t.flag}</div>
              <div className="presence-name">{t.name}</div>
              <div className="presence-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Carte visuelle */}
        <div className={`presence-map reveal${isVisible ? ' visible' : ''} delay-5`}>
          <div className="presence-map-inner">
            <div className="presence-map-label">Zone d'intervention</div>
            <div className="presence-map-stats">
              <div className="presence-stat">
                <span className="presence-stat-num">7</span>
                <span className="presence-stat-label">territoires</span>
              </div>
              <div className="presence-stat-divider" />
              <div className="presence-stat">
                <span className="presence-stat-num">+4 000</span>
                <span className="presence-stat-label">km de présence</span>
              </div>
              <div className="presence-stat-divider" />
              <div className="presence-stat">
                <span className="presence-stat-num">3</span>
                <span className="presence-stat-label">océans</span>
              </div>
            </div>
            <p className="presence-map-quote">
              "Présents là où les autres ne vont pas,<br />
              pour ceux qui méritent les mêmes opportunités."
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

