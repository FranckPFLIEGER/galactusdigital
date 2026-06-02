import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MapPin, Users, CheckCircle, Clock, Phone, Mail, Network, Calendar, TrendingUp, Target, Settings } from 'lucide-react'

export const Route = createFileRoute('/presentiel')({
  component: PresentielPage,
})

// ─── Données partagées ───────────────────────────────────────────────────────

const LIEUX = [
  {
    zone: 'Martinique',
    badge: 'Siège régional Caraïbes',
    adresse: 'Pointe Madeleine — CAP EST\n97240 Le François',
    desc: 'Centre régional principal des Caraïbes. Toutes nos formations Cisco, Microsoft, CompTIA et IPv6 disponibles en présentiel.',
    tel: '+33 07 81 07 47 46',
  },
  {
    zone: 'Guadeloupe',
    badge: 'Présence active',
    adresse: 'Pointe de la Verdure\nGosier 97190',
    desc: 'Interventions en présentiel chez vos équipes ou en salle partenaire adaptée à vos besoins.',
    tel: '+33 07 81 07 47 46',
  },
  {
    zone: 'Paris — France hexagonale',
    badge: 'Siège social',
    adresse: '66 avenue des Champs Élysées\n75008 Paris',
    desc: 'Formations en présentiel à Paris et interventions intra-entreprise partout en France hexagonale sur demande.',
    tel: '+33 07 81 07 47 46',
  },
]

const FORMATIONS = [
  { editeur: 'Cisco',     label: 'Partenaire n° 3018982', formations: ['CCNA ITN (1/3)', 'CCNA SRWE (2/3)', 'CCNA ENSA (3/3)', 'CCNP Enterprise', 'CCNP Security'] },
  { editeur: 'Microsoft', label: 'Officiel',               formations: ['Azure Administrator (AZ-104)', 'Azure Fundamentals (AZ-900)', 'Microsoft 365 Fundamentals', 'Azure AI Fundamentals', 'Power Platform'] },
  { editeur: 'CompTIA',   label: 'Officiel',               formations: ['Security+', 'Network+', 'A+', 'CySA+', 'PenTest+'] },
  { editeur: 'IPv6 Forum',label: 'Officiel',               formations: ['IPv6 Certified Network Engineer', 'IPv6 Certified Security Engineer', 'IPv6 Fundamentals'] },
  { editeur: 'EC-Council',label: 'Officiel',               formations: ['Certified Ethical Hacker (CEH)', 'Certified Security Analyst (ECSA)', 'Computer Hacking Forensic Investigator'] },
  { editeur: 'PMI',       label: 'Officiel',               formations: ['Project Management Professional (PMP)', 'PMI Agile Certified Practitioner', 'CAPM'] },
]

// ─── Sous-composants réutilisables ────────────────────────────────────────────

function FormatTabNav({ active }: { active: 'inter' | 'intra' }) {
  return (
    <div style={{
      display: 'flex',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      marginBottom: '3rem',
    }}>
      {[
        { id: 'inter', label: 'Inter-entreprise', anchor: '#inter' },
        { id: 'intra', label: 'Intra-entreprise',  anchor: '#intra' },
      ].map(tab => (
        <a
          key={tab.id}
          href={tab.anchor}
          style={{
            padding: '0.85rem 1.75rem',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: active === tab.id ? '#fff' : 'rgba(255,255,255,0.40)',
            borderBottom: active === tab.id ? '2px solid #E41F26' : '2px solid transparent',
            transition: 'color 0.2s',
            marginBottom: '-1px',
          }}
        >
          {tab.label}
        </a>
      ))}
    </div>
  )
}

function SectionHeader({ title, light = false }: { title: string; light?: boolean }) {
  return (
    <>
      <h2 className={light ? 'section-h2-light' : 'section-h2'}>{title}</h2>
      <div className="g-rule" />
    </>
  )
}

function FormationGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginTop: '2rem' }}>
      {FORMATIONS.map(f => (
        <div key={f.editeur} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)' }}>{f.editeur}</div>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.55rem' }}>{f.label}</div>
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

// ─── Page principale ──────────────────────────────────────────────────────────

function PresentielPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Modalité · Présentiel</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Formation en Présentiel
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Un formateur certifié intervient en face-à-face dans nos centres ou directement chez vous.
              Immersion totale, ateliers pratiques sur équipements réels, progression maximale vers la certification.
            </p>
            {/* Badges réglementaires */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                'Art. L.6313-1 Code du travail',
                'Qualiopi certifié',
                'Eligible CPF · OPCO · PDC',
                'Formateur certifié éditeur',
              ].map(b => (
                <div key={b} style={{ padding: '0.35rem 0.9rem', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.25)', fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Avantages modalité ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionHeader title="Pourquoi choisir le présentiel ?" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: <Users size={24} color="white" />, title: 'Immersion totale', desc: 'La formation en présentiel favorise la concentration, l\'interaction directe avec le formateur et les échanges entre participants. Idéale pour les formations techniques avec ateliers pratiques intensifs.' },
                { icon: <CheckCircle size={24} color="white" />, title: 'Accompagnement direct', desc: 'Le formateur adapte son rythme en temps réel selon le niveau du groupe. Les questions trouvent une réponse immédiate, les difficultés sont levées sur le moment.' },
                { icon: <Clock size={24} color="white" />, title: 'Efficacité pédagogique', desc: 'Les ateliers pratiques sur équipements réels (simulateur Packet Tracer, environnements Microsoft) sont facilités en présentiel. Le taux de certification est maximum.' },
              ].map(a => (
                <div key={a.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lieux ── */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionHeader title="Nos lieux de formation" light />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {LIEUX.map(l => (
                <div key={l.zone} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={20} color="white" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>{l.zone}</div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.6rem', display: 'inline-block', marginTop: '0.3rem' }}>{l.badge}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.50)', marginBottom: '1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{l.adresse}</p>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', marginBottom: '1rem' }}>{l.desc}</p>
                  <a href={`tel:${l.tel.replace(/\s/g,'')}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--g-red)', textDecoration: 'none' }}>
                    <Phone size={13} /> {l.tel}
                  </a>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', marginTop: '1.5rem', fontStyle: 'italic' }}>
              * Nous intervenons également sur tous les autres territoires ultramarins (Guyane, Saint-Martin, Saint-Barthélemy, La Réunion) directement dans vos locaux sur demande.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FORMAT 1 — INTER-ENTREPRISE
        ══════════════════════════════════════════════════ */}
        <section id="inter" style={{ background: 'var(--g-offwhite)', padding: '5rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            {/* Bandeau format */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Format d'organisation · Présentiel</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: 'var(--g-black)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Inter-Entreprise</h2>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#5a5a58', maxWidth: '680px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Rejoignez nos sessions ouvertes planifiées tout au long de l'année. Un format qui favorise
              les échanges entre professionnels de secteurs variés dans les territoires ultramarins et en France hexagonale.
            </p>

            {/* Avantages inter */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: <Network size={24} color="white" />, title: 'Réseau professionnel', desc: 'Échangez avec des professionnels d\'horizons différents. Opportunité unique de réseautage et de partage d\'expériences dans les territoires ultramarins.' },
                { icon: <Calendar size={24} color="white" />, title: 'Sessions planifiées', desc: 'Inscrivez-vous à la session qui correspond à vos disponibilités. Plusieurs dates disponibles dans l\'année sur nos différents territoires.' },
                { icon: <TrendingUp size={24} color="white" />, title: 'Financement facilité', desc: 'Les formations inter-entreprises sont éligibles CPF, OPCO, aides régionales DOM. Nous vous accompagnons dans le montage de votre dossier.' },
              ].map(a => (
                <div key={a.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem', background: 'var(--g-white)' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Caractéristiques inter */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', background: 'var(--g-white)', padding: '2.5rem', border: '1px solid rgba(187,187,187,0.3)' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Caractéristiques</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Groupes de 4 à 12 participants maximum',
                    'Formateur certifié officiel éditeur',
                    'Programme officiel certifiant éditeur',
                    'Sessions en présentiel ou en FOAD selon les dates',
                    'Supports de cours officiels inclus',
                    'Accès aux plateformes NetAcad / Microsoft Learn',
                    'Passage de la certification intégré',
                    'Attestation de formation et de présence',
                    'Éligible CPF, OPCO, aides régionales DOM',
                    'Délai d\'inscription : 2 semaines avant le démarrage',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Sessions & lieux</h3>
                {[
                  { zone: 'Martinique', badge: 'Siège régional Caraïbes', desc: 'Sessions régulières tout au long de l\'année. Pointe Madeleine — CAP EST, 97240 Le François.' },
                  { zone: 'Guadeloupe', badge: 'Présence active', desc: 'Sessions organisées en salle partenaire. Pointe de la Verdure, Gosier 97190.' },
                  { zone: 'Paris — France', badge: 'Siège social', desc: '66 avenue des Champs Élysées, 75008 Paris. Sessions en régions sur demande.' },
                ].map(l => (
                  <div key={l.zone} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ flexShrink: 0, width: '8px', height: '8px', background: 'var(--g-red)', marginTop: '5px' }} />
                    <div>
                      <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)' }}>{l.zone}</span>
                      {' · '}
                      <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.1rem 0.45rem', display: 'inline-block', marginRight: '0.4rem' }}>{l.badge}</span>
                      <br />
                      <span style={{ fontSize: '0.81rem', color: '#5a5a58' }}>{l.desc}</span>
                    </div>
                  </div>
                ))}
                <div style={{ background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.15)', padding: '0.9rem 1rem', marginTop: '1rem' }}>
                  <p style={{ fontSize: '0.82rem', color: '#4a4a48', margin: 0, lineHeight: 1.6 }}>
                    <strong>Calendrier des sessions disponible sur demande.</strong> Contactez-nous pour connaître les prochaines dates dans votre territoire.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA inter */}
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost-dark"><Mail size={16} /> Demander le calendrier</a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            FORMAT 2 — INTRA-ENTREPRISE
        ══════════════════════════════════════════════════ */}
        <section id="intra" style={{ background: 'var(--g-black)', padding: '5rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            {/* Bandeau format */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Format d'organisation · Présentiel</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Intra-Entreprise</h2>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Nous intervenons directement dans vos locaux avec un programme conçu sur mesure pour vos équipes.
              Vos collaborateurs se forment sans quitter leur environnement de travail — où que vous soyez dans les territoires ultramarins ou en France hexagonale.
            </p>

            {/* Avantages intra */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: <Target size={24} color="white" />, title: 'Programme sur mesure', desc: 'Le contenu est adapté à vos outils, vos processus et vos objectifs métiers. Pas de formation générique — une ingénierie pédagogique taillée pour votre organisation.' },
                { icon: <Users size={24} color="white" />, title: 'Cohésion d\'équipe', desc: 'Toute votre équipe progresse ensemble, au même rythme, avec les mêmes références. Idéal pour harmoniser les compétences et créer un langage commun.' },
                { icon: <Settings size={24} color="white" />, title: 'Flexibilité totale', desc: 'Dates, horaires, lieu — tout s\'adapte à vos contraintes opérationnelles. Nous venons à vous, pas l\'inverse.' },
              ].map(a => (
                <div key={a.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Processus 4 étapes */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>Comment ça se passe ?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
                {[
                  { num: '01', title: 'Audit des besoins', desc: 'Entretien avec votre responsable formation pour identifier les compétences à développer et les certifications visées.' },
                  { num: '02', title: 'Programme personnalisé', desc: 'Nous concevons un programme aligné sur vos objectifs, vos outils et le niveau de vos équipes.' },
                  { num: '03', title: 'Convention & devis', desc: 'Signature de la convention de formation. Accompagnement sur les dispositifs de financement OPCO/PDC.' },
                  { num: '04', title: 'Formation & certification', desc: 'Déploiement chez vous. Passage des examens officiels éditeurs. Attestations remises à chaque participant.' },
                ].map(s => (
                  <div key={s.num} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '1.75rem' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                    <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.5rem' }}>{s.title}</h4>
                    <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Caractéristiques intra */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Caractéristiques</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Groupes de 4 à 15 participants',
                    'Formateur certifié dédié à votre groupe',
                    'Programme entièrement personnalisé',
                    'Formation dans vos locaux ou en salle partenaire',
                    'Supports de cours officiels éditeurs inclus',
                    'Accès aux plateformes NetAcad / Microsoft Learn',
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
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Délai d'accès</h3>
                <div style={{ borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.70)', margin: 0, lineHeight: 1.7 }}>
                    <strong style={{ color: '#fff' }}>1 mois</strong> après signature du devis et de la convention de formation.<br />
                    <strong style={{ color: '#fff' }}>3 mois</strong> avec financement OPCO (montage du dossier compris).
                  </p>
                </div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Audit gratuit</h3>
                <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                  Contactez-nous pour un audit gratuit de vos besoins en formation. Nous vous proposons un programme et un devis sous 48 heures.
                </p>
              </div>
            </div>

            {/* CTA intra */}
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander un devis sous 48h</a>
            </div>
          </div>
        </section>

        {/* ── Formations disponibles ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionHeader title="Formations disponibles en présentiel" />
            <FormationGrid />
          </div>
        </section>

        {/* ── Organisation pratique ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionHeader title="Organisation pratique" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Déroulement type d'une journée</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    '09h00 — Accueil des participants',
                    '09h30 — Démarrage de la formation',
                    '11h00 — Pause (15 minutes)',
                    '11h15 — Reprise — ateliers pratiques',
                    '13h00 — Pause déjeuner (1 heure)',
                    '14h00 — Reprise — cas pratiques avancés',
                    '15h45 — Pause (15 minutes)',
                    '16h00 — Évaluation des acquis du jour',
                    '17h30 — Fin de journée',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48' }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Ce que nous apportons</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Supports de cours officiels éditeurs',
                    'Accès à la plateforme NetAcad (Cisco) ou équivalent',
                    'Simulateurs et environnements de test',
                    'Matériel pédagogique inclus',
                    'Attestation de formation et de présence',
                    'Convocation avec règlement intérieur',
                    'Passage de la certification éditeur intégré',
                    'Accompagnement post-formation si nécessaire',
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
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Organiser votre formation en présentiel</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour définir ensemble le programme, les dates et le format (inter ou intra) le plus adapté à votre équipe — en Martinique, Guadeloupe ou en France hexagonale.
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
