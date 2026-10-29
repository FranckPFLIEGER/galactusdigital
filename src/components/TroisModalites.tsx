import { CheckCircle } from 'lucide-react'

/**
 * Le comparatif des trois modalités, partagé par /elearning, /foad et /presentiel.
 *
 * Le bloc n'existait que sur la page E-learning. Franck l'a relevé le 28 octobre
 * 2026 — « Pourquoi ne pas reproduire ces 3 modalités aux autres modalités FOAD
 * et présentiel ? » — : un visiteur arrivé par /presentiel ne voyait pas qu'il
 * existait deux autres façons de se former.
 *
 * Il est extrait ici en composant plutôt que recopié trois fois : les intitulés
 * de modalité et ce qu'elles contiennent ne doivent exister qu'à un seul endroit
 * (règle du projet : les données ne se dupliquent pas).
 */

export type ModaliteActive = '/elearning' | '/foad' | '/presentiel'

const MODALITES: { titre: string; href: ModaliteActive; items: string[] }[] = [
  {
    titre: 'E-learning tutoré',
    href: '/elearning',
    items: [
      'Catalogue Cisco Networking Academy',
      'Parcours asynchrone — avancez quand vous voulez',
      'Tuteur certifié disponible par messagerie',
      'Accès plateforme ouvert un an',
      "Tarif public ; badge et certificat de l'éditeur compris",
    ],
  },
  {
    titre: 'FOAD — Juniper',
    href: '/foad',
    items: [
      'Parcours Juniper JNCIA-Junos',
      'Sessions live à horaires fixes sur WEBEX',
      'Interaction directe avec le formateur',
      '17 ateliers sur maquette Junos à distance',
      'Devis sur mesure',
    ],
  },
  {
    titre: 'Présentiel',
    href: '/presentiel',
    items: [
      'Catalogue Microsoft, CCNA v2.0 complet et CCNP Enterprise',
      'Dans vos locaux ou en salle retenue pour la session',
      'Interaction directe avec le formateur',
      'Ateliers pratiques sur équipements réels',
      'Devis sur mesure selon le territoire',
    ],
  },
]

export function TroisModalites({ active }: { active: ModaliteActive }) {
  return (
    <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 className="section-h2-light">Nos trois modalités</h2>
        <div className="g-rule" />
        <div className="el-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {MODALITES.map(c => {
            const estActive = c.href === active
            return (
              <div
                key={c.titre}
                style={{
                  background: estActive ? 'rgba(228,31,38,0.07)' : 'rgba(255,255,255,0.03)',
                  border: estActive ? '1px solid rgba(228,31,38,0.25)' : '1px solid rgba(255,255,255,0.06)',
                  borderTop: `3px solid ${estActive ? 'var(--g-red)' : 'rgba(255,255,255,0.12)'}`,
                  padding: '1.75rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: estActive ? '#fff' : 'rgba(255,255,255,0.45)', marginBottom: '1.25rem',
                    display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap',
                  }}
                >
                  {c.titre}
                  {estActive && (
                    <span
                      style={{
                        fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700,
                        letterSpacing: '0.12em', background: 'var(--g-red)', color: '#fff',
                        padding: '0.15rem 0.5rem',
                      }}
                    >
                      Cette page
                    </span>
                  )}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {c.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem',
                        color: estActive ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.35)',
                      }}
                    >
                      <CheckCircle
                        size={15}
                        color={estActive ? '#E41F26' : 'rgba(255,255,255,0.2)'}
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {!estActive && (
                  <a
                    href={c.href}
                    style={{
                      display: 'inline-block', marginTop: '1.25rem', fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.40)', textDecoration: 'underline',
                    }}
                  >
                    Voir cette modalité →
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
