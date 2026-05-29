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
      Innover, c’est réduire l’écart entre le présent et le futur, jusqu’à les rendre indissociables. Le futur ne s’oppose pas au présent : il s’y construit.
      <br /><br />

      La vitesse de l’innovation numérique transforme en profondeur, et de façon toujours plus rapprochée, les fondations mêmes de notre société.
      <br /><br />

      Refuser l’innovation, c’est prendre le risque de l’isolement. C’est devenir étranger à un monde en mouvement permanent — une réalité amplifiée par notre condition d’« insularité » contemporaine.
      <br /><br />

      Nous ne prétendons pas détenir toutes les réponses aux mondes qui émergent au rythme des révolutions numériques.
      <br /><br />

      Mais nous agissons pour réduire, à notre juste mesure, l’écart entre compréhension et transformation.
      <br />
      Nous rendons l’innovation plus lisible, plus accessible, plus opérable.
      <br /><br />

      Former, aujourd’hui, signifie préparer une génération capable d’évoluer avec chaque rupture technologique, en s’appuyant sur les acteurs de cette révolution numérique : les éditeurs.
    </blockquote>

    <div className="president-signature">
      <div className="president-signature-line" />
      <div>
        <div className="president-name">Franck PFLIEGER</div>
        <div className="president-title">Fondateur & Président — GALACTUS Digital</div>
      </div>
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
