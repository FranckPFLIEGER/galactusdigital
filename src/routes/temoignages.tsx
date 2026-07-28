import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Quote } from 'lucide-react'

export const Route = createFileRoute('/temoignages')({
  component: TemoignagesPage,
})

// ─────────────────────────────────────────────────────────────────────────────
// VIDÉOS TV — passages médias régionaux
// Pour activer une vidéo : renseigner `src` avec le chemin du fichier dans
// /public/videos/  (ex: '/videos/2016_06_20_ATV_IPv6.mp4')
// et éventuellement `poster` avec une vignette dans le même dossier.
// Tant que `src` est vide (''), la carte affiche « Bientôt disponible ».
// ─────────────────────────────────────────────────────────────────────────────
const videosTV = [
  {
    titre: 'Reportage Cybersécurité',
    chaine: 'Martinique 1ère',
    date: '20 nov. 2015',
    src: '/videos/tv-2015-cyber-martinique1ere.mp4',
    poster: '/videos/tv-2015-cyber-martinique1ere-poster.jpg',
  },
  {
    titre: 'Reportage IPv6',
    chaine: 'ATV Martinique',
    date: '20 juin 2016',
    src: '/videos/tv-2016-ipv6-atv.mp4',
    poster: '/videos/tv-2016-ipv6-atv-poster.jpg',
  },
  {
    titre: 'Reportage Cybersécurité',
    chaine: 'ATV Martinique',
    date: '29 nov. 2016',
    src: '/videos/tv-2016-cyber-atv.mp4',
    poster: '/videos/tv-2016-cyber-atv-poster.jpg',
  },
  {
    titre: 'Reportage Cybersécurité',
    chaine: 'Martinique 1ère',
    date: '14 nov. 2017',
    src: '/videos/tv-2017-cyber-martinique1ere.mp4',
    poster: '/videos/tv-2017-cyber-martinique1ere-poster.jpg',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// TÉMOIGNAGE VIDÉO — apprenant certifié
// ─────────────────────────────────────────────────────────────────────────────
const temoignageVideo = {
  titre: 'Formation IPv6 — juin 2016',
  lieu: 'Martinique · Hôtel Cap Est',
  src: '/videos/tem-ipv6-cap-est-2016.mp4',
  poster: '/videos/tem-ipv6-cap-est-2016-poster.jpg',
}

// ─────────────────────────────────────────────────────────────────────────────
// TÉMOIGNAGES ÉCRITS — issus de lettres de recommandation réelles
// Signature RGPD : initiales prénom·nom + fonction + entreprise + lieu
// ─────────────────────────────────────────────────────────────────────────────
const temoignagesEcrits = [
  {
    initiales: 'P.B.',
    fonction: 'Directeur & responsable des systèmes d’information',
    entreprise: 'Biolab Martinique',
    lieu: 'Martinique',
    formation: 'Cybersécurité',
    annee: '2018',
    texte:
      "L'étendue de la formation Cybersécurité, dispensée à plein temps pendant une semaine, a permis à notre ingénieur d'acquérir de solides bases théoriques et pratiques. Le professionnalisme, la rigueur et la pédagogie des intervenants ont été essentiels, avec des applications concrètes dès le retour en entreprise : analyse RGPD, audit de sécurité interne, évaluation des fournisseurs. Je recommande fortement cette formation.",
  },
  {
    initiales: 'J-H.T.',
    fonction: 'Responsable des opérations clients',
    entreprise: 'IDOM',
    lieu: 'Martinique',
    formation: 'CCNA',
    annee: '2020',
    texte:
      "Un grand merci pour la qualité de l'enseignement et la pédagogie. Nos collaborateurs ont été certifiés CCNA les uns après les autres, avec des résultats à la hauteur de leur investissement. L'accompagnement a confirmé toutes nos attentes.",
  },
  {
    initiales: 'C-A.H.',
    fonction: 'Directeur des systèmes d’information',
    entreprise: 'Collectivité Territoriale de Martinique',
    lieu: 'Martinique',
    formation: 'Réseaux',
    annee: '2015',
    texte:
      "Je tiens à faire part de ma satisfaction quant à la qualité, à la fois pédagogique et technique, des interventions réalisées pour la collectivité. Nous espérons poursuivre cette relation de qualité.",
  },
  {
    initiales: 'A.A.',
    fonction: 'Responsable Réseau de Transport',
    entreprise: 'Digicel Antilles-Guyane',
    lieu: 'Martinique',
    formation: 'Cisco Service Provider',
    annee: '2018',
    texte:
      "La formation Cisco Service Provider correspondait à la fois au cursus certifiant et à nos besoins spécifiques. Les moyens mis en œuvre — laboratoires virtuels — et l'expertise reconnue du formateur ont permis à l'ensemble du public de suivre, malgré des niveaux différents. Une formation à recommander.",
  },
  {
    initiales: 'G.L.B.',
    fonction: 'Chef de projet',
    entreprise: 'Learning Tribes',
    lieu: 'Paris',
    formation: 'Formation réseau & IT',
    annee: '2017',
    texte:
      "Beaucoup de pédagogie et une écoute constante des apprenants pour leur transmettre savoir et expertise en informatique et réseau. L'efficacité du travail et les qualités humaines ont été unanimement appréciées, tant par le client final que par l'équipe projet. Nous recommandons fortement ses services.",
  },
  {
    initiales: 'F.G.',
    fonction: 'Responsable Support & Help Desk',
    entreprise: 'Air France — Direction Générale SI',
    lieu: 'Paris',
    formation: 'Formation réseau',
    annee: '2019',
    texte:
      "Mission de formateur réseau menée à bien pour une population d'agents en horaires décalés : préparation du plan de formation, création des contenus et des modules, ateliers techniques de mise en pratique et évaluation continue des compétences. Un atout majeur de la réussite du projet, avec un professionnalisme sans faille.",
  },
  {
    initiales: 'B.H.',
    fonction: 'Responsable technique',
    entreprise: 'SFR Business',
    lieu: 'Paris',
    formation: 'Pilotage de projets réseau',
    annee: '2022',
    texte:
      "Curieux, responsable, très impliqué et doté d'un esprit critique et de synthèse. Un moteur qui aime les challenges, sachant travailler en parfaite autonomie tout au long de ses missions. Nous le recommandons vivement pour sa connaissance pointue du secteur.",
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
              Ils ont choisi GALACTUS Digital pour leurs formations et certifications IT. Voici ce qu'ils en disent —
              des professionnels des territoires ultramarins et de France hexagonale qui ont transformé
              leur carrière grâce à un accompagnement de qualité.
            </p>
          </div>
        </section>

        {/* Vidéos TV */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Médias
            </span>
            <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Ils parlent de nous</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.95rem', color: '#5a5a58', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '600px' }}>
              GALACTUS Digital et ses formations certifiantes IT dans les territoires ultramarins ont été mis en avant
              par les médias régionaux. Retrouvez ici nos passages TV et interventions presse.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1.5rem' }}>
              {videosTV.map((v, i) => (
                <div key={i} style={{ background: 'var(--g-black)', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ aspectRatio: '16/9', background: '#1a1a18' }}>
                    {v.src ? (
                      <video
                        controls
                        preload="metadata"
                        poster={v.poster || undefined}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      >
                        <source src={v.src} type="video/mp4" />
                        Votre navigateur ne prend pas en charge la lecture vidéo.
                      </video>
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                          Bientôt disponible
                        </span>
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.25rem' }}>
                      {v.titre}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)' }}>
                      {v.chaine} · {v.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignage vidéo apprenant */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem', borderTop: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>
              Témoignage vidéo
            </span>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.5rem,2.4vw,2.2rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
              La parole à nos apprenants
            </h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,640px) 1fr', gap: '2.5rem', alignItems: 'center', marginTop: '2rem' }}>
              <div style={{ background: '#000', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <video
                  controls
                  preload="metadata"
                  poster={temoignageVideo.poster}
                  style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
                >
                  <source src={temoignageVideo.src} type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.3rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', marginBottom: '0.5rem' }}>
                  {temoignageVideo.titre}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--g-red)', fontWeight: 600, marginBottom: '1rem' }}>
                  {temoignageVideo.lieu}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
                  Un apprenant revient sur la formation IPv6 dispensée par GALACTUS Digital en Martinique,
                  et sur ce que cette montée en compétence a changé dans sa pratique professionnelle.
                </p>
              </div>
            </div>
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
            <p style={{ fontSize: '0.85rem', color: '#9a9a98', lineHeight: 1.7, marginTop: '1rem', marginBottom: '0.5rem', maxWidth: '620px', fontStyle: 'italic' }}>
              Extraits de lettres de recommandation et de retours clients réels. Les noms sont abrégés en
              initiales conformément au RGPD ; entreprises et territoires sont cités avec l'accord des signataires.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {temoignagesEcrits.map((t, i) => (
                <div key={i} style={{ background: 'var(--g-offwhite)', border: '1px solid rgba(187,187,187,0.3)', borderLeft: '4px solid var(--g-red)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Quote size={28} color="rgba(228,31,38,0.25)" />
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#4a4a48', margin: 0, fontStyle: 'italic' }}>
                    "{t.texte}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)' }}>
                        {t.initiales} — {t.fonction}
                      </div>
                      <div style={{ fontSize: '0.80rem', color: '#888', marginTop: '0.2rem' }}>
                        {t.entreprise} — {t.lieu}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.65rem', marginBottom: '0.3rem' }}>
                        {t.formation}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#888' }}>
                        {t.annee}
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '2rem', textAlign: 'center' }}>
              {[
                { num: '4,8/5', label: 'Note satisfaction', sub: 'Moyenne 2024' },
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
