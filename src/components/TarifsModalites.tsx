import { getFormationBySlug, getTarifsModalites, getVoucher, MENTION_PRIX_COURTE } from '../data/catalogue'
import { getSessionsFormation, labelPlage } from '../data/sessions'
import { CalendarClock, ArrowRight } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// TarifsModalites — bandeau « Modalités & tarifs » des fiches formation
//
// Remplace le bloc dupliqué dans les 50 fiches. Tout vient du catalogue :
//  - E-learning tutoré : prix public, titre officiel de l'éditeur compris
//  - Présentiel        : prix public s'il existe, sinon sur devis
//  - FOAD              : sur devis
// Si une session est programmée, un lien vers le calendrier apparaît.
//
// Usage dans une fiche : <TarifsModalites slug="ccna-itn" />
// ─────────────────────────────────────────────────────────────────────────────

export function TarifsModalites({ slug }: { slug: string }) {
  const f = getFormationBySlug(slug)
  if (!f) return null

  const tarifs = getTarifsModalites(f)
  const voucher = getVoucher(f)
  const sessions = getSessionsFormation(slug)
  const prochaine = sessions[0]

  return (
    <section style={{ background: 'var(--g-white)', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(187,187,187,0.25)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888' }}>
            Modalités &amp; tarifs :
          </span>

          {tarifs.map(t => (
            <div key={t.modalite} style={{
              display: 'inline-flex', alignItems: 'baseline', gap: '0.55rem',
              padding: '0.45rem 0.9rem',
              border: '1px solid rgba(187,187,187,0.5)',
              borderLeft: `3px solid ${t.surDevis ? 'rgba(187,187,187,0.7)' : 'var(--g-red)'}`,
              background: t.surDevis ? 'var(--g-offwhite)' : 'rgba(228,31,38,0.04)',
            }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5a5a58' }}>
                {t.label}
              </span>
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: t.surDevis ? '0.80rem' : '0.95rem',
                fontWeight: 700,
                color: t.surDevis ? '#888' : 'var(--g-red)',
                fontStyle: t.surDevis ? 'italic' : 'normal',
              }}>
                {t.valeur}
              </span>
            </div>
          ))}

          {prochaine && (
            <a href={`/calendrier?f=${slug}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              border: '1px solid rgba(228,31,38,0.35)', background: 'rgba(228,31,38,0.06)',
              fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--g-red)', textDecoration: 'none',
            }}>
              <CalendarClock size={13} />
              {sessions.length > 1
                ? `${sessions.length} sessions programmées`
                : `Session ${labelPlage(prochaine)} · ${prochaine.territoire}`}
              <ArrowRight size={12} />
            </a>
          )}

          <a href="mailto:president@galactusdigital.com" style={{
            fontSize: '0.74rem', fontFamily: 'var(--font-title)', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--g-red)', textDecoration: 'none', marginLeft: '0.25rem',
          }}>
            Demander un devis →
          </a>
        </div>

        <p style={{ fontSize: '0.72rem', color: '#999', lineHeight: 1.55, margin: '0.6rem 0 0', maxWidth: '900px' }}>
          {MENTION_PRIX_COURTE}
          {voucher > 0 && ` Le tarif e-learning comprend le voucher d'examen officiel (${voucher.toLocaleString('fr-FR')} €).`}
          {voucher === 0 && f.modalites.includes('E-learning') && " Le tarif e-learning comprend le certificat et le badge numérique de l'éditeur."}
        </p>

      </div>
    </section>
  )
}

export default TarifsModalites
