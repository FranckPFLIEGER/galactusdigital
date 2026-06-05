import { useIntersection } from '../hooks/useIntersection'

const publishers = [
  {
    name: 'Microsoft',
    initial: 'MS',
    badge: 'n° 4653557',
    badgeColor: '#0078D4',
    certs: 'Azure · M365 · Security · AI',
  },
  {
    name: 'Cisco',
    initial: 'CI',
    badge: 'n° 3018982',
    badgeColor: '#E41F26',
    certs: 'CCNA · CyberOps · DevNet · IoT',
  },
  {
    name: 'IPv6 Forum',
    initial: 'IP',
    badge: 'Official',
    badgeColor: '#16a085',
    certs: 'Certified Network Engineer',
  },
  {
    name: 'LPI · OpenEDG',
    initial: 'LP',
    badge: 'Official',
    badgeColor: '#8e44ad',
    certs: 'Linux Essentials · Python PCEP/PCAP',
  },
]

export function Certifications() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="certs-section" id="certifications" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Éditeurs Officiels
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Cours officiels des plus grands<br />éditeurs technologiques mondiaux
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}>
          Nous sommes partenaires agréés des principaux éditeurs IT. Chaque cours
          est dispensé selon les programmes officiels, par des formateurs accrédités,
          pour garantir la validité des certifications obtenues.
        </p>
        <div className="publishers-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {publishers.map((p, i) => (
            <div
              key={p.name}
              className={`publisher-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.05 * i + 0.3}s` }}
            >
              <div className="publisher-logo">
                <span style={{
                  fontFamily: 'var(--font-title)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: 'white',
                  letterSpacing: '0.05em',
                }}>
                  {p.initial}
                </span>
              </div>
              <div className="publisher-name">{p.name}</div>
              {/* Badge partenaire */}
              <div style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.60rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fff',
                background: p.badgeColor,
                padding: '0.15rem 0.55rem',
                display: 'inline-block',
              }}>
                {p.badge}
              </div>
              <div className="publisher-certs">{p.certs}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
