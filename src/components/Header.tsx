import { useState, useEffect, useRef } from 'react'
import { useLocation } from '@tanstack/react-router'
import { Menu, X, ChevronDown, ChevronRight, Linkedin } from 'lucide-react'
import { FORMATIONS, getFormationsParFamille } from '../data/catalogue'

// ─── Couleurs par famille ─────────────────────────────────────────────────────
const FC: Record<string, string> = {
  'Réseaux & CCNA':      '#E41F26',
  'Cybersécurité':       '#c0392b',
  'Programmation':       '#2980b9',
  'IoT':                 '#16a085',
  'Linux & Open Source': '#8e44ad',
  'Data & Analytics':    '#d35400',
  'Azure & Cloud':       '#0078D4',
  'Microsoft 365':       '#0078D4',
}
const NC: Record<string, string> = {
  'Fondamental':   '#27ae60',
  'Intermédiaire': '#e67e22',
  'Avancé':        '#E41F26',
}

const PAR_FAMILLE = getFormationsParFamille()
const FAMILLES = Object.keys(PAR_FAMILLE)

// ─── Logo ─────────────────────────────────────────────────────────────────────
function GalactusLogo() {
  return (
    <div style={{ display: 'inline-block' }}>
      <div style={{ fontFamily: "'Barlow Condensed','Agency FB',sans-serif", fontWeight: 700, fontSize: '1.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', lineHeight: 1, marginBottom: '3px', whiteSpace: 'nowrap' }}>GALACTUS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '5px' }}>
        <div style={{ height: '2px', background: '#E41F26' }} />
        <span style={{ fontFamily: "'Barlow Condensed','Agency FB',sans-serif", fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E41F26', whiteSpace: 'nowrap' }}>DIGITAL</span>
        <div style={{ height: '2px', background: '#E41F26' }} />
      </div>
    </div>
  )
}

// ─── Mega Menu ────────────────────────────────────────────────────────────────
function MegaMenu({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [famille, setFamille] = useState(FAMILLES[0])
  const formations = PAR_FAMILLE[famille] || []

  return (
    <div
      style={{
        position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-60%)',
        width: 'min(900px, 92vw)',
        background: '#141413',
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: '3px solid #E41F26',
        boxShadow: '0 32px 64px rgba(0,0,0,0.65)',
        display: visible ? 'grid' : 'none',
        gridTemplateColumns: '210px 1fr',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.15s',
      }}
      onMouseLeave={onClose}
    >
      {/* Gauche — familles */}
      <div style={{ background: 'rgba(0,0,0,0.30)', borderRight: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem', paddingBottom: '0.75rem' }}>
        <div style={{ padding: '0.6rem 1.1rem 0.5rem', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
          Catalogue formations
        </div>
        {FAMILLES.map(f => {
          const actif = famille === f
          const col = FC[f] || '#E41F26'
          const nb = PAR_FAMILLE[f].length
          return (
            <button key={f} onMouseEnter={() => setFamille(f)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '0.55rem 1.1rem',
                background: actif ? `${col}18` : 'transparent',
                borderLeft: actif ? `3px solid ${col}` : '3px solid transparent',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.12s',
              }}>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.76rem', fontWeight: actif ? 700 : 500, textTransform: 'uppercase', letterSpacing: '0.05em', color: actif ? '#fff' : 'rgba(255,255,255,0.45)', textAlign: 'left', lineHeight: 1.3 }}>{f}</span>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.58rem', fontWeight: 700, color: actif ? col : 'rgba(255,255,255,0.18)', background: actif ? `${col}22` : 'transparent', padding: '0.05rem 0.35rem', marginLeft: '0.4rem', flexShrink: 0 }}>{nb}</span>
            </button>
          )
        })}
        {/* Voir tout */}
        <div style={{ padding: '0.75rem 1.1rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '0.5rem' }}>
          <a href="/formations" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E41F26', textDecoration: 'none' }}>
            Tout le catalogue <ChevronRight size={10} />
          </a>
        </div>
      </div>

      {/* Droite — formations */}
      <div style={{ padding: '0.75rem 1rem' }}>
        {/* En-tête famille */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: FC[famille] || '#E41F26' }}>
            {famille} · {formations.length} formation{formations.length > 1 ? 's' : ''}
          </div>
          <a href={`/formations#${famille.toLowerCase().replace(/[^a-z]/g, '-')}`} onClick={onClose}
            style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}>
            Voir tout →
          </a>
        </div>

        {/* Grille formations */}
        <div style={{ display: 'grid', gridTemplateColumns: formations.length > 5 ? '1fr 1fr' : '1fr', gap: '2px' }}>
          {formations.map(f => (
            <a key={f.slug} href={`/formations/${f.slug}`} onClick={onClose}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', padding: '0.55rem 0.6rem', textDecoration: 'none', transition: 'background 0.1s', borderRadius: '1px' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              {/* Barre niveau */}
              <div style={{ flexShrink: 0, width: '3px', background: NC[f.niveau] || '#888', alignSelf: 'stretch', minHeight: '24px', opacity: 0.8 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', lineHeight: 1.2, marginBottom: '0.15rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {f.titre}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {f.examCode !== 'Certificat Cisco NetAcad' ? `${f.examCode} · ` : ''}{f.duree}
                </div>
              </div>
              {/* Prix si renseigné */}
              {f.prix.elearning !== null && (
                <div style={{ flexShrink: 0, fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.62rem', fontWeight: 700, color: '#E41F26', background: 'rgba(228,31,38,0.10)', padding: '0.1rem 0.4rem', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                  dès {f.prix.elearning!.toLocaleString('fr-FR')} €
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Footer méga menu */}
        <div style={{ marginTop: '0.75rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'Calendrier des sessions', href: '/calendrier' },
            { label: 'Financer ma formation', href: '/financements' },
            { label: 'Présentiel', href: '/presentiel' },
            { label: 'FOAD', href: '/foad' },
            { label: 'E-learning tutoré', href: '/elearning' },
          ].map(l => (
            <a key={l.label} href={l.href} onClick={onClose}
              style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.30)', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.30)')}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Nav links hors Formations ────────────────────────────────────────────────
const NAV_LINKS = [
  {
    label: 'Solutions', href: '/#services',
    children: [
      { label: '— Modalités de formation', isHeading: true },
      { label: 'Formation en présentiel',      href: '/presentiel' },
      { label: 'Formation à distance (FOAD)',  href: '/foad' },
      { label: 'E-learning tutoré',            href: '/elearning' },
      { label: "— Formats d'organisation",     isHeading: true },
      { label: 'Inter-entreprise',             href: '/presentiel#inter' },
      { label: 'Intra-entreprise',             href: '/presentiel#intra' },
    ],
  },
  {
    label: 'Certifications', href: '/certifications',
    children: [
      { label: 'Passer une certification', href: '/certifications' },
      { label: 'Certifications IT',        href: '/formations' },
    ],
  },
  { label: 'Calendrier', href: '/calendrier' },
  { label: 'Financements', href: '/financements' },
  {
    label: 'Qui Sommes-Nous', href: '/#president',
    children: [
      { label: 'Mot du Président',        href: '/#president' },
      { label: 'Notre expertise',         href: '/#expertise' },
      { label: 'Notre présence',          href: '/#presence' },
      { label: 'Nos solutions',           href: '/#services' },
      { label: 'Satisfaction & Qualité',  href: '/#satisfaction' },
      { label: 'Ils nous font confiance', href: '/#clients' },
      { label: 'Nos résultats',           href: '/#resultats' },
      { label: 'Nos partenaires',         href: '/#partenaires' },
      { label: 'Pourquoi Nous Choisir',   href: '/#pourquoi' },
      { label: 'Actualités & Veille IT',  href: '/#actualites' },
      { label: 'Nos reconnaissances',     href: '/#awards' },
      { label: 'Notre engagement RSE',    href: '/#rse' },
      { label: 'Démarche pédagogique',    href: '/demarche-pedagogique' },
      { label: 'Démarche qualité',        href: '/demarche-qualite' },
      { label: 'Témoignages',             href: '/temoignages' },
      { label: 'Situation de handicap',   href: '/handicap' },
    ],
  },
]

// ─── Export ───────────────────────────────────────────────────────────────────
export function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [dropdown,    setDropdown]    = useState<string | null>(null)
  const [megaVisible, setMegaVisible] = useState(false)
  const [mobileFamille, setMobileFamille] = useState<string | null>(null)
  const location = useLocation()
  const isInternal = location.pathname !== '/'

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`site-nav${(scrolled || isInternal) ? ' scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <a href="/" className="nav-logo" aria-label="Galactus Digital — Accueil">
          <GalactusLogo />
        </a>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale">
          <ul className="nav-links">

            {/* ── Formations (méga menu) ── */}
            <li className="nav-item" style={{ position: 'relative' }}
              onMouseEnter={() => setMegaVisible(true)}
              onMouseLeave={() => setMegaVisible(false)}>
              <a href="/formations" className="nav-link-item">
                Formations
                <ChevronDown size={12} style={{ marginLeft: '3px', transition: 'transform 0.2s', transform: megaVisible ? 'rotate(180deg)' : 'none' }} />
              </a>
              <MegaMenu visible={megaVisible} onClose={() => setMegaVisible(false)} />
            </li>

            {/* ── Autres liens ── */}
            {NAV_LINKS.map(link => (
              <li key={link.label} className="nav-item"
                onMouseEnter={() => link.children && setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}>
                <a href={link.href} className="nav-link-item">
                  {link.label}
                  {link.children && <ChevronDown size={12} style={{ marginLeft: '3px' }} />}
                </a>
                {link.children && dropdown === link.label && (
                  <ul className="nav-dropdown" role="menu">
                    {link.children.map((child: any) =>
                      child.isHeading ? (
                        <li key={child.label} style={{ padding: '0.55rem 1.1rem 0.2rem', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E41F26', pointerEvents: 'none', userSelect: 'none' }}>
                          {child.label.replace('— ', '')}
                        </li>
                      ) : (
                        <li key={child.label} role="none">
                          <a href={child.href} className="nav-dropdown-item" role="menuitem">{child.label}</a>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <a href="https://www.linkedin.com/company/119444115/" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn GALACTUS Digital"
            style={{ color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}>
            <Linkedin size={18} />
          </a>
          <a href="/#contact" className="btn-red nav-cta-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.78rem' }}>
            Nous Contacter
          </a>
        </div>

        <button className="nav-mobile-btn" onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={22} color="#E41F26" /> : <Menu size={22} color="#fff" />}
        </button>
      </div>


      {/* Ticker */}
      <div className="nav-ticker">
        <div className="nav-ticker-inner">
          <span>🔴 Site test pas encore en production</span>
        </div>
      </div>

      {/* ── Menu mobile ── */}
      <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>

        {/* Formations accordéon */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
            onClick={() => setMobileFamille(mobileFamille ? null : FAMILLES[0])}>
            <a href="/formations" style={{ pointerEvents: 'none' }}>Formations</a>
            <ChevronDown size={14} color="#E41F26" style={{ transform: mobileFamille ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
          </div>
          {mobileFamille && (
            <div style={{ paddingLeft: '0.5rem' }}>
              {FAMILLES.map(f => (
                <div key={f}>
                  <div style={{ padding: '0.35rem 1rem 0.1rem', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: FC[f] || '#E41F26' }}>
                    {f}
                  </div>
                  {PAR_FAMILLE[f].map(formation => (
                    <a key={formation.slug} href={`/formations/${formation.slug}`} className="sub-link"
                      onClick={() => setMobileOpen(false)}>
                      {formation.titre}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Autres */}
        {NAV_LINKS.map(link => (
          <div key={link.label}>
            <a href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
            {link.children?.map((child: any) =>
              child.isHeading ? (
                <div key={child.label} style={{ padding: '0.4rem 1rem 0.1rem', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E41F26' }}>
                  {child.label.replace('— ', '')}
                </div>
              ) : (
                <a key={child.label} href={child.href} className="sub-link" onClick={() => setMobileOpen(false)}>
                  {child.label}
                </a>
              )
            )}
          </div>
        ))}

        <a href="/#contact" className="btn-red" style={{ marginTop: '1rem', justifyContent: 'center' }}
          onClick={() => setMobileOpen(false)}>
          Nous Contacter
        </a>
      </div>
    </header>
  )
}
