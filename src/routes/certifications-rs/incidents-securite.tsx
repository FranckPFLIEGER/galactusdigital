import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/certifications-rs/incidents-securite')({
  head: () => ({
    meta: [
      { title: "Certification — Détecter, analyser et traiter les incidents de sécurité d'un système d'information | GALACTUS Digital" },
      { name: 'description', content: "Certification professionnelle en cours d'enregistrement au Répertoire spécifique de France Compétences : détecter, analyser et traiter les incidents de sécurité d'un système d'information. Accessible sans diplôme préalable. Martinique, Guadeloupe et territoires ultramarins." },
      { property: 'og:title', content: 'Certification — Incidents de sécurité | GALACTUS Digital' },
      { property: 'og:description', content: "Certification professionnelle RS : surveiller, analyser une intrusion, qualifier une alerte et traiter un incident de sécurité. Sans prérequis de diplôme." },
      { property: 'og:url', content: 'https://galactusdigital.com/certifications-rs/incidents-securite' },
    ],
  }),
  component: CertifIncidentsSecurite,
})

const competences = [
  "Caractériser la surface d'exposition et les vulnérabilités d'un système d'information.",
  "Mettre en œuvre la collecte des données de sécurité et la surveillance de l'infrastructure.",
  "Analyser le trafic réseau pour caractériser une intrusion.",
  "Analyser les traces système d'un hôte compromis.",
  "Qualifier une alerte de sécurité et en évaluer la portée.",
  "Conduire l'investigation d'un incident et en établir la chronologie.",
  "Traiter l'incident, documenter la réponse et communiquer sur son état.",
  "Prendre en compte les enjeux transverses (accessibilité, sobriété numérique, sécurité au travail, protection des données).",
]

const infosPratiques: [string, string][] = [
  ['Certificateur', 'GALACTUS Digital (PFLIEGER SASU)'],
  ['Domaine (NSF)', '326 · 326n'],
  ['Durée de validité', 'Sans limite'],
  ['Validation partielle', 'Non'],
  ['Territoires', 'Martinique · Guadeloupe · La Réunion'],
  ['Accessibilité', 'Référent handicap — accès adapté'],
]

function CertifIncidentsSecurite() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', padding: '3.5rem 2rem 3rem', borderBottom: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '940px', margin: '0 auto' }}>
            <a href="/certifications-rs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem', marginBottom: '1.5rem', fontFamily: 'var(--font-title)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <ArrowLeft size={15} /> Toutes les certifications RS
            </a>
            <span style={{ display: 'inline-block', background: 'var(--g-red)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '0.4rem 0.8rem', fontFamily: 'var(--font-title)' }}>
              Répertoire spécifique — France Compétences · En cours d'enregistrement
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.15, margin: '1.2rem 0 1rem' }}>
              Détecter, analyser et traiter les incidents de sécurité d'un système d'information
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '760px' }}>
              Une certification professionnelle qui atteste la capacité à surveiller un système d'information, à analyser une intrusion à partir des traces réseau et système, à qualifier une alerte et à traiter un incident jusqu'au rétablissement du service — accessible sans diplôme préalable.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: '940px', margin: '0 auto', padding: '0 2rem' }}>
          {/* ── Objectifs ── */}
          <section style={{ padding: '2.75rem 0', borderBottom: '1px solid var(--g-line, #E4E4E4)' }}>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', color: 'var(--g-red)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.6rem' }}>Objectifs et contexte</h2>
            <div className="g-rule" />
            <p style={{ color: '#333', lineHeight: 1.8, marginBottom: '0.9rem' }}>
              La sécurité opérationnelle d'un système d'information repose sur la capacité à détecter une activité anormale, à en établir la nature et la portée, et à y répondre avant que l'atteinte ne se propage. Cette certification atteste la maîtrise de cette chaîne complète : caractériser la surface d'exposition et les vulnérabilités, mettre en œuvre la collecte des données de sécurité, analyser le trafic réseau et les traces système, qualifier les alertes, conduire l'investigation et appliquer les étapes de traitement jusqu'au rapport d'incident.
            </p>
            <p style={{ color: '#333', lineHeight: 1.8, marginBottom: '0.9rem' }}>
              Elle se distingue des certifications du champ par son point de départ : la trace brute — capture réseau et journaux d'hôte — et non la console d'un dispositif de supervision déjà déployé. C'est la situation réelle des organisations qui ne disposent pas d'un centre opérationnel de sécurité dédié, majoritaires parmi les employeurs des territoires ultramarins.
            </p>
            <p style={{ color: '#333', lineHeight: 1.8 }}>
              L'étude 2025 de la Délégation générale à l'emploi et à la formation professionnelle et de l'Agence nationale de la sécurité des systèmes d'information établit une progression de 49 % des offres d'emploi en cybersécurité entre 2019 et 2024, et relève que 34 % d'entre elles ne précisent aucun niveau de qualification attendu. La compétence visée est indépendante des éditeurs et des constructeurs.
            </p>
          </section>

          {/* ── Compétences ── */}
          <section style={{ padding: '2.75rem 0', borderBottom: '1px solid var(--g-line, #E4E4E4)' }}>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', color: 'var(--g-red)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.6rem' }}>Compétences attestées</h2>
            <div className="g-rule" />
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {competences.map((c, i) => (
                <li key={i} style={{ position: 'relative', padding: '0.75rem 0 0.75rem 3rem', borderBottom: '1px solid var(--g-line, #E4E4E4)', color: '#333', lineHeight: 1.6 }}>
                  <span style={{ position: 'absolute', left: 0, top: '0.7rem', background: 'var(--g-red)', color: '#fff', fontWeight: 700, fontSize: '0.8rem', width: '32px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-title)' }}>C{i + 1}</span>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Modalités d'évaluation ── */}
          <section style={{ padding: '2.75rem 0', borderBottom: '1px solid var(--g-line, #E4E4E4)' }}>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', color: 'var(--g-red)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.6rem' }}>Modalités d'évaluation</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem', marginTop: '0.6rem' }}>
              <div style={{ border: '1px solid var(--g-line, #E4E4E4)', borderLeft: '3px solid var(--g-red)', padding: '1.1rem 1.2rem', background: 'var(--g-offwhite, #F7F7F6)' }}>
                <b style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--g-black)' }}>Épreuve 1 — Connaissances</b>
                <span style={{ color: '#444', lineHeight: 1.6, fontSize: '0.92rem' }}>Étude de cas et questionnaire (QCM/QROC) : concepts de sécurité, surveillance, analyse des traces hôte, analyse d'intrusion réseau, politiques et procédures. Durée indicative 1 h 30.</span>
              </div>
              <div style={{ border: '1px solid var(--g-line, #E4E4E4)', borderLeft: '3px solid var(--g-red)', padding: '1.1rem 1.2rem', background: 'var(--g-offwhite, #F7F7F6)' }}>
                <b style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--g-black)' }}>Épreuve 2 — Mise en situation</b>
                <span style={{ color: '#444', lineHeight: 1.6, fontSize: '0.92rem' }}>Analyse d'incident sur laboratoire de sécurité, à partir d'un jeu de captures réseau, de journaux d'équipements et d'hôtes et d'alertes. Épreuve déterminante. Durée indicative 4 h 00.</span>
              </div>
            </div>
            <p style={{ marginTop: '1rem', color: '#333', lineHeight: 1.8 }}>
              Les deux épreuves se déroulent en présentiel, sur poste informatique, sous la surveillance d'un examinateur et après vérification de l'identité du candidat. Un jury de trois membres, tirés d'un vivier de cinq jurés habilités et indépendants des candidats évalués, statue au vu des résultats et de la grille critériée. Chaque compétence est évaluée selon un barème à deux échelons — non acquis / acquis — et la certification est délivrée lorsque l'ensemble des huit compétences est au seuil « Acquis ». Elle s'acquiert dans sa totalité, sans validation partielle. Le jury formule en complément une appréciation qualitative restituée au candidat.
            </p>
          </section>

          {/* ── Public, prérequis ── */}
          <section style={{ padding: '2.75rem 0', borderBottom: '1px solid var(--g-line, #E4E4E4)' }}>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', color: 'var(--g-red)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.6rem' }}>Public, prérequis et accès</h2>
            <div className="g-rule" />
            <h3 style={{ fontSize: '1rem', margin: '1rem 0 0.35rem', color: 'var(--g-black)' }}>Public visé</h3>
            <p style={{ color: '#333', lineHeight: 1.8 }}>Analystes de sécurité de premier niveau, techniciens et administrateurs réseau ou système en charge de la surveillance, techniciens support amenés à qualifier des alertes, référents sécurité d'organisations sans centre opérationnel dédié ; actifs et demandeurs d'emploi en reconversion vers l'analyse de sécurité.</p>
            <h3 style={{ fontSize: '1rem', margin: '1.1rem 0 0.35rem', color: 'var(--g-black)' }}>Prérequis</h3>
            <p style={{ color: '#333', lineHeight: 1.8 }}>Compréhension du modèle en couches et de l'adressage IP, usage courant d'un système d'exploitation en ligne de commande, et compréhension écrite du français permettant de suivre des supports techniques. Aucun diplôme ni certification préalable n'est exigé, et aucune expérience professionnelle n'est requise.</p>
            <h3 style={{ fontSize: '1rem', margin: '1.1rem 0 0.35rem', color: 'var(--g-black)' }}>Voie d'accès</h3>
            <p style={{ color: '#333', lineHeight: 1.8 }}>Après un parcours de formation continue, dispensé en présentiel et complété d'un accès à un laboratoire de sécurité. La certification est délivrée par GALACTUS Digital (PFLIEGER SASU), organisme certificateur.</p>
            <h3 style={{ fontSize: '1rem', margin: '1.1rem 0 0.35rem', color: 'var(--g-black)' }}>Suites de parcours</h3>
            <p style={{ color: '#333', lineHeight: 1.8 }}>La certification prépare à la poursuite vers les titres professionnels du champ, notamment ceux de niveau 5 relatifs à la veille de cybersécurité et à l'administration d'infrastructures sécurisées, avec lesquels elle entretient une relation de complémentarité.</p>
          </section>

          {/* ── Informations pratiques ── */}
          <section style={{ padding: '2.75rem 0 3.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', color: 'var(--g-red)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.6rem' }}>Informations pratiques</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '0 1.75rem' }}>
              {infosPratiques.map(([k, v]) => (
                <div key={k} style={{ padding: '0.65rem 0', borderBottom: '1px solid var(--g-line, #E4E4E4)', display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--g-grey, #6B6B6B)' }}>{k}</span>
                  <span style={{ fontWeight: 700, textAlign: 'right', color: 'var(--g-black)' }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.25rem' }}>
              <span style={{ border: '1px solid var(--g-line, #E4E4E4)', padding: '0.5rem 0.75rem', fontSize: '0.85rem', background: '#fff' }}><b style={{ color: 'var(--g-red)' }}>Qualiopi</b> — actions de formation</span>
              <span style={{ border: '1px solid var(--g-line, #E4E4E4)', padding: '0.5rem 0.75rem', fontSize: '0.85rem', background: '#fff' }}><b style={{ color: 'var(--g-red)' }}>Cisco</b> Networking Academy</span>
              <span style={{ border: '1px solid var(--g-line, #E4E4E4)', padding: '0.5rem 0.75rem', fontSize: '0.85rem', background: '#fff' }}><b style={{ color: 'var(--g-red)' }}>IPv6</b> Forum</span>
            </div>
            <p style={{ marginTop: '1.75rem', color: 'var(--g-grey, #6B6B6B)', fontSize: '0.85rem', lineHeight: 1.7 }}>
              Certification en cours d'enregistrement au Répertoire spécifique de France Compétences — dossier en cours de dépôt (art. R. 6113-11 du code du travail). Le numéro de fiche sera publié sur cette page dès la décision. Certificateur : GALACTUS Digital (PFLIEGER SASU) — SIRET 880 430 418 00017.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
