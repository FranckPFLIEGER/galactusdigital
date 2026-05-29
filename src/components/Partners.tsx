import { useIntersection } from '../hooks/useIntersection'

const partners = [
  {
    file: 'cisco-academy.png',
    name: 'Cisco Networking Academy',
    desc: 'Partenaire officiel — formations CCNA, CCNP, CyberOps, Automation',
    level: 'Academy Partner',
  },
  {
    file: 'microsoft-partner.jpg',
    name: 'Microsoft',
    desc: 'Silver Partner — formations Azure, M365, Security, Power Platform',
    level: 'Silver Partner',
  },
  {
    file: 'ipv6-council.png',
    name: 'IPv6 Council Martinique',
    desc: 'Membre actif — formations Certified Network Engineer',
    level: 'Membre actif',
  },
]

export function Partners() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="partners-section" id="partenaires" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Partenaires Certificateurs
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Des partenariats officiels<br />avec les leaders mondiaux
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '3rem' }}>
          Chaque formation dispensée par GALACTUS Digital est adossée
          à un partenariat officiel avec l'éditeur — garant de l'authenticité
          et de la valeur mondiale de la certification.
        </p>

        <div className="partners-grid">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`partner-card reveal${isVisible ? ' visible' : ''} delay-${i + 3}`}
            >
              <div className="partner-logo-wrapper">
                <img
                  src={`/partners/${p.file}`}
                  alt={p.name}
                  loading="lazy"
                  className="partner-logo"
                />
              </div>
              <div className="partner-level">{p.level}</div>
              <div className="partner-name">{p.name}</div>
              <p className="partner-desc">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

