import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  {
    label: 'Formations',
    href: '/formations',
    children: [
      { label: 'Microsoft', href: '/formations/microsoft' },
      { label: 'Cisco', href: '/formations/cisco' },
      { label: 'AWS', href: '/formations/aws' },
      { label: 'CompTIA', href: '/formations/comptia' },
      { label: 'VMware', href: '/formations/vmware' },
    ]
  },
  {
    label: 'Certifications',
    href: '/certifications',
    children: [
      { label: 'Passer une certification', href: '/certifications/passer' },
      { label: 'Calendrier', href: '/certifications/calendrier' },
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Intra-entreprise', href: '/solutions/intra' },
      { label: 'Inter-entreprise', href: '/solutions/inter' },
      { label: 'Formation à distance', href: '/solutions/distance' },
    ]
  },
  {
    label: 'Financement',
    href: '/financement',
    children: [
      { label: 'CPF', href: '/financement/cpf' },
      { label: 'OPCO', href: '/financement/opco' },
      { label: 'Plan de formation', href: '/financement/plan' },
    ]
  },
  { label: 'Qui sommes-nous', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
                key={link.href}
                className="nav-item"
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href={link.href} className="nav-link-item">
                  {link.label}
                  {link.children && <ChevronDown size={14} style={{ marginLeft: '4px' }} />}
                </a>
                {link.children && openDropdown === link.href && (
                  <ul className="nav-dropdown">
                    {link.children.map(child => (
                      <li key={child.href}>
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
        <a href="/contact" className="btn-gold nav-cta-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.78rem' }}>
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
          <div key={link.href}>
            <a href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
            {link.children && (
              <div style={{ paddingLeft: '1rem' }}>
                {link.children.map(child => (
                  <a key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                    style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href="/contact" className="btn-gold" style={{ marginTop: '0.75rem', display: 'inline-flex', justifyContent: 'center' }}>
          Nous Contacter
        </a>
      </div>
    </header>
  )
}
