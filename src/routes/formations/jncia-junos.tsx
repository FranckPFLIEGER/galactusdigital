import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { TarifsModalites } from '../../components/TarifsModalites'
import { CheckCircle, Clock, Calendar, Users, Phone, Mail, Award, AlertCircle, Router } from 'lucide-react'

export const Route = createFileRoute('/formations/jncia-junos')({
  component: FormationPage,
  head: () => ({
    meta: [
      { title: "JNCIA-Junos — Introduction to the Junos OS (JN0-106) | GALACTUS Digital" },
      { name: "description", content: "JNCIA-Junos (IJOS) — préparation à l'examen Juniper JN0-106. 35 h en présentiel ou à distance, 17 travaux pratiques sur maquette Junos. Organisme certifié Qualiopi." },
    ],
  }),
})

const DATA = {
  editeur: 'Juniper Networks',
  famille: 'Juniper Junos',
  titre: 'JNCIA-Junos — Introduction to the Junos Operating System',
  sousTitre: "IJOS · Préparation à l'examen JN0-106 · Niveau associé du parcours Juniper",
  ref: 'JNCIA-JUNOS-001',
  niveau: 'Fondamental',
  partenaire: 'Formateur réseau certifié — 15 ans d’expérience d’instructeur',
  certification: 'Juniper Networks Certified Associate — Junos (JNCIA-Junos)',
  duree: '35 heures',
  groupeMin: 1,
  groupeMax: 8,
  lieux: ['Martinique', 'Guadeloupe', 'Paris'],
  description: `Premier niveau du parcours de certification Juniper, JNCIA-Junos valide la capacité à exploiter un équipement fonctionnant sous Junos OS. La formation couvre l'architecture du système et la séparation du plan de contrôle et du plan de transfert, l'interface en ligne de commande, le cycle configuration candidate / commit / rollback, les interfaces physiques et logiques, les tables de routage et le routage statique et OSPF, les politiques de routage et les filtres pare-feu sans état, enfin la supervision, la journalisation et le dépannage. Les 35 heures se répartissent en 14 heures d'apports théoriques et 21 heures de travaux pratiques et d'évaluation, soit dix-sept laboratoires conduits sur une maquette Junos. La formation prépare à l'examen Juniper JN0-106, passé chez Pearson VUE.`,
  objectifs: [
    "Identifier l'architecture de Junos OS et la séparation du plan de contrôle et du plan de transfert",
    "Naviguer dans la CLI Junos en mode opérationnel et en mode configuration",
    "Maîtriser le cycle configuration candidate, commit, commit confirmed et rollback",
    "Configurer et vérifier des interfaces réseau IPv4 et IPv6, physiques et logiques",
    "Mettre en service et administrer un équipement — comptes, NTP, DNS, SNMP, journalisation, archivage",
    "Configurer et vérifier le routage statique et OSPF, et lire une table de routage",
    "Mettre en œuvre une politique de routage et un filtre pare-feu sans état",
    "Superviser, dépanner et maintenir un équipement Junos en condition opérationnelle",
  ],
  public: [
    "Techniciens et administrateurs réseau exploitant ou amenés à exploiter des équipements Juniper",
    "Ingénieurs réseau en environnement multi-constructeur",
    "Exploitants d'infrastructures opérateur ou data center",
    "Candidats à la certification JNCIA-Junos et au parcours Juniper",
  ],
  prerequis: [
    "Connaissance des modèles OSI et TCP/IP",
    "Ethernet et apprentissage des adresses MAC",
    "Adressage IPv4 et IPv6, sous-réseaux",
    "Notions de TCP et UDP — aucune expérience préalable de Junos OS n'est requise",
  ],
  modules: [
    { num: '01', titre: 'Fondamentaux et architecture de Junos OS', duree: '4h', contenu: [
      "Positionnement de Junos OS et gamme d'équipements",
      "Séparation du plan de contrôle et du plan de transfert",
      "Processus système et démarrage de l'équipement",
      "TP 1 et 2 — prise en main de la maquette et premiers relevés d'état",
    ] },
    { num: '02', titre: 'Interface utilisateur : la CLI Junos', duree: '6h', contenu: [
      "Modes opérationnel et configuration, hiérarchie de configuration",
      "Complétion, aide contextuelle et filtres de sortie",
      "Configuration candidate, commit, commit check, commit confirmed et rollback",
      "TP 3 à 5 — édition, validation et retour arrière d'une configuration",
    ] },
    { num: '03', titre: 'Interfaces réseau', duree: '4h', contenu: [
      "Interfaces physiques et unités logiques, nommage",
      "Adressage IPv4 et IPv6, familles de protocoles",
      "Lecture de l'état d'une interface et diagnostic de niveau 1 et 2",
      "TP 6 et 7 — adressage, vérification et test de connectivité",
    ] },
    { num: '04', titre: "Mise en service et administration de l'équipement", duree: '6h', contenu: [
      "Configuration initiale, comptes utilisateurs et classes d'autorisation",
      "Services système — NTP, DNS, SNMP, journalisation",
      "Sauvegarde, archivage et restauration de configuration",
      "TP 8 à 10 — mise en service complète d'un équipement",
    ] },
    { num: '05', titre: 'Routage : tables, routes statiques et OSPF', duree: '6h', contenu: [
      "Tables de routage et de transfert, préférence de route",
      "Correspondance du préfixe le plus long et routes par défaut",
      "Routage statique et OSPF monozone — adjacences et vérification",
      "TP 11 et 12 — routage statique puis OSPF, vérifié de bout en bout",
    ] },
    { num: '06', titre: 'Commutation, politiques de routage et filtres pare-feu', duree: '5h', contenu: [
      "VLAN, ports d'accès et ports trunk",
      "Politiques de routage — termes, actions, sens d'application",
      "Filtres pare-feu sans état — termes, actions et compteurs",
      "TP 13 à 15 — VLAN, politique d'import/export et filtre de protection",
    ] },
    { num: '07', titre: "Supervision, dépannage et préparation à l'examen", duree: '4h', contenu: [
      "Journalisation système, traceoptions et commandes monitor",
      "Démarche de dépannage structurée sur Junos OS",
      "Maintenance — mise à jour logicielle et gestion des fichiers",
      "TP 16 et 17, puis examen blanc en conditions réelles",
    ] },
  ],
  examen: {
    code: 'JN0-106',
    duree: '90 minutes',
    langue: 'Anglais',
    organisme: 'Juniper Networks (Pearson VUE)',
    format: '65 questions à choix multiples',
    score: 'Défini par Juniper (variable)',
    note: `L'examen JN0-106 porte sur Junos OS 21.2 et délivre la certification JNCIA-Junos, valable trois ans. Il constitue le niveau associé du parcours Juniper et ouvre l'accès aux niveaux spécialiste (JNCIS). Il s'agit d'une certification éditeur : elle n'est enregistrée ni au Répertoire national des certifications professionnelles ni au Répertoire spécifique, et n'est donc pas mobilisable sur MonCompteFormation. Le voucher d'examen officiel est compris dans le tarif de la formation.`,
  },
  methodes: [
    "Formation dispensée par un formateur réseau certifié, quinze ans d'expérience d'instructeur",
    "Dix-sept travaux pratiques sur maquette Junos — routeurs virtuels et commutateur réel",
    "Répartition 40 % de théorie, 60 % de travaux pratiques et d'évaluation",
    "Cahier de travaux pratiques, support de cours et banque de questions d'entraînement remis",
    "Évaluation formative par observation en situation à l'issue de chaque laboratoire",
    "Grille critériée à quatre niveaux : non évalué · non acquis · en cours d'acquisition · acquis",
    "QCM de fin de module, seuil de maîtrise fixé à 70 %",
    "Examen blanc de 65 questions en 90 minutes, restitution du score par domaine d'examen",
    "Plan de travail individuel remis avant démarrage (Circ. DGEFP/MOC/2026/30 Art. 3)",
    "Attestation de fin de formation et attestation d'assiduité délivrées à l'issue de l'action",
    "Passage de l'examen certifiant Juniper (Pearson VUE) accompagné",
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
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)' }}>Délais d'accès</span>
      </div>
      {[
        { label: 'Standard', val: '1 mois après signature du devis et de la convention.' },
        { label: 'Financement OPCO', val: '3 mois (montage du dossier compris).' },
        { label: 'Inscription min.', val: "Possible jusqu'à 48 heures avant le début de la formation." },
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
                { icon: <Calendar size={14} />, text: 'Voir calendrier', href: '/calendrier?f=jncia-junos' },
              ].map((m, i) => (
                m.href ? (
                  <a key={i} href={m.href} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: 'var(--g-red)', padding: '0.35rem 0.8rem' }}>
                    {m.icon}<span>Voir le calendrier</span>
                  </a>
                ) : (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ color: 'var(--g-red)' }}>{m.icon}</span>{m.text}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── Modalités & tarifs ── */}
        <TarifsModalites slug="jncia-junos" />

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
                  <div style={{ width: '32px', height: '32px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}><Router size={16} color="white" /></div>
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
              <p style={{ fontSize: '0.82rem', color: '#777', marginTop: '0.9rem', lineHeight: 1.6 }}>
                Les prérequis sont vérifiés avant l'entrée en formation par un questionnaire, un test pratique et un entretien individuel, suivis d'une décision écrite d'admission.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Programme détaillé</SectionTitle>
            <p style={{ fontSize: '0.88rem', color: '#888', marginBottom: '1.5rem', fontStyle: 'italic' }}>35 heures — 14 h de théorie et 21 h de travaux pratiques et d'évaluation, soit 17 laboratoires.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }} className="fiche-programme">
              {DATA.modules.map(mod => (
                <div key={mod.num} style={{ border: '1px solid rgba(187,187,187,0.3)', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--g-red)', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '0.2rem' }}>Module {mod.num}</div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>{mod.titre}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)' }}><Clock size={13} />{mod.duree}</div>
                  </div>
                  <div style={{ padding: '1rem 1.25rem', background: 'var(--g-white)' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {mod.contenu.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58', lineHeight: 1.5 }}>
                          <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Examen de certification</SectionTitle>
            <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '2rem', display: 'flex', gap: '2rem' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Award size={28} color="white" /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>{DATA.certification}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(175px,1fr))', gap: '0.75rem' }} className="fiche-exam-grid">
                  {[
                    { label: 'Code examen', val: DATA.examen.code },
                    { label: 'Durée', val: DATA.examen.duree },
                    { label: 'Langue', val: DATA.examen.langue },
                    { label: 'Organisme', val: DATA.examen.organisme },
                    { label: 'Format', val: DATA.examen.format },
                    { label: 'Score minimal', val: DATA.examen.score },
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
            <SectionTitle>Méthodes pédagogiques et évaluation</SectionTitle>
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
                  { ref: 'Art. D.6313-3-1', title: 'Formation à distance', desc: "Encadrement pédagogique et technique, assistance joignable pendant les séances et modalités de suivi spécifiques lorsque l'action est réalisée à distance." },
                  { ref: 'Qualiopi Ind. 4', title: 'Convocation', desc: 'Convocation complète envoyée avant démarrage.' },
                  { ref: 'Critère 3 Qualiopi', title: 'Évaluation des acquis', desc: "QCM de module au seuil de 70 % et grille critériée à 4 niveaux à l'issue de chaque laboratoire." },
                  { ref: 'Circ. DGEFP/MOC/2026/30', title: 'Plan de travail individuel', desc: "Un plan de travail individuel est remis à chaque apprenant avant le démarrage de la formation FOAD, conformément à la circulaire DGEFP du 17 février 2026." },
                  { ref: 'Ind. 19 Qualiopi', title: 'Plateau technique', desc: 'Maquette Junos et accès vérifiés lors d’un essai technique au plus tard 48 h avant le démarrage.' },
                ].map(c => (
                  <div key={c.ref} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '1rem', display: 'flex', gap: '0.75rem' }}>
                    <div style={{ flexShrink: 0 }}><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.55rem', whiteSpace: 'nowrap' }}>{c.ref}</div></div>
                    <div><div style={{ fontFamily: 'var(--font-title)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.2rem' }}>{c.title}</div><p style={{ fontSize: '0.82rem', color: '#5a5a58', margin: 0 }}>{c.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle>Délais d'accès</SectionTitle>
              <DelaisAcces />
              <div style={{ marginTop: '1rem', background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.5rem' }}>Financement</div>
                <p style={{ fontSize: '0.84rem', color: '#4a4a48', margin: 0, lineHeight: 1.7 }}>
                  Action finançable par l'employeur au titre du plan de développement des compétences, par un OPCO, par France Travail (AIF ou POEI) ou en autofinancement.
                  Certification éditeur non enregistrée au RNCP ni au Répertoire spécifique : <strong style={{ color: 'var(--g-black)' }}>non éligible au CPF</strong>.
                </p>
              </div>
              <div style={{ marginTop: '1rem', background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.5rem' }}>Accessibilité</div>
                <p style={{ fontSize: '0.84rem', color: '#4a4a48', margin: 0, lineHeight: 1.7 }}>
                  Toute situation de handicap ou tout besoin spécifique est étudié avant l'entrée en formation. Référent Handicap &amp; Santé joignable au 07 81 07 47 46 ou à president@galactusdigital.com — voir la <a href="/handicap" style={{ color: 'var(--g-red)' }}>page accessibilité</a>.
                </p>
              </div>
            </div>
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

        <style>{`
          @media (max-width: 768px) {
            .fiche-objectifs { grid-template-columns: 1fr !important; }
            .fiche-programme { grid-template-columns: 1fr !important; }
            .fiche-exam-grid { grid-template-columns: 1fr 1fr !important; }
            .fiche-methodes  { grid-template-columns: 1fr !important; }
            .fiche-public    { grid-template-columns: 1fr !important; }
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
