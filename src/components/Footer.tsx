import { Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

function GalactusLogo() {
  return (
    <div style={{ display: 'inline-block' }}>
      <div style={{
        fontFamily: "'Barlow Condensed','Agency FB',sans-serif",
        fontWeight: 700,
        fontSize: '2.2rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        lineHeight: 1,
        marginBottom: '3px',
        whiteSpace: 'nowrap',
      }}>GALACTUS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '5px' }}>
        <div style={{ height: '2px', background: '#E41F26' }} />
        <span style={{
          fontFamily: "'Barlow Condensed','Agency FB',sans-serif",
          fontWeight: 400,
          fontSize: '0.58rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#E41F26',
          whiteSpace: 'nowrap',
        }}>DIGITAL</span>
        <div style={{ height: '2px', background: '#E41F26' }} />
      </div>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">

          {/* ── Colonne 1 — Logo + Qualiopi ── */}
          <div className="footer-brand-section">

            <a href="/" aria-label="Galactus Digital — Accueil"
              style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}>
              <GalactusLogo />
            </a>

            {/* Tagline */}
            <p className="footer-tagline">
              L'ingénierie de formation certifiante IT<br />des territoires ultramarins.
            </p>

            {/* LinkedIn */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
              <a href="https://www.linkedin.com/company/119444115/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn GALACTUS Digital"
                className="footer-social-link">
                <Linkedin size={18} />
              </a>
            </div>

            {/* Qualiopi — logo officiel complet sur fond blanc */}
            <div style={{
              display: 'inline-block',
              background: '#FFFFFF',
              padding: '0.65rem 0.85rem',
              borderLeft: '3px solid #E41F26',
              maxWidth: '200px',
            }}>
              <img
                src="/qualiopi.jpg"
                alt="Certification Qualiopi — Processus certifié République Française — Actions de formation"
                loading="lazy"
                //style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>

          </div>

          {/* ── Colonne 2 — Formations ── */}
          <div>
            <h4 className="footer-col-title">Formations</h4>
            <ul className="footer-links">
              <li><a href="/#certifications">Microsoft Azure &amp; M365</a></li>
              <li><a href="/#certifications">Cisco CCNA / CCNP</a></li>
              <li><a href="/#certifications">IPv6 Forum</a></li>
              <li><a href="/#certifications">CompTIA Security+</a></li>
              <li><a href="/#certifications">EC-Council CEH</a></li>
              <li><a href="/certifications">Passer une certification</a></li>
              <li><a href="/calendrier">Calendrier des sessions</a></li>
              <li><a href="/financements">Guide du financement</a></li>
            </ul>
          </div>

          {/* ── Colonne 3 — Solutions + À propos ── */}
          <div>
            <h4 className="footer-col-title">Solutions</h4>
            <ul className="footer-links">
              <li><a href="/presentiel">Formation en présentiel</a></li>
              <li><a href="/foad">Formation à distance (FOAD)</a></li>
              <li><a href="/intra">Formation intra-entreprise</a></li>
              <li><a href="/inter">Formation inter-entreprise</a></li>
            </ul>
            <h4 className="footer-col-title" style={{ marginTop: '1rem' }}>À Propos</h4>
            <ul className="footer-links">
              <li><a href="/#president">Mot du Président</a></li>
              <li><a href="/#expertise">Notre expertise</a></li>
              <li><a href="/#presence">Notre présence</a></li>
              <li><a href="/#services">Nos Solutions</a></li>
              <li><a href="/demarche-pedagogique">Démarche pédagogique</a></li>
              <li><a href="/demarche-qualite">Démarche qualité</a></li>
              <li><a href="/#satisfaction">Satisfaction</a></li>
              <li><a href="/#clients">Ils nous font confiance</a></li>
              <li><a href="/#resultats">Nos résultats</a></li>
              <li><a href="/#partenaires">Nos partenaires</a></li>
              <li><a href="/#awards">Nos reconnaissances</a></li>
              <li><a href="/#actualites">Actualités &amp; Veille IT</a></li>
              <li><a href="/temoignages">Témoignages</a></li>
              <li><a href="/#rse">Notre engagement RSE</a></li>
              <li><a href="/handicap">Accessibilité &amp; Handicap</a></li>
            </ul>
          </div>

          {/* ── Colonne 4 — Contact & Légal ── */}
          <div>
            <h4 className="footer-col-title">Contact &amp; Légal</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:president@galactusdigital.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} style={{ flexShrink: 0, color: '#E41F26' }} />
                  president@galactusdigital.com
                </a>
              </li>
              <li>
                <a href="tel:+33781074746"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} style={{ flexShrink: 0, color: '#E41F26' }} />
                  +33 07 81 07 47 46
                </a>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px', color: '#E41F26' }} />
                  <span>
                    <strong style={{ color: 'rgba(255,255,255,0.60)', display: 'block' }}>Siège social</strong>
                    66 av. des Champs Élysées, 75008 Paris
                  </span>
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px', color: '#E41F26' }} />
                  <span>
                    <strong style={{ color: 'rgba(255,255,255,0.60)', display: 'block' }}>Martinique — Siège régional Caraïbes</strong>
                    Pointe Madeleine — CAP EST<br />97240 Le François
                  </span>
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px', color: '#E41F26' }} />
                  <span>
                    <strong style={{ color: 'rgba(255,255,255,0.60)', display: 'block' }}>Guadeloupe — Présence active</strong>
                    Pointe de la Verdure<br />Gosier 97190
                  </span>
                </span>
              </li>
            </ul>

            {/* Bloc légal NDA/SIRET */}
            <div className="footer-legal-block">
              <div className="footer-legal-item">
                <span className="footer-legal-label">NDA</span>
                <span className="footer-legal-value">11 75 59933 75</span>
              </div>
              <div className="footer-legal-item">
                <span className="footer-legal-label">SIRET</span>
                <span className="footer-legal-value">880 430 418 00017</span>
              </div>
              <div className="footer-legal-item">
                <span className="footer-legal-label">Certif.</span>
                <span className="footer-legal-value">ICPF n° 5-0616</span>
              </div>
            </div>

            {/* PDFs */}
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="/certificat-qualiopi.pdf" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}>
                <ExternalLink size={12} /> Certificat Qualiopi PDF
              </a>
              <a href="/reglement-interieur.pdf" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}>
                <ExternalLink size={12} /> Règlement intérieur PDF
              </a>
              <a href="/mentions-legales" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}>
                <ExternalLink size={12} /> Mentions légales &amp; CGV
              </a>
            </div>
          </div>

        </div>

        {/* ── Barre de bas de page ── */}
        <div className="footer-bottom">
          <span>© {year} GALACTUS Digital — NDA : 11 75 59933 75 — SIRET : 880 430 418 00017. Tous droits réservés.</span>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/mentions-legales">Mentions légales</a>
            <span>·</span>
            <a href="/mentions-legales#cgv">CGV</a>
            <span>·</span>
            <a href="/rgpd">Protection des données</a>
            <span>·</span>
            <a href="/handicap">Accessibilité</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
