import { useIntersection } from '../hooks/useIntersection'
import { RESULTATS_ANNUELS, RESULTATS_TOTAL_FORMES } from '../data/resultats'

/** Dernier exercice clos — l'année en cours est exclue de la vitrine (voir plus bas). */
const ANNEE_EN_COURS = String(new Date().getFullYear())
const derniereClose =
  [...RESULTATS_ANNUELS].reverse().find(r => r.annee !== ANNEE_EN_COURS)
  ?? RESULTATS_ANNUELS[RESULTATS_ANNUELS.length - 1]

// Source unique : les effectifs viennent de data/resultats.ts.
const stats = [
  // « +25 » contredisait la page À propos, qui annonce « plus de 20 ans », et
  // les 15 ans d'instructeur Cisco affichés ailleurs. Aligné sur +20, la seule
  // formulation retenue pour les documents commerciaux. Corrigé le 29/10/2026.
  { num: '+20', label: "ans d'expérience du fondateur" },
  // Le compteur d'accueil porte sur le dernier exercice CLOS, pas sur l'année en cours :
  // 2026 n'étant pas terminé, afficher « 1 stagiaire en 2026 » donnerait une image fausse
  // de l'activité. L'exercice 2026 est publié en entier dans le tableau par année de la
  // page Démarche qualité — rien n'est masqué, seule la vitrine prend l'année close.
  { num: String(derniereClose.formes), label: `stagiaires en ${derniereClose.annee}` },
  { num: String(RESULTATS_TOTAL_FORMES), label: 'candidats formés, toutes formations, en 4 ans' },
  { num: '0', label: 'abandon en cours de parcours (2023-2026)' },
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
