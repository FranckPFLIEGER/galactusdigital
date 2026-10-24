import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Phone, Mail, CheckCircle, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/handicap')({
  head: () => ({
    meta: [
      { title: 'Accessibilité & Handicap — GALACTUS Digital' },
      { name: 'description', content: "GALACTUS Digital s'engage pour l'accessibilité des formations IT. Référent handicap certifié, partenaires RHF, aménagements sur mesure dans les territoires ultramarins." },
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
                  accessibles nos formations, en présentiel comme à distance (FOAD),
                  et sommes en capacité de proposer des solutions personnalisées adaptées à chaque situation.
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
                    Également référent violences, harcèlement et discriminations de l'organisme
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
                  {[
                    { name: 'RHF Martinique — AGEFMA', zone: 'Caraïbes & Guyane', detail: 'Réseau partenaire officiel — conseiller RHF dédié' },
                    { name: 'RHF Île-de-France — Agefiph', zone: 'France hexagonale', detail: 'Réseau Handicap Formation — lettre d\'information et plateforme d\'autoformation' },
                    { name: 'AGEFIPH Antilles-Guyane', zone: 'Caraïbes & Guyane', detail: 'Financement et accompagnement — charte d\'engagement signée le 4 novembre 2024' },
                  ].map(p => (
                    <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.75rem 0', borderBottom: '1px solid rgba(187,187,187,0.25)' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--g-black)' }}>{p.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.2rem' }}>{p.detail}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.55rem', flexShrink: 0, marginLeft: '1rem', marginTop: '3px' }}>{p.zone}</div>
                    </div>
                  ))}
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
                  Notre plateforme FOAD (NetAcad, WEBEX) permet notamment aux personnes
                  à mobilité réduite de suivre nos formations certifiantes depuis leur domicile,
                  quelle que soit leur localisation aux Caraïbes, dans l'Océan Indien
                  ou en France hexagonale.
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
                  'Formations disponibles en FOAD pour les personnes à mobilité réduite',
                  'Supports de cours adaptables (grands caractères sur demande)',
                  'Sessions WEBEX avec sous-titrage possible',
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
