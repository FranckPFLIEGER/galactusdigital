import { useIntersection } from '../hooks/useIntersection'

// ✓ Icônes et couleurs remplacés par la charte noir/rouge/gris
// Plus de fonds pastel colorés hors charte
const publishers = [
  {
    name: 'Microsoft',
    initial: 'MS',
    certs: 'Azure · M365 · Security · Power Platform',
  },
  {
    name: 'Cisco',
    initial: 'CI',
    certs: 'CCNA · CCNP · Automation · CyberOps',
  },
  {
    name: 'IPv6 Forum',
    initial: 'IP',
    certs: 'Certified Network Engineer',
  },
  {
    name: 'CompTIA',
    initial: 'CT',
    certs: 'A+ · Network+ · Security+',
  },
  {
    name: 'EC-Council',
    initial: 'EC',
    certs: 'CEH · CPENT · C|EH Master',
  },
  {
    name: 'PMI',
    initial: 'PM',
    certs: 'PMP · CAPM · PMI-ACP · PgMP',
  },
]

export function Certifications() {
  const { ref, isVisible } = useIntersection()
  return (
    // ✓ Fond blanc → fond très légèrement gris pour douceur visuelle
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

        <div className="publishers-grid">
          {publishers.map((p, i) => (
            <div
              key={p.name}
              className={`publisher-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.05 * i + 0.3}s` }}
            >
              {/* ✓ Logo fond noir avec initiales blanches — conforme charte */}
              <div className="publisher-logo">
                <span style={{
                  fontFamily: "var(--font-title)",
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: 'white',
                  letterSpacing: '0.05em',
                }}>
                  {p.initial}
                </span>
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
