import { Header } from './Header'
import { Footer } from './Footer'
import { RefreshCw, Phone, Home } from 'lucide-react'

/**
 * PageErreur — ce qui s'affiche si une page échoue à se construire.
 *
 * Posé le 19/11/2026, après avoir vu dans les résultats Google que la page
 * d'accueil de galactusdigital.com était référencée sous le titre
 * « Something went wrong! Show Error ».
 *
 * C'est le message d'erreur par défaut du routeur, en anglais, sans en-tête ni
 * navigation. Le site allait bien au moment du constat — quinze requêtes sans
 * cache, quinze réponses correctes — mais Google avait photographié la page à
 * un instant où elle avait échoué, et c'est ce titre-là qui est resté dans son
 * index. Un incident d'une minute peut donc salir une fiche de résultat
 * pendant des semaines.
 *
 * Deux protections ici :
 *
 * 1. Le contenu est en français, porte la marque, et donne une issue —
 *    recharger, revenir à l'accueil, appeler. Une personne qui tombe dessus
 *    comprend ce qui se passe et sait quoi faire.
 *
 * 2. La page se déclare `noindex`. Si un moteur repasse pendant un incident,
 *    il ne doit PAS enregistrer cette page comme étant la page d'accueil.
 *    C'est le point qui manquait : le message par défaut, lui, était
 *    indexable.
 */
export function PageErreur({ error }: { error?: Error }) {
  // Visible dans le code source de la page, pas à l'écran : utile pour
  // diagnostiquer sans exposer une trace technique au visiteur.
  const trace = error?.message ? `Détail technique : ${error.message}` : null

  return (
    <>
      {/*
        La balise robots est posée ici plutôt que dans __root.tsx : elle ne
        doit valoir que pour cette page. Une page d'erreur indexée vaut pire
        qu'une page d'erreur.
      */}
      <meta name="robots" content="noindex, nofollow" />
      <title>Erreur temporaire — GALACTUS Digital</title>

      <Header />
      <section style={{ background: 'var(--g-white)' }}>
        <div className="section-inner" style={{ maxWidth: '760px' }}>
          <span className="section-label visible">Erreur temporaire</span>
          <div className="g-rule" />
          <h1 className="section-h2 visible" style={{ marginBottom: '1.2rem' }}>
            Cette page n'a pas pu s'afficher
          </h1>

          <p className="section-body" style={{ marginBottom: '1.1rem' }}>
            Un incident technique a empêché le chargement. Ce n'est pas une
            page supprimée : elle existe, elle n'a pas réussi à se construire
            cette fois-ci. Un rechargement suffit presque toujours.
          </p>

          <p className="section-body" style={{ marginBottom: '2rem' }}>
            Si le problème persiste, écrivez-nous ou appelez-nous : nous vous
            donnerons l'information que vous cherchiez, et nous saurons qu'il
            y a quelque chose à corriger.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '2.4rem' }}>
            <a
              href="/"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', background: 'var(--g-red)', color: '#FFFFFF', padding: '0.85rem 1.4rem', textDecoration: 'none', fontFamily: 'var(--font-title)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <RefreshCw size={15} aria-hidden="true" />
              Recharger l'accueil
            </a>
            <a
              href="/formations"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', background: 'var(--g-black)', color: '#FFFFFF', padding: '0.85rem 1.4rem', textDecoration: 'none', fontFamily: 'var(--font-title)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <Home size={15} aria-hidden="true" />
              Le catalogue
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
            <a href="mailto:president@galactusdigital.com" style={{ color: 'var(--g-red)' }}>
              president@galactusdigital.com
            </a>{' '}
            ·{' '}
            <a href="tel:+33781074746" style={{ color: 'var(--g-red)' }}>
              +33 7 81 07 47 46
            </a>
            {trace && <span style={{ display: 'none' }}>{trace}</span>}
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
