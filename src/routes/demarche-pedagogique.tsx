import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle, BookOpen, Target, Award } from 'lucide-react'

export const Route = createFileRoute('/demarche-pedagogique')({
  head: () => ({
    meta: [
      { title: 'Notre démarche pédagogique — GALACTUS Digital' },
      { name: 'description', content: 'Ingénierie pédagogique basée sur les programmes officiels Cisco, Microsoft et Juniper. Objectifs opérationnels, suivi individualisé.' },
      { property: 'og:title', content: 'Notre démarche pédagogique — GALACTUS Digital' },
      { property: 'og:url', content: 'https://galactusdigital.com/demarche-pedagogique' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/demarche-pedagogique' }],
  }),
  component: DemarchePedagogiquePage,
})

function DemarchePedagogiquePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Qui Sommes-Nous</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Notre démarche<br />pédagogique
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Chez GALACTUS Digital, nous ne formons pas pour former. Nous formons pour certifier, et certifier pour transformer. Notre ingénierie pédagogique est conçue pour maximiser la réussite de chaque apprenant.
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Notre approche pédagogique</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Notre ingénierie pédagogique s'appuie sur les programmes officiels des éditeurs IT (Cisco Networking Academy, Microsoft, Juniper Networks) et une approche par compétences, vérifiée à chaque étape du parcours.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Chaque formation est conçue sur mesure en fonction des besoins identifiés lors de l'analyse préalable, avec des objectifs pédagogiques définis sous forme de verbes d'action et une progression logique des acquis.
                </p>
                <div style={{ background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '1.5rem' }}>
                  <p style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'rgba(255,255,255,0.90)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                    "Nous tentons de réduire l'appréhension de l'écart de notre présent avec le futur, en formant une génération apte à évoluer à chaque nouvelle innovation."
                  </p>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-red)', marginTop: '0.75rem' }}>— Le président, Fondateur</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: <Target size={20} color="white" />, title: 'Objectifs opérationnels', desc: "Définis sous forme de verbes d'action, alignés sur les besoins de l'apprenant et vérifiés tout au long du parcours." },
                  { icon: <BookOpen size={20} color="white" />, title: 'Contenus officiels éditeurs', desc: 'Programmes alignés sur les référentiels exacts des éditeurs, sans intermédiaire. Supports officiels Cisco Networking Academy, Microsoft et Juniper.' },
                  { icon: <CheckCircle size={20} color="white" />, title: 'Évaluation continue', desc: "QCM, ateliers pratiques et mises en situation à chaque module pour vérifier l'acquisition des compétences." },
                  { icon: <Award size={20} color="white" />, title: 'Certification officielle', desc: "Chaque cours délivre le badge et le certificat de l'éditeur. Le voucher d'examen surveillé est compris dans le CCNA v2.0 parcours complet, les deux parcours CCNP Enterprise, CCNA Cybersecurity et CCNA Automation, ainsi que dans les parcours vendus sur devis, qui l'intègrent. Sur le catalogue Microsoft, l'examen de certification est proposé en option. 100 % de réussite parmi les candidats présentés sur 2023-2025." },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '3px solid var(--g-red)', padding: '1.25rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.25rem' }}>{item.title}</div>
                      <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#5a5a58', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ── POSITIONNEMENT À L'ENTRÉE — procédure FQ-27 ──
            Ce bloc répond au critère 1.3 des Conditions générales de financement
            de l'AIF (« positionnement en amont permettant d'individualiser le
            parcours ») et aux indicateurs 4 et 8 du RNQ V2.

            On publie LA PROCÉDURE, jamais un cas : pas de nom d'apprenant, pas de
            score, pas d'employeur. Ce qui fait preuve devant un conseiller, c'est
            qu'une méthode soit écrite, référencée et opposable. Les pièces
            individuelles restent au dossier, communicables en audit. */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Avant l'entrée en formation
            </span>
            <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Le positionnement</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#4a4a48', marginTop: '1rem', marginBottom: '2.5rem', maxWidth: '760px' }}>
              Aucune entrée en formation ne se fait sans positionnement écrit. La procédure
              <strong> FQ-27</strong> se déroule en trois étapes, et chaque pièce est signée par
              le candidat puis versée à son dossier.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
              {[
                {
                  ref: 'FQ-27-A',
                  titre: 'Test de positionnement',
                  desc: "Un questionnaire écrit couvrant les domaines de la certification visée, réalisé en autonomie et sans documentation. Le candidat est invité à répondre « je ne sais pas » plutôt qu'à deviner : un positionnement sincère produit un plan de travail juste.",
                },
                {
                  ref: 'FQ-27-B',
                  titre: 'Complément écrit',
                  desc: "Les questions restées sans réponse et celles à préciser font l'objet d'un second questionnaire. Il mesure la progression entre les deux épreuves autant que le niveau atteint.",
                },
                {
                  ref: 'FQ-27-C',
                  titre: "Décision d'admission et plan de travail",
                  desc: "Le dépouillement est consolidé par domaine sur une grille à quatre niveaux — non évalué, non acquis, en cours d'acquisition, acquis. Un seuil indicatif de 60 % déclenche l'instruction de l'admission ; il n'est pas éliminatoire. La décision est motivée par écrit et s'accompagne d'un plan de travail individuel construit sur les domaines les plus faibles.",
                },
              ].map(e => (
                <div key={e.ref} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '1.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.6rem', display: 'inline-block', marginBottom: '0.9rem' }}>
                    {e.ref}
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                    {e.titre}
                  </div>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.75, color: '#4a4a48', margin: 0 }}>{e.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '1.75rem 2rem', marginTop: '1.5rem' }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                Des lacunes portant sur le périmètre même de la formation ne sont pas un obstacle
                à l'entrée — elles en sont l'objet. Ce que le positionnement écarte, c'est un
                parcours mal calibré.
              </p>
            </div>

            <p style={{ fontSize: '0.78rem', color: '#9a9a98', fontStyle: 'italic', lineHeight: 1.7, marginTop: '1.25rem', marginBottom: 0 }}>
              Critère 1.3 des Conditions générales de financement de l'Aide Individuelle à la
              Formation (France Travail) · indicateurs 4 et 8 du Référentiel National Qualité.
              Les pièces de positionnement sont nominatives, conservées au dossier de formation
              et communicables en audit ; aucune n'est publiée.
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Processus d'évaluation</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem' }}>
              {[
                { phase: 'Avant la formation', items: ['Évaluation des besoins (entretien + questionnaire)', 'Évaluation des prérequis (entretien + questionnaire)', 'Analyse du profil et des attentes', "Vérification de l'équipement pour la FOAD"] },
                { phase: 'Pendant la formation', items: ['Évaluation des attentes (entretien + questionnaire)', "Évaluation des acquis (mise en situation + simulateur + QCM)", 'Évaluation de satisfaction "à chaud"', 'Tour de table quotidien', 'Passage de la certification éditeur', "Attestation de fin de formation"] },
                { phase: 'Après la formation', items: ['Évaluation pédagogique (bilan)', 'Évaluation du transfert sur le poste de travail', "Sollicitation \"à froid\" 2 mois après la formation", "Relance hiérarchie pour mesurer l'impact", "Suivi de l'insertion professionnelle si applicable"] },
              ].map(p => (
                <div key={p.phase} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '1.25rem' }}>{p.phase}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {p.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.60)' }}>
                        <div style={{ width: '6px', height: '6px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Modalités et méthodes pédagogiques</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Méthodes actives', items: ['Exposé, démonstration et atelier pratique', 'Cas pratiques et études de cas', 'Quizz et évaluations interactives', 'Méthode interactive et intuitive'] },
                { title: 'Outils numériques', items: ['Plateforme Cisco Networking Academy (LMS officiel)', 'Simulateur Packet Tracer (Cisco)', 'Outil WEBEX pour la FOAD', 'Supports stagiaires numériques'] },
                // Le cadre mélangeait la modalité (présentiel, FOAD) et le format
                // d'organisation (intra, inter), oubliait l'e-learning tutoré — la
                // modalité principale — et annonçait une formation « hybride » qu'aucune
                // action du catalogue ne propose. Chaque ligne porte maintenant une
                // modalité et son format. Revu le 29 octobre 2026.
                { title: 'Modalités de formation', items: ["E-learning tutoré — 100 % à distance, parcours individuel, entrées permanentes", "FOAD — sessions live sur WEBEX, en inter comme en intra-entreprise", "Présentiel — dans vos locaux (intra-entreprise) ou en salle retenue pour la session (inter-entreprise)"] },
                { title: 'Documents remis', items: ['Plan de formation détaillé', 'Convention de formation', "Convocation avec règlement intérieur", "Attestation de fin de formation", 'Attestation de présence'] },
              ].map(m => (
                <div key={m.title} style={{ background: '#fff', border: '1px solid rgba(187,187,187,0.4)', padding: '1.75rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>{m.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {m.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: '#4a4a48' }}>
                        <CheckCircle size={14} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
