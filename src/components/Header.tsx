import { useState, useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { Menu, X, ChevronDown, Linkedin } from 'lucide-react'

const navLinks = [
  {
    label: 'Formations',
    href: '/#certifications',
    children: [
      { label: 'Microsoft Azure & M365', href: '/#certifications' },
      { label: 'Cisco CCNA / CCNP',      href: '/#certifications' },
      { label: 'IPv6 Forum',             href: '/#certifications' },
      { label: 'CompTIA Security+',      href: '/#certifications' },
      { label: 'EC-Council CEH',         href: '/#certifications' },
      { label: 'PMI / PMP',             href: '/#certifications' },
    ],
  },
  {
    label: 'Solutions',
    href: '/#services',
    children: [
      { label: '— Modalités de formation', href: '#', isHeading: true },
      { label: 'Formation en présentiel',     href: '/presentiel' },
      { label: 'Formation à distance (FOAD)', href: '/foad' },
      { label: 'E-learning tutoré',           href: '/elearning' },
      { label: '— Formats d\'organisation', href: '#', isHeading: true },
      { label: 'Intra-entreprise',  href: '/presentiel#intra' },
      { label: 'Inter-entreprise',  href: '/presentiel#inter' },
    ],
  },
  {
    label: 'Certifications',
    href: '/#certifications',
    children: [
      { label: 'Passer une certification', href: '/certifications' },
      { label: 'Calendrier des sessions',  href: '/calendrier' },
    ],
  },
  { label: 'Financements', href: '/financements' },
  {
    label: 'Qui Sommes-Nous',
    href: '/#president',
    children: [
      { label: 'Mot du Président',        href: '/#president' },
      { label: 'Notre expertise',         href: '/#expertise' },
      { label: 'Notre présence',          href: '/#presence' },
      { label: 'Nos Solutions',           href: '/#services' },
      { label: 'Satisfaction & Qualité',  href: '/#satisfaction' },
      { label: 'Ils nous font confiance', href: '/#clients' },
      { label: 'Nos résultats',           href: '/#resultats' },
      { label: 'Démarche pédagogique',    href: '/demarche-pedagogique' },
      { label: 'Démarche qualité',        href: '/demarche-qualite' },
      { label: 'Nos partenaires',         href: '/#partenaires' },
      { label: 'Actualités & Veille IT',  href: '/#actualites' },
      { label: 'Nos reconnaissances',     href: '/#awards' },
      { label: 'Notre engagement RSE',    href: '/#rse' },
      { label: 'Témoignages',             href: '/temoignages' },
      { label: 'Situation de handicap',   href: '/handicap' },
    ],
  },
]

function GalactusLogo() {
  return (
    <div style={{ display: 'inline-block' }}>
      <div style={{
        fontFamily: "'Barlow Condensed','Agency FB',sans-serif",
        fontWeight: 700, fontSize: '1.6rem', letterSpacing: '0.08em',
        textTransform: 'uppercase', color: '#FFFFFF', lineHeight: 1,
        marginBottom: '3px', whiteSpace: 'nowrap',
      }}>GALACTUS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '5px' }}>
        <div style={{ height: '2px', background: '#E41F26' }} />
        <span style={{
          fontFamily: "'Barlow Condensed','Agency FB',sans-serif",
          fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.22em',
          textTransform: 'uppercase', color: '#E41F26', whiteSpace: 'nowrap',
        }}>DIGITAL</span>
        <div style={{ height: '2px', background: '#E41F26' }} />
      </div>
    </div>
  )
}

export function Header() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
  const isInternalPage = location.pathname !== '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`site-nav${(scrolled || isInternalPage) ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="Galactus Digital — Accueil">
          <GalactusLogo />
        </a>
        <nav aria-label="Navigation principale">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.label} className="nav-item"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}>
                <a href={link.href} className="nav-link-item">
                  {link.label}
                  {link.children && <ChevronDown size={12} style={{ marginLeft: '3px' }} />}
                </a>
                {link.children && openDropdown === link.label && (
                  <ul className="nav-dropdown" role="menu">
                    {link.children.map(child => (
                      (child as any).isHeading ? (
                        <li key={child.label} style={{
                          padding: '0.55rem 1.1rem 0.2rem',
                          fontSize: '0.60rem',
                          fontWeight: 700,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: '#E41F26',
                          pointerEvents: 'none',
                          userSelect: 'none',
                        }}>
                          {child.label.replace('— ', '')}
                        </li>
                      ) : (
                        <li key={child.label} role="none">
                          <a href={child.href} className="nav-dropdown-item" role="menuitem">
                            {child.label}
                          </a>
                        </li>
                      )
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <a href="https://www.linkedin.com/company/119444115/" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn GALACTUS Digital"
            style={{ color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}>
            <Linkedin size={18} />
          </a>
          <a href="/#contact" className="btn-red nav-cta-btn"
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.78rem' }}>
            Nous Contacter
          </a>
        </div>
        <button className="nav-mobile-btn" onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={22} color="#E41F26" /> : <Menu size={22} color="#FFFFFF" />}
        </button>
      </div>

      <div className="nav-ticker">
        <div className="nav-ticker-inner">
          <span>🔴 Bientôt nos futures dates d'évènements</span>
        </div>
      </div>

      <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        {navLinks.map(link => (
          <div key={link.label}>
            <a href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
            {link.children?.map(child =>
              (child as any).isHeading ? (
                <div key={child.label} style={{
                  padding: '0.4rem 1rem 0.1rem',
                  fontSize: '0.60rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#E41F26',
                }}>
                  {child.label.replace('— ', '')}
                </div>
              ) : (
                <a key={child.label} href={child.href} className="sub-link"
                  onClick={() => setMobileOpen(false)}>{child.label}</a>
              )
            )}
          </div>
        ))}
        <a href="/#contact" className="btn-red"
          style={{ marginTop: '1rem', justifyContent: 'center' }}
          onClick={() => setMobileOpen(false)}>
          Nous Contacter
        </a>
      </div>
    </header>
  )
}
