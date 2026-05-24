import { useIntersection } from '../hooks/useIntersection'

const publishers = [
  {
    name: 'Microsoft',
    icon: '⬛',
    color: '#0078D4',
    bg: 'rgba(0,120,212,0.1)',
    certs: 'Azure · M365 · Security · Power Platform',
  },
  {
    name: 'Cisco',
    icon: '⬡',
    color: '#1BA0D7',
    bg: 'rgba(27,160,215,0.1)',
    certs: 'CCNA · CCNP · CyberOps · DevNet',
  },
  {
    name: 'Amazon Web Services',
    icon: '☁',
    color: '#FF9900',
    bg: 'rgba(255,153,0,0.1)',
    certs: 'CLF-C02 · SAA-C03 · SCS-C02',
  },
  {
    name: 'CompTIA',
    icon: '◈',
    color: '#C00',
    bg: 'rgba(200,0,0,0.1)',
    certs: 'A+ · Network+ · Security+ · CySA+',
  },
  {
    name: 'VMware by Broadcom',
    icon: '◉',
    color: '#607078',
    bg: 'rgba(96,112,120,0.1)',
    certs: 'VCP-DCV · VCP-NV · VCAP',
  },
  {
    name: 'EC-Council',
    icon: '⚑',
    color: '#1A3A6B',
    bg: 'rgba(26,58,107,0.1)',
    certs: 'CEH · CPENT · C|EH Master',
  },
  {
    name: 'ITIL 4 / Axelos',
    icon: '◫',
    color: '#6B2F8E',
    bg: 'rgba(107,47,142,0.1)',
    certs: 'Foundation · Practitioner · Strategic',
  },
  {
    name: 'PMI',
    icon: '◷',
    color: '#2B5C8E',
    bg: 'rgba(43,92,142,0.1)',
    certs: 'PMP · CAPM · PMI-ACP · PgMP',
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
        <div className={`gold-rule${isVisible ? ' visible' : ''}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Cours officiels des plus grands<br />éditeurs technologiques mondiaux
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}>
          Nous sommes partenaires agréés des principaux éditeurs IT. Chaque cours
          est dispensé selon les programmes officiels, par des formateurs accrédités,
          pour garantir la validité des certifications obtenues.
        </p>

        <div className="publishers-grid">
          {publishers.map((p, i) => (
            <div
              key={p.name}
              className={`publisher-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.05 * i + 0.3}s` }}
            >
              <div
                className="publisher-logo"
                style={{ background: p.bg, color: p.color, fontSize: '1.4rem' }}
              >
                {p.icon}
              </div>
              <div className="publisher-name">{p.name}</div>
              <div className="publisher-certs">{p.certs}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
