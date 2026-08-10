import { useState } from 'react'
import { useIntersection } from '../hooks/useIntersection'
import { Target, Globe, BookOpen, Linkedin } from 'lucide-react'

// À renseigner : dépose la photo dans /public/president.jpg
// et remplace l'URL LinkedIn ci-dessous par ton profil réel.
const PRESIDENT_PHOTO = '/president.jpg'
const PRESIDENT_LINKEDIN = 'https://www.linkedin.com/in/franckpflieger'
const PRESIDENT_TITLES = ['CCNP / CCDP', '15 ans instructeur Cisco', 'IPv6 Hall of Fame 2025']

const values = [
  {
    icon: <Target size={22} color="white" />,
    title: 'Notre mission',
    desc: 'Réduire l\'écart numérique entre les territoires ultramarins et le reste du monde, en formant aux certifications IT de niveau mondial.',
  },
  {
    icon: <Globe size={22} color="white" />,
    title: 'Notre conviction',
    desc: 'Les professionnels des territoires ultramarins méritent les mêmes certifications que leurs homologues en Europe ou en Amérique du Nord.',
  },
  {
    icon: <BookOpen size={22} color="white" />,
    title: 'Notre engagement',
    desc: 'S\'appuyer sur les éditeurs IT pour garantir des formations certifiantes reconnues mondialement.',
  },
]

export function President() {
  const { ref, isVisible } = useIntersection()
  const [photoOk, setPhotoOk] = useState(true)
  return (
    <section className="president-section" id="president" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.6)' }}>
          Mot du Président
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />

        <div className="president-grid">
          <div className={`president-quote reveal${isVisible ? ' visible' : ''} delay-1`}>
            <div className="president-quote-mark">"</div>
            <blockquote className="president-text">
              Innover, c'est réduire l'écart entre le présent et le futur.
              C'est aider chacun à ne jamais douter de sa place dans le monde qui vient.
              <br /><br />
              Le numérique évolue à une vitesse qui transforme en profondeur les bases
              de notre société. Refuser cette évolution, c'est prendre le risque de s'isoler
              — et ce risque est d'autant plus grand dans nos territoires insulaires.
              <br /><br />
              Nous ne prétendons pas tout expliquer de ces nouveaux mondes numériques.
              Mais nous nous engageons, à notre juste mesure, à former une génération
              capable d'évoluer à chaque nouvelle innovation — en s'appuyant sur ceux
              qui la font : les éditeurs.
            </blockquote>
            <div className="president-signature" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {photoOk && (
                <img
                  src={PRESIDENT_PHOTO}
                  alt="Franck PFLIEGER — Fondateur & Président de GALACTUS Digital"
                  onError={() => setPhotoOk(false)}
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(228,31,38,0.4)', flexShrink: 0 }}
                />
              )}
              <div className="president-signature-line" />
              <div>
                <div className="president-name">Franck PFLIEGER</div>
                <div className="president-title">Fondateur &amp; Président — GALACTUS Digital</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                  {PRESIDENT_TITLES.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#E41F26', background: 'rgba(228,31,38,0.10)', padding: '3px 8px' }}>{t}</span>
                  ))}
                </div>
                <a
                  href={PRESIDENT_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.6rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: 'var(--font-title)', fontWeight: 600, letterSpacing: '0.06em' }}
                >
                  <Linkedin size={13} /> Profil LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className={`president-values reveal${isVisible ? ' visible' : ''} delay-2`}>
            {values.map((v, i) => (
              <div key={v.title} className="president-value-card"
                style={{ animationDelay: `${0.1 * i + 0.3}s` }}>
                <div className="president-value-icon-wrap">
                  {v.icon}
                </div>
                <div>
                  <div className="president-value-title">{v.title}</div>
                  <div className="president-value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
