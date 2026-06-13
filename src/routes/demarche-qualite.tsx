import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/demarche-qualite')({
  head: () => ({
    meta: [
      { title: 'Notre demarche qualite Qualiopi — GALACTUS Digital' },
      { name: 'description', content: 'GALACTUS Digital certifie Qualiopi ICPF n 5-0616. 7 criteres, indicateurs de resultats, satisfaction apprenants. NDA 11 75 59933 75.' },
      { property: 'og:title', content: 'Notre demarche qualite Qualiopi — GALACTUS Digital' },
      { property: 'og:url', content: 'https://galactusdigital.com/demarche-qualite' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/demarche-qualite' }],
  }),
  component: DemarcheQualitePage,
})

function DemarcheQualitePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Qui Sommes-Nous</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Notre démarche qualité
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              GALACTUS Digital est certifié Qualiopi par ICPF (accréditation n° 5-0616) pour les actions de formation.
              Notre démarche s'appuie sur les 7 critères et 32 indicateurs du Référentiel National Qualité.
            </p>
            <p style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.40)', fontStyle: 'italic', maxWidth: '680px', lineHeight: 1.7 }}>
              Note importante : la présence de ces éléments sur notre site améliore la visibilité publique de notre démarche qualité.
              La conformité Qualiopi se vérifie en audit documentaire complet — elle ne saurait être attestée uniquement par un site web.
            </p>
          </div>
        </section>

        {/* Indicateurs de résultats */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Indicateurs de résultats</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.85rem', color: '#5a5a58', marginBottom: '2rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              Données mises à jour au 31 mai 2026 — Périmètre : actions de formation certifiantes IT
              (Cisco NetAcad, Microsoft Azure/M365, IPv6 Forum) —
              NDA : 11 75 59933 75 — SIRET : 880 430 418 00017
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { num: '518',   label: 'Candidats formés 2023-2025',    sub: 'Périmètre : toutes certifications IT' },
                { num: '100%',  label: 'Taux de réussite',              sub: "Parmi les candidats présentés à l'examen" },
                { num: '0',     label: 'Abandon / Annulation',          sub: "Sur l'ensemble des parcours 2023-2025" },
                { num: '4,8/5', label: 'Note de satisfaction',          sub: 'Moyenne des évaluations apprenants 2024' },
              ].map(s => (
                <div key={s.label} style={{ background: 'var(--g-black)', borderTop: '3px solid var(--g-red)', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.num}</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.35rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.70rem', color: 'rgba(255,255,255,0.40)', lineHeight: 1.4 }}>{s.sub}</div>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>
              Détail par année
            </h3>
            <div style={{ border: '1px solid rgba(187,187,187,0.4)', overflow: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', minWidth: '700px' }}>
                <thead>
                  <tr style={{ background: 'var(--g-black)', color: '#fff' }}>
                    {['Année', 'Candidats formés', 'Abandons', 'Annulations', 'Réussite parmi présentés', 'Note formation', 'Note formateur', 'Note impact travail'].map(h => (
                      <th key={h} style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.75rem 1rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: '2023', n: 115, ab: 0, an: 0, s: '100%', f: '4,8/5', fo: '5/5', i: '4,8/5' },
                    { year: '2024', n: 272, ab: 0, an: 0, s: '100%', f: '4,8/5', fo: '5/5', i: '4,8/5' },
                    { year: '2025', n: 131, ab: 0, an: 0, s: '100%', f: 'En cours', fo: 'En cours', i: 'En cours' },
                  ].map((r, i) => (
                    <tr key={r.year} style={{ background: i % 2 === 0 ? '#fff' : 'var(--g-offwhite)', borderBottom: '1px solid rgba(187,187,187,0.2)' }}>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 700, color: 'var(--g-red)', fontFamily: 'var(--font-title)', fontSize: '1rem' }}>{r.year}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 600 }}>{r.n}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#16a34a', fontWeight: 700 }}>{r.ab}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#16a34a', fontWeight: 700 }}>{r.an}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: 'var(--g-red)', fontWeight: 700 }}>{r.s}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{r.f}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{r.fo}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{r.i}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.75rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              * Taux calculé sur les candidats ayant effectivement passé l'examen. Source : attestations de réussite éditeurs (Cisco NetAcad, Microsoft, IPv6 Forum).
            </p>
          </div>
        </section>

        {/* 7 critères */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Notre démarche s'appuie sur les 7 critères Qualiopi</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
              {[
                { num: '01', title: 'Information du public', desc: "Diffusion d'informations accessibles, détaillées et vérifiables : prérequis, objectifs, durée, modalités, résultats. Courriel de proposition avec certificat Qualiopi, devis, convention et plan de formation." },
                { num: '02', title: 'Identification des objectifs & adaptation', desc: "Objectifs définis sous forme de verbes d'action dans le plan de formation. Analyse des besoins via questionnaire d'évaluation des attentes. Prise en compte des situations PSH." },
                { num: '03', title: 'Adaptation aux publics bénéficiaires', desc: "Convocation avec règlement intérieur. Évaluation des acquis par ateliers pratiques et QCM (seuil 70%). Mesures de prévention des ruptures de parcours formalisées dans les CGV." },
                { num: '04', title: 'Adéquation des moyens', desc: "Formateur certifié Cisco instructeur depuis plus de 15 ans — CCNP, CCDP. Plateforme NetAcad officielle. WEBEX pour la FOAD. Salles adaptées en présentiel." },
                { num: '05', title: 'Qualification des personnels', desc: "Certifications CCNP et CCDP Cisco. Programme IPD Cisco NetAcad. Vérification annuelle des compétences. Inscription à la communauté des formateurs Cisco NetAcad." },
                { num: '06', title: "Inscription dans l'environnement professionnel", desc: "Veille réglementaire (CARIF, Centre Inffo, AFDAS, AKTO, Service public). Veille métier (APEC, LinkedIn Cisco). Partenaire Cisco n° 3018982. Partenaire Microsoft n° 4653557. Membre IPv6 Forum. Association ASPIK." },
                { num: '07', title: 'Recueil et traitement des appréciations', desc: "Évaluation apprenants et hiérarchie en fin de formation. Sollicitation à froid 2 mois après. Tableau de suivi : points forts, axes d'amélioration, réclamations, actions correctives." },
              ].map(c => (
                <div key={c.num} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, flexShrink: 0 }}>{c.num}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.5rem' }}>{c.title}</div>
                    <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amélioration continue */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Amélioration continue — Indicateur 32</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  À chaque fin de prestation, GALACTUS Digital analyse les résultats pour identifier les points forts
                  à maintenir et les axes d'amélioration. Cette démarche est documentée et tracée via un tableau
                  de suivi par apprenant.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Tableau de suivi par apprenant (points forts, points à améliorer)',
                    'Analyse des appréciations apprenants et hiérarchie',
                    'Cartouche de versioning sur tous les documents',
                    'Mise à jour des procédures selon les évolutions réglementaires',
                    'Newsletters CARIF, Centre Inffo, AFDAS, Service public',
                    'Webinaires Cisco NetAcad IPD',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '1.25rem' }}>
                  Références réglementaires
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Décret n° 2019-564 du 6 juin 2019',
                    'Décret n° 2019-565 du 6 juin 2019',
                    'Décret n° 2020-894 du 22 juillet 2020',
                    'Arrêté du 31 mai 2023',
                    'Guide de lecture Qualiopi V9 — 8 janvier 2024',
                    'Article D. 6313-3-1 du Code du travail (FOAD)',
                    'Circulaire DGEFP n° MOC/2026/30 du 17 février 2026',
                  ].map((ref, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.60)' }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                      {ref}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
