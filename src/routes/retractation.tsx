import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle, Send, AlertCircle, FileText, Clock, Mail } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// /retractation — fonctionnalité de rétractation en ligne
//
// Obligation applicable depuis le 19 juin 2026 : lorsqu'un contrat est conclu
// à distance via une interface en ligne, le professionnel met à disposition une
// fonctionnalité de rétractation en ligne, accessible pendant toute la durée du
// délai, et accuse réception de la déclaration.
//
// Le formulaire ci-dessous constitue la « déclaration dénuée d'ambiguïté » de
// l'art. L.221-21 du code de la consommation. L'accusé de réception est affiché
// à l'écran et confirmé par courriel.
//
// Référence CGV : article 5 bis — délai unique de 14 jours calendaires pour
// tout stagiaire particulier, couvrant l'art. L.6353-5 du code du travail
// (10 jours) et l'art. L.221-18 du code de la consommation (14 jours).
// ─────────────────────────────────────────────────────────────────────────────

export const Route = createFileRoute('/retractation')({
  head: () => ({
    meta: [
      { title: 'Exercer mon droit de rétractation — GALACTUS Digital' },
      {
        name: 'description',
        content:
          "Formulaire de rétractation en ligne pour les stagiaires inscrits à titre individuel. " +
          "14 jours calendaires à compter de la signature du contrat, sans frais ni justification. " +
          "Accusé de réception immédiat.",
      },
      { name: 'robots', content: 'index, follow' },
    ],
  }),
  component: RetractationPage,
})

const WEB3FORMS_KEY = '035246e2-1884-48e8-bc56-411d7aee84e6'

interface FormState {
  nom: string
  prenom: string
  email: string
  telephone: string
  formation: string
  dateSignature: string
  reference: string
  confirme: boolean
}

const VIDE: FormState = {
  nom: '', prenom: '', email: '', telephone: '',
  formation: '', dateSignature: '', reference: '', confirme: false,
}

function RetractationPage() {
  const [form, setForm] = useState<FormState>(VIDE)
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  const complet =
    form.nom.trim() !== '' &&
    form.prenom.trim() !== '' &&
    form.email.trim() !== '' &&
    form.telephone.trim() !== '' &&
    form.formation.trim() !== '' &&
    form.dateSignature !== '' &&
    form.confirme

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const val = e.target.type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value
      setForm(prev => ({ ...prev, [k]: val }))
    }

  const envoye = new Date().toLocaleString('fr-FR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!complet) return
    setStatus('sending')
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `[RÉTRACTATION] ${form.prenom} ${form.nom} — ${form.formation}`,
        from_name: `${form.prenom} ${form.nom}`,
        email: form.email,
        message:
          `DÉCLARATION DE RÉTRACTATION REÇUE VIA GALACTUSDIGITAL.COM\n`
          + `Art. L.221-21 du code de la consommation — article 5 bis des CGV\n\n`
          + `Date et heure de réception : ${envoye}\n\n`
          + `Stagiaire : ${form.prenom} ${form.nom}\n`
          + `Email : ${form.email}\n`
          + `Téléphone : ${form.telephone}\n\n`
          + `Formation concernée : ${form.formation}\n`
          + `Date de signature du contrat : ${form.dateSignature}\n`
          + `Référence devis / contrat : ${form.reference || 'non renseignée'}\n\n`
          + `Le déclarant notifie sa rétractation du contrat de formation professionnelle `
          + `ci-dessus, sans avoir à motiver sa décision et sans pénalité.\n\n`
          + `À TRAITER : accuser réception par écrit, arrêter les accès plateforme, `
          + `rembourser sous 14 jours toute somme éventuellement versée, consigner au `
          + `registre de suivi.`,
      }
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setStatus(data.success ? 'ok' : 'err')
    } catch {
      setStatus('err')
    }
  }

  const lbl: React.CSSProperties = {
    fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 700,
    letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a58',
    marginBottom: '0.4rem', display: 'block',
  }
  const inp: React.CSSProperties = {
    width: '100%', padding: '0.7rem 0.9rem', fontFamily: 'var(--font-body)',
    fontSize: '0.88rem', border: '1px solid rgba(187,187,187,0.6)',
    background: 'var(--g-white)', color: 'var(--g-black)', outline: 'none',
    boxSizing: 'border-box',
  }
  const fld: React.CSSProperties = { display: 'flex', flexDirection: 'column' }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Article 5 bis des CGV
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Exercer mon droit<br />de rétractation
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, margin: 0 }}>
              Vous financez vous-même votre formation, en tout ou pour la part restée à votre
              charge&nbsp;? Vous disposez de 14&nbsp;jours calendaires à compter de la signature de
              votre contrat pour revenir sur votre décision, sans avoir à vous justifier et sans
              aucun frais.
            </p>
          </div>
        </section>

        {/* ── Ce que dit la règle ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }} className="retr-grid">
            {[
              { icon: <Clock size={18} color="#fff" />, titre: '14 jours', desc: "À compter de la signature du contrat de formation. Ce délai unique couvre les 10 jours de l'art. L.6353-5 du code du travail et les 14 jours de l'art. L.221-18 du code de la consommation." },
              { icon: <FileText size={18} color="#fff" />, titre: 'Aucun frais', desc: "Aucune somme n'est encaissée avant la fin du délai (art. L.6353-6). Les frais d'annulation de l'article 5 des CGV ne s'appliquent pas à une rétractation exercée dans le délai." },
              { icon: <Mail size={18} color="#fff" />, titre: 'Accusé de réception', desc: "Votre déclaration est horodatée et confirmée par écrit. Vous pouvez aussi écrire à president@galactusdigital.com ou envoyer une lettre recommandée." },
            ].map(c => (
              <div key={c.titre} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', borderTop: '3px solid var(--g-red)', padding: '1.5rem' }}>
                <div style={{ width: '36px', height: '36px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{c.icon}</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', margin: '0 0 0.6rem' }}>{c.titre}</h2>
                <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Formulaire ── */}
        <section style={{ background: 'var(--g-white)', padding: '3.5rem 2rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>

            {status === 'ok' ? (
              <div style={{
                background: 'rgba(40,140,60,0.06)', border: '1px solid rgba(40,140,60,0.3)',
                borderLeft: '4px solid #2a8c3c', padding: '2rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <CheckCircle size={22} color="#2a8c3c" />
                  <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--g-black)', margin: 0 }}>
                    Rétractation enregistrée
                  </h2>
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#4a4a48', margin: '0 0 0.75rem' }}>
                  <strong>Accusé de réception — {envoye}.</strong> Votre déclaration de
                  rétractation pour la formation «&nbsp;{form.formation}&nbsp;» a bien été reçue.
                  Elle est consignée au registre de suivi de l'organisme.
                </p>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: '#5a5a58', margin: 0 }}>
                  Une confirmation écrite vous est adressée à {form.email}. Vos accès éventuels
                  aux plateformes sont clôturés et toute somme versée vous est remboursée sous
                  14 jours. Conservez cette page ou le courriel comme preuve de votre démarche.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h2 className="section-h2" style={{ marginBottom: 0 }}>Votre déclaration</h2>
                <div className="g-rule" />
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  padding: '1rem 1.25rem', background: 'rgba(228,31,38,0.05)',
                  border: '1px solid rgba(228,31,38,0.18)', borderLeft: '4px solid var(--g-red)',
                }}>
                  <AlertCircle size={17} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.84rem', color: '#4a4a48', margin: 0, lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--g-red)' }}>Votre formation est financée par
                    France Travail, un OPCO ou une collectivité ?</strong> Ce formulaire ne vous
                    concerne pas. Vous n'engagez pas vos propres frais : adressez-vous à votre
                    conseiller France Travail ou à votre employeur, qui en informera l'organisme.
                    Ce formulaire est réservé au stagiaire qui finance lui-même sa formation — ou,
                    en cas de prise en charge partielle, la part restée à sa charge.
                  </p>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#5a5a58', lineHeight: 1.7, margin: 0 }}>
                  Tous les champs marqués d'un astérisque sont nécessaires pour identifier votre
                  contrat. La date et l'heure d'envoi font foi.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="retr-two">
                  <div style={fld}>
                    <label style={lbl}>Prénom *</label>
                    <input style={inp} required value={form.prenom} onChange={set('prenom')} />
                  </div>
                  <div style={fld}>
                    <label style={lbl}>Nom *</label>
                    <input style={inp} required value={form.nom} onChange={set('nom')} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="retr-two">
                  <div style={fld}>
                    <label style={lbl}>Email *</label>
                    <input style={inp} type="email" required value={form.email} onChange={set('email')} />
                  </div>
                  <div style={fld}>
                    <label style={lbl}>Téléphone *</label>
                    <input style={inp} type="tel" required value={form.telephone} onChange={set('telephone')} />
                  </div>
                </div>

                <div style={fld}>
                  <label style={lbl}>Formation concernée *</label>
                  <input style={inp} required value={form.formation} onChange={set('formation')}
                    placeholder="Intitulé figurant sur votre contrat" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="retr-two">
                  <div style={fld}>
                    <label style={lbl}>Date de signature du contrat *</label>
                    <input style={inp} type="date" required value={form.dateSignature} onChange={set('dateSignature')} />
                  </div>
                  <div style={fld}>
                    <label style={lbl}>Référence devis / contrat</label>
                    <input style={inp} value={form.reference} onChange={set('reference')}
                      placeholder="Si vous l'avez sous la main" />
                  </div>
                </div>

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.84rem', color: '#4a4a48', lineHeight: 1.65, cursor: 'pointer' }}>
                  <input type="checkbox" required checked={form.confirme} onChange={set('confirme')}
                    style={{ marginTop: '3px', accentColor: '#E41F26', flexShrink: 0 }} />
                  <span>
                    Je notifie ma rétractation du contrat de formation professionnelle désigné
                    ci-dessus. *
                  </span>
                </label>

                {/* Information du RGPD, art. 13 : due au moment même de la collecte.
                    Le renvoi à la page /rgpd ne suffit pas, la mention figure ici. */}
                <div style={{ borderLeft: '3px solid rgba(187,187,187,0.6)', paddingLeft: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '0.4rem' }}>
                    Protection de vos données
                  </div>
                  <p style={{ fontSize: '0.80rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>
                    Les informations saisies dans ce formulaire sont traitées par PFLIEGER SASU
                    (GALACTUS Digital), 66 avenue des Champs-Élysées, 75008 Paris, aux seules fins
                    d'enregistrer votre rétractation, d'en accuser réception et d'en conserver la
                    preuve. Ce traitement repose sur une obligation légale, l'article L.6353-5 du
                    code du travail. Les champs signalés par une astérisque sont nécessaires à
                    l'identification de votre contrat : sans eux, la déclaration ne peut être
                    rattachée à votre dossier. Les données sont conservées 5 ans. Elles sont
                    transmises par notre prestataire technique Web3Forms à la messagerie de
                    l'organisme, et ne sont communiquées à aucun autre tiers à des fins commerciales.
                    Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
                    de portabilité et d'opposition, à exercer auprès de
                    president@galactusdigital.com, ainsi que du droit d'introduire une réclamation
                    auprès de la CNIL. Le détail de nos traitements figure sur notre{' '}
                    <a href="/rgpd" style={{ color: 'var(--g-red)', fontWeight: 600 }}>page Protection des données</a>.
                  </p>
                </div>

                {status === 'err' && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.9rem 1.1rem', background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.25)' }}>
                    <AlertCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: '0.84rem', color: '#4a4a48', margin: 0, lineHeight: 1.6 }}>
                      L'envoi a échoué. Votre droit n'est pas perdu pour autant : adressez votre
                      rétractation à <strong>president@galactusdigital.com</strong> ou par lettre
                      recommandée. La date d'envoi fait foi.
                    </p>
                  </div>
                )}

                <button type="submit" disabled={status === 'sending' || !complet}
                  className="btn-red"
                  style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', opacity: (!complet || status === 'sending') ? 0.5 : 1, cursor: (!complet || status === 'sending') ? 'not-allowed' : 'pointer' }}>
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma rétractation'}
                  {status !== 'sending' && <Send size={15} />}
                </button>

                {!complet && (
                  <p style={{ fontSize: '0.78rem', color: '#999', margin: 0, fontStyle: 'italic' }}>
                    Complétez les champs obligatoires pour activer l'envoi.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>

        {/* ── Portée ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 className="section-h2">Qui peut se rétracter</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', marginTop: '1.5rem' }}>
              GALACTUS Digital ne vend pas ses formations en direct à un particulier qui les
              financerait lui-même : toute entrée en formation est adossée à un employeur ou à un
              financeur tiers (article 2 des CGV). Ce formulaire couvre donc deux situations :
              le <strong>cas résiduel</strong> d'un contrat néanmoins conclu avec un stagiaire
              finançant sa formation de ses propres deniers, et la <strong>part restée à la charge
              personnelle du stagiaire</strong> lorsqu'une prise en charge ne couvre pas la
              totalité du coût.
            </p>
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48' }}>
              Il ne s'applique pas aux employeurs ni aux clients professionnels, régis par une
              convention de formation et par l'article 5 des CGV. Il ne s'applique pas davantage
              aux parcours pris en charge par un <strong>tiers financeur</strong> — France Travail
              (AIF), OPCO, collectivité, dispositif FSE+ : le stagiaire n'y engage pas ses
              frais, la relation est régie par le devis valant convention une fois accepté par le
              financeur, et les conditions d'abandon sont celles de ce financeur, généralement un
              règlement au prorata des heures effectivement suivies.
            </p>
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48' }}>
              <strong>Reste à charge :</strong> si la prise en charge ne couvre pas la totalité du
              coût et que vous réglez vous-même le solde, le droit s'applique à cette seule part.
            </p>
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48' }}>
              Si vous avez expressément demandé que la formation commence avant la fin du délai,
              vous conservez votre droit de rétractation : seules les heures effectivement suivies
              et les accès de plateforme déjà ouverts à votre demande vous sont facturés au prorata.
            </p>
            <p style={{ fontSize: '0.86rem', lineHeight: 1.75, color: '#5a5a58' }}>
              Détail complet :{' '}
              <a href="/mentions-legales#cgv" style={{ color: 'var(--g-red)', fontWeight: 600, textDecoration: 'none' }}>
                article 5 bis des conditions générales de vente
              </a>.
            </p>
          </div>
        </section>

        <style>{`
          @media (max-width: 768px) {
            .retr-grid { grid-template-columns: 1fr !important; }
            .retr-two  { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
