import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Award, CheckCircle, ExternalLink, Phone, Mail, Shield, TrendingUp, Users } from 'lucide-react'

export const Route = createFileRoute('/certifications')({
  component: CertificationsPage,
})

const certifEditeurs = [
  {
    editeur: 'Cisco',
    logo: 'CI',
    partenariat: 'Cisco Networking Academy Partner n° 3018982',
    organisme: 'Pearson VUE',
    certifications: [
      { nom: 'CCNA Routing & Switching', code: '200-301', niveau: 'Associate' },
      { nom: 'CCNP Enterprise', code: '350-401 ENCOR', niveau: 'Professional' },
      { nom: 'CyberOps Associate', code: '200-201 CBROPS', niveau: 'Associate' },
      { nom: 'DevNet Associate', code: '200-901 DEVASC', niveau: 'Associate' },
    ],
  },
  {
    editeur: 'Microsoft',
    logo: 'MS',
    partenariat: 'Microsoft Silver Partner',
    organisme: 'Pearson VUE',
    certifications: [
      { nom: 'Microsoft Azure Fundamentals', code: 'AZ-900', niveau: 'Fundamentals' },
      { nom: 'Microsoft Azure Administrator', code: 'AZ-104', niveau: 'Associate' },
      { nom: 'Microsoft 365 Fundamentals', code: 'MS-900', niveau: 'Fundamentals' },
      { nom: 'Microsoft Security Fundamentals', code: 'SC-900', niveau: 'Fundamentals' },
    ],
  },
  {
    editeur: 'CompTIA',
    logo: 'CT',
    partenariat: 'Partenaire officiel',
    organisme: 'Pearson VUE / CompTIA',
    certifications: [
      { nom: 'CompTIA A+', code: 'Core 1 & Core 2', niveau: 'Foundational' },
      { nom: 'CompTIA Network+', code: 'N10-009', niveau: 'Core' },
      { nom: 'CompTIA Security+', code: 'SY0-701', niveau: 'Core' },
      { nom: 'CompTIA CySA+', code: 'CS0-003', niveau: 'Professional' },
    ],
  },
  {
    editeur: 'IPv6 Forum',
    logo: 'IP',
    partenariat: 'Membre IPv6 Council Martinique — ASPIK',
    organisme: 'IPv6 Forum',
    certifications: [
      { nom: 'IPv6 Certified Network Engineer', code: 'Gold', niveau: 'Engineer' },
      { nom: 'IPv6 Certified Security Engineer', code: 'Security', niveau: 'Engineer' },
      { nom: 'IPv6 Fundamentals', code: 'Silver', niveau: 'Fundamentals' },
    ],
  },
  {
    editeur: 'EC-Council',
    logo: 'EC',
    partenariat: 'Partenaire officiel',
    organisme: 'EC-Council',
    certifications: [
      { nom: 'Certified Ethical Hacker', code: 'CEH v13', niveau: 'Professional' },
      { nom: 'Certified Security Analyst', code: 'ECSA', niveau: 'Professional' },
      { nom: 'Computer Hacking Forensic Investigator', code: 'CHFI', niveau: 'Professional' },
    ],
  },
  {
    editeur: 'PMI',
    logo: 'PM',
    partenariat: 'Partenaire officiel',
    organisme: 'PMI',
    certifications: [
      { nom: 'Project Management Professional', code: 'PMP', niveau: 'Professional' },
      { nom: 'Certified Associate in PM', code: 'CAPM', niveau: 'Associate' },
      { nom: 'PMI Agile Certified Practitioner', code: 'PMI-ACP', niveau: 'Professional' },
    ],
  },
]

function CertificationsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Certifications
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Vous souhaitez<br />passer une certification ?
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '780px', lineHeight: 1.8 }}>
              GALACTUS Digital collabore avec l'ensemble des organismes certificateurs IT
              pour proposer à ses apprenants la certification correspondant à leurs besoins —
              dans les territoires ultramarins et en France hexagonale.
            </p>
          </div>
        </section>

        {/* Pourquoi certifier */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Pourquoi passer une certification informatique ?</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem' }}>

              {/* Pour les entreprises */}
              <div style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Users size={22} color="white" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', margin: 0 }}>
                    Pour les entreprises
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#5a5a58', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Service Formation, RH, DSI — vos collaborateurs peuvent passer un examen de certification
                  après leur formation. Vous pouvez ainsi :
                </p>
                {[
                  'Évaluer leur niveau de compétences et d\'expertise',
                  'Accélérer les évolutions de carrière de vos collaborateurs',
                  'Augmenter l\'efficacité et l\'employabilité des équipes',
                  'Optimiser votre budget via le CPF et les OPCO',
                  'Valoriser le capital humain de votre organisation',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48', marginBottom: '0.5rem' }}>
                    <CheckCircle size={15} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Pour les individus */}
              <div style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <TrendingUp size={22} color="white" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', margin: 0 }}>
                    Pour les individus
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#5a5a58', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  En recherche d'emploi, salarié, travailleur indépendant, en reconversion —
                  passer une certification après votre formation vous permet de :
                </p>
                {[
                  'Officialiser vos compétences auprès des employeurs',
                  'Affirmer votre expertise dans un domaine reconnu mondialement',
                  'Développer votre employabilité dans les territoires ultramarins et au-delà',
                  'Valoriser et sécuriser votre parcours professionnel',
                  'Financer via le CPF tout ou partie de votre formation',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87nm', color: '#4a4a48', marginBottom: '0.5rem' }}>
                    <CheckCircle size={15} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Note légale importante */}
        <section style={{ background: 'var(--g-offwhite)', padding: '2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.4)', borderLeft: '4px solid var(--g-red)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Shield size={22} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.80rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-black)', marginBottom: '0.4rem' }}>
                  Information importante — Certifications éditeurs
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>
                  Les certifications proposées par GALACTUS Digital sont des <strong>certifications officielles éditeurs</strong> (Cisco, Microsoft, CompTIA, IPv6 Forum, EC-Council, PMI).
                  Elles sont reconnues mondialement par les professionnels du secteur IT.
                  Elles ne constituent pas des certifications RNCP ou RS enregistrées au Répertoire National des Certifications Professionnelles et ne sont donc pas qualifiées de "certifications reconnues par l'État" au sens de la réglementation française.
                  Conformément au Décret n°2025-500 du 6 juin 2025, les intitulés exacts des certifications sont indiqués ci-dessous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications par éditeur */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Nos certifications par éditeur</h2>
            <div className="g-rule" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              {certifEditeurs.map(e => (
                <div key={e.editeur} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                  {/* Header éditeur */}
                  <div style={{ background: 'rgba(228,31,38,0.10)', borderBottom: '1px solid rgba(228,31,38,0.20)', padding: '1.25rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '0.90rem', color: '#fff', letterSpacing: '0.06em', flexShrink: 0 }}>{e.logo}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>{e.editeur}</div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.50)', marginTop: '0.2rem' }}>{e.partenariat}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
                      <Award size={14} color="rgba(228,31,38,0.70)" />
                      Organisme certificateur : <strong style={{ color: 'rgba(255,255,255,0.70)' }}>{e.organisme}</strong>
                    </div>
                  </div>
                  {/* Liste certifications */}
                  <div style={{ padding: '1.25rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.75rem' }}>
                    {e.certifications.map(c => (
                      <div key={c.code} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', background: 'rgba(228,31,38,0.30)', padding: '0.15rem 0.5rem', flexShrink: 0, whiteSpace: 'nowrap' }}>{c.code}</div>
                        <div>
                          <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.80)', fontWeight: 600 }}>{c.nom}</div>
                          <div style={{ fontSize: '0.70rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.15rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{c.niveau}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modalités passage */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Modalités de passage des examens</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  titre: 'Pearson VUE',
                  sous: 'Cisco, Microsoft, CompTIA…',
                  etapes: [
                    'Inscription en ligne sur le site Pearson VUE ou via GALACTUS Digital',
                    'Pièce d\'identité valide obligatoire (nom identique à l\'inscription)',
                    'Examen en centre agréé : arriver 15 min avant, pièces d\'identité, enregistrement',
                    'Examen en ligne (OnVUE) : test système préalable, espace calme et dégagé, surveillance webcam',
                    'Résultats immédiats à l\'écran, certificat numérique sous quelques jours',
                  ],
                },
                {
                  titre: 'EC-Council',
                  sous: 'CEH, ECSA, CHFI…',
                  etapes: [
                    'Inscription via le portail EC-Council ou par GALACTUS Digital',
                    'Examen disponible en ligne avec surveillance (ProctorU) ou en centre',
                    'QCM de 125 questions — durée 4 heures',
                    'Score minimum requis : 70% selon la certification',
                    'Certificat numérique officiel EC-Council en cas de réussite',
                  ],
                },
                {
                  titre: 'PMI',
                  sous: 'PMP, CAPM, PMI-ACP…',
                  etapes: [
                    'Éligibilité à vérifier : heures d\'expérience en gestion de projet requises',
                    'Candidature en ligne sur pmi.org — délai de validation 5 à 10 jours',
                    'Examen en centre Pearson VUE ou en ligne avec surveillance',
                    'PMP : 180 questions — durée 4 heures',
                    'Certification valable 3 ans — renouvellement par PDUs',
                  ],
                },
              ].map(m => (
                <div key={m.titre} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.3rem' }}>{m.titre}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--g-red)', fontFamily: 'var(--font-title)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>{m.sous}</div>
                  {m.etapes.map((e, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.84rem', color: '#4a4a48', marginBottom: '0.6rem', lineHeight: 1.6 }}>
                      <div style={{ width: '18px', height: '18px', background: 'var(--g-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.60rem', color: '#fff', fontWeight: 700, marginTop: '1px' }}>{i + 1}</div>
                      {e}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Prêt à vous certifier ?</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour connaître les prochaines sessions disponibles dans votre territoire
              et recevoir toutes les informations sur la certification souhaitée.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/calendrier" className="btn-red"><Award size={16} /> Voir le calendrier</a>
              <a href="mailto:president@galactusdigital.com" className="btn-ghost"><Mail size={16} /> Nous contacter</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
