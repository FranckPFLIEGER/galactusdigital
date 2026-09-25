import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { TarifsModalites } from '../../components/TarifsModalites'
import {
  CheckCircle, Clock, Calendar, Users, Phone, Mail,
  Award, AlertCircle, Network,
} from 'lucide-react'

export const Route = createFileRoute('/formations/sensibilisation-numerique')({
  component: SensibilisationNumeriquePage,
  head: () => ({
    meta: [
      { title: "Sensibilisation au numérique — Formation sans prérequis | GALACTUS Digital" },
      { name: "description", content: "Formation Sensibilisation au numérique. 6h, aucun prérequis. Identité numérique, recherche, mots de passe, premiers réflexes IA. Reconversion. Territoires ultramarins. Qualiopi." },
    ],
  }),
})

// ─── Données de la formation ──────────────────────────────────────────────────

const DATA = {
  // Identité
  editeur:        'Cisco',
  famille:        'Cisco Networking Academy — Socle & Reconversion',
  titre:          'Sensibilisation au numérique',
  sousTitre:      'Bloc 0 des parcours métier · Cours d\'entrée Cisco Networking Academy',
  ref:            'SOCLE-SN-001',
  niveau:         'Grand débutant',
  partenaire:     'Partenaire Cisco n° 3018982',
  certification:  'Badge numérique Cisco Networking Academy',

  // Logistique
  duree:          '6 heures',
  groupeMin:      4,
  groupeMax:      14,
  lieux:          ['Martinique', 'Guadeloupe', 'Paris'],

  // Description
  description: 'Première marche de tous les parcours GALACTUS Digital. Ce cours pose les repères de base du monde numérique : à quoi servent les outils digitaux, comment gérer son identité en ligne, chercher efficacement une information, construire un mot de passe solide et résoudre seul les pannes les plus courantes. Il introduit également l\'intelligence artificielle. Aucune connaissance préalable n\'est nécessaire — c\'est exactement le point de départ prévu pour une reconversion.',

  // Objectifs pédagogiques
  objectifs: [
    'Identifier les tâches du quotidien professionnel qui peuvent être facilitées par les technologies numériques',
    'Mener une recherche efficace sur Internet et évaluer la fiabilité d\'une source',
    'Utiliser une messagerie électronique : envoyer, recevoir, organiser et sécuriser ses e-mails',
    'Construire et gérer des mots de passe robustes, et comprendre les risques liés à leur réutilisation',
    'Gérer son identité numérique et maîtriser son empreinte en ligne',
    'Résoudre les problèmes techniques de base : lenteurs, connexion Wi-Fi, coupures de connectivité',
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
      num: '01', titre: 'Le monde numérique aujourd\'hui', duree: '1h',
      contenu: [
        'Ce que recouvrent les technologies numériques et leur impact sur le travail',
        'Panorama des métiers accessibles par une reconversion IT',
        'Repérer les tâches du quotidien améliorables par le numérique',
      ],
    },
    {
      num: '02', titre: 'Rechercher et évaluer l\'information', duree: '1h',
      contenu: [
        'Construire une requête de recherche efficace',
        'Évaluer la fiabilité d\'une source en ligne',
        'Exercices pratiques de recherche guidée',
      ],
    },
    {
      num: '03', titre: 'Communiquer par e-mail', duree: '1h',
      contenu: [
        'Envoi, réception et organisation des messages',
        'Pièces jointes, copies et copies cachées',
        'Reconnaître un e-mail frauduleux (hameçonnage)',
      ],
    },
    {
      num: '04', titre: 'Mots de passe et sécurité de base', duree: '1h',
      contenu: [
        'Anatomie d\'un mot de passe solide',
        'Outil de vérification de la fiabilité des mots de passe',
        'Gestionnaires de mots de passe et double authentification',
      ],
    },
    {
      num: '05', titre: 'Identité numérique', duree: '1h',
      contenu: [
        'Ce que les autres voient de vous en ligne',
        'Paramètres de confidentialité des principaux services',
        'Construire une présence professionnelle cohérente',
      ],
    },
    {
      num: '06', titre: 'Dépannage courant et première approche de l\'IA', duree: '1h',
      contenu: [
        'Vidéos explicatives : lenteurs, Wi-Fi, problèmes de connectivité',
        'S\'initier à l\'intelligence artificielle et à ses usages quotidiens',
        'Examen final du cours',
      ],
    },
  ],

  // Examen
  examen: {
    code:       'Badge NetAcad — Sensibilisation au numérique',
    duree:      'Examen final intégré au cours',
    langue:     'Français',
    organisme:  'Cisco Networking Academy',
    format:     'Quiz de module et examen final en ligne',
    score:      'Selon barème NetAcad',
    note: 'Cours suivant recommandé : Utilisation d\'ordinateurs et d\'équipements mobiles, puis Les bases du matériel informatique. Ce cours ouvre le Bloc 0 des parcours Réseaux, Automatisation, Cloud Azure, Modern Workplace et Data & IA.',
  },

  // Méthodes pédagogiques
  methodes: [
    'Formation dispensée par un formateur certifié Cisco (instructeur Cisco Networking Academy officiel)',
    'Accès à la plateforme Cisco Networking Academy 24h/24 pendant et après la formation',
    'Supports de cours officiels Cisco inclus (version numérique NetAcad)',
    'Rythme adapté aux personnes sans expérience informatique — aucun jargon présupposé',
    'Test de positionnement préalable pour confirmer le point d\'entrée dans le parcours',
    'Badge numérique Cisco Networking Academy remis à l\'issue du cours — partageable sur Credly et LinkedIn',
    'Quiz de validation des acquis à chaque fin de module sur NetAcad',
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

function SensibilisationNumeriquePage() {
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
                { icon: <Calendar size={14} />, text: 'Voir calendrier', href: '/calendrier?f=sensibilisation-numerique' },
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
        <TarifsModalites slug="sensibilisation-numerique" />

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
