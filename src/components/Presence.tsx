import { useIntersection } from '../hooks/useIntersection'

const territories = [
  { name: 'Guadeloupe',       code: 'GP',  desc: 'Siège régional Caraïbes', x: 245, y: 295 },
  { name: 'Martinique',       code: 'MQ',  desc: 'Centre de formation',      x: 252, y: 310 },
  { name: 'Guyane',           code: 'GF',  desc: 'Présence active',          x: 268, y: 330 },
  { name: 'Saint-Martin',     code: 'SXM', desc: 'Présence active',          x: 237, y: 282 },
  { name: 'Saint-Barthélemy', code: 'BL',  desc: 'Présence active',          x: 244, y: 289 },
  { name: 'Réunion',          code: 'RE',  desc: 'Présence active',          x: 598, y: 375 },
  { name: 'France Hexagonale',code: 'FR',  desc: 'Siège administratif',      x: 488, y: 188 },
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

          <div className="presence-map-svg-wrapper">
            <svg
              viewBox="0 0 800 420"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              aria-label="Carte de présence GALACTUS Digital"
            >
              {/* Fond */}
              <rect width="800" height="420" fill="#0a0a0a" />

              {/* Grille légère */}
              <line x1="0" y1="210" x2="800" y2="210" stroke="rgba(228,31,38,0.12)" strokeWidth="1" strokeDasharray="4,8" />
              <line x1="400" y1="0" x2="400" y2="420" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

              {/* ── Continents ── */}

              {/* Amérique du Nord */}
              <path d="M 100,120 L 180,100 L 260,110 L 290,150 L 280,200 L 240,230 L 200,240 L 160,220 L 120,190 L 95,160 Z"
                fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
              {/* Amérique Centrale */}
              <path d="M 200,240 L 230,245 L 240,270 L 220,275 L 200,265 Z"
                fill="#252525" stroke="#333" strokeWidth="1" />
              {/* Amérique du Sud */}
              <path d="M 200,275 L 260,270 L 300,290 L 310,340 L 290,390 L 250,405 L 210,395 L 185,360 L 180,320 L 185,290 Z"
                fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />

              {/* Europe */}
              <path d="M 440,130 L 490,120 L 540,130 L 555,155 L 545,175 L 510,185 L 475,185 L 450,170 L 435,150 Z"
                fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
              {/* Péninsule ibérique */}
              <path d="M 440,175 L 465,170 L 470,195 L 450,200 L 435,190 Z"
                fill="#252525" stroke="#333" strokeWidth="1" />

              {/* Afrique */}
              <path d="M 455,200 L 520,195 L 560,210 L 575,260 L 570,320 L 545,370 L 510,385 L 475,375 L 450,340 L 440,290 L 445,240 L 450,215 Z"
                fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />

              {/* Moyen-Orient / Arabie */}
              <path d="M 560,180 L 610,175 L 625,210 L 605,235 L 575,235 L 558,215 Z"
                fill="#252525" stroke="#333" strokeWidth="1" />

              {/* Asie centrale + Russie */}
              <path d="M 555,80 L 680,70 L 750,90 L 760,130 L 720,150 L 660,160 L 600,155 L 560,140 L 545,115 Z"
                fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />
              {/* Asie du Sud-Est */}
              <path d="M 620,160 L 700,155 L 730,175 L 730,210 L 700,225 L 660,220 L 630,200 L 615,180 Z"
                fill="#252525" stroke="#333" strokeWidth="1" />
              {/* Inde */}
              <path d="M 600,185 L 640,180 L 650,220 L 635,255 L 610,260 L 595,235 L 592,205 Z"
                fill="#252525" stroke="#333" strokeWidth="1" />

              {/* Chine / Japon zone */}
              <path d="M 660,130 L 740,125 L 760,150 L 745,170 L 700,175 L 660,165 Z"
                fill="#252525" stroke="#333" strokeWidth="1" />

              {/* Océanie */}
              <path d="M 680,320 L 740,315 L 760,335 L 755,360 L 720,368 L 685,355 L 675,338 Z"
                fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" />

              {/* Madagascar */}
              <ellipse cx="565" cy="335" rx="12" ry="22" fill="#252525" stroke="#333" strokeWidth="1" />

              {/* ── Lignes de connexion ── */}
              {/* France → Caraïbes */}
              <path d="M 488,188 Q 380,240 248,295"
                stroke="rgba(228,31,38,0.40)" strokeWidth="1.5"
                fill="none" strokeDasharray="4,5" />
              {/* France → Réunion */}
              <path d="M 488,188 Q 540,280 598,375"
                stroke="rgba(228,31,38,0.40)" strokeWidth="1.5"
                fill="none" strokeDasharray="4,5" />

              {/* ── Points de présence ── */}
              {territories.map((t) => (
                <g key={t.name}>
                  <circle cx={t.x} cy={t.y} r="14" fill="rgba(228,31,38,0.12)" />
                  <circle cx={t.x} cy={t.y} r="7" fill="rgba(228,31,38,0.30)" />
                  <circle cx={t.x} cy={t.y} r="4" fill="#E41F26" />
                  <circle cx={t.x} cy={t.y} r="1.5" fill="white" />
                </g>
              ))}

              {/* ── Labels ── */}
              <text x="500" y="183" fontSize="8" fill="rgba(255,255,255,0.60)" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" letterSpacing="0.08em">FR</text>
              <text x="256" y="290" fontSize="7" fill="rgba(255,255,255,0.60)" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" letterSpacing="0.06em">Caraïbes</text>
              <text x="608" y="370" fontSize="8" fill="rgba(255,255,255,0.60)" fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" letterSpacing="0.06em">RE</text>

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
