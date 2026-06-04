import { Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react'
import { FORMATIONS, getFormationsParFamille } from '../data/catalogue'

const FC: Record<string, string> = {
  'Réseaux & CCNA':      '#E41F26',
  'Cybersécurité':       '#c0392b',
  'Programmation':       '#2980b9',
  'IoT':                 '#16a085',
  'Linux & Open Source': '#8e44ad',
  'Data & Analytics':    '#d35400',
  'Azure & Cloud':       '#0078D4',
  'Microsoft 365':       '#0078D4',
}

const PAR_FAMILLE = getFormationsParFamille()
const CISCO_FAMILLES     = ['Réseaux & CCNA', 'Cybersécurité', 'Programmation', 'IoT', 'Linux & Open Source', 'Data & Analytics']
const MICROSOFT_FAMILLES = ['Azure & Cloud', 'Microsoft 365']

function GalactusLogo() {
  return (
    <div style={{ display: 'inline-block' }}>
      <div style={{ fontFamily: "'Barlow Condensed','Agency FB',sans-serif", fontWeight: 700, fontSize: '2.2rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', lineHeight: 1, marginBottom: '3px', whiteSpace: 'nowrap' }}>GALACTUS</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '5px' }}>
        <div style={{ height: '2px', background: '#E41F26' }} />
        <span style={{ fontFamily: "'Barlow Condensed','Agency FB',sans-serif", fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E41F26', whiteSpace: 'nowrap' }}>DIGITAL</span>
        <div style={{ height: '2px', background: '#E41F26' }} />
      </div>
    </div>
  )
}

// ─── Colonne formations par famille ──────────────────────────────────────────
function FamilleCol({ famille }: { famille: string }) {
  const formations = PAR_FAMILLE[famille] || []
  const col = FC[famille] || '#E41F26'
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
        <div style={{ width: '10px', height: '2px', background: col, flexShrink: 0 }} />
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: col }}>
          {famille}
        </span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.18rem' }}>
        {formations.map(f => (
          <li key={f.slug}>
            <a href={`/formations/${f.slug}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', lineHeight: 1.45, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}>
              <ChevronRight size={9} style={{ flexShrink: 0, opacity: 0.4 }} />
              {f.titre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* ════════════════════════════════════
            BANDE CATALOGUE — au-dessus des 4 colonnes
        ════════════════════════════════════ */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E41F26', marginBottom: '0.2rem' }}>Catalogue complet</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>
                Nos formations certifiantes IT
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'Calendrier',   href: '/calendrier' },
                { label: 'Financements', href: '/financements' },
                { label: 'Présentiel',   href: '/presentiel' },
                { label: 'FOAD',         href: '/foad' },
                { label: 'E-learning',   href: '/elearning' },
              ].map(l => (
                <a key={l.label} href={l.href}
                  style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '0.3rem 0.7rem', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'all 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#E41F26'; e.currentTarget.style.color = '#E41F26' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}>
                  {l.label}
                </a>
              ))}
              <a href="/formations" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#E41F26', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'opacity 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                Tout le catalogue <ChevronRight size={11} />
              </a>
            </div>
          </div>

          {/* Deux blocs : Cisco | Microsoft */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

            {/* Cisco */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderTop: '2px solid #E41F26', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Cisco NetAcad</span>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#E41F26', background: 'rgba(228,31,38,0.10)', padding: '0.1rem 0.45rem' }}>Partenaire n° 3018982</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.5rem' }}>
                {CISCO_FAMILLES.map(f => <FamilleCol key={f} famille={f} />)}
              </div>
            </div>

            {/* Microsoft */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderTop: '2px solid #0078D4', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Microsoft Learn</span>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#0078D4', background: 'rgba(0,120,212,0.10)', padding: '0.1rem 0.45rem' }}>Microsoft Partner</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.5rem' }}>
                {MICROSOFT_FAMILLES.map(f => <FamilleCol key={f} famille={f} />)}
              </div>
            </div>

          </div>
        </div>

        {/* ════════════════════════════════════
            4 COLONNES CLASSIQUES (structure originale préservée)
        ════════════════════════════════════ */}
        <div className="footer-top">

          {/* Col 1 — Brand */}
          <div className="footer-brand-section">
            <a href="/" aria-label="Galactus Digital — Accueil" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}>
              <GalactusLogo />
            </a>
            <p className="footer-tagline">
              L'ingénierie de formation certifiante IT<br />des territoires ultramarins.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
              <a href="https://www.linkedin.com/company/119444115/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn GALACTUS Digital" className="footer-social-link">
                <Linkedin size={18} />
              </a>
            </div>
            <img src="/qualiopi.jpg" alt="Certification Qualiopi — Processus certifié République Française — Actions de formation" loading="lazy" style={{ display: 'block', maxWidth: '220px', height: 'auto', marginTop: '0.5rem' }} />
          </div>

          {/* Col 2 — Formations */}
          <div>
            <h4 className="footer-col-title">Formations</h4>
            <ul className="footer-links">
              <li><a href="/formations">Tout le catalogue</a></li>
              <li><a href="/formations#cisco">Cisco NetAcad</a></li>
              <li><a href="/formations#microsoft">Microsoft Azure &amp; M365</a></li>
              <li><a href="/certifications">Passer une certification</a></li>
              <li><a href="/calendrier">Calendrier des sessions</a></li>
              <li><a href="/financements">Guide du financement</a></li>
            </ul>
            <h4 className="footer-col-title" style={{ marginTop: '1.25rem' }}>Solutions</h4>
            <div style={{ fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E41F26', marginBottom: '0.4rem' }}>Modalités</div>
            <ul className="footer-links" style={{ marginBottom: '0.75rem' }}>
              <li><a href="/presentiel">Formation en présentiel</a></li>
              <li><a href="/foad">Formation à distance (FOAD)</a></li>
              <li><a href="/elearning">E-learning tutoré</a></li>
            </ul>
            <div style={{ fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E41F26', marginBottom: '0.4rem' }}>Formats</div>
            <ul className="footer-links">
              <li><a href="/presentiel#inter">Inter-entreprise</a></li>
              <li><a href="/presentiel#intra">Intra-entreprise</a></li>
            </ul>
          </div>

          {/* Col 3 — À propos */}
          <div>
            <h4 className="footer-col-title">À Propos</h4>
            <ul className="footer-links">
              <li><a href="/#president">Mot du Président</a></li>
              <li><a href="/#expertise">Notre expertise</a></li>
              <li><a href="/#presence">Notre présence</a></li>
              <li><a href="/#satisfaction">Satisfaction &amp; Qualité</a></li>
              <li><a href="/#clients">Ils nous font confiance</a></li>
              <li><a href="/#resultats">Nos résultats</a></li>
              <li><a href="/demarche-pedagogique">Démarche pédagogique</a></li>
              <li><a href="/demarche-qualite">Démarche qualité</a></li>
              <li><a href="/#partenaires">Nos partenaires</a></li>
              <li><a href="/#actualites">Actualités &amp; Veille IT</a></li>
              <li><a href="/#awards">Nos reconnaissances</a></li>
              <li><a href="/#rse">Notre engagement RSE</a></li>
              <li><a href="/temoignages">Témoignages</a></li>
              <li><a href="/handicap">Accessibilité &amp; Handicap</a></li>
            </ul>
          </div>

          {/* Col 4 — Contact & Légal */}
          <div>
            <h4 className="footer-col-title">Contact &amp; Légal</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:president@galactusdigital.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} style={{ flexShrink: 0, color: '#E41F26' }} />
                  president@galactusdigital.com
                </a>
              </li>
              <li>
                <a href="tel:+33781074746" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} style={{ flexShrink: 0, color: '#E41F26' }} />
                  +33 07 81 07 47 46
                </a>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px', color: '#E41F26' }} />
                  <span><strong style={{ color: 'rgba(255,255,255,0.60)', display: 'block' }}>Siège social</strong>66 av. des Champs Élysées, 75008 Paris</span>
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px', color: '#E41F26' }} />
                  <span><strong style={{ color: 'rgba(255,255,255,0.60)', display: 'block' }}>Martinique — Siège régional Caraïbes</strong>Pointe Madeleine — CAP EST<br />97240 Le François</span>
                </span>
              </li>
              <li>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px', color: '#E41F26' }} />
                  <span><strong style={{ color: 'rgba(255,255,255,0.60)', display: 'block' }}>Guadeloupe — Présence active</strong>Pointe de la Verdure<br />Gosier 97190</span>
                </span>
              </li>
            </ul>
            <div className="footer-legal-block">
              <div className="footer-legal-item"><span className="footer-legal-label">NDA</span><span className="footer-legal-value">11 75 59933 75</span></div>
              <div className="footer-legal-item"><span className="footer-legal-label">SIRET</span><span className="footer-legal-value">880 430 418 00017</span></div>
              <div className="footer-legal-item"><span className="footer-legal-label">Certif.</span><span className="footer-legal-value">ICPF n° 5-0616</span></div>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="/certificat-qualiopi.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}><ExternalLink size={12} /> Certificat Qualiopi PDF</a>
              <a href="/reglement-interieur.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}><ExternalLink size={12} /> Règlement intérieur PDF</a>
              <a href="/mentions-legales" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.40)', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#E41F26')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}><ExternalLink size={12} /> Mentions légales &amp; CGV</a>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span>© {year} GALACTUS Digital — NDA : 11 75 59933 75 — SIRET : 880 430 418 00017. Tous droits réservés.</span>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/mentions-legales">Mentions légales</a><span>·</span>
            <a href="/mentions-legales#cgv">CGV</a><span>·</span>
            <a href="/rgpd">Protection des données</a><span>·</span>
            <a href="/handicap">Accessibilité</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
