 import { useState } from 'react'

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
      { label: 'IPv6 Forum', href: '#certifications' },
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
  const [showLegal, setShowLegal] = useState(false)

  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner">

          <div className="footer-top">

            {/* Bloc identité */}
            <div className="footer-brand-section">

              <div className="footer-brand">
                GALACTUS Digital
                <span>Certifications IT · Caraïbes</span>
              </div>

              <p className="footer-tagline">
                L'ingénierie de formation certifiée IT aux Caraïbes.
                Formateurs experts, cours officiels éditeurs,
                présence sur 7 territoires.
              </p>

              <img
                src="../qualiopi.jpg"
                alt="Certification Qualiopi"
                className="qualiopi-logo"
                loading="lazy"
              />
            </div>

            {/* Navigation */}
            {navCols.map((col) => (
              <div key={col.title}>
                <h4 className="footer-col-title">
                  {col.title}
                </h4>

                <ul className="footer-links">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bas footer */}
          <div className="footer-bottom">

            <span>
              © {year} GALACTUS Digital. Tous droits réservés.
            </span>

            <div className="footer-legal">

              <button
                onClick={() => setShowLegal(true)}
                className="footer-link-button"
              >
                Mentions légales
              </button>

              <span>·</span>

              <a href="#accueil">
                Politique de confidentialité
              </a>

            </div>

          </div>

        </div>
      </footer>

      {/* POPUP MENTIONS LÉGALES */}
      {showLegal && (
        <div
          className="legal-overlay"
          onClick={() => setShowLegal(false)}
        >
          <div
            className="legal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setShowLegal(false)}
            >
              ✕
            </button>

            <h2>Mentions légales</h2>

            <p>
              <strong>GALACTUS Digital</strong><br />
              Organisme de formation spécialisé en certifications IT
              dans les Caraïbes.
            </p>

            <p>
              Email : contact@galactusdigital.com
            </p>

            <p>
              Hébergement : GitHub Pages / Cloudflare Pages
            </p>

            <p>
              Toutes les informations présentes sur ce site sont fournies
              à titre informatif.
            </p>

          </div>
        </div>
      )}
    </>
  )
}
