import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { TroisModalites } from '../components/TroisModalites'
import { Footer } from '../components/Footer'
import {
  MapPin, Users, CheckCircle, Clock, Phone, Mail,
  Network, Calendar, TrendingUp, Target, Settings, AlertCircle,
} from 'lucide-react'
import { getFormationsParModalite } from '../data/catalogue'

export const Route = createFileRoute('/presentiel')({
  component: PresentielPage,
})


// Les quatre territoires où les formations en présentiel se tiennent, décrits de
// la même manière. Le siège social parisien a été retiré de cette liste : c'est
// une adresse administrative, pas un lieu de formation, et la faire figurer sous
// « Nos lieux de formation » laissait croire à une salle à Paris. Il reste
// mentionné au pied de page et aux mentions légales, à sa place.
// Guyane et La Réunion n'ont pas d'adresse de bureau publiée : la formation s'y
// tient dans les locaux du client ou en salle retenue pour la session.
const TEL = '+33 7 81 07 47 46'
// La phrase de périmètre, dans les termes de Franck : elle dit où la formation se
// tient ET ce qui se donne en présentiel, pour qu'un visiteur ne demande pas une
// session présentielle sur un cours qui n'existe qu'en e-learning tutoré.
const PERIMETRE_PRESENTIEL = 'Interventions dans vos locaux (intra-entreprise) ou en salle retenue '
  + 'pour la session (inter-entreprise) — uniquement le catalogue Microsoft, le CCNA v2.0 parcours '
  + 'complet et les CCNP ENCOR et ENARSI en présentiel.'
// Dans la rubrique inter-entreprise, la session se tient en salle retenue : parler
// des locaux du client y mélangeait les deux formats. Phrase dédiée, sans adresse,
// identique pour les quatre territoires. Demandé le 29 octobre 2026.
const PERIMETRE_INTER = 'Les formations en présentiel inter-entreprise se tiennent dans une salle '
  + 'retenue pour la session — uniquement le catalogue Microsoft, le CCNA v2.0 parcours complet '
  + 'et les CCNP ENCOR et ENARSI.'
// « en inter comme en intra » laissait le lecteur deviner ce qui va avec quoi.
// Chaque format est désormais collé à son lieu. Demandé le 29 octobre 2026.
const DESC_COMMUNE = 'Interventions dans vos locaux (intra-entreprise) ou en salle retenue pour la session (inter-entreprise).'
const LIEUX: { zone: string; badge: string; adresse?: string; desc: string; tel: string }[] = [
  { zone: 'Martinique', badge: 'Bureau — Caraïbes', adresse: 'Pointe Madeleine — CAP EST\n97240 Le François', desc: DESC_COMMUNE, tel: TEL },
  { zone: 'Guadeloupe', badge: 'Bureau — Caraïbes', adresse: 'Pointe de la Verdure\nGosier 97190', desc: DESC_COMMUNE, tel: TEL },
  { zone: 'Guyane', badge: 'Intervention sur demande', desc: DESC_COMMUNE, tel: TEL },
  { zone: 'La Réunion', badge: 'Intervention sur demande', desc: DESC_COMMUNE, tel: TEL },
]

function FormationGrid() {
  // Pilotée par le catalogue : n'affiche que les formations déclarées en présentiel.
  const formations = getFormationsParModalite('Présentiel')
  const parEditeur = formations.reduce<Record<string, typeof formations>>((acc, f) => {
    (acc[f.editeur] ||= []).push(f)
    return acc
  }, {})
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', marginTop: '2rem' }}>
      {Object.entries(parEditeur).map(([editeur, liste]) => (
        <div key={editeur} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)' }}>{editeur}</div>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.55rem' }}>{liste.length}</div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {liste.map(f => (
              <li key={f.slug} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#5a5a58' }}>
                <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />
                <a href={`/formations/${f.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{f.titre}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function DelaisAcces({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? 'rgba(255,255,255,0.70)' : '#4a4a48'
  const strongColor = dark ? '#fff' : 'var(--g-black)'
  const bg = dark ? 'rgba(255,255,255,0.03)' : 'var(--g-white)'
  const border = dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(187,187,187,0.3)'
  return (
    <div style={{ background: bg, border, borderLeft: '4px solid var(--g-red)', padding: '1.25rem 1.5rem', marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
        <AlertCircle size={15} color="#E41F26" />
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)' }}>Délais d'accès</span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {[
          { label: 'Standard', val: '1 mois après signature du devis et de la convention de formation.' },
          { label: 'Financement OPCO', val: '3 mois (montage du dossier compris).' },
          { label: 'Inscription minimale', val: "Possible jusqu'à une semaine avant le démarrage, selon les places disponibles (art. 14 des CGV)." },
          ].map(d => (
          <li key={d.label} style={{ fontSize: '0.84rem', color: textColor, lineHeight: 1.6 }}>
            <strong style={{ color: strongColor }}>{d.label} — </strong>{d.val}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PresentielPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Modalité · Présentiel</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Formation en Présentiel
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '100%', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Un formateur certifié intervient en face-à-face chez vous ou dans une salle retenue pour la session. Immersion totale, ateliers pratiques sur équipements réels, progression maximale vers la certification.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Art. L.6313-1 Code du travail', 'Qualiopi certifié', 'Éligible OPCO · PDC', 'Formateur certifié éditeur'].map(b => (
                <div key={b} style={{ padding: '0.35rem 0.9rem', background: 'rgba(228,31,38,0.10)', border: '1px solid rgba(228,31,38,0.25)', fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{b}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi le présentiel ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Pourquoi choisir le présentiel ?</h2>
            <div className="g-rule" />
            <div className="pres-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: <Users size={24} color="white" />, title: 'Immersion totale', desc: "La formation en présentiel favorise la concentration, l'interaction directe avec le formateur et les échanges entre participants. Idéale pour les formations techniques avec ateliers pratiques intensifs." },
                { icon: <CheckCircle size={24} color="white" />, title: 'Accompagnement direct', desc: "Le formateur adapte son rythme en temps réel selon le niveau du groupe. Les questions trouvent une réponse immédiate, les difficultés sont levées sur le moment." },
                { icon: <Clock size={24} color="white" />, title: 'Efficacité pédagogique', desc: "Les ateliers pratiques sur équipements réels (simulateur Packet Tracer, environnements Microsoft) sont facilités en présentiel. Le taux de certification est maximum." },
              ].map(a => (
                <div key={a.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lieux ── */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Nos lieux de formation</h2>
            <div className="g-rule" />
            {/* Le périmètre, énoncé une fois : le répéter sur chacune des quatre
                cartes alourdissait la lecture sans rien ajouter. */}
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.62)', maxWidth: '100%', marginBottom: '2rem' }}>
              {PERIMETRE_PRESENTIEL}
            </p>
            <div className="pres-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(225px, 1fr))', gap: '1.5rem' }}>
              {LIEUX.map(l => (
                <div key={l.zone} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={20} color="white" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff' }}>{l.zone}</div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.6rem', display: 'inline-block', marginTop: '0.3rem' }}>{l.badge}</div>
                    </div>
                  </div>
                  {l.adresse && (
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.50)', marginBottom: '1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{l.adresse}</p>
                  )}
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', marginBottom: '1rem' }}>{l.desc}</p>
                  <a href={`tel:${l.tel.replace(/\s/g,'')}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--g-red)', textDecoration: 'none' }}>
                    <Phone size={13} /> {l.tel}
                  </a>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', marginTop: '1.5rem', fontStyle: 'italic' }}>
              * Nous intervenons également à Saint-Martin et à Saint-Barthélemy, directement dans vos locaux sur demande. Le siège social, 66 avenue des Champs-Élysées à Paris, est une adresse administrative : aucune formation ne s'y tient.
            </p>
          </div>
        </section>

        {/* ── Inter-Entreprise ── */}
        <section id="inter" style={{ background: 'var(--g-offwhite)', padding: '5rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Format d'organisation · Présentiel</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: 'var(--g-black)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Inter-Entreprise</h2>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#5a5a58', maxWidth: '100%', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Rejoignez nos sessions ouvertes planifiées tout au long de l'année. Un format qui favorise les échanges entre professionnels de secteurs variés dans les territoires ultramarins et en France hexagonale.
            </p>
            <div className="pres-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: <Network size={24} color="white" />, title: 'Réseau professionnel', desc: "Échangez avec des professionnels d'horizons différents. Opportunité unique de réseautage et de partage d'expériences dans les territoires ultramarins." },
                { icon: <Calendar size={24} color="white" />, title: 'Sessions planifiées', desc: "Inscrivez-vous à la session qui correspond à vos disponibilités. Plusieurs dates disponibles dans l'année sur nos différents territoires." },
                { icon: <TrendingUp size={24} color="white" />, title: 'Financement facilité', desc: 'Les formations inter-entreprises sont éligibles OPCO, aides régionales DOM. Nous vous accompagnons dans le montage de votre dossier.' },
              ].map(a => (
                <div key={a.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '2rem', background: 'var(--g-white)' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
            <div className="pres-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', background: 'var(--g-white)', padding: '2.5rem', border: '1px solid rgba(187,187,187,0.3)' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Caractéristiques</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {['Groupes de 4 à 12 participants maximum','Formateur certifié officiel éditeur','Programme officiel certifiant éditeur','Sessions planifiées au calendrier, ouvertes à plusieurs entreprises','Supports de cours officiels inclus','Accès à Microsoft Learn — Cisco Networking Academy pour le CCNA v2.0 complet','Passage de la certification intégré','Attestation de formation et de présence','Éligible OPCO, aides régionales DOM',"Inscription possible jusqu'à une semaine avant le démarrage (art. 14 des CGV)"].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Sessions & lieux</h3>
                {/* Deuxième liste de lieux de la page, distincte de « Nos lieux de
                    formation » : elle portait elle aussi le siège parisien et ne disait
                    pas quelles formations se tiennent en présentiel. Alignée sur les
                    quatre territoires et sur le périmètre réel, le 29 octobre 2026. */}
                {['Martinique', 'Guadeloupe', 'Guyane', 'La Réunion'].map(zone => ({
                  zone,
                  badge: 'Session inter-entreprise',
                  desc: PERIMETRE_INTER,
                })).map(l => (
                  <div key={l.zone} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ flexShrink: 0, width: '8px', height: '8px', background: 'var(--g-red)', marginTop: '5px' }} />
                    <div>
                      <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)' }}>{l.zone}</span>
                      {' · '}
                      <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.1rem 0.45rem', display: 'inline-block', marginRight: '0.4rem' }}>{l.badge}</span>
                      <br />
                      <span style={{ fontSize: '0.81rem', color: '#5a5a58' }}>{l.desc}</span>
                    </div>
                  </div>
                ))}
                <div style={{ background: 'rgba(228,31,38,0.06)', border: '1px solid rgba(228,31,38,0.15)', padding: '0.9rem 1rem', marginTop: '1rem' }}>
                  <p style={{ fontSize: '0.82rem', color: '#4a4a48', margin: 0, lineHeight: 1.6 }}>
                    Consultez les prochaines dates sur notre <a href="/calendrier" style={{ color: 'var(--g-red)', fontWeight: 600 }}>calendrier en ligne</a>.
                  </p>
                </div>
                <DelaisAcces />
              </div>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="/calendrier" className="btn-ghost-dark"><Calendar size={16} /> Voir le calendrier</a>
            </div>
          </div>
        </section>

        {/* ── Intra-Entreprise ── */}
        <section id="intra" style={{ background: 'var(--g-black)', padding: '5rem 2rem', scrollMarginTop: '80px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ width: '4px', height: '48px', background: 'var(--g-red)', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.2rem' }}>Format d'organisation · Présentiel</div>
                <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Intra-Entreprise</h2>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', maxWidth: '100%', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Nous intervenons directement dans vos locaux avec un programme conçu sur mesure pour vos équipes. Vos collaborateurs se forment sans quitter leur environnement de travail — où que vous soyez dans les territoires ultramarins ou en France hexagonale.
            </p>
            <div className="pres-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: <Target size={24} color="white" />, title: 'Programme sur mesure', desc: "Le contenu est adapté à vos outils, vos processus et vos objectifs métiers. Pas de formation générique — une ingénierie pédagogique taillée pour votre organisation." },
                { icon: <Users size={24} color="white" />, title: "Cohésion d'équipe", desc: "Toute votre équipe progresse ensemble, au même rythme, avec les mêmes références. Idéal pour harmoniser les compétences et créer un langage commun." },
                { icon: <Settings size={24} color="white" />, title: 'Flexibilité totale', desc: "Dates, horaires, lieu — tout s'adapte à vos contraintes opérationnelles. Nous venons à vous, pas l'inverse." },
              ].map(a => (
                <div key={a.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '2rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>{a.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.75rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>Comment ça se passe ?</h3>
            <div className="pres-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { num: '01', title: 'Audit des besoins', desc: 'Entretien avec votre responsable formation pour identifier les compétences à développer et les certifications visées.' },
                { num: '02', title: 'Programme personnalisé', desc: 'Nous concevons un programme aligné sur vos objectifs, vos outils et le niveau de vos équipes.' },
                { num: '03', title: 'Convention & devis', desc: 'Signature de la convention de formation. Accompagnement sur les dispositifs de financement OPCO/PDC.' },
                { num: '04', title: 'Formation & certification', desc: "Déploiement chez vous. Passage de l'examen officiel de l'éditeur, voucher compris dans le prix du devis. Attestation remise à chaque participant." },
              ].map(s => (
                <div key={s.num} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderTop: '3px solid var(--g-red)', padding: '1.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                  <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.5rem' }}>{s.title}</h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="pres-grid-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>Caractéristiques</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {['Groupes de 4 à 15 participants','Formateur certifié dédié à votre groupe','Programme entièrement personnalisé','Formation dans vos locaux ou en salle retenue pour la session','Supports de cours officiels éditeurs inclus','Accès à Microsoft Learn — Cisco Networking Academy pour le CCNA v2.0 complet','Passage de la certification intégré au programme','Attestation de formation et de présence','Financement via OPCO ou plan de développement des compétences'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.70)' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Audit gratuit</h3>
                <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Contactez-nous pour un audit gratuit de vos besoins en formation. Nous vous proposons un programme et un devis sous 48 heures ouvrées.
                </p>
                <DelaisAcces dark />
              </div>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="/#contact" className="btn-ghost"><Mail size={16} /> Demander un devis sous 48 h ouvrées</a>
            </div>
          </div>
        </section>

        {/* ── Formations disponibles ── */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Formations disponibles en présentiel</h2>
            <div className="g-rule" />
            <FormationGrid />
          </div>
        </section>

        {/* ── Organisation pratique ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Organisation pratique</h2>
            <div className="g-rule" />
            <div className="pres-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Déroulement type d'une journée</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['09h00 — Accueil des participants','09h30 — Démarrage de la formation','11h00 — Pause (15 minutes)','11h15 — Reprise — ateliers pratiques','13h00 — Pause déjeuner (1 heure)','14h00 — Reprise — cas pratiques avancés','15h45 — Pause (15 minutes)','16h00 — Évaluation des acquis du jour','17h30 — Fin de journée'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48' }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--g-red)', flexShrink: 0, marginTop: '6px' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1rem' }}>Ce que nous apportons</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Supports de cours officiels éditeurs','Accès à la plateforme officielle de l\'éditeur — Microsoft Learn, ou Cisco Networking Academy pour le CCNA v2.0 complet','Simulateurs et environnements de test','Matériel pédagogique inclus','Attestation de formation et de présence','Convocation avec règlement intérieur','Passage de la certification éditeur intégré','Accompagnement post-formation si nécessaire'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.87rem', color: '#4a4a48' }}>
                      <CheckCircle size={16} color="#E41F26" style={{ flexShrink: 0, marginTop: '2px' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Conformité réglementaire ── */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Conformité réglementaire</h2>
            <div className="g-rule" />
            <div className="pres-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
              {[
                { ref: 'Art. L.6313-1', title: 'Action de formation en présentiel', desc: 'La formation en présentiel est une action de formation synchrone au sens du Code du travail. Le formateur et les stagiaires se trouvent physiquement dans le même lieu.' },
                { ref: 'Qualiopi — Ind. 4', title: 'Convocation et règlement intérieur', desc: 'Chaque stagiaire reçoit une convocation précisant les dates, lieux, horaires et le règlement intérieur avant le démarrage de la formation.' },
                { ref: 'Qualiopi — Ind. 19', title: 'Plateau technique et pédagogique', desc: 'Les équipements, simulateurs (Packet Tracer) et environnements de test sont mis à disposition avant le démarrage. Leur bon fonctionnement est vérifié au préalable.' },
                { ref: 'Critère 3 Qualiopi', title: 'Suivi individualisé', desc: 'Un suivi individualisé est mis en place pour chaque apprenant avec évaluation des acquis à chaque journée de formation et feuilles de présence signées.' },
                // Le volet handicap et les obligations réglementaires figuraient sur /foad et
                // /elearning mais pas ici : un auditeur qui ouvre la page Présentiel n'y
                // trouvait rien sur l'accessibilité. Ajouté le 29 octobre 2026, avec les
                // spécificités du présentiel — accessibilité du lieu, et non de la plateforme.
                { ref: 'Ind. 26 Qualiopi', title: 'Accessibilité et handicap', desc: "Référent handicap désigné : Franck PFLIEGER, certificat de Référent Handicap OF/CFA du 20 février 2023. Toute situation signalée donne lieu à un entretien préalable (article 13 des CGV). En présentiel, l'accessibilité du lieu retenu pour la session est vérifiée avant l'inscription, et la salle est changée si elle ne convient pas." },
                { ref: 'Ind. 26 — réseau', title: 'Aménagements et partenaires', desc: "Aménagement de la durée, des supports et des conditions de passage de l'examen, le cas échéant avec l'appui du réseau Ressource Handicap Formation et de l'Agefiph. Le détail des aménagements possibles est publié sur la page Accessibilité & Handicap." },
                { ref: 'Ind. 19 — preuves', title: 'Effectivité de la formation', desc: "Feuilles de présence signées par demi-journée, évaluation des acquis à chaque journée et compte rendu écrit, consignés au registre de suivi. Article 13 bis des CGV." },
                // L'indicateur 33 figurait ici par erreur : il ne vise que les actions de
                // formation par apprentissage (CFA), seule colonne cochée au décret. GALACTUS
                // Digital n'a pas d'apprentis. Remplacé par l'indicateur 31, qui est bien celui
                // du traitement des réclamations. Corrigé le 30 octobre 2026.
                { ref: 'RNQ V2 — déc. 2026-728', title: 'Référentiel National Qualité V2', desc: "Applicable au 1er novembre 2026, guide de lecture V10 d'octobre 2026. Les indicateurs 1, 2, 4, 8, 19, 26 et 31 sont documentés pour la modalité présentielle : information du public, indicateurs de résultats, analyse du besoin, conditions d'accès, moyens pédagogiques et référent, accessibilité et traitement des réclamations." },
              ].map(c => (
                <div key={c.ref} style={{ background: 'var(--g-white)', border: '1px solid rgba(187,187,187,0.3)', padding: '1.5rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', background: 'rgba(228,31,38,0.08)', padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>{c.ref}</div>
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

        {/* ── CTA global ── */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '100%', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-h2-light" style={{ marginBottom: '1rem' }}>Organiser votre formation en présentiel</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contactez-nous pour connaître les prochaines sessions disponibles ou organiser une session intra dédiée à votre équipe — depuis n'importe quel territoire.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+33781074746" className="btn-red"><Phone size={16} /> Nous appeler</a>
              <a href="/#contact" className="btn-ghost"><Mail size={16} /> Demander un devis</a>
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 900px) {
            .pres-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
            .pres-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .pres-grid-3, .pres-grid-2, .pres-grid-4 { grid-template-columns: 1fr !important; }
            main section { padding: 2.5rem 1rem !important; }
          }
        `}</style>

      <TroisModalites active="/presentiel" />
      </main>
      <Footer />
    </>
  )
}
