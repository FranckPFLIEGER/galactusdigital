import { Header } from './Header'
import { Footer } from './Footer'
import { Search, ArrowRight, Phone } from 'lucide-react'
import { FORMATIONS } from '../data/catalogue'

/**
 * PageIntrouvable — ce qui s'affiche quand une adresse ne correspond à rien.
 *
 * Posé le 17/11/2026. Le site n'avait aucune page 404 : une adresse inconnue
 * renvoyait une erreur brute, sans en-tête, sans navigation, sans rien pour
 * revenir.
 *
 * Ce n'est pas un cas rare en ce moment. Dix-huit fiches ont été retirées en
 * novembre — les dix-sept formations Microsoft et le Cisco AI Technical
 * Practitioner — et Google les a encore en mémoire. Quelqu'un qui clique sur
 * un vieux résultat de recherche arrive ici. Il ne cherchait pas une erreur,
 * il cherchait une formation.
 *
 * La page le dit donc en clair, et l'emmène au catalogue plutôt que de le
 * laisser repartir. Elle ne prétend pas deviner ce qu'il voulait : annoncer
 * « vous cherchiez sans doute X » à partir d'une adresse serait une
 * supposition, et une supposition fausse vaut moins qu'une porte ouverte.
 */
export function PageIntrouvable() {
  const nb = FORMATIONS.length

  return (
    <>
      <Header />
      <section style={{ background: 'var(--g-white)' }}>
        <div className="section-inner" style={{ maxWidth: '760px' }}>
          <span className="section-label visible">Page introuvable</span>
          <div className="g-rule" />
          <h1 className="section-h2 visible" style={{ marginBottom: '1.2rem' }}>
            Cette adresse ne mène nulle part
          </h1>

          <p className="section-body" style={{ marginBottom: '1.1rem' }}>
            La page que vous cherchez n'existe pas, ou n'existe plus. Si vous
            arrivez depuis un moteur de recherche ou un lien ancien, c'est
            probablement une formation qui a été retirée du catalogue.
          </p>

          <p className="section-body" style={{ marginBottom: '2rem' }}>
            En novembre 2026, nous avons retiré dix-huit fiches : les formations
            Microsoft, parce qu'elles relevaient d'un formateur tiers exerçant
            pour son propre compte, et le Cisco AI Technical Practitioner, dont
            nous ne proposons pas la certification. Nous préférons ne porter au
            catalogue que ce que nous assurons nous-mêmes.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '2.4rem' }}>
            <a
              href="/formations"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', background: 'var(--g-red)', color: '#FFFFFF', padding: '0.85rem 1.4rem', textDecoration: 'none', fontFamily: 'var(--font-title)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <Search size={15} aria-hidden="true" />
              Voir les {nb} formations
            </a>
            <a
              href="/#parcours"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', background: 'var(--g-black)', color: '#FFFFFF', padding: '0.85rem 1.4rem', textDecoration: 'none', fontFamily: 'var(--font-title)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <ArrowRight size={15} aria-hidden="true" />
              Les parcours métier
            </a>
            <a
              href="/#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', border: '1px solid var(--g-gray)', color: 'var(--g-black)', padding: '0.85rem 1.4rem', textDecoration: 'none', fontFamily: 'var(--font-title)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <Phone size={15} aria-hidden="true" />
              Nous écrire
            </a>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#6a6a68', lineHeight: 1.65, borderTop: '1px solid var(--g-gray)', paddingTop: '1.2rem', margin: 0 }}>
            Vous cherchiez une formation précise et vous ne la trouvez plus ?
            Écrivez-nous à{' '}
            <a href="mailto:president@galactusdigital.com" style={{ color: 'var(--g-red)' }}>
              president@galactusdigital.com
            </a>{' '}
            ou appelez le{' '}
            <a href="tel:+33781074746" style={{ color: 'var(--g-red)' }}>
              +33 7 81 07 47 46
            </a>
            . Nous vous dirons si elle existe ailleurs, y compris chez un autre
            organisme.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
