import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Monitor, Wifi, Users, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/foad')({
  component: FoadPage,
})

function FoadPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Solutions</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Formation à Distance<br />(FOAD)
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Nos formations à distance offrent la même qualité que nos formations en présentiel.
              Conformes à l'article D. 6313-3-1 du Code du travail relatif aux actions de formation à distance,
              elles bénéficient d'un accompagnement technique et pédagogique complet tout au long du parcours.
            </p>
            <div style={{ marginTop: '1.5rem', padding: '0.75rem 1.25rem', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.30)', display: 'inline-block' }}>
              <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)' }}>
                Conforme — Article D. 6313-3-1 du Code du travail (FOAD)
              </span>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Modalités de la formation à distance</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  icon: <Monitor size={24} color="white" />,
                  title: 'Plateforme technique',
                  desc: 'Toutes nos formations FOAD s\'appuient sur la plateforme Cisco NetAcad — plateforme pédagogique officielle, accessible 24h/24 depuis n\'importe quel appareil connecté.',
                },
                {
                  icon: <Wifi size={24} color="white" />,
                  title: 'Outil de communication',
                  desc: 'Nos sessions synchrones se déroulent via WEBEX — outil de communication unifiée permettant des échanges en temps réel, partage d\'écran et ateliers pratiques à distance.',
                },
                {
                  icon: <Users size={24} color="white" />,
                  title: 'Assistance pédagogique',
                  desc: 'Conformément à l\'article D. 6313-3-1 du Code du travail, une assistance technique et pédagogique est disponible tout au long du parcours pour accompagner chaque apprenant.',
                },
              ].map(m => (
                <div key={m.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{m.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem' }}>{m.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Conformité réglementaire</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
              {[
                {
                  ref: 'Art. D. 6313-3-1',
                  title: 'Assistance pédagogique documentée',
                  desc: 'Une assistance technique et pédagogique appropriée est mise en œuvre pour accompagner le bénéficiaire dans le déroulement de son parcours à distance.',
                },
                {
                  ref: 'Ind. 19 Qualiopi',
                  title: 'Plateau technique et pédagogique',
                  desc: 'Les outils de formation sont centralisés sur une plateforme digitale (NetAcad + WEBEX). Les apprenants reçoivent une invitation pour vérifier le bon fonctionnement avant démarrage.',
                },
                {
                  ref: 'Circulaire DGEFP 2026',
                  title: 'Réalité des actions documentée',
                  desc: 'Conformément aux priorités de contrôle 2026-2027, la réalité de nos actions de formation à distance est attestée par les bilans pédagogiques et les feuilles de présence numériques.',
                },
                {
                  ref: 'Critère 3 Qualiopi',
                  title: 'Suivi individualisé',
                  desc: 'Un suivi individualisé est mis en place pour chaque apprenant en FOAD, avec évaluation des acquis à chaque module via ateliers pratiques et QCM sur NetAcad.',
                },
              ].map(c => (
                <div key={c.ref} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.12)', padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>{c.ref}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.35rem' }}>{c.title}</div>
                    <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Prérequis techniques</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Équipement nécessaire</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Un PC personnel ou professionnel (Windows, Mac ou Linux)',
                    'Une connexion Internet haut débit stable',
                    'Un navigateur web récent (Chrome, Firefox, Edge)',
                    'Un micro et une webcam (recommandé)',
                    'L\'application WEBEX installée',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Avant le démarrage</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Invitation et accès à la plateforme NetAcad envoyés par courriel',
                    'Test de connexion WEBEX organisé avant la première session',
                    'Vérification du bon fonctionnement de l\'ensemble des outils',
                    'Support technique disponible en cas de difficulté',
                    'Supports de cours accessibles en ligne sur NetAcad',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

