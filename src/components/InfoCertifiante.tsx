// ─────────────────────────────────────────────────────────────────────────────
// InfoCertifiante.tsx — Bloc « Certification, résultats, financement et accessibilité »
//
// Répond aux indicateurs 1, 2 et 3 du Référentiel National Qualité version 2
// (décret n° 2026-728 du 1er août 2026, en vigueur le 1er novembre 2026) :
//   • intitulé exact et code de la certification visée, et son enregistrement
//   • taux d'obtention, avec modalités de calcul accessibles
//   • possibilités de validation par blocs de compétences
//   • équivalences et passerelles
//   • suites de parcours
//   • débouchés
//   • accessibilité aux personnes en situation de handicap (indicateur 1)
//   • modes de financement, avec mention explicite de la non-éligibilité au CPF
//
// Usage dans une fiche : <InfoCertifiante slug="ccna-itn" />
// ─────────────────────────────────────────────────────────────────────────────

import { Award, Layers, GitBranch, ArrowUpRight, Briefcase, Wallet, Info, Accessibility } from 'lucide-react'
import { getInfoCertifiante, MODES_FINANCEMENT, MENTION_NON_CPF } from '../data/infoCertifiante'
import { getTauxObtention, RESULTATS_ARRETE_AU } from '../data/resultats'

function Carte({
  icon, titre, children,
}: { icon: React.ReactNode; titre: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: 'var(--g-white)',
      border: '1px solid rgba(187,187,187,0.3)',
      borderTop: '3px solid var(--g-red)',
      padding: '1.5rem',
      display: 'flex', flexDirection: 'column', gap: '0.75rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <div style={{
          width: '30px', height: '30px', background: 'var(--g-red)', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {icon}
        </div>
        <div style={{
          fontFamily: 'var(--font-title)', fontSize: '0.78rem', fontWeight: 700,
          letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-black)',
        }}>
          {titre}
        </div>
      </div>
      <div style={{ fontSize: '0.84rem', color: '#4a4a48', lineHeight: 1.65 }}>
        {children}
      </div>
    </div>
  )
}

function Puces({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
          <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '7px' }} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export function InfoCertifiante({ slug }: { slug: string }) {
  const info = getInfoCertifiante(slug)
  if (!info) return null
  const taux = getTauxObtention(slug)

  return (
    <section
      id="information-certifiante"
      style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem', borderTop: '3px solid var(--g-red)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <span style={{
          fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600,
          letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)',
          display: 'block', marginBottom: '0.6rem',
        }}>
          Information du public — RNQ indicateurs 1, 2 et 3
        </span>
        <h2 className="section-h2">Certification, résultats, financement et accessibilité</h2>
        <div className="g-rule" />
        <p style={{ fontSize: '0.88rem', color: '#5a5a58', lineHeight: 1.7, maxWidth: '900px', marginBottom: '2rem' }}>
          Informations publiées au titre du Référentiel National Qualité dans sa version issue du
          décret n° 2026-728 du 1er août 2026, applicable au 1er novembre 2026. Données arrêtées au{' '}
          {RESULTATS_ARRETE_AU} et justifiables sur pièces en audit —{' '}
          <a href="/demarche-qualite#methode" style={{ color: 'var(--g-red)', fontWeight: 600, textDecoration: 'none' }}>
            voir les modalités de calcul
          </a>.
        </p>

        {/* Certification visée */}
        <div style={{
          background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)',
          padding: '1.5rem 1.75rem', marginBottom: '1.25rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)',
            marginBottom: '0.4rem',
          }}>
            Certification visée · code {info.examCode}
          </div>
          <div style={{
            fontFamily: 'var(--font-title)', fontSize: '1.05rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', marginBottom: '0.6rem',
          }}>
            {info.certification}
          </div>
          <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, margin: 0 }}>
            {info.enregistrement}
          </p>
        </div>

        {/* Les 5 rubriques de l'indicateur 3 */}
        <div
          className="info-certif-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}
        >
          <Carte icon={<Award size={15} color="#fff" />} titre="Taux d'obtention">
            <div style={{
              fontFamily: 'var(--font-title)', fontSize: taux.disponible ? '2rem' : '1.1rem',
              fontWeight: 700, color: 'var(--g-red)', lineHeight: 1.1, marginBottom: '0.35rem',
            }}>
              {taux.valeur}
            </div>
            {taux.sousTitre && (
              <div style={{
                fontFamily: 'var(--font-title)', fontSize: '0.66rem', fontWeight: 700,
                letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-black)',
                lineHeight: 1.45, marginBottom: '0.5rem',
              }}>
                {taux.sousTitre}
              </div>
            )}
            <p style={{ margin: 0, fontSize: '0.80rem', color: '#5a5a58', lineHeight: 1.6 }}>{taux.detail}</p>
          </Carte>

          <Carte icon={<Layers size={15} color="#fff" />} titre="Validation par blocs">
            <p style={{ margin: 0 }}>{info.blocs}</p>
          </Carte>

          <Carte icon={<GitBranch size={15} color="#fff" />} titre="Équivalences & passerelles">
            <Puces items={info.passerelles} />
          </Carte>

          <Carte icon={<ArrowUpRight size={15} color="#fff" />} titre="Suites de parcours">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {info.suites.map((s, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '7px' }} />
                  {s.slug ? (
                    <a href={`/formations/${s.slug}`} style={{ color: '#4a4a48', textDecoration: 'none', borderBottom: '1px solid rgba(228,31,38,0.35)' }}>
                      {s.libelle}
                    </a>
                  ) : (
                    <span>{s.libelle}</span>
                  )}
                </li>
              ))}
            </ul>
            {info.parcours.length > 0 && (
              <p style={{ margin: '0.75rem 0 0', fontSize: '0.78rem', color: '#888', lineHeight: 1.55 }}>
                Positionnement :{' '}
                {info.parcours.map(p => `${p.titre} — Bloc ${p.bloc}`).join(' · ')}.{' '}
                <a href="/formations#parcours" style={{ color: 'var(--g-red)', textDecoration: 'none', fontWeight: 600 }}>
                  Voir les parcours métier
                </a>
              </p>
            )}
          </Carte>

          <Carte icon={<Briefcase size={15} color="#fff" />} titre="Débouchés">
            <Puces items={info.debouches} />
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.78rem', color: '#888', lineHeight: 1.55 }}>
              Métiers visés à l'issue du parcours complet. Cette formation ne garantit pas l'accès
              à l'emploi ; aucun taux d'insertion n'est publié, faute de données consolidées
              justifiables.
            </p>
          </Carte>

          <Carte icon={<Wallet size={15} color="#fff" />} titre="Modes de financement">
            <Puces items={MODES_FINANCEMENT} />
          </Carte>

          <Carte icon={<Accessibility size={15} color="#fff" />} titre="Accessibilité — handicap">
            <p style={{ margin: 0 }}>
              Cette formation est accessible aux personnes en situation de handicap. Un référent
              handicap certifié étudie chaque demande et met en place les aménagements nécessaires
              (rythme, durée des séquences, supports adaptés, matériel, conditions d'examen auprès
              de l'éditeur).
            </p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.78rem', color: '#888', lineHeight: 1.55 }}>
              Signalez votre besoin dès la demande de devis : l'étude est menée avant l'entrée en
              formation.{' '}
              <a href="/handicap" style={{ color: 'var(--g-red)', fontWeight: 600, textDecoration: 'none' }}>
                Référent handicap et aménagements
              </a>.
            </p>
          </Carte>
        </div>

        {/* Mention de transparence — indicateur 1 RNQ V2 */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
          padding: '1rem 1.5rem',
          background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.18)',
          borderLeft: '4px solid var(--g-red)',
        }}>
          <Info size={17} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.82rem', color: '#4a4a48', margin: 0, lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--g-red)' }}>Transparence — </strong>
            {MENTION_NON_CPF}{' '}
            <a href="/mentions-legales#cgv" style={{ color: 'var(--g-red)', fontWeight: 600, textDecoration: 'none' }}>
              Article 12 bis des CGV
            </a>.
          </p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .info-certif-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}

export default InfoCertifiante
