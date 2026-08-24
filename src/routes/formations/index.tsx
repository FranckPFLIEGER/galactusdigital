import { createFileRoute } from "@tanstack/react-router"
import { useState, useMemo } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ParcoursMetier } from "../../components/ParcoursMetier"
import { FORMATIONS, FAMILLES } from "../../data/catalogue"
import type { Formation } from "../../data/catalogue"
import { ArrowRight, Clock, Award, Phone, Mail, Filter, Calendar, Check } from "lucide-react"
import { getProchaineSession } from "../../data/sessions"

export const Route = createFileRoute("/formations/")({
  component: FormationsPage,
})

const GMAIL = "https://mail.google.com/mail/?view=cm&to=president@galactusdigital.com&su=Demande%20de%20formation"

const EDITEUR_COLOR: Record<string, string> = {
  "Cisco Networking Academy": "#E41F26",
  "Microsoft": "#1D1D1B",
}

const NIVEAU_BG: Record<string, string> = {
  "Grand débutant": "rgba(228,31,38,.12)",
  "Fondamental":   "rgba(187,187,187,.18)",
  "Intermédiaire": "rgba(228,31,38,.06)",
  "Avancé":        "rgba(228,31,38,.10)",
}
const NIVEAU_COLOR: Record<string, string> = {
  "Grand débutant": "#E41F26",
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
  const prochaine = getProchaineSession(f.slug)
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

      {/* bandeau socle */}
      {f.socle && (
        <div style={{ display: "flex", alignItems: "center", gap: ".3rem", margin: "0 1.25rem .5rem", padding: ".2rem .5rem", background: "rgba(228,31,38,.08)", border: "1px solid rgba(228,31,38,.25)", alignSelf: "flex-start" }}>
          <Check size={11} color="#E41F26" />
          <span style={{ fontFamily: "var(--font-title)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#E41F26" }}>
            Aucun prérequis — reconversion
          </span>
        </div>
      )}

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

      {prochaine && (
        <div className="gd-next-session" style={{ display: "flex", alignItems: "center", gap: ".35rem", margin: "0 1.25rem", padding: ".3rem .55rem", background: "rgba(228,31,38,0.08)", border: "1px solid rgba(228,31,38,0.25)", alignSelf: "flex-start" }}>
          <Calendar size={11} color="#E41F26" />
          <span style={{ fontFamily: "var(--font-title)", fontSize: ".64rem", fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#E41F26" }}>
            Prochaine session : {prochaine.dateLabel} · {prochaine.territoire}
          </span>
        </div>
      )}

      {/* prix + CTA */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".9rem 1.25rem", borderTop: "1px solid rgba(187,187,187,.20)", marginTop: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: ".15rem" }}>
          <span style={{ fontFamily: "var(--font-title)", fontSize: ".82rem", fontWeight: 700, color: "var(--g-black)" }}>
            {f.prixPublic && f.prix?.presentiel ? `${f.prix.presentiel.toLocaleString('fr-FR')} € TTC` : 'Sur devis'}
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

  const nbFamilles = useMemo(() => new Set(FORMATIONS.map(f => f.famille)).size, [])
  const nbSocle    = useMemo(() => FORMATIONS.filter(f => f.socle).length, [])

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
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,.65)", maxWidth: "720px", lineHeight: 1.8, marginBottom: "2rem" }}>
              {FORMATIONS.length} formations certifiantes officielles dispensées par des formateurs accrédités éditeurs,
              dont {nbSocle} formations d'entrée sans aucun prérequis pour les personnes en reconversion.
              Présentiel, FOAD et E-learning — dans les territoires ultramarins et en France hexagonale.
            </p>
            {/* Stats */}
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {[
                [String(FORMATIONS.length), "formations"],
                [String(nbSocle), "sans prérequis"],
                ["2", "éditeurs officiels"],
                [String(nbFamilles), "familles"],
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

        {/* ── Parcours métier (Bloc 0 reconversion) ── */}
        <ParcoursMetier />

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
                    {fam === "Tout" ? "Toutes" : (FAMILLES[fam]?.label ?? fam)}
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
                Vous partez de zéro ?
              </h2>
              <p style={{ fontSize: ".90rem", color: "rgba(255,255,255,.55)", margin: 0, lineHeight: 1.7 }}>
                C'est le cas prévu. Un test de positionnement gratuit détermine votre bloc d'entrée et le financement mobilisable.
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
