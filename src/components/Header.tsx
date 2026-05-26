import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  {
    label: 'Formations',
    href: '#certifications',
    children: [
      { label: 'Microsoft', href: '#certifications' },
      { label: 'Cisco', href: '#certifications' },
      { label: 'CompTIA', href: '#certifications' },
      { label: 'IPv6 Forum', href: '#certifications' },
      { label: 'EC-Council', href: '#certifications' },
      { label: 'PMI', href: '#certifications' },
    ]
  },
  {
    label: 'Certifications',
    href: '#certifications',
    children: [
      { label: 'Passer une certification', href: '/certifications/passer' },
      { label: 'Certifications IT', href: '/certifications' },
    ]
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Intra-Entreprise', href: '#services' },
      { label: 'Inter-Entreprise', href: '#services' },
      { label: 'Calendrier des sessions', href: '/calendrier' },
    ]
  },
  {
    label: 'Financement',
    href: '#contact',
    children: [
      { label: 'CPF', href: '/financement/cpf' },
      { label: 'OPCO', href: '/financement/opco' },
      { label: 'Plan de formation', href: '/financement/plan' },
    ]
  },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Pourquoi Nous', href: '#pourquoi' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          GALACTUS Digital
          <span>Certifications IT · Caraïbes</span>
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
                  {link.children && <ChevronDown size={14} style={{ marginLeft: '4px' }} />}
                </a>
                {link.children && openDropdown === link.label && (
                  <ul className="nav-dropdown">
                    {link.children.map(child => (
                      <li key={child.label}>
                        <a href={child.href} className="nav-dropdown-item">
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
        <a href="#contact" className="btn-gold nav-cta-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.78rem' }}>
          Nous Contacter
        </a>
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <div key={link.label}>
            <a href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
            {link.children && (
              <div style={{ paddingLeft: '1rem' }}>
                {link.children.map(child => (
                  <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)}
                    style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href="#contact" className="btn-gold" style={{ marginTop: '0.75rem', display: 'inline-flex', justifyContent: 'center' }}>
          Nous Contacter
        </a>
      </div>
    </header>
  )
}
