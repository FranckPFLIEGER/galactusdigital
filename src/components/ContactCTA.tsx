import { useState } from "react"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, AlertCircle, Send, Clock, Shield, Award } from "lucide-react"
import { useIntersection } from "../hooks/useIntersection"

const FORMATIONS = [
  "Networking Essentials",
  "CCNA — ITN (Module 1/3)",
  "CCNA — SRWE (Module 2/3)",
  "CCNA — ENSA (Module 3/3)",
  "Cybersecurity Essentials",
  "CyberOps Associate",
  "Ethical Hacker",
  "Python Essentials 1",
  "Python Essentials 2",
  "DevNet Associate",
  "IoT — Introduction",
  "IoT — Connecting Things",
  "IoT — Big Data & Analytics",
  "IoT — Security",
  "IoT — Hackathon",
  "Linux Essentials",
  "Data Analytics Essentials",
  "AZ-900 Azure Fundamentals",
  "AZ-104 Azure Administrator",
  "SC-900 Security Fundamentals",
  "AI-900 Azure AI Fundamentals",
  "MS-900 Microsoft 365 Fundamentals",
  "Formation sur mesure / autre",
]

const TERRITOIRES = [
  "Martinique",
  "Guadeloupe",
  "Guyane",
  "Saint-Martin",
  "Saint-Barthélemy",
  "La Réunion",
  "France hexagonale",
  "Autre territoire",
]

const TYPES = [
  "Demande de devis",
  "Formation intra-entreprise",
  "Formation inter-entreprise",
  "E-learning tutoré",
  "Renseignement général",
  "Partenariat / convention",
]

type FormState = {
  nom: string
  prenom: string
  email: string
  telephone: string
  entreprise: string
  territoire: string
  formation: string
  type: string
  message: string
  rgpd: boolean
}

const INIT: FormState = {
  nom: "", prenom: "", email: "", telephone: "",
  entreprise: "", territoire: "", formation: "", type: "",
  message: "", rgpd: false,
}

// ⚠️ INSTRUCTION : Créez un compte gratuit sur web3forms.com
// → entrez president@galactusdigital.com → copiez votre Access Key
// → remplacez "035246e2-1884-48e8-bc56-411d7aee84e6" ci-dessous
const WEB3FORMS_KEY = "035246e2-1884-48e8-bc56-411d7aee84e6"

export function ContactCTA() {
  const { ref, isVisible } = useIntersection()
  const [form, setForm]     = useState<FormState>(INIT)
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle")

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const val = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(prev => ({ ...prev, [k]: val }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.rgpd) return
    setStatus("sending")
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `[GALACTUS Digital] ${form.type || "Demande"} — ${form.formation || "Formation"}`,
        from_name: `${form.prenom} ${form.nom}`,
        email: form.email,
        message: `DEMANDE REÇUE VIA GALACTUSDIGITAL.COM\n\n`
          + `Nom : ${form.prenom} ${form.nom}\n`
          + `Email : ${form.email}\n`
          + `Téléphone : ${form.telephone || "Non renseigné"}\n`
          + `Entreprise : ${form.entreprise || "Non renseignée"}\n`
          + `Territoire : ${form.territoire || "Non renseigné"}\n`
          + `Formation souhaitée : ${form.formation || "Non précisée"}\n`
          + `Type de demande : ${form.type || "Non précisé"}\n\n`
          + `Message :\n${form.message}`,
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setStatus(data.success ? "ok" : "err")
    } catch {
      setStatus("err")
    }
  }

  const inp: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)", color: "#fff",
    padding: "0.75rem 1rem", fontSize: "0.88rem", fontFamily: "var(--font-body)",
    outline: "none", borderRadius: "2px", transition: "border-color .15s",
    boxSizing: "border-box",
  }
  const sel: React.CSSProperties = { ...inp, appearance: "none", cursor: "pointer" }
  const lbl: React.CSSProperties = {
    display: "block", fontFamily: "var(--font-title)", fontSize: "0.68rem",
    fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
    color: "rgba(255,255,255,0.55)", marginBottom: "0.35rem",
  }
  const fld: React.CSSProperties = { display: "flex", flexDirection: "column" }

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-bg" />
      <div className="section-inner" style={{ maxWidth: "1100px", padding: "5rem 2rem", position: "relative", zIndex: 1 }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "4rem", alignItems: "start" }}>

          {/* ── Colonne formulaire ── */}
          <div>
            <span className={`section-label reveal${isVisible ? " visible" : ""}`}
              style={{ color: "rgba(255,255,255,0.55)", justifyContent: "flex-start", display: "flex" }}>
              Prêt à démarrer ?
            </span>
            <h2 className={`contact-h2 reveal${isVisible ? " visible" : ""} delay-1`}
              style={{ textAlign: "left" }}>
              Construisons votre<br />stratégie de certification IT
            </h2>
            <p className={`contact-sub reveal${isVisible ? " visible" : ""} delay-2`}
              style={{ textAlign: "left", margin: "0 0 2rem" }}>
              Remplissez ce formulaire — nous vous répondons sous 48h avec un devis personnalisé.
            </p>

            {status === "ok" ? (
              <div style={{ background: "rgba(39,174,96,0.12)", border: "1px solid rgba(39,174,96,0.4)", padding: "2rem", textAlign: "center" }}>
                <CheckCircle size={40} color="#E41F26" style={{ marginBottom: "1rem" }} />
                <div style={{ fontFamily: "var(--font-title)", fontSize: "1.1rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>
                  Message envoyé !
                </div>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.62)", margin: 0 }}>
                  Nous vous répondons sous 48h ouvrées à l&apos;adresse indiquée.
                </p>
                <button onClick={() => { setForm(INIT); setStatus("idle") }}
                  style={{ marginTop: "1.5rem", background: "none", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "0.6rem 1.5rem", cursor: "pointer", fontFamily: "var(--font-title)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                {/* Ligne Nom / Prénom */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={fld}>
                    <label style={lbl}>Nom *</label>
                    <input style={inp} required value={form.nom} onChange={set("nom")} placeholder="DUPONT" />
                  </div>
                  <div style={fld}>
                    <label style={lbl}>Prénom *</label>
                    <input style={inp} required value={form.prenom} onChange={set("prenom")} placeholder="Jean" />
                  </div>
                </div>

                {/* Email / Téléphone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={fld}>
                    <label style={lbl}>Email professionnel *</label>
                    <input style={inp} type="email" required value={form.email} onChange={set("email")} placeholder="jean.dupont@entreprise.com" />
                  </div>
                  <div style={fld}>
                    <label style={lbl}>Téléphone</label>
                    <input style={inp} type="tel" value={form.telephone} onChange={set("telephone")} placeholder="+596 6 96 ..." />
                  </div>
                </div>

                {/* Entreprise / Territoire */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={fld}>
                    <label style={lbl}>Entreprise / Organisation</label>
                    <input style={inp} value={form.entreprise} onChange={set("entreprise")} placeholder="Ma Société SAS" />
                  </div>
                  <div style={fld}>
                    <label style={lbl}>Territoire *</label>
                    <select style={sel} required value={form.territoire} onChange={set("territoire")}>
                      <option value="">-- Choisir --</option>
                      {TERRITOIRES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Formation / Type */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={fld}>
                    <label style={lbl}>Formation souhaitée</label>
                    <select style={sel} value={form.formation} onChange={set("formation")}>
                      <option value="">-- Toutes / Je ne sais pas --</option>
                      {FORMATIONS.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                  <div style={fld}>
                    <label style={lbl}>Type de demande *</label>
                    <select style={sel} required value={form.type} onChange={set("type")}>
                      <option value="">-- Choisir --</option>
                      {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={fld}>
                  <label style={lbl}>Message / contexte</label>
                  <textarea style={{ ...inp, resize: "vertical", minHeight: "110px" }}
                    value={form.message} onChange={set("message")}
                    placeholder="Nombre de stagiaires, objectifs, contraintes, questions..." />
                </div>

                {/* RGPD */}
                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                  <input type="checkbox" required checked={form.rgpd} onChange={set("rgpd")}
                    style={{ marginTop: "3px", accentColor: "var(--g-red)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                    J&apos;accepte que GALACTUS Digital conserve mes données pour traiter ma demande.
                    Conformément au RGPD, je peux exercer mes droits en contactant
                    president@galactusdigital.com.
                  </span>
                </label>

                {/* Submit */}
                {status === "err" && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#f87171", fontSize: "0.83rem" }}>
                    <AlertCircle size={15} /> Erreur d&apos;envoi. Contactez-nous directement par email.
                  </div>
                )}
                <button type="submit" disabled={status === "sending" || !form.rgpd}
                  className="btn-red"
                  style={{ alignSelf: "flex-start", opacity: (!form.rgpd || status === "sending") ? 0.5 : 1, cursor: (!form.rgpd || status === "sending") ? "not-allowed" : "pointer" }}>
                  {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
                  {status !== "sending" && <Send size={15} />}
                </button>

              </form>
            )}
          </div>

          {/* ── Colonne info ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Engagements */}
            <div style={{ background: "rgba(228,31,38,0.08)", border: "1px solid rgba(228,31,38,0.20)", padding: "1.75rem" }}>
              <div style={{ fontFamily: "var(--font-title)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--g-red)", marginBottom: "1.25rem" }}>
                Nos engagements
              </div>
              {[
                [Clock, "Réponse sous 48h ouvrées"],
                [Shield, "Devis gratuit et sans engagement"],
                [Award, "Certification Qualiopi garantie"],
                [CheckCircle, "Financement OPCO / AIF"],
              ].map(([Icon, text]) => (
                <div key={text as string} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                  <div style={{ width: 32, height: 32, background: "var(--g-red)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={16} color="white" />
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>{text as string}</span>
                </div>
              ))}
            </div>

            {/* Contact direct */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div style={{ fontFamily: "var(--font-title)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.40)" }}>
                Contact direct
              </div>
              <a href="mailto:president@galactusdigital.com"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.70)", textDecoration: "none", fontSize: "0.85rem" }}>
                <Mail size={16} color="var(--g-red)" />
                president@galactusdigital.com
              </a>
              <a href="tel:+33781074746"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.70)", textDecoration: "none", fontSize: "0.85rem" }}>
                <Phone size={16} color="var(--g-red)" />
                +33 07 81 07 47 46
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "rgba(255,255,255,0.50)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                <MapPin size={16} color="var(--g-red)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>Martinique · Guadeloupe · Guyane · Saint-Martin · Réunion · France hexagonale</span>
              </div>
            </div>

            {/* Financement rapide */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "1.25rem" }}>
              <div style={{ fontFamily: "var(--font-title)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.40)", marginBottom: "0.75rem" }}>
                Financements disponibles
              </div>
              {[
                ["OPCO", "Prise en charge totale possible"],
                ["AIF Pôle Emploi", "Pour demandeurs d\'emploi"],
                ["Plan de formation", "Entreprise — toutes tailles"],
              ].map(([label, detail]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.45rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontFamily: "var(--font-title)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--g-red)", textTransform: "uppercase" }}>{label}</span>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", textAlign: "right", maxWidth: "170px" }}>{detail.replace(/\'/g, "\'")}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Mobile : stack vertical */}
        <style>{`
          @media (max-width: 860px) {
            #contact .section-inner > div { grid-template-columns: 1fr !important; }
            #contact .section-inner > div > div:last-child { order: -1; }
          }
          #contact input:focus, #contact select:focus, #contact textarea:focus {
            border-color: var(--g-red) !important;
          }
          #contact select option { background: #1D1D1B; color: #fff; }
        `}</style>

      </div>
    </section>
  )
}
