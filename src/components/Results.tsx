import { useIntersection } from '../hooks/useIntersection'

const years = [
  { year: '2023', presentes: 115 },
  { year: '2024', presentes: 272 },
  { year: '2025', presentes: 131 },
]

export function Results() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="results-section" id="resultats" ref={ref}>
      <div className="section-inner">

        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.6)' }}>
          Nos résultats
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2-light reveal${isVisible ? ' visible' : ''} delay-1`}>
          Une performance<br />sans équivalent dans les territoires ultramarins
        </h2>

        <div className={`results-notice reveal${isVisible ? ' visible' : ''} delay-2`}>
          <p>
            <strong>Tous nos candidats présentés à un examen de certification officielle éditeur
            (Cisco, Microsoft) l'ont obtenu.</strong> Année après année, ceux qui font le choix de passer la
            certification la réussissent — zéro échec.
          </p>
        </div>

        <div className="results-grid">
          {years.map((y, i) => (
            <div
              key={y.year}
              className={`result-card reveal${isVisible ? ' visible' : ''} delay-${i + 3}`}
            >
              <div className="result-year">{y.year}</div>
              <div className="result-main">
                <span className="result-big" style={{ color: '#E41F26' }}>100%</span>
                <span className="result-unit">de réussite<br />parmi les présentés à l'examen</span>
              </div>
              <div style={{ width: '40px', height: '2px', background: '#E41F26', margin: '1rem auto' }} />
              <div className="result-details">
                <div className="result-detail-item result-detail-highlight">
                  <span className="result-detail-label" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>
                    Candidats formés
                  </span>
                  <span className="result-detail-num" style={{ color: '#E41F26', fontSize: '1.6rem' }}>{y.presentes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`results-total reveal${isVisible ? ' visible' : ''} delay-5`}>
          <div className="results-total-inner">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '3.5rem', fontWeight: 700, color: '#E41F26', lineHeight: 1 }}>518</div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.80rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.4rem' }}>candidats formés, toutes formations (2023-2025)</div>
            </div>
            <div style={{ width: '1px', height: '60px', background: 'rgba(228,31,38,0.3)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '3.5rem', fontWeight: 700, color: '#E41F26', lineHeight: 1 }}>100%</div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.80rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.4rem' }}>de réussite parmi les présentés à l'examen</div>
            </div>
            <div style={{ width: '1px', height: '60px', background: 'rgba(228,31,38,0.3)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '3.5rem', fontWeight: 700, color: '#E41F26', lineHeight: 1 }}>0</div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.80rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: '0.4rem' }}>échec à l'examen</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
