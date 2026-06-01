import { useIntersection } from '../hooks/useIntersection'
import { Globe, Users, Leaf, BookOpen, Heart } from 'lucide-react'

const pillars = [
  {
    icon: <Heart size={24} color="white" />,
    title: 'Femmes & Égalité des chances',
    items: [
      'Partenaire Cisco Networking Academy — programme mondial reconnu pour l\'accès des femmes aux métiers IT',
      'Formations flexibles (distanciel, à son rythme) pour concilier vie professionnelle, familiale et formation',
      'Les certifications IT permettent aux femmes de se mettre à égalité dans un univers très majoritairement masculin',
      'Financement CPF/OPCO accessible à toutes sans discrimination',
      'Encouragement actif des femmes en reconversion vers les métiers du numérique dans les territoires ultramarins',
    ],
  },
  {
    icon: <Users size={24} color="white" />,
    title: 'Inclusion & Accessibilité',
    items: [
      'Certifications IT mondiales accessibles aux professionnels ultramarins, souvent exclus des grandes formations métropolitaines',
      'Financement CPF/OPCO dans les DOM — aucune barrière financière à la formation',
      'Accompagnement des personnes en reconversion professionnelle et en situation de handicap',
      'Mêmes certifications, même niveau d\'exigence qu\'en Europe ou en Amérique du Nord',
      'Aucune discrimination dans l\'accès — même accompagnement pour tous',
    ],
  },
  {
    icon: <Globe size={24} color="white" />,
    title: 'Ancrage territorial',
    items: [
      'Formateurs locaux certifiés — priorité aux experts locaux et ultramarins plutôt qu\'aux intervenants métropolitains déplacés',
      'Présents sur 7 territoires — contribution directe au développement économique local',
      'Partenariats avec les acteurs économiques et institutionnels des DOM',
      'Compréhension des réalités du marché ultramarin par nos équipes terrain',
    ],
  },
  {
    icon: <Leaf size={24} color="white" />,
    title: 'Numérique écoresponsable',
    items: [
      '100% supports digitaux — zéro impression papier dans nos formations',
      'Formations en distanciel favorisées pour réduire les déplacements et l\'empreinte carbone',
      'Sensibilisation aux enjeux environnementaux du numérique intégrée dans nos parcours',
      'Équipements numériques reconditionnés privilégiés dans notre organisation',
    ],
  },
  {
    icon: <BookOpen size={24} color="white" />,
    title: 'Veille & Transmission — ASPIK',
    items: [
      'Via l\'association ASPIK, nos apprenants peuvent participer à des sessions de veille IT ouvertes à tous',
      'Rester connecté aux dernières innovations numériques après la certification',
      'Réseau d\'alumni ultramarins partageant leurs expériences et opportunités',
      'Contribution active au développement de la culture numérique dans les territoires ultramarins',
    ],
  },
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
          Notre engagement RSE —<br />Un numérique responsable dans les territoires ultramarins
        </h2>
        <p className={`section-body-light reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '3rem' }}>
          Former aux métiers du numérique implique de transmettre des valeurs
          de responsabilité sociale, d'éthique et d'inclusion. C'est notre conviction
          depuis la création de GALACTUS Digital.
        </p>

        <div className="rse-grid">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`rse-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.08 * i + 0.2}s` }}
            >
              <div className="rse-icon">{p.icon}</div>
              <h3 className="rse-title">{p.title}</h3>
              <ul className="rse-items">
                {p.items.map((item, j) => (
                  <li key={j} className="rse-item">
                    <div className="rse-item-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`rse-commitment reveal${isVisible ? ' visible' : ''} delay-6`}>
          <div className="rse-commitment-inner">
            <p className="rse-commitment-text">
              "Nous sommes convaincus que réduire la fracture numérique dans les territoires ultramarins,
              c'est contribuer à l'égalité des chances et au développement durable
              de nos territoires. Chaque certification obtenue est une victoire collective."
            </p>
            <div className="rse-commitment-author">— Franck PFLIEGER</div>
          </div>
        </div>

      </div>
    </section>
  )
}
