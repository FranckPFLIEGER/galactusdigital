import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle, BookOpen, Target, Award } from 'lucide-react'

export const Route = createFileRoute('/demarche-pedagogique')({
  head: () => ({
    meta: [
      { title: 'Notre demarche pedagogique — GALACTUS Digital' },
      { name: 'description', content: 'Ingenierie pedagogique basee sur les programmes officiels Cisco, Microsoft, IPv6 Forum. Objectifs operationnels, suivi individualise.' },
      { property: 'og:title', content: 'Notre demarche pedagogique — GALACTUS Digital' },
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
                  Notre ingénierie pédagogique s'appuie sur les programmes officiels des éditeurs IT (Cisco Networking Academy, Microsoft, IPv6 Forum) et une approche par compétences, vérifiée à chaque étape du parcours.
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
                  { icon: <BookOpen size={20} color="white" />, title: 'Contenus officiels éditeurs', desc: 'Programmes alignés sur les référentiels exacts des éditeurs, sans intermédiaire. Supports Cisco Networking Academy, Microsoft Learn, IPv6 Forum.' },
                  { icon: <CheckCircle size={20} color="white" />, title: 'Évaluation continue', desc: "QCM, ateliers pratiques et mises en situation à chaque module pour vérifier l'acquisition des compétences." },
                  { icon: <Award size={20} color="white" />, title: 'Certification officielle', desc: "Passage de l'examen de certification éditeur intégré dans chaque parcours. 100% de réussite parmi les présentés 2023-2025." },
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
                { title: 'Modalités de formation', items: ["Formation en présentiel chez le client", "Formation à distance (FOAD) via WEBEX", "Formation hybride (blended learning)", "Intra-entreprise et inter-entreprise"] },
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
