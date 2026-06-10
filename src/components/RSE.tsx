import { useIntersection } from '../hooks/useIntersection'
import { Globe, Users, Leaf, BookOpen, Heart, ShieldCheck, ExternalLink } from 'lucide-react'

const pillars = [
  {
    icon: <Heart size={24} color="white" />,
    title: "Femmes & Égalité des chances",
    badge: "Programme mondial Cisco",
    items: [
      "Partenaire officiel Cisco Networking Academy — programme Connected Girls 2025 : ateliers gratuits pour initier les lycéennes aux métiers de la tech (IA, cybersécurité, data)",
      "Women of Cisco France : engagement mondial pour réduire la sous-représentation des femmes dans les filières technologiques",
      "Formations flexibles — FOAD, e-learning tutoré, rythme adapté — pour concilier vie professionnelle, familiale et montée en compétences IT",
      "Certifications internationales identiques pour tous : les femmes obtiennent exactement les mêmes titres reconnus qu'en Europe ou en Amérique du Nord",
      "Financement CPF/OPCO accessible sans discrimination — aucune barrière financière à l'entrée dans les métiers du numérique",
    ],
    link: { label: "Connected Girls 2025 — Cisco France", url: "https://gblogs.cisco.com/fr/rse/inclusion-et-diversite/connected-girls-2025/" },
  },
  {
    icon: <ShieldCheck size={24} color="white" />,
    title: "Handicap & Accessibilité numérique",
    badge: "188 000+ personnes accompagnées",
    items: [
      "Cisco Networking Academy accompagne activement les apprenants en situation de handicap depuis 2019 : handicaps visuels, auditifs, cognitifs et de mobilité physique",
      "Plus de 188 000 personnes en situation de handicap ont atteint leurs objectifs de formation grâce aux dispositifs d'accessibilité Cisco NetAcad",
      "Référent Handicap GALACTUS Digital dédié — adaptation systématique des modalités pédagogiques à chaque situation individuelle",
      "E-learning tutoré et FOAD : solution idéale pour les apprenants à mobilité réduite ou ne pouvant se déplacer",
      "Contenus pédagogiques officiels Cisco conformes aux standards d'accessibilité internationaux (WCAG)",
    ],
    link: { label: "Accessibilité Cisco Networking Academy", url: "https://www.netacad.com/fr/accessibility" },
  },
  {
    icon: <Users size={24} color="white" />,
    title: "Inclusion & Ancrage territorial",
    badge: "7 territoires ultramarins",
    items: [
      "Formateurs locaux certifiés — priorité absolue aux experts ultramarins : vous êtes formés par des professionnels qui connaissent votre réalité terrain",
      "ASPIK (Association Spécialisée dans la Protection Informatique de la Karaïbe) — association partenaire basée à Le François, Martinique, dédiée aux échanges IT et à la cybersécurité aux Caraïbes",
      "Mêmes certifications mondiales qu'à Paris, New York ou Singapour — sans quitter votre territoire, sans partir en métropole",
      "Financement CPF/OPCO dans les DOM — aucun frein financier, accompagnement des démarches de A à Z",
      "Partenariats actifs avec les collectivités, les entreprises et les institutions des territoires ultramarins",
    ],
  },
  {
    icon: <Leaf size={24} color="white" />,
    title: "Numérique écoresponsable",
    badge: "Zéro avion. Zéro papier. Zéro charge fixe.",
    items: [
      "Chaque formation dispensée aux Antilles, c'est un billet Paris-Martinique (1 400 kg CO₂) évité — nous amenons l'expertise sur place, pas l'inverse",
      "Zéro local permanent : GALACTUS Digital loue ses salles à la demande en Martinique, Guadeloupe et Paris — aucune facture d'électricité à demeure, empreinte immobilière nulle",
      "100% supports digitaux — zéro impression papier, zéro envoi postal dans l'ensemble de nos formations",
      "FOAD et e-learning tutoré prioritaires pour réduire les déplacements des apprenants au quotidien",
      "Sensibilisation aux enjeux environnementaux du numérique (impact des datacenters, sobriété numérique) intégrée dans nos parcours IoT et Data Analytics",
    ],
  },
  {
    icon: <BookOpen size={24} color="white" />,
    title: "Veille & Transmission — ASPIK",
    badge: "Association loi 1901 — Le François, Martinique",
    items: [
      "ASPIK — 'Association Spécialisée dans la Protection Informatique de la Karaïbe' (ASCPK à l'international) : fondée pour développer la coopération IT et la cybersécurité dans les Caraïbes",
      "Sessions de veille technologique ouvertes à tous — nos apprenants certifiés restent connectés aux dernières innovations après l'obtention de leur certification",
      "Réseau d'alumni ultramarins actif : partage d'expériences, d'opportunités professionnelles et de retours terrain entre certifiés des 7 territoires",
      "Encouragement actif des femmes aux métiers du numérique — axe fondateur inscrit dans les statuts de l'association depuis 2018",
      "Contribution directe au développement de la culture de cybersécurité dans les territoires ultramarins et caribéens",
    ],
  },
]

const stats = [
  { num: "188 000+", label: "personnes handicapées\nformées via Cisco NetAcad" },
  { num: "1 400 kg", label: "CO₂ évités par stagiaire\nformé en local vs Paris" },
  { num: "0 €", label: "de charges fixes\nlocaux loués à la demande" },
  { num: "2018", label: "création ASPIK\nancrage caribéen" },
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
          Notre engagement RSE —<br />Un numérique responsable, inclusif et ancré dans les territoires
        </h2>
        <p className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '2rem' }}>
          Former aux métiers du numérique implique une responsabilité sociale, écologique et éthique.
          Depuis la création de GALACTUS Digital, chaque décision — pédagogique, logistique,
          partenariale — est guidée par cette conviction.
        </p>

        {/* Stats RSE */}
        <div className={`reveal${isVisible ? ' visible' : ''} delay-3`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '3.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: 'var(--g-black)', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--g-red)', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.4rem', lineHeight: 1.5, whiteSpace: 'pre-line', letterSpacing: '0.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="rse-grid">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`rse-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.08 * i + 0.2}s` }}
            >
              <div className="rse-icon">{p.icon}</div>
              <h3 className="rse-title">{p.title}</h3>
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
              {p.link && (
                <a href={p.link.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.72rem', color: 'var(--g-red)', textDecoration: 'none', fontFamily: 'var(--font-title)', fontWeight: 600, letterSpacing: '0.06em' }}>
                  <ExternalLink size={12} /> {p.link.label}
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
              à ceux qu'on croyait trop loin pour y accéder — c'est ça, notre mission.
              Chaque certification obtenue aux Antilles, à la Réunion, en Guyane,
              c'est une victoire collective pour nos territoires."
            </p>
            <div className="rse-commitment-author">— Le président, GALACTUS Digital &amp; ASPIK</div>
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            #rse .rse-stats { grid-template-columns: repeat(2,1fr) !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
