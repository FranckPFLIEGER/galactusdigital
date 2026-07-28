import { useIntersection } from '../hooks/useIntersection'

const stats = [
  { num: '+25', label: "ans d'expérience reconnue" },
  { num: '131', label: 'stagiaires en 2025' },
  { num: '518', label: 'candidats formés, toutes formations, en 3 ans' },
  { num: '100%', label: 'de réussite aux certifications éditeurs (2023-2025)' },
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
