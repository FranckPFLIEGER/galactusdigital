import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { TroisModalites } from '../components/TroisModalites'
import { Footer } from '../components/Footer'
import {
  BookOpen, Award, Clock, CheckCircle, Phone, Mail,
  Zap, BarChart2, UserCheck, AlertCircle, Calendar,
} from 'lucide-react'
import { getFormationsParModalite } from '../data/catalogue'

// Parcours affichés : dérivés du catalogue, groupés par famille, pour qu'aucune
// formation annoncée ici ne puisse diverger de ce qui est réellement proposé.
const PARCOURS_ELEARNING = (() => {
  const parFamille: Record<string, { slug: string; titre: string; duree: string }[]> = {}
  for (const f of getFormationsParModalite('E-learning')) {
    (parFamille[f.famille] ||= []).push({ slug: f.slug, titre: f.titre, duree: f.duree })
  }
  return Object.entries(parFamille).map(([titre, items]) => ({ titre, items }))
})()

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
          { label: 'Accès à la plateforme', val: 'Sous 72 h après validation administrative.' },
          { label: 'Financement OPCO', val: '3 mois (montage du dossier compris).' },
          { label: 'Inscription minimale', val: "Entrées permanentes : aucune date limite. L'e-learning tutoré n'a pas de date de démarrage commune — les accès sont ouverts sous 72 heures après validation administrative." },
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
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '100%', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Progressez à votre rythme sur la plateforme officielle Cisco Networking Academy. Un tuteur certifié vous accompagne tout au long du parcours avec un suivi individualisé documenté conforme Qualiopi.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Art. L.6313-1 Code du travail', 'FOAD asynchrone · Qualiopi', 'Qualiopi — Indicateur 19', 'Cisco Networking Academy', 'Éligible OPCO'].map(b => (
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
                { icon: <Award size={24} color="white" />, title: 'Certifications officielles', desc: "Les parcours suivent les programmes officiels Cisco Networking Academy. Chaque cours délivre son badge et son certificat Cisco Networking Academy, et le tuteur prépare à l'examen de certification de l'éditeur." },
                { icon: <Zap size={24} color="white" />, title: 'Accès rapide', desc: 'Démarrage sous 72 h après inscription. Les accès à la plateforme Cisco Networking Academy sont activés dès la validation administrative.' },
                { icon: <BarChart2 size={24} color="white" />, title: 'Suivi de progression', desc: 'Tableau de bord personnalisé sur chaque plateforme. Votre tuteur suit votre progression module par module et vous alerte si vous décrochez du rythme prévu.' },
                { icon: <BookOpen size={24} color="white" />, title: 'Contenus officiels', desc: 'Accès aux contenus pédagogiques officiels de Cisco Networking Academy : labs virtuels Packet Tracer, modules interactifs et QCM de validation des acquis.' },
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

        <TroisModalites active="/elearning" />
        {/* ── Comment ça se passe ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Comment ça se passe ?</h2>
            <div className="g-rule" />
            <div className="el-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { num: '01', title: 'Inscription', desc: 'Choix du parcours et validation administrative. Convention de formation signée. Dossier de financement OPCO monté avec vous.' },
                { num: '02', title: 'Accès activé', desc: 'Sous 72 h, vous recevez vos accès Cisco Networking Academy. Votre tuteur vous contacte pour un échange de cadrage.' },
                { num: '03', title: 'Parcours tutoré', desc: 'Vous avancez à votre rythme. Votre tuteur suit votre progression, répond à vos questions et valide chaque module complété.' },
                { num: '04', title: 'Certification', desc: 'Examen final du cours, badge et certificat Cisco Networking Academy. Attestation de formation et relevé de complétion remis. Le voucher d\'examen surveillé Pearson VUE est compris sur le CCNA v2.0 parcours complet, les deux parcours CCNP Enterprise, CCNA Cybersecurity et CCNA Automation.' },
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
              {PARCOURS_ELEARNING.map(f => (
                <div key={f.titre} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>{f.titre}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {f.items.map(item => (
                      <li key={item.slug} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58' }}>
                        <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                        <a href={`/formations/${item.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{item.titre} ({item.duree})</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.82rem', color: '#888', marginTop: '1.25rem', fontStyle: 'italic' }}>
              * {"D'autres parcours sont disponibles — "} <a href="/#contact" style={{ color: 'var(--g-red)', fontWeight: 600, textDecoration: 'none' }}>demandez un devis</a> {". L'e-learning tutoré n'a pas de session au calendrier : les entrées sont permanentes et les accès ouverts sous 72 heures."}
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
                    'Parcours individuel — rythme et plan de travail propres à chaque apprenant',
                    'Tuteur certifié éditeur assigné dès le démarrage',
                    'Accès 24h/24 à la plateforme Cisco Networking Academy',
                    'Labs virtuels Cisco Packet Tracer inclus',
                    'Évaluations et QCM corrigés par le tuteur',
                    'Suivi documenté de la progression par module',
                    'Messagerie directe avec le tuteur sous 24 h ouvrées',
                    'Badge et certificat Cisco Networking Academy délivrés à chaque cours',
                    // Demandé le 28/10/2026 : la liste ne disait pas que le voucher est
                    // compris sur les parcours certifiants. Les cinq parcours concernés
                    // sont ceux dont le catalogue porte un voucher.
                    "Voucher d'examen Pearson VUE compris sur le CCNA v2.0 parcours complet, "
                    + 'les deux parcours CCNP Enterprise, CCNA Cybersecurity et CCNA Automation',
                    'Attestation de formation et relevé de complétion',
                    'Éligible OPCO, plan de développement des compétences',
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
                    { ref: 'Ind. 19 Qualiopi', title: 'Plateau technique adapté', desc: 'Cisco Networking Academy constitue le plateau technique officiel certifié. Vérification de la prise en main organisée avant démarrage de chaque parcours.' },
                    { ref: 'Ind. 19 — référent', title: 'Référent pédagogique', desc: "Référent pédagogique désigné : Franck PFLIEGER, président — president@galactusdigital.com — 07 81 07 47 46, joignable sous deux jours ouvrés pendant toute la durée d'ouverture des accès." },
                    { ref: 'Ind. 19 — preuves', title: 'Effectivité du suivi', desc: "L'effectivité du suivi ne repose pas sur la seule connexion : elle est établie pour chaque apprenant et chaque module par le relevé de progression de la plateforme, l'historique des sessions de tutorat Webex et le compte rendu écrit de chaque point d'étape, consignés au registre de suivi. Article 13 bis des CGV." },
                    { ref: 'Critère 3 Qualiopi', title: 'Suivi individualisé documenté', desc: "Un relevé de progression module par module est généré automatiquement par la plateforme et archivé dans le dossier de formation de l'apprenant." },
                    { ref: 'Circ. DGEFP/MOC/2026/30', title: 'Réalité des actions documentée', desc: "Les bilans de progression constituent la preuve de réalité des actions conformément aux priorités de contrôle 2026-2027." },
                    { ref: 'Ind. 26 Qualiopi', title: 'Accessibilité et handicap', desc: "Référent handicap désigné : Franck PFLIEGER, certificat de Référent Handicap OF/CFA du "
                      + "20 février 2023. Toute situation signalée donne lieu à un entretien préalable (article 13 des CGV). "
                      + "L'accessibilité de la plateforme relève de l'éditeur et se vérifie sur sa page dédiée : "
                      + "netacad.com/fr/accessibility. Nos aménagements et nos partenaires du réseau RHF sont détaillés sur la page Accessibilité & Handicap." },
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
          <div style={{ maxWidth: '100%', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Démarrer un parcours e-learning tutoré</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour choisir votre parcours, monter votre dossier de financement et recevoir vos accès sous 72 h.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="/#contact" className="btn-ghost"><Calendar size={16} /> Demander un devis</a>
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
