import { useIntersection } from '../hooks/useIntersection'
import { ArrowRight, Star } from 'lucide-react'

export function Satisfaction() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="satisfaction-section" id="satisfaction" ref={ref}>
      <div className="section-inner">
        <div className="satisfaction-grid">

          <div className={`reveal${isVisible ? ' visible' : ''}`}>
            <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>Satisfaction &amp; Qualité</span>
            <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
            <h2 className="section-h2">
              Votre satisfaction :<br />notre priorité
            </h2>
            <p className="section-body" style={{ marginBottom: '1.5rem' }}>
              Au bout du compte, ce qui prime pour nous, c'est votre satisfaction.
              Nous insufflons la qualité au cœur de chaque aspect de notre offre —
              de la conception des formations jusqu'à l'accompagnement post-formation,
              en passant par la méthodologie d'enseignement.
            </p>
            <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.6, marginBottom: '2rem' }}>
              Ce taux correspond au pourcentage d'apprenants ayant attribué une note
              supérieure ou égale à 4 sur 5 dans le questionnaire de satisfaction
              renseigné en fin de formation — données 2024, mise à jour mai 2026.
            </p>
            <a href="/demarche-qualite" className="btn-red" style={{ fontSize: '0.85rem' }}>
              Consulter notre démarche qualité <ArrowRight size={15} />
            </a>
          </div>

          <div className={`satisfaction-score reveal${isVisible ? ' visible' : ''} delay-2`}>
            <div className="satisfaction-stars">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={22}
                  fill={i <= 4 ? '#E41F26' : 'none'}
                  color="#E41F26"
                />
              ))}
            </div>
            <div className="satisfaction-num">4,8/5</div>
            <div className="satisfaction-label">
              Note moyenne de satisfaction<br />des apprenants
            </div>
            <div className="satisfaction-detail">
              Formation · Formateur · Impact au travail
            </div>
            <div style={{
              marginTop: '1rem',
              fontSize: '0.68rem',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.5,
              textAlign: 'center',
              maxWidth: '220px',
            }}>
              Certification Qualiopi Certifopac — Accréditation Cofrac n° 5-0620
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
