import { createFileRoute } from "@tanstack/react-router"
import { useState, useMemo } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { FORMATIONS, FAMILLES } from "../../data/catalogue"
import type { Formation } from "../../data/catalogue"
import { ArrowRight, Clock, Award, Phone, Mail, Filter } from "lucide-react"

export const Route = createFileRoute("/formations/")({
  component: FormationsPage,
})

const GMAIL = "https://mail.google.com/mail/?view=cm&to=president@galactusdigital.com&su=Demande%20de%20formation"

const EDITEUR_COLOR: Record<string, string> = {
  "Cisco Networking Academy": "#E41F26",
  "Microsoft": "#1D1D1B",
}

const NIVEAU_BG: Record<string, string> = {
  "Fondamental":   "rgba(187,187,187,.18)",
  "Intermédiaire": "rgba(228,31,38,.06)",
  "Avancé":        "rgba(228,31,38,.10)",
}
const NIVEAU_COLOR: Record<string, string> = {
  "Fondamental":   "#8a8a88",
  "Intermédiaire": "#b71c1f",
  "Avancé":        "#E41F26",
}
const MODALITE_ICON: Record<string, string> = {
  "Présentiel": "🏫",
  "FOAD":       "📡",
  "E-learning": "💻",
}

function Card({ f }: { f: Formation }) {
  const color = EDITEUR_COLOR[f.editeur] ?? "#E41F26"
  return (
    <div style={{
      background: "#fff",
      border: "1px solid rgba(187,187,187,.30)",
      borderTop: `3px solid ${color}`,
      display: "flex",
      flexDirection: "column",
      transition: "transform .18s,box-shadow .18s",
    }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 8px 28px rgba(0,0,0,.08)" }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.boxShadow = "" }}
    >
      {/* top badges */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem .6rem" }}>
        <span style={{ fontFamily: "var(--font-title)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#fff", background: color, padding: ".15rem .55rem" }}>
          {f.editeur}
        </span>
        <span style={{ fontFamily: "var(--font-title)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".10em", textTransform: "uppercase", color: NIVEAU_COLOR[f.niveau] ?? "#888", background: NIVEAU_BG[f.niveau] ?? "#eee", padding: ".15rem .5rem" }}>
          {f.niveau}
        </span>
      </div>

      {/* titre + famille */}
      <div style={{ padding: "0 1.25rem .75rem" }}>
        <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: "var(--g-black)", margin: "0 0 .2rem", lineHeight: 1.2 }}>
          {f.titre}
        </h3>
        <div style={{ fontSize: ".74rem", color: "#999", fontFamily: "var(--font-title)", letterSpacing: ".06em" }}>
          {f.famille}
        </div>
      </div>

      {/* description */}
      <p style={{ fontSize: ".84rem", color: "#5a5a58", lineHeight: 1.65, margin: "0", padding: "0 1.25rem .75rem", flex: 1 }}>
        {f.description}
      </p>

      {/* durée + certification */}
      <div style={{ display: "flex", gap: "1.25rem", padding: "0 1.25rem .75rem", flexWrap: "wrap" }}>
        <span style={{ display: "flex", alignItems: "center", gap: ".3rem", fontSize: ".78rem", color: "#666" }}>
          <Clock size={13} color={color} /> {f.duree}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: ".3rem", fontSize: ".78rem", color: "#666" }}>
          <Award size={13} color={color} /> {f.examCode || f.certification}
        </span>
      </div>

      {/* modalités */}
      <div style={{ display: "flex", gap: ".35rem", flexWrap: "wrap", padding: "0 1.25rem .75rem" }}>
        {f.modalites.map(m => (
          <span key={m} style={{ fontFamily: "var(--font-title)", fontSize: ".58rem", fontWeight: 600, letterSpacing: ".10em", textTransform: "uppercase", padding: ".15rem .5rem", background: "var(--g-offwhite)", border: "1px solid rgba(187,187,187,.35)", color: "#777" }}>
            {MODALITE_ICON[m]} {m}
          </span>
        ))}
      </div>

      {/* prix + CTA */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".9rem 1.25rem", borderTop: "1px solid rgba(187,187,187,.20)", marginTop: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: ".15rem" }}>
          <span style={{ fontFamily: "var(--font-title)", fontSize: ".82rem", fontWeight: 700, color: "var(--g-black)" }}>
            Sur devis
          </span>
        </div>
        <a href={`/formations/${f.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: ".35rem", fontFamily: "var(--font-title)", fontSize: ".70rem", fontWeight: 700, letterSpacing: ".10em", textTransform: "uppercase", color, textDecoration: "none" }}>
          Voir la fiche <ArrowRight size={12} />
        </a>
      </div>
    </div>
  )
}

function FormationsPage() {
  const [editeurFilter, setEditeurFilter] = useState<string>("Tout")
  const [familleFilter, setFamilleFilter] = useState<string>("Tout")

  const editeurs = ["Tout", "Cisco Networking Academy", "Microsoft"]
  const familles = useMemo(() => {
    const base = editeurFilter === "Tout"
      ? FORMATIONS
      : FORMATIONS.filter(f => f.editeur === editeurFilter)
    return ["Tout", ...Array.from(new Set(base.map(f => f.famille)))]
  }, [editeurFilter])

  const filtered = useMemo(() => {
    return FORMATIONS.filter(f => {
      const okEditeur = editeurFilter === "Tout" || f.editeur === editeurFilter
      const okFamille = familleFilter === "Tout" || f.famille === familleFilter
      return okEditeur && okFamille
    })
  }, [editeurFilter, familleFilter])

  // Groupes pour les ancres footer
  const cisco     = filtered.filter(f => f.editeur === "Cisco Networking Academy")
  const microsoft = filtered.filter(f => f.editeur === "Microsoft")

  function selectEditeur(e: string) {
    setEditeurFilter(e)
    setFamilleFilter("Tout")
  }

  const btnBase: React.CSSProperties = {
    fontFamily: "var(--font-title)",
    fontSize: ".72rem",
    fontWeight: 700,
    letterSpacing: ".10em",
    textTransform: "uppercase",
    padding: ".5rem 1.1rem",
    border: "1px solid rgba(187,187,187,.4)",
    background: "transparent",
    cursor: "pointer",
    transition: "all .15s",
  }
  const btnActive = (color: string): React.CSSProperties => ({
    ...btnBase,
    background: color,
    borderColor: color,
    color: "#fff",
  })

  return (
    <>
      <Header />
      <main style={{ paddingTop: "72px" }}>

        {/* ── Hero ── */}
        <section style={{ background: "var(--g-black)", borderBottom: "3px solid var(--g-red)", padding: "4rem 2rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--font-title)", fontSize: ".70rem", fontWeight: 600, letterSpacing: ".20em", textTransform: "uppercase", color: "var(--g-red)", display: "block", marginBottom: ".6rem" }}>
              Catalogue
            </span>
            <h1 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: "1rem" }}>
              Certifications IT
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,.65)", maxWidth: "680px", lineHeight: 1.8, marginBottom: "2rem" }}>
              {FORMATIONS.length} formations certifiantes officielles dispensées par des formateurs accrédités éditeurs.
              Présentiel, FOAD et E-learning — dans les territoires ultramarins et en France hexagonale.
            </p>
            {/* Stats */}
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[
                [String(FORMATIONS.length), "formations"],
                ["2", "éditeurs officiels"],
                ["8", "familles"],
                ["100%", "de réussite (518 formés)"],
              ].map(([num, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: "1.8rem", fontWeight: 700, color: "var(--g-red)", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: ".68rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.50)", marginTop: ".2rem" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Parcours certifiants ── */}
        <section style={{ background: "var(--g-white)", padding: "4rem 2rem", borderBottom: "1px solid rgba(187,187,187,.25)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--font-title)", fontSize: ".70rem", fontWeight: 600, letterSpacing: ".20em", textTransform: "uppercase", color: "var(--g-red)", display: "block", marginBottom: ".6rem" }}>
              Parcours métier
            </span>
            <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 700, color: "var(--g-black)", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: ".75rem" }}>
              Sept trajectoires certifiantes
            </h2>
            <p style={{ fontSize: ".95rem", color: "#5a5a58", maxWidth: "760px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Au-delà des formations à l'unité, nous construisons des parcours alignés sur les métiers les plus recherchés en 2026 — du socle réseau à l'automatisation, de la cybersécurité au cloud et à l'IA Microsoft.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "1.25rem" }} className="parcours-grid">
              {[
                {
                  col: "#E41F26",
                  titre: "Réseaux & Infrastructure",
                  pitch: "Le socle universellement reconnu, du câblage au réseau d'entreprise piloté par l'IA.",
                  etapes: "Networking Essentials → CCNA (ITN · SRWE · ENSA) → CCNP Enterprise → Infrastructure réseau (RS en cours d'enregistrement)",
                  debouche: "Technicien réseau, administrateur infrastructure, ingénieur réseau",
                },
                {
                  col: "#1D1D1B",
                  titre: "Cybersécurité",
                  pitch: "Un des axes les plus porteurs en salaire : défense, SOC et sécurité offensive.",
                  etapes: "Cybersecurity Essentials → CCNA Cybersecurity → CCNP Security → Ethical Hacker",
                  debouche: "Analyste SOC, pentester, ingénieur sécurité",
                },
                {
                  col: "#E41F26",
                  titre: "Automatisation & IA réseau",
                  pitch: "Le virage 2026 : d'ici 2027, l'essentiel des opérations réseau sera automatisé.",
                  etapes: "Python Essentials 1 & 2 → CCNA Automation (ex-DevNet, IA-ready)",
                  debouche: "Ingénieur automatisation, NetDevOps, développeur réseau",
                },
                {
                  col: "#1D1D1B",
                  titre: "Cloud & Infrastructure Azure",
                  pitch: "Administrer le cloud Azure et l'infrastructure serveur de bout en bout.",
                  etapes: "AZ-900 → AZ-104 → AZ-802 (Windows Server) → AZ-1008 (Active Directory)",
                  debouche: "Administrateur Azure, administrateur systèmes, ingénieur infrastructure",
                },
                {
                  col: "#E41F26",
                  titre: "Modern Workplace Microsoft 365",
                  pitch: "Déployer et sécuriser le poste de travail moderne et le tenant M365.",
                  etapes: "AB-900 (Copilot Fundamentals) → MS-102 (M365 Administrator) → MD-102 (Intune)",
                  debouche: "Administrateur Microsoft 365, endpoint administrator, admin collaboratif",
                },
                {
                  col: "#1D1D1B",
                  titre: "Sécurité Microsoft",
                  pitch: "Le parcours sécurité officiel Microsoft : identité, accès et protection des données.",
                  etapes: "SC-900 → SC-300 (Identité & accès) → SC-401 (Purview / protection de l'information)",
                  debouche: "Administrateur identité, ingénieur sécurité, référent conformité",
                },
                {
                  col: "#E41F26",
                  titre: "Data, IA & Copilot Microsoft",
                  pitch: "Transformer la donnée en décision et déployer l'IA Copilot en entreprise.",
                  etapes: "AI-901 → PL-300 (Power BI) · PL-7002 · PL-7008 · MS-4017 → MS-4010 (Copilot Specialist)",
                  debouche: "Data analyst, référent Power BI, spécialiste automatisation & Copilot",
                },
              ].map(p => (
                <div key={p.titre} style={{ background: "var(--g-offwhite)", border: "1px solid rgba(187,187,187,.35)", borderTop: `3px solid ${p.col}`, padding: "1.5rem", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: "var(--g-black)", margin: "0 0 .5rem", lineHeight: 1.2 }}>
                    {p.titre}
                  </h3>
                  <p style={{ fontSize: ".85rem", color: "#5a5a58", lineHeight: 1.6, margin: "0 0 1rem" }}>{p.pitch}</p>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: p.col, marginBottom: ".3rem" }}>Parcours</div>
                  <p style={{ fontSize: ".82rem", color: "var(--g-black)", fontWeight: 600, lineHeight: 1.5, margin: "0 0 1rem" }}>{p.etapes}</p>
                  <div style={{ marginTop: "auto", paddingTop: ".75rem", borderTop: "1px solid rgba(187,187,187,.3)" }}>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#999", marginBottom: ".25rem" }}>Débouchés</div>
                    <p style={{ fontSize: ".78rem", color: "#5a5a58", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>{p.debouche}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: ".82rem", color: "#888", marginTop: "1.75rem", fontStyle: "italic", lineHeight: 1.6 }}>
              Formateur certifié éditeur, accompagnement au financement OPCO et aides régionales DOM, présence dans 6 territoires ultramarins et en France hexagonale. Parcours personnalisables sur devis.
            </p>
          </div>
        </section>
        {/* ── Filtres ── */}
        <section style={{ background: "var(--g-offwhite)", padding: "1.5rem 2rem", borderBottom: "1px solid rgba(187,187,187,.25)", position: "sticky", top: "72px", zIndex: 50 }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            {/* Éditeur */}
            <div style={{ display: "flex", gap: ".5rem", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginRight: ".5rem" }}>
                <Filter size={14} color="#888" />
                <span style={{ fontFamily: "var(--font-title)", fontSize: ".65rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#888" }}>Éditeur</span>
              </div>
              {editeurs.map(e => (
                <button key={e} onClick={() => selectEditeur(e)}
                  style={editeurFilter === e ? btnActive(e === "Microsoft" ? "#1D1D1B" : e === "Cisco Networking Academy" ? "#E41F26" : "#1D1D1B") : { ...btnBase, color: "#555" }}>
                  {e}
                </button>
              ))}
              <div style={{ width: "1px", height: "28px", background: "rgba(187,187,187,.5)", margin: "0 .5rem" }} />
              <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginRight: ".25rem" }}>
                <span style={{ fontFamily: "var(--font-title)", fontSize: ".65rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#888" }}>Famille</span>
              </div>
              <div style={{ display: "flex", gap: ".35rem", flexWrap: "wrap" }}>
                {familles.map(fam => (
                  <button key={fam} onClick={() => setFamilleFilter(fam)}
                    style={familleFilter === fam ? { ...btnBase, background: "var(--g-black)", borderColor: "var(--g-black)", color: "#fff", fontSize: ".65rem" } : { ...btnBase, color: "#666", fontSize: ".65rem" }}>
                    {fam === "Tout" ? "Toutes" : fam}
                  </button>
                ))}
              </div>
            </div>
            {/* Résultat */}
            <div style={{ marginTop: ".75rem", fontFamily: "var(--font-title)", fontSize: ".68rem", fontWeight: 600, letterSpacing: ".10em", textTransform: "uppercase", color: "#888" }}>
              {filtered.length} formation{filtered.length > 1 ? "s" : ""} affichée{filtered.length > 1 ? "s" : ""}
            </div>
          </div>
        </section>

        {/* ── Section Cisco ── */}
        {cisco.length > 0 && (
          <section id="cisco" style={{ background: "var(--g-white)", padding: "4rem 2rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".5rem" }}>
                <div style={{ width: "4px", height: "32px", background: "#E41F26" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#E41F26" }}>
                    Partenaire n° 3018982
                  </div>
                  <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: "var(--g-black)", margin: 0 }}>
                    Cisco Networking Academy
                  </h2>
                </div>
                <span style={{ fontFamily: "var(--font-title)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#fff", background: "#E41F26", padding: ".2rem .7rem", marginLeft: "auto" }}>
                  {cisco.length} formation{cisco.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="g-rule" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.25rem", marginTop: ".5rem" }}>
                {cisco.map(f => <Card key={f.slug} f={f} />)}
              </div>
            </div>
          </section>
        )}

        {/* ── Section Microsoft ── */}
        {microsoft.length > 0 && (
          <section id="microsoft" style={{ background: "var(--g-offwhite)", padding: "4rem 2rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".5rem" }}>
                <div style={{ width: "4px", height: "32px", background: "#1D1D1B" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#1D1D1B" }}>
                    Partenaire n° 4653557
                  </div>
                  <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: "var(--g-black)", margin: 0 }}>
                    Microsoft Azure & M365
                  </h2>
                </div>
                <span style={{ fontFamily: "var(--font-title)", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#fff", background: "#1D1D1B", padding: ".2rem .7rem", marginLeft: "auto" }}>
                  {microsoft.length} formation{microsoft.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="g-rule" />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.25rem", marginTop: ".5rem" }}>
                {microsoft.map(f => <Card key={f.slug} f={f} />)}
              </div>
            </div>
          </section>
        )}

        {/* ── Message si aucun résultat ── */}
        {filtered.length === 0 && (
          <section style={{ background: "var(--g-white)", padding: "6rem 2rem", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-title)", fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", color: "var(--g-black)", marginBottom: ".75rem" }}>
              Aucune formation trouvée
            </div>
            <p style={{ fontSize: ".90rem", color: "#888", marginBottom: "1.5rem" }}>
              Modifiez les filtres ou contactez-nous pour une formation sur mesure.
            </p>
            <button onClick={() => { setEditeurFilter("Tout"); setFamilleFilter("Tout") }}
              className="btn-red">
              Réinitialiser les filtres
            </button>
          </section>
        )}

        {/* ── CTA ── */}
        <section style={{ background: "var(--g-black)", padding: "3.5rem 2rem", borderTop: "4px solid var(--g-red)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: "#fff", margin: "0 0 .4rem" }}>
                Formation non trouvée ?
              </h2>
              <p style={{ fontSize: ".90rem", color: "rgba(255,255,255,.55)", margin: 0, lineHeight: 1.7 }}>
                Notre catalogue évolue. Contactez-nous pour une formation sur mesure ou un programme intra.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", flexShrink: 0 }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href={GMAIL} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Mail size={16} /> Demander un devis</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
