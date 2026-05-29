import { useIntersection } from '../hooks/useIntersection'
import { Target, Globe, BookOpen } from 'lucide-react'

const values = [
  {
    icon: <Target size={22} color="white" />,
    title: 'Notre mission',
    desc: 'Réduire l\'écart numérique entre les Caraïbes et le reste du monde, en formant aux certifications IT de niveau mondial.',
  },
  {
    icon: <Globe size={22} color="white" />,
    title: 'Notre conviction',
    desc: 'Les professionnels ultramarins méritent les mêmes certifications que leurs homologues en Europe ou en Amérique du Nord.',
  },
  {
    icon: <BookOpen size={22} color="white" />,
    title: 'Notre engagement',
    desc: 'S\'appuyer sur les éditeurs officiels pour garantir des formations certifiantes reconnues mondialement.',
  },
]

export function President() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="president-section" id="president" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.6)' }}>
          Mot du Président
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />

        <div className="president-grid">
          <div className={`president-quote reveal${isVisible ? ' visible' : ''} delay-1`}>
            <div className="president-quote-mark">"</div>
            <blockquote className="president-text">
              Innover, c'est réduire l'écart du présent avec le futur, c'est aider le présent
              à ne jamais avoir de doute sur son rôle de futur… passé !
              <br /><br />
              La vitesse à laquelle nous innovons dans le numérique change en profondeur
              et de façon de plus en plus rapproché, les bases de notre société.
              <br /><br />
              Refuser l'innovation c'est prendre le risque de s'isoler dans un monde inconnu
              et c'est d'autant plus vrai dans notre « insularité ».
              <br /><br />
              Nous ne prétendons pas aider les humains à comprendre tout de ces nouveaux mondes
              qui se dessinent au fur et à mesure des innovations numériques.
              <br /><br />
              Mais nous tentons de réduire à notre juste mesure l'appréhension de l'écart
              de notre présent avec le futur, en formant une génération apte à évoluer
              à chaque nouvelle innovation lié au numérique en s'appuyant sur les acteurs
              de notre révolution numérique à savoir les éditeurs.
            </blockquote>
            <div className="president-signature">
              <div className="president-signature-line" />
              <div>
                <div className="president-name">Franck PFLIEGER</div>
                <div className="president-title">Fondateur & Président — GALACTUS Digital</div>
              </div>
            </div>
          </div>

          <div className={`president-values reveal${isVisible ? ' visible' : ''} delay-2`}>
            {values.map((v, i) => (
              <div key={v.title} className="president-value-card" style={{ animationDelay: `${0.1 * i + 0.3}s` }}>
                <div className="president-value-icon-wrap">
                  {v.icon}
                </div>
                <div>
                  <div className="president-value-title">{v.title}</div>
                  <div className="president-value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
