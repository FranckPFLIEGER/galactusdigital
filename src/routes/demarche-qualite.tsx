import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BanniereInstruction } from '../components/BanniereInstruction'
import { CheckCircle, AlertCircle } from 'lucide-react'
import {
  RESULTATS_ANNUELS, RESULTATS_ARRETE_AU, RESULTATS_PERIMETRE,
  RESULTATS_TOTAL_FORMES, METHODE_CALCUL, SATISFACTION_GLOBALE,
} from '../data/resultats'

export const Route = createFileRoute('/demarche-qualite')({
  head: () => ({
    meta: [
      { title: 'Notre démarche qualité Qualiopi — GALACTUS Digital' },
      { name: 'description', content: 'GALACTUS Digital est certifié Qualiopi par Certifopac — certificat n° 951711-1, accréditation Cofrac n° 5-0620. Référentiel national qualité V2 (décret n° 2026-728 du 1er août 2026, en vigueur le 1er novembre 2026) : 7 critères, 33 indicateurs, modalités de calcul des résultats publiées, prévention des violences et du harcèlement, ruptures de parcours, évaluation des enseignements. NDA 11 75 59933 75.' },
      { property: 'og:title', content: 'Notre démarche qualité Qualiopi — GALACTUS Digital' },
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
              Notre démarche s'appuie sur le Référentiel National Qualité dans sa version issue du <strong style={{ color: 'rgba(255,255,255,0.90)' }}>décret n° 2026-728 du 1er août 2026</strong>, publié au Journal officiel du 4 août 2026 (NOR TRSD2619632D) et <strong style={{ color: 'rgba(255,255,255,0.90)' }}>applicable au 1er novembre 2026</strong> : 7 critères inchangés, 33 indicateurs.
              Les procédures correspondantes sont formalisées et en vigueur dans notre kit qualité V2026.3.
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
            <p style={{ fontSize: '0.85rem', color: '#5a5a58', marginBottom: '0.75rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              Données arrêtées au {RESULTATS_ARRETE_AU}. {RESULTATS_PERIMETRE}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#4a4a48', marginBottom: '2rem', lineHeight: 1.7 }}>
              Conformément à l'<strong>indicateur 2</strong> du Référentiel National Qualité dans sa
              version applicable au 1<sup>er</sup> novembre 2026, les <strong>modalités de calcul</strong> de
              chacun de ces indicateurs sont publiées en clair{' '}
              <a href="#methode" style={{ color: 'var(--g-red)', fontWeight: 600, textDecoration: 'none' }}>
                plus bas sur cette page
              </a>. Le taux d'obtention propre à chaque certification est publié sur la fiche de la
              formation concernée (<strong>indicateur 3</strong>).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { num: String(RESULTATS_TOTAL_FORMES), label: 'Candidats formés 2023-2025', sub: 'Entrées effectives en formation, toutes certifications IT' },
                { num: '100 %',  label: 'Taux de réussite',    sub: "Parmi les seuls candidats présentés à l'examen" },
                { num: '0 %',    label: "Taux d'abandon",      sub: 'Interruptions définitives après entrée en formation, 2023-2025' },
                { num: SATISFACTION_GLOBALE, label: 'Note de satisfaction', sub: "Moyenne de l'appréciation générale, 2023-2025" },
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
                    {['Année', 'Candidats formés', 'Abandons', 'Annulations', 'Réussite parmi présentés à l\'examen', 'Questionnaires recueillis', 'Note moyenne'].map(h => (
                      <th key={h} style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.75rem 1rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.08)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RESULTATS_ANNUELS.map((r, i) => (
                    <tr key={r.annee} style={{ background: i % 2 === 0 ? '#fff' : 'var(--g-offwhite)', borderBottom: '1px solid rgba(187,187,187,0.2)' }}>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 700, color: 'var(--g-red)', fontFamily: 'var(--font-title)', fontSize: '1rem' }}>{r.annee}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 600 }}>{r.formes}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: 'var(--g-black)', fontWeight: 700 }}>{r.abandons}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: 'var(--g-black)', fontWeight: 700 }}>{r.annulations}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: 'var(--g-red)', fontWeight: 700 }}>{r.reussiteParmiPresentes}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{r.questionnaires ?? '—'}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: r.noteMoyenne ? 700 : 400 }}>{r.noteMoyenne ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.75rem', fontStyle: 'italic', lineHeight: 1.6 }}>
              * Taux de réussite calculé sur les seuls candidats ayant effectivement passé l'examen : il ne doit pas être lu comme un taux d'obtention rapporté aux entrants.
              Abandons et annulations comptabilisés sur les parcours engagés (après entrée effective en formation), hors désistements antérieurs au démarrage. Données consignées au registre de suivi et justifiables sur pièces en audit. La note moyenne d'une année est calculée sur les seuls questionnaires effectivement remis, dont le nombre est publié dans la colonne précédente : 39 questionnaires signés sur l'ensemble de la période, tous dépouillés, chacun consultable en audit. Un tiret signalerait une année dont les questionnaires archivés ne sont pas encore dépouillés : aucune note ne serait alors publiée pour cette année, plutôt qu'un chiffre non justifiable sur pièces.
            </p>
          </div>
        </section>

        {/* ── Modalités de calcul — indicateur 2 RNQ V2 ── */}
        <section id="methode" style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem', borderTop: '3px solid var(--g-red)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Indicateur 2 — transparence des modalités de calcul
            </span>
            <h2 className="section-h2">Comment nos indicateurs sont calculés</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '2rem', maxWidth: '860px' }}>
              Le Référentiel National Qualité applicable au 1<sup>er</sup> novembre 2026 exige que les
              indicateurs de résultats soient adaptés à la nature des prestations et aux publics
              accueillis, et que leurs modalités de calcul soient précisées de façon transparente.
              Chaque chiffre publié sur ce site est défini ci-dessous, avec la pièce qui le justifie
              en audit. Aucun indicateur n'est extrapolé, arrondi à l'avantage de l'organisme, ni
              reporté d'un périmètre à un autre.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {METHODE_CALCUL.map(m => (
                <div key={m.libelle} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.35)', borderLeft: '4px solid var(--g-red)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--g-black)', marginBottom: '0.6rem' }}>
                    {m.libelle}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#4a4a48', lineHeight: 1.75, margin: '0 0 0.75rem' }}>{m.formule}</p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.78rem', color: '#888', lineHeight: 1.6 }}>
                    <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.55rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                      Pièce justificative
                    </span>
                    <span>{m.source}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem 1.5rem', background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.18)', marginTop: '1.5rem' }}>
              <AlertCircle size={18} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.84rem', color: '#4a4a48', margin: 0, lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--g-red)' }}>Ce que nous ne publions pas — </strong>
                aucun taux d'insertion professionnelle n'est diffusé : l'organisme ne dispose pas de
                données de suivi dans l'emploi consolidées et vérifiables. Aucun taux d'obtention
                n'est publié pour une certification dont aucune session certifiante n'a été clôturée :
                la fiche de la formation l'indique explicitement plutôt que de reprendre le taux
                global. Publier un chiffre non justifiable constituerait une communication
                susceptible d'induire le public en erreur, interdite par l'indicateur 1.
              </p>
            </div>
          </div>
        </section>

        {/* 7 critères */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Notre démarche s'appuie sur les 7 critères Qualiopi</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.25rem' }}>
              {[
                { num: '01', title: 'Information du public', desc: "Diffusion d'informations accessibles, détaillées et vérifiables : prérequis, objectifs, durée, modalités pédagogiques, tarifs, délais d'accès, accessibilité aux personnes en situation de handicap, modes de financement et résultats. Pour chaque action certifiante : taux d'obtention, validation par blocs, équivalences, passerelles, suites de parcours et débouchés, publiés sur la fiche de la formation. Aucune communication susceptible d'induire le public en erreur." },
                { num: '02', title: 'Identification des objectifs & adaptation', desc: "Objectifs définis sous forme de verbes d'action dans le plan de formation. Analyse des besoins via questionnaire d'évaluation des attentes. Prise en compte des situations de handicap signalées, dès l'entretien préalable." },
                { num: '03', title: 'Adaptation aux publics bénéficiaires', desc: "Convocation avec règlement intérieur. Évaluation des acquis par ateliers pratiques et QCM (seuil 70 %). Procédure de prévention et traitement des ruptures de parcours (FQ-15). Procédure de prévention des violences, harcèlement et discriminations (FQ-14), communiquée dès la convocation." },
                { num: '04', title: 'Adéquation des moyens', desc: "Formateur certifié Cisco, instructeur Cisco Networking Academy depuis 15 ans — CCNP, CCDP. Référent pédagogique désigné : Franck PFLIEGER (indicateur 19). Plateforme Cisco Networking Academy officielle pour l'e-learning tutoré, maquette Junos à distance pour la FOAD Juniper, WEBEX pour le tutorat. Effectivité du suivi tracée pour chaque apprenant à distance par trois pièces : relevé de progression de la plateforme, historique des sessions Webex et compte rendu des points d'étape. En présentiel, la formation se tient dans vos locaux ou en salle retenue pour la session ; son accessibilité est vérifiée avant le démarrage avec le référent handicap." },
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
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Conformité réglementaire</span>
            <h2 className="section-h2">Référentiel National Qualité V2 — applicable au 1<sup>er</sup> novembre 2026</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem', maxWidth: '860px' }}>
              Le décret n° 2026-728 du 1<sup>er</sup> août 2026, publié au Journal officiel du 4 août 2026
              (NOR TRSD2619632D), porte le Référentiel National Qualité à 33 indicateurs répartis sur
              les 7 critères, inchangés. Il s'applique aux audits initiaux à compter du
              1<sup>er</sup> novembre 2026, puis aux audits de surveillance au début de l'année 2027 et aux
              audits de renouvellement à partir de l'été 2027. Le certificat n° 951711-1 de
              GALACTUS Digital, valable jusqu'au 15 septembre 2027, reste en vigueur : la mise à
              jour est vérifiée lors de notre prochain audit de surveillance.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '2rem', maxWidth: '860px' }}>
              Les procédures correspondantes ont été formalisées dès juillet 2026 et sont aujourd'hui
              en vigueur dans le kit qualité V2026.3. Les deux arrêtés d'application et le nouveau
              guide de lecture restent attendus ; les modalités qu'ils préciseront — notamment les
              seuils applicables à la formation à distance — seront intégrées dès leur parution.
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
                  desc: "Questionnaire dédié à la qualité pédagogique (contenus, méthodes, évaluation des acquis), distinct de l'enquête de satisfaction générale (FQ-08a), exploité en revue d'amélioration continue. Le nouvel indicateur 33 ne vise que la catégorie apprentissage (CFA) : GALACTUS Digital n'est pas concerné et met ce dispositif en œuvre volontairement.",
                  icon: '📋',
                },
                {
                  ref: 'Ind. 18 · 19 · 26',
                  title: 'Référent pédagogique et suivi à distance',
                  desc: "Référent pédagogique désigné : Franck PFLIEGER, président — president@galactusdigital.com — 07 81 07 47 46. Il coordonne les actions et répond sous deux jours ouvrés pendant toute la durée d'ouverture des accès. L'effectivité du suivi des modules à distance ne repose pas sur la seule connexion : elle est établie par apprenant et par module par le relevé de progression de la plateforme éditeur, l'historique des sessions de tutorat Webex et le compte rendu écrit de chaque point d'étape. Article 13 bis des CGV, registre des référents de l'organisme — désignation du 6 janvier 2026. La fonction se démontre aux indicateurs 18 et 26 du référentiel en vigueur et devient un attendu exprès de l'indicateur 19 au 1er novembre 2026. Le guide de lecture admet qu'un prestataire indépendant assure seul ces fonctions ; le seuil d'intervenants imposant la désignation reste fixé par arrêté à paraître, et l'organisme désigne son référent par anticipation.",
                  icon: '🎓',
                },
                {
                  ref: 'Ind. 1 · 2 · 3',
                  title: 'Information du public renforcée',
                  desc: "Modalités de calcul des indicateurs publiées en clair, taux d'obtention, validation par blocs, équivalences, passerelles, suites de parcours et débouchés publiés sur chaque fiche formation, mention explicite de la non-éligibilité au CPF. Article 12 bis des CGV.",
                  icon: '📣',
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
                <strong style={{ color: 'var(--g-red)' }}>Statut :</strong> procédures en vigueur, intégrées au kit qualité V2026.3 (mise à jour du 8 août 2026),
                figées après parution du décret au Journal officiel du 4 août 2026. Les seuils applicables à la formation à distance restent soumis aux arrêtés d'application et au guide de lecture à paraître.
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
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Le référentiel applicable au 1<sup>er</sup> novembre 2026 ajoute à cet indicateur une
                  <strong> analyse des risques qualité</strong>. Elle est tenue sous forme de cartographie
                  datée et revue au moins une fois par an : pour chaque risque identifié — rupture de parcours,
                  indisponibilité de l'intervenant unique, perte d'accès à une plateforme éditeur, évolution
                  d'un blueprint de certification, défaut de traçabilité du suivi à distance — sont consignés
                  sa criticité, la mesure de maîtrise en place et la preuve associée.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Cartographie des risques qualité, datée et revue annuellement',
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
                    'Décret n° 2026-728 du 1er août 2026 (JO du 4 août 2026, NOR TRSD2619632D) — RNQ à 33 indicateurs, applicable au 1er novembre 2026',
                    'Guide de lecture Qualiopi V9 du 8 janvier 2024 — applicable jusqu\'au 31 octobre 2026',
                    'Nouveau guide de lecture et arrêtés d\'application du RNQ V2 — à paraître',
                    'Article L. 6113-1 du Code du travail (blocs de compétences)',
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

        {/* ── Message aux instructeurs et auditeurs France Compétences ── */}
        <BanniereInstruction />

      </main>
      <Footer />
    </>
  )
}
