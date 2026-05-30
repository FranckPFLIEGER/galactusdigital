import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Phone, Mail, Users, Heart, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/handicap')({
  component: HandicapPage,
})

function HandicapPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Accessibilité</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Situation de handicap &<br />Accessibilité aux formations
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              GALACTUS Digital s'engage à rendre ses formations accessibles à tous, y compris aux personnes
              en situation de handicap ou avec des problèmes de santé. Aucun apprenant ne doit être exclu
              pour des raisons de handicap — que ce soit aux Caraïbes, dans l'Océan Indien ou en France hexagonale.
            </p>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Notre référent handicap</h2>
            <div className="g-rule" />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '2rem', marginBottom: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                    Franck PFLIEGER
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '1.25rem' }}>
                    Référent Handicap certifié — GALACTUS Digital
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a href="tel:+33781074746" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.90rem' }}>
                      <div style={{ width: '32px', height: '32px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Phone size={15} color="white" />
                      </div>
                      07 81 07 47 46
                    </a>
                    <a href="mailto:president@galactusdigital.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.90rem' }}>
                      <div style={{ width: '32px', height: '32px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Mail size={15} color="white" />
                      </div>
                      president@galactusdigital.com
                    </a>
                  </div>
                </div>

                <div style={{ background: '#f7f7f6', border: '1px solid rgba(187,187,187,0.4)', padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>
                    Certification Référent Handicap
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                      'Organisme certifiant : DFD Consulting — NDA 11 92 24126 92',
                      'Dirigeante : Diane Flore Depachtère',
                      'Durée de la formation : 14 heures',
                      'Dates : Février 2023',
                      'Modalité : Formation en visio',
                      'Financement : AGEFIPH Antilles Guyane',
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: '#5a5a58' }}>
                        <CheckCircle size={15} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', marginBottom: '1.25rem' }}>Notre démarche</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  GALACTUS Digital s'attache à permettre l'accès à ses formations à tous les publics,
                  que vous soyez aux Caraïbes, dans l'Océan Indien ou en France hexagonale.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { step: '01', title: 'Signalement préalable', desc: 'Communiquez les coordonnées du participant en situation de handicap sur la convention de formation ou contactez directement notre référent.' },
                    { step: '02', title: 'Entretien personnalisé', desc: 'Un entretien est organisé avant la formation pour évaluer les besoins spécifiques et identifier les adaptations nécessaires.' },
                    { step: '03', title: 'Plan d\'adaptation', desc: 'Les conclusions de l\'entretien sont formalisées et toutes les adaptations sont communiquées sur la convocation.' },
                    { step: '04', title: 'Suivi en formation', desc: 'Nous vérifions toutes les demi-journées que les préconisations sont efficaces et établissons un rapport final.' },
                    { step: '05', title: 'Bilan post-formation', desc: 'Le participant peut exprimer son ressenti sur le document d\'appréciation, traité selon notre procédure de réclamations.' },
                  ].map(s => (
                    <div key={s.step} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '1rem', alignItems: 'start' }}>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1 }}>{s.step}</div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--g-black)', marginBottom: '0.25rem' }}>{s.title}</div>
                        <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#5a5a58', margin: 0 }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Nos partenaires handicap</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.8 }}>
              GALACTUS Digital s'appuie sur un réseau de partenaires spécialisés couvrant les Caraïbes,
              l'Océan Indien et la France hexagonale.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[
                { name: 'RHF Martinique — AGEFMA', desc: 'Réseau Handicap Formation Martinique — accompagnement et conseil pour l\'insertion professionnelle des personnes handicapées en Martinique.', zone: 'Caraïbes — Martinique' },
                { name: 'RHF Île-de-France', desc: 'Réseau Handicap Formation IDF — expertise dans l\'accueil et l\'accompagnement des personnes en situation de handicap en formation professionnelle.', zone: 'France hexagonale' },
                { name: 'AGEFIPH Antilles Guyane', desc: 'Association de Gestion du Fonds pour l\'Insertion Professionnelle des Personnes Handicapées — financement et accompagnement dans les DOM.', zone: 'Caraïbes & Guyane' },
              ].map(p => (
                <div key={p.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Users size={20} color="white" />
                    </div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>{p.name}</div>
                  </div>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: '0 0 0.75rem' }}>{p.desc}</p>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)' }}>{p.zone}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '3rem 2rem', borderTop: '3px solid var(--g-red)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <Heart size={32} color="#E41F26" style={{ marginBottom: '1rem' }} />
            <h2 className="section-h2" style={{ marginBottom: '1rem' }}>Vous avez un besoin spécifique ?</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '2rem' }}>
              Contactez notre référent handicap avant votre inscription. Nous étudierons ensemble
              les adaptations nécessaires pour vous permettre de suivre la formation dans les meilleures conditions.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red">
                <Phone size={16} /> Appeler le référent
              </a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost">
                <Mail size={16} /> Envoyer un message
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
