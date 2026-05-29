import { useIntersection } from '../hooks/useIntersection'

const territories = [
  { name: 'Guadeloupe',       code: 'GP',  desc: 'Présence active', x: 245, y: 295 },
  { name: 'Martinique',       code: 'MQ',  desc: 'Siège régional Caraïbes',      x: 252, y: 310 },
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

        {/* Carte monde */}
        <div className={`presence-map reveal${isVisible ? ' visible' : ''} delay-5`}>
          <div className="presence-map-header">
            <div className="presence-map-label">Zone d'intervention mondiale</div>
          </div>

          <div className="presence-map-svg-wrapper">
            <svg
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              aria-label="Carte de présence mondiale GALACTUS Digital"
            >
              {/* Fond noir */}
              <rect width="1000" height="500" fill="#111110" />

              {/* Ligne équateur */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(228,31,38,0.15)" strokeWidth="0.8" strokeDasharray="6,8" />
              {/* Tropique du Cancer */}
              <line x1="0" y1="195" x2="1000" y2="195" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="3,10" />
              {/* Tropique du Capricorne */}
              <line x1="0" y1="305" x2="1000" y2="305" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="3,10" />

              {/* ══════════════════════════════════════
                  CONTINENTS en blanc sur fond noir
              ══════════════════════════════════════ */}

              {/* ── Amérique du Nord ── */}
              <path
                d="M 95,85 L 130,75 L 175,70 L 220,75 L 265,85 L 295,105 L 315,130
                   L 325,160 L 320,190 L 305,215 L 280,235 L 255,250 L 230,255
                   L 205,250 L 185,235 L 165,215 L 145,195 L 125,175 L 105,155
                   L 88,130 L 82,108 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" strokeWidth="1"
              />
              {/* Groenland */}
              <path
                d="M 200,30 L 235,25 L 260,35 L 265,55 L 245,65 L 215,62 L 195,50 Z"
                fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"
              />
              {/* Floride + péninsule */}
              <path
                d="M 255,250 L 270,260 L 268,278 L 255,280 L 245,268 Z"
                fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.30)" strokeWidth="0.8"
              />

              {/* ── Amérique Centrale ── */}
              <path
                d="M 230,255 L 255,250 L 270,265 L 265,285 L 250,295 L 232,290 L 222,278 Z"
                fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"
              />

              {/* ── Amérique du Sud ── */}
              <path
                d="M 222,295 L 265,288 L 305,295 L 335,315 L 355,345 L 360,380
                   L 350,415 L 325,445 L 290,460 L 255,458 L 220,445 L 195,420
                   L 182,390 L 180,355 L 190,320 L 205,305 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" strokeWidth="1"
              />

              {/* ── Europe ── */}
              <path
                d="M 440,90 L 480,82 L 520,85 L 555,95 L 570,115 L 568,138
                   L 550,155 L 525,165 L 495,168 L 468,162 L 448,148 L 435,128
                   L 432,108 Z"
                fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.40)" strokeWidth="1"
              />
              {/* Scandinavie */}
              <path
                d="M 490,65 L 515,55 L 540,60 L 548,80 L 530,90 L 505,88 L 490,78 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.32)" strokeWidth="0.8"
              />
              {/* Péninsule ibérique */}
              <path
                d="M 438,155 L 468,148 L 478,170 L 468,188 L 445,190 L 432,175 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8"
              />
              {/* Italie */}
              <path
                d="M 510,152 L 525,148 L 535,165 L 530,185 L 515,192 L 505,178 L 504,162 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"
              />

              {/* ── Afrique ── */}
              <path
                d="M 448,195 L 520,188 L 565,198 L 598,218 L 618,250 L 622,295
                   L 608,345 L 585,390 L 555,418 L 518,428 L 482,420 L 452,398
                   L 432,365 L 425,328 L 428,285 L 435,248 L 440,220 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" strokeWidth="1"
              />
              {/* Madagascar */}
              <path
                d="M 625,320 L 638,315 L 648,330 L 645,358 L 632,365 L 620,352 L 618,335 Z"
                fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"
              />

              {/* ── Moyen-Orient / Arabie ── */}
              <path
                d="M 568,165 L 618,158 L 650,170 L 665,200 L 655,228 L 628,238
                   L 598,232 L 572,215 L 562,192 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"
              />

              {/* ── Russie / Asie du Nord ── */}
              <path
                d="M 558,40 L 650,30 L 750,35 L 830,45 L 890,60 L 920,80
                   L 910,105 L 870,118 L 810,125 L 740,130 L 670,128
                   L 610,118 L 568,105 L 548,82 L 548,58 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"
              />

              {/* ── Asie centrale + Chine ── */}
              <path
                d="M 618,128 L 700,122 L 780,128 L 830,142 L 855,165
                   L 848,195 L 820,215 L 780,225 L 738,222 L 695,210
                   L 655,195 L 628,175 L 612,152 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.32)" strokeWidth="1"
              />

              {/* ── Inde ── */}
              <path
                d="M 658,195 L 698,190 L 722,205 L 730,240 L 718,272
                   L 695,285 L 668,280 L 648,258 L 642,228 L 648,208 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.32)" strokeWidth="0.8"
              />

              {/* ── Asie du Sud-Est ── */}
              <path
                d="M 748,195 L 810,188 L 850,200 L 865,225 L 855,252
                   L 825,265 L 788,260 L 758,242 L 742,218 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"
              />
              {/* Péninsule Malaisie + Indochine */}
              <path
                d="M 788,265 L 808,258 L 818,280 L 808,305 L 790,308 L 778,290 Z"
                fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"
              />

              {/* ── Japon ── */}
              <ellipse cx="875" cy="155" rx="18" ry="28" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" transform="rotate(-15,875,155)" />

              {/* ── Australie ── */}
              <path
                d="M 778,350 L 840,338 L 892,345 L 928,368 L 938,400
                   L 920,430 L 882,448 L 840,450 L 798,438 L 768,415
                   L 758,385 L 762,362 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.32)" strokeWidth="1"
              />
              {/* Nouvelle-Zélande */}
              <ellipse cx="948" cy="430" rx="12" ry="20" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" transform="rotate(-20,948,430)" />

              {/* ── Antartique (bande) ── */}
              <rect x="0" y="475" width="1000" height="25" fill="rgba(255,255,255,0.08)" />

              {/* ══════════════════════════════════════
                  LIGNES DE CONNEXION
              ══════════════════════════════════════ */}
              {/* France → Caraïbes */}
              <path d="M 488,188 Q 390,230 250,295"
                stroke="#E41F26" strokeWidth="1.5" fill="none" strokeDasharray="5,6" opacity="0.6" />
              {/* France → Réunion */}
              <path d="M 488,188 Q 545,280 598,375"
                stroke="#E41F26" strokeWidth="1.5" fill="none" strokeDasharray="5,6" opacity="0.6" />

              {/* ══════════════════════════════════════
                  POINTS DE PRÉSENCE
              ══════════════════════════════════════ */}
              {territories.map((t) => (
                <g key={t.name}>
                  <circle cx={t.x} cy={t.y} r="16" fill="rgba(228,31,38,0.15)" />
                  <circle cx={t.x} cy={t.y} r="8" fill="rgba(228,31,38,0.35)" />
                  <circle cx={t.x} cy={t.y} r="5" fill="#E41F26" />
                  <circle cx={t.x} cy={t.y} r="2" fill="white" />
                </g>
              ))}

              {/* Labels */}
              <text x="502" y="183" fontSize="10" fill="rgba(255,255,255,0.75)"
                fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" letterSpacing="0.08em">FR</text>
              <text x="218" y="277" fontSize="9" fill="rgba(255,255,255,0.65)"
                fontFamily="'Barlow Condensed',sans-serif" fontWeight="600">Caraïbes</text>
              <text x="612" y="370" fontSize="10" fill="rgba(255,255,255,0.75)"
                fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" letterSpacing="0.08em">RE</text>

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
