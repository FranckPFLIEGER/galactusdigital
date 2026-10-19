import { useIntersection } from '../hooks/useIntersection'
import { RESULTATS_ANNUELS, RESULTATS_TOTAL_FORMES } from '../data/resultats'

const derniere = RESULTATS_ANNUELS[RESULTATS_ANNUELS.length - 1]

// Source unique : les effectifs viennent de data/resultats.ts.
const stats = [
  { num: '+25', label: "ans d'expérience du fondateur" },
  { num: String(derniere.formes), label: `stagiaires en ${derniere.annee}` },
  { num: String(RESULTATS_TOTAL_FORMES), label: 'candidats formés, toutes formations, en 3 ans' },
  { num: '0', label: 'abandon en cours de parcours (2023-2025)' },
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
