import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  BookOpen, Award, Clock, CheckCircle, Phone, Mail,
  Zap, BarChart2, UserCheck, AlertCircle, Calendar,
} from 'lucide-react'

export const Route = createFileRoute('/elearning')({
  component: ElearningPage,
})

function DelaisAcces({ dark = false }: { dark?: boolean }) {
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
          { label: 'Accès à la plateforme', val: 'Sous 72h après validation administrative.' },
          { label: 'Financement OPCO', val: '3 mois (montage du dossier compris).' },
          { label: 'Inscription minimale', val: "Les inscriptions sont possibles jusqu'à 48 heures avant le début du parcours." },
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
              Progressez à votre rythme sur les plateformes officielles Cisco NetAcad et Microsoft Learn. Un tuteur certifié vous accompagne tout au long du parcours avec un suivi individualisé documenté conforme Qualiopi.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Art. L.6313-1 Code du travail', 'FOAD asynchrone · Qualiopi', 'Qualiopi — Indicateur 19', 'NetAcad · Microsoft Learn', 'Eligible CPF · OPCO'].map(b => (
                <div key={b} style={{ padding: '0.35rem 0.9rem', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.25)', fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{b}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi l'e-learning tutoré ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">{"Pourquoi choisir l'e-learning tutoré ?"}</h2>
            <div className="g-rule" />
            <div className="el-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: <Clock size={24} color="white" />, title: 'Rythme libre', desc: "Vous avancez selon vos disponibilités, sans contrainte d'horaire. Idéal pour les professionnels en activité dans les territoires ultramarins avec des contraintes opérationnelles fortes." },
                { icon: <UserCheck size={24} color="white" />, title: 'Tuteur dédié', desc: 'Un tuteur certifié éditeur vous est assigné pour toute la durée du parcours. Il répond à vos questions, valide vos avancées et vous prépare à la certification officielle.' },
                { icon: <Award size={24} color="white" />, title: 'Certifications officielles', desc: "Les parcours sont alignés sur les programmes officiels Cisco et Microsoft. Le passage de la certification est intégré au parcours avec accompagnement à l'examen." },
                { icon: <Zap size={24} color="white" />, title: 'Accès rapide', desc: 'Démarrage sous 72h après inscription. Les accès aux plateformes NetAcad et Microsoft Learn sont activés dès la validation administrative.' },
                { icon: <BarChart2 size={24} color="white" />, title: 'Suivi de progression', desc: 'Tableau de bord personnalisé sur chaque plateforme. Votre tuteur suit votre progression module par module et vous alerte si vous décrochez du rythme prévu.' },
                { icon: <BookOpen size={24} color="white" />, title: 'Contenus officiels', desc: 'Accès aux contenus pédagogiques officiels des éditeurs : labs virtuels Cisco Packet Tracer, sandbox Azure, modules interactifs Microsoft, QCM de validation des acquis.' },
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

        {/* ── FOAD vs E-learning ── */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">FOAD synchrone vs E-learning tutoré</h2>
            <div className="g-rule" />
            <div className="el-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  titre: 'FOAD synchrone', href: '/foad', active: false,
                  items: ['Sessions live à horaires fixes sur WEBEX','Groupe constitué (inter ou intra)','Interaction directe avec le formateur en temps réel','Rythme imposé par le calendrier de la session','Idéal pour les formations courtes et intensives'],
                },
                {
                  titre: 'E-learning tutoré', href: '/elearning', active: true,
                  items: ['Parcours asynchrone — avancez quand vous voulez','Individuel ou petit groupe avec accès autonome','Tuteur disponible par messagerie / e-mail','Rythme libre dans une fenêtre définie','Idéal pour les parcours longue durée (CCNA, AZ-104…)'],
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

        {/* ── Comment ça se passe ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Comment ça se passe ?</h2>
            <div className="g-rule" />
            <div className="el-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { num: '01', title: 'Inscription', desc: 'Choix du parcours et validation administrative. Convention de formation signée. Dossier de financement CPF/OPCO monté avec vous.' },
                { num: '02', title: 'Accès activé', desc: 'Sous 72h, vous recevez vos accès NetAcad et/ou Microsoft Learn. Votre tuteur vous contacte pour un échange de cadrage.' },
                { num: '03', title: 'Parcours tutoré', desc: 'Vous avancez à votre rythme. Votre tuteur suit votre progression, répond à vos questions et valide chaque module complété.' },
                { num: '04', title: 'Certification', desc: 'Passage de la certification officielle éditeur. Attestation de formation et relevé de complétion remis.' },
              ].map(s => (
                <div key={s.num} style={{ border: '1px solid rgba(187,187,187,0.3)', borderTop: '3px solid var(--g-red)', padding: '1.75rem 1.5rem', background: 'var(--g-white)' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#5a5a58', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Parcours disponibles ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Parcours disponibles</h2>
            <div className="g-rule" />
            <div className="el-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { titre: 'Cisco — Réseaux', items: ['Networking Essentials (40h)', 'CCNA 1 — ITN (70h)', 'CCNA 2 — SRWE (70h)', 'CCNA 3 — ENSA (70h)'] },
                { titre: 'Cisco — Cybersécurité', items: ['Cybersecurity Essentials (30h)', 'CyberOps Associate (60h)', 'Ethical Hacker (40h)'] },
                { titre: 'Cisco — Dev & Data', items: ["Python Essentials 1 — PCEP (35h)", "Python Essentials 2 — PCAP (40h)", 'DevNet Associate (50h)', 'Linux Essentials (40h)', 'Data Analytics Essentials (30h)'] },
                { titre: 'Cisco — IoT', items: ['IoT — Introduction (25h)', 'IoT — Connecting Things (30h)', 'IoT — Big Data & Analytics (30h)', 'IoT — Security (25h)', 'IoT — Hackathon (20h)'] },
                { titre: 'Microsoft', items: ['AZ-900 Azure Fundamentals (20h)', 'AZ-104 Azure Administrator (40h)', 'SC-900 Security Fundamentals (15h)', 'AI-900 Azure AI Fundamentals (15h)', 'MS-900 Microsoft 365 (18h)'] },
                { titre: 'IPv6 Forum', items: ['IPv6 Certified Network Engineer', 'IPv6 Certified Security Engineer', 'IPv6 Fundamentals'] },
              ].map(f => (
                <div key={f.titre} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>{f.titre}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {f.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58' }}>
                        <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.82rem', color: '#888', marginTop: '1.25rem', fontStyle: 'italic' }}>
              * {"D'autres parcours sont disponibles — consultez notre"} <a href="/calendrier" style={{ color: 'var(--g-red)', fontWeight: 600, textDecoration: 'none' }}>calendrier en ligne</a> {" ou contactez-nous."}
            </p>
          </div>
        </section>

        {/* ── Caractéristiques & Conformité ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div className="el-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
              {/* Caractéristiques */}
              <div>
                <h2 className="section-h2" style={{ marginTop: 0 }}>Caractéristiques</h2>
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
                    'Éligible CPF, OPCO, plan de développement des compétences',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <DelaisAcces dark={false} />
              </div>
              {/* Conformité */}
              <div>
                <h2 className="section-h2" style={{ marginTop: 0 }}>Conformité réglementaire</h2>
                <div className="g-rule" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { ref: 'Art. L.6313-1', title: 'Action de formation à distance', desc: "L'e-learning tutoré est reconnu comme action de formation au sens du Code du travail dès lors qu'un accompagnement individualisé est documenté." },
                    { ref: 'Ind. 19 Qualiopi', title: 'Plateau technique adapté', desc: 'NetAcad et Microsoft Learn constituent le plateau technique officiel certifié. Vérification de la prise en main organisée avant démarrage de chaque parcours.' },
                    { ref: 'Critère 3 Qualiopi', title: 'Suivi individualisé documenté', desc: "Un relevé de progression module par module est généré automatiquement par la plateforme et archivé dans le dossier de formation de l'apprenant." },
                    { ref: 'Circulaire DGEFP 2026-2027', title: 'Réalité des actions documentée', desc: "Les bilans de progression constituent la preuve de réalité des actions conformément aux priorités de contrôle 2026-2027." },
                  ].map(c => (
                    <div key={c.ref} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.25rem', display: 'flex', gap: '0.75rem' }}>
                      <div style={{ flexShrink: 0 }}>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.5rem', whiteSpace: 'nowrap' }}>{c.ref}</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--g-black)', marginBottom: '0.25rem' }}>{c.title}</div>
                        <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: '#5a5a58', margin: 0 }}>{c.desc}</p>
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
              <a href="/calendrier" className="btn-ghost"><Calendar size={16} /> Voir le calendrier</a>
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 900px) {
            .el-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
            .el-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .el-grid-3, .el-grid-2, .el-grid-4 { grid-template-columns: 1fr !important; }
            main section { padding: 2.5rem 1rem !important; }
          }
        `}</style>

      </main>
      <Footer />
    </>
  )
}
