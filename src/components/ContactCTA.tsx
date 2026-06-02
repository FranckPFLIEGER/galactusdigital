import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, X } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'

type FormState = 'idle' | 'success'

export function ContactCTA() {
  const { ref, isVisible } = useIntersection()
  const [showForm, setShowForm]   = useState(false)
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    const subject = encodeURIComponent(`Demande de formation — ${form.name}`)
    const body = encodeURIComponent(
      `Nom : ${form.name}\n` +
      `Email : ${form.email}\n` +
      (form.phone ? `Téléphone : ${form.phone}\n` : '') +
      `\n${form.message}`
    )

    window.open(
      `https://mail.google.com/mail/?view=cm&to=president@galactusdigital.com&su=${subject}&body=${body}`,
      '_blank'
    )

    setFormState('success')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

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

        {/* Titre */}
        <h2 className={`contact-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Construisons votre<br />stratégie de certification IT
        </h2>

        {/* Sous-titre */}
        <p className={`contact-sub reveal${isVisible ? ' visible' : ''} delay-2`}>
          Que vous formiez un collaborateur ou déployiez un plan à l&apos;échelle de votre
          organisation, notre équipe est disponible pour vous conseiller.
        </p>

        {/* Boutons CTA */}
        {!showForm && (
          <div className={`contact-actions reveal${isVisible ? ' visible' : ''} delay-3`}>
            <button
              className="btn-red"
              style={{ fontSize: '0.88rem', cursor: 'pointer', border: 'none' }}
              onClick={() => setShowForm(true)}
            >
              Envoyer un message <ArrowRight size={15} />
            </button>
            <a href="tel:+33781074746" className="btn-ghost" style={{ fontSize: '0.88rem' }}>
              Appeler directement
            </a>
          </div>
        )}

        {/* Formulaire */}
        {showForm && (
          <div
            className={`reveal${isVisible ? ' visible' : ''} delay-3`}
            style={{
              width: '100%',
              maxWidth: '560px',
              margin: '2rem auto 0',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(228,31,38,0.25)',
              borderTop: '3px solid #E41F26',
              padding: '2rem',
              position: 'relative',
            }}
          >
            {/* Fermer */}
            <button
              onClick={() => { setShowForm(false); setFormState('idle') }}
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,255,255,0.40)',
              }}
              aria-label="Fermer le formulaire"
            >
              <X size={18} />
            </button>

            {/* Succès */}
            {formState === 'success' ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle size={48} color="#E41F26" style={{ margin: '0 auto 1rem' }} />
                <p style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Gmail a été ouvert avec votre message !
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
                  Vérifiez l&apos;onglet Gmail et cliquez sur Envoyer.
                </p>
                <button
                  className="btn-red"
                  style={{ marginTop: '1.5rem', fontSize: '0.82rem', cursor: 'pointer', border: 'none' }}
                  onClick={() => { setShowForm(false); setFormState('idle') }}
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                }}>
                  Nous contacter
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Nom complet *</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      placeholder="Jean Dupont" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="jean.dupont@entreprise.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="+33 6 00 00 00 00" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Décrivez votre besoin de formation..."
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
                  </div>

                  <button
                    className="btn-red"
                    onClick={handleSubmit}
                    disabled={!form.name || !form.email || !form.message}
                    style={{
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      border: 'none',
                      opacity: (!form.name || !form.email || !form.message) ? 0.5 : 1,
                      justifyContent: 'center',
                    }}
                  >
                    Ouvrir Gmail et envoyer <ArrowRight size={15} />
                  </button>

                  <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.30)', textAlign: 'center', margin: 0 }}>
                    Votre message sera pré-rempli dans Gmail. Il vous suffira de cliquer sur Envoyer.
                  </p>
                </div>
              </>
            )}
          </div>
        )}

        {/* Coordonnées */}
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

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  letterSpacing: '0.10em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.50)',
  marginBottom: '0.4rem',
  fontFamily: "'Barlow Condensed',sans-serif",
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: '#FFFFFF',
  padding: '0.65rem 0.85rem',
  fontSize: '0.875rem',
  outline: 'none',
  boxSizing: 'border-box',
}
