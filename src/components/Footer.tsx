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

            {/* ✓ Logo — barres alignées exactement sur GALACTUS */}
            <a href="/" aria-label="Galactus Digital" style={{ textDecoration: 'none', marginBottom: '1.25rem', display: 'inline-block' }}>
              <div style={{ position: 'relative' }}>
                {/* GALACTUS */}
                <div style={{
                  fontFamily: "'Barlow Condensed', 'Agency FB', sans-serif",
                  fontWeight: 700,
                  fontSize: '2rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}>
                  GALACTUS
                </div>
                {/* DIGITAL centré avec barres qui s'adaptent */}
                <div style={{
                  display: 'flex',
