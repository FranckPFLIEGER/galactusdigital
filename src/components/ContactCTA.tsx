import { useState, useEffect, useMemo } from "react"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Send, Clock, Shield, Award } from "lucide-react"
import { useIntersection } from "../hooks/useIntersection"
import { FORMATIONS as CATALOGUE } from "../data/catalogue"

// ─────────────────────────────────────────────────────────────────────────────
// ContactCTA — formulaire unique de demande de devis
//
// Toutes les demandes du site aboutissent ici (fiches formation, calendrier,
// pages modalités). Un lien peut pré-sélectionner la formation :
//   /?f=<slug>#contact
//
// Tous les champs sont obligatoires. Une demande arrive donc qualifiée :
// qui, pour quelle formation, dans quelle modalité, avec quel financement.
// Deux branches conditionnelles — particulier ou entreprise — adaptent le
// nom de l'organisation, le format d'organisation et les modes de financement.
// ─────────────────────────────────────────────────────────────────────────────

const TERRITOIRES = [
  "Martinique",
  "Guadeloupe",
  "Guyane",
  "Saint-Martin",
  "Saint-Barthélemy",
  "La Réunion",
  "France hexagonale",
]

// Les trois axes commerciaux. Le choix détermine la liste des formations.
const MODALITES = [
  "E-learning tutoré — Cisco Networking Academy",
  "Présentiel — Microsoft, CCNA accéléré",
  "FOAD classe virtuelle — Juniper JNCIA-Junos",
]
const MOD_ELEARNING  = MODALITES[0]
const MOD_PRESENTIEL = MODALITES[1]
const MOD_FOAD       = MODALITES[2]

const PROFILS = ["Particulier", "Entreprise / organisation"]
const PROFIL_PARTICULIER = PROFILS[0]
const PROFIL_ENTREPRISE  = PROFILS[1]

// Format d'organisation — entreprise uniquement
const FORMATS = [
  "Inter-entreprise (vos salariés rejoignent une session)",
  "Intra-entreprise (session dédiée, sur votre site)",
]

// Modes de prise en charge. Le CPF n'y figure pas : les certifications éditeur
// ne sont enregistrées ni au RNCP ni au Répertoire spécifique.
const FINANCEMENT_ENTREPRISE = [
  "OPCO — prise en charge à instruire",
  "Plan de développement des compétences (fonds propres)",
  "Dispositif régional ou FSE+",
  "À définir ensemble",
]
const FINANCEMENT_PARTICULIER = [
  "AIF France Travail (demandeur d'emploi)",
  "POEI France Travail",
  "Financement personnel",
  "À définir ensemble",
]

type FormState = {
  nom: string
  prenom: string
  email: string
  telephone: string
  profil: string
  entreprise: string
  format: string
  territoire: string
  modalite: string
  formation: string
  financement: string
  message: string
  rgpd: boolean
}

const INIT: FormState = {
  nom: "", prenom: "", email: "", telephone: "",
  profil: "", entreprise: "", format: "",
  territoire: "", modalite: "", formation: "",
  financement: "", message: "", rgpd: false,
}

const WEB3FORMS_KEY = "035246e2-1884-48e8-bc56-411d7aee84e6"

// ─── Listes de formations, construites depuis le catalogue ────────────────────
// Une seule source de vérité : ajouter une formation au catalogue suffit.

const F_ELEARNING  = CATALOGUE.filter(f => f.modalites.includes("E-learning")).map(f => f.titre)
const F_PRESENTIEL = CATALOGUE.filter(f => f.modalites.includes("Présentiel")).map(f => f.titre)
const F_FOAD       = CATALOGUE.filter(f => f.modalites.includes("FOAD")).map(f => f.titre)

export function ContactCTA() {
  const { ref, isVisible } = useIntersection()
  const [form, setForm]     = useState<FormState>(INIT)
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle")

  // Pré-sélection depuis l'URL : /?f=<slug>#contact
  useEffect(() => {
    if (typeof window === "undefined") return
    const slug = new URLSearchParams(window.location.search).get("f")
    if (!slug) return
    const f = CATALOGUE.find(x => x.slug === slug)
    if (!f) return
    setForm(prev => ({
      ...prev,
      formation: f.titre,
      modalite: f.modalites.includes("E-learning") ? MOD_ELEARNING
              : f.modalites.includes("FOAD")       ? MOD_FOAD
              : MOD_PRESENTIEL,
    }))
  }, [])

  const estEntreprise = form.profil === PROFIL_ENTREPRISE

  const formationsProposees = useMemo(() => {
    if (form.modalite === MOD_ELEARNING)  return F_ELEARNING
    if (form.modalite === MOD_PRESENTIEL) return F_PRESENTIEL
    if (form.modalite === MOD_FOAD)       return F_FOAD
    return []
  }, [form.modalite])

  const financements = estEntreprise ? FINANCEMENT_ENTREPRISE : FINANCEMENT_PARTICULIER

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const val = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(prev => {
      const next = { ...prev, [k]: val }
      // Changer de modalité invalide une formation absente du nouvel axe
      if (k === "modalite" && next.formation) {
        const liste = val === MOD_ELEARNING ? F_ELEARNING
                    : val === MOD_FOAD      ? F_FOAD
                    : F_PRESENTIEL
        if (!liste.includes(next.formation)) next.formation = ""
      }
      // Changer de profil remet à zéro les champs qui en dépendent
      if (k === "profil") {
        next.financement = ""
        if (val === PROFIL_PARTICULIER) { next.entreprise = ""; next.format = "" }
      }
      return next
    })
  }

  // Tous les champs renseignés ? L'entreprise et le format ne valent que pour
  // le profil Entreprise.
  const complet =
    form.nom.trim() !== "" &&
    form.prenom.trim() !== "" &&
    form.email.trim() !== "" &&
    form.telephone.trim() !== "" &&
    form.profil !== "" &&
    (!estEntreprise || (form.entreprise.trim() !== "" && form.format !== "")) &&
    form.territoire !== "" &&
    form.modalite !== "" &&
    form.formation !== "" &&
    form.financement !== "" &&
    form.message.trim() !== "" &&
    form.rgpd

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!complet) return
    setStatus("sending")
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `[GALACTUS Digital] ${form.formation} — ${form.profil}`,
        from_name: `${form.prenom} ${form.nom}`,
        email: form.email,
        message: `DEMANDE REÇUE VIA GALACTUSDIGITAL.COM\n\n`
          + `Nom : ${form.prenom} ${form.nom}\n`
          + `Email : ${form.email}\n`
          + `Téléphone : ${form.telephone}\n`
          + `Profil : ${form.profil}\n`
          + (estEntreprise
              ? `Entreprise : ${form.entreprise}\nFormat : ${form.format}\n`
              : ``)
          + `Territoire : ${form.territoire}\n\n`
          + `Modalité : ${form.modalite}\n`
          + `Formation souhaitée : ${form.formation}\n`
          + `Prise en charge envisagée : ${form.financement}\n\n`
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
  const aide: React.CSSProperties = {
    fontSize: "0.72rem", color: "rgba(255,255,255,0.38)",
    marginTop: "0.3rem", lineHeight: 1.5,
  }

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
              Remplissez ce formulaire — nous vous répondons sous 48 h avec un devis personnalisé.
              Tous les champs sont nécessaires pour établir le devis et instruire votre financement.
            </p>

            {status === "ok" ? (
              <div style={{ background: "rgba(39,174,96,0.12)", border: "1px solid rgba(39,174,96,0.4)", padding: "2rem", textAlign: "center" }}>
                <CheckCircle size={40} color="#E41F26" style={{ marginBottom: "1rem" }} />
                <div style={{ fontFamily: "var(--font-title)", fontSize: "1.1rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>
                  Message envoyé !
                </div>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.62)", margin: 0 }}>
                  Nous vous répondons sous 48 h ouvrées à l&apos;adresse indiquée.
                </p>
                <button onClick={() => { setForm(INIT); setStatus("idle") }}
                  style={{ marginTop: "1.5rem", background: "none", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "0.6rem 1.5rem", cursor: "pointer", fontFamily: "var(--font-title)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                {/* Nom / Prénom */}
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
                    <label style={lbl}>Email *</label>
                    <input style={inp} type="email" required value={form.email} onChange={set("email")} placeholder="jean.dupont@entreprise.com" />
                  </div>
                  <div style={fld}>
                    <label style={lbl}>Téléphone *</label>
                    <input style={inp} type="tel" required value={form.telephone} onChange={set("telephone")} placeholder="+596 6 96 ..." />
                  </div>
                </div>

                {/* Profil — commande l'entreprise, le format et le financement */}
                <div style={fld}>
                  <label style={lbl}>Vous êtes *</label>
                  <select style={sel} required value={form.profil} onChange={set("profil")}>
                    <option value="" disabled>-- Particulier ou entreprise ? --</option>
                    {PROFILS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {form.profil === PROFIL_PARTICULIER && (
                    <span style={aide}>
                      Une inscription individuelle suppose une prise en charge par France Travail
                      (AIF ou POEI), une collectivité ou un employeur : indiquez-la ci-dessous, nous
                      montons le dossier avec vous. Si une part restait à votre charge, vous disposez
                      de 14 jours pour vous rétracter après signature.{" "}
                      <a href="/retractation" style={{ color: "#E41F26", fontWeight: 600, textDecoration: "none" }}>
                        Exercer ce droit en ligne
                      </a>.
                    </span>
                  )}
                </div>

                {/* Entreprise / Format — profil Entreprise uniquement */}
                {estEntreprise && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div style={fld}>
                      <label style={lbl}>Entreprise / Organisation *</label>
                      <input style={inp} required value={form.entreprise} onChange={set("entreprise")} placeholder="Ma Société SAS" />
                    </div>
                    <div style={fld}>
                      <label style={lbl}>Format *</label>
                      <select style={sel} required value={form.format} onChange={set("format")}>
                        <option value="" disabled>-- Choisir le format --</option>
                        {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
                      </select>
                    </div>
                  </div>
                )}

                {/* Territoire */}
                <div style={fld}>
                  <label style={lbl}>Territoire *</label>
                  <select style={sel} required value={form.territoire} onChange={set("territoire")}>
                    <option value="" disabled>-- Choisir un territoire --</option>
                    {TERRITOIRES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Modalité — commande la liste des formations */}
                <div style={fld}>
                  <label style={lbl}>Modalité souhaitée *</label>
                  <select style={sel} required value={form.modalite} onChange={set("modalite")}>
                    <option value="" disabled>-- Choisir la modalité --</option>
                    {MODALITES.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>

                {/* Formation — filtrée par la modalité */}
                <div style={fld}>
                  <label style={lbl}>Formation souhaitée *</label>
                  <select style={sel} required value={form.formation} onChange={set("formation")}
                    disabled={form.modalite === ""}>
                    <option value="" disabled>
                      {form.modalite === "" ? "-- Choisissez d'abord la modalité --" : "-- Choisir une formation --"}
                    </option>
                    {formationsProposees.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                  {form.modalite !== "" && (
                    <span style={aide}>
                      {form.modalite === MOD_ELEARNING
                        ? `${F_ELEARNING.length} formations Cisco Networking Academy — e-learning tutoré, tarif public.`
                        : form.modalite === MOD_FOAD
                        ? `${F_FOAD.length} parcours Juniper en classe virtuelle WEBEX — sur devis.`
                        : `${F_PRESENTIEL.length} formations Microsoft et CCNA accéléré — présentiel, sur devis.`}
                    </span>
                  )}
                </div>

                {/* Prise en charge — liste selon le profil */}
                <div style={fld}>
                  <label style={lbl}>Prise en charge envisagée *</label>
                  <select style={sel} required value={form.financement} onChange={set("financement")}
                    disabled={form.profil === ""}>
                    <option value="" disabled>
                      {form.profil === "" ? "-- Indiquez d'abord votre profil --" : "-- Choisir le mode de financement --"}
                    </option>
                    {form.profil !== "" && financements.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                  <span style={aide}>
                    Nos formations ne sont pas éligibles au CPF : les certifications éditeur ne sont
                    enregistrées ni au RNCP ni au Répertoire spécifique.
                  </span>
                </div>

                {/* Message */}
                <div style={fld}>
                  <label style={lbl}>Votre projet *</label>
                  <textarea style={{ ...inp, resize: "vertical", minHeight: "110px" }}
                    required value={form.message} onChange={set("message")}
                    placeholder="Nombre de stagiaires, niveau de départ, échéance souhaitée, contraintes…" />
                  <span style={aide}>
                    Précisez ici toute adaptation souhaitée : nous construisons des parcours sur mesure
                    à partir du catalogue.
                  </span>
                </div>

                {/* RGPD */}
                <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                  <input type="checkbox" required checked={form.rgpd} onChange={set("rgpd")}
                    style={{ marginTop: "3px", accentColor: "var(--g-red)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                    J&apos;accepte que GALACTUS Digital conserve mes données pour traiter ma demande.
                    Conformément au RGPD, je peux exercer mes droits en contactant
                    president@galactusdigital.com. *
                  </span>
                </label>

                {status === "err" && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#f87171", fontSize: "0.83rem" }}>
                    <AlertCircle size={15} /> Erreur d&apos;envoi. Contactez-nous directement par email.
                  </div>
                )}

                {!complet && (
                  <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>
                    Renseignez tous les champs pour activer l&apos;envoi.
                  </div>
                )}

                <button type="submit" disabled={status === "sending" || !complet}
                  className="btn-red"
                  style={{ alignSelf: "flex-start", opacity: (!complet || status === "sending") ? 0.5 : 1, cursor: (!complet || status === "sending") ? "not-allowed" : "pointer" }}>
                  {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
                  {status !== "sending" && <Send size={15} />}
                </button>

              </form>
            )}
          </div>

          {/* ── Colonne info ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Les deux axes */}
            <div style={{ background: "rgba(228,31,38,0.08)", border: "1px solid rgba(228,31,38,0.20)", padding: "1.75rem" }}>
              <div style={{ fontFamily: "var(--font-title)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--g-red)", marginBottom: "1.25rem" }}>
                Nos deux offres
              </div>
              <div style={{ marginBottom: "1.1rem" }}>
                <div style={{ fontFamily: "var(--font-title)", fontSize: "0.80rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.3rem" }}>
                  Cisco Networking Academy
                </div>
                <div style={{ fontSize: "0.80rem", color: "rgba(255,255,255,0.60)", lineHeight: 1.6 }}>
                  E-learning tutoré, tarif public affiché, titre officiel de l&apos;éditeur compris.
                  Accès plateforme ouvert un an.
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-title)", fontSize: "0.80rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.3rem" }}>
                  Microsoft · Juniper
                </div>
                <div style={{ fontSize: "0.80rem", color: "rgba(255,255,255,0.60)", lineHeight: 1.6 }}>
                  Présentiel uniquement, en inter ou en intra sur votre site. Devis sur mesure.
                </div>
              </div>
            </div>

            {/* Engagements */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem" }}>
              {[
                [Clock, "Réponse sous 48 h ouvrées"],
                [Shield, "Devis gratuit et sans engagement"],
                [Award, "Certification Qualiopi garantie"],
                [CheckCircle, "Accompagnement au financement"],
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
                +33 7 81 07 47 46
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "rgba(255,255,255,0.50)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                <MapPin size={16} color="var(--g-red)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>Martinique · Guadeloupe · Guyane · Saint-Martin · Réunion · France hexagonale</span>
              </div>
            </div>

            {/* Financements */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "1.25rem" }}>
              <div style={{ fontFamily: "var(--font-title)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.40)", marginBottom: "0.75rem" }}>
                Financements disponibles
              </div>
              {[
                ["OPCO", "Entreprise — prise en charge possible"],
                ["AIF · POEI", "France Travail — demandeur d'emploi"],
                ["Plan de formation", "Entreprise — toutes tailles"],
              ].map(([label, detail]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.45rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontFamily: "var(--font-title)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--g-red)", textTransform: "uppercase" }}>{label}</span>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", textAlign: "right", maxWidth: "170px" }}>{detail}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            #contact .section-inner > div { grid-template-columns: 1fr !important; }
            #contact .section-inner > div > div:last-child { order: -1; }
          }
          #contact input:focus, #contact select:focus, #contact textarea:focus {
            border-color: var(--g-red) !important;
          }
          #contact select option { background: #1D1D1B; color: #fff; }
          #contact select option[disabled] { color: rgba(255,255,255,0.3); }
          #contact select:disabled { opacity: 0.45; cursor: not-allowed; }
        `}</style>

      </div>
    </section>
  )
}
