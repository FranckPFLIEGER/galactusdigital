import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Phone, Mail, CheckCircle, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/handicap')({
  head: () => ({
    meta: [
      { title: 'Accessibilité & Handicap — GALACTUS Digital' },
      { name: 'description', content: "GALACTUS Digital s'engage pour l'accessibilité des formations IT. Référent handicap certifié, partenaires RHF, aménagements sur mesure dans les territoires ultramarins. Auto-positionnement et plan de progrès clôturés le 11 novembre 2026 sur la plateforme de l'Agefiph, attestation de suivi vérifiable en ligne." },
      { property: 'og:title', content: 'Accessibilité & Handicap — GALACTUS Digital' },
      { property: 'og:url', content: 'https://galactusdigital.com/handicap' },
    ],
    links: [{ rel: 'canonical', href: 'https://galactusdigital.com/handicap' }],
  }),
  component: HandicapPage,
})

function HandicapPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Accessibilité
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Notre engagement en faveur de<br />l'Accessibilité pour les Personnes<br />en Situation de Handicap
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '780px', lineHeight: 1.8 }}>
              Chez GALACTUS Digital, nous avons à cœur de promouvoir l'égalité des chances
              et de lutter contre toute forme de discrimination. Dans le cadre de notre engagement RSE,
              nous nous engageons à offrir à tous nos stagiaires les mêmes opportunités d'accès
              au développement de leurs compétences — aux Caraïbes, dans l'Océan Indien
              et en France hexagonale.
            </p>
          </div>
        </section>

        {/* ── Accueil PSH ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Accueil des personnes<br />en situation de handicap</h2>
            <div className="g-rule" />
            <div className="hcap-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginTop: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Afin de répondre aux besoins spécifiques de nos stagiaires en situation de handicap,
                  nous avons nommé un <strong>référent accueil PSH</strong> (Personnes en Situation de Handicap).
                  Ce dernier accorde une écoute attentive aux stagiaires concernés et collabore avec
                  tous les acteurs de la formation pour trouver les solutions les plus appropriées,
                  quel que soit le handicap (auditif, visuel, moteur, cognitif, etc.).
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Notre référent contribue à offrir un environnement inclusif et l'accès
                  à un parcours pédagogique optimal. Nous mettons tout en œuvre pour rendre
                  accessibles nos formations, quelle que soit leur modalité — e-learning tutoré,
                  FOAD ou présentiel — et sommes en capacité de proposer des solutions
                  personnalisées adaptées à chaque situation.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48' }}>
                  Nous pouvons également compter sur un réseau de partenaires spécialisés
                  pour nous accompagner dans la prise en charge des situations individuelles
                  dans les territoires ultramarins et en France hexagonale.
                </p>
              </div>

              <div>
                {/* Référent */}
                <div style={{ background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '2.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '1rem' }}>
                    Référent Handicap — GALACTUS Digital
                  </div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.6rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.3rem' }}>
                    Franck PFLIEGER
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.50)', marginBottom: '2rem', lineHeight: 1.6 }}>
                    Président — Référent Handicap et Santé<br />
                    Certificat Référent Handicap OF/CFA délivré le 20 février 2023 par DFD Consulting<br />
                    Formation financée par l'Agefiph Antilles-Guyane<br />
                    Également référent violences, harcèlement et discriminations de l'organisme<br />
                    {/* L'article L. 6231-2 du code du travail n'impose la désignation d'un référent
                        handicap qu'aux centres de formation d'apprentis. GALACTUS Digital n'est pas
                        CFA : la désignation est volontaire, comme le dispositif d'évaluation des
                        enseignements de l'indicateur 33. Ajouté le 30/10/2026. */}
                    <span style={{ color: 'rgba(255,255,255,0.38)' }}>
                      Désignation volontaire : l'article L. 6231-2 du code du travail ne l'impose
                      qu'aux centres de formation d'apprentis
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a href="tel:+33781074746" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.80)', textDecoration: 'none', fontSize: '0.90rem' }}>
                      <div style={{ width: '36px', height: '36px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Phone size={16} color="white" />
                      </div>
                      +33 7 81 07 47 46
                    </a>
                    <a href="mailto:president@galactusdigital.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.80)', textDecoration: 'none', fontSize: '0.90rem' }}>
                      <div style={{ width: '36px', height: '36px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Mail size={16} color="white" />
                      </div>
                      president@galactusdigital.com
                    </a>
                  </div>
                </div>

                {/* Partenaires RHF */}
                <div style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.4)', padding: '1.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '1rem' }}>
                    Nos partenaires RHF
                  </div>
                  {/* Le réseau mobilisable, la démarche de progrès RHF et le tableau de bord des
                      adaptations sont formalisés dans la pièce FQ-0-05 du kit qualité. On cite le
                      numéro : c'est ce qui rend la page opposable en audit.
                      Nomenclature, 11/11/2026 : le cartouche porte « Réf. : FQ-0-05-RESEAU-HANDICAP »,
                      le site écrit FQ-0-05 comme FQ-0-07, FQ-0-10, FQ-0-11, FQ-0-12 et FQ-0-15, et le
                      dossier RHF écrit 0-05. Basculer la seule pièce 0-05 sur la forme courte
                      réglerait l'écart avec le dossier RHF en en créant un à l'intérieur du site.
                      On nomme donc les deux formes une fois, ici : l'auditeur retrouve la pièce
                      quelle que soit celle qu'il a sous les yeux. */}
                  <p style={{ fontSize: '0.82rem', color: '#5a5a58', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Ce réseau, la démarche de progrès engagée auprès du RHF Île-de-France et le suivi
                    des adaptations mises en œuvre sont formalisés dans la pièce <strong>FQ-0-05</strong>{' '}
                    du kit qualité — désignée <strong>0-05</strong> dans le dossier déposé auprès de
                    la Ressource Handicap Formation : il s'agit de la même pièce.
                  </p>
                  {/* Contacts repris de la liste officielle Agefiph « Ressource Handicap
                      Formation — vos contacts en région », version du 09/01/2026, pour les
                      cinq territoires où l'organisme intervient.

                      On ne publie QUE les adresses et standards institutionnels. La liste
                      Agefiph nomme les référentes et donne leurs portables : les exposer sur
                      un site public n'est ni correct pour elles ni durable — elles changent
                      de poste et le site devient faux. Le nom du référent du dossier est au
                      dossier, pas en vitrine. */}
                  {[
                    { name: 'RHF Martinique — AGEFMA', zone: 'Martinique', detail: 'rhfmartinique@agefma.fr · 05 96 71 11 04' },
                    { name: 'RHF Guadeloupe — Agefiph', zone: 'Guadeloupe', detail: 'rhf-guadeloupe@agefiph.asso.fr' },
                    { name: 'RHF Guyane — LV Consultants', zone: 'Guyane', detail: 'rhf-guyane@lvconsultants.fr · 06 94 95 79 29 — Cayenne, Kourou, Saint-Laurent-du-Maroni' },
                    { name: 'RHF La Réunion — Agefiph', zone: 'La Réunion', detail: 'rhf-lareunion-mayotte@agefiph.asso.fr' },
                  // Saint-Martin et Saint-Barthélemy figuraient sur la carte des territoires
                  // couverts sans qu'aucun contact RHF ne soit publié. Les deux collectivités
                  // relèvent de la délégation Agefiph Antilles-Guyane et du réseau RHF
                  // Guadeloupe. Ajouté le 10/11/2026.
                  { name: 'RHF Saint-Martin et Saint-Barthélemy', zone: 'Îles du Nord', detail: 'Rattachées au réseau RHF Guadeloupe — rhf-guadeloupe@agefiph.asso.fr' },
                    { name: 'RHF Île-de-France — Agefiph', zone: 'France hexagonale', detail: 'rhf-idf@agefiph.asso.fr — contact par courriel' },
                    { name: 'AGEFIPH Antilles-Guyane', zone: 'Financement', detail: 'Charte d\'engagement signée le 4 novembre 2024 · demandes d\'aide sur agefiph.fr/aides-handicap/depot-demande' },
                  ].map(p => (
                    <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.75rem 0', borderBottom: '1px solid rgba(187,187,187,0.25)' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)' }}>{p.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.2rem' }}>{p.detail}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.55rem', flexShrink: 0, marginLeft: '1rem', marginTop: '3px' }}>{p.zone}</div>
                    </div>
                  ))}
                  {/* Accompagnement RHF Île-de-France engagé depuis l'entretien du
                      20 octobre 2026. C'est un fait daté et vérifiable : il vaut mieux
                      qu'une déclaration d'intention devant un auditeur (indicateur 26). */}
                  {/* Mise à jour du 11/11/2026. « Renseignés intégralement » décrivait l'état
                      du 27 octobre. Depuis le 11 novembre à 16 h 40, l'auto-positionnement et le
                      plan de progrès sont CLÔTURÉS : la plateforme a délivré une attestation de
                      suivi et un code de vérification opposable. On passe d'une confirmation par
                      courriel à une preuve vérifiable par un tiers — c'est ce que l'indicateur 26
                      attend, et c'est ce qu'un auditeur peut contrôler sans nous croire sur parole. */}
                  <p style={{ fontSize: '0.78rem', color: '#6a6a68', lineHeight: 1.7, marginTop: '1.25rem', marginBottom: 0 }}>
                    Un accompagnement est engagé avec la Ressource Handicap Formation
                    Île-de-France depuis notre entretien du <strong>20 octobre 2026</strong>.
                    L'<strong>auto-positionnement accessibilité</strong> et le{' '}
                    <strong>plan de progrès</strong> ont été <strong>clôturés le 11 novembre 2026</strong>{' '}
                    sur la plateforme de l'Agefiph, qui a délivré une{' '}
                    <strong>attestation de suivi</strong> datée du même jour. L'avancement s'établit
                    à <strong>72 %</strong> sur l'axe « Organiser une accessibilité pour tous » et à{' '}
                    <strong>64 %</strong> sur l'axe « S'adapter à chacun », contre 63 % et 55 % lors
                    du relevé du 4 octobre 2026. Les onze items portent désormais un objectif de
                    progrès daté, avec ses actions et ses indicateurs.
                  </p>
                  {/* Le code de vérification est le cœur de la preuve : il permet à un auditeur
                      ou à un financeur de contrôler l'attestation sur le site de l'Agefiph, sans
                      passer par nous. Le publier, c'est accepter d'être vérifié — et c'est
                      précisément pour cela qu'il vaut mieux qu'une déclaration. */}
                  <p style={{ fontSize: '0.78rem', color: '#6a6a68', lineHeight: 1.7, marginTop: '1rem', marginBottom: 0 }}>
                    L'attestation est vérifiable par toute personne, sans passer par nous, sur le
                    site de la Ressource Handicap Formation — code de vérification{' '}
                    <strong style={{ fontFamily: 'monospace', fontSize: '0.74rem', wordBreak: 'break-all' }}>fb263fcc80d577e97726e8d4e38fa494</strong>.{' '}
                    <a
                      href="https://idf.rhf-accessibilite.fr/espace-personnel/verification-attestation-structure/fb263fcc80d577e97726e8d4e38fa494"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--g-red)', textDecoration: 'underline' }}
                    >
                      Vérifier l'attestation
                    </a>
                  </p>
                  {/* Outil d'analyse des besoins. La référente RHF Île-de-France a indiqué le
                      27/10/2026 que c'est le document utilisé par le réseau pour toutes les
                      situations individuelles, et celui à déposer sur la plateforme à l'appui
                      d'une demande d'aide Agefiph. On nomme l'outil plutôt que de décrire
                      vaguement un « entretien » : un auditeur peut le demander. */}
                  <p style={{ fontSize: '0.78rem', color: '#6a6a68', lineHeight: 1.7, marginTop: '1.25rem', marginBottom: 0 }}>
                    L'analyse des besoins d'une situation individuelle s'appuie sur la{' '}
                    <strong>grille d'évaluation des besoins d'un apprenant</strong> publiée par
                    l'Agefiph, utilisée par le réseau Ressource Handicap Formation pour toutes les
                    situations individuelles. Elle recense les besoins au regard de la formation
                    visée, formalise le plan d'adaptation et sert de support à une demande d'aide
                    auprès de l'Agefiph. Elle est renseignée avec l'apprenant lors de l'entretien
                    préalable prévu à l'article 13 des CGV — étant entendu que chaque situation est
                    singulière et que l'apprenant reste libre de ce qu'il souhaite indiquer.
                  </p>
                  {/* Fiche 9 du plan de progrès, échéance 31/01/2027 : rendre l'engagement
                      visible. Les trois pièces demandées — logo RHF, charte Agefiph
                      téléchargeable, objectifs du plan de progrès publiés — sont ici, au même
                      endroit, au lieu d'être dispersées. Publié le 11/11/2026, soit deux mois
                      et demi avant l'échéance. Les engagements et les axes sont repris mot pour
                      mot de l'affiche de communication 2026 délivrée par la plateforme : on ne
                      reformule pas un document officiel. */}
                  <div style={{ marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(187,187,187,0.4)' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '1rem' }}>
                      Nos engagements et nos axes de progrès
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#6a6a68', lineHeight: 1.7, marginBottom: '1rem' }}>
                      Le groupe projet accessibilité mesure régulièrement le niveau d'accessibilité
                      des formations et s'engage sur des actions concrètes d'amélioration. Ces
                      engagements et ces axes sont ceux déclarés sur la plateforme de l'Agefiph et
                      repris sur notre affiche de communication 2026.
                    </p>
                    <div style={{ fontSize: '0.78rem', color: '#4a4a48', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                      <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Nos engagements auprès des publics</strong>
                      <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                        <li>Le référent Handicap et Santé est le président et le formateur : un seul interlocuteur, de la demande au bilan, sans rupture de chaîne.</li>
                        <li>Chaque apprenant est sollicité, sans exception : c'est l'absence de sollicitation, et non l'absence de besoin, qui constitue l'écart.</li>
                        <li>Nous traçons l'adaptation, jamais sa cause : ni diagnostic, ni pathologie, ni justificatif médical demandé, reçu ou conservé.</li>
                      </ul>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#4a4a48', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                      <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Nos axes de progrès, avec leur échéance</strong>
                      <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
                        <li>Audit RGAA du site au <strong>30/06/2027</strong>, et liste des moyens de compensation annexée au livret d'accueil.</li>
                        <li>Logo RHF, charte Agefiph téléchargeable et objectifs du plan de progrès publiés sur le site au <strong>31/01/2027</strong>.</li>
                        <li>Tableau de bord des adaptations renseigné au <strong>31/12/2026</strong> : taux de sollicitation, besoins signalés, effet vérifié.</li>
                      </ul>
                    </div>
                    {/* Les trois documents sont publiés en PDF, consultables sans nous écrire.
                        C'est ce que « téléchargeable » veut dire dans la fiche 9. */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {[
                        { href: '/rhf/attestation-de-suivi-2026-11-11.pdf', label: 'Attestation de suivi — 11 novembre 2026' },
                        { href: '/rhf/affiche-accessibilite-2026.pdf', label: 'Affiche de communication 2026' },
                        { href: '/rhf/charte-agefiph-engagement-2024-11-04.pdf', label: "Charte d'engagement Agefiph — 4 novembre 2024" },
                      ].map(d => (
                        <a
                          key={d.href}
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '0.74rem', fontFamily: 'var(--font-title)', letterSpacing: '0.04em', color: 'var(--g-black)', border: '1px solid var(--g-gray)', padding: '0.5rem 0.85rem', textDecoration: 'none', background: '#fff' }}
                        >
                          {d.label} <span aria-hidden="true">↓</span> <span style={{ color: '#9a9a98' }}>PDF</span>
                        </a>
                      ))}
                    </div>
                    {/* La charte est un document scanné : une image, sans texte sélectionnable,
                        qu'aucun lecteur d'écran ne peut restituer. Publier un PDF inaccessible
                        sur la page accessibilité serait une contradiction ; ses six engagements
                        sont donc repris ici en texte, intégralement, pour que le contenu soit
                        lisible par tout le monde sans ouvrir le fichier. Ajouté le 11/11/2026.
                        Si la charte est un jour republiée dans une version avec texte, ce bloc
                        reste utile : il évite d'avoir à télécharger pour savoir ce qu'elle dit. */}
                    <details style={{ marginTop: '1rem' }}>
                      <summary style={{ fontSize: '0.76rem', color: 'var(--g-red)', cursor: 'pointer', fontFamily: 'var(--font-title)', fontWeight: 600, letterSpacing: '0.04em' }}>
                        Les six engagements de la charte, en texte
                      </summary>
                      <div style={{ fontSize: '0.78rem', color: '#4a4a48', lineHeight: 1.75, margin: '0.6rem 0 0', paddingLeft: '0.9rem', borderLeft: '2px solid rgba(187,187,187,0.5)' }}>
                        <p style={{ margin: '0 0 0.5rem' }}>
                          En signant cette charte le 4 novembre 2024, l'organisme certifie engager sa
                          démarche de progrès continue pour une accessibilité généralisée de l'offre de
                          formation, et s'engage à :
                        </p>
                        <ol style={{ margin: 0, paddingLeft: '1.1rem' }}>
                          <li>associer à l'ensemble de la démarche les membres du « Groupe Projet Accessibilité » piloté par le référent handicap ;</li>
                          <li>déposer cette charte signée sur la plateforme Accessibilité ;</li>
                          <li>réaliser un état des lieux du niveau d'accessibilité de son offre de formation, pour chacun des sites de formation, en répondant aux 21 questions proposées dans l'espace « S'auto-positionner » de la plateforme ;</li>
                          <li>co-réaliser un plan d'actions annuel permettant de définir des axes de progrès de l'accessibilité des formations ;</li>
                          <li>actualiser chaque année l'auto-positionnement de son accessibilité et partager les progrès réalisés ;</li>
                          <li>communiquer auprès des publics sur ces engagements et sur les progrès réalisés, en utilisant tout support ou kit de communication proposé par l'Agefiph.</li>
                        </ol>
                        <p style={{ margin: '0.6rem 0 0', fontSize: '0.74rem', color: '#6a6a68' }}>
                          La signature manuscrite a été occultée sur l'exemplaire publié en ligne ;
                          l'original signé est communicable sur demande. Le dépôt de la charte,
                          daté du 4 novembre 2024, est attesté par la Ressource Handicap Formation
                          sur le lien de vérification ci-dessus.
                        </p>
                      </div>
                    </details>
                  </div>
                  <p style={{ fontSize: '0.72rem', color: '#9a9a98', fontStyle: 'italic', lineHeight: 1.6, marginTop: '0.75rem', marginBottom: 0 }}>
                    Contacts repris de la liste officielle Agefiph « Ressource Handicap
                    Formation — vos contacts en région », version du 9 janvier 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA contact ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '3rem 2rem', borderTop: '3px solid var(--g-red)', borderBottom: '3px solid var(--g-red)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)', marginBottom: '0.4rem' }}>
                Vous êtes en situation de handicap ?
              </div>
              <p style={{ fontSize: '0.90rem', color: '#5a5a58', margin: 0, lineHeight: 1.7 }}>
                Vous avez un besoin spécifique ou des questions sur le déroulement de votre formation ?
              </p>
            </div>
            <a href="mailto:president@galactusdigital.com" className="btn-red" style={{ flexShrink: 0 }}>
              <Mail size={16} /> Contactez-nous
            </a>
          </div>
        </section>

        {/* ── Accessibilité numérique ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Accessibilité Numérique</h2>
            <div className="g-rule" />
            <div className="hcap-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Nous attachons une grande importance à l'accessibilité de nos formations et de notre
                  site internet. Nous nous engageons à ce que toutes les personnes, indépendamment
                  de leurs capacités, puissent accéder à nos contenus et bénéficier pleinement
                  de notre offre de formation certifiante IT.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Les formations Cisco Networking Academy se suivent en e-learning tutoré sur la
                  plateforme Cisco Networking Academy, et le parcours Juniper JNCIA-Junos en FOAD sur Webex :
                  une personne à mobilité réduite peut les suivre depuis son domicile, quelle que
                  soit sa localisation aux Caraïbes, dans l'Océan Indien ou en France hexagonale.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Les formations Microsoft, en revanche, ne sont dispensées qu'en présentiel. Elles
                  ne peuvent donc pas être suivies à distance : l'accessibilité y repose sur le
                  choix de la salle et sur les aménagements convenus avec le bénéficiaire. Le lieu
                  étant retenu session par session, ses conditions d'accès sont vérifiées avant
                  l'engagement et portées sur la convocation. Lorsqu'aucune salle accessible ne peut
                  être trouvée sur le territoire concerné, l'organisme le dit, oriente vers un
                  partenaire du réseau RHF et ne maintient pas l'inscription.
                </p>
                <div style={{ borderLeft: '3px solid var(--g-red)', paddingLeft: '1.1rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.80rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--g-black)', marginBottom: '0.5rem' }}>
                    Déclaration d'accessibilité du site
                  </div>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.8, color: '#5a5a58', marginBottom: '0.75rem' }}>
                    PFLIEGER SASU est une entreprise privée dont le chiffre d'affaires est très
                    inférieur au seuil de 250 millions d'euros fixé à l'article 47 de la loi
                    n° 2005-102 du 11 février 2005 : galactusdigital.com n'entre donc pas dans le
                    champ de la mise en conformité obligatoire au RGAA. Nous publions néanmoins
                    l'état réel du site, au titre de la charte Agefiph que nous avons signée.
                  </p>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.8, color: '#5a5a58', marginBottom: '0.75rem' }}>
                    <strong>État de conformité :</strong> non audité. Aucun audit RGAA n'a été conduit
                    à ce jour ; aucun taux de conformité n'est donc affiché, faute de résultat
                    justifiable sur pièces.
                  </p>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.8, color: '#5a5a58', marginBottom: '0.75rem' }}>
                    <strong>Dispositions déjà en place :</strong> navigation au clavier, structure de
                    titres hiérarchisée, textes alternatifs sur les images porteuses d'information,
                    contrastes conformes au niveau AA sur les textes courants, aucun contenu en
                    défilement ou clignotement automatique, aucune information portée par la seule
                    couleur, et aucun cookie ni bandeau à franchir pour accéder au contenu.
                  </p>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.8, color: '#5a5a58', margin: 0 }}>
                    <strong>Signaler une difficulté :</strong> si une page vous est inaccessible,
                    écrivez à president@galactusdigital.com ou appelez le 07 81 07 47 46. Le contenu
                    concerné vous est transmis sous un autre format sous 48 h ouvrées, et la
                    correction est inscrite au plan d'actions accessibilité actualisé chaque année.
                    À défaut de réponse satisfaisante, vous pouvez saisir le Défenseur des droits.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Catalogue Cisco suivi à distance, sans déplacement, en e-learning tutoré',
                  'Supports de cours adaptables (grands caractères sur demande)',
                  'Classes virtuelles Webex avec sous-titrage possible',
                  'Formations Microsoft en présentiel : salle vérifiée avant engagement',
                  'Temps supplémentaire pour les examens sur demande',
                  'Accompagnement renforcé par le formateur',
                  'Pauses adaptées selon les besoins individuels',
                  "Logiciels d'assistance compatibles avec nos plateformes",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)' }}>
                    <CheckCircle size={15} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.87rem', color: '#4a4a48', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Accessibilité de la plateforme éditeur ──
                La ligne « logiciels d'assistance compatibles avec nos plateformes »
                ci-dessus porte sur un outil que nous n'éditons pas. Elle n'est
                justifiable qu'en renvoyant l'apprenant à l'engagement de l'éditeur
                lui-même, qu'il peut vérifier sans passer par nous. On ne publie ici
                que ce que Cisco déclare, attribué à Cisco. */}
            <div style={{ marginTop: '3rem', background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginTop: 0, marginBottom: '1rem' }}>
                L'accessibilité de la plateforme de formation
              </h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#4a4a48', marginBottom: '1rem' }}>
                Les parcours certifiants que nous dispensons s'appuient sur la plateforme de la
                Cisco Networking Academy. Son accessibilité relève de l'éditeur, pas de nous :
                nous vous donnons donc directement sa source, afin que vous puissiez la vérifier
                par vous-même avant de vous engager.
              </p>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#4a4a48', marginBottom: '1.25rem' }}>
                Cisco déclare poursuivre, depuis le lancement du programme en 1997, l'objectif de
                rendre accessible à tous les apprenants chaque aspect de celui-ci, et assurer
                depuis 2019 un suivi actif des mesures d'assistance destinées aux personnes en
                situation de handicap visuel, auditif, cognitif ou moteur.
              </p>
              <a
                href="https://www.netacad.com/fr/accessibility"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.7rem 1.2rem', textDecoration: 'none' }}
              >
                <ExternalLink size={14} /> Accessibilité Cisco Networking Academy
              </a>
              <p style={{ fontSize: '0.78rem', color: '#9a9a98', lineHeight: 1.7, marginTop: '1rem', marginBottom: 0, fontStyle: 'italic' }}>
                Page publiée par Cisco Systems — netacad.com (nouvel onglet). Un besoin
                d'aménagement sur la plateforme se signale à notre référent handicap, qui fait
                l'intermédiaire avec l'éditeur et le réseau RHF : toute situation de handicap
                signalée donne lieu à un entretien préalable (article 13 des CGV).
              </p>
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 768px) {
            .hcap-grid-2 { grid-template-columns: 1fr !important; gap: 2rem !important; }
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
