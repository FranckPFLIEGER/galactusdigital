import { useIntersection } from '../hooks/useIntersection'
import { Award, Star, Trophy } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// DISTINCTIONS
//
// Ces cinq distinctions nomment Franck PFLIEGER. PFLIEGER SASU étant une
// société unipersonnelle sans salarié dont il est président et unique
// formateur, elles sont bien les reconnaissances de l'organisme : il n'y a pas
// d'écart entre la personne distinguée et celle qui anime les sessions, et la
// section le dit ainsi.
//
// Ce qu'on ne fait pas pour autant : présenter une distinction comme une
// ACCRÉDITATION de l'organisme. Un auditeur ou un financeur vérifie les
// habilitations au nom de la personne morale — Qualiopi, NDA n° 11 75 59933 75,
// partenariats éditeurs n° 3018982 et n° 4653557 — et le certificat Advisory
// Board, lui, porte un nom de personne. D'où la mention nominative sous le
// titre : elle dit à qui le certificat est délivré, sans rien retirer.
//
// `ref` : identifiant permettant à un tiers de vérifier la distinction.
// ─────────────────────────────────────────────────────────────────────────────
const awards = [
  {
    icon: <Trophy size={24} color="white" />,
    year: '2025',
    title: 'IPv6 Hall of Fame',
    org: 'IPv6 Forum International',
    desc: "Intégration au IPv6 Hall of Fame mondial — distinction décernée aux personnalités ayant le plus contribué au déploiement de l'IPv6 dans le monde.",
    image: null,
    highlight: true,
    ref: null,
  },
  {
    icon: <Star size={24} color="white" />,
    year: '2021',
    title: 'Above and Beyond Instructor',
    org: 'Cisco Networking Academy',
    desc: "Récompense décernée aux formateurs qui dépassent les standards habituels d'excellence dans la formation certifiante.",
    image: null,
    highlight: false,
    ref: null,
  },
  {
    icon: <Award size={24} color="white" />,
    year: '2022',
    title: 'Instructor 15 Years of Service',
    org: 'Cisco Networking Academy',
    desc: "15 ans de participation active et de service dédié à la Cisco Networking Academy — un gage d'expertise reconnue officiellement.",
    image: null,
    highlight: false,
    ref: null,
  },
  {
    icon: <Award size={24} color="white" />,
    year: '2015',
    title: 'Instructor 10 Years of Service',
    org: 'Cisco Networking Academy',
    desc: "10 ans de participation active et de service dédié à la Cisco Networking Academy — reconnaissance d'un engagement continu dans la formation certifiante.",
    image: null,
    highlight: false,
    ref: null,
  },
  {
    icon: <Star size={24} color="white" />,
    // Plage, et non date isolée : la participation au conseil est continue depuis
    // 2023. Le certificat du 28 septembre 2026 la reconduit, il ne l'ouvre pas —
    // c'est lui qui porte le Cert ID vérifiable ci-dessous.
    year: '2023 — 2026',
    title: 'NetAcad Advisory Board Member',
    org: 'Cisco Networking Academy',
    desc: "Membre du conseil consultatif international de la Cisco Networking Academy depuis 2023, reconduit le 28 septembre 2026 par Lynn Bloomer, Director — Cisco Networking Academy. Une participation qui nous associe aux orientations du programme mondial et nous tient informés des évolutions de cursus avant leur publication.",
    image: null,
    highlight: false,
    ref: 'Cert ID 3ef64ba0-65d9-4dfc-8a4b-db8c5f7d588a',
  },
]

export function AwardsSection() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="awards-section" id="awards" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.6)' }}>
          Distinctions
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2-light reveal${isVisible ? ' visible' : ''} delay-1`}>
          Nos reconnaissances<br />internationales
        </h2>
        <p className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '1.25rem' }}>
          Des distinctions obtenues auprès des plus grandes organisations IT mondiales,
          qui témoignent de notre niveau d'expertise et de notre engagement. L'expert
          distingué est celui qui anime votre session : Franck PFLIEGER intervient
          lui-même sur chaque formation.
        </p>
        <p className={`reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '640px', marginBottom: '3rem', fontStyle: 'italic' }}>
          Distinctions délivrées au nom de Franck PFLIEGER, président et unique formateur
          de GALACTUS Digital.
        </p>
        <div className="awards-grid">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className={`award-card reveal${isVisible ? ' visible' : ''} ${a.highlight ? 'award-card-highlight' : ''}`}
              style={{ animationDelay: `${0.08 * i + 0.2}s` }}
            >
              <div className="award-icon">{a.icon}</div>
              {a.image && (
                <div className="award-image">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
              )}
              <div className="award-year">{a.year}</div>
              <h3 className="award-title">{a.title}</h3>
              <div className="award-org">{a.org}</div>
              <p className="award-desc">{a.desc}</p>
              {a.ref && (
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)', marginTop: 'auto', paddingTop: '0.75rem', wordBreak: 'break-all' }}>
                  {a.ref}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
