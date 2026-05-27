import { useIntersection } from '../hooks/useIntersection'

const stats = [
  { number: '+20', suffix: ' ans', label: "d'expertise reconnue" },
  { number: '47',  suffix: '',     label: 'experts internationaux' },
  { number: '+180',suffix: '',     label: 'cours officiels éditeurs' },
  { number: '6',   suffix: '',     label: 'territoires ultramarins' },
]

export function Stats() {
  const { ref, isVisible } = useIntersection()
  return (
    // ✓ Fond noir conforme charte — plus de rupture blanc/noir
    <section className="stats-bar" ref={ref}>
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`stat-item reveal${isVisible ? ' visible' : ''} delay-${i + 1}`}
          >
            <div className="stat-number">
              <span>{s.number}</span>{s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
