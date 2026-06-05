import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Award, CheckCircle, Phone, Mail, MapPin, Monitor,
  AlertCircle, Clock, Users, ExternalLink, Shield, Star,
} from 'lucide-react'

export const Route = createFileRoute('/certifications')({
  component: CertificationsPage,
})

// ─── Données ──────────────────────────────────────────────────────────────────

const CERTS_GALACTUS = [
  {
    code: 'TCP/IP',
    titre: 'TCP/IP — Mettre en œuvre un réseau local',
    duree: '1h30', questions: 'QCM + Cas pratiques', score: '700 / 1000',
    cpf: true, rs: 'RS disponible',
    desc: 'Valider la maîtrise des fondamentaux réseau TCP/IP en environnement local.',
  },
  {
    code: 'Python',
    titre: 'Python — Apprendre à utiliser le langage',
    duree: '1h30', questions: 'QCM + Cas pratiques', score: '700 / 1000',
    cpf: true, rs: 'RS disponible',
    desc: 'Certifier les compétences Python fondamentales : syntaxe, structures, fonctions.',
  },
  {
    code: 'Linux',
    titre: 'Linux — Administrer le système',
    duree: '1h30', questions: 'QCM + Cas pratiques', score: '700 / 1000',
    cpf: true, rs: 'RS disponible',
    desc: 'Valider les compétences d\'administration système Linux en environnement professionnel.',
  },
  {
    code: 'SQL',
    titre: 'SQL — Exploiter une base de données relationnelle',
    duree: '1h30', questions: 'QCM + Cas pratiques', score: '700 / 1000',
    cpf: true, rs: 'RS disponible',
    desc: 'Certifier la maîtrise du langage SQL pour l\'interrogation et la gestion de bases de données.',
  },
]

const CERTS_PEARSONVUE = [
  { editeur: 'Cisco', couleur: '#E41F26', badge: 'Partenaire n° 3018982',
    certifs: ['CCNA 200-301', 'CyberOps Associate 200-201', 'DevNet Associate 200-901', 'CCNP Enterprise', 'CCNP Security'] },
  { editeur: 'Microsoft', couleur: '#0078D4', badge: 'Partenaire n° 4653557',
    certifs: ['AZ-900 Azure Fundamentals', 'AZ-104 Azure Administrator', 'SC-900 Security', 'AI-900 Azure AI', 'MS-900 Microsoft 365'] },
  { editeur: 'IPv6 Forum', couleur: '#16a085', badge: 'Membre actif',
    certifs: ['IPv6 Certified Network Engineer', 'IPv6 Certified Security Engineer', 'IPv6 Fundamentals'] },
  { editeur: 'LPI', couleur: '#FFAD00', badge: '',
    certifs: ['Linux Essentials 010-160', 'LPIC-1 (101 + 102)', 'LPIC-2 (201 + 202)'] },
  { editeur: 'OpenEDG', couleur: '#2980b9', badge: 'Python Institute',
    certifs: ['PCEP 30-02 (Entry)', 'PCAP 31-03 (Associate)', 'PCPP1 (Professional 1)'] },
]

// ─── Sous-composants ──────────────────────────────────────────────────────────

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <>
      <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: light ? '#fff' : 'var(--g-black)', margin: '0 0 0.5rem' }}>
        {children}
      </h2>
      <div className="g-rule" />
    </>
  )
}

function StepCard({ num, titre, desc, dark = false }: { num: string; titre: string; desc: string; dark?: boolean }) {
  return (
    <div style={{ background: dark ? 'rgba(255,255,255,0.04)' : 'var(--g-white)', border: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(187,187,187,0.3)', borderTop: '3px solid var(--g-red)', padding: '1.5rem' }}>
      <div style={{ fontFamily: 'var(--font-title)', fontSize: '2rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.6rem' }}>{num}</div>
      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: dark ? '#fff' : 'var(--g-black)', marginBottom: '0.5rem' }}>{titre}</div>
      <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: dark ? 'rgba(255,255,255,0.55)' : '#5a5a58', margin: 0 }}>{desc}</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function CertificationsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Certifications
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Passer une certification
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              GALACTUS Digital est centre agréé pour les examens de certification Galactus Digital et centre accrédité Pearson VUE pour les certifications Cisco, Microsoft, IPv6 Forum, LPI et OpenEDG.
              Officialisez vos compétences, affirmez-vous comme expert, développez votre employabilité.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Centre agréé Galactus Digital', 'Pearson VUE Authorized Test Center', 'Certifications éligibles CPF', 'Résultats immédiats'].map(b => (
                <div key={b} style={{ padding: '0.35rem 0.9rem', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.25)', fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Intro — deux types de certification ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Les modalités d'un examen de certification informatique</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>

              {/* Galactus Digital */}
              <div style={{ border: '1px solid rgba(187,187,187,0.35)', borderTop: '4px solid var(--g-red)', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Award size={22} color="white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Pour les examens</div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', lineHeight: 1.2 }}>
                      Certification GALACTUS Digital
                    </div>
                  </div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(228,31,38,0.08)', border: '1px solid rgba(228,31,38,0.20)', padding: '0.3rem 0.75rem', marginBottom: '1.25rem' }}>
                  <Shield size={12} color="#E41F26" />
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)' }}>
                    Certificateur — Centre agréé GALACTUS Digital
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { icon: <Users size={14} color="#E41F26" />, text: 'Le jour de l\'examen, avec l\'administrateur Certification GALACTUS Digital, vous vous connecterez au portail de certification pour créer votre compte.' },
                    { icon: <Clock size={14} color="#E41F26" />, text: 'L\'examen est chronométré — 1 à 2 heures selon la certification — sous surveillance d\'un examinateur. Il se présente sous la forme de cas pratiques et de QCM.' },
                    { icon: <Star size={14} color="#E41F26" />, text: 'À l\'issue de l\'examen, vous accédez directement à vos résultats : un score sur 1 000 points indiquant votre niveau de compétences. Votre certificat et les résultats détaillés vous sont transmis par e-mail quelques jours après.' },
                    { icon: <Monitor size={14} color="#E41F26" />, text: 'Option surveillance à distance : l\'examen peut être passé depuis chez vous avec une application qui vérifie votre identité, votre environnement, et enregistre webcam, écran et sons pendant l\'examen (coût supplémentaire).' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.85rem 1rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.25)' }}>
                      <span style={{ flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                      <p style={{ fontSize: '0.83rem', color: '#4a4a48', lineHeight: 1.65, margin: 0 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1.25rem', padding: '0.85rem 1rem', background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.15)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <AlertCircle size={14} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.80rem', color: '#5a5a58', margin: 0, lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--g-black)' }}>Certifications éligibles CPF</strong> — Consultez le catalogue des certifications GALACTUS Digital référencées au Répertoire Spécifique (RS) France Compétences pour une prise en charge via votre Compte Personnel de Formation.
                  </p>
                </div>
              </div>

              {/* Pearson VUE */}
              <div style={{ border: '1px solid rgba(187,187,187,0.35)', borderTop: '4px solid #1D1D1B', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Award size={22} color="white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.60rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#888', marginBottom: '0.2rem' }}>Pour les examens Microsoft, Cisco…</div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', lineHeight: 1.2 }}>
                      Pearson VUE Authorized Test Center
                    </div>
                  </div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(29,29,27,0.06)', border: '1px solid rgba(29,29,27,0.15)', padding: '0.3rem 0.75rem', marginBottom: '1.25rem' }}>
                  <Shield size={12} color="var(--g-black)" />
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-black)' }}>
                    Certificateur — Pearson VUE
                  </span>
                </div>

                {/* OnVUE */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.80rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.15rem 0.5rem' }}>Option 1</span>
                    Examen en ligne avec surveillance (OnVUE)
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '0.4rem' }}>Avant l'examen</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.85rem' }}>
                    {[
                      'Vérifier la compatibilité du système via le test OnVUE',
                      'Préparer un espace privé, bien éclairé, bureau dégagé',
                      'Pièce d\'identité valide — nom identique à l\'inscription',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#5a5a58' }}>
                        <CheckCircle size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '0.4rem' }}>Le jour de l'examen</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {[
                      'Enregistrement disponible de 30 min avant à 15 min après l\'heure prévue',
                      'Présentation de la pièce d\'identité + photos du visage et de l\'espace d\'examen',
                      'Surveillance en temps réel via webcam et microphone',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#5a5a58' }}>
                        <CheckCircle size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Centre physique */}
                <div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.80rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-black)', background: 'rgba(29,29,27,0.08)', padding: '0.15rem 0.5rem' }}>Option 2</span>
                    Examen en centre physique
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '0.4rem' }}>Avant l'examen</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.85rem' }}>
                    {[
                      'Réserver une place dans un centre agréé via Pearson VUE ou l\'organisme de certification',
                      'Préparer une pièce d\'identité principale + une secondaire (politique mondiale Pearson VUE)',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#5a5a58' }}>
                        <CheckCircle size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '0.4rem' }}>Le jour de l'examen</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {[
                      'Arriver au moins 15 minutes avant l\'heure prévue',
                      'Présentation des pièces d\'identité + photographie + accord de confidentialité',
                      'Examen surveillé par un administrateur de test agréé',
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#5a5a58' }}>
                        <CheckCircle size={13} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem', padding: '0.85rem 1rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <AlertCircle size={14} color="#888" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.80rem', color: '#5a5a58', margin: 0, lineHeight: 1.6 }}>
                    Consulter les directives spécifiques de l'organisme de certification concerné — des exigences supplémentaires peuvent s'appliquer selon l'examen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CERTIFICATIONS GALACTUS DIGITAL
        ══════════════════════════════════════════ */}
        <section id="galactus" style={{ background: 'var(--g-black)', padding: '4rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Certifications</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
                  Certifications GALACTUS Digital
                </h2>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', maxWidth: '720px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              GALACTUS Digital est centre agréé pour les certifications officielles ENI — référencées au Répertoire Spécifique (RS) de France Compétences et éligibles CPF. Elles valident des compétences techniques précises, avec un score sur 1 000 points et un certificat permanent.
            </p>

            {/* Avantages */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginBottom: '3rem' }}>
              {[
                { icon: <Star size={20} color="white" />, titre: 'Validité permanente', desc: 'Les certifications GALACTUS Digital sont valables à vie — aucun renouvellement requis.' },
                { icon: <Shield size={20} color="white" />, titre: 'Éligibles CPF', desc: 'Référencées au Répertoire Spécifique France Compétences — finançables via le CPF.' },
                { icon: <CheckCircle size={20} color="white" />, titre: 'Résultats immédiats', desc: 'Score sur 1 000 points affiché à la fin de l\'examen. Certificat envoyé par e-mail.' },
                { icon: <Award size={20} color="white" />, titre: 'Certification officielle', desc: 'Reconnue par les employeurs — attestation numérique partageable sur LinkedIn.' },
              ].map(a => (
                <div key={a.titre} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{a.icon}</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.86rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.5rem' }}>{a.titre}</div>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.52)', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>

            {/* Grille certifications */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
              {CERTS_GALACTUS.map(cert => (
                <div key={cert.code} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '4px solid var(--g-red)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <div>
                      {cert.cpf && (
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#27ae60', background: 'rgba(39,174,96,0.12)', padding: '0.15rem 0.5rem', display: 'inline-block', marginBottom: '0.4rem' }}>
                          Éligible CPF · {cert.rs}
                        </div>
                      )}
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.92rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', lineHeight: 1.25 }}>
                        {cert.titre}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.6, margin: 0 }}>{cert.desc}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Durée', val: cert.duree },
                      { label: 'Format', val: cert.questions },
                      { label: 'Score', val: cert.score },
                    ].map(row => (
                      <div key={row.label} style={{ background: 'rgba(255,255,255,0.06)', padding: '0.3rem 0.75rem' }}>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.1rem' }}>{row.label}</div>
                        <div style={{ fontSize: '0.80rem', color: '#fff', fontWeight: 600 }}>{row.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Comment s'inscrire — Galactus */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1.25rem' }}>
                Comment passer un examen Certification GALACTUS Digital ?
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
                {[
                  { num: '01', titre: 'Planifier', desc: 'Contactez-nous pour planifier votre examen à votre convenance dans nos centres agréés.' },
                  { num: '02', titre: 'Connexion', desc: 'Le jour J, l\'administrateur vous connecte au portail de certification pour créer votre compte.' },
                  { num: '03', titre: 'Examen', desc: 'QCM et cas pratiques — 1 à 2 heures chrono, sous surveillance d\'un examinateur certifié.' },
                  { num: '04', titre: 'Résultats', desc: 'Score sur 1 000 immédiatement. Certificat et résultats détaillés envoyés par e-mail sous quelques jours.' },
                ].map(s => (
                  <div key={s.num} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '2px solid var(--g-red)', padding: '1.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.num}</div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.35rem' }}>{s.titre}</div>
                    <p style={{ fontSize: '0.80rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.50)', margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Planifier mon examen</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Consulter les certifications disponibles</a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CERTIFICATIONS PEARSON VUE
        ══════════════════════════════════════════ */}
        <section id="pearsonvue" style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-black)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#888', marginBottom: '0.2rem' }}>Certifications éditeurs</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: 'var(--g-black)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
                  Certifications Pearson VUE
                </h2>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#5a5a58', maxWidth: '720px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              GALACTUS Digital est centre accrédité Pearson VUE. Vous pouvez passer chez nous les examens Cisco, Microsoft, IPv6 Forum, LPI et OpenEDG — en présentiel dans nos centres ou en ligne via OnVUE, dans les conditions officielles des éditeurs.
            </p>

            {/* Grille éditeurs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginBottom: '3rem' }}>
              {CERTS_PEARSONVUE.map(editeur => (
                <div key={editeur.editeur} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', overflow: 'hidden' }}>
                  <div style={{ background: editeur.couleur, padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>
                      {editeur.editeur}
                    </div>
                    {editeur.badge && (
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', background: 'rgba(255,255,255,0.20)', padding: '0.15rem 0.5rem' }}>
                        {editeur.badge}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1rem 1.25rem' }}>
                    {editeur.certifs.map((cert, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0', borderBottom: i < editeur.certifs.length - 1 ? '1px solid rgba(187,187,187,0.18)' : 'none' }}>
                        <div style={{ width: '5px', height: '5px', background: editeur.couleur, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.83rem', color: '#4a4a48' }}>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Carte contact Pearson VUE */}
              <div style={{ background: 'var(--g-black)', border: '1px solid rgba(255,255,255,0.06)', borderTop: `3px solid var(--g-red)`, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.75rem' }}>
                    Passer votre examen Pearson VUE chez nous
                  </div>
                  <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    Contactez-nous pour réserver votre créneau d'examen dans l'un de nos centres accrédités en Martinique, Guadeloupe ou Paris.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                      { icon: <MapPin size={13} />, text: 'Martinique · Guadeloupe · Paris' },
                      { icon: <Monitor size={13} />, text: 'OnVUE disponible — examen à domicile' },
                      { icon: <Clock size={13} />, text: 'Planification sur rendez-vous' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.80rem', color: 'rgba(255,255,255,0.55)' }}>
                        <span style={{ color: 'var(--g-red)', flexShrink: 0 }}>{item.icon}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
                <a href="mailto:president@galactusdigital.com" className="btn-red" style={{ marginTop: '1.5rem', justifyContent: 'center', textAlign: 'center' }}>
                  <Mail size={14} /> Réserver un créneau
                </a>
              </div>
            </div>

            {/* Processus en centre */}
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', marginBottom: '1.25rem' }}>
              Déroulement — Examen en centre physique Pearson VUE
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
              {[
                { num: '01', titre: 'Inscription', desc: 'Réservez sur Pearson VUE ou contactez-nous. Préparez deux pièces d\'identité conformes à la politique mondiale Pearson VUE.' },
                { num: '02', titre: 'Arrivée', desc: 'Présentez-vous 15 minutes avant. Présentation des pièces d\'identité et prise de photographie.' },
                { num: '03', titre: 'Examen', desc: 'Examen sous surveillance d\'un administrateur agréé. Respect strict des règles et procédures Pearson VUE.' },
                { num: '04', titre: 'Résultats', desc: 'Résultats affichés immédiatement. Certificat officiel éditeur envoyé selon les délais de l\'organisme certificateur.' },
              ].map(s => (
                <div key={s.num} style={{ border: '1px solid rgba(187,187,187,0.3)', borderTop: '3px solid var(--g-black)', padding: '1.25rem', background: 'var(--g-white)' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--g-black)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.num}</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.35rem' }}>{s.titre}</div>
                  <p style={{ fontSize: '0.80rem', lineHeight: 1.55, color: '#5a5a58', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Conformité réglementaire ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <SectionTitle>Conformité réglementaire</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
              {[
                { ref: 'France Compétences RS', title: 'Certifications référencées', desc: 'Les certifications GALACTUS Digital éligibles CPF sont référencées au Répertoire Spécifique (RS) de France Compétences — finançables via le Compte Personnel de Formation.' },
                { ref: 'Art. L.6313-1', title: 'Action de formation certifiante', desc: 'Les formations préparatoires aux certifications sont reconnues comme actions de formation certifiantes au sens du Code du travail.' },
                { ref: 'Qualiopi Ind. 4', title: 'Convocation examen', desc: 'Chaque candidat reçoit une convocation précisant les modalités de l\'examen, le lieu, l\'heure et les pièces à fournir avant le jour J.' },
                { ref: 'Délai CPF', title: 'Délai obligatoire CPF', desc: 'Pour tout financement via le CPF, un délai minimum obligatoire de 11 jours ouvrés est respecté entre la date d\'envoi de la proposition et la date de début.' },
              ].map(c => (
                <div key={c.ref} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>{c.ref}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.35rem' }}>{c.title}</div>
                    <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#5a5a58', margin: 0 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h2 className="section-h2-light" style={{ marginBottom: '0.4rem' }}>Prêt à passer votre certification ?</h2>
              <p style={{ fontSize: '0.90rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.7 }}>
                Martinique · Guadeloupe · Paris · OnVUE à distance.<br />
                Contactez-nous pour planifier votre examen sous 48h.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Planifier mon examen</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
