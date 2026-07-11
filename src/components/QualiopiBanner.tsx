// QualiopiBanner.tsx — Bandeau de certification Qualiopi pour la page d'accueil
// Placé juste sous le Hero pour rassurer le visiteur dès l'arrivée.
import { ExternalLink } from 'lucide-react'

export function QualiopiBanner() {
  return (
    <section
      style={{
        background: 'var(--g-offwhite, #F7F7F6)',
        borderTop: '1px solid rgba(187,187,187,0.25)',
        borderBottom: '1px solid rgba(187,187,187,0.25)',
        padding: '2.25rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <a
          href="/certificat-qualiopi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Certificat Qualiopi Certifopac — ouvrir le PDF"
          style={{ display: 'inline-block', flexShrink: 0 }}
        >
          <img
            src="/qualiopi.jpg"
            alt="Certification Qualiopi — Processus certifié République Française — Actions de formation"
            loading="lazy"
            style={{
              display: 'block',
              maxWidth: '200px',
              height: 'auto',
              border: '1px solid rgba(187,187,187,0.4)',
              background: '#fff',
              padding: '0.5rem',
              transition: 'opacity 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '0.9'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.10)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.boxShadow = 'none'
            }}
          />
        </a>
        <div style={{ flex: 1, minWidth: '280px', maxWidth: '760px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(1.1rem,2vw,1.5rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--g-black)',
              margin: '0 0 0.5rem',
            }}
          >
            Organisme certifié Qualiopi
          </h2>
          <div className="g-rule" />
          <p style={{ fontSize: '0.95rem', color: '#4a4a48', lineHeight: 1.8, margin: 0 }}>
            GALACTUS Digital est certifié <strong>Qualiopi</strong> par Certifopac
            (accréditation Cofrac n° 5-0620, certificat n° 951711-1) au titre des{' '}
            <strong>actions de formation</strong>. Cette certification qualité est la condition
            d'accès aux financements publics et mutualisés de la formation professionnelle.{' '}
            <a
              href="/certificat-qualiopi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--g-red)',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              Consulter le certificat (PDF) <ExternalLink size={13} />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
