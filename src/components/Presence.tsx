import { useIntersection } from '../hooks/useIntersection'

const territories = [
  { name: 'Guadeloupe',       code: 'GP',  desc: 'Présence active', cx: 508, cy: 558 },
  { name: 'Martinique',       code: 'MQ',  desc: 'Siège régional Caraïbes',      cx: 515, cy: 572 },
  { name: 'Guyane',           code: 'GF',  desc: 'Présence active',          cx: 528, cy: 590 },
  { name: 'Saint-Martin',     code: 'SXM', desc: 'Présence active',          cx: 502, cy: 548 },
  { name: 'Saint-Barthélemy', code: 'BL',  desc: 'Présence active',          cx: 505, cy: 553 },
  { name: 'Réunion',          code: 'RE',  desc: 'Présence active',          cx: 1240, cy: 710 },
  { name: 'France Hexagonale',code: 'FR',  desc: 'Siège administratif',      cx: 990,  cy: 338 },
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
              viewBox="0 0 2000 1001"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <rect width="2000" height="1001" fill="#111110"/>

              {/* Lignes de référence */}
              <line x1="0" y1="500" x2="2000" y2="500" stroke="rgba(228,31,38,0.12)" strokeWidth="1" strokeDasharray="8,12"/>
              <line x1="1000" y1="0" x2="1000" y2="1001" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>

              {/* ── Amérique du Nord ── */}
              <path d="M280,120 L380,100 L480,110 L560,130 L610,160 L630,200 L625,250
                       L600,295 L565,330 L520,355 L475,365 L430,355 L390,335 L350,305
                       L315,270 L290,235 L270,195 L260,158 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5"/>
              <path d="M180,130 L240,120 L280,140 L270,170 L230,175 L185,160 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.40)" strokeWidth="1"/>
              <path d="M500,60 L560,50 L600,65 L605,95 L575,110 L530,108 L500,90 Z"
                fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
              <path d="M565,355 L580,370 L578,392 L562,395 L548,378 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>

              {/* ── Amérique Centrale ── */}
              <path d="M475,365 L530,360 L545,380 L540,408 L518,418 L490,412 L470,395 L468,378 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>

              {/* ── Amérique du Sud ── */}
              <path d="M468,418 L545,410 L600,422 L648,448 L678,488 L688,540
                       L678,595 L652,645 L610,680 L562,692 L512,685 L468,665
                       L435,632 L418,592 L415,545 L422,498 L438,460 L452,435 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5"/>

              {/* ── Europe ── */}
              <path d="M880,165 L950,150 L1020,158 L1065,178 L1080,205
                       L1072,232 L1042,252 L1000,262 L955,258 L918,242
                       L892,220 L876,195 Z"
                fill="rgba(255,255,255,0.24)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5"/>
              <path d="M955,115 L1005,105 L1040,118 L1048,148 L1022,162 L982,160 L955,145 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
              <path d="M876,242 L918,235 L930,265 L918,292 L892,295 L872,278 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
              <path d="M1002,238 L1022,232 L1038,255 L1032,285 L1015,298 L1000,282 L998,258 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.40)" strokeWidth="1"/>
              <path d="M880,162 L900,155 L912,170 L905,188 L885,192 L872,178 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.40)" strokeWidth="1"/>

              {/* ── Afrique ── */}
              <path d="M892,298 L1010,285 L1082,302 L1128,332 L1155,375
                       L1162,432 L1148,492 L1118,548 L1075,590 L1022,608
                       L965,602 L910,578 L872,542 L852,498 L848,448
                       L855,398 L865,355 L878,322 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5"/>
              <path d="M1148,468 L1168,462 L1182,482 L1178,522 L1158,532 L1140,518 L1138,488 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.38)" strokeWidth="1"/>

              {/* ── Moyen-Orient ── */}
              <path d="M1082,232 L1148,222 L1188,238 L1208,272 L1195,312
                       L1158,328 L1118,318 L1088,295 L1075,262 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.42)" strokeWidth="1"/>

              {/* ── Russie ── */}
              <path d="M1052,65 L1200,48 L1380,52 L1520,65 L1620,85
                       L1665,112 L1648,145 L1595,165 L1510,178 L1408,185
                       L1298,180 L1198,168 L1108,148 L1058,125 L1042,95 Z"
                fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5"/>

              {/* ── Asie ── */}
              <path d="M1198,168 L1352,158 L1488,165 L1578,185
                       L1615,218 L1602,262 L1558,292 L1498,308
                       L1425,305 L1355,292 L1288,272 L1238,248
                       L1208,218 L1195,188 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.5"/>

              {/* ── Inde ── */}
              <path d="M1258,292 L1342,282 L1388,302 L1405,348
                       L1388,398 L1355,418 L1312,412 L1278,388
                       L1258,348 L1252,315 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.48)" strokeWidth="1"/>

              {/* ── Asie du Sud-Est ── */}
              <path d="M1488,272 L1572,262 L1628,278 L1658,312
                       L1648,355 L1608,378 L1558,372 L1512,348 L1485,312 Z"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.42)" strokeWidth="1"/>

              {/* ── Japon ── */}
              <ellipse cx="1695" cy="218" rx="22" ry="42"
                fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.42)" strokeWidth="1"
                transform="rotate(-18,1695,218)"/>

              {/* ── Australie ── */}
              <path d="M1538,598 L1648,578 L1748,588 L1825,618
                       L1858,662 L1862,715 L1838,758 L1785,782
                       L1718,788 L1648,778 L1582,748 L1535,705
                       L1518,658 L1522,622 Z"
                fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.5"/>

              {/* ── Antarctique ── */}
              <rect x="0" y="950" width="2000" height="51" fill="rgba(255,255,255,0.10)"/>

              {/* ══ 7 POINTS DE PRÉSENCE SANS LIGNES ══ */}
              {territories.map((t) => (
                <g key={t.name}>
                  <circle cx={t.cx} cy={t.cy} r="28" fill="rgba(228,31,38,0.15)"/>
                  <circle cx={t.cx} cy={t.cy} r="16" fill="rgba(228,31,38,0.38)"/>
                  <circle cx={t.cx} cy={t.cy} r="9"  fill="#E41F26"/>
                  <circle cx={t.cx} cy={t.cy} r="4"  fill="white"/>
                </g>
              ))}

              {/* Labels */}
              <text x="1015" y="334" fontSize="22" fill="rgba(255,255,255,0.85)"
                fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" letterSpacing="2">FR</text>
              <text x="488" y="538" fontSize="20" fill="rgba(255,255,255,0.75)"
                fontFamily="'Barlow Condensed',sans-serif" fontWeight="600">Caraïbes</text>
              <text x="1265" y="706" fontSize="22" fill="rgba(255,255,255,0.85)"
                fontFamily="'Barlow Condensed',sans-serif" fontWeight="700" letterSpacing="2">RE</text>

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
