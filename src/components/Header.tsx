import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

// ═══════════════════════════════════════════════════════
// CHARTE GRAPHIQUE GALACTUS DIGITAL 2020
// Couleurs : #1D1D1B (noir) · #BBBBBB (gris) · #E41F26 (rouge)
// Polices  : Barlow Condensed (titres) · Nunito (corps)
// Logo     : icône officielle ICONE.png (fond transparent)
// ═══════════════════════════════════════════════════════

const navLinks = [
  {
    label: 'Formations',
    href: '#certifications',
    children: [
      { label: 'Microsoft',  href: '#certifications' },
      { label: 'Cisco',      href: '#certifications' },
      { label: 'CompTIA',    href: '#certifications' },
      { label: 'IPv6 Forum', href: '#certifications' },
      { label: 'EC-Council', href: '#certifications' },
      { label: 'PMI',        href: '#certifications' },
    ],
  },
  {
    label: 'Certifications',
    href: '#certifications',
    children: [
      { label: 'Passer une certification', href: '/certifications/passer' },
      { label: 'Certifications IT',        href: '/certifications' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Intra-Entreprise',        href: '#services' },
      { label: 'Inter-Entreprise',        href: '#services' },
      { label: 'Calendrier des sessions', href: '/calendrier' },
    ],
  },
  {
    label: 'Financement',
    href: '#contact',
    children: [
      { label: 'CPF',               href: '/financement/cpf' },
      { label: 'OPCO',              href: '/financement/opco' },
      { label: 'Plan de formation', href: '/financement/plan' },
    ],
  },
  { label: 'Expertise',     href: '#expertise' },
  { label: 'Pourquoi Nous', href: '#pourquoi' },
  { label: 'Contact',       href: '#contact' },
]

// ── Logo officiel ────────────────────────────────────────
// Placez galactus-icon.png (fond transparent) dans /public/images/
// Le fichier PNG est fourni séparément (galactus-icon.png)
function GalactusLogo({ dark = false }: { dark?: boolean }) {
  const textColor   = dark ? '#FFFFFF' : '#FFFFFF' // toujours blanc sur nav sombre
  const accentColor = '#E41F26'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

      {/* Icône officielle (PNG fond transparent) */}
      <img
        src="../images/galactus-icon.png"
        alt=""
        aria-hidden="true"
        style={{
          height: '48px',
          width:  '48px',
          objectFit: 'contain',
          display: 'block',
          flexShrink: 0,
        }}
      />

      {/* Wordmark + double ligne rouge + DIGITAL */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 158 52"
        height="44"
        aria-hidden="true"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* GALACTUS */}
        <text
          x="0" y="28"
          fontFamily="'Barlow Condensed', 'Agency FB', sans-serif"
          fontWeight="700"
          fontSize="28"
          fill={textColor}
          letterSpacing="2"
        >GALACTUS</text>

        {/* Double ligne rouge — élément graphique charte */}
        <line x1="0"   y1="34" x2="158" y2="34" stroke={accentColor} strokeWidth="2.5" />
        <line x1="0"   y1="39" x2="158" y2="39" stroke={accentColor} strokeWidth="1" opacity="0.5" />

        {/* DIGITAL */}
        <text
          x="79" y="50"
          fontFamily="'Barlow Condensed', 'Agency FB', sans-serif"
          fontWeight="400"
          fontSize="10"
          fill={accentColor}
          letterSpacing="5"
          textAnchor="middle"
        >DIGITAL</text>
      </svg>
    </div>
  )
}

// ── Header ───────────────────────────────────────────────
export function Header() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo officiel */}
        <a href="/" className="nav-logo" aria-label="Galactus Digital — Accueil">
          <GalactusLogo />
        </a>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li
                key={link.label}
                className="nav-item"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href={link.href} className="nav-link-item">
                  {link.label}
                  {link.children && <ChevronDown size={12} style={{ marginLeft: '3px' }} />}
                </a>

                {link.children && openDropdown === link.label && (
                  <ul className="nav-dropdown" role="menu">
                    {link.children.map(child => (
                      <li key={child.label} role="none">
                        <a href={child.href} className="nav-dropdown-item" role="menuitem">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA rouge — conforme charte (remplace btn-gold) */}
        <a href="#contact" className="btn-red nav-cta-btn"
          style={{ padding: '0.6rem 1.4rem', fontSize: '0.78rem' }}>
          Nous Contacter
        </a>

        {/* Burger mobile */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen
            ? <X    size={22} color="#E41F26" />
            : <Menu size={22} color="#FFFFFF" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        {navLinks.map(link => (
          <div key={link.label}>
            <a href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
            {link.children?.map(child => (
              <a
                key={child.label}
                href={child.href}
                className="sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {child.label}
              </a>
            ))}
          </div>
        ))}
        <a
          href="#contact"
          className="btn-red"
          style={{ marginTop: '1rem', justifyContent: 'center' }}
          onClick={() => setMobileOpen(false)}
        >
          Nous Contacter
        </a>
      </div>
    </header>
  )
}
