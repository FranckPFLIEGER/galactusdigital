import { ArrowRight, Award } from 'lucide-react'

const floatingBadges = [
  {
    cls: 'badge-a',
    label: 'Microsoft Azure',
    sub: 'AZ-900 · AZ-104 · AZ-305',
    icon: '⊞',
  },
  {
    cls: 'badge-b',
    label: 'IPv6 Forum',
    sub: 'Certified Network Engineer',
    icon: '🌐',
  },
  {
    cls: 'badge-c',
    label: 'Cisco',
    sub: 'CCNA · CCNP · Automation · CyberOps',
    icon: '⬡',
  },
  {
    cls: 'badge-d',
    label: 'CompTIA',
    sub: 'A+ · Network+ · Security+',
    icon: '◈',
  },
]

export function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-pattern" />
      <div className="hero-gradient" />
      <div className="hero-inner">

        {/* Gauche : texte */}
        <div>
          <div className="hero-label" style={{ animation: 'fadeUp 0.6s ease-out both' }}>
            Formation certifiée IT
          </div>
          <h1 className="hero-h1" style={{ animation: 'fadeUp 0.7s ease-out 0.12s both' }}>
            L'excellence en certifications IT <em>aux Caraïbes</em>
          </h1>
          <p className="hero-desc" style={{ animation: 'fadeUp 0.7s ease-out 0.24s both' }}>
            Grâce à notre réseau d'experts internationaux et notre maîtrise de l'ingénierie
            de formation certifiée, nous proposons l'ensemble des cours officiels éditeurs IT
            — en intra comme en inter-entreprise — pour accompagner vos équipes
            vers les certifications les plus reconnues au monde.
          </p>
          <div className="hero-actions" style={{ animation: 'fadeUp 0.7s ease-out 0.36s both' }}>
            {/* ✓ Bouton principal rouge plein */}
            <a href="#services" className="btn-red">
              Découvrir nos formations <ArrowRight size={15} />
            </a>
            {/* ✓ Bouton secondaire contour blanc */}
            <a href="#contact" className="btn-ghost">
              Demander un devis
            </a>
          </div>
          <div className="hero-scroll" style={{ animation: 'fadeUp 0.7s ease-out 0.48s both' }}>
            <div className="hero-scroll-line" />
            Défiler pour en savoir plus
          </div>
        </div>

        {/* Droite : visuel avec badges */}
        <div className="hero-visual" style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
          <div className="hero-panel">
            <div className="hero-panel-grid" />
            <div className="hero-panel-glow" />
            {/* Badge central rouge */}
            <div className="hero-center-badge">
              <Award size={36} color="white" />
            </div>
            {/* Badges flottants — tous dans la charte noir/rouge/gris */}
            {floatingBadges.map(badge => (
              <div key={badge.label} className={`cert-badge ${badge.cls}`}>
                <div className="cert-badge-icon">
                  {badge.icon}
                </div>
                <div>
                  <div className="cert-badge-name">{badge.label}</div>
                  <div className="cert-badge-sub">{badge.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
