import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CheckCircle, Clock, Calendar, Users, MapPin, Phone, Mail, Award, BookOpen, Monitor, AlertCircle, Shield } from 'lucide-react'

export const Route = createFileRoute('/formations/iot-security')({
  component: FormationPage,
  head: () => ({
    meta: [
      { title: "IoT Security Cisco NetAcad — Sécurité objets connectés | GALACTUS Digital" },
      { name: "description", content: "Formation Cisco IoT Security. 30h. Badge certifiant. Vulnérabilités IoT chiffrement gestion identités. Qualiopi." },
    ],
  }),
})

const DATA = {
  editeur: 'Cisco NetAcad',
  famille: 'Cisco NetAcad — IoT',
  titre: 'IoT Fundamentals — IoT Security',
  sousTitre: 'Sécurité des systèmes IoT · Référence : IOT-SEC',
  ref: 'IOT-SEC-001',
  niveau: 'Avancé',
  partenaire: 'Cisco NetAcad · Partenaire n° 3018982',
  certification: 'Cisco IoT Fundamentals: IoT Security Badge',
  duree: '60 heures',
  groupeMin: 4,
  groupeMax: 12,
  lieux: ['Martinique', 'Guadeloupe', 'Paris', 'FOAD'],
  description: `Formation spécialisée dans la sécurisation des systèmes IoT industriels et grand public. Elle couvre les menaces spécifiques aux objets connectés, la cryptographie embarquée, la segmentation réseau IoT, la mise à jour sécurisée des firmwares et la conformité réglementaire. Utilise des cas réels d'incidents IoT (Mirai, Stuxnet, VPNFilter).`,
  objectifs: ["Identifier et analyser les menaces et vecteurs d'attaque spécifiques aux systèmes IoT", "Implémenter la cryptographie légère adaptée aux microcontrôleurs à ressources limitées", "Concevoir une architecture réseau IoT sécurisée avec segmentation VLAN et DMZ IoT", "Sécuriser le cycle de vie des firmwares — signature, distribution et mise à jour OTA sécurisée", "Appliquer les standards de sécurité IoT — NIST IoT, ETSI EN 303 645, IEC 62443", "Réaliser un audit de sécurité IoT et produire un rapport de remédiation"],
  public: ["Ingénieurs sécurité travaillant sur des environnements IoT", "Architectes réseau déployant des infrastructures IoT", "Professionnels OT/IT en environnement industriel (ICS/SCADA)", "Candidats préparant des certifications sécurité IoT"],
  prerequis: ["IoT Fundamentals: Connecting Things validé", "CyberOps Associate ou Cybersecurity Essentials recommandé", "Connaissance des réseaux TCP/IP et des protocoles de sécurité"],
  examen: {
    code: 'IoT Security Badge',
    duree: `Projet d'audit + QCM`,
    langue: 'Français / Anglais',
    organisme: 'Cisco NetAcad',
    format: 'Évaluation continue + projet final',
    score: 'Badge numérique + attestation',
    note: 'Formation avancée complémentaire à CyberOps Associate et Ethical Hacker. Prépare aux certifications sécurité spécialisées IoT et à la certification GICSP (ICS/SCADA Security).',
  },
  methodes: [
    'Formateur certifié Cisco (instructeur NetAcad officiel)',
    'Plateforme Cisco NetAcad 24h/24 — accès pendant et après la formation',
    'Travaux pratiques sur Cisco Packet Tracer avec simulation IoT',
    'Labs sur équipements réels (Arduino, Raspberry Pi) selon disponibilité',
    'Quiz de validation des acquis à chaque fin de module',
    'Auto-évaluation en début et en fin de formation',
    'Supports de cours officiels Cisco IoT inclus',
    'Attestation de formation, de présence et badge numérique Cisco',
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
        { label: 'Financement CPF', val: "Délai minimum obligatoire de 11 jours ouvrés entre la proposition et le début." },
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
                { icon: <Calendar size={14} />, text: 'Sur demande' },
                { icon: <Users size={14} />, text: `${DATA.groupeMin} à ${DATA.groupeMax} participants` },
                { icon: <MapPin size={14} />, text: DATA.lieux.join(' · ') },
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
              {DATA.objectifs.map((obj, i) => (
                <div key={i} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '1.5rem', background: 'var(--g-offwhite)' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}><Shield size={16} color="white" /></div>
                  <p style={{ fontSize: '0.85rem', color: '#4a4a48', lineHeight: 1.6, margin: 0 }}>{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
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
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.2rem" }}>Module 1–3</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>Menaces et vulnérabilités IoT</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}><Clock size={13} />15h</div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", background: "var(--g-white)" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Paysage des menaces IoT — botnets Mirai, ransomware industriel, espionnage</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Analyse de cas réels — Stuxnet (ICS), VPNFilter (routeurs), Mirai (caméras)</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Surface d'attaque IoT — firmware, interfaces, communications, cloud</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />TP — Analyse de vulnérabilités sur firmware IoT avec Binwalk et Firmwalker</li>
                    </ul>
                  </div>
                </div>
                <div style={{ border: "1px solid rgba(187,187,187,0.3)", overflow: "hidden" }}>
                  <div style={{ background: "var(--g-red)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.2rem" }}>Module 4–6</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>Cryptographie et authentification IoT</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}><Clock size={13} />15h</div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", background: "var(--g-white)" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Cryptographie légère pour IoT — AES-128, ECC, ChaCha20 sur microcontrôleurs</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Gestion des identités IoT — certificats X.509, PKI embarquée, TPM</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Protocoles sécurisés — TLS 1.3, DTLS pour UDP, MQTT over TLS</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />TP — Déploiement d'une PKI IoT complète avec certificats clients/serveurs</li>
                    </ul>
                  </div>
                </div>
                <div style={{ border: "1px solid rgba(187,187,187,0.3)", overflow: "hidden" }}>
                  <div style={{ background: "var(--g-red)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.2rem" }}>Module 7–9</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>Architecture réseau IoT sécurisée</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}><Clock size={13} />15h</div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", background: "var(--g-white)" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Segmentation réseau IoT — VLAN dédié, DMZ IoT, micro-segmentation</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Contrôle d'accès réseau — 802.1X pour IoT, listes blanches MAC</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Monitoring IoT — détection d'anomalies réseau, SIEM pour IoT</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />TP Packet Tracer — Architecture réseau IoT sécurisée multi-zones</li>
                    </ul>
                  </div>
                </div>
                <div style={{ border: "1px solid rgba(187,187,187,0.3)", overflow: "hidden" }}>
                  <div style={{ background: "var(--g-red)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "0.2rem" }}>Module 10–12</div>
                      <div style={{ fontFamily: "var(--font-title)", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff" }}>Sécurité firmware et conformité</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)" }}><Clock size={13} />15h</div>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", background: "var(--g-white)" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Cycle de vie sécurisé du firmware — signature numérique, chaîne de confiance</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Mises à jour OTA sécurisées — Delta updates, rollback, anti-rollback</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />Standards IoT — NIST SP 800-213, ETSI EN 303 645, IEC 62443 pour l'industrie</li>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#5a5a58", lineHeight: 1.5 }}><div style={{ width: "5px", height: "5px", background: "var(--g-red)", flexShrink: 0, marginTop: "6px" }} />TP final — Audit de sécurité IoT complet + rapport de remédiation</li>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
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
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <SectionTitle>Conformité réglementaire</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { ref: 'Art. L.6313-1', title: 'Action de formation', desc: 'Formation reconnue au sens du Code du travail.' },
                  { ref: 'Qualiopi Ind. 4', title: 'Convocation', desc: 'Convocation complète envoyée avant démarrage.' },
                  { ref: 'Critère 3 Qualiopi', title: 'Évaluation des acquis', desc: 'Quiz NetAcad + évaluation projet selon grille critériée.' },
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
              <p style={{ fontSize: '0.90rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>Devis sous 48h — Martinique · Guadeloupe · Paris · FOAD.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
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
