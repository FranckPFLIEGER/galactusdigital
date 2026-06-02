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
          style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', justifyContent: 'center' }}
        >
          Prêt à démarrer ?
        </span>

        <h2 className={`contact-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Construisons votre<br />stratégie de certification IT
        </h2>

        <p className={`contact-sub reveal${isVisible ? ' visible' : ''} delay-2`}>
          Que vous formiez un collaborateur ou déployiez un plan à l&apos;échelle de votre
          organisation, notre équipe est disponible pour vous conseiller.
        </p>

        <div className={`contact-actions reveal${isVisible ? ' visible' : ''} delay-3`}>
          <a
            href="https://mail.google.com/mail/?view=cm&to=president@galactusdigital.com&su=Demande%20de%20formation%20IT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
            style={{ fontSize: '0.88rem' }}
          >
            Envoyer un message <ArrowRight size={15} />
          </a>
          <a href="tel:+33781074746" className="btn-ghost" style={{ fontSize: '0.88rem' }}>
            Appeler directement
          </a>
        </div>

        <div className={`contact-details reveal${isVisible ? ' visible' : ''} delay-4`}>
          <div className="contact-detail">
            <div className="contact-detail-icon"><Mail size={16} color="white" /></div>
            <a href="mailto:president@galactusdigital.com">president@galactusdigital.com</a>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon"><Phone size={16} color="white" /></div>
            <a href="tel:+33781074746">+33 07 81 07 47 46</a>
          </div>
          <div className="contact-detail" style={{ alignItems: 'flex-start' }}>
            <div className="contact-detail-icon" style={{ flexShrink: 0, marginTop: '2px' }}>
              <MapPin size={16} color="white" />
            </div>
            <span style={{ textAlign: 'justify', lineHeight: 1.6 }}>
              Guadeloupe · Martinique · Saint Martin · Saint Barthélemy · Guyane · Réunion · France Hexagonale
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
