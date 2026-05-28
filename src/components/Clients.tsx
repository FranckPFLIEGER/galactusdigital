import { useIntersection } from '../hooks/useIntersection'

const clients = [
  { file: '001.jpg' }, { file: '002.jpg' }, { file: '003.jpg' },
  { file: '004.jpg' }, { file: '005.jpg' }, { file: '006.jpg' },
  { file: '007.jpg' }, { file: '008.jpg' }, { file: '009.jpg' },
  { file: '010.jpg' }, { file: '011.jpg' }, { file: '012.jpg' },
  { file: '0003.jpg' }, { file: 'CANALplus.jpg' },
  { file: 'Port_Guadeloupe.jpg' }, { file: 'AT.jpg' },
]

export function Clients() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="clients-section" id="clients" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Références
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Ils nous font confiance
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}>
          Des entreprises publiques et privées aux Caraïbes et en France hexagonale
          nous confient la montée en compétences de leurs équipes IT.
        </p>
        <div className="clients-grid">
          {clients.map((c, i) => (
            <div
              key={c.file}
              className={`client-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.04 * i + 0.2}s` }}
            >
              <img
                src={`/clients/${c.file}`}
                alt="Logo client"
                loading="lazy"
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

