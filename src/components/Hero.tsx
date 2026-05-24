import { ArrowRight, Award } from 'lucide-react'

const floatingBadges = [
  {
    cls: 'badge-a',
    color: '#0078D4',
    bg: 'rgba(0,120,212,0.18)',
    label: 'Microsoft Azure',
    sub: 'AZ-900 · AZ-104 · AZ-305',
    icon: 'Ⓜ',
  },
  {
    cls: 'badge-b',
    color: '#FF9900',
    bg: 'rgba(255,153,0,0.18)',
    label: 'Amazon Web Services',
    sub: 'CLF-C02 · SAA-C03',
    icon: '☁',
  },
  {
    cls: 'badge-c',
    color: '#1BA0D7',
    bg: 'rgba(27,160,215,0.18)',
    label: 'Cisco',
    sub: 'CCNA · CCNP · CyberOps',
    icon: '⬡',
  },
  {
    cls: 'badge-d',
    color: '#C00',
    bg: 'rgba(200,0,0,0.18)',
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
        {/* Left: Copy */}
        <div>
          <div
            className="hero-label"
            style={{ animationDelay: '0s', animation: 'fadeUp 0.6s ease-out both' }}
          >
            Formation certifiée IT
          </div>

          <h1
            className="hero-h1"
            style={{ animation: 'fadeUp 0.7s ease-out 0.12s both' }}
          >
            L'excellence en certifications IT <em>aux Caraïbes</em>
          </h1>

          <p
            className="hero-desc"
            style={{ animation: 'fadeUp 0.7s ease-out 0.24s both' }}
          >
            Grâce à notre réseau d'experts internationaux et notre maîtrise de l'ingénierie
            de formation certifiée, nous proposons l'ensemble des cours officiels éditeurs IT
            — en intra comme en inter-entreprise — pour accompagner vos équipes
            vers les certifications les plus reconnues au monde.
          </p>

          <div
            className="hero-actions"
            style={{ animation: 'fadeUp 0.7s ease-out 0.36s both' }}
          >
            <a href="#services" className="btn-gold">
              Découvrir nos formations <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn-ghost">
              Demander un devis
            </a>
          </div>

          <div
            className="hero-scroll"
            style={{ animation: 'fadeUp 0.7s ease-out 0.5s both' }}
          >
            <span className="hero-scroll-line" />
            Découvrir
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero-visual" style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
          <div className="hero-panel">
            <div className="hero-panel-grid" />
            <div className="hero-panel-glow" />

            <div className="hero-center-badge">
              <Award size={36} color="white" />
            </div>

            {floatingBadges.map(badge => (
              <div key={badge.label} className={`cert-badge ${badge.cls}`}>
                <div
                  className="cert-badge-icon"
                  style={{ background: badge.bg, color: badge.color, fontSize: '1.1rem' }}
                >
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
