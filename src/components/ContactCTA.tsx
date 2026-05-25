import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

export function ContactCTA() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-bg" />
      <div className="contact-inner">
        <span
          className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.7)', justifyContent: 'center', display: 'flex' }}
        >
          Prêt à Démarrer ?
        </span>

        <h2 className={`contact-h2 reveal${isVisible ? ' visible' : ''} delay-1`}
          style={{ fontFamily: 'var(--font-display)' }}>
          Construisons ensemble votre<br />stratégie de certification IT
        </h2>

        <p className={`contact-sub reveal${isVisible ? ' visible' : ''} delay-2`}>
          Que vous souhaitiez former un collaborateur ou déployer un plan de formation
          à l'échelle de votre organisation, notre équipe est disponible pour vous conseiller.
        </p>

        <div className={`reveal${isVisible ? ' visible' : ''} delay-3`}>
          <a
            href="mailto:galactusdigital@gmail.com"
            className="btn-gold"
            style={{ fontSize: '0.88rem' }}
          >
            Envoyer un message <ArrowRight size={15} />
          </a>
        </div>

        <div className={`contact-details reveal${isVisible ? ' visible' : ''} delay-4`}>
          <div className="contact-detail">
            <div className="contact-detail-icon">
              <Mail size={16} color="white" />
            </div>
            <a href="mailto:galactusdigital@gmail.com">
              galactusdigital@gmail.com
            </a>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <Phone size={16} color="white" />
            </div>
            <a href="tel:+33781074746">+33 07 81 07 47 46</a>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">
              <MapPin size={16} color="white" />
            </div>
            <span>Guadeloupe · Martinique · Saint Martin · Saint Barthélemy · Guyane · Réunion · France Héxagonale</span>
          </div>
        </div>
      </div>
    </section>
  )
}
