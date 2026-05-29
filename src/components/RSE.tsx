import { useIntersection } from '../hooks/useIntersection'
import { Globe, Users, Heart, Leaf, Star } from 'lucide-react'

const pillars = [
  {
    icon: <Globe size={24} color="white" />,
    title: 'Inclusion numérique',
    desc: 'Rendre les certifications IT mondiales accessibles aux professionnels des territoires ultramarins, souvent exclus des grandes formations métropolitaines. Chaque Caraïbéen mérite les mêmes opportunités numériques.',
  },
  {
    icon: <Users size={24} color="white" />,
    title: 'Ancrage territorial',
    desc: 'Présents sur 7 territoires, nous contribuons directement au développement économique local. Nos formateurs sont des experts de terrain qui comprennent les réalités caribéennes.',
  },
  {
    icon: <Heart size={24} color="white" />,
    title: 'Égalité des chances',
    desc: 'Les mêmes certifications mondiales, au même niveau d\'exigence qu\'en Europe ou en Amérique du Nord. Nous refusons le numérique à deux vitesses.',
  },
  {
    icon: <Star size={24} color="white" />,
    title: 'Formation durable',
    desc: 'Des parcours conçus pour maximiser la réussite et l\'employabilité à long terme. Former pour certifier, certifier pour transformer — chaque apprenant repart avec une compétence reconnue mondialement.',
  },
  {
    icon: <Leaf size={24} color="white" />,
    title: 'Numérique responsable',
    desc: 'Sensibiliser aux enjeux éthiques et environnementaux du numérique dans nos formations. Préparer une génération de professionnels IT conscients de leur impact sur la société.',
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
          Notre engagement RSE —<br />Un numérique responsable aux Caraïbes
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
              <p className="rse-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Citation RSE */}
        <div className={`rse-commitment reveal${isVisible ? ' visible' : ''} delay-6`}>
          <div className="rse-commitment-inner">
            <p className="rse-commitment-text">
              "Nous sommes convaincus que réduire la fracture numérique aux Caraïbes,
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

