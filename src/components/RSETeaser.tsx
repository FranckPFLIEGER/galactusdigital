import { useIntersection } from '../hooks/useIntersection'
import { ArrowRight } from 'lucide-react'

// Aperçu court de l'engagement RSE sur la home.
// Le contenu complet vit sur la page /rse.
export function RSETeaser() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="rse-section" id="rse" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.6)' }}>
          Responsabilité Sociétale
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2-light reveal${isVisible ? ' visible' : ''} delay-1`}>
          Un numérique responsable,<br />inclusif et ancré dans les territoires ultramarins
        </h2>
        <p className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '2rem', maxWidth: '780px' }}>
          Former sur place plutôt que d'envoyer les gens en métropole, ouvrir les certifications
          mondiales à ceux qu'on croyait trop loin pour y accéder — c'est notre mission depuis 2018.
          Notre démarche RSE s'articule autour des trois axes du vademecum France Compétences 2026 :
          handicap, transition écologique, transition numérique.
        </p>
        <a href="/rse"
          className={`reveal${isVisible ? ' visible' : ''} delay-3`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#E41F26', textDecoration: 'none', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Découvrir notre engagement RSE <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
