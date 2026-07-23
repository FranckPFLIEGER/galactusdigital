import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ArrowLeft, ShieldCheck, Award } from 'lucide-react'

export const Route = createFileRoute('/certifications-rs/infrastructure-reseau')({
  head: () => ({
    meta: [
      { title: 'Certification — Mettre en œuvre, sécuriser et superviser une infrastructure réseau | GALACTUS Digital' },
      { name: 'description', content: "Certification professionnelle en cours d'enregistrement au Répertoire spécifique : mettre en œuvre, sécuriser et superviser une infrastructure réseau. Formation certifiante en Martinique, Guadeloupe et La Réunion." },
      { property: 'og:title', content: 'Certification — Infrastructure réseau | GALACTUS Digital' },
      { property: 'og:description', content: "Certification professionnelle RS : installer, sécuriser et superviser une infrastructure réseau d'entreprise. Territoires ultramarins." },
      { property: 'og:url', content: 'https://galactusdigital.com/certifications-rs/infrastructure-reseau' },
    ],
  }),
  component: CertifInfraReseau,
})

const competences = [
  "Mettre en œuvre l'adressage et la connectivité d'un réseau local.",
  "Configurer la commutation et la segmentation d'un réseau local (VLAN).",
  "Mettre en place le routage entre réseaux (statique et dynamique de base).",
  "Configurer les services réseau nécessaires au fonctionnement de l'infrastructure.",
  "Appliquer les mesures de sécurité de premier niveau (ACL, durcissement).",
  "Superviser et diagnostiquer le fonctionnement de l'infrastructure.",
  "Documenter une infrastructure réseau et communiquer sur son état.",
  "Prendre en compte les enjeux transverses (accessibilité, sobriété numérique, sécurité au travail, protection des données).",
]

const infosPratiques: [string, string][] = [
  ['Certificateur', 'GALACTUS Digital (PFLIEGER SASU)'],
  ['Domaine (NSF)', '326 · 326n'],
  ['Durée de validité', 'Fixée par la décision d enregistrement (5 ans maximum)'],
  ['Validation partielle', 'Non'],
  ['Territoires', 'Martinique · Guadeloupe · La Réunion'],
  ['Accessibilité', 'Référent handicap — accès adapté'],
]

function CertifInfraReseau() {
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
              Mettre en œuvre, sécuriser et superviser une infrastructure réseau
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '760px' }}>
              Une certification professionnelle qui atteste la capacité à installer, configurer, sécuriser et superviser une infrastructure réseau d'entreprise — pensée pour les actifs et demandeurs d'emploi des territoires ultramarins.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: '940px', margin: '0 auto', padding: '0 2rem' }}>
          {/* ── Objectifs ── */}
          <section style={{ padding: '2.75rem 0', borderBottom: '1px solid var(--g-line, #E4E4E4)' }}>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', color: 'var(--g-red)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.6rem' }}>Objectifs et contexte</h2>
            <div className="g-rule" />
            <p style={{ color: '#333', lineHeight: 1.8, marginBottom: '0.9rem' }}>
              Le réseau est le socle de toute activité numérique. Cette certification atteste la capacité à mettre en œuvre les équipements actifs (commutateurs, routeurs), à établir les services réseau (adressage, VLAN, routage), à appliquer les mesures de sécurité de premier niveau (filtrage, listes de contrôle d'accès, durcissement) et à superviser l'infrastructure pour en garantir la disponibilité.
            </p>
            <p style={{ color: '#333', lineHeight: 1.8 }}>
              Elle s'adresse en priorité aux publics des territoires ultramarins (DROM), où l'offre de certification de proximité en infrastructures réseau reste limitée et où la continuité du réseau conditionne l'accès aux services publics, à la santé, à l'éducation et à l'activité économique. La compétence visée est indépendante des constructeurs.
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
                <span style={{ color: '#444', lineHeight: 1.6, fontSize: '0.92rem' }}>Étude de cas et questionnaire (QCM/QROC) sur les fondamentaux : modèles et protocoles, adressage, commutation, routage, sécurité, supervision. Durée indicative 1 h 30.</span>
              </div>
              <div style={{ border: '1px solid var(--g-line, #E4E4E4)', borderLeft: '3px solid var(--g-red)', padding: '1.1rem 1.2rem', background: 'var(--g-offwhite, #F7F7F6)' }}>
                <b style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--g-black)' }}>Épreuve 2 — Mise en situation</b>
                <span style={{ color: '#444', lineHeight: 1.6, fontSize: '0.92rem' }}>Configuration, sécurisation et diagnostic d'une infrastructure réseau sur laboratoire, à partir d'un cahier des charges. Durée indicative 2 h 00.</span>
              </div>
            </div>
            <p style={{ marginTop: '1rem', color: '#333', lineHeight: 1.8 }}>
              Un jury de délivrance indépendant statue au vu des résultats des deux épreuves. La certification est délivrée lorsque l'ensemble des compétences est validé : seuil de réussite à l'épreuve de connaissances et validation de la grille critériée en mise en situation, chaque compétence étant couverte par au moins un critère d'évaluation. Elle s'acquiert dans sa totalité — sans validation partielle. Le jury formule en complément une appréciation qualitative restituée au candidat.
            </p>
          </section>

          {/* ── Public, prérequis ── */}
          <section style={{ padding: '2.75rem 0', borderBottom: '1px solid var(--g-line, #E4E4E4)' }}>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.4rem', color: 'var(--g-red)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.6rem' }}>Public, prérequis et accès</h2>
            <div className="g-rule" />
            <h3 style={{ fontSize: '1rem', margin: '1rem 0 0.35rem', color: 'var(--g-black)' }}>Public visé</h3>
            <p style={{ color: '#333', lineHeight: 1.8 }}>Techniciens réseau, techniciens d'exploitation, techniciens support de niveau 2, administrateurs réseau juniors ; actifs et demandeurs d'emploi souhaitant faire reconnaître une compétence réseau opérationnelle.</p>
            <h3 style={{ fontSize: '1rem', margin: '1.1rem 0 0.35rem', color: 'var(--g-black)' }}>Prérequis</h3>
            <p style={{ color: '#333', lineHeight: 1.8 }}>Maîtrise des opérations informatiques de base et compréhension écrite du français permettant de suivre des supports techniques. Aucun diplôme ni certification préalable n'est exigé.</p>
            <h3 style={{ fontSize: '1rem', margin: '1.1rem 0 0.35rem', color: 'var(--g-black)' }}>Voie d'accès</h3>
            <p style={{ color: '#333', lineHeight: 1.8 }}>Après un parcours de formation continue. La certification est délivrée par GALACTUS Digital (PFLIEGER SASU), organisme certificateur.</p>
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
              Certification en cours d'enregistrement au Répertoire spécifique de France Compétences. Certificateur : GALACTUS Digital (PFLIEGER SASU) — SIRET 880 430 418 00017.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
