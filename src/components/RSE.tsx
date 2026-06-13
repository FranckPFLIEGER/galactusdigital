import { useIntersection } from '../hooks/useIntersection'
import { Globe, Users, Leaf, BookOpen, Heart, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: <ShieldCheck size={24} color="white" />,
    title: "Handicap & Accessibilité",
    fc: "Fiche 21 — Vademecum France Compétences 2026",
    badge: "Procédures documentées — Référent dédié",
    items: [
      "Référent Handicap GALACTUS Digital : adaptation systématique des modalités pédagogiques à chaque situation individuelle, dès l'inscription",
      "Cisco Networking Academy accompagne depuis 2019 les apprenants en situation de handicap — plus de 188 000 personnes ont atteint leurs objectifs via les dispositifs d'accessibilité NetAcad (source : Cisco NetAcad)",
      "Contenus officiels Cisco conformes aux standards d'accessibilité internationaux — handicaps visuels, auditifs, cognitifs et de mobilité physique pris en compte",
      "FOAD et e-learning tutoré : solution adaptée pour les apprenants à mobilité réduite ou ne pouvant se déplacer en centre",
      "Aménagements des évaluations disponibles sur demande — délais supplémentaires, supports adaptés, tiers-temps",
    ],
    link: { label: "Notre politique Handicap complète", url: "/handicap" },
    source: "Cisco Networking Academy — netacad.com/fr/accessibility",
  },
  {
    icon: <Leaf size={24} color="white" />,
    title: "Transition écologique",
    fc: "Fiche 22 — Vademecum France Compétences 2026",
    badge: "Intégré aux référentiels IoT & Data Analytics",
    items: [
      "Formations dispensées en Martinique et Guadeloupe : chaque stagiaire évite un aller-retour Paris–Antilles, soit plus d'une tonne de CO₂ par personne (source : calculateur ADEME)",
      "Modules IoT Introduction, IoT Big Data Analytics et Data Analytics Essentials intègrent nativement les enjeux d'efficacité énergétique, de smart grids et de réduction de l'empreinte numérique",
      "100% supports digitaux dans l'ensemble de nos formations — zéro impression papier, zéro envoi postal",
      "Salles de formation louées à la demande en Martinique, Guadeloupe et Paris : aucune consommation énergétique de locaux permanents à notre charge",
      "FOAD et e-learning tutoré prioritaires pour réduire les déplacements quotidiens des apprenants",
    ],
    source: "ADEME — bilan-ges.ademe.fr | Référentiels Cisco IoT & Data Analytics",
  },
  {
    icon: <Globe size={24} color="white" />,
    title: "Transition numérique",
    fc: "Fiche 23 — Vademecum France Compétences 2026",
    badge: "Cœur de métier — 22 formations certifiantes",
    items: [
      "100% de notre catalogue est dédié à la montée en compétences numériques : réseaux, cybersécurité, cloud, IoT, IA, Python, DevNet — certifications mondiales Cisco et Microsoft",
      "Accompagnement des entreprises ultramarines dans leur transformation numérique : de l'infrastructure réseau (CCNA) à l'intelligence artificielle (AI-900)",
      "Formations IoT et Big Data directement connectées aux enjeux de la transition numérique des territoires — smart cities, capteurs, données massives",
      "Cybersécurité au premier plan : CyberOps, Ethical Hacker, SC-900 — former des professionnels capables de sécuriser la transition numérique",
      "DevNet Associate : former les développeurs de l'automatisation réseau, compétence clé de la transformation IT des organisations ultramarines",
    ],
  },
  {
    icon: <Heart size={24} color="white" />,
    title: "Femmes & Égalité des chances",
    badge: "Programme Connected Girls — Cisco France",
    items: [
      "Cisco France Connected Girls 2025 : programme gratuit sponsorisé par Women of Cisco France — ateliers pour initier les lycéennes aux métiers de la tech (IA, cybersécurité, data)",
      "Partenaire Cisco Networking Academy — programme mondial reconnu pour l'accès des femmes aux métiers IT",
      "Formations flexibles (FOAD, e-learning tutoré, rythme adapté) : concilier vie professionnelle, familiale et montée en compétences IT",
      "Mêmes certifications mondiales pour tous — les femmes obtiennent exactement les mêmes titres reconnus qu'en Europe ou en Amérique du Nord",
      "Financement CPF/OPCO accessible sans discrimination — aucune barrière financière à l'entrée dans les métiers du numérique",
    ],
    link: { label: "Connected Girls 2025 — Cisco France", url: "https://gblogs.cisco.com/fr/rse/inclusion-et-diversite/connected-girls-2025/" },
  },
  {
    icon: <Users size={24} color="white" />,
    title: "Ancrage territorial & ASPIK",
    badge: "7 territoires — Association loi 1901 depuis 2018",
    items: [
      "ASPIK — Association Spécialisée dans la Protection Informatique de la Karaïbe (ASCPK à l'international) : fondée en 2018 à Le François, Martinique, pour développer la cybersécurité et la coopération IT aux Caraïbes",
      "Formateurs locaux certifiés en priorité — vous êtes formés par des professionnels qui connaissent votre réalité terrain, votre marché, vos contraintes",
      "Mêmes certifications mondiales qu'à Paris ou New York — sans quitter votre territoire, sans financer un séjour en métropole",
      "Sessions de veille IT ouvertes à tous via ASPIK — réseau d'alumni ultramarins, partage d'opportunités et d'expériences entre certifiés des 7 territoires",
      "Partenariats actifs avec les collectivités, entreprises et institutions des DOM — contribution directe au développement économique local",
    ],
  },
]

const conformite = [
  { ref: "F21", label: "Handicap & Accessibilité", ok: true },
  { ref: "F22", label: "Transition écologique", ok: true },
  { ref: "F23", label: "Transition numérique", ok: true },
  { ref: "F10", label: "Informations vérifiables et sourcées", ok: true },
]

export function RSE() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="rse-section" id="rse" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.6)' }}>
          Responsabilité Sociétale
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2-light reveal${isVisible ? ' visible' : ''} delay-1`}>
          Notre engagement RSE —<br />Un numérique responsable, inclusif et ancré dans les territoires ultramarins
        </h2>
        <p className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '2.5rem' }}>
          Former aux métiers du numérique implique une responsabilité sociale, écologique et éthique.
          Notre démarche RSE s'articule autour des trois axes du vademecum France Compétences 2026 —
          handicap, transition écologique, transition numérique — documentés et intégrés dans nos référentiels.
        </p>

        {/* Bandeau conformité France Compétences */}
        <div className={`reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem', padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', alignSelf: 'center', marginRight: '0.5rem' }}>
            Vademecum France Compétences 01/2026
          </div>
          {[
            { ref: 'F21', label: 'Handicap & Accessibilité' },
            { ref: 'F22', label: 'Transition écologique' },
            { ref: 'F23', label: 'Transition numérique' },
            { ref: 'F10', label: 'Informations sourcées' },
          ].map(item => (
            <div key={item.ref} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(228,31,38,0.08)', border: '1px solid rgba(228,31,38,0.25)', padding: '4px 10px' }}>
              <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, color: '#E41F26' }}>{item.ref}</span>
              <span style={{ fontSize: '0.70rem', color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="rse-grid">
          {pillars.map((p, i) => (
            <div key={p.title}
              className={`rse-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.08 * i + 0.2}s` }}>
              <div className="rse-icon">{p.icon}</div>
              <h3 className="rse-title">{p.title}</h3>
              {p.fc && (
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E41F26', marginBottom: '0.5rem' }}>
                  ✓ {p.fc}
                </div>
              )}
              {p.badge && (
                <div style={{ display: 'inline-block', fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.10)', padding: '3px 8px', marginBottom: '0.85rem' }}>
                  {p.badge}
                </div>
              )}
              <ul className="rse-items">
                {p.items.map((item, j) => (
                  <li key={j} className="rse-item">
                    <div className="rse-item-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {p.source && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.30)', fontStyle: 'italic', lineHeight: 1.4 }}>
                  Source : {p.source}
                </div>
              )}
              {p.link && (
                <a href={p.link.url}
                  target={p.link.url.startsWith('http') ? '_blank' : undefined}
                  rel={p.link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.72rem', color: 'var(--g-red)', textDecoration: 'none', fontFamily: 'var(--font-title)', fontWeight: 600, letterSpacing: '0.06em' }}>
                  {p.link.url.startsWith('http') ? <ExternalLink size={12} /> : <ArrowRight size={12} />}
                  {p.link.label}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className={`rse-commitment reveal${isVisible ? ' visible' : ''} delay-6`}>
          <div className="rse-commitment-inner">
            <p className="rse-commitment-text">
              "Réduire la fracture numérique dans les territoires ultramarins, former sur place
              plutôt que d'envoyer les gens en métropole, ouvrir les certifications mondiales
              à ceux qu'on croyait trop loin pour y accéder —
              c'est notre mission depuis 2018. Chaque certification obtenue aux Antilles,
              à la Réunion, en Guyane, c'est une victoire collective."
            </p>
            <div className="rse-commitment-author">— Le président, GALACTUS Digital &amp; ASPIK</div>
          </div>
        </div>

      </div>
    </section>
  )
}
