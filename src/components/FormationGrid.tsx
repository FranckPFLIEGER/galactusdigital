// FormationGrid.tsx — Grille formations dynamique depuis le catalogue
// Props : modalite + dark (fond sombre ou clair)
import { useState } from 'react'
import { ChevronRight, Euro } from 'lucide-react'
import { FORMATIONS, getFormationsParFamille, type Modalite, formatPrix } from '../data/catalogue'

const FC: Record<string, string> = {
  'Réseaux & CCNA':      '#E41F26',
  'Cybersécurité':       '#E41F26',
  'Programmation':       '#E41F26',
  'IoT':                 '#E41F26',
  'Linux & Open Source': '#E41F26',
  'Data & Analytics':    '#E41F26',
  'Azure & Cloud':       '#E41F26',
  'Microsoft 365':       '#E41F26',
}
const NC: Record<string, string> = {
  'Fondamental':   '#BBBBBB',
  'Intermédiaire': 'rgba(228,31,38,0.55)',
  'Avancé':        '#E41F26',
}
const PAR_FAMILLE = getFormationsParFamille()

interface Props {
  modalite: Modalite
  dark?: boolean
}

export function FormationGrid({ modalite, dark = false }: Props) {
  const [famille, setFamille] = useState('Toutes')

  const dispo = FORMATIONS.filter(f => f.modalites.includes(modalite))
  const familles = ['Toutes', ...Object.keys(PAR_FAMILLE).filter(fam =>
    PAR_FAMILLE[fam].some(f => f.modalites.includes(modalite))
  )]
  const visible = famille === 'Toutes' ? dispo : dispo.filter(f => f.famille === famille)

  // Thème
  const cardBg    = dark ? 'rgba(255,255,255,0.04)' : 'var(--g-offwhite)'
  const cardBord  = dark ? 'rgba(255,255,255,0.07)' : 'rgba(187,187,187,0.30)'
  const titleCol  = dark ? '#fff' : 'var(--g-black)'
  const descCol   = dark ? 'rgba(255,255,255,0.52)' : '#5a5a58'
  const metaCol   = dark ? 'rgba(255,255,255,0.30)' : '#888'
  const metaBg    = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'
  const pillBord  = dark ? 'rgba(255,255,255,0.06)' : 'rgba(187,187,187,0.35)'
  const pillCol   = dark ? 'rgba(255,255,255,0.40)' : '#666'
  const divider   = dark ? 'rgba(255,255,255,0.06)' : 'rgba(187,187,187,0.20)'

  return (
    <div>
      {/* ── Filtres famille ── */}
      <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {familles.map(fam => {
          const actif = famille === fam
          const col = FC[fam] || '#E41F26'
          const nb = fam === 'Toutes' ? dispo.length : (PAR_FAMILLE[fam] || []).filter(f => f.modalites.includes(modalite)).length
          return (
            <button key={fam} onClick={() => setFamille(fam)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.35rem',
                fontFamily: 'var(--font-title)', fontSize: '0.66rem', fontWeight: 700,
                letterSpacing: '0.10em', textTransform: 'uppercase',
                padding: '0.35rem 0.8rem',
                border: actif ? `1px solid ${col}` : `1px solid ${pillBord}`,
                borderLeft: actif ? `3px solid ${col}` : `1px solid ${pillBord}`,
                background: actif ? `${col}15` : 'transparent',
                color: actif ? (dark ? '#fff' : col) : pillCol,
                cursor: 'pointer', transition: 'all 0.13s',
              }}>
              {fam}
              <span style={{ fontSize: '0.58rem', fontWeight: 700, color: actif ? col : metaCol, background: actif ? `${col}20` : 'transparent', padding: '0.05rem 0.3rem' }}>
                {nb}
              </span>
            </button>
          )
        })}
      </div>

      {/* ── Grille ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1rem' }}>
        {visible.map(f => {
          const fCol = FC[f.famille] || '#E41F26'
          const nCol = NC[f.niveau]  || '#888'
          const prixVal = modalite === 'Présentiel' ? f.prix.presentiel
                        : modalite === 'FOAD'       ? f.prix.foad
                        : f.prix.elearning

          return (
            <a key={f.slug} href={`/formations/${f.slug}`}
              style={{ display: 'flex', flexDirection: 'column', background: cardBg, border: `1px solid ${cardBord}`, borderTop: `3px solid ${fCol}`, padding: '1.25rem', textDecoration: 'none', transition: 'transform 0.15s, box-shadow 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = dark ? '0 8px 24px rgba(0,0,0,0.35)' : '0 8px 24px rgba(0,0,0,0.09)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>

              {/* En-tête */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: fCol, marginBottom: '0.2rem' }}>
                    {f.famille}
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: titleCol, lineHeight: 1.2 }}>
                    {f.titre}
                  </div>
                </div>
                {/* Point niveau */}
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: nCol, flexShrink: 0, marginTop: '4px', title: f.niveau }} />
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.77rem', color: descCol, lineHeight: 1.55, margin: '0 0 0.75rem', flex: 1 }}>
                {f.description}
              </p>

              {/* Badges meta */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: metaCol, background: metaBg, padding: '0.18rem 0.45rem' }}>
                  {f.duree}
                </span>
                <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: nCol, background: `${nCol}18`, padding: '0.18rem 0.45rem' }}>
                  {f.niveau}
                </span>
                {f.examCode !== 'Badge NetAcad' && (
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: metaCol, background: metaBg, padding: '0.18rem 0.45rem' }}>
                    {f.examCode}
                  </span>
                )}
              </div>

              {/* Prix + CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.65rem', borderTop: `1px solid ${divider}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Euro size={11} color={prixVal !== null ? '#E41F26' : metaCol} />
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 700, color: prixVal !== null ? titleCol : metaCol, fontStyle: prixVal === null ? 'italic' : 'normal', letterSpacing: '0.04em' }}>
                    {formatPrix(prixVal)}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#E41F26' }}>
                  Voir <ChevronRight size={10} />
                </div>
              </div>
            </a>
          )
        })}
      </div>

      {/* Note prix */}
      <p style={{ fontSize: '0.73rem', color: metaCol, marginTop: '1rem', fontStyle: 'italic', lineHeight: 1.6 }}>
        * Prix indicatifs en HT — TVA non applicable (Art. 261-4-4° CGI, organisme certifié Qualiopi).
        "Sur demande" : devis sous 48h. Financement CPF, OPCO et aides régionales DOM disponibles —{' '}
        <a href="/financements" style={{ color: '#E41F26', textDecoration: 'none' }}>voir les financements</a>.
      </p>
    </div>
  )
}
