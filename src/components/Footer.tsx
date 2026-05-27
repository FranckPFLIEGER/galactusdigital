const navCols = [
  {
    title: 'Formations',
    links: [
      { label: 'Intra-Entreprise',        href: '#services' },
      { label: 'Inter-Entreprise',        href: '#services' },
      { label: 'Certifications IT',       href: '#certifications' },
      { label: 'Calendrier des sessions', href: '#contact' },
    ],
  },
  {
    title: 'Éditeurs',
    links: [
      { label: 'Microsoft',  href: '#certifications' },
      { label: 'Cisco',      href: '#certifications' },
      { label: 'IPv6 Forum', href: '#certifications' },
      { label: 'CompTIA',    href: '#certifications' },
    ],
  },
  {
    title: 'À Propos',
    links: [
      { label: 'Notre Expertise', href: '#expertise' },
      { label: 'Pourquoi Nous',  href: '#pourquoi' },
      { label: 'Nos Experts',    href: '#expertise' },
      { label: 'Contact',        href: '#contact' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">

          <div className="footer-brand-section">

            {/* ✓ Logo identique au header */}
            <a href="/" aria-label="Galactus Digital" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}>
              <div style={{
                fontFamily: "'Barlow Condensed', 'Agency FB', sans-serif",
                fontWeight: 700,
                fontSize: '2rem',
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
                justifyContent: 'center',
              }}>
                <div style={{ width: '28px', height: '2px', background: '#E41F26' }} />
                <span style={{
                  fontFamily: "'Barlow Condensed', 'Agency FB', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.60rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#E41F26',
                  whiteSpace: 'nowrap',
                }}>
                  DIGITAL
                </span>
                <div style={{ width: '28px', height: '2px', background: '#E41F26' }} />
              </div>
            </a>

            <p className="footer-tagline">
              L'ingénierie de formation certifiée IT aux Caraïbes.
              Formateurs experts, cours officiels éditeurs,
              présence sur 7 territoires.
            </p>

            {/* ✓ Qualiopi original sans transformation */}
            <div style={{
              background: '#FFFFFF',
              padding: '0.75rem 1rem',
              display: 'inline-block',
            }}>
              <img
                src="/qualiopi.jpg"
                alt="Certification Qualiopi"
                style={{ height: '60px', width: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>

          </div>

          {navCols.map(col => (
            <div key={col.title}>
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="footer-bottom">
          <span>© {year} GALACTUS Digital. Tous droits réservés.</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#accueil">Mentions légales</a>
            <span>·</span>
            <a href="#accueil">Politique de confidentialité</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
