import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle, AlertCircle } from 'lucide-react'

export const Route = createFileRoute('/demarche-qualite')({
  head: () => ({
    meta: [
      { title: 'Notre demarche qualite Qualiopi — GALACTUS Digital' },
      { name: 'description', content: 'GALACTUS Digital certifie Qualiopi Certifopac n 5-0620. 7 criteres, indicateurs de resultats, satisfaction apprenants. Anticipation RNQ V2 2026 : procedures VHD, ruptures, evaluation des enseignements. NDA 11 75 59933 75.' },
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
              GALACTUS Digital est certifié Qualiopi par Certifopac (accréditation Cofrac n° 5-0620, certificat n° 951711-1) pour les actions de formation.
              Notre démarche s'appuie sur les 7 critères et 32 indicateurs du Référentiel National Qualité. En anticipation du projet de décret portant le référentiel à 33 indicateurs (RNQ V2, entrée en vigueur prévue le 1er novembre 2026), nous avons d'ores et déjà formalisé les nouvelles procédures exigées.
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
              (Cisco Networking Academy, Microsoft Azure/M365, IPv6 Forum) —
              NDA : 11 75 59933 75 — SIRET : 880 430 418 00017
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
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
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: 'var(--g-black)', fontWeight: 700 }}>{r.ab}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: 'var(--g-black)', fontWeight: 700 }}>{r.an}</td>
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
              * Taux calculé sur les candidats ayant effectivement passé l'examen. Source : attestations de réussite éditeurs (Cisco Networking Academy, Microsoft, IPv6 Forum).
            </p>
          </div>
        </section>

        {/* 7 critères */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Notre démarche s'appuie sur les 7 critères Qualiopi</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.25rem' }}>
              {[
                { num: '01', title: 'Information du public', desc: "Diffusion d'informations accessibles, détaillées et vérifiables : prérequis, objectifs, durée, modalités, résultats. Courriel de proposition avec certificat Qualiopi, devis, convention et plan de formation." },
                { num: '02', title: 'Identification des objectifs & adaptation', desc: "Objectifs définis sous forme de verbes d'action dans le plan de formation. Analyse des besoins via questionnaire d'évaluation des attentes. Prise en compte des situations PSH." },
                { num: '03', title: 'Adaptation aux publics bénéficiaires', desc: "Convocation avec règlement intérieur. Évaluation des acquis par ateliers pratiques et QCM (seuil 70%). Procédure de prévention et traitement des ruptures de parcours (FQ-15). Procédure de prévention des violences, harcèlement et discriminations (FQ-14), communiquée dès la convocation." },
                { num: '04', title: 'Adéquation des moyens', desc: "Formateur certifié Cisco instructeur depuis plus de 15 ans — CCNP, CCDP. Plateforme NetAcad officielle. WEBEX pour la FOAD avec traçabilité de l'effectivité du suivi pédagogique (gradebook, historique sessions). Salles adaptées en présentiel." },
                { num: '05', title: 'Qualification des personnels', desc: "Certifications CCNP et CCDP Cisco. Programme IPD Cisco Networking Academy. Vérification annuelle des compétences. Inscription à la communauté des formateurs Cisco Networking Academy." },
                { num: '06', title: "Inscription dans l'environnement professionnel", desc: "Veille réglementaire (CARIF, Centre Inffo, AFDAS, AKTO, Service public). Veille métier (APEC, LinkedIn Cisco). Partenaire Cisco n° 3018982. Partenaire Microsoft n° 4653557. Membre IPv6 Forum. Association ASPIK." },
                { num: '07', title: 'Recueil et traitement des appréciations', desc: "Évaluation apprenants et hiérarchie en fin de formation. Évaluation des enseignements (FQ-08c) distincte de l'enquête de satisfaction. Sollicitation à froid 2 mois après. Tableau de suivi : points forts, axes d'amélioration, réclamations, actions correctives." },
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

        {/* Anticipation RNQ V2 */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem', borderTop: '3px solid var(--g-red)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Anticipation réglementaire</span>
            <h2 className="section-h2">Préparation au Référentiel National Qualité V2</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '2rem', maxWidth: '800px' }}>
              Un projet de décret prévoit la modification du référentiel national qualité pour une entrée en vigueur
              au 1er novembre 2026. GALACTUS Digital a d'ores et déjà formalisé les nouvelles procédures
              exigées, afin d'être opérationnel avant l'échéance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {[
                {
                  ref: 'FQ-14',
                  title: 'Violences, harcèlement, discriminations',
                  desc: "Procédure complète de prévention, signalement et traitement. Intégrée au règlement intérieur (art. 10 bis), aux CGV (art. 6 ter) et à la convocation. Registre de suivi dédié.",
                  icon: '🛡️',
                },
                {
                  ref: 'FQ-15',
                  title: 'Ruptures de parcours',
                  desc: "Dispositif de détection (J+0), entretien (J+1), plan d'action (J+3) et formalisation (J+5). Intégré aux CGV (art. 6 bis) et à la convention (art. 4 ter).",
                  icon: '🔗',
                },
                {
                  ref: 'FQ-08c',
                  title: 'Évaluation des enseignements',
                  desc: "Questionnaire dédié à la qualité pédagogique (contenus, méthodes, évaluation des acquis), distinct de l'enquête de satisfaction générale (FQ-08a). Nouvel indicateur 33.",
                  icon: '📋',
                },
              ].map(p => (
                <div key={p.ref} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-1px', left: 0, right: 0, height: '3px', background: 'var(--g-red)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-red)' }}>{p.ref}</div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)' }}>{p.title}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: '#5a5a58', margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.15)' }}>
              <AlertCircle size={18} color="#E41F26" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.82rem', color: '#4a4a48', margin: 0, lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--g-red)' }}>Statut :</strong> procédures formalisées et intégrées à notre kit qualité V2026.2.
                Elles seront figées en version définitive à la parution du décret au Journal officiel. Les seuils FOAD restent soumis à un arrêté d'application à venir.
              </p>
            </div>
          </div>
        </section>

        {/* Amélioration continue */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Amélioration continue — Indicateur 32</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem' }}>
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
                    'Webinaires Cisco Networking Academy IPD',
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
                    'Projet de décret RNQ V2 — passage de 32 à 33 indicateurs (entrée en vigueur prévue 1er nov. 2026)',
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
