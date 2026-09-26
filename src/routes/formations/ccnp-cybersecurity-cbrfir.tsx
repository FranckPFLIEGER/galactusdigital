import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { TarifsModalites } from '../../components/TarifsModalites'
import { CheckCircle, Clock, Calendar, Users, Phone, Mail, Award, AlertCircle, Cloud } from 'lucide-react'

export const Route = createFileRoute('/formations/ccnp-cybersecurity-cbrfir')({
  component: CcnpCybersecurityCbrfirPage,
  head: () => ({
    meta: [
      { title: "CCNP Cybersecurity — CBRFIR 300-215 forensique et réponse à incident | GALACTUS Digital" },
      { name: "description", content: "CCNP Cybersecurity concentration CBRFIR 300-215. 60h. Analyse forensique, collecte de preuves, réponse à incident avec les technologies Cisco. Formateur CCNP certifié. Qualiopi." },
    ],
  }),
})

// Item de contenu/objectif : chaîne simple, ou { text, neuf } pour marquer une
// nouveauté v9 (badge rouge « NOUVEAU v9 »). Retirer un item de la veille :
// repasser la valeur en simple chaîne.
type Item = string | { text: string; neuf?: boolean }
const itemText = (it: Item) => typeof it === 'string' ? it : it.text
const itemNeuf = (it: Item) => typeof it === 'string' ? false : !!it.neuf

const DATA = {
  editeur: 'Cisco',
  famille: 'Cisco — Cybersécurité (niveau professionnel)',
  titre: 'CCNP Cybersecurity — Forensique et réponse à incident (CBRFIR)',
  sousTitre: 'Conducting Forensic Analysis and Incident Response 300-215 · Concentration du CCNP Cybersecurity',
  ref: 'CCNP-CYB-CBRFIR-002',
  niveau: 'Avancé',
  partenaire: 'Formateur Cisco CCNP / CCDP certifié',
  certification: 'Cisco Certified Network Professional (CCNP) Cybersecurity',
  duree: '60 heures',
  groupeMin: 3,
  groupeMax: 10,
  lieux: ['Martinique', 'Guadeloupe', 'Paris'],
  description: 'Concentration du CCNP Cybersecurity consacrée à l\'analyse forensique et à la réponse à incident. Ce qui se passe après la détection : collecter les preuves sans les altérer, reconstituer la chronologie d\'une attaque, identifier le point d\'entrée et la portée de la compromission, remédier et documenter. Associée à l\'examen cœur CBRCOR, elle délivre la certification CCNP Cybersecurity complète.',
  objectifs: [
    'Appliquer les principes de la preuve numérique : intégrité, chaîne de conservation, recevabilité',
    'Collecter et préserver les artefacts sur poste, serveur et équipement réseau',
    'Reconstituer la chronologie d\'un incident à partir des journaux et des artefacts',
    'Identifier le vecteur initial, les mouvements latéraux et la portée de la compromission',
    'Conduire la remédiation et vérifier l\'éradication de la menace',
    'Rédiger un rapport d\'investigation opposable et un retour d\'expérience',
  ],
  public: [
    'Analystes SOC de niveau 2 et 3',
    'Responsables de la réponse à incident',
    'Candidats au CCNP Cybersecurity ayant validé ou préparant le CBRCOR',
    'Consultants en réponse à incident et en investigation numérique',
    'Ingénieurs sécurité en charge du post-incident',
  ],
  prerequis: [
    'CCNA Cybersecurity (200-201) validé ou compétences équivalentes',
    'L\'examen cœur CBRCOR est recommandé avant cette concentration, sans être obligatoire',
    'Expérience de l\'analyse de journaux et du trafic réseau',
    'Maîtrise des systèmes Windows et Linux en ligne de commande',
    'Aucun prérequis formel n\'est exigé par Cisco pour se présenter à l\'examen',
  ],
  modules: [
    {
      num: '1.0', titre: 'Fondamentaux de l\'investigation numérique', duree: '12h',
      contenu: [
        'Principes de la preuve numérique et cadre juridique',
        'Chaîne de conservation et intégrité des supports',
        'Méthodologie d\'investigation et documentation',
        'TP — mise en place d\'une chaîne de conservation',
      ],
    },
    {
      num: '2.0', titre: 'Collecte et acquisition', duree: '14h',
      contenu: [
        'Acquisition mémoire et disque, à chaud et à froid',
        'Artefacts Windows : registre, journaux, prefetch, MFT',
        'Artefacts Linux et équipements réseau',
        'TP — acquisition et vérification d\'empreinte',
      ],
    },
    {
      num: '3.0', titre: 'Analyse et chronologie', duree: '16h',
      contenu: [
        'Reconstitution de la chronologie d\'attaque',
        'Analyse de malware et d\'indicateurs de compromission',
        'Corrélation multi-sources et détection des mouvements latéraux',
        'TP — investigation complète d\'une compromission simulée',
      ],
    },
    {
      num: '4.0', titre: 'Réponse et remédiation', duree: '12h',
      contenu: [
        'Confinement, éradication et restauration',
        'Vérification de l\'éradication et surveillance renforcée',
        'Rapport d\'investigation et retour d\'expérience',
        'TP — plan de remédiation et rapport',
      ],
    },
    {
      num: '5.0', titre: 'Préparation à l\'examen', duree: '6h',
      contenu: [
        'Révision par domaine et pondération officielle',
        'Examen blanc chronométré en conditions réelles',
      ],
    },
  ],
  examen: {
    code:       '300-215 CBRFIR',
    duree:      '90 minutes',
    langue:     'Anglais',
    organisme:  'Cisco, via Pearson VUE',
    format:     'QCM, glisser-déposer et questions de type performance-based',
    score:      'Score de coupe variable, non publié par Cisco',
    note: 'Associée à l\'examen cœur 350-201 CBRCOR, cette concentration délivre la certification CCNP Cybersecurity. L\'autre concentration possible est le 300-220 CBRTHD, consacré à la chasse aux menaces. Certification valable 3 ans. Le voucher est compris dans le tarif e-learning.',
  },
  methodes: [
    'Formation dispensée par un formateur certifié Cisco CCNP/CCDP',
    'Accès à la plateforme Cisco Networking Academy 24h/24 pendant et après la formation',
    'Laboratoires d\'analyse et de réponse à incident sur environnement virtualisé',
    'Supports de cours officiels Cisco inclus (version numérique)',
    'Quiz de validation des acquis à chaque fin de module',
    'Examens blancs en conditions réelles avant le passage de la certification',
    'Badge numérique Cisco remis à l\'issue du cours — partageable sur Credly',
    'Auto-évaluation formative en début et en fin de formation',
    'Évaluation formateur selon 4 niveaux : non évalué · non acquis · en cours · acquis',
    'Plan de travail individuel remis avant démarrage (Circ. DGEFP/MOC/2026/30 Art. 3)',
    'Attestation de formation, de présence et plan de travail individuel',
    'Voucher d\'examen officiel Pearson VUE compris dans le tarif e-learning tutoré',
  ],
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (<><h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: light ? '#fff' : 'var(--g-black)', margin: '0 0 0.5rem' }}>{children}</h2><div className="g-rule" /></>)
}
function CheckItem({ text }: { text: string }) {
  return (<li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}><CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{text}</li>)
}
// Badge « NOUVEAU v9 » — signale les ajouts du programme CCNP v9 (blueprint v1.2).
function NewBadge() {
  return (<span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, fontFamily: 'var(--font-title)', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '1px 6px', marginLeft: '0.4rem', borderRadius: '2px', verticalAlign: 'middle' }}>Nouveau v9</span>)
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

function CcnpCybersecurityCbrfirPage() {
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
                { icon: <Calendar size={14} />, text: 'Voir calendrier', href: '/calendrier?f=ccnp-cybersecurity-cbrfir' },
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
        <TarifsModalites slug="ccnp-cybersecurity-cbrfir" />

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
                  <div style={{ width: '32px', height: '32px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}><Cloud size={16} color="white" /></div>
                  <p style={{ fontSize: '0.85rem', color: '#4a4a48', lineHeight: 1.6, margin: 0 }}>{itemText(obj)}{itemNeuf(obj) && <NewBadge />}</p>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }} className="fiche-programme">
              {DATA.modules.map(mod => (
                <div key={mod.num} style={{ border: '1px solid rgba(187,187,187,0.3)', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--g-red)', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '0.2rem' }}>Bloc {mod.num}</div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>{mod.titre}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)' }}><Clock size={13} />{mod.duree}</div>
                  </div>
                  <div style={{ padding: '1rem 1.25rem', background: 'var(--g-white)' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {mod.contenu.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58', lineHeight: 1.5 }}>
                          <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                          <span>{itemText(item)}{itemNeuf(item) && <NewBadge />}</span>
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
                      <div style={{ fontSize: '0.84rem', color: 'var(--g-black)', fontWeight: 600 }}>{row.val}{typeof row.val === 'string' && row.val.includes('v1.2') && <NewBadge />}</div>
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
                  { ref: 'Critère 3 Qualiopi', title: 'Évaluation des acquis', desc: 'Quiz + auto-évaluation formateur selon 4 niveaux.' },
                  { ref: 'Circ. DGEFP/MOC/2026/30', title: 'Plan de travail individuel', desc: "Un plan de travail individuel est remis à chaque apprenant avant le démarrage de la formation FOAD ou e-learning, conformément à la circulaire DGEFP du 17 février 2026." },
                  { ref: 'Ind. 19 Qualiopi', title: 'Plateau technique', desc: 'Accès CML / EVE-NG et équipements vérifiés avant démarrage.' },
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
