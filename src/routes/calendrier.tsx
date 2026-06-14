import { useState, useMemo } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MapPin, Phone, Mail, Clock, Users, Info, Euro, Search, X, ChevronDown, CalendarClock, LayoutList, BarChart2 } from 'lucide-react'
import { FORMATIONS, FAMILLES, type Formation, type Modalite, type Territoire } from '../data/catalogue'

export const Route = createFileRoute('/calendrier')({
  component: CalendrierPage,
})

interface Session {
  id: string
  formation: Formation
  territoire: Territoire
  lieu: string
  modalite: Modalite
  dateLabel: string
  placesMax: number
  statut: 'sur_demande' | 'en_preparation'
}

// ── ⚠️ SESSIONS PLANIFIÉES — remplir dateLabel et lieu ───────────────
const PROCHAINES: Array<{
  slug: string; territoire: Territoire; modalite: Modalite
  dateLabel: string; lieu: string; placesMax?: number
}> = [
  // { slug: 'ccna-itn', territoire: 'Martinique', modalite: 'Présentiel',
  //   dateLabel: 'Du 15/09/26 au 03/10/26', lieu: 'Pointe Madeleine — CAP EST, Le François 97240' },
]

function parseDateRange(label: string): { start: Date; end: Date } | null {
  const m = label.match(/[Dd]u\s+(\d{1,2})\/(\d{2})\/(\d{2,4})\s+au\s+(\d{1,2})\/(\d{2})\/(\d{2,4})/)
  if (!m) return null
  const y1 = parseInt(m[3]) < 100 ? 2000 + parseInt(m[3]) : parseInt(m[3])
  const y2 = parseInt(m[6]) < 100 ? 2000 + parseInt(m[6]) : parseInt(m[6])
  return {
    start: new Date(y1, parseInt(m[2]) - 1, parseInt(m[1])),
    end:   new Date(y2, parseInt(m[5]) - 1, parseInt(m[4])),
  }
}

function s(slug: string, territoire: Territoire, modalite: Modalite, opts: Partial<Session> = {}): Session | null {
  const f = FORMATIONS.find(x => x.slug === slug)
  if (!f || !f.modalites.includes(modalite)) return null
  const lieux: Record<Territoire, string> = {
    'Martinique':       'Pointe Madeleine — CAP EST, Le François 97240',
    'Guadeloupe':       'Pointe de la Verdure, Gosier 97190',
    'Paris':            '66 avenue des Champs Élysées, 75008 Paris',
    'Tous territoires': 'En ligne — WEBEX · NetAcad · Microsoft Learn',
  }
  return {
    id: `${slug}__${territoire}__${modalite}`.replace(/\s/g, '-'),
    formation: f, territoire, lieu: lieux[territoire], modalite,
    dateLabel: 'Du JJ/MM/AA au JJ/MM/AA',
    placesMax: modalite === 'Présentiel' ? 12 : 20,
    statut: 'sur_demande', ...opts,
  }
}

const RAW: (Session | null)[] = [
  s('networking-essentials','Martinique','Présentiel'), s('networking-essentials','Guadeloupe','Présentiel'),
  s('networking-essentials','Tous territoires','FOAD'), s('networking-essentials','Tous territoires','E-learning'),
  s('ccna-itn','Martinique','Présentiel'), s('ccna-itn','Guadeloupe','Présentiel'), s('ccna-itn','Paris','Présentiel'),
  s('ccna-itn','Tous territoires','FOAD'), s('ccna-itn','Tous territoires','E-learning'),
  s('ccna-srwe','Martinique','Présentiel'), s('ccna-srwe','Tous territoires','FOAD'), s('ccna-srwe','Tous territoires','E-learning'),
  s('ccna-ensa','Martinique','Présentiel'), s('ccna-ensa','Tous territoires','FOAD'), s('ccna-ensa','Tous territoires','E-learning'),
  s('cybersecurity-essentials','Martinique','Présentiel'), s('cybersecurity-essentials','Tous territoires','FOAD'), s('cybersecurity-essentials','Tous territoires','E-learning'),
  s('cyberops','Martinique','Présentiel'), s('cyberops','Guadeloupe','Présentiel'), s('cyberops','Tous territoires','FOAD'), s('cyberops','Tous territoires','E-learning'),
  s('ethical-hacker','Martinique','Présentiel'), s('ethical-hacker','Tous territoires','FOAD'),
  s('python-essentials-1','Martinique','Présentiel'), s('python-essentials-1','Tous territoires','FOAD'), s('python-essentials-1','Tous territoires','E-learning'),
  s('python-essentials-2','Martinique','Présentiel'), s('python-essentials-2','Tous territoires','FOAD'), s('python-essentials-2','Tous territoires','E-learning'),
  s('devnet-associate','Martinique','Présentiel'), s('devnet-associate','Tous territoires','FOAD'),
  s('iot-introduction','Martinique','Présentiel'), s('iot-introduction','Tous territoires','FOAD'), s('iot-introduction','Tous territoires','E-learning'),
  s('iot-connecting-things','Martinique','Présentiel'), s('iot-connecting-things','Tous territoires','FOAD'),
  s('iot-big-data-analytics','Martinique','Présentiel'), s('iot-big-data-analytics','Tous territoires','FOAD'),
  s('iot-security','Martinique','Présentiel'), s('iot-security','Tous territoires','FOAD'),
  s('iot-hackathon','Martinique','Présentiel'), s('iot-hackathon','Tous territoires','FOAD'),
  s('linux-essentials','Martinique','Présentiel'), s('linux-essentials','Tous territoires','FOAD'), s('linux-essentials','Tous territoires','E-learning'),
  s('data-analytics-essentials','Martinique','Présentiel'), s('data-analytics-essentials','Tous territoires','FOAD'), s('data-analytics-essentials','Tous territoires','E-learning'),
  s('az-900','Martinique','Présentiel'), s('az-900','Guadeloupe','Présentiel'), s('az-900','Paris','Présentiel'), s('az-900','Tous territoires','FOAD'), s('az-900','Tous territoires','E-learning'),
  s('az-104','Martinique','Présentiel'), s('az-104','Paris','Présentiel'), s('az-104','Tous territoires','FOAD'), s('az-104','Tous territoires','E-learning'),
  s('sc-900','Martinique','Présentiel'), s('sc-900','Tous territoires','FOAD'), s('sc-900','Tous territoires','E-learning'),
  s('ai-900','Paris','Présentiel'), s('ai-900','Tous territoires','FOAD'), s('ai-900','Tous territoires','E-learning'),
  s('ms-900','Martinique','Présentiel'), s('ms-900','Tous territoires','FOAD'), s('ms-900','Tous territoires','E-learning'),
]
const SESSIONS: Session[] = RAW.filter(Boolean) as Session[]

const SESSIONS_PREP: Session[] = PROCHAINES.flatMap(p => {
  const f = FORMATIONS.find(x => x.slug === p.slug)
  if (!f) return []
  return [{ id: `prep__${p.slug}__${p.territoire}__${p.modalite}`.replace(/\s/g,'-'), formation: f, territoire: p.territoire, lieu: p.lieu, modalite: p.modalite, dateLabel: p.dateLabel, placesMax: p.placesMax ?? 12, statut: 'en_preparation' as const }]
})

const MC: Record<string,{bg:string;color:string}> = { 'Présentiel':{bg:'#E41F26',color:'#fff'}, 'FOAD':{bg:'#1D1D1B',color:'#fff'}, 'E-learning':{bg:'#5a5a58',color:'#fff'} }
const NC: Record<string,string> = { 'Fondamental':'#BBBBBB', 'Intermédiaire':'rgba(228,31,38,0.55)', 'Avancé':'#E41F26' }

// ── COMPOSANT GANTT ────────────────────────────────────────────────────────
function GanttView() {
  const today = new Date()
  const months = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth() + i, 1)
    return {
      date: d,
      label: d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.',''),
      year:  d.getFullYear().toString().slice(2),
    }
  })
  const start6 = months[0].date
  const end6   = new Date(months[5].date.getFullYear(), months[5].date.getMonth() + 1, 0)
  const totalMs = end6.getTime() - start6.getTime()

  function pct(d: Date): number {
    return Math.max(0, Math.min(100, ((d.getTime() - start6.getTime()) / totalMs) * 100))
  }

  const familles = Object.entries(FAMILLES)

  const prepBySlug: Record<string, Array<{ start: Date; end: Date; territoire: Territoire; modalite: Modalite; label: string }>> = {}
  for (const sess of SESSIONS_PREP) {
    const parsed = parseDateRange(sess.dateLabel)
    if (!parsed) continue
    const slug = sess.formation.slug
    if (!prepBySlug[slug]) prepBySlug[slug] = []
    prepBySlug[slug].push({ ...parsed, territoire: sess.territoire, modalite: sess.modalite, label: sess.dateLabel })
  }

  const hasAnyPlanned = Object.keys(prepBySlug).length > 0

  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{ minWidth: '640px' }}>

        {/* En-tête mois */}
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', marginBottom: '4px' }}>
          <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', padding: '0 0 4px 4px' }}>Famille</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', borderBottom: '1px solid rgba(187,187,187,0.3)' }}>
            {months.map(m => (
              <div key={m.label} style={{ textAlign: 'center', fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-black)', paddingBottom: '4px' }}>
                {m.label} {m.year}
              </div>
            ))}
          </div>
        </div>

        {/* Lignes par famille */}
        {familles.map(([famKey, fam]) => {
          const formsFamille = FORMATIONS.filter(f => f.famille === famKey)
          const hasPlanned = formsFamille.some(f => prepBySlug[f.slug])
          const editeurColor = formsFamille[0]?.editeur === 'Microsoft' ? '#1D1D1B' : '#E41F26'
          return (
            <div key={famKey} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', marginBottom: '3px', alignItems: 'center', minHeight: '32px' }}>
              {/* Label famille */}
              <div style={{ paddingRight: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '3px', height: '20px', background: editeurColor, flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--g-black)', lineHeight: 1.2 }}>
                  {fam.label}
                </span>
              </div>
              {/* Barre timeline */}
              <div style={{ position: 'relative', height: '28px', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.2)' }}>
                {/* Grille mois */}
                {months.map((m, i) => (
                  <div key={i} style={{ position: 'absolute', left: `${(i / 6) * 100}%`, top: 0, bottom: 0, width: '1px', background: 'rgba(187,187,187,0.25)' }} />
                ))}
                {/* Barres sessions planifiées */}
                {hasPlanned ? (
                  formsFamille.flatMap(f => (prepBySlug[f.slug] || []).map((sess, j) => {
                    const left  = pct(sess.start)
                    const right = pct(sess.end)
                    const width = Math.max(right - left, 1.5)
                    const mc = MC[sess.modalite] || { bg: editeurColor, color: '#fff' }
                    return (
                      <div key={`${f.slug}-${j}`}
                        title={`${f.titre} — ${sess.territoire} — ${sess.label}`}
                        style={{ position: 'absolute', left: `${left}%`, width: `${width}%`, top: '4px', bottom: '4px', background: mc.bg, opacity: 0.85, cursor: 'default', display: 'flex', alignItems: 'center', paddingLeft: '4px', overflow: 'hidden' }}>
                        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.52rem', fontWeight: 700, color: mc.color, whiteSpace: 'nowrap', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                          {f.titre.length > 14 ? f.titre.slice(0, 14) + '…' : f.titre}
                        </span>
                      </div>
                    )
                  }))
                ) : (
                  <div style={{ position: 'absolute', inset: '8px 4px', border: '1px dashed rgba(187,187,187,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.52rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: '#ccc' }}>
                      Dates à planifier
                    </span>
                  </div>
                )}
              </div>
            </div>
          )
        })}

        {!hasAnyPlanned && (
          <div style={{ marginTop: '12px', padding: '10px 12px', background: 'rgba(239,159,39,0.06)', border: '1px solid rgba(239,159,39,0.25)', fontSize: '0.78rem', color: '#856404' }}>
            <strong>Vue Gantt —</strong> Remplissez le tableau <code>PROCHAINES</code> en haut du fichier pour voir apparaître les sessions planifiées sur cette timeline.
          </div>
        )}
      </div>
    </div>
  )
}

// ── PILL ──────────────────────────────────────────────────────────────
function Pill({ label, actif, onClick }: { label: string; actif: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '0.38rem 0.9rem', border: actif ? '1px solid var(--g-red)' : '1px solid rgba(187,187,187,0.4)', color: actif ? '#fff' : '#666', background: actif ? 'var(--g-red)' : 'transparent', cursor: 'pointer', transition: 'all 0.13s' }}>
      {label}
    </button>
  )
}

// ── SESSION ROW ───────────────────────────────────────────────────────
function SessionRow({ s, prep = false }: { s: Session; prep?: boolean }) {
  const mc = MC[s.modalite] || { bg: '#888', color: '#fff' }
  const nc = NC[s.formation.niveau] || '#888'
  const prix = s.modalite === 'E-learning' ? s.formation.prix.elearning : s.modalite === 'FOAD' ? s.formation.prix.foad : s.formation.prix.presentiel
  const editeurColor = s.formation.editeur === 'Microsoft' ? '#1D1D1B' : '#E41F26'
  return (
    <div className="session-row"
      style={{ border: prep ? '1px solid rgba(239,159,39,0.35)' : '1px solid rgba(187,187,187,0.28)', borderLeft: `3px solid ${prep ? '#EF9F27' : nc}`, padding: '1.2rem 1.5rem', background: prep ? 'rgba(239,159,39,0.04)' : 'var(--g-white)', transition: 'box-shadow 0.15s' }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
      <div className="sr-formation">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
          {prep && <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: '#EF9F27', padding: '0.12rem 0.5rem' }}>En préparation</span>}
          <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: editeurColor, padding: '0.12rem 0.5rem' }}>{s.formation.editeur}</span>
          <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: nc, background: `${nc}18`, padding: '0.12rem 0.5rem' }}>{s.formation.niveau}</span>
          <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: mc.color, background: mc.bg, padding: '0.12rem 0.5rem' }}>{s.modalite}</span>
        </div>
        <a href={`/formations/${s.formation.slug}`} style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', textDecoration: 'none', lineHeight: 1.25, display: 'block', marginBottom: '0.2rem' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--g-red)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--g-black)')}>
          {s.formation.titre}
        </a>
        <div style={{ fontSize: '0.75rem', color: '#888' }}>{s.formation.certification}</div>
      </div>
      <div className="sr-lieu">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
          <MapPin size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--g-black)', lineHeight: 1.3 }}>{s.territoire}</div>
            <div style={{ fontSize: '0.74rem', color: '#888' }}>{s.lieu}</div>
          </div>
        </div>
      </div>
      <div className="sr-infos" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#4a4a48' }}><Clock size={12} color="#E41F26" />{s.formation.duree}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#4a4a48' }}><Users size={12} color="#E41F26" />Max {s.placesMax} participants</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem' }}>
          <Euro size={12} color="#E41F26" />
          {prix !== null ? <strong style={{ color: 'var(--g-black)' }}>{prix.toLocaleString('fr-FR')} € HT</strong> : <span style={{ color: '#aaa', fontStyle: 'italic' }}>Sur devis</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: prep ? '#EF9F27' : '#bbb', fontStyle: 'italic', fontWeight: prep ? 600 : 400 }}>
          <CalendarClock size={11} color={prep ? '#EF9F27' : '#ccc'} />{s.dateLabel}
        </div>
      </div>
      <div className="sr-cta" style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', alignItems: 'flex-end' }}>
        <a href={`mailto:president@galactusdigital.com?subject=${encodeURIComponent('Inscription — ' + s.formation.titre + ' — ' + s.territoire + ' — ' + s.modalite)}`}
          className="btn-red" style={{ fontSize: '0.68rem', padding: '0.5rem 1rem', whiteSpace: 'nowrap' }}>
          {prep ? 'Réserver' : "S'inscrire"}
        </a>
        <a href={`/formations/${s.formation.slug}`} style={{ fontSize: '0.66rem', color: 'rgba(187,187,187,0.8)', textDecoration: 'none', whiteSpace: 'nowrap' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--g-red)')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(187,187,187,0.8)')}>
          Voir la fiche →
        </a>
      </div>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────
function CalendrierPage() {
  const [vue,          setVue]          = useState<'liste'|'gantt'>('gantt')
  const [fModalite,    setFModalite]    = useState('Toutes')
  const [fTerritoire,  setFTerritoire]  = useState('Tous')
  const [fEditeur,     setFEditeur]     = useState('Tous')
  const [fFamille,     setFFamille]     = useState('Toutes')
  const [fFormation,   setFFormation]   = useState('Toutes')
  const [query,        setQuery]        = useState('')

  const familles  = ['Toutes', ...Array.from(new Set(FORMATIONS.map(f => f.famille)))]
  const titres    = ['Toutes', ...FORMATIONS.map(f => f.titre)]
  const hasFilter = fModalite !== 'Toutes' || fTerritoire !== 'Tous' || fEditeur !== 'Tous' || fFamille !== 'Toutes' || fFormation !== 'Toutes' || query.trim() !== ''
  const reset = () => { setFModalite('Toutes'); setFTerritoire('Tous'); setFEditeur('Tous'); setFFamille('Toutes'); setFFormation('Toutes'); setQuery('') }

  const filterFn = (s: Session) => {
    if (fModalite   !== 'Toutes' && s.modalite          !== fModalite)   return false
    if (fTerritoire !== 'Tous'   && s.territoire        !== fTerritoire) return false
    if (fEditeur    !== 'Tous'   && s.formation.editeur !== fEditeur)    return false
    if (fFamille    !== 'Toutes' && s.formation.famille !== fFamille)    return false
    if (fFormation  !== 'Toutes' && s.formation.titre   !== fFormation)  return false
    if (query.trim()) { const q = query.toLowerCase(); const hay = `${s.formation.titre} ${s.formation.famille} ${s.formation.editeur} ${s.formation.certification}`.toLowerCase(); if (!hay.includes(q)) return false }
    return true
  }

  const results     = useMemo(() => SESSIONS.filter(filterFn),      [fModalite, fTerritoire, fEditeur, fFamille, fFormation, query])
  const prepResults = useMemo(() => SESSIONS_PREP.filter(filterFn), [fModalite, fTerritoire, fEditeur, fFamille, fFormation, query])

  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>
        <style>{`
          .session-row { display: grid; grid-template-columns: 3fr 2fr 1.4fr auto; gap: 1.25rem; align-items: center; }
          @media (max-width: 860px) { .session-row { grid-template-columns: 1fr 1fr; grid-template-areas: "form lieu" "infos cta"; } .sr-formation{grid-area:form} .sr-lieu{grid-area:lieu} .sr-infos{grid-area:infos} .sr-cta{grid-area:cta;align-items:flex-end} }
          @media (max-width: 540px) { .session-row { grid-template-columns: 1fr; grid-template-areas: "form" "lieu" "infos" "cta"; } .sr-cta{align-items:flex-start!important} main section{padding:2rem 1rem!important} }
        `}</style>

        {/* Hero */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Formations · Sessions</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>Calendrier des sessions</h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.62)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              {SESSIONS.length} sessions disponibles — Cisco Networking Academy et Microsoft. Dates confirmées sur convocation.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[ {val:FORMATIONS.length.toString(),label:'Formations'}, {val:SESSIONS.filter(x=>x.modalite==='Présentiel').length.toString(),label:'Présentiel'}, {val:SESSIONS.filter(x=>x.modalite==='FOAD').length.toString(),label:'FOAD'}, {val:SESSIONS.filter(x=>x.modalite==='E-learning').length.toString(),label:'E-learning'}, {val:SESSIONS_PREP.length>0?SESSIONS_PREP.length.toString():'—',label:'Planifiées'} ].map(st => (
                <div key={st.label}><div style={{ fontFamily: 'var(--font-title)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1 }}>{st.val}</div><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: '0.2rem' }}>{st.label}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* Note légale */}
        <section style={{ background: 'var(--g-offwhite)', padding: '1.1rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.4)', borderLeft: '4px solid var(--g-red)', padding: '0.85rem 1.25rem' }}>
              <Info size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.81rem', color: '#5a5a58', margin: 0, lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--g-black)' }}>Calendrier indicatif.</strong> Qualiopi (Indicateur 4) — dates et lieux confirmés sur la convocation.
                Délais : <strong>1 mois</strong> standard · <strong>3 mois</strong> OPCO · <strong>11 jours ouvrés</strong> CPF.
                Prix HT — TVA non applicable (Art. 261-4-4° CGI, NDA 11 75 59933 75).
              </p>
            </div>
          </div>
        </section>

        {/* Vue principale */}
        <section style={{ background: 'var(--g-white)', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            {/* Toggle vue */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-black)' }}>
                {vue === 'gantt' ? 'Vision 6 mois — Gantt' : 'Liste des sessions'}
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button onClick={() => setVue('gantt')} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-title)', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '0.5rem 1rem', border: vue === 'gantt' ? '1px solid var(--g-red)' : '1px solid rgba(187,187,187,0.4)', background: vue === 'gantt' ? 'var(--g-red)' : 'transparent', color: vue === 'gantt' ? '#fff' : '#666', cursor: 'pointer' }}>
                  <BarChart2 size={13} /> Gantt
                </button>
                <button onClick={() => setVue('liste')} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-title)', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '0.5rem 1rem', border: vue === 'liste' ? '1px solid var(--g-red)' : '1px solid rgba(187,187,187,0.4)', background: vue === 'liste' ? 'var(--g-red)' : 'transparent', color: vue === 'liste' ? '#fff' : '#666', cursor: 'pointer' }}>
                  <LayoutList size={13} /> Liste
                </button>
              </div>
            </div>

            {/* ── VUE GANTT ── */}
            {vue === 'gantt' && (
              <div style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.28)', padding: '1.5rem', marginBottom: '1rem' }}>
                <GanttView />
                <p style={{ fontSize: '0.72rem', color: '#aaa', marginTop: '1rem', fontStyle: 'italic' }}>
                  Les barres apparaissent lorsque vous planifiez une session dans le tableau PROCHAINES du fichier calendrier.tsx.
                </p>
              </div>
            )}

            {/* ── VUE LISTE ── */}
            {vue === 'liste' && (
              <>
                {/* Filtres */}
                <div style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.28)', padding: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                      <Search size={14} color="#aaa" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                      <input type="text" placeholder="Rechercher (CCNA, Python, AZ-104, IoT...)" value={query} onChange={e => setQuery(e.target.value)}
                        style={{ width: '100%', padding: '0.62rem 1rem 0.62rem 2.2rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', border: '1px solid rgba(187,187,187,0.5)', background: 'var(--g-white)', color: 'var(--g-black)', outline: 'none', boxSizing: 'border-box' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--g-red)')} onBlur={e => (e.target.style.borderColor = 'rgba(187,187,187,0.5)')} />
                    </div>
                    {hasFilter && <button onClick={reset} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-title)', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#888', background: 'transparent', border: '1px solid rgba(187,187,187,0.4)', padding: '0.55rem 1rem', cursor: 'pointer', whiteSpace: 'nowrap' }}><X size={12} /> Réinitialiser</button>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {[
                      { label: 'Modalité',   vals: ['Toutes','Présentiel','FOAD','E-learning'], state: fModalite, set: setFModalite },
                      { label: 'Territoire', vals: ['Tous','Martinique','Guadeloupe','Paris','Tous territoires'], state: fTerritoire, set: setFTerritoire, labels: {'Tous territoires':'FOAD / Partout'} },
                      { label: 'Éditeur',    vals: ['Tous','Cisco Networking Academy','Microsoft'], state: fEditeur, set: setFEditeur },
                      { label: 'Famille',    vals: familles, state: fFamille, set: setFFamille },
                    ].map(row => (
                      <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', flexShrink: 0, minWidth: '60px' }}>{row.label}</span>
                        {row.vals.map(v => <Pill key={v} label={(row as any).labels?.[v] ?? v} actif={row.state === v} onClick={() => row.set(v)} />)}
                      </div>
                    ))}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#aaa', flexShrink: 0, minWidth: '60px' }}>Formation</span>
                      <div style={{ position: 'relative' }}>
                        <select value={fFormation} onChange={e => setFFormation(e.target.value)}
                          style={{ appearance: 'none', fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.38rem 2rem 0.38rem 0.8rem', border: fFormation !== 'Toutes' ? '1px solid var(--g-red)' : '1px solid rgba(187,187,187,0.45)', background: fFormation !== 'Toutes' ? 'rgba(228,31,38,0.06)' : 'var(--g-white)', color: fFormation !== 'Toutes' ? 'var(--g-red)' : '#666', cursor: 'pointer' }}>
                          {titres.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <ChevronDown size={11} style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#888' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {prepResults.length > 0 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <CalendarClock size={16} color="#EF9F27" />
                      <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#EF9F27' }}>Sessions planifiées — {prepResults.length} session{prepResults.length > 1 ? 's' : ''}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>{prepResults.map(s => <SessionRow key={s.id} s={s} prep />)}</div>
                    <div style={{ height: '1px', background: 'rgba(187,187,187,0.25)', margin: '1.5rem 0' }} />
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <p style={{ fontSize: '0.80rem', color: '#888', margin: 0 }}><strong style={{ color: 'var(--g-black)' }}>{results.length}</strong> session{results.length > 1 ? 's' : ''} affichée{results.length > 1 ? 's' : ''}{hasFilter ? ' · filtres actifs' : ''}</p>
                  <a href="/financements" style={{ fontFamily: 'var(--font-title)', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-red)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Euro size={12} /> Financer ma formation →</a>
                </div>

                {results.length === 0 ? (
                  <div style={{ padding: '3rem 2rem', textAlign: 'center', border: '1px solid rgba(187,187,187,0.3)', background: 'var(--g-offwhite)' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.5rem' }}>Aucune session pour ces critères</div>
                    <p style={{ fontSize: '0.87rem', color: '#888', marginBottom: '1.5rem' }}>Toutes nos formations sont disponibles sur mesure à la demande.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <button onClick={reset} style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '0.6rem 1.25rem', border: '1px solid rgba(187,187,187,0.4)', background: 'transparent', color: '#666', cursor: 'pointer' }}>Voir toutes les sessions</button>
                      <a href="mailto:president@galactusdigital.com" className="btn-red" style={{ fontSize: '0.72rem' }}>Demander une session</a>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>{results.map(s => <SessionRow key={s.id} s={s} />)}</div>
                )}
                <p style={{ fontSize: '0.76rem', color: '#aaa', marginTop: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>* Dates confirmées sur devis. Prix HT — TVA non applicable. Devis sous 48h.</p>
              </>
            )}
          </div>
        </section>

        {/* Alternatives */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Vous ne trouvez pas la session souhaitée ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1.5rem' }}>
              {[ {titre:'Session intra-entreprise',desc:"Groupe à former ? Session sur mesure à vos dates et dans vos locaux.",href:'/presentiel#intra',cta:'En savoir plus'}, {titre:'FOAD synchrone',desc:"Toutes nos formations en live WEBEX depuis n'importe quel territoire.",href:'/foad',cta:'Voir la FOAD'}, {titre:'E-learning tutoré',desc:'Avancez à votre rythme sur NetAcad et Microsoft Learn avec un tuteur certifié.',href:'/elearning',cta:"Voir l'e-learning"} ].map(b => (
                <div key={b.titre} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.75rem' }}>{b.titre}</div>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.50)', marginBottom: '1.5rem' }}>{b.desc}</p>
                  <a href={b.href} className="btn-ghost" style={{ fontSize: '0.76rem' }}>{b.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--g-offwhite)', padding: '3rem 2rem', borderTop: '3px solid var(--g-red)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', marginBottom: '0.4rem' }}>Besoin d'informations sur une session ?</div>
              <p style={{ fontSize: '0.90rem', color: '#5a5a58', margin: 0, lineHeight: 1.7 }}>Notre équipe vous répond sous 24h.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost-dark"><Mail size={16} /> Nous écrire</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
