import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CheckCircle, Clock, Calendar, Users, MapPin, Phone, Mail, Award, BookOpen, Monitor, AlertCircle, Zap } from 'lucide-react'

export const Route = createFileRoute('/formations/iot-hackathon')({
  component: FormationPage,
  head: () => ({
    meta: [
      { title: "IoT Hackathon Cisco NetAcad — Projet IoT certifiant | GALACTUS Digital" },
      { name: "description", content: "Formation Cisco IoT Hackathon. 35h. Badge certifiant. Projet IoT complet bout en bout en équipe. Qualiopi." },
    ],
  }),
})

const DATA = {
  editeur: 'Cisco NetAcad',
  famille: 'Cisco NetAcad — IoT',
  titre: 'IoT Fundamentals — Hackathon Playbook',
  sousTitre: 'Cours 3/3 — Projet IoT en équipe · Référence : IOT-HACK',
  ref: 'IOT-HACK-001',
  niveau: 'Avancé',
  partenaire: 'Partenaire Cisco n° 3018982',
  certification: 'Cisco IoT Hackathon Playbook',
  duree: '40 heures',
  groupeMin: 4,
  groupeMax: 12,
  lieux: ['Martinique', 'Guadeloupe', 'Paris'],
  description: `Troisième et dernier cours du cursus IoT Fundamentals. Formation orientée projet : les participants conçoivent, prototypent et présentent une solution IoT complète répondant à un problème réel. Travail en équipe, méthodologie design thinking, prototype fonctionnel et pitch devant un jury. Prérequis : IoT Connecting Things et/ou Big Data & Analytics.`,
  objectifs: ["Appliquer la méthodologie design thinking pour identifier un problème IoT réel", "Concevoir l'architecture complète d'une solution IoT — matériel, connectivité, cloud, application", "Développer un prototype IoT fonctionnel en équipe avec des outils professionnels", "Gérer un projet IoT en équipe — planification, sprints agiles, gestion des risques", "Présenter et défendre une solution IoT devant un jury d'experts industrie", "Documenter une solution IoT — spécifications techniques, business plan, roadmap"],
  public: ["Participants ayant validé Connecting Things et/ou Big Data", "Équipes souhaitant concevoir une solution IoT complète", "Entrepreneurs et intrapreneurs en transformation digitale", "Étudiants en fin de cursus IoT"],
  prerequis: ["IoT Fundamentals: Connecting Things validé", "IoT Fundamentals: Big Data & Analytics recommandé", "Travail en équipe de 3 à 5 participants"],
  examen: {
    code: 'IoT Hackathon',
    duree: 'Présentation jury (30 min)',
    langue: 'Français / Anglais',
    organisme: 'Cisco Networking Academy',
    format: 'QCM et questions pratiques',
    score: '700/1000',
    note: '',
  },
  methodes: [
    "Formation dispensée par un formateur certifié Cisco (instructeur Cisco NetAcad officiel)",
    "Accès à la plateforme Cisco NetAcad 24h/24 pendant et après la formation",
    "Travaux pratiques sur Cisco Packet Tracer (simulateur officiel Cisco)",
    "Badge numérique Cisco Networking Academy remis à l'issue du parcours — visible sur Credly",
    "Quiz de validation des acquis à chaque fin de module sur NetAcad",
    "Auto-évaluation formative en début et en fin de formation",
    "Évaluation formateur selon 4 niveaux : non évalué · non acquis · en cours · acquis",
    "Plan de travail individuel remis avant démarrage (Circ. DGEFP/MOC/2026/30 Art. 3)",
    "Supports de cours officiels Cisco inclus (version numérique NetAcad)",
    "Certification Cisco IoT Hackathon Playbook envoyée par mail à l'issue du parcours",
    "Attestation de formation, de présence et plan de travail individuel (Circ. DGEFP/MOC/2026/30 Art. 3)",
    "Passage de l'examen certifiant Cisco Networking Academy intégré au programme",
  ],
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (<><h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: light ? '#fff' : 'var(--g-black)', margin: '0 0 0.5rem' }}>{children}</h2><div className="g-rule" /></>)
}
function CheckItem({ text }: { text: string }) {
  return (<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}><CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{text}</li>)
}
function DelaisAcces() {
  return (
    <div style={{ background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.18)', borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <AlertCircle size={15} color="#E41F26" />
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)' }}>Délais d'accès à la formation</span>
      </div>
      {[
        { label: 'Standard', val: '1 mois après signature du devis et de la convention.' },
        { label: 'Financement OPCO', val: '3 mois (montage du dossier compris).' },
        { label: 'Inscription min.', val: "Possible jusqu\'à 48 heures avant le début de la formation." },
        ].map(d => (<p key={d.label} style={{ fontSize: '0.84rem', color: '#4a4a48', margin: '0 0 0.35rem', lineHeight: 1.6 }}><strong style={{ color: 'var(--g-black)' }}>{d.label} — </strong>{d.val}</p>))}
    </div>
  )
}

function FormationPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {['Formations', DATA.editeur, DATA.famille].map((c, i, arr) => (
                <span key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === arr.length - 1 ? 'var(--g-red)' : 'rgba(255,255,255,0.35)' }}>{c}</span>
                  {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.20)' }}>›</span>}
                </span>
              ))}
            </div>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>{DATA.titre}</h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.50)', marginBottom: '1.25rem' }}>{DATA.sousTitre}</p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[
                { label: `Certification : ${DATA.certification}`, main: true },
                { label: `Niveau ${DATA.niveau}` },
                { label: `Réf. ${DATA.ref}` },
                { label: DATA.partenaire },
              ].map(b => (
                <div key={b.label} style={{ padding: '0.35rem 0.9rem', background: b.main ? 'rgba(228,31,38,0.15)' : 'rgba(255,255,255,0.07)', border: `1px solid ${b.main ? 'rgba(228,31,38,0.35)' : 'rgba(255,255,255,0.12)'}`, fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: b.main ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.55)' }}>{b.label}</div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { icon: <Clock size={14} />, text: DATA.duree },
                                { icon: <Users size={14} />, text: `${DATA.groupeMin} à ${DATA.groupeMax} participants` },
                { icon: <Calendar size={14} />, text: 'Voir calendrier' },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ color: 'var(--g-red)' }}>{m.icon}</span>{m.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(187,187,187,0.25)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888' }}>Modalités disponibles :</span>
              {[
                { icon: <Users size={13} />, label: 'Présentiel', href: '/presentiel' },
                { icon: <Monitor size={13} />, label: 'FOAD synchrone', href: '/foad' },
                { icon: <BookOpen size={13} />, label: 'E-learning tutoré', href: '/elearning' },
              ].map(m => (
                <a key={m.label} href={m.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 0.85rem', border: '1px solid rgba(187,187,187,0.5)', color: '#5a5a58', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--g-red)'; e.currentTarget.style.color = 'var(--g-red)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(187,187,187,0.5)'; e.currentTarget.style.color = '#5a5a58' }}>
                  {m.icon} {m.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>À propos de cette formation</SectionTitle>
            <p style={{ fontSize: '0.95rem', color: '#5a5a58', lineHeight: 1.8, maxWidth: '800px' }}>{DATA.description}</p>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Objectifs pédagogiques</SectionTitle>
            <p style={{ fontSize: '0.88rem', color: '#888', marginBottom: '1.5rem', fontStyle: 'italic' }}>À l'issue de la formation, les participants seront capables de :</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="fiche-objectifs">
              {DATA.objectifs.map((obj, i) => (
                <div key={i} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '1.5rem', background: 'var(--g-offwhite)' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}><Zap size={16} color="white" /></div>
                  <p style={{ fontSize: '0.85rem', color: '#4a4a48', lineHeight: 1.6, margin: 0 }}>{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="fiche-public">
            <div>
              <SectionTitle>Public concerné</SectionTitle>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {DATA.public.map((item, i) => <CheckItem key={i} text={item} />)}
              </ul>
            </div>
            <div>
              <SectionTitle>Prérequis</SectionTitle>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {DATA.prerequis.map((item, i) => <CheckItem key={i} text={item} />)}
              </ul>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Programme détaillé</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
              
                <div style={{ border: "1px solid rgba(187,187,187,0.3)", overflow: "hidden" }}>
                  <div style={{ background: "var(--g-red)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.2rem" }}>Module 1–2</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>Design Thinking et idéation</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}><Clock size={13} />10h</div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", background: "var(--g-white)" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Design Thinking — empathie, définition, idéation, prototypage, test</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Identification d'un problème IoT réel — recherche utilisateur, personas</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Business Model Canvas appliqué à l'IoT</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />TP — Sprint d'idéation en équipe, sélection de la solution à développer</li>
                    </ul>
                  </div>
                </div>
                <div style={{ border: "1px solid rgba(187,187,187,0.3)", overflow: "hidden" }}>
                  <div style={{ background: "var(--g-red)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.2rem" }}>Module 3–5</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>Conception de la solution IoT</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}><Clock size={13} />12h</div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", background: "var(--g-white)" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Architecture système IoT — composants, flux de données, intégrations</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Sélection des technologies — matériel, protocoles, cloud, stack logicielle</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Maquettage et wireframes — interface utilisateur et dashboard IoT</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />TP — Dossier de conception technique complet avec diagrammes</li>
                    </ul>
                  </div>
                </div>
                <div style={{ border: "1px solid rgba(187,187,187,0.3)", overflow: "hidden" }}>
                  <div style={{ background: "var(--g-red)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.2rem" }}>Module 6–8</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>Développement du prototype</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}><Clock size={13} />14h</div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", background: "var(--g-white)" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Développement agile en sprints — backlog, user stories, définition of done</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Prototype matériel — câblage, programmation Arduino/Raspberry Pi</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Prototype logiciel — backend API, frontend dashboard, cloud IoT</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />TP — Prototype fonctionnel end-to-end : capteur → cloud → interface</li>
                    </ul>
                  </div>
                </div>
                <div style={{ border: "1px solid rgba(187,187,187,0.3)", overflow: "hidden" }}>
                  <div style={{ background: "var(--g-red)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.2rem" }}>Module 9–10</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>Pitch et présentation jury</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}><Clock size={13} />4h</div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", background: "var(--g-white)" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Préparation du pitch — structure, storytelling, démonstration live</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Business case IoT — ROI, TCO, proposition de valeur</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Gestion des questions jury — anticipation des objections techniques et business</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Présentation finale devant jury avec démonstration du prototype</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Badge et certification</SectionTitle>
            <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '2rem', display: 'flex', gap: '2rem' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Award size={28} color="white" /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>{DATA.certification}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(175px,1fr))', gap: '0.75rem' }} className="fiche-exam-grid">
                  {[
                    { label: 'Code / Référence', val: DATA.examen.code },
                    { label: 'Durée examen', val: DATA.examen.duree },
                    { label: 'Langue', val: DATA.examen.langue },
                    { label: 'Organisme', val: DATA.examen.organisme },
                    { label: 'Format', val: DATA.examen.format },
                    { label: 'Validation', val: DATA.examen.score },
                  ].map(row => (
                    <div key={row.label} style={{ padding: '0.75rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.25)' }}>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.25rem' }}>{row.label}</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--g-black)', fontWeight: 600 }}>{row.val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.15)' }}>
                  <p style={{ fontSize: '0.84rem', color: '#5a5a58', margin: 0 }}><strong style={{ color: 'var(--g-black)' }}>Note — </strong>{DATA.examen.note}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Méthodes pédagogiques</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }} className="fiche-methodes">
              {DATA.methodes.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', padding: '0.75rem 1rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.25)' }}>
                  <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.86rem', color: '#4a4a48', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="fiche-public">
            <div>
              <SectionTitle>Conformité réglementaire</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { ref: 'Art. L.6313-1', title: 'Action de formation', desc: 'Formation reconnue au sens du Code du travail.' },
                  { ref: 'Qualiopi Ind. 4', title: 'Convocation', desc: 'Convocation complète envoyée avant démarrage.' },
                  { ref: 'Critère 3 Qualiopi', title: 'Évaluation des acquis', desc: 'Quiz NetAcad + évaluation projet selon grille critériée.' },
                                    { ref: 'Circ. DGEFP/MOC/2026/30', title: 'Plan de travail individuel', desc: "Un plan de travail individuel est remis à chaque apprenant avant le démarrage de la formation FOAD ou e-learning, conformément à la circulaire DGEFP du 17 février 2026." },
                  { ref: 'Ind. 19 Qualiopi', title: 'Plateau technique', desc: 'Accès NetAcad et Packet Tracer vérifiés avant démarrage.' },
                ].map(c => (
                  <div key={c.ref} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '1rem', display: 'flex', gap: '0.75rem' }}>
                    <div style={{ flexShrink: 0 }}><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.55rem', whiteSpace: 'nowrap' }}>{c.ref}</div></div>
                    <div><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.2rem' }}>{c.title}</div><p style={{ fontSize: '0.82rem', color: '#5a5a58', margin: 0 }}>{c.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div><SectionTitle>Délais d'accès</SectionTitle><DelaisAcces /></div>
          </div>
        </section>

        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h2 className="section-h2-light" style={{ marginBottom: '0.4rem' }}>S'inscrire à cette formation</h2>
              <p style={{ fontSize: '0.90rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>Devis sous 48h.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander un devis</a>
            </div>
          </div>
        </section>

        {/* Responsive mobile */}
        <style>{`
          @media (max-width: 768px) {
            .fiche-objectifs { grid-template-columns: 1fr !important; }
            .fiche-exam-grid { grid-template-columns: 1fr 1fr !important; }
            .fiche-methodes  { grid-template-columns: 1fr !important; }
            .fiche-public    { grid-template-columns: 1fr !important; }
            .fiche-conformite{ grid-template-columns: 1fr !important; }
          }
          @media (max-width: 480px) {
            .fiche-exam-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
