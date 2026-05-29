import { useIntersection } from '../hooks/useIntersection'

const territories = [
  { name: 'Guadeloupe',       code: 'GP', desc: 'Présence active',  x: 245, y: 310 },
  { name: 'Martinique',       code: 'MQ', desc: 'Siège régional Caraïbes',       x: 252, y: 325 },
  { name: 'Guyane',           code: 'GF', desc: 'Présence active',           x: 265, y: 345 },
  { name: 'Saint-Martin',     code: 'SXM',desc: 'Présence active',           x: 238, y: 300 },
  { name: 'Saint-Barthélemy', code: 'BL', desc: 'Présence active',           x: 242, y: 304 },
  { name: 'Réunion',          code: 'RE', desc: 'Présence active',           x: 600, y: 390 },
  { name: 'France Hexagonale',code: 'FR', desc: 'Siège administratif',       x: 490, y: 195 },
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

        {/* Grille des territoires */}
        <div className="presence-grid">
          {territories.map((t, i) => (
            <div
              key={t.name}
              className={`presence-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.06 * i + 0.2}s` }}
            >
              <div className="presence-code">{t.code}</div>
              <div className="presence-name">{t.name}</div>
              <div className="presence-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Carte monde SVG */}
        <div className={`presence-map reveal${isVisible ? ' visible' : ''} delay-5`}>
          <div className="presence-map-header">
            <div className="presence-map-label">Zone d'intervention mondiale</div>
          </div>

          {/* Carte SVG simplifiée */}
          <div className="presence-map-svg-wrapper">
            <svg
              viewBox="0 0 800 450"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto' }}
              aria-label="Carte de présence GALACTUS Digital"
            >
              {/* Fond mer */}
              <rect width="800" height="450" fill="rgba(255,255,255,0.03)" rx="4" />

              {/* Continents simplifiés */}
              {/* Europe */}
              <ellipse cx="490" cy="185" rx="55" ry="40" fill="rgba(255,255,255,0.08)" />
              {/* Afrique */}
              <ellipse cx="500" cy="300" rx="45" ry="65" fill="rgba(255,255,255,0.06)" />
              {/* Amérique du Nord */}
              <ellipse cx="180" cy="200" rx="80" ry="60" fill="rgba(255,255,255,0.06)" />
              {/* Amérique du Sud */}
              <ellipse cx="230" cy="340" rx="50" ry="70" fill="rgba(255,255,255,0.06)" />
              {/* Asie */}
              <ellipse cx="630" cy="210" rx="100" ry="60" fill="rgba(255,255,255,0.06)" />
              {/* Océanie */}
              <ellipse cx="690" cy="360" rx="45" ry="30" fill="rgba(255,255,255,0.05)" />
              {/* Antarctique */}
              <ellipse cx="400" cy="440" rx="150" ry="20" fill="rgba(255,255,255,0.04)" />

              {/* Ligne équateur */}
              <line x1="0" y1="260" x2="800" y2="260" stroke="rgba(228,31,38,0.15)" strokeWidth="1" strokeDasharray="4,6" />

              {/* Points de présence */}
              {territories.map((t, i) => (
                <g key={t.name}>
                  {/* Halo rouge */}
                  <circle cx={t.x} cy={t.y} r="12" fill="rgba(228,31,38,0.15)" />
                  {/* Point rouge */}
                  <circle cx={t.x} cy={t.y} r="5" fill="#E41F26" />
                  {/* Point intérieur blanc */}
                  <circle cx={t.x} cy={t.y} r="2" fill="white" />
                  {/* Label */}
                  <text
                    x={t.x + (t.code === 'FR' ? 14 : t.code === 'RE' ? 14 : 14)}
                    y={t.y + 4}
                    fontSize="9"
                    fill="rgba(255,255,255,0.70)"
                    fontFamily="'Barlow Condensed', sans-serif"
                    fontWeight="600"
                    letterSpacing="0.05em"
                  >
                    {t.code}
                  </text>
                </g>
              ))}

              {/* Ligne reliant Caraïbes et France */}
              <line
                x1="490" y1="195"
                x2="248" y2="310"
                stroke="rgba(228,31,38,0.35)"
                strokeWidth="1"
                strokeDasharray="3,5"
              />
              {/* Ligne reliant France et Réunion */}
              <line
                x1="490" y1="195"
                x2="600" y2="390"
                stroke="rgba(228,31,38,0.35)"
                strokeWidth="1"
                strokeDasharray="3,5"
              />
            </svg>
          </div>

          {/* Stats */}
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
            "Présents là où les autres ne vont pas,
            pour ceux qui méritent les mêmes opportunités."
          </p>
        </div>

      </div>
    </section>
  )
}
