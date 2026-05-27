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

            <a href="/" aria-label="Galactus Digital — Accueil">
              <img
                src="/galactus-icon.png"
                alt="Galactus Digital"
                style={{
                  height: '52px',
                  objectFit: 'contain',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              />
            </a>

            <p className="footer-tagline">
              L'ingénierie de formation certifiée IT aux Caraïbes.
              Formateurs experts, cours officiels éditeurs,
              présence sur 7 territoires.
            </p>

            <div className="qualiopi-block">
              <img
                src="/qualiopi.png"
                alt="Certification Qualiopi — Processus certifié"
                className="qualiopi-logo"
                loading="lazy"
              />
              <p className="qualiopi-text">
                Certification qualité délivrée au titre des actions de formation.
              </p>
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
