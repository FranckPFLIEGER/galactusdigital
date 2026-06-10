import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Monitor, Wifi, Users, CheckCircle, Phone, Mail,
  Network, Calendar, TrendingUp, Target, Settings, AlertCircle,
} from 'lucide-react'

export const Route = createFileRoute('/foad')({
  component: FoadPage,
})

const FORMATIONS = [
  {
    editeur: 'Cisco — Réseaux',
    label: 'Partenaire n° 3018982',
    formations: [
      'Networking Essentials',
      'CCNA 1 — Introduction aux réseaux (ITN)',
      'CCNA 2 — Commutation & routage (SRWE)',
      'CCNA 3 — Réseaux d\'entreprise (ENSA)',
    ],
  },
  {
    editeur: 'Cisco — Cybersécurité',
    formations: [
      'Cybersecurity Essentials',
      'CyberOps Associate',
      'Ethical Hacker',
    ],
  },
  {
    editeur: 'Cisco — Développement & Data',
    formations: [
      'Python Essentials 1 (PCEP)',
      'Python Essentials 2 (PCAP)',
      'DevNet Associate',
      'Linux Essentials',
      'Data Analytics Essentials',
    ],
  },
  {
    editeur: 'Cisco — IoT',
    formations: [
      'IoT — Introduction',
      'IoT — Connecting Things',
      'IoT — Big Data & Analytics',
      'IoT — Security',
      'IoT — Hackathon',
    ],
  },
  {
    editeur: 'Microsoft',
    label: 'Partenaire n° 4653557',
    formations: [
      'AZ-900 Azure Fundamentals',
      'AZ-104 Azure Administrator',
      'SC-900 Security Fundamentals',
      'AI-900 Azure AI Fundamentals',
      'MS-900 Microsoft 365 Fundamentals',
    ],
  },
  {
    editeur: 'IPv6 Forum',
    label: 'Sur demande',
    formations: [
      'IPv6 Certified Network Engineer',
      'IPv6 Certified Security Engineer',
      'IPv6 Fundamentals',
    ],
  },
]

function FormationGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginTop: '2rem' }}>
      {FORMATIONS.map(f => (
        <div key={f.editeur} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)' }}>{f.editeur}</div>
            {f.label && (
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.55rem' }}>{f.label}</div>
            )}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {f.formations.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58' }}>
                <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function DelaisAcces({ dark = true }: { dark?: boolean }) {
  const textColor = dark ? 'rgba(255,255,255,0.70)' : '#4a4a48'
  const strongColor = dark ? '#fff' : 'var(--g-black)'
  const bg = dark ? 'rgba(255,255,255,0.03)' : 'var(--g-white)'
  const border = dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(187,187,187,0.3)'
  return (
    <div style={{ background: bg, border, borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem', marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
        <AlertCircle size={15} color="#E41F26" />
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)' }}>Délais d'accès</span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {[
          { label: 'Standard', val: '1 mois après signature du devis et de la convention de formation.' },
          { label: 'Financement OPCO', val: '3 mois (montage du dossier compris).' },
          { label: 'Inscription minimale', val: "Les inscriptions sont possibles jusqu'à 48 heures avant le début de la formation." },
          { label: 'Financement CPF', val: "Délai minimum obligatoire de 11 jours ouvrés entre la date d'envoi de la proposition et la date de début de la formation." },
        ].map(d => (
          <li key={d.label} style={{ fontSize: '0.84rem', color: textColor, lineHeight: 1.6 }}>
            <strong style={{ color: strongColor }}>{d.label} — </strong>{d.val}
          </li>
        ))}
      </ul>
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
              Formation à Distance (FOAD)
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Sessions live sur WEBEX, plateforme NetAcad accessible 24h/24, accompagnement individualisé documenté à chaque étape du parcours. La même qualité que le présentiel, sans contrainte géographique.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Art. D.6313-3-1 Code du travail', 'Qualiopi — Indicateur 19', 'Qualiopi — Critère 3', 'Eligible CPF · OPCO', 'Formateur certifié éditeur'].map(b => (
                <div key={b} style={{ padding: '0.35rem 0.9rem', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.25)', fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{b}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi la FOAD ── */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Pourquoi choisir la FOAD ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: <Monitor size={24} color="white" />, title: 'Plateforme officielle', desc: "Toutes nos formations FOAD s'appuient sur Cisco NetAcad ou Microsoft Learn — accessibles 24h/24 depuis n'importe quel appareil, avec suivi de progression individuel." },
                { icon: <Wifi size={24} color="white" />, title: 'Sessions live WEBEX', desc: "Nos sessions synchrones se déroulent via WEBEX. Partage d'écran, ateliers pratiques à distance, interactions en temps réel avec le formateur certifié." },
                { icon: <Users size={24} color="white" />, title: 'Assistance documentée', desc: "Conformément à l'article D.6313-3-1 du Code du travail, une assistance technique et pédagogique est disponible et documentée tout au long du parcours." },
              ].map(a => (
                <div key={a.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Inter à distance ── */}
        <section id="inter" style={{ background: 'var(--g-black)', padding: '5rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Format d'organisation · FOAD</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Inter-Entreprise à distance</h2>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Rejoignez nos sessions ouvertes planifiées depuis n'importe quel territoire. Le formateur et les participants se retrouvent en ligne sur WEBEX — même format que l'inter présentiel, sans contrainte de déplacement.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: <Network size={24} color="white" />, title: 'Réseau professionnel', desc: "Échangez avec des professionnels d'horizons différents depuis tous les territoires. Opportunité unique de réseautage inter-îles." },
                { icon: <Calendar size={24} color="white" />, title: 'Sessions planifiées', desc: 'Inscrivez-vous à la session qui correspond à vos disponibilités. Plusieurs dates disponibles dans l\'année sur tous les territoires.' },
                { icon: <TrendingUp size={24} color="white" />, title: 'Financement facilité', desc: 'Éligible CPF, OPCO, aides régionales DOM. Nous vous accompagnons dans le montage de votre dossier de financement.' },
              ].map(a => (
                <div key={a.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Caractéristiques</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {['Groupes de 4 à 12 participants maximum','Formateur certifié officiel éditeur','Sessions live WEBEX (synchrone)','Plateforme NetAcad / Microsoft Learn incluse','Supports de cours officiels inclus','Feuilles de présence numériques','Passage de la certification intégré','Attestation de formation et de présence','Éligible CPF, OPCO, aides régionales DOM','Test de connexion organisé avant démarrage'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.70)' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Sessions & disponibilités</h3>
                <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Plusieurs sessions planifiées par trimestre sur tous les territoires. Le calendrier est disponible sur demande — contactez-nous pour connaître les prochaines dates.
                </p>
                <div style={{ background: 'rgba(228,31,38,0.08)', border: '1px solid rgba(228,31,38,0.20)', padding: '0.9rem 1rem' }}>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.70)', margin: 0, lineHeight: 1.6 }}>
                    <strong style={{ color: '#fff' }}>Calendrier disponible sur demande.</strong> Toutes les sessions sont accessibles depuis tous les territoires ultramarins et en France hexagonale.
                  </p>
                </div>
                <DelaisAcces dark />
              </div>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander le calendrier</a>
            </div>
          </div>
        </section>

        {/* ── Intra à distance ── */}
        <section id="intra" style={{ background: 'var(--g-offwhite)', padding: '5rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Format d'organisation · FOAD</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: 'var(--g-black)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Intra-Entreprise à distance</h2>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#5a5a58', maxWidth: '680px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Un groupe dédié à votre organisation, un programme personnalisé, des sessions live réservées à vos équipes. Toute la flexibilité de l'intra, sans contrainte géographique.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: <Target size={24} color="white" />, title: 'Programme sur mesure', desc: "Contenu adapté à vos outils, vos processus et vos cas concrets. Pas de formation générique — une ingénierie taillée pour votre organisation." },
                { icon: <Settings size={24} color="white" />, title: 'Flexibilité horaire', desc: "Sessions planifiées selon vos contraintes. Pas de déplacement, pas de logistique. Vos équipes se forment de là où elles sont." },
                { icon: <Network size={24} color="white" />, title: 'Tous territoires', desc: "Réunissez toute votre équipe en ligne, même dispersée sur plusieurs territoires ultramarins. Une session unique pour tous." },
              ].map(a => (
                <div key={a.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem', background: 'var(--g-white)' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', marginBottom: '1.5rem' }}>Comment ça se passe ?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { num: '01', title: 'Audit des besoins', desc: 'Entretien avec votre responsable formation pour identifier les compétences à développer et les certifications visées.' },
                { num: '02', title: 'Programme personnalisé', desc: 'Nous concevons un programme adapté à vos outils, vos processus et le niveau de vos équipes.' },
                { num: '03', title: 'Convention & devis', desc: 'Signature de la convention de formation. Accompagnement sur les dispositifs de financement OPCO/PDC.' },
                { num: '04', title: 'Formation & certification', desc: 'Sessions live WEBEX dédiées. Passage des examens officiels. Attestations remises à chaque participant.' },
              ].map(s => (
                <div key={s.num} style={{ border: '1px solid rgba(187,187,187,0.3)', borderTop: '3px solid var(--g-red)', padding: '1.75rem', background: 'var(--g-white)' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                  <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.5rem' }}>{s.title}</h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#5a5a58', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Caractéristiques</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {['Groupes de 4 à 15 participants','Formateur certifié dédié à votre groupe','Programme entièrement personnalisé','Sessions live WEBEX aux horaires de votre choix','Supports de cours officiels éditeurs inclus','Accès NetAcad / Microsoft Learn inclus','Passage de la certification intégré au programme','Attestation de formation et de présence','Financement via OPCO ou plan de développement des compétences'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.5rem' }}>Audit gratuit</h3>
                <p style={{ fontSize: '0.87rem', color: '#5a5a58', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Contactez-nous pour un audit gratuit de vos besoins en formation. Nous vous proposons un programme et un devis sous 48 heures.
                </p>
                <DelaisAcces dark={false} />
              </div>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost-dark"><Mail size={16} /> Demander un devis sous 48h</a>
            </div>
          </div>
        </section>

        {/* ── Prérequis techniques ── */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Prérequis techniques</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Équipement nécessaire</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Un PC personnel ou professionnel (Windows, Mac ou Linux)','Une connexion Internet haut débit stable','Un navigateur web récent (Chrome, Firefox, Edge)','Un micro et une webcam (recommandé)','L\'application WEBEX installée'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: 'rgba(255,255,255,0.70)' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Avant le démarrage</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Invitation et accès à la plateforme NetAcad envoyés par courriel','Test de connexion WEBEX organisé avant la première session','Vérification du bon fonctionnement de l\'ensemble des outils','Support technique disponible en cas de difficulté','Supports de cours accessibles en ligne sur NetAcad'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: 'rgba(255,255,255,0.70)' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Formations disponibles ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Formations disponibles en FOAD</h2>
            <div className="g-rule" />
            <FormationGrid />
          </div>
        </section>

        {/* ── Conformité réglementaire ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Conformité réglementaire</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
              {[
                { ref: 'Art. D.6313-3-1', title: 'Assistance pédagogique documentée', desc: "Une assistance technique et pédagogique appropriée est mise en œuvre pour accompagner le bénéficiaire dans le déroulement de son parcours à distance." },
                { ref: 'Ind. 19 Qualiopi', title: 'Plateau technique et pédagogique', desc: "Les outils de formation sont centralisés sur une plateforme digitale (NetAcad + WEBEX). Les apprenants reçoivent une invitation pour vérifier le bon fonctionnement avant démarrage." },
                { ref: 'Circulaire DGEFP 2026-2027', title: 'Réalité des actions documentée', desc: "La réalité de nos actions de formation à distance est attestée par les bilans pédagogiques et les feuilles de présence numériques." },
                { ref: 'Critère 3 Qualiopi', title: 'Suivi individualisé', desc: "Un suivi individualisé est mis en place pour chaque apprenant en FOAD, avec évaluation des acquis à chaque module via ateliers pratiques et QCM sur NetAcad." },
              ].map(c => (
                <div key={c.ref} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>{c.ref}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.35rem' }}>{c.title}</div>
                    <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#5a5a58', margin: 0 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
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
