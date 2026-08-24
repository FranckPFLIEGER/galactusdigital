import { useState } from "react"
import { ChevronDown, ArrowRight, Check } from "lucide-react"
import { PARCOURS, heuresParcours, heuresSocle } from "../data/parcours"
import type { Parcours, BlocParcours } from "../data/parcours"

// ─────────────────────────────────────────────────────────────────────────────
// ParcoursMetier — section « Huit trajectoires, une seule porte d'entrée »
// Remplace le bloc « Sept trajectoires certifiantes » de routes/formations/index.tsx
// ─────────────────────────────────────────────────────────────────────────────

function EtapeLigne({ titre, slug, heures, nouveau, col }: { titre: string; slug: string; heures: number; nouveau?: boolean; col: string }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: ".5rem", padding: ".25rem 0" }}>
      <span style={{ marginTop: ".55rem", width: "10px", height: "1px", background: "rgba(187,187,187,.8)", flexShrink: 0 }} />
      <a
        href={`/formations/${slug}`}
        style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: ".2rem .5rem", textDecoration: "none", color: "var(--g-black)" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = col }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--g-black)" }}
      >
        <span style={{ fontSize: ".82rem", lineHeight: 1.45, fontWeight: 600 }}>{titre}</span>
        <span style={{ fontSize: ".70rem", color: "#999", fontVariantNumeric: "tabular-nums" }}>{heures} h</span>
        {nouveau && (
          <span style={{ fontFamily: "var(--font-title)", fontSize: ".52rem", fontWeight: 700, letterSpacing: ".10em", textTransform: "uppercase", color: "#fff", background: "#E41F26", padding: ".08rem .35rem" }}>
            Nouveau
          </span>
        )}
      </a>
    </li>
  )
}

function BlocBloc({ bloc, col }: { bloc: BlocParcours; col: string }) {
  const socle = bloc.rang === 0
  return (
    <div style={{ position: "relative", paddingLeft: "1.4rem", borderLeft: `2px solid ${socle ? "#E41F26" : "rgba(187,187,187,.45)"}`, paddingBottom: socle ? ".9rem" : "1.1rem" }}>
      <span style={{
        position: "absolute", left: "-11px", top: 0, width: "20px", height: "20px", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-title)", fontSize: ".62rem", fontWeight: 700,
        background: socle ? "#E41F26" : "#fff",
        color: socle ? "#fff" : "var(--g-black)",
        border: socle ? "2px solid #E41F26" : "2px solid rgba(187,187,187,.7)",
      }}>
        {bloc.rang}
      </span>

      <div style={{ fontFamily: "var(--font-title)", fontSize: ".74rem", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: socle ? "#E41F26" : "var(--g-black)", lineHeight: 1.25 }}>
        {bloc.titre}
      </div>
      <div style={{ fontSize: ".74rem", color: "#8a8a88", fontStyle: "italic", lineHeight: 1.45, marginTop: ".15rem" }}>
        {bloc.intention}
      </div>

      {socle && (
        <div style={{ display: "inline-flex", alignItems: "center", gap: ".3rem", marginTop: ".45rem", padding: ".2rem .5rem", background: "rgba(228,31,38,.08)", border: "1px solid rgba(228,31,38,.25)" }}>
          <Check size={11} color="#E41F26" />
          <span style={{ fontFamily: "var(--font-title)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#E41F26" }}>
            Aucun prérequis
          </span>
        </div>
      )}

      <ul style={{ listStyle: "none", margin: ".45rem 0 0", padding: 0 }}>
        {bloc.etapes.map(e => <EtapeLigne key={e.slug + e.titre} {...e} col={col} />)}
      </ul>
    </div>
  )
}

function CarteParcours({ p }: { p: Parcours }) {
  const [ouvert, setOuvert] = useState(false)
  const total = heuresParcours(p)
  const socle = heuresSocle(p)
  const bloc0 = p.blocs.filter(b => b.rang === 0)
  const suite = p.blocs.filter(b => b.rang !== 0)

  return (
    <div style={{ background: "var(--g-offwhite)", border: "1px solid rgba(187,187,187,.35)", borderTop: `3px solid ${p.couleur}`, padding: "1.5rem", display: "flex", flexDirection: "column" }}>
      <h3 style={{ fontFamily: "var(--font-title)", fontSize: "1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", color: "var(--g-black)", margin: "0 0 .5rem", lineHeight: 1.2 }}>
        {p.titre}
      </h3>
      <p style={{ fontSize: ".85rem", color: "#5a5a58", lineHeight: 1.6, margin: "0 0 .85rem" }}>{p.pitch}</p>

      <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <span style={{ fontFamily: "var(--font-title)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#fff", background: "#E41F26", padding: ".18rem .5rem" }}>
          Entrée sans prérequis
        </span>
        <span style={{ fontFamily: "var(--font-title)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#777", background: "#fff", border: "1px solid rgba(187,187,187,.45)", padding: ".18rem .5rem" }}>
          {socle} h de socle
        </span>
        <span style={{ fontFamily: "var(--font-title)", fontSize: ".58rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#777", background: "#fff", border: "1px solid rgba(187,187,187,.45)", padding: ".18rem .5rem" }}>
          {total} h au total
        </span>
      </div>

      {bloc0.map(b => <BlocBloc key={b.rang} bloc={b} col={p.couleur} />)}

      {ouvert && suite.map(b => <BlocBloc key={b.rang} bloc={b} col={p.couleur} />)}

      <button
        type="button"
        onClick={() => setOuvert(v => !v)}
        aria-expanded={ouvert}
        style={{
          display: "inline-flex", alignItems: "center", gap: ".35rem", alignSelf: "flex-start",
          marginTop: ".4rem", padding: 0, background: "transparent", border: "none", cursor: "pointer",
          fontFamily: "var(--font-title)", fontSize: ".65rem", fontWeight: 700, letterSpacing: ".10em",
          textTransform: "uppercase", color: p.couleur,
        }}
      >
        {ouvert ? "Masquer la suite du parcours" : `Voir les ${suite.length} blocs suivants`}
        <ChevronDown size={13} style={{ transform: ouvert ? "rotate(180deg)" : "none", transition: "transform .18s" }} />
      </button>

      <div style={{ marginTop: "auto", paddingTop: ".9rem", borderTop: "1px solid rgba(187,187,187,.3)" }}>
        <div style={{ fontFamily: "var(--font-title)", fontSize: ".62rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#999", marginBottom: ".25rem" }}>
          Débouchés
        </div>
        <p style={{ fontSize: ".78rem", color: "#5a5a58", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>{p.debouche}</p>
        <p style={{ fontSize: ".72rem", color: "#8a8a88", lineHeight: 1.5, margin: ".5rem 0 0" }}>{p.entree}</p>
      </div>
    </div>
  )
}

export function ParcoursMetier() {
  return (
    <section id="parcours" style={{ background: "var(--g-white)", padding: "4rem 2rem", borderBottom: "1px solid rgba(187,187,187,.25)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <span style={{ fontFamily: "var(--font-title)", fontSize: ".70rem", fontWeight: 600, letterSpacing: ".20em", textTransform: "uppercase", color: "var(--g-red)", display: "block", marginBottom: ".6rem" }}>
          Parcours métier
        </span>
        <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 700, color: "var(--g-black)", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: ".75rem" }}>
          Huit trajectoires, une seule porte d'entrée
        </h2>
        <p style={{ fontSize: ".95rem", color: "#5a5a58", maxWidth: "820px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
          Chaque parcours démarre par un <strong style={{ color: "var(--g-black)" }}>Bloc&nbsp;0 sans aucun prérequis</strong>. Vous n'avez jamais travaillé dans l'informatique&nbsp;? C'est exactement le point de départ prévu. Les personnes déjà techniques entrent directement au Bloc&nbsp;1 après un test de positionnement.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "1.25rem" }} className="parcours-grid">
          {PARCOURS.map(p => <CarteParcours key={p.id} p={p} />)}
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: ".75rem", marginTop: "1.75rem", borderLeft: "3px solid var(--g-red)", paddingLeft: "1rem" }}>
          <p style={{ fontSize: ".82rem", color: "#888", margin: 0, fontStyle: "italic", lineHeight: 1.6 }}>
            Un test de positionnement gratuit détermine votre bloc d'entrée. Formateur certifié éditeur, accompagnement au financement OPCO et aides régionales DOM, présence dans 6 territoires ultramarins et en France hexagonale. Parcours personnalisables sur devis.
          </p>
        </div>

        <a
          href="#cisco"
          style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", marginTop: "1.25rem", fontFamily: "var(--font-title)", fontSize: ".70rem", fontWeight: 700, letterSpacing: ".10em", textTransform: "uppercase", color: "var(--g-red)", textDecoration: "none" }}
        >
          Voir les formations à l'unité <ArrowRight size={13} />
        </a>
      </div>
    </section>
  )
}

export default ParcoursMetier
