import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/financements')({
  head: () => ({
    meta: [
      { title: 'Guide du financement des formations — GALACTUS Digital' },
      { name: 'description', content: "Financer une formation GALACTUS Digital : OPCO, plan de développement des compétences, France Travail AIF via Kairos, dispositifs régionaux et FSE+ des territoires ultramarins. Formations non éligibles au CPF." },
      { property: 'og:title', content: 'Guide du financement des formations — GALACTUS Digital' },
      { property: 'og:url', content: 'https://galactusdigital.com/financements' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/financements' }],
  }),
  component: FinancementsPage,
})


function FinancementsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Financements</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Guide du financement<br />de vos formations
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Plusieurs dispositifs permettent de financer vos formations GALACTUS Digital. Nos formations sont exonérées de TVA (article 261-4-4° du CGI). Nous vous accompagnons dans vos démarches.
            </p>
            <div style={{ marginTop: '1.5rem', maxWidth: '760px', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.30)', borderLeft: '4px solid var(--g-red)', padding: '1.1rem 1.4rem' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.5rem' }}>
                À savoir avant toute démarche
              </div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.72)', margin: 0, lineHeight: 1.75 }}>
                Nos formations <strong style={{ color: '#fff' }}>ne sont pas éligibles au compte personnel de formation (CPF)</strong> :
                GALACTUS Digital ne détient aucune habilitation de certificateur lui permettant de
                délivrer les certifications préparées au titre d'un enregistrement au RNCP ou au
                Répertoire spécifique de France Compétences. Aucune offre GALACTUS Digital n'est publiée
                sur Mon Compte Formation. Les dispositifs mobilisables sont ceux listés ci-dessous.
                Cette information est publiée au titre du critère 1 du Référentiel National Qualité
                (décret n° 2026-728 du 1er août 2026) et de l'article 12 bis de nos CGV.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Dispositifs de financement</h2>
            <div className="g-rule" />

            {/* BANNIÈRE PÉRIMÈTRE — se lit avant les dispositifs, pas après.
                C'était une carte parmi les autres : un lecteur pouvait monter
                un dossier entier avant de découvrir qu'il n'entre pas dans le
                périmètre. Remontée en bandeau, la règle est lue d'abord. */}
            <div style={{ marginTop: '2rem', background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '1.75rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>
                  Périmètre et reste à charge
                </span>
                <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.65rem' }}>
                  À lire avant toute demande
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '0.75rem 2rem' }}>
                {[
                  "Vous êtes un particulier ? Votre place est ici dès lors que votre formation est prise en charge — France Travail, employeur, OPCO ou collectivité. Nous montons le dossier avec vous.",
                  "Nous ne vendons pas de formation à un particulier sur ses fonds propres : nos tarifs ne constituent pas une offre de vente au consommateur (article 2 des CGV).",
                  "Lorsque la prise en charge est partielle, le solde est réglé par l'employeur ou un financeur complémentaire.",
                  "Aucun tarif du catalogue ne dépasse 1 950 €. TVA non applicable — article 261-4-4°-a du CGI.",
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7 }}>
                    <CheckCircle size={14} color="#E41F26" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <a href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.25rem', fontFamily: 'var(--font-title)', fontSize: '0.75rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-red)', textDecoration: 'none' }}>
                <ArrowRight size={14} /> Faire une demande
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'OPCO — Opérateurs de Compétences',
                  tag: 'Entreprises',
                  items: [
                    'Prise en charge partielle ou totale selon votre branche',
                    'Organisme inscrit au catalogue de référence des prestataires AFDAS et AKTO (art. R.6316-2)',
                    "L'accord de financement doit être communiqué avant le démarrage",
                    'En cas de prise en charge partielle, le reste est facturé au client',
                  ],
                  cta: 'Faire une demande',
                  href: '/#contact',
                },
                {
                  title: 'Plan de Développement des Compétences',
                  tag: 'Entreprises',
                  items: [
                    "Financé directement par l'employeur",
                    "Intégré dans le plan de formation annuel de l'entreprise",
                    'Déductible des obligations de participation à la formation',
                    'Convention de formation établie par GALACTUS Digital',
                  ],
                  cta: 'Faire une demande',
                  href: '/#contact',
                },
                {
                  title: 'France Travail',
                  tag: "Demandeurs d'emploi",
                  items: [
                    'AIF — Aide Individuelle à la Formation, instruite via Kairos',
                    'Dossier à constituer avec votre conseiller France Travail',
                    'GALACTUS Digital est référencé sur Kairos et établit le devis à joindre à votre demande',
                    // L'organisme ne promet aucune prise en charge : la décision
                    // d'attribution d'une AIF appartient au conseiller France Travail,
                    // formation par formation. Annoncer que « tout le catalogue reste
                    // dans le périmètre d'une AIF » revenait à engager un financeur
                    // tiers sur une décision qui n'appartient pas à l'organisme
                    // (indicateur 1 du RNQ V2 : information exacte sur l'offre et
                    // ses conditions de financement). Retiré le 29 octobre 2026.
                    'La décision d\'attribution appartient à votre conseiller France Travail : l\'organisme de formation ne la préjuge pas',
                    'Si l\'aide est accordée, elle est versée à l\'organisme sur facture déposée dans Chorus, au prorata des heures réalisées',
                  ],
                  cta: 'Faire une demande',
                  href: '/#contact',
                },
                {
                  title: 'Financement Régional & DOM',
                  tag: 'Territoires ultramarins',
                  items: [
                    'Dispositifs spécifiques aux Antilles, Guyane et La Réunion, y compris FSE+',
                    'Financement AGEFIPH pour les personnes en situation de handicap',
                    'Dispositifs régionaux selon votre territoire',
                    'GALACTUS Digital vous oriente vers les bons interlocuteurs',
                  ],
                  cta: 'Faire une demande',
                  href: '/#contact',
                },
              ].map(f => (
                <div key={f.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', margin: 0 }}>{f.title}</h3>
                    <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.65rem', whiteSpace: 'nowrap' }}>{f.tag}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {f.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: '#4a4a48' }}>
                        <CheckCircle size={14} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={f.href}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-title)', fontSize: '0.75rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-red)', textDecoration: 'none' }}>
                    <ArrowRight size={14} /> {f.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pour les prescripteurs et financeurs ──
            Un conseiller France Travail, un gestionnaire OPCO ou un service
            formation cherche d'abord des identifiants et des pièces. Les avoir
            sur la page du financement lui évite de parcourir le site. */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem', borderTop: '3px solid var(--g-red)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Prescripteurs et financeurs
            </span>
            <h2 className="section-h2">Monter un dossier avec nous</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', margin: '1.5rem 0 2.5rem', maxWidth: '760px' }}>
              Conseiller France Travail, gestionnaire OPCO ou service formation : voici les
              références de l'organisme et les pièces dont vous avez besoin pour instruire une
              prise en charge.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>
                  Références de l'organisme
                </h3>
                {[
                  ['Raison sociale', 'PFLIEGER SASU — enseigne GALACTUS Digital'],
                  ['SIRET', '880 430 418 00017'],
                  ['Déclaration d\'activité', '11 75 59933 75 (préfet d\'Île-de-France)'],
                  ['Qualiopi', 'Certifopac n° 951711-1 — valide jusqu\'au 15/09/2027'],
                  ['Catalogue AFDAS', 'Référencé au titre de l\'art. R.6316-2'],
                  ['France Travail — Kairos', 'Organisme référencé sous le SIRET 880 430 418 00017 (Île-de-France)'],
                ].map(([k, v]) => (
                  <p key={k} style={{ fontSize: '0.83rem', lineHeight: 1.6, color: '#4a4a48', margin: '0 0 0.6rem' }}>
                    <strong style={{ color: 'var(--g-black)' }}>{k} — </strong>{v}
                  </p>
                ))}
              </div>

              <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>
                  Pièces à télécharger
                </h3>
                {[
                  ['Certificat Qualiopi', '/certificat-qualiopi.pdf'],
                  ['Conditions générales de vente', '/cgv.pdf'],
                  ['Règlement intérieur', '/reglement-interieur.pdf'],
                ].map(([t, h]) => (
                  <p key={t} style={{ fontSize: '0.86rem', margin: '0 0 0.7rem' }}>
                    <a href={h} target="_blank" rel="noopener noreferrer"
                      style={{ color: 'var(--g-red)', fontWeight: 600, textDecoration: 'none' }}>
                      {t} (PDF)
                    </a>
                  </p>
                ))}
                <p style={{ fontSize: '0.80rem', lineHeight: 1.6, color: '#777', marginTop: '1rem', marginBottom: 0 }}>
                  Programme détaillé, objectifs, prérequis, durée et tarif : sur la fiche de
                  chaque formation. Devis et convention établis sous 48 h ouvrées.
                </p>
              </div>

              <div style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>
                  Justification de l'assiduité
                </h3>
                <p style={{ fontSize: '0.83rem', lineHeight: 1.7, color: '#4a4a48', margin: '0 0 0.7rem' }}>
                  <strong style={{ color: 'var(--g-black)' }}>Présentiel et FOAD — </strong>
                  feuilles d'émargement par demi-journée, signées par les participants et le
                  formateur.
                </p>
                <p style={{ fontSize: '0.83rem', lineHeight: 1.7, color: '#4a4a48', margin: '0 0 0.7rem' }}>
                  <strong style={{ color: 'var(--g-black)' }}>E-learning tutoré — </strong>
                  traces d'activité de la plateforme de l'éditeur (temps passé, modules
                  complétés, résultats aux évaluations), conformément à l'article D.6313-3-1 du
                  code du travail. L'émargement par demi-journée n'a pas de sens en asynchrone.
                </p>
                <p style={{ fontSize: '0.83rem', lineHeight: 1.7, color: '#4a4a48', margin: 0 }}>
                  <strong style={{ color: 'var(--g-black)' }}>En fin de parcours — </strong>
                  attestation d'assiduité, attestation de fin de formation et certificat de
                  réalisation, transmis au financeur qui en fait la demande.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Besoin d'aide pour le financement ?</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Nous vous accompagnons dans l'identification du meilleur dispositif de financement adapté à votre situation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="/#contact" className="btn-red"><Mail size={16} /> Nous écrire</a>
            </div>
          </div>
        </section>


        <style>{`
          @media (max-width: 640px) {
            main section { padding: 2.5rem 1rem !important; }
          }
          @media (max-width: 480px) {
            main section { padding: 2rem 0.75rem !important; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
