import { useIntersection } from '../hooks/useIntersection'

const stats = [
  { num: '+20', label: "ans d'expérience reconnue" },
  { num: '131', label: 'stagiaires formés en 2025, dont 131 à distance' },
  { num: '120', label: 'actions de formation dispensées en 2025' },
  { num: '518', label: 'stagiaires formés ces 3 dernières années' },
]

export function Stats() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="stats-bar" id="stats" ref={ref}>
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`stat-item reveal${isVisible ? ' visible' : ''}`}
            style={{ animationDelay: `${0.08 * i}s` }}
          >
            <div className="stat-number"><span>{s.num}</span></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
