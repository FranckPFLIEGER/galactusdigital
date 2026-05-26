import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

// ─────────────────────────────────────────────
// CHARTE GRAPHIQUE GALACTUS DIGITAL 2020
// Couleurs officielles :
//   Noir   : #1D1D1B  (PANTONE Process Black C)
//   Gris   : #BBBBBB  (PANTONE Cool Gray 4C)
//   Rouge  : #E41F26  (PANTONE P 48-8C)
// Polices : Agency FB (titres) / Avenir Book (corps)
//           → substituts web : Barlow Condensed / Nunito
// ─────────────────────────────────────────────

const navLinks = [
  {
    label: 'Formations',
    href: '#certifications',
    children: [
      { label: 'Microsoft',   href: '#certifications' },
      { label: 'Cisco',       href: '#certifications' },
      { label: 'CompTIA',     href: '#certifications' },
      { label: 'IPv6 Forum',  href: '#certifications' },
      { label: 'EC-Council',  href: '#certifications' },
      { label: 'PMI',         href: '#certifications' },
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
      { label: 'Intra-Entreprise',          href: '#services' },
      { label: 'Inter-Entreprise',          href: '#services' },
      { label: 'Calendrier des sessions',   href: '/calendrier' },
    ],
  },
  {
    label: 'Financement',
    href: '#contact',
    children: [
      { label: 'CPF',              href: '/financement/cpf' },
      { label: 'OPCO',             href: '/financement/opco' },
      { label: 'Plan de formation', href: '/financement/plan' },
    ],
  },
  { label: 'Expertise',     href: '#expertise' },
  { label: 'Pourquoi Nous', href: '#pourquoi' },
  { label: 'Contact',       href: '#contact' },
]

// ── Logo SVG inline (icône G pixelisé + wordmark) ──────────────────────────
// Sur fond clair : version 3 couleurs (noir + gris + rouge)
// Sur fond foncé : texte blanc, icône variante blanche (géré via CSS)
function GalactusLogo({ dark = false }: { dark?: boolean }) {
  const textColor  = dark ? '#FFFFFF' : '#1D1D1B'
  const accentColor = '#E41F26'
  const squareBg   = dark ? '#FFFFFF' : '#BBBBBB'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 64"
      height="48"
      aria-label="Galactus Digital"
      style={{ display: 'block' }}
    >
      {/* ── Carré gris ── */}
      <rect x="0" y="4" width="56" height="56" fill={squareBg} />

      {/* ── G stylisé (noir) ── */}
      <text
        x="10" y="48"
        fontFamily="'Barlow Condensed', 'Agency FB', sans-serif"
        fontWeight="700"
        fontSize="44"
        fill={dark ? '#1D1D1B' : '#1D1D1B'}
        letterSpacing="-2"
      >G</text>

      {/* ── Pixels dispersés (effet pixelisation) en rouge ── */}
      <rect x="30" y="4"  width="6" height="6" fill={accentColor} />
      <rect x="38" y="8"  width="4" height="4" fill={accentColor} opacity="0.8" />
      <rect x="44" y="4"  width="4" height="4" fill={accentColor} opacity="0.6" />
      <rect x="50" y="10" width="3" height="3" fill={accentColor} opacity="0.4" />
      <rect x="36" y="2"  width="3" height="3" fill={accentColor} opacity="0.5" />

      {/* ── Arc rouge (demi-cercle décoratif) ── */}
      <path d="M8 52 Q28 20 50 40" stroke={accentColor} strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* ── Wordmark GALACTUS ── */}
      <text
        x="68" y="36"
        fontFamily="'Barlow Condensed', 'Agency FB', sans-serif"
        fontWeight="700"
        fontSize="26"
        fill={textColor}
        letterSpacing="2"
      >GALACTUS</text>

      {/* ── Double ligne rouge ── */}
      <line x1="68" y1="42" x2="218" y2="42" stroke={accentColor} strokeWidth="2.5" />
      <line x1="68" y1="47" x2="218" y2="47" stroke={accentColor} strokeWidth="1" opacity="0.5" />

      {/* ── Baseline DIGITAL ── */}
      <text
        x="143" y="58"
        fontFamily="'Barlow Condensed', 'Agency FB', sans-serif"
        fontWeight="400"
        fontSize="11"
        fill={accentColor}
        letterSpacing="5"
        textAnchor="middle"
      >DIGITAL</text>
    </svg>
  )
}

// ── Styles injectés (CSS-in-JS minimal, pas de dépendance externe) ─────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Nunito:wght@400;600&display=swap');

  /* ── Variables charte ── */
  :root {
    --g-black  : #1D1D1B;
    --g-gray   : #BBBBBB;
    --g-red    : #E41F26;
    --g-white  : #FFFFFF;
    --g-font-title : 'Barlow Condensed', 'Agency FB', sans-serif;
    --g-font-body  : 'Nunito', 'Avenir', Arial, sans-serif;
  }

  /* ── Header ── */
  .g-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: var(--g-white);
    border-bottom: 2px solid transparent;
    transition: border-color 0.25s, box-shadow 0.25s;
    font-family: var(--g-font-body);
  }
  .g-header.scrolled {
    border-bottom-color: var(--g-red);
    box-shadow: 0 2px 12px rgba(29,29,27,0.10);
  }

  /* ── Header sur fond sombre (variante) ── */
  .g-header.dark-bg {
    background: var(--g-black);
  }

  /* ── Inner layout ── */
  .g-nav-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 72px;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  /* ── Logo : espace de sécurité = hauteur X des caractères ── */
  .g-nav-logo {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 4px;          /* espace de sécurité minimal */
    text-decoration: none;
  }

  /* ── Nav links ── */
  .g-nav-links {
    display: flex;
    align-items: center;
    gap: 0;
    list-style: none;
    margin: 0 auto 0 2rem;
    padding: 0;
    flex-wrap: wrap;
  }
  .g-nav-item {
    position: relative;
  }
  .g-nav-link {
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 0.5rem 0.9rem;
    font-family: var(--g-font-title);
    font-weight: 400;
    font-size: 0.88rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--g-black);
    text-decoration: none;
    transition: color 0.18s;
    white-space: nowrap;
  }
  .g-nav-link:hover,
  .g-nav-link:focus {
    color: var(--g-red);
  }

  /* ── Dropdown ── */
  .g-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 210px;
    background: var(--g-black);
    border-top: 2px solid var(--g-red);
    list-style: none;
    margin: 0;
    padding: 0.4rem 0;
    box-shadow: 0 6px 20px rgba(29,29,27,0.18);
    z-index: 200;
  }
  .g-dropdown a {
    display: block;
    padding: 0.55rem 1.2rem;
    font-family: var(--g-font-body);
    font-size: 0.82rem;
    color: var(--g-white);
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: color 0.15s, background 0.15s;
  }
  .g-dropdown a:hover {
    color: var(--g-red);
    background: rgba(228,31,38,0.08);
  }

  /* ── CTA Button (rouge, conforme charte) ── */
  .g-btn-red {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    padding: 0.55rem 1.4rem;
    background: var(--g-red);
    color: var(--g-white);
    font-family: var(--g-font-title);
    font-size: 0.78rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s, opacity 0.2s;
    white-space: nowrap;
  }
  .g-btn-red:hover {
    background: var(--g-black);
    opacity: 1;
  }

  /* ── Burger mobile ── */
  .g-mobile-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--g-black);
    padding: 0.4rem;
    margin-left: auto;
  }

  /* ── Menu mobile ── */
  .g-mobile-menu {
    display: none;
    flex-direction: column;
    background: var(--g-black);
    padding: 1rem 1.5rem 1.5rem;
    gap: 0.1rem;
    border-top: 2px solid var(--g-red);
  }
  .g-mobile-menu.open {
    display: flex;
  }
  .g-mobile-menu a {
    display: block;
    padding: 0.55rem 0;
    font-family: var(--g-font-title);
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--g-white);
    text-decoration: none;
    border-bottom: 1px solid rgba(187,187,187,0.12);
    transition: color 0.15s;
  }
  .g-mobile-menu a:hover { color: var(--g-red); }
  .g-mobile-menu .sub-link {
    font-family: var(--g-font-body);
    font-size: 0.78rem;
    letter-spacing: 0.05em;
    text-transform: none;
    color: var(--g-gray);
    opacity: 0.85;
  }

  @media (max-width: 900px) {
    .g-nav-links, .g-btn-red { display: none; }
    .g-mobile-btn { display: flex; }
  }
`

// ── Composant Header ──────────────────────────────────────────────────────
export function Header() {
  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [openDropdown,  setOpenDropdown]  = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* ── Injection CSS charte ── */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <header className={`g-header${scrolled ? ' scrolled' : ''}`}>
        <div className="g-nav-inner">

          {/* ── Logo officiel (SVG inline) ── */}
          <a href="/" className="g-nav-logo" aria-label="Galactus Digital — Accueil">
            <GalactusLogo dark={false} />
          </a>

          {/* ── Navigation desktop ── */}
          <nav aria-label="Navigation principale">
            <ul className="g-nav-links">
              {navLinks.map(link => (
                <li
                  key={link.label}
                  className="g-nav-item"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a href={link.href} className="g-nav-link">
                    {link.label}
                    {link.children && <ChevronDown size={12} />}
                  </a>

                  {link.children && openDropdown === link.label && (
                    <ul className="g-dropdown" role="menu">
                      {link.children.map(child => (
                        <li key={child.label} role="none">
                          <a href={child.href} role="menuitem">
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

          {/* ── CTA : rouge conforme charte (suppression du btn-gold) ── */}
          <a href="#contact" className="g-btn-red">
            Nous Contacter
          </a>

          {/* ── Burger mobile ── */}
          <button
            className="g-mobile-btn"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} color="#E41F26" /> : <Menu size={22} color="#1D1D1B" />}
          </button>
        </div>

        {/* ── Menu mobile ── */}
        <div className={`g-mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
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

          {/* CTA mobile */}
          <a
            href="#contact"
            className="g-btn-red"
            style={{ marginTop: '1rem', justifyContent: 'center' }}
            onClick={() => setMobileOpen(false)}
          >
            Nous Contacter
          </a>
        </div>
      </header>
    </>
  )
}
