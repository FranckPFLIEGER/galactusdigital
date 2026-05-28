import { useIntersection } from '../hooks/useIntersection'

const clients = [
  { file: '001.jpg' }, { file: '002.jpg' }, { file: '003.jpg' },
  { file: '004.jpg' }, { file: '005.jpg' }, { file: '006.jpg' },
  { file: '007.jpg' }, { file: '008.jpg' }, { file: '009.jpg' },
  { file: '010.jpg' }, { file: '011.jpg' }, { file: '012.jpg' },
  { file: '013.jpg' }, { file: '014.jpg' }, { file: '015.png' },
  { file: '016.jpg' }, { file: '017.jpg' }, { file: '018.jpg' },
  { file: '019.jpg' }, { file: '020.jpg' }, { file: '021.jpg' },
  { file: '022.jpg' }, { file: '023.jpg' }, { file: '024.jpg' },
  { file: '025.jpg' }, { file: '026.jpg' }, { file: '027.jpg' },
  { file: '028.jpg' }, { file: '029.jpg' }, { file: '030.jpg' },
  { file: '031.jpg' }, { file: '032.jpg' }, { file: '033.jpg' },
  { file: '034.jpg' }, { file: '035.jpg' }, { file: '036.jpg' },
  { file: '037.jpg' }, { file: '038.jpg' }, { file: '039.jpg' },
  { file: '040.jpg' }, { file: '041.jpg' }, { file: '042.jpg' },
  { file: '043.jpg' }, 
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
