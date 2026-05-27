import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

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
]

function GalactusLogo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        fontFamily: "'Barlow Condensed', 'Agency FB', sans-serif",
        fontWeight: 700,
        fontSize: '1.6rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        lineHeight: 1,
        marginBottom: '3px',
      }}>
        GALACTUS
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        width: '100%',
        justifyContent: 'center',
      }}>
        <div style={{ flex: 1, height: '2px', background: '#E41F26' }} />
        <span style={{
          fontFamily: "'Barlow Condensed', 'Agency FB', sans-serif",
          fontWeight: 400,
          fontSize: '0.58rem',
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          color: '#E41F26',
          whiteSpace: 'nowrap',
        }}>
          DIGITAL
        </span>
        <div style={{ flex: 1, height: '2px', background: '#E41F26' }} />
      </div>
    </div>
  )
}

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

        <a href="/" className="nav-logo" aria-label="Galactus Digital — Accueil">
          <GalactusLogo />
        </a>

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

        <a href="#contact" className="btn-red nav-cta-btn"
          style={{ padding: '0.6rem 1.4rem', fontSize: '0.78rem' }}>
          Nous Contacter
        </a>

        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} color="#E41F26" /> : <Menu size={22} color="#FFFFFF" />}
        </button>
      </div>

      <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        {navLinks.map(link => (
          <div key={link.label}>
            <a href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
            {link.children?.map(child => (
              <a key={child.label} href={child.href} className="sub-link"
                onClick={() => setMobileOpen(false)}>
                {child.label}
              </a>
            ))}
          </div>
        ))}
        <a href="#contact" className="btn-red"
          style={{ marginTop: '1rem', justifyContent: 'center' }}
          onClick={() => setMobileOpen(false)}>
          Nous Contacter
        </a>
      </div>
    </header>
  )
}
