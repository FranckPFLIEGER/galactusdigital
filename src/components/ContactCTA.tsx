import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

export function ContactCTA() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-bg" />
      <div className="contact-inner">

        {/* Label */}
        <span
          className={`section-label reveal${isVisible ? ' visible' : ''}`}
          style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', justifyContent: 'center' }}
        >
          Prêt à démarrer ?
        </span>

        {/* ✓ Titre raccourci sur 2 lignes max */}
        <h2 className={`contact-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Construisons votre<br />stratégie de certification IT
        </h2>

        {/* ✓ Sous-titre légèrement raccourci */}
        <p className={`contact-sub reveal${isVisible ? ' visible' : ''} delay-2`}>
          Que vous formiez un collaborateur ou déployiez un plan à l'échelle de votre
          organisation, notre équipe est disponible pour vous conseiller.
        </p>

        {/* ✓ Bouton CTA rouge bien visible */}
        <div className={`contact-actions reveal${isVisible ? ' visible' : ''} delay-3`}>
          <a href="mailto:galactusdigital@gmail.com" className="btn-red"
            style={{ fontSize: '0.88rem' }}>
            Envoyer un message <ArrowRight size={15} />
          </a>
          <a href="tel:+33781074746" className="btn-ghost"
            style={{ fontSize: '0.88rem' }}>
            Appeler directement
          </a>
        </div>

        {/* Coordonnées */}
        <div className={`contact-details reveal${isVisible ? ' visible' : ''} delay-4`}>
          <div className="contact-detail">
            <div className="contact-detail-icon">
              <Mail size={16} color="white" />
            </div>
            <a href="mailto:galactusdigital@gmail.com">galactusdigital@gmail.com</a>
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
            <span>Guadeloupe · Martinique · Saint Martin · Saint Barthélemy · Guyane · Réunion · France Hexagonale</span>
          </div>
        </div>

      </div>
    </section>
  )
}
