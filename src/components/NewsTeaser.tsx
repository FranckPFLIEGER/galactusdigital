import { useIntersection } from '../hooks/useIntersection'
import { ArrowRight } from 'lucide-react'

// Aperçu court des actualités / veille sur la home.
// Le contenu complet vit sur la page /actualites.
export function NewsTeaser() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="news-section" id="actualites" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Actualités &amp; Veille IT
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          ASPIK &amp; rayonnement<br />international
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '2rem', maxWidth: '780px' }}>
          Via notre association ASPIK, GALACTUS Digital participe activement au développement
          du numérique dans les territoires ultramarins et rayonne à l'international :
          passages TV, interventions presse, publications et veille technologique.
        </p>
        <a href="/actualites"
          className={`reveal${isVisible ? ' visible' : ''} delay-3`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#E41F26', textDecoration: 'none', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Voir toutes les actualités <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
