import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Monitor, Wifi, Users, CheckCircle, Phone, Mail, Network, Calendar, Target, Settings } from 'lucide-react'

export const Route = createFileRoute('/foad')({
  component: FoadPage,
})

const FORMATIONS = [
  { editeur: 'Cisco',      formations: 'CCNA · CCNP · CyberOps · Automation' },
  { editeur: 'Microsoft',  formations: 'Azure Administrator · AZ-900 · M365 · Security' },
  { editeur: 'CompTIA',    formations: 'Security+ · Network+ · A+ · CySA+' },
  { editeur: 'IPv6 Forum', formations: 'Certified Network Engineer · Security Engineer' },
  { editeur: 'EC-Council', formations: 'CEH · ECSA · Computer Hacking Forensic' },
  { editeur: 'PMI',        formations: 'PMP · CAPM · PMI-ACP' },
]

function FormationList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
      {FORMATIONS.map(f => (
        <div key={f.editeur} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', padding: '0.75rem 1rem' }}>
          <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.6rem', flexShrink: 0 }}>{f.editeur}</div>
          <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)' }}>{f.formations}</span>
        </div>
      ))}
    </div>
  )
}

function FoadPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Modalité · Distance synchrone</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Formation à Distance<br />(FOAD)
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Nos formations à distance offrent la même qualité que nos formations en présentiel.
              Sessions live sur WEBEX, plateforme NetAcad accessible 24h/24, accompagnement individualisé documenté
              à chaque étape du parcours.
            </p>
            {/* Badges réglementaires */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                'Art. D.6313-3-1 Code du travail',
                'Qualiopi — Indicateur 19',
                'Qualiopi — Critère 3',
                'Circulaire DGEFP 2026-2027',
                'Eligible CPF · OPCO',
              ].map(b => (
                <div key={b} style={{ padding: '0.35rem 0.9rem', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.25)', fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Modalités techniques ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Modalités de la formation à distance</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  icon: <Monitor size={24} color="white" />,
                  title: 'Plateforme technique',
                  desc: 'Toutes nos formations FOAD s\'appuient sur la plateforme Cisco NetAcad ou Microsoft Learn — accessibles 24h/24 depuis n\'importe quel appareil connecté, avec suivi de progression individuel.',
                },
                {
                  icon: <Wifi size={24} color="white" />,
                  title: 'Outil de communication',
                  desc: 'Nos sessions synchrones se déroulent via WEBEX — outil de communication unifiée permettant des échanges en temps réel, partage d\'écran, et ateliers pratiques à distance.',
                },
                {
                  icon: <Users size={24} color="white" />,
                  title: 'Assistance pédagogique',
                  desc: 'Conformément à l\'article D.6313-3-1 du Code du travail, une assistance technique et pédagogique est disponible et documentée tout au long du parcours pour accompagner chaque apprenant.',
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

        {/* ── Conformité réglementaire ── */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Conformité réglementaire</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
              {[
                {
                  ref: 'Art. D.6313-3-1',
                  title: 'Assistance pédagogique documentée',
                  desc: 'Une assistance technique et pédagogique appropriée est mise en œuvre pour accompagner le bénéficiaire dans le déroulement de son parcours à distance.',
                },
                {
                  ref: 'Ind. 19 Qualiopi',
                  title: 'Plateau technique et pédagogique',
                  desc: 'Les outils de formation sont centralisés sur une plateforme digitale (NetAcad + WEBEX). Les apprenants reçoivent une invitation pour vérifier le bon fonctionnement avant démarrage.',
                },
                {
                  ref: 'Circulaire DGEFP 2026-2027',
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

        {/* ══════════════════════════════════════════════════
            FORMAT 1 — INTER À DISTANCE
        ══════════════════════════════════════════════════ */}
        <section id="inter" style={{ background: 'var(--g-offwhite)', padding: '5rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Format d'organisation · FOAD</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: 'var(--g-black)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Inter-Entreprise à distance</h2>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#5a5a58', maxWidth: '680px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Rejoignez nos sessions ouvertes planifiées depuis n'importe quel territoire. Format identique aux sessions inter présentiel — le formateur et les participants se retrouvent en ligne sur WEBEX.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', background: 'var(--g-white)', padding: '2.5rem', border: '1px solid rgba(187,187,187,0.3)' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Caractéristiques</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Groupes de 4 à 12 participants maximum',
                    'Formateur certifié officiel éditeur',
                    'Sessions live sur WEBEX (synchrone)',
                    'Plateforme NetAcad / Microsoft Learn incluse',
                    'Supports de cours officiels inclus',
                    'Feuilles de présence numériques',
                    'Passage de la certification intégré',
                    'Attestation de formation et de présence',
                    'Éligible CPF, OPCO, aides régionales DOM',
                    'Test de connexion organisé avant démarrage',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Formations disponibles</h3>
                <FormationList />
                <div style={{ background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.15)', padding: '0.9rem 1rem', marginTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.82rem', color: '#4a4a48', margin: 0, lineHeight: 1.6 }}>
                    <strong>Calendrier des sessions disponible sur demande.</strong> Plusieurs dates par trimestre sur tous les territoires.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost-dark"><Mail size={16} /> Demander le calendrier</a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FORMAT 2 — INTRA À DISTANCE
        ══════════════════════════════════════════════════ */}
        <section id="intra" style={{ background: 'var(--g-black)', padding: '5rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Format d'organisation · FOAD</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Intra-Entreprise à distance</h2>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Un groupe dédié à votre organisation, un programme personnalisé, des sessions live réservées à vos équipes. Toute la flexibilité de l'intra, sans contrainte géographique.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Caractéristiques</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Groupes de 4 à 15 participants',
                    'Formateur certifié dédié à votre groupe',
                    'Programme entièrement personnalisé',
                    'Sessions live WEBEX aux horaires de votre choix',
                    'Supports de cours officiels éditeurs inclus',
                    'Accès NetAcad / Microsoft Learn inclus',
                    'Passage de la certification intégré au programme',
                    'Attestation de formation et de présence',
                    'Financement via OPCO ou plan de développement des compétences',
                    'Délai d\'accès : 1 mois (3 mois avec financement OPCO)',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.70)' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Avantages FOAD intra</h3>
                {[
                  { icon: <Target size={20} color="white" />, title: 'Programme sur mesure', desc: 'Contenu adapté à vos outils, vos processus et vos cas concrets.' },
                  { icon: <Settings size={20} color="white" />, title: 'Flexibilité horaire', desc: 'Sessions planifiées selon vos contraintes. Pas de déplacement, pas de logistique.' },
                  { icon: <Network size={20} color="white" />, title: 'Tous territoires', desc: 'Réunion toute l\'équipe en ligne, même dispersée sur plusieurs territoires ultramarins.' },
                ].map(a => (
                  <div key={a.title} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '36px', height: '36px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{a.icon}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.2rem' }}>{a.title}</div>
                      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.55 }}>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander un devis sous 48h</a>
            </div>
          </div>
        </section>

        {/* ── Prérequis techniques ── */}
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

        {/* ── CTA global ── */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>S'inscrire à une formation à distance</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour connaître les prochaines sessions disponibles ou organiser une session intra dédiée à votre équipe — depuis n'importe quel territoire.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander un devis</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
