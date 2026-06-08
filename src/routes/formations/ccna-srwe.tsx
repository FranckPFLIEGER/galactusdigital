import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CheckCircle, Clock, Calendar, Users, MapPin, Phone, Mail, Award, BookOpen, Monitor, AlertCircle, Network } from 'lucide-react'

export const Route = createFileRoute('/formations/ccna-srwe')({
  component: CcnaSrwePage,
  head: () => ({
    meta: [
      { title: "CCNA Module 2/3 — Commutation et routage Cisco | GALACTUS Digital" },
      { name: "description", content: "CCNA Commutation Routage Wi-Fi SRWE Module 2/3. 70h. Certification CCNA 200-301. VLANs STP OSPF WAN. Certifié Qualiopi." },
    ],
  }),
})

const DATA = {
  editeur: 'Cisco', famille: 'Cisco NetAcad — CCNA', titre: 'CCNA — Commutation, Routage et Wi-Fi (SRWE)', sousTitre: 'Module 2 sur 3 · Référence officielle : CCNA-SRWE',
  ref: 'CCNA-SRWE-002', niveau: 'Intermédiaire', partenaire: 'Partenaire Cisco n° 3018982', certification: 'Cisco Certified Network Associate (CCNA 200-301)',
  duree: '70 heures', groupeMin: 4, groupeMax: 12, lieux: ['Martinique', 'Guadeloupe', 'Paris', 'FOAD'],
  description: `Deuxième module du cursus CCNA officiel Cisco, cette formation se concentre sur les technologies de commutation de couche 2, le routage avancé et les réseaux sans fil. Elle couvre les VLAN, STP, EtherChannel, DHCPv4/v6, les routes statiques et la sécurité LAN. Prérequis : avoir validé le module CCNA ITN (module 1).`,
  objectifs: [
    'Configurer les VLAN et le routage inter-VLAN (router-on-a-stick et SVI) en appliquant les meilleures pratiques de sécurité',
    'Configurer la redondance sur un réseau commuté avec STP Rapid PVST+ et EtherChannel',
    'Configurer et dépanner DHCPv4 et DHCPv6 sur des routeurs et des commutateurs',
    'Implémenter les protocoles FHRP (HSRP) pour assurer la redondance de passerelle',
    'Configurer et sécuriser un réseau local sans fil (WLAN) avec WPA2',
    'Configurer et dépanner des routes statiques IPv4 et IPv6',
  ],
  public: ['Administrateurs réseaux', 'Techniciens support IT', 'Ingénieurs systèmes', 'Candidats à la certification CCNA ayant validé le module 1'],
  prerequis: ['Avoir validé le module CCNA 1 (ITN) ou posséder les connaissances équivalentes', 'Maîtrise des concepts OSI, TCP/IP, adressage IPv4/IPv6', 'Bases de la configuration Cisco IOS (CLI)'],
  modules: [
    { num: '01–04', titre: 'Commutation et VLANs', duree: '20h', contenu: ['Concepts de commutation — table CAM, STP', 'Configuration et dépannage des VLANs et du trunking (802.1Q)', 'Routage inter-VLAN : router-on-a-stick et couche 3 SVI', 'TP — Implémentation VLAN et routage inter-VLAN'] },
    { num: '05–06', titre: 'Redondance réseau', duree: '12h', contenu: ['Spanning Tree Protocol (STP) et Rapid PVST+', 'EtherChannel (LACP / PAgP) — configuration et vérification', 'Protocoles FHRP — HSRP pour la redondance de passerelle', 'TP — Configuration EtherChannel et HSRP'] },
    { num: '07–10', titre: 'DHCPv4, DHCPv6 et WAN', duree: '16h', contenu: ['DHCPv4 — serveur, relai et client sur Cisco IOS', 'DHCPv6 stateless / stateful — configuration et dépannage', 'SLAAC et NDP pour l\'adressage automatique IPv6', 'TP — Déploiement DHCP multi-VLAN'] },
    { num: '11–13', titre: 'Routes statiques', duree: '12h', contenu: ['Routes statiques IPv4 et IPv6 — types et cas d\'usage', 'Routes statiques par défaut et flottantes (failover)', 'Dépannage des routes statiques avec show ip route', 'TP — Topologie multi-routeurs avec routes statiques'] },
    { num: '14–16', titre: 'Réseau sans fil (WLAN)', duree: '10h', contenu: ['Architecture WLAN — AP autonome et contrôlé (WLC)', 'Standards IEEE 802.11 a/b/g/n/ac/ax et canaux', 'Sécurité WLAN — WPA2, WPA3, 802.1X', 'TP — Configuration WLAN avec WLC Cisco'] },
  ],
  examen: { code: '200-301 CCNA', duree: '120 minutes', langue: 'Anglais', organisme: 'Cisco Networking Academy', format: 'QCM, drag-and-drop, simulation réseau', score: '825 / 1000', note: 'Ce module est le 2ème des 3 requis. La certification CCNA est obtenue après les modules ITN + SRWE + ENSA.' },
  methodes: ['Formateur certifié Cisco (instructeur NetAcad officiel)', 'Plateforme Cisco NetAcad 24h/24 — accès pendant et après la formation', 'Travaux pratiques sur Cisco Packet Tracer', 'Quiz de validation des acquis à chaque fin de module', 'Auto-évaluation en début et en fin de formation', 'Supports de cours officiels Cisco inclus', 'Attestation de formation et de présence', 'Passage de l\'examen certifiant Cisco Networking Academy intégré'],
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (<><h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: light ? '#fff' : 'var(--g-black)', margin: '0 0 0.5rem' }}>{children}</h2><div className="g-rule" /></>)
}
function CheckItem({ text, light = false }: { text: string; light?: boolean }) {
  return (<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: light ? 'rgba(255,255,255,0.70)' : '#4a4a48' }}><CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{text}</li>)
}
function DelaisAcces() {
  return (<div style={{ background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.18)', borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem' }}><div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><AlertCircle size={15} color="#E41F26" /><span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)' }}>Délais d'accès à la formation</span></div>{[{ label: 'Standard', val: '1 mois après signature du devis et de la convention.' }, { label: 'Financement OPCO', val: '3 mois (montage du dossier compris).' }, { label: 'Inscription min.', val: 'Possible jusqu\'à 48 heures avant le début de la formation.' }, { label: 'Financement CPF', val: 'Délai minimum obligatoire de 11 jours ouvrés entre la proposition et le début.' }].map(d => (<p key={d.label} style={{ fontSize: '0.84rem', color: '#4a4a48', margin: '0 0 0.35rem', lineHeight: 1.6 }}><strong style={{ color: 'var(--g-black)' }}>{d.label} — </strong>{d.val}</p>))}</div>)
}

function CcnaSrwePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {['Formations', DATA.editeur, DATA.famille].map((c, i, arr) => (<span key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === arr.length - 1 ? 'var(--g-red)' : 'rgba(255,255,255,0.35)' }}>{c}</span>{i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.20)' }}>›</span>}</span>))}
            </div>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>{DATA.titre}</h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.50)', marginBottom: '1.25rem' }}>{DATA.sousTitre}</p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[{ label: `Certification : ${DATA.certification}`, main: true }, { label: `Niveau ${DATA.niveau}` }, { label: `Réf. ${DATA.ref}` }, { label: DATA.partenaire }].map(b => (<div key={b.label} style={{ padding: '0.35rem 0.9rem', background: b.main ? 'rgba(228,31,38,0.15)' : 'rgba(255,255,255,0.07)', border: `1px solid ${b.main ? 'rgba(228,31,38,0.35)' : 'rgba(255,255,255,0.12)'}`, fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: b.main ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.55)' }}>{b.label}</div>))}
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[{ icon: <Clock size={14} />, text: DATA.duree }, { icon: <Calendar size={14} />, text: 'Sur demande' }, { icon: <Users size={14} />, text: `${DATA.groupeMin} à ${DATA.groupeMax} participants` }, { icon: <MapPin size={14} />, text: DATA.lieux.join(' · ') }].map((m, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)' }}><span style={{ color: 'var(--g-red)' }}>{m.icon}</span>{m.text}</div>))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(187,187,187,0.25)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888' }}>Modalités disponibles :</span>
              {[{ icon: <Users size={13} />, label: 'Présentiel', href: '/presentiel' }, { icon: <Monitor size={13} />, label: 'FOAD synchrone', href: '/foad' }, { icon: <BookOpen size={13} />, label: 'E-learning tutoré', href: '/elearning' }].map(m => (<a key={m.label} href={m.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontFamily: 'var(--font-title)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 0.85rem', border: '1px solid rgba(187,187,187,0.5)', color: '#5a5a58', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--g-red)'; e.currentTarget.style.color = 'var(--g-red)' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(187,187,187,0.5)'; e.currentTarget.style.color = '#5a5a58' }}>{m.icon} {m.label}</a>))}
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
              {DATA.objectifs.map((obj, i) => (<div key={i} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '1.5rem', background: 'var(--g-offwhite)' }}><div style={{ width: '32px', height: '32px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}><Network size={16} color="white" /></div><p style={{ fontSize: '0.85rem', color: '#4a4a48', lineHeight: 1.6, margin: 0 }}>{obj}</p></div>))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div><SectionTitle>Public concerné</SectionTitle><ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>{DATA.public.map((item, i) => <CheckItem key={i} text={item} />)}</ul></div>
            <div><SectionTitle>Prérequis</SectionTitle><ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>{DATA.prerequis.map((item, i) => <CheckItem key={i} text={item} />)}</ul></div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Programme détaillé</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
              {DATA.modules.map(mod => (<div key={mod.num} style={{ border: '1px solid rgba(187,187,187,0.3)', overflow: 'hidden' }}><div style={{ background: 'var(--g-red)', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '0.2rem' }}>Module {mod.num}</div><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>{mod.titre}</div></div><div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)' }}><Clock size={13} />{mod.duree}</div></div><div style={{ padding: '1rem 1.25rem', background: 'var(--g-white)' }}><ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>{mod.contenu.map((item, i) => (<li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58', lineHeight: 1.5 }}><div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />{item}</li>))}</ul></div></div>))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Examen de certification</SectionTitle>
            <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Award size={28} color="white" /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>{DATA.certification}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem' }}>
                  {[{ label: 'Code examen', val: DATA.examen.code }, { label: 'Durée', val: DATA.examen.duree }, { label: 'Langue', val: DATA.examen.langue }, { label: 'Organisme', val: DATA.examen.organisme }, { label: 'Format', val: DATA.examen.format }, { label: 'Score minimal', val: DATA.examen.score }].map(row => (<div key={row.label} style={{ padding: '0.75rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.25)' }}><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.25rem' }}>{row.label}</div><div style={{ fontSize: '0.84rem', color: 'var(--g-black)', fontWeight: 600 }}>{row.val}</div></div>))}
                </div>
                <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.15)' }}><p style={{ fontSize: '0.84rem', color: '#5a5a58', margin: 0, lineHeight: 1.6 }}><strong style={{ color: 'var(--g-black)' }}>Note importante — </strong>{DATA.examen.note}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Méthodes pédagogiques</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              {DATA.methodes.map((item, i) => (<div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', padding: '0.75rem 1rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.25)' }}><CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} /><span style={{ fontSize: '0.86rem', color: '#4a4a48', lineHeight: 1.5 }}>{item}</span></div>))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <SectionTitle>Conformité réglementaire</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[{ ref: 'Art. L.6313-1', title: 'Action de formation', desc: 'Formation reconnue au sens du Code du travail — synchrone en présentiel ou FOAD.' }, { ref: 'Qualiopi Ind. 4', title: 'Convocation', desc: 'Convocation avec programme, lieu, horaires et règlement intérieur envoyée avant démarrage.' }, { ref: 'Critère 3 Qualiopi', title: 'Évaluation des acquis', desc: 'Quiz NetAcad + auto-évaluation formateur selon 4 niveaux : non acquis → acquis.' }, { ref: 'Ind. 19 Qualiopi', title: 'Plateau technique', desc: 'Accès NetAcad vérifié avant démarrage. Test Packet Tracer organisé pour la FOAD.' }].map(c => (<div key={c.ref} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '1rem', display: 'flex', gap: '0.75rem' }}><div style={{ flexShrink: 0 }}><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.55rem', whiteSpace: 'nowrap' }}>{c.ref}</div></div><div><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.2rem' }}>{c.title}</div><p style={{ fontSize: '0.82rem', color: '#5a5a58', margin: 0, lineHeight: 1.55 }}>{c.desc}</p></div></div>))}
              </div>
            </div>
            <div><SectionTitle>Délais d'accès</SectionTitle><DelaisAcces /></div>
          </div>
        </section>

        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div><h2 className="section-h2-light" style={{ marginBottom: '0.4rem' }}>S'inscrire à cette formation</h2><p style={{ fontSize: '0.90rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.7 }}>Contactez-nous pour connaître les prochaines dates et recevoir un devis sous 48h.</p></div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexShrink: 0 }}>
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
