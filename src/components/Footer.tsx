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

function GalactusLogo() {
  return (
    <svg
      width="160"
      height="52"
      viewBox="0 0 160 52"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Galactus Digital"
    >
      {/* GALACTUS */}
      <text
        x="0"
        y="36"
        fontFamily="'Barlow Condensed', 'Agency FB', sans-serif"
        fontWeight="700"
        fontSize="36"
        letterSpacing="3"
        textAnchor="start"
        fill="#FFFFFF"
        textTransform="uppercase"
      >
        GALACTUS
      </text>

      {/* Ligne gauche */}
      <line x1="0" y1="46" x2="52" y2="46" stroke="#E41F26" strokeWidth="2" />

      {/* DIGITAL */}
      <text
        x="80"
        y="50"
        fontFamily="'Barlow Condensed', 'Agency FB', sans-serif"
        fontWeight="400"
        fontSize="9"
        letterSpacing="4"
        textAnchor="middle"
        fill="#E41F26"
      >
        DIGITAL
      </text>

      {/* Ligne droite */}
      <line x1="108" y1="46" x2="160" y2="46" stroke="#E41F26" strokeWidth="2" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">

          <div className="footer-brand-section">

            <a href="/" aria-label="Galactus Digital" style={{ textDecoration: 'none', marginBottom: '1.25rem', display: 'inline-block' }}>
              <GalactusLogo />
            </a>

            <p className="footer-tagline">
              L'ingénierie de formation certifiée IT aux Caraïbes.
              Formateurs experts, cours officiels éditeurs,
              présence sur 7 territoires.
            </p>

            <div style={{ background: '#FFFFFF', padding: '0.75rem', display: 'inline-block' }}>
              <img src="/qualiopi.jpg" alt="Certification Qualiopi" loading="lazy" />
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
