import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle, Phone, Mail, Award, Shield, TrendingUp, Users, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/certifications')({
  head: () => ({
    meta: [
      { title: 'Certifications IT Cisco, Microsoft, Linux — GALACTUS Digital' },
      { name: 'description', content: 'Passez vos certifications IT officielles Cisco CCNA, Microsoft Azure, Linux LPI. Centre agréé Cisco Networking Academy n° 3018982. Qualiopi.' },
      { property: 'og:title', content: 'Certifications IT Cisco, Microsoft, Linux — GALACTUS Digital' },
      { property: 'og:url', content: 'https://galactusdigital.com/certifications' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/certifications' }],
  }),
  component: CertificationsPage,
})

function CertificationsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "72px" }}>

        {/* ── Hero ── */}
        <section style={{ background: "var(--g-black)", borderBottom: "3px solid var(--g-red)", padding: "4rem 2rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--font-title)", fontSize: "0.70rem", fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: "var(--g-red)", display: "block", marginBottom: "0.6rem" }}>
              Certifications
            </span>
            <h1 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "1rem" }}>
              Passer une certification
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "680px", lineHeight: 1.8 }}>
              GALACTUS Digital collabore avec l'ensemble des organismes certificateurs afin de proposer à ses apprenants la certification correspondant à leurs besoins — dans les territoires ultramarins et en France hexagonale, en présentiel ou à distance.
            </p>
          </div>
        </section>

        {/* ── Certification qualité Qualiopi ── */}
        <section style={{ background: "var(--g-offwhite)", padding: "3rem 2rem", borderBottom: "1px solid rgba(187,187,187,0.25)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "2.5rem", flexWrap: "wrap" }}>
            <a href="/certificat-qualiopi.pdf" target="_blank" rel="noopener noreferrer" aria-label="Certificat Qualiopi Certifopac — ouvrir le PDF" style={{ display: "inline-block", flexShrink: 0 }}>
              <img src="/qualiopi.jpg" alt="Certification Qualiopi — Processus certifié République Française — Actions de formation" loading="lazy" style={{ display: "block", maxWidth: "230px", height: "auto", border: "1px solid rgba(187,187,187,0.4)", background: "#fff", padding: "0.5rem", transition: "opacity 0.2s, box-shadow 0.2s" }} onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.10)" }} onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.boxShadow = "none" }} />
            </a>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.1rem,2vw,1.5rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--g-black)", margin: "0 0 0.5rem" }}>
                Organisme certifié Qualiopi
              </h2>
              <div className="g-rule" />
              <p style={{ fontSize: "0.92rem", color: "#4a4a48", lineHeight: 1.8, margin: 0 }}>
                GALACTUS Digital est certifié <strong>Qualiopi</strong> par Certifopac (accréditation Cofrac n° 5-0620, certificat n° 951711-1) au titre des <strong>actions de formation</strong>. La certification qualité atteste de la conformité de nos processus au Référentiel National Qualité. <a href="/certificat-qualiopi.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "var(--g-red)", fontWeight: 600, textDecoration: "none" }}>Consulter le certificat (PDF) →</a>
              </p>
            </div>
          </div>
        </section>

        {/* ── Qu'est-ce qu'une certification informatique ? ── */}
        <section style={{ background: "var(--g-white)", padding: "4rem 2rem", borderBottom: "1px solid rgba(187,187,187,0.25)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--g-black)", margin: "0 0 0.5rem" }}>
              Qu'est-ce qu'une certification informatique ?
            </h2>
            <div className="g-rule" />
            <p style={{ fontSize: "0.95rem", color: "#4a4a48", lineHeight: 1.85, maxWidth: "860px" }}>
              Une certification informatique est une <strong>validation officielle</strong> de vos connaissances et compétences dans un domaine spécifique de l'informatique. Elle atteste de votre expertise et constitue une véritable reconnaissance professionnelle — délivrée par un organisme certificateur indépendant, reconnue par les employeurs et les recruteurs à l'échelle mondiale.
            </p>
          </div>
        </section>

        {/* ── Pourquoi passer une certification ? ── */}
        <section style={{ background: "var(--g-offwhite)", padding: "4rem 2rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--g-black)", margin: "0 0 0.5rem" }}>
              Pourquoi passer une certification informatique ?
            </h2>
            <div className="g-rule" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "0.5rem" }}>

              {/* Entreprises */}
              <div style={{ background: "var(--g-white)", border: "1px solid rgba(187,187,187,0.35)", borderTop: "4px solid var(--g-black)", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--g-black)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Users size={20} color="white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: "0.15rem" }}>
                      Service Formation, RH, DSI…
                    </div>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.90rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--g-black)" }}>
                      Avantages pour les entreprises
                    </div>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    // Les six avantages, dans les termes de Franck (29/10/2026). Les
                    // formulations conditionnelles — « certains éditeurs », « selon le
                    // programme partenaire », « peut » — sont les siennes et sont
                    // conservées telles quelles : elles disent une possibilité offerte par
                    // les programmes éditeurs, pas un résultat promis par l'organisme.
                    "Renforcer sa crédibilité — la certification prouve aux clients que l'entreprise possède des compétences reconnues sur une technologie donnée. Elle rassure les prospects et facilite la confiance lors des appels d'offres.",
                    "Accéder à des opportunités commerciales — certains éditeurs réservent des projets, des appels d'offres ou certains niveaux de partenariat à leurs partenaires certifiés. Cela peut permettre à l'entreprise d'accéder à de nouveaux marchés.",
                    "Augmenter son chiffre d'affaires — selon le programme partenaire, l'entreprise peut bénéficier de commissions, de remises, de revenus liés aux licences ou de prestations d'intégration, de conseil et de maintenance.",
                    "Développer les compétences des équipes — les collaborateurs accèdent à des formations, des examens de certification, des documentations techniques et parfois à un support spécialisé de l'éditeur.",
                    "Bénéficier du soutien de l'éditeur — certains programmes donnent accès à une assistance technique prioritaire, à des ressources commerciales, à des environnements de démonstration ou à des informations en avant-première sur les produits.",
                    "Se différencier de la concurrence — le statut de partenaire certifié aide l'entreprise à se démarquer, à justifier son expertise et à répondre aux exigences de qualification de certains clients.",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.87rem", color: "#4a4a48" }}>
                      <CheckCircle size={15} color="#E41F26" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: "0.84rem", color: "#5a5a58", lineHeight: 1.7, margin: 0, background: "var(--g-offwhite)", border: "1px solid rgba(187,187,187,0.30)", borderLeft: "3px solid var(--g-red)", padding: "0.85rem 1rem" }}>
                  Cela contribue également à l'optimisation de votre budget formation, grâce à une co-construction des parcours avec vos collaborateurs et une mobilisation des dispositifs de financement de la formation professionnelle (<strong>OPCO</strong>, plan de développement des compétences).
                </p>
              </div>

              {/* Individus */}
              <div style={{ background: "var(--g-white)", border: "1px solid rgba(187,187,187,0.35)", borderTop: "4px solid var(--g-red)", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--g-red)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <TrendingUp size={20} color="white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: "0.15rem" }}>
                      Salarié, demandeur d'emploi, auto-entrepreneur…
                    </div>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.90rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--g-black)" }}>
                      Avantages pour les individus
                    </div>
                  </div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    // Liste fournie par Franck le 29/10/2026, reprise dans ses termes.
                    "Valoriser son CV — prouver ses compétences auprès des recruteurs grâce à une certification reconnue par l'éditeur.",
                    "Se démarquer des autres candidats — apporter une preuve concrète de ses connaissances, au-delà d'une simple formation suivie.",
                    "Faciliter l'accès à l'emploi — renforcer sa candidature pour un premier poste, une reconversion ou une évolution professionnelle.",
                    "Valider ses compétences techniques — vérifier ses connaissances selon un référentiel officiel et structuré.",
                    "Gagner en crédibilité — montrer aux employeurs et aux clients que l'on maîtrise des technologies précises.",
                    "Évoluer professionnellement — préparer des certifications plus avancées et se spécialiser en réseau, cybersécurité, systèmes ou cloud.",
                    "Rester à jour — suivre l'évolution des technologies et des pratiques du secteur informatique.",
                    "Développer sa confiance en soi — disposer d'un objectif concret et mesurable pour progresser.",
                    "Disposer d'une reconnaissance internationale — les certifications éditeurs sont connues dans de nombreux pays et peuvent faciliter une mobilité professionnelle.",
                    "Entreprendre un projet personnel — approfondir un domaine par passion, relever un défi ou préparer une future reconversion.",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.87rem", color: "#4a4a48" }}>
                      <CheckCircle size={15} color="#E41F26" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: "0.84rem", color: "#5a5a58", lineHeight: 1.7, margin: 0, background: "var(--g-offwhite)", border: "1px solid rgba(187,187,187,0.30)", borderLeft: "3px solid var(--g-red)", padding: "0.85rem 1rem" }}>
                  Les formations certifiantes peuvent être financées via les dispositifs de la formation professionnelle (<strong>OPCO</strong>, plan de développement des compétences, aides régionales).
                </p>
              </div>

            </div>
            {/* Les avantages 2, 3 et 5 décrivent ce que font les programmes
                partenaires des éditeurs. Une ligne de sources, discrète, permet à
                un prospect — ou à un auditeur — de vérifier l'affirmation sans
                qu'elle encombre le bloc. Remise le 29 octobre 2026. */}
            <p style={{ fontSize: "0.76rem", lineHeight: 1.6, color: "#8a8a86", marginTop: "1.5rem" }}>
              Conditions des programmes partenaires, relevées le 29 octobre 2026 :{" "}
              <a href="https://learn.microsoft.com/partner-center/partner-capability-score" target="_blank" rel="noopener noreferrer" style={{ color: "#8a8a86", textDecoration: "underline", textUnderlineOffset: "2px" }}>Microsoft Partner capability score</a>
              {" · "}
              <a href="https://www.cisco.com/c/dam/en_us/partners/cisco-partner-program/cisco-360-partner-program-highlights.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#8a8a86", textDecoration: "underline", textUnderlineOffset: "2px" }}>Cisco 360 Partner Program</a>.
            </p>
          </div>
        </section>

        {/* ── Modalités examens ── */}
        <section style={{ background: "var(--g-white)", padding: "4rem 2rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--g-black)", margin: "0 0 0.2rem" }}>
              Les modalités d'un examen de certification informatique
            </h2>
            <div style={{ fontFamily: "var(--font-title)", fontSize: "0.90rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--g-black)", marginBottom: "0.5rem" }}>
              Pour le candidat
            </div>
            <div className="g-rule" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "0.5rem" }}>

              {/* Bloc Galactus Digital */}
              <div style={{ border: "1px solid rgba(187,187,187,0.35)", borderTop: "4px solid var(--g-red)", padding: "0" }}>
                {/* En-tête */}
                <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(187,187,187,0.20)" }}>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--g-red)", marginBottom: "0.5rem" }}>
                    Pour les examens
                  </div>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: "1.05rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--g-black)", marginBottom: "0.4rem" }}>
                    Certification GALACTUS Digital
                  </div>
                  {/* « Certificateur » seul affirmait un statut que l'organisme
                      n'a pas encore : les deux dossiers sont en instruction au
                      Répertoire spécifique. Le bandeau noir plus bas le dit,
                      mais l'étiquette, elle, l'affirmait sans réserve — et c'est
                      elle qu'on lit en premier (indicateur 1 du RNQ V2).
                      Qualifiée le 29 octobre 2026. */}
                  <div style={{ fontFamily: "var(--font-title)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>
                    Certificateur — sous réserve d'enregistrement
                  </div>
                </div>

                {/* Logo + CTA */}
                <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(187,187,187,0.20)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                  {/* Logo simplifié */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "44px", height: "44px", background: "var(--g-red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Award size={24} color="white" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "1rem", fontWeight: 700, color: "var(--g-black)", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1 }}>GALACTUS</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--g-red)" }}>DIGITAL</div>
                    </div>
                  </div>
                  <a href="/certifications-rs"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--g-red)", color: "#fff", fontFamily: "var(--font-title)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.65rem 1.25rem", textDecoration: "none", transition: "background 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--g-black)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "var(--g-red)")}>
                    <Award size={14} />
                    Consulter les certifications GALACTUS Digital
                  </a>
                </div>

                {/* Processus */}
                <div style={{ padding: "1.5rem 2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                    {/* Tout ce qui suit décrit un dispositif qui n'existera qu'à
                        l'enregistrement des deux certifications au Répertoire
                        spécifique. Le bandeau du site dit « en cours d'instruction »
                        sur chaque page, mais un lecteur qui arrive directement ici
                        voyait un examen en service. Cette phrase fait le lien. */}
                    <div style={{ background: "var(--g-black)", borderLeft: "3px solid var(--g-red)", padding: "0.9rem 1.1rem" }}>
                      <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.7, margin: 0 }}>
                        Ce dispositif entrera en service à l'enregistrement des certifications au
                        Répertoire spécifique de France Compétences, aujourd'hui{" "}
                        <a href="/certifications-rs" style={{ color: "var(--g-red)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                          en cours d'instruction
                        </a>. Les examens Cisco Networking Academy, eux, sont accessibles dès
                        maintenant.
                      </p>
                    </div>
                    <p style={{ fontSize: "0.86rem", color: "#4a4a48", lineHeight: 1.7, margin: 0 }}>
                      Pour planifier votre examen à votre convenance, contactez un <strong>centre agréé Certification GALACTUS Digital</strong>.
                    </p>
                    <p style={{ fontSize: "0.86rem", color: "#4a4a48", lineHeight: 1.7, margin: 0 }}>
                      Le jour de l'examen, avec l'administrateur Certification GALACTUS Digital, vous vous connecterez au <strong>portail de certification</strong> pour créer votre compte.
                    </p>
                    <p style={{ fontSize: "0.86rem", color: "#4a4a48", lineHeight: 1.7, margin: 0 }}>
                      L'examen sera chronométré — <strong>1 à 2 heures</strong> selon la certification — sous surveillance d'un examinateur. Il se présente sous la forme de <strong>cas pratiques et de QCM</strong>.
                    </p>
                    <p style={{ fontSize: "0.86rem", color: "#4a4a48", lineHeight: 1.7, margin: 0 }}>
                      À l'issue de l'examen, vous accédez directement à vos résultats : un <strong>score sur 1 000 points</strong> indiquant votre niveau de compétences. Votre Certificat et vos résultats détaillés vous sont envoyés par e-mail quelques jours après.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bloc Pearson VUE */}
              <div style={{ border: "1px solid rgba(187,187,187,0.35)", borderTop: "4px solid var(--g-black)", padding: "0" }}>
                {/* En-tête */}
                <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(187,187,187,0.20)" }}>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#888", marginBottom: "0.5rem" }}>
                    Pour les examens
                  </div>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: "1.05rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--g-black)", marginBottom: "0.25rem" }}>
                    Microsoft, Cisco, Juniper…
                  </div>
                  <div style={{ fontFamily: "var(--font-title)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>
                    Certificateur
                  </div>
                </div>

                {/* Logo Pearson VUE */}
                <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid rgba(187,187,187,0.20)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "44px", height: "44px", background: "var(--g-black)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Shield size={24} color="white" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "1rem", fontWeight: 700, color: "var(--g-black)", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1 }}>Pearson</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.82rem", fontWeight: 700, color: "var(--g-black)", lineHeight: 1.2 }}>VUE</div>
                      <div style={{ fontSize: "0.70rem", color: "#888", lineHeight: 1.4 }}>Authorized Test Center</div>
                    </div>
                  </div>
                </div>

                {/* Processus */}
                <div style={{ padding: "1.5rem 2rem" }}>
                  <p style={{ fontSize: "0.86rem", color: "#4a4a48", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    Le protocole d'admission des candidats aux examens de certification gérés par Pearson VUE diffère selon le mode de passation choisi : <strong>en ligne via OnVUE</strong> ou <strong>en centre d'examen physique</strong>.
                  </p>
                  {/* Point commercial le plus fort de la page, et il n'était dit nulle
                      part : sur les parcours à voucher, l'organisme achète le code
                      d'examen et le remet au candidat. Celui-ci n'a rien à avancer. */}
                  <p style={{ fontSize: "0.9rem", color: "#4a4a48", lineHeight: 1.8, margin: "0.85rem 0 0" }}>
                    <strong style={{ color: "var(--g-black)" }}>Sur nos parcours à certification comprise</strong> — CCNA v2.0 parcours complet, CCNP Enterprise ENCOR et ENARSI, CCNA Cybersecurity, CCNA Automation et JNCIA-Junos — GALACTUS Digital prend en charge le voucher d'examen et <strong>vous remet le code</strong>. Vous choisissez ensuite librement de passer l'épreuve en centre agréé ou en ligne via OnVUE. Rien à avancer, rien à commander vous-même.
                  </p>

                  {/* OnVUE */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--g-black)", marginBottom: "0.75rem" }}>
                      1. Examen en ligne avec surveillance (OnVUE)
                    </div>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--g-red)", marginBottom: "0.4rem" }}>Avant l'examen</div>
                    {[
                      "Vérifier la compatibilité du système via le test OnVUE",
                      "Préparer un espace privé, bien éclairé, bureau dégagé",
                      "Pièce d'identité valide — nom identique à l'inscription",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", marginBottom: "0.3rem" }}>
                        <CheckCircle size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: "2px" }} />
                        {item}
                      </div>
                    ))}
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--g-red)", margin: "0.65rem 0 0.4rem" }}>Le jour de l'examen</div>
                    {[
                      "Enregistrement disponible de 30 min avant à 15 min après l'heure prévue",
                      "Présentation de la pièce d'identité + photos du visage et de l'espace d'examen",
                      "Examen surveillé en temps réel via webcam et microphone",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", marginBottom: "0.3rem" }}>
                        <CheckCircle size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: "2px" }} />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Centre physique */}
                  <div>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--g-black)", marginBottom: "0.75rem" }}>
                      2. Examen en centre physique
                    </div>
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--g-red)", marginBottom: "0.4rem" }}>Avant l'examen</div>
                    {[
                      "Réserver une place dans un centre agréé via Pearson VUE",
                      "Apporter deux pièces d'identité conformes à la politique mondiale Pearson VUE",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", marginBottom: "0.3rem" }}>
                        <CheckCircle size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: "2px" }} />
                        {item}
                      </div>
                    ))}
                    <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--g-red)", margin: "0.65rem 0 0.4rem" }}>Le jour de l'examen</div>
                    {[
                      "Se présenter au moins 15 minutes avant l'heure prévue",
                      "Présentation des pièces d'identité, photographie, accord de confidentialité",
                      "Examen surveillé par un administrateur de test agréé",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", marginBottom: "0.3rem" }}>
                        <CheckCircle size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: "2px" }} />
                        {item}
                      </div>
                    ))}
                    <div style={{ marginTop: "0.85rem", padding: "0.75rem 1rem", background: "var(--g-offwhite)", border: "1px solid rgba(187,187,187,0.3)", fontSize: "0.80rem", color: "#5a5a58", fontStyle: "italic", lineHeight: 1.6 }}>
                      Il est essentiel de consulter les directives spécifiques de l'organisme de certification concerné, car des exigences supplémentaires peuvent s'appliquer.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "var(--g-black)", padding: "3rem 2rem", borderTop: "4px solid var(--g-red)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#fff", margin: "0 0 0.4rem" }}>
                Prêt à passer votre certification ?
              </h2>
              <p style={{ fontSize: "0.90rem", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.7 }}>
                Caraïbes · Océan Indien · France hexagonale · OnVUE partout. Devis sous 48 h ouvrées.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", flexShrink: 0 }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="/#contact" className="btn-ghost"><Mail size={16} /> Planifier mon examen</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
