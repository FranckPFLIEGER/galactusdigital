import { ArrowRight, Award, Network, Globe, Terminal, Cloud, CalendarClock } from 'lucide-react'

const floatingBadges = [
  {
    cls:   'badge-a',
    label: 'Microsoft Azure',
    sub:   'AZ-900 · AZ-104 · SC-900 · AI-900',
    icon:  <Cloud size={16} color="#0078D4" />,
    color: '#0078D4',
  },
  {
    cls:   'badge-b',
    label: 'IPv6 Forum',
    sub:   'Certified Network Engineer',
    icon:  <Globe size={16} color="#E41F26" />,
    color: '#E41F26',
  },
  {
    cls:   'badge-c',
    label: 'Cisco NetAcad',
    sub:   'CCNA · CyberOps · IoT · DevNet',
    icon:  <Network size={16} color="#1BA0D7" />,
    color: '#1BA0D7',
  },
  {
    cls:   'badge-d',
    label: 'Linux & Python',
    sub:   'Linux Essentials · PCEP · PCAP',
    icon:  <Terminal size={16} color="#FCC624" />,
    color: '#FCC624',
  },
]

export function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-pattern" />
      <div className="hero-gradient" />
      <div className="hero-inner">

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <div className="hero-label" style={{ animation: 'fadeUp 0.6s ease-out both', margin: 0 }}>
              Formation certifiante IT
            </div>
            <a href="/calendrier"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', background: 'rgba(228,31,38,0.85)', padding: '0.25rem 0.75rem', textDecoration: 'none', animation: 'fadeUp 0.6s ease-out 0.1s both' }}>
              <CalendarClock size={11} />
              Prochaine session — 3 août 2026
            </a>
          </div>

          <h1 className="hero-h1" style={{ animation: 'fadeUp 0.7s ease-out 0.12s both' }}>
            {"L'excellence en certifications IT"}{' '}
            <em>dans les territoires ultramarins</em>
          </h1>

          <p className="hero-desc" style={{ animation: 'fadeUp 0.7s ease-out 0.24s both' }}>
            Seul organisme de formation <strong style={{ color: '#fff' }}>certifié Qualiopi</strong> spécialisé IT dans les DOM-COM.
            Partenaire officiel Cisco NetAcad (n° 3018982) et Microsoft (n° 4653557).{' '}
            <strong style={{ color: '#E41F26' }}>100 % de réussite aux certifications.</strong>{' '}
            Présentiel · FOAD · E-learning — à partir de <strong style={{ color: '#fff' }}>290 € HT</strong>.
          </p>

          <div className="hero-actions" style={{ animation: 'fadeUp 0.7s ease-out 0.36s both' }}>
            <a href="/formations" className="btn-red">
              Voir les 22 formations <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn-ghost">
              Devis sous 48h
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap', animation: 'fadeUp 0.7s ease-out 0.48s both' }}>
            {[
              { val: '100 %', label: 'de réussite' },
              { val: '22',    label: 'certifications' },
              { val: '6+1',   label: 'territoires + Paris' },
              { val: '+20',   label: "ans d'expérience" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.25rem', fontWeight: 700, color: '#E41F26', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-scroll" style={{ animation: 'fadeUp 0.7s ease-out 0.6s both' }}>
            <div className="hero-scroll-line" />
            Défiler pour en savoir plus
          </div>
        </div>

        <div className="hero-visual" style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}>
          <div className="hero-panel">
            <div className="hero-panel-grid" />
            <div className="hero-panel-glow" />
            <div className="hero-center-badge">
              <Award size={36} color="white" />
            </div>
            {floatingBadges.map(badge => (
              <div key={badge.label} className={`cert-badge ${badge.cls}`}>
                <div className="cert-badge-icon" style={{ color: badge.color }}>{badge.icon}</div>
                <div>
                  <div className="cert-badge-name">{badge.label}</div>
                  <div className="cert-badge-sub">{badge.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
