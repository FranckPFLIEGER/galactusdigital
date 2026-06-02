import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BookOpen, Award, Clock, CheckCircle, Phone, Mail, Zap, BarChart2, UserCheck } from 'lucide-react'

export const Route = createFileRoute('/elearning')({
  component: ElearningPage,
})

const PARCOURS = [
  {
    plateforme: 'NetAcad',
    couleur: '#1BA0D7',
    label: 'Cisco · NetAcad',
    formations: [
      { titre: 'CCNA 1 — Introduction aux réseaux', duree: '70h', niveau: 'Fondamental' },
      { titre: 'CCNA 2 — Routage et commutation',   duree: '70h', niveau: 'Intermédiaire' },
      { titre: 'CCNA 3 — Réseaux d\'entreprise',    duree: '70h', niveau: 'Avancé' },
      { titre: 'CyberOps Associate',                duree: '60h', niveau: 'Intermédiaire' },
      { titre: 'DevNet Associate',                   duree: '50h', niveau: 'Intermédiaire' },
      { titre: 'Network Security',                   duree: '45h', niveau: 'Avancé' },
    ],
  },
  {
    plateforme: 'MSLearn',
    couleur: '#0078D4',
    label: 'Microsoft · Learn',
    formations: [
      { titre: 'AZ-900 — Azure Fundamentals',          duree: '20h', niveau: 'Fondamental' },
      { titre: 'AZ-104 — Azure Administrator',         duree: '40h', niveau: 'Intermédiaire' },
      { titre: 'SC-900 — Security Fundamentals',       duree: '15h', niveau: 'Fondamental' },
      { titre: 'AI-900 — Azure AI Fundamentals',       duree: '15h', niveau: 'Fondamental' },
      { titre: 'MS-900 — Microsoft 365 Fundamentals',  duree: '18h', niveau: 'Fondamental' },
      { titre: 'AZ-500 — Azure Security Engineer',     duree: '35h', niveau: 'Avancé' },
    ],
  },
]

const NIVEAUX: Record<string, string> = {
  'Fondamental':   '#2E7D32',
  'Intermédiaire': '#E65100',
  'Avancé':        '#B71C1C',
}

function ElearningPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Modalité · E-learning asynchrone</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Formation E-learning Tutoré
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Progressez à votre rythme sur les plateformes officielles Cisco NetAcad et Microsoft Learn.
              Un tuteur certifié vous accompagne tout au long du parcours — disponible par messagerie,
              avec un suivi individualisé documenté conforme Qualiopi.
            </p>
            {/* Badges réglementaires */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                'Art. L.6313-1 Code du travail',
                'FOAD asynchrone · Qualiopi',
                'Qualiopi — Indicateur 19',
                'NetAcad · Microsoft Learn',
                'Eligible CPF · OPCO',
              ].map(b => (
                <div key={b} style={{ padding: '0.35rem 0.9rem', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.25)', fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Avantages ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Pourquoi choisir l'e-learning tutoré ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  icon: <Clock size={24} color="white" />,
                  title: 'Rythme libre',
                  desc: 'Vous avancez selon vos disponibilités, sans contrainte d\'horaire. Idéal pour les professionnels en activité dans les territoires ultramarins avec des contraintes opérationnelles fortes.',
                },
                {
                  icon: <UserCheck size={24} color="white" />,
                  title: 'Tuteur dédié',
                  desc: 'Un tuteur certifié éditeur vous est assigné pour toute la durée du parcours. Il répond à vos questions, valide vos avancées et vous prépare à la certification officielle.',
                },
                {
                  icon: <Award size={24} color="white" />,
                  title: 'Certifications officielles',
                  desc: 'Les parcours sont alignés sur les programmes officiels Cisco et Microsoft. Le passage de la certification est intégré au parcours avec accompagnement à l\'examen.',
                },
                {
                  icon: <Zap size={24} color="white" />,
                  title: 'Accès immédiat',
                  desc: 'Démarrage sous 72h après inscription. Les accès aux plateformes NetAcad et Microsoft Learn sont activés dès la validation administrative.',
                },
                {
                  icon: <BarChart2 size={24} color="white" />,
                  title: 'Suivi de progression',
                  desc: 'Tableau de bord personnalisé sur chaque plateforme. Votre tuteur suit votre progression module par module et vous alerte si vous décrochez du rythme prévu.',
                },
                {
                  icon: <BookOpen size={24} color="white" />,
                  title: 'Contenus officiels',
                  desc: 'Vous accédez aux contenus pédagogiques officiels des éditeurs : labs virtuels Cisco Packet Tracer, sandbox Azure, modules interactifs Microsoft, QCM de validation des acquis.',
                },
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

        {/* ── Différence FOAD / e-learning ── */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">FOAD synchrone vs E-learning tutoré</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  titre: 'FOAD synchrone',
                  href: '/foad',
                  items: [
                    'Sessions live à horaires fixes sur WEBEX',
                    'Groupe constitué (inter ou intra)',
                    'Interaction directe avec le formateur en temps réel',
                    'Rythme imposé par le calendrier de la session',
                    'Idéal pour les formations courtes et intensives',
                  ],
                  active: false,
                },
                {
                  titre: 'E-learning tutoré',
                  href: '/elearning',
                  items: [
                    'Parcours asynchrone — avancez quand vous voulez',
                    'Individuel ou petit groupe avec accès autonome',
                    'Tuteur disponible par messagerie / e-mail',
                    'Rythme libre dans une fenêtre définie',
                    'Idéal pour les parcours longue durée (CCNA, AZ-104…)',
                  ],
                  active: true,
                },
              ].map(c => (
                <div key={c.titre} style={{ background: c.active ? 'rgba(228,31,38,0.07)' : 'rgba(255,255,255,0.03)', border: c.active ? '1px solid rgba(228,31,38,0.25)' : '1px solid rgba(255,255,255,0.06)', borderTop: `3px solid ${c.active ? 'var(--g-red)' : 'rgba(255,255,255,0.12)'}`, padding: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: c.active ? '#fff' : 'rgba(255,255,255,0.45)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {c.titre}
                    {c.active && <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.12em', background: 'var(--g-red)', color: '#fff', padding: '0.15rem 0.5rem' }}>Cette page</span>}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {c.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: c.active ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.35)' }}>
                        <CheckCircle size={15} color={c.active ? '#E41F26' : 'rgba(255,255,255,0.2)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {!c.active && (
                    <a href={c.href} style={{ display: 'inline-block', marginTop: '1.25rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.40)', textDecoration: 'underline' }}>
                      Voir la FOAD synchrone →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Parcours disponibles ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Parcours disponibles</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
              {PARCOURS.map(p => (
                <div key={p.plateforme} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', overflow: 'hidden' }}>
                  {/* En-tête plateforme */}
                  <div style={{ background: p.couleur, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'rgba(255,255,255,0.20)', padding: '0.2rem 0.6rem' }}>{p.label}</div>
                  </div>
                  {/* Formations */}
                  <div style={{ padding: '0' }}>
                    {p.formations.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1.25rem', borderBottom: i < p.formations.length - 1 ? '1px solid rgba(187,187,187,0.20)' : 'none' }}>
                        <div style={{ flex: 1, fontSize: '0.85rem', color: '#3a3a38', fontWeight: 500 }}>{f.titre}</div>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: '0.72rem', color: '#888', background: 'var(--g-offwhite)', padding: '0.15rem 0.5rem', borderRadius: '3px' }}>{f.duree}</span>
                          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#fff', background: NIVEAUX[f.niveau], padding: '0.15rem 0.5rem', borderRadius: '3px', whiteSpace: 'nowrap' }}>{f.niveau}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.82rem', color: '#888', marginTop: '1.25rem', fontStyle: 'italic' }}>
              * D'autres parcours sont disponibles sur demande (EC-Council CEH, CompTIA, IPv6 Forum, PMI). Contactez-nous pour un programme personnalisé.
            </p>
          </div>
        </section>

        {/* ── Comment ça se passe ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Comment ça se passe ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { num: '01', title: 'Inscription',         desc: 'Choix du parcours et validation administrative. Convention de formation signée. Dossier de financement CPF/OPCO monté avec vous.' },
                { num: '02', title: 'Accès activé',         desc: 'Sous 72h, vous recevez vos accès NetAcad et/ou Microsoft Learn par email. Votre tuteur vous contacte pour un échange de cadrage.' },
                { num: '03', title: 'Parcours tutoré',      desc: 'Vous avancez à votre rythme. Votre tuteur suit votre progression, répond à vos questions et valide chaque module complété.' },
                { num: '04', title: 'Certification',        desc: 'En fin de parcours, passage de la certification officielle éditeur. Attestation de formation et de présence remise.' },
              ].map(s => (
                <div key={s.num} style={{ borderTop: '3px solid var(--g-red)', padding: '1.75rem 1.5rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', borderTop: '3px solid var(--g-red)' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#5a5a58', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Caractéristiques & conformité ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem', borderTop: '1px solid rgba(187,187,187,0.3)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Caractéristiques</h2>
                <div className="g-rule" />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Parcours individuel ou petit groupe (2 à 6 apprenants)',
                    'Tuteur certifié éditeur assigné dès le démarrage',
                    'Accès 24h/24 aux plateformes NetAcad et Microsoft Learn',
                    'Labs virtuels Cisco Packet Tracer inclus',
                    'Sandbox Azure pour les parcours Microsoft',
                    'Suivi documenté de la progression par module',
                    'Messagerie directe avec le tuteur sous 24h ouvrées',
                    'Passage de la certification intégré',
                    'Attestation de formation et relevé de complétion',
                    'Délai d\'accès : 72h après validation administrative',
                    'Durée de validité des accès : selon le parcours',
                    'Éligible CPF, OPCO, plan de développement des compétences',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Conformité Qualiopi</h2>
                <div className="g-rule" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { ref: 'Art. L.6313-1', titre: 'Action de formation à distance', texte: 'L\'e-learning tutoré est reconnu comme action de formation au sens du Code du travail dès lors qu\'un accompagnement individualisé est documenté.' },
                    { ref: 'Ind. 19 Qualiopi', titre: 'Plateau technique adapté', texte: 'NetAcad et Microsoft Learn constituent le plateau technique officiel certifié. Vérification de la prise en main organisée avant démarrage.' },
                    { ref: 'Critère 3 Qualiopi', titre: 'Suivi individualisé documenté', texte: 'Un relevé de progression module par module est généré automatiquement par la plateforme et archivé dans le dossier de formation.' },
                    { ref: 'Circulaire DGEFP 2026', titre: 'Réalité des actions', texte: 'Les bilans de progression constituent la preuve de réalité des actions conformément aux priorités de contrôle 2026-2027.' },
                  ].map(c => (
                    <div key={c.ref} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)' }}>
                      <div style={{ flexShrink: 0 }}>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>{c.ref}</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.25rem' }}>{c.titre}</div>
                        <p style={{ fontSize: '0.81rem', lineHeight: 1.6, color: '#5a5a58', margin: 0 }}>{c.texte}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Démarrer un parcours e-learning tutoré</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour choisir votre parcours, monter votre dossier de financement et recevoir vos accès sous 72h.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander les parcours disponibles</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

