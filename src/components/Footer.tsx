  const navCols = [
  {
    title: 'Formations',
    links: [
      { label: 'Intra-Entreprise', href: '#services' },
      { label: 'Inter-Entreprise', href: '#services' },
      { label: 'Certifications IT', href: '#certifications' },
      { label: 'Calendrier des sessions', href: '#contact' },
    ],
  },
  {
    title: 'Éditeurs',
    links: [
      { label: 'Microsoft', href: '#certifications' },
      { label: 'Cisco', href: '#certifications' },
      { label: 'IPv6', href: '#certifications' },
      { label: 'CompTIA', href: '#certifications' },
    ],
  },
  {
    title: 'À Propos',
    links: [
      { label: 'Notre Expertise', href: '#expertise' },
      { label: 'Pourquoi Nous', href: '#pourquoi' },
      { label: 'Nos Experts', href: '#expertise' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          
          <div>
            <div className="footer-brand">
              GALACTUS Digital
              <span>Certifications IT · Caraïbes</span>
            </div>

            <p className="footer-tagline">
              L'ingénierie de formation certifiée IT aux Caraïbes.
              Formateurs experts, cours officiels éditeurs, présence sur 7 territoires.
            </p>

            {/* LOGO QUALIOPI */}
            <img
              src="/qualopi.png"
              alt="Certification Qualiopi"
              style={{
                width: '220px',
                marginTop: '20px',
                borderRadius: '8px',
              }}
            />
          </div>

          {navCols.map(col => (
            <div key={col.title}>
              <div className="footer-col-title">{col.title}</div>

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

          <span>
            <a href="#accueil">Mentions légales</a>
            {' · '}
            <a href="#accueil">Politique de confidentialité</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
