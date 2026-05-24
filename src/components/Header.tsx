import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Pourquoi Nous', href: '#pourquoi' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          Archipel Formation
          <span>Certifications IT · Caraïbes</span>
        </a>

        <nav aria-label="Navigation principale">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="nav-link-item">{link.label}</a>
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
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-gold" style={{ marginTop: '0.75rem', display: 'inline-flex', justifyContent: 'center' }}>
          Nous Contacter
        </a>
      </div>
    </header>
  )
}
