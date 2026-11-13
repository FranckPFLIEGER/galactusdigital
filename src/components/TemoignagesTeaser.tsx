import { useIntersection } from '../hooks/useIntersection'
import { ArrowRight, Quote } from 'lucide-react'
import { reconversions } from '../data/temoignages'

/**
 * TemoignagesTeaser — trois paroles d'apprenantes sur l'accueil.
 *
 * Posé le 13/11/2026. Le site prouvait tout ce qu'il affirmait, et le prouvait
 * bien : chiffres sourcés, certifications vérifiables, indicateurs au registre.
 * Mais la personne qui hésite à se reconvertir à quarante-cinq ans ne cherche
 * pas une preuve, elle cherche quelqu'un qui lui ressemble. Ces paroles
 * existaient depuis toujours sur /temoignages, et l'accueil ne les citait nulle
 * part : vingt sections, aucune ne donnait la parole à une apprenante.
 *
 * RÈGLE : aucun verbatim n'est recopié ici. Les trois citations viennent de
 * `data/temoignages.ts`, qui porte avec elles les conditions de consentement,
 * la source et le marquage des coupures. Une parole consentie ne se duplique
 * pas dans un composant : la copie survivrait à un retrait demandé.
 *
 * Ce bloc affiche ce que `reconversions` contient, sans en figer le nombre.
 */

/*
 * PAS D'EXTRAIT. La première version de ce composant coupait les citations à
 * 180 caractères, à la phrase. Le rendu a montré pourquoi c'était une mauvaise
 * idée : la troisième parole se réduisait à son aveu de départ, sans la fierté
 * qui vient après — soit l'inverse de ce que l'intéressée a dit. Et la coupure
 * effaçait le marqueur de coupure interne qui signale, dans la source, deux
 * passages distincts d'un même entretien.
 *
 * Une parole consentie se publie entière ou ne se publie pas. Les trois tiennent
 * en trois cartes : il n'y avait pas de problème à résoudre.
 */

export function TemoignagesTeaser() {
  const { ref, isVisible } = useIntersection()
  if (reconversions.length === 0) return null

  return (
    <section id="temoignages-apercu" ref={ref} style={{ background: 'var(--g-offwhite)' }}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Elles l'ont fait
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Personne ne commence en sachant
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '2.4rem', maxWidth: '780px' }}>
          Une navigante commerciale après vingt ans de vol, une consultante issue d'une école
          de commerce, une diplômée de langues étrangères en contrat court. Aucune ne venait
          de l'informatique. Toutes exercent aujourd'hui un métier technique.
        </p>

        <div
          className={`reveal${isVisible ? ' visible' : ''} delay-3`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.2rem',
          }}
        >
          {reconversions.map(r => (
            <figure
              key={r.versMetier}
              style={{
                margin: 0,
                background: '#FFFFFF',
                borderTop: '2px solid var(--g-red)',
                padding: '1.4rem 1.3rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
              }}
            >
              <Quote size={18} color="#E41F26" aria-hidden="true" />
              <blockquote
                style={{
                  margin: 0,
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  color: '#3a3a38',
                  fontStyle: 'italic',
                }}
              >
                « {r.citation} »
              </blockquote>
              <figcaption style={{ marginTop: 'auto', fontSize: '0.74rem', lineHeight: 1.5, color: '#6a6a68' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--g-black)' }}>
                  {r.versMetier}
                </span>
                {/* Jamais de toLowerCase ici : il transformait « support en CDD »
                    en « support en cdd ». Le texte est écrit tel qu'il doit se lire. */}
                Auparavant — {r.avantMetier}
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href="/temoignages"
          className={`reveal${isVisible ? ' visible' : ''} delay-3`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#E41F26', textDecoration: 'none', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          Lire les parcours en entier <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
