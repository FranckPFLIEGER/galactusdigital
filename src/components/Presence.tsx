import { useIntersection } from '../hooks/useIntersection'
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const territories = [
  { name: 'France Hexagonale', code: 'FR',  desc: 'Siège administratif',      coordinates: [2.2137,   46.2276] as [number,number] },
  { name: 'Guadeloupe',        code: 'GP',  desc: 'Siège régional Caraïbes',  coordinates: [-61.5510, 16.2650] as [number,number] },
  { name: 'Martinique',        code: 'MQ',  desc: 'Centre de formation',       coordinates: [-61.0240, 14.6410] as [number,number] },
  { name: 'Guyane',            code: 'GF',  desc: 'Présence active',           coordinates: [-53.1258,  3.9339] as [number,number] },
  { name: 'Saint-Martin',      code: 'SXM', desc: 'Présence active',           coordinates: [-63.0523, 18.0708] as [number,number] },
  { name: 'Saint-Barthélemy',  code: 'BL',  desc: 'Présence active',           coordinates: [-62.8333, 17.9000] as [number,number] },
  { name: 'Réunion',           code: 'RE',  desc: 'Présence active',           coordinates: [55.5364, -21.1151] as [number,number] },
]

const france = territories[0].coordinates

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

        {/* Grille territoires */}
        <div className="presence-grid">
          {territories.map((t, i) => (
            <div key={t.name}
              className={`presence-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.06 * i + 0.2}s` }}>
              <div className="presence-code">{t.code}</div>
              <div className="presence-name">{t.name}</div>
              <div className="presence-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Carte monde */}
        <div className={`presence-map reveal${isVisible ? ' visible' : ''} delay-5`}>
          <div className="presence-map-header">
            <div className="presence-map-label">Zone d'intervention mondiale</div>
          </div>

          <div className="presence-map-svg-wrapper">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 160, center: [10, 20] }}
              style={{ width: '100%', height: 'auto', background: '#111110' }}
            >
              {/* Continents Natural Earth */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: 'rgba(255,255,255,0.13)',
                          stroke: 'rgba(255,255,255,0.25)',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover: {
                          fill: 'rgba(255,255,255,0.20)',
                          outline: 'none',
                        },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Lignes France → territoires */}
              {territories.slice(1).map((t) => (
                <Line
                  key={`line-${t.code}`}
                  from={france}
                  to={t.coordinates}
                  stroke="rgba(228,31,38,0.50)"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  strokeDasharray="5 6"
                />
              ))}

              {/* 7 points avec vraies coordonnées GPS */}
              {territories.map((t) => (
                <Marker key={t.code} coordinates={t.coordinates}>
                  <circle r={14} fill="rgba(228,31,38,0.12)" className="presence-pulse"/>
                  <circle r={8}  fill="rgba(228,31,38,0.35)"/>
                  <circle r={5}  fill="#E41F26"/>
                  <circle r={2}  fill="white"/>
                  <text
                    y={-12}
                    textAnchor="middle"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '8px',
                      fontWeight: 700,
                      fill: 'rgba(255,255,255,0.90)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {t.code}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
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
