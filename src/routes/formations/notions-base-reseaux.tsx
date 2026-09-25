import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { TarifsModalites } from '../../components/TarifsModalites'
import {
  CheckCircle, Clock, Calendar, Users, Phone, Mail,
  Award, AlertCircle, Network,
} from 'lucide-react'

export const Route = createFileRoute('/formations/notions-base-reseaux')({
  component: NotionsBaseReseauxPage,
  head: () => ({
    meta: [
      { title: "Notions de base sur les réseaux — Formation sans prérequis | GALACTUS Digital" },
      { name: "description", content: "Formation Notions de base sur les réseaux (Networking Basics). 22h, aucun prérequis. Packet Tracer, adressage IP, réseau local. Brique CCST. Reconversion. Qualiopi." },
    ],
  }),
})

// ─── Données de la formation ──────────────────────────────────────────────────

const DATA = {
  // Identité
  editeur:        'Cisco',
  famille:        'Cisco Networking Academy — Socle & Reconversion',
  titre:          'Notions de base sur les réseaux',
  sousTitre:      'Bloc 0 des parcours métier · Brique des parcours CCST Networking et Cybersecurity',
  ref:            'SOCLE-NBR-005',
  niveau:         'Grand débutant',
  partenaire:     'Partenaire Cisco n° 3018982',
  certification:  'Badge numérique — brique des parcours CCST',

  // Logistique
  duree:          '22 heures',
  groupeMin:      4,
  groupeMax:      12,
  lieux:          ['Martinique', 'Guadeloupe', 'Paris'],

  // Description
  description: 'Le premier vrai contact avec les réseaux, sans jargon présupposé. Ce cours montre comment les données circulent, à quoi servent les équipements et les protocoles, et comment configurer les appareils pour se connecter. 13 laboratoires pratiques sur Cisco Packet Tracer, jusqu\'à la construction d\'un réseau local complet. C\'est la porte d\'entrée vers Networking Essentials puis le CCNA.',

  // Objectifs pédagogiques
  objectifs: [
    'Expliquer comment les protocoles, les périphériques et les médias permettent la communication sur un réseau',
    'Configurer un routeur sans fil et un hôte pour se connecter à Internet',
    'Expliquer le fonctionnement d\'Ethernet dans un réseau commuté',
    'Démontrer comment les adresses IP permettent la communication réseau',
    'Créer et tester un réseau local simple',
    'Utiliser les services de la couche application pour accomplir des tâches courantes',
  ],

  // Public
  public: [
    'Personnes en reconversion professionnelle vers les métiers de l\'informatique',
    'Demandeurs d\'emploi engagés dans un projet de formation IT',
    'Salariés en évolution interne vers une fonction technique',
    'Toute personne sans expérience informatique souhaitant tester son appétence pour le secteur',
    'Publics accompagnés dans le cadre d\'un dispositif régional DOM ou d\'un financement OPCO',
  ],

  // Prérequis
  prerequis: [
    'Aucun prérequis technique',
    'Aucune connaissance informatique préalable requise',
    'Savoir lire et écrire le français',
    'Disposer d\'un ordinateur et d\'une connexion Internet pour les modalités FOAD et e-learning',
  ],

  // Programme
  modules: [
    {
      num: '01–04', titre: 'Le réseau au quotidien', duree: '5h',
      contenu: [
        'À quoi sert un réseau et de quoi il est composé',
        'Types de réseaux : domestique, petit bureau, entreprise, Internet',
        'Périphériques, supports de transmission et topologies',
        'TP Packet Tracer — Découverte de l\'environnement de simulation',
      ],
    },
    {
      num: '05–08', titre: 'Se connecter à Internet', duree: '5h',
      contenu: [
        'Configuration d\'un routeur sans fil et d\'un hôte',
        'Paramétrage Wi-Fi et sécurisation d\'un accès domestique',
        'Fournisseurs d\'accès et connexion au réseau étendu',
        'TP — Mise en service d\'un accès Internet complet',
      ],
    },
    {
      num: '09–12', titre: 'Ethernet et communication locale', duree: '6h',
      contenu: [
        'Fonctionnement d\'Ethernet dans un réseau commuté',
        'Trames, adresses MAC et rôle du commutateur',
        'Protocoles de communication et encapsulation',
        'TP — Analyse du trafic sur un réseau commuté',
      ],
    },
    {
      num: '13–15', titre: 'Adressage IP', duree: '4h',
      contenu: [
        'Structure d\'une adresse IPv4 et d\'une adresse IPv6',
        'Masque de sous-réseau et passerelle par défaut',
        'Attribution automatique par DHCP',
        'TP — Plan d\'adressage d\'un petit réseau',
      ],
    },
    {
      num: '16–17', titre: 'Services applicatifs et réseau local complet', duree: '2h',
      contenu: [
        'DNS, DHCP, HTTP : les services que l\'utilisateur voit',
        'Construire un réseau local de bout en bout',
        'TP de synthèse — Réseau local fonctionnel et vérification',
        'Examen final du cours',
      ],
    },
  ],

  // Examen
  examen: {
    code:       'Badge NetAcad — Networking Basics',
    duree:      'Examen final intégré au cours',
    langue:     'Français',
    organisme:  'Cisco Networking Academy',
    format:     '17 modules, 13 laboratoires, activités interactives et test final',
    score:      'Selon barème NetAcad',
    note: 'Ce cours fait partie du parcours Cybersecurity Career Path et s\'aligne sur la certification CCST Cybersecurity. Cours suivant recommandé : Networking Essentials (35 h), puis le cursus CCNA.',
  },

  // Méthodes pédagogiques
  methodes: [
    'Formation dispensée par un formateur certifié Cisco (instructeur Cisco Networking Academy officiel)',
    'Accès à la plateforme Cisco Networking Academy 24h/24 pendant et après la formation',
    'Supports de cours officiels Cisco inclus (version numérique NetAcad)',
    'Rythme adapté aux personnes sans expérience informatique — aucun jargon présupposé',
    'Test de positionnement préalable pour confirmer le point d\'entrée dans le parcours',
    'Travaux pratiques sur machines virtuelles et Cisco Packet Tracer',
    'Badge numérique Cisco Networking Academy remis à l\'issue du cours — partageable sur Credly et LinkedIn',
    'Quiz de validation des acquis à chaque fin de module sur NetAcad',
    'Examens blancs en conditions réelles avant le passage de la certification',
    'Auto-évaluation formative en début et en fin de formation',
    'Évaluation formateur selon 4 niveaux : non évalué · non acquis · en cours · acquis',
    'Plan de travail individuel remis avant démarrage (Circ. DGEFP/MOC/2026/30 Art. 3)',
    'Attestation de formation, de présence et plan de travail individuel',
    'Accompagnement au financement OPCO et aides régionales DOM',
  ],
}

// ─── Composants réutilisables ─────────────────────────────────────────────────

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <>
      <h2 style={{
        fontFamily: 'var(--font-title)', fontSize: 'clamp(1.2rem,2vw,1.6rem)',
        fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em',
        color: light ? '#fff' : 'var(--g-black)', margin: '0 0 0.5rem',
      }}>
        {children}
      </h2>
      <div className="g-rule" />
    </>
  )
}

function CheckItem({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: light ? 'rgba(255,255,255,0.70)' : '#4a4a48' }}>
      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
      {text}
    </li>
  )
}

function SansPrerequisBanner() {
  return (
    <div style={{ background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.18)', borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <CheckCircle size={15} color="#E41F26" />
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)' }}>
          Formation d'entrée — aucun prérequis
        </span>
      </div>
      <p style={{ fontSize: '0.86rem', color: '#4a4a48', margin: 0, lineHeight: 1.65 }}>
        Cette formation ouvre le <strong style={{ color: 'var(--g-black)' }}>Bloc 0</strong> des parcours métier GALACTUS Digital. Elle est conçue pour les personnes en reconversion professionnelle, sans expérience informatique préalable. <a href="/formations#parcours" style={{ color: 'var(--g-red)', fontWeight: 600 }}>Voir les parcours →</a>
      </p>
    </div>
  )
}

function DelaisAcces() {
  return (
    <div style={{ background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.18)', borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <AlertCircle size={15} color="#E41F26" />
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)' }}>
          Délais d'accès à la formation
        </span>
      </div>
      {[
        { label: 'Standard',          val: '1 mois après signature du devis et de la convention de formation.' },
        { label: 'Financement OPCO',  val: '3 mois (montage du dossier de financement compris).' },
        { label: 'Inscription min.',  val: 'Les inscriptions sont possibles jusqu\'à 48 heures avant le début de la formation.' },
      ].map(d => (
        <p key={d.label} style={{ fontSize: '0.84rem', color: '#4a4a48', margin: '0 0 0.35rem', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--g-black)' }}>{d.label} — </strong>{d.val}
        </p>
      ))}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function NotionsBaseReseauxPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            {/* Fil d'ariane */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {['Formations', DATA.editeur, DATA.famille].map((crumb, i, arr) => (
                <span key={crumb} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === arr.length - 1 ? 'var(--g-red)' : 'rgba(255,255,255,0.35)' }}>
                    {crumb}
                  </span>
                  {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.20)', fontSize: '0.7rem' }}>›</span>}
                </span>
              ))}
            </div>

            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
              {DATA.titre}
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.50)', marginBottom: '1.25rem' }}>
              {DATA.sousTitre}
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[
                { label: 'Aucun prérequis', main: true },
                { label: `Certification : ${DATA.certification}` },
                { label: `Niveau ${DATA.niveau}` },
                { label: `Réf. ${DATA.ref}` },
                { label: DATA.partenaire },
              ].map(b => (
                <div key={b.label} style={{
                  padding: '0.35rem 0.9rem',
                  background: b.main ? 'rgba(228,31,38,0.15)' : 'rgba(255,255,255,0.07)',
                  border: `1px solid ${b.main ? 'rgba(228,31,38,0.35)' : 'rgba(255,255,255,0.12)'}`,
                  fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em',
                  textTransform: 'uppercase', color: b.main ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.55)',
                }}>
                  {b.label}
                </div>
              ))}
            </div>

            {/* Méta */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { icon: <Clock size={14} />, text: DATA.duree },
                { icon: <Users size={14} />, text: `${DATA.groupeMin} à ${DATA.groupeMax} participants` },
                { icon: <Calendar size={14} />, text: 'Voir calendrier', href: '/calendrier?f=notions-base-reseaux' },
              ].map((m, i) => (
                m.href ? (
                  <a key={i} href={m.href} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-title)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: 'var(--g-red)', padding: '0.35rem 0.8rem' }}>
                    {m.icon}<span>Voir le calendrier</span>
                  </a>
                ) : (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ color: 'var(--g-red)' }}>{m.icon}</span>
                    {m.text}
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── Modalités & tarifs ── */}
        <TarifsModalites slug="notions-base-reseaux" />

        {/* ── Description ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>À propos de cette formation</SectionTitle>
            <div style={{ maxWidth: '800px' }}>
              <SansPrerequisBanner />
              <p style={{ fontSize: '0.95rem', color: '#5a5a58', lineHeight: 1.8, margin: 0 }}>
                {DATA.description}
              </p>
            </div>
          </div>
        </section>

        {/* ── Objectifs pédagogiques ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Objectifs pédagogiques</SectionTitle>
            <p style={{ fontSize: '0.88rem', color: '#888', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              À l'issue de la formation, les participants seront capables de :
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="fiche-objectifs">
              {DATA.objectifs.map((obj, i) => (
                <div key={i} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '1.5rem', background: 'var(--g-offwhite)' }}>
                  <div style={{ width: '32px', height: '32px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <Network size={16} color="white" />
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#4a4a48', lineHeight: 1.6, margin: 0 }}>{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Public & Prérequis ── */}
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

        {/* ── Programme ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Programme détaillé</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }} className="fiche-modules">
              {DATA.modules.map(mod => (
                <div key={mod.num} style={{ border: '1px solid rgba(187,187,187,0.3)', overflow: 'hidden' }}>
                  {/* En-tête module */}
                  <div style={{ background: 'var(--g-red)', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '0.2rem' }}>
                        Module {mod.num}
                      </div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>
                        {mod.titre}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)' }}>
                      <Clock size={13} />
                      {mod.duree}
                    </div>
                  </div>
                  {/* Contenu module */}
                  <div style={{ padding: '1rem 1.25rem', background: 'var(--g-white)' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {mod.contenu.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58', lineHeight: 1.5 }}>
                          <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Validation des acquis ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Validation des acquis</SectionTitle>
            <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }} className="fiche-exam">
              <div style={{ width: '56px', height: '56px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Award size={28} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>
                  {DATA.certification}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(175px,1fr))', gap: '0.75rem' }} className="fiche-exam-grid">
                  {[
                    { label: 'Référence',    val: DATA.examen.code },
                    { label: 'Durée',        val: DATA.examen.duree },
                    { label: 'Langue',       val: DATA.examen.langue },
                    { label: 'Organisme',    val: DATA.examen.organisme },
                    { label: 'Format',       val: DATA.examen.format },
                    { label: 'Réussite',     val: DATA.examen.score },
                  ].map(row => (
                    <div key={row.label} style={{ padding: '0.75rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.25)' }}>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.25rem' }}>{row.label}</div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--g-black)', fontWeight: 600 }}>{row.val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.15)' }}>
                  <p style={{ fontSize: '0.84rem', color: '#5a5a58', margin: 0, lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--g-black)' }}>Suite du parcours — </strong>{DATA.examen.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Méthodes pédagogiques ── */}
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

        {/* ── Conformité & Délais ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="fiche-public">

            {/* Conformité */}
            <div>
              <SectionTitle>Conformité réglementaire</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { ref: 'Art. L.6313-1', title: 'Action de formation', desc: 'Formation reconnue au sens du Code du travail — synchrone en présentiel ou FOAD.' },
                  { ref: 'Critère 1 Qualiopi', title: 'Analyse du besoin', desc: 'Test de positionnement préalable : il détermine le bloc d\'entrée et confirme qu\'aucun prérequis n\'est nécessaire.' },
                  { ref: 'Qualiopi Ind. 4', title: 'Convocation', desc: 'Convocation avec programme, lieu, horaires et règlement intérieur envoyée avant démarrage.' },
                  { ref: 'Critère 3 Qualiopi', title: 'Évaluation des acquis', desc: 'Quiz NetAcad + auto-évaluation formateur selon 4 niveaux : non acquis → acquis.' },
                  { ref: 'Circ. DGEFP/MOC/2026/30', title: 'Plan de travail individuel', desc: "Un plan de travail individuel est remis à chaque apprenant avant le démarrage de la formation FOAD ou e-learning, conformément à la circulaire DGEFP du 17 février 2026." },
                  { ref: 'Ind. 19 Qualiopi', title: 'Plateau technique', desc: 'Accès NetAcad vérifié avant démarrage. Un poste de travail et une connexion Internet suffisent.' },
                ].map(c => (
                  <div key={c.ref} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '1rem', display: 'flex', gap: '0.75rem' }}>
                    <div style={{ flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.55rem', whiteSpace: 'nowrap' }}>{c.ref}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.2rem' }}>{c.title}</div>
                      <p style={{ fontSize: '0.82rem', color: '#5a5a58', margin: 0, lineHeight: 1.55 }}>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Délais */}
            <div>
              <SectionTitle>Délais d'accès</SectionTitle>
              <DelaisAcces />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h2 className="section-h2-light" style={{ marginBottom: '0.4rem' }}>Vous partez de zéro ?</h2>
              <p style={{ fontSize: '0.90rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.7 }}>
                C'est le cas prévu. Devis sous 48h, accompagnement au financement OPCO et aides régionales DOM.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Demander un devis</a>
            </div>
          </div>
        </section>

        {/* Responsive mobile */}
        <style>{`
          @media (max-width: 900px) {
            .fiche-modules   { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 768px) {
            .fiche-objectifs { grid-template-columns: 1fr !important; }
            .fiche-exam-grid { grid-template-columns: 1fr 1fr !important; }
            .fiche-methodes  { grid-template-columns: 1fr !important; }
            .fiche-public    { grid-template-columns: 1fr !important; }
            .fiche-exam      { flex-direction: column !important; }
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
