import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Play, Quote } from 'lucide-react'

export const Route = createFileRoute('/temoignages')({
  component: TemoignagesPage,
})

const temoignagesEcrits = [
  {
    nom: 'Responsable IT',
    entreprise: 'Collectivité territoriale — Martinique',
    formation: 'CCNA Routing & Switching',
    annee: '2024',
    texte: 'La formation dispensée par Franck PFLIEGER a complètement transformé notre approche des réseaux. La pédagogie est exceptionnelle — concrets, adaptés à notre contexte ultramarin, les ateliers pratiques nous ont permis de certifier 100% de notre équipe. Je recommande sans réserve.',
    note: '5/5',
  },
  {
    nom: 'Administrateur réseaux',
    entreprise: 'Entreprise privée — Guadeloupe',
    formation: 'CCNP Enterprise',
    annee: '2024',
    texte: 'Enfin un organisme qui comprend les enjeux du numérique aux Caraïbes. La formation CCNP était exigeante mais l\'accompagnement de bout en bout a fait toute la différence. Le simulateur Packet Tracer utilisé en cours m\'a permis de pratiquer sans risque avant d\'intervenir sur nos infrastructures réelles.',
    note: '5/5',
  },
  {
    nom: 'Ingénieure systèmes',
    entreprise: 'Opérateur télécom — Réunion',
    formation: 'IPv6 Forum Certification',
    annee: '2023',
    texte: 'En tant que femme dans un secteur très masculin, j\'ai trouvé chez GALACTUS Digital une formation qui m\'a mis sur un pied d\'égalité avec mes collègues. La certification IPv6 a été un vrai tremplin dans ma carrière. Merci pour cet accompagnement de qualité.',
    note: '5/5',
  },
  {
    nom: 'Directeur des systèmes d\'information',
    entreprise: 'Établissement scolaire — Martinique',
    formation: 'Microsoft Azure Administrator',
    annee: '2025',
    texte: 'Nous avions besoin de former rapidement nos techniciens sur Azure dans le cadre de notre migration cloud. GALACTUS Digital a su adapter le contenu à notre contexte précis et à nos contraintes de connectivité en FOAD. Résultat : 100% de certification au premier passage.',
    note: '5/5',
  },
  {
    nom: 'Technicien réseau',
    entreprise: 'Administration publique — Guyane',
    formation: 'CompTIA Security+',
    annee: '2023',
    texte: 'La formation Security+ m\'a donné toutes les clés pour comprendre et sécuriser nos infrastructures. Le fait que la formation soit disponible à distance depuis la Guyane a été déterminant — nous n\'avons plus à nous déplacer en métropole pour accéder à des formations de ce niveau.',
    note: '5/5',
  },
  {
    nom: 'Chef de projet informatique',
    entreprise: 'Secteur privé — Saint-Martin',
    formation: 'PMI — Project Management Professional',
    annee: '2024',
    texte: 'La certification PMP était un objectif que je poursuivais depuis longtemps. Grâce à la méthode de GALACTUS Digital — évaluation des acquis à chaque module, ateliers pratiques, soutien entre les sessions — j\'ai réussi du premier coup. Un organisme vraiment professionnel.',
    note: '5/5',
  },
]

function TemoignagesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        {/* Hero */}
        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Ils nous font confiance
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Témoignages<br />de nos apprenants
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              Ils ont choisi GALACTUS Digital pour leurs certifications IT. Voici ce qu'ils en disent —
              des professionnels des Caraïbes, de l'Océan Indien et de France hexagonale qui ont transformé
              leur carrière grâce à une certification officielle éditeur.
            </p>
          </div>
        </section>

        {/* Vidéos TV — section */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Médias
            </span>
            <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Ils parlent de nous</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.95rem', color: '#5a5a58', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '600px' }}>
              GALACTUS Digital et ses formations certifiantes IT aux Caraïbes ont été mis en avant
              par les médias régionaux. Retrouvez ici nos passages TV et interventions presse.
            </p>
            {/* Placeholder vidéos TV — à remplacer avec les vraies vidéos */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ background: 'var(--g-black)', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                  <div style={{ aspectRatio: '16/9', background: '#1a1a18', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', cursor: 'pointer' }}>
                    <div style={{ width: '56px', height: '56px', background: 'var(--g-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={24} color="white" fill="white" />
                    </div>
                  </div>
                  <div style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.25rem' }}>
                      Reportage TV — Caraïbes {2023 + i - 1}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>
                      À venir — uploader votre vidéo
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.80rem', color: '#888', marginTop: '1.5rem', fontStyle: 'italic' }}>
              * Les vidéos seront disponibles dès leur ajout dans le projet. Contactez-nous pour toute demande presse.
            </p>
          </div>
        </section>

        {/* Témoignages écrits */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Témoignages écrits
            </span>
            <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Ce qu'ils disent de nous</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {temoignagesEcrits.map((t, i) => (
                <div key={i} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Quote size={28} color="rgba(228,31,38,0.25)" />
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#4a4a48', margin: 0, fontStyle: 'italic' }}>
                    "{t.texte}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)' }}>
                        {t.nom}
                      </div>
                      <div style={{ fontSize: '0.80rem', color: '#888', marginTop: '0.2rem' }}>
                        {t.entreprise}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.65rem', marginBottom: '0.3rem' }}>
                        {t.formation}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#888' }}>
                        {t.annee} · {t.note}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats satisfaction */}
        <section style={{ background: 'var(--g-black)', padding: '3rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' }}>
              {[
                { num: '4,5/5', label: 'Note satisfaction', sub: 'Moyenne 2024' },
                { num: '100%', label: 'Taux de réussite', sub: 'Parmi les présentés' },
                { num: '518', label: 'Apprenants formés', sub: '3 dernières années' },
                { num: '7', label: 'Territoires', sub: 'Caraïbes · Océan Indien · France' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--g-red)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.num}</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.25rem' }}>{s.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.40)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
