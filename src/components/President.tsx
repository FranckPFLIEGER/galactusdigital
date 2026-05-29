import { useIntersection } from '../hooks/useIntersection'

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
          {/* Citation */}
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

          {/* Valeurs */}
          <div className={`president-values reveal${isVisible ? ' visible' : ''} delay-2`}>
            <div className="president-value-card">
              <div className="president-value-icon">🎯</div>
              <div>
                <div className="president-value-title">Notre mission</div>
                <div className="president-value-desc">
                  Réduire l'écart numérique entre les Caraïbes et le reste du monde,
                  en formant aux certifications IT de niveau mondial.
                </div>
              </div>
            </div>
            <div className="president-value-card">
              <div className="president-value-icon">🌍</div>
              <div>
                <div className="president-value-title">Notre conviction</div>
                <div className="president-value-desc">
                  Les professionnels ultramarins méritent les mêmes certifications
                  que leurs homologues en Europe ou en Amérique du Nord.
                </div>
              </div>
            </div>
            <div className="president-value-card">
              <div className="president-value-icon">🏆</div>
              <div>
                <div className="president-value-title">Notre engagement</div>
                <div className="president-value-desc">
                  S'appuyer sur les éditeurs officiels pour garantir
                  des formations certifiantes reconnues mondialement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

