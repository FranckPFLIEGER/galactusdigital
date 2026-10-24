import { useIntersection } from '../hooks/useIntersection'

const partners = [
  {
    file: 'cisco-academy.png',
    name: 'Cisco Networking Academy',
    desc: 'Partenaire officiel n° 3018982 depuis 2005 — formations CCNA, CCNA Cybersecurity, CCNA Automation, IoT',
    level: 'Academy Partner',
  },
  {
    // Remplace microsoft-partner.jpg, qui portait le badge « Silver Microsoft
    // Partner ». Microsoft a fermé les paliers Silver et Gold fin 2022 et les a
    // remplacés par les désignations Solutions Partner : afficher un palier
    // supprimé revenait à revendiquer une qualité qui n'existe plus
    // (indicateur 1 du RNQ V2). L'ancien fichier est à supprimer de
    // public/partners/ après mise en ligne.
    file: 'microsoft-solutions-partner.png',
    name: 'Microsoft',
    desc: 'Partenaire officiel n° 4653557 depuis 2016 — désignations Microsoft Cloud et Training Services : formations Azure, M365, Power BI, Intune, Copilot',
    level: 'Solutions Partner — Training Services',
  },
  {
    file: 'ipv6-council.png',
    name: 'IPv6 Council Martinique',
    desc: 'Membre actif depuis 2016 — président fondateur du Council, IPv6 Hall of Fame 2025',
    level: 'Membre actif',
  },
]

export function Partners() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="partners-section" id="partenaires" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Partenaires Certificateurs
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Des partenariats officiels<br />avec les leaders mondiaux
        </h2>
        <p
          className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '3rem' }}
        >
          Chaque formation dispensée par GALACTUS Digital est adossée
          à un partenariat officiel avec l'éditeur — garant de l'authenticité
          et de la valeur mondiale de la certification.
        </p>
        <div className="partners-grid">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`partner-card reveal${isVisible ? ' visible' : ''} delay-${i + 3}`}
            >
              <div className="partner-logo-wrapper">
                <img
                  src={`/partners/${p.file}`}
                  alt={p.name}
                  loading="lazy"
                  className="partner-logo"
                />
              </div>
              <div className="partner-level">{p.level}</div>
              <div className="partner-name">{p.name}</div>
              <p className="partner-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
