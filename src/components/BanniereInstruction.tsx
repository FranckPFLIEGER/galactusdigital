// ─────────────────────────────────────────────────────────────────────────────
// BanniereInstruction.tsx — Message public à l'attention des instructeurs et
// auditeurs de France Compétences chargés d'examiner les deux dossiers de
// certification déposés par GALACTUS Digital au Répertoire spécifique.
//
// Objet : donner, sur le site public, l'état exact des deux dossiers et les
// engagements de l'organisme déposant — sans allégation anticipée
// d'enregistrement (indicateur 1 du RNQ V2 : aucune communication susceptible
// d'induire le public en erreur ; art. L.6113-6 du code du travail).
//
// Deux formats :
//   <BanniereInstruction />            → bandeau complet (pages RS, qualité)
//   <BanniereInstruction compact />    → bandeau court (page d'accueil)
// ─────────────────────────────────────────────────────────────────────────────

import { ShieldCheck, FileCheck2, ArrowRight } from 'lucide-react'

const DOSSIERS = [
  {
    titre: 'Mettre en œuvre, sécuriser et superviser une infrastructure réseau',
    ref: 'Dossier n° 53224',
    depot: 'Déposé sur CertifPro le 30 juillet 2026',
    statut: "En cours d'instruction",
    href: '/certifications-rs/infrastructure-reseau',
  },
  {
    titre: "Détecter, analyser et traiter les incidents de sécurité d'un système d'information",
    ref: 'Dossier n° 53693',
    depot: 'Déposé sur CertifPro le 28 septembre 2026',
    statut: "En cours d'instruction",
    href: '/certifications-rs/incidents-securite',
  },
]

const ENGAGEMENTS = [
  'Aucune des deux certifications n\'est présentée comme enregistrée : leur statut exact est publié sur leur page dédiée et mis à jour à chaque étape de la procédure.',
  'Aucune offre de GALACTUS Digital n\'est publiée sur Mon Compte Formation et aucune formation du catalogue n\'est éligible au CPF. Le catalogue de formation prépare des certifications d\'éditeurs, distinctes des deux certifications déposées.',
  'Le jury de certification est constitué d\'un vivier de cinq membres externes, dont trois sont tirés au sort par session ; le président de l\'organisme en est statutairement exclu.',
  'Les données de promotions, attestations de besoin employeur et pièces d\'évaluation déposées à l\'appui des dossiers sont consignées au registre de suivi de l\'organisme et justifiables sur pièces.',
  'L\'organisme est certifié Qualiopi par Certifopac (accréditation Cofrac n° 5-0620, certificat n° 951711-1) et applique le Référentiel National Qualité dans sa version issue du décret n° 2026-728 du 1er août 2026.',
]

export function BanniereInstruction({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section style={{
        background: 'var(--g-black)',
        borderTop: '3px solid var(--g-red)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '1.5rem 2rem',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
        }}>
          <div style={{
            width: '40px', height: '40px', background: 'var(--g-red)', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FileCheck2 size={20} color="#fff" />
          </div>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{
              fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--g-red)',
              marginBottom: '0.3rem',
            }}>
              À l'attention de France Compétences
            </div>
            <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.65 }}>
              Deux dossiers de certification professionnelle déposés par GALACTUS Digital sont
              en cours d'examen au Répertoire spécifique. Leur statut exact, les pièces publiques
              et nos engagements de non-anticipation d'enregistrement sont publiés sur nos pages
              dédiées.
            </p>
          </div>
          <a href="/certifications-rs" className="btn-red" style={{ flexShrink: 0 }}>
            État des dossiers <ArrowRight size={15} />
          </a>
        </div>
      </section>
    )
  }

  return (
    <section
      id="instruction-france-competences"
      style={{
        background: 'var(--g-black)',
        borderTop: '4px solid var(--g-red)',
        borderBottom: '4px solid var(--g-red)',
        padding: '3rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <ShieldCheck size={16} color="#E41F26" />
          <span style={{
            fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--g-red)',
          }}>
            Message à l'attention des instructeurs et auditeurs de France Compétences
          </span>
        </div>

        <h2 className="section-h2-light" style={{ marginBottom: '0.5rem' }}>
          État des deux dossiers de certification déposés
        </h2>
        <div className="g-rule" />

        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, maxWidth: '860px', margin: '0 0 2rem' }}>
          PFLIEGER SASU — enseigne GALACTUS Digital (SIRET 880 430 418 00017, NDA 11 75 59933 75,
          certifié Qualiopi par Certifopac sous le certificat n° 951711-1) a déposé deux demandes
          d'enregistrement au Répertoire spécifique. Cette page publie leur état réel, à
          destination des services instructeurs comme du public, afin qu'aucune communication de
          l'organisme ne puisse être lue comme une allégation d'enregistrement acquis.
          L'instructeur désigné par France Compétences est notre interlocuteur unique jusqu'à
          décision ; toute pièce complémentaire est transmise par le portail CertifPro dans les
          délais impartis.
        </p>

        {/* Les deux dossiers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          {DOSSIERS.map(d => (
            <a
              key={d.ref}
              href={d.href}
              style={{
                display: 'block', textDecoration: 'none',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: '3px solid var(--g-red)',
                padding: '1.5rem',
              }}
            >
              <div style={{
                display: 'inline-block',
                fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#fff', background: 'var(--g-red)', padding: '0.2rem 0.6rem',
                marginBottom: '0.75rem',
              }}>
                {d.statut}
              </div>
              <div style={{
                fontFamily: 'var(--font-title)', fontSize: '0.92rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.03em', color: '#fff',
                lineHeight: 1.35, marginBottom: '0.6rem',
              }}>
                {d.titre}
              </div>
              <div style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.50)', lineHeight: 1.6 }}>
                {d.ref}<br />{d.depot}
              </div>
              <div style={{
                marginTop: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                fontFamily: 'var(--font-title)', fontSize: '0.68rem', fontWeight: 700,
                letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--g-red)',
              }}>
                Consulter la fiche publique <ArrowRight size={13} />
              </div>
            </a>
          ))}
        </div>

        {/* Engagements */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '1.75rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-title)', fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
            marginBottom: '1rem',
          }}>
            Nos engagements pendant l'examen des dossiers
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {ENGAGEMENTS.map((e, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7 }}>
                <div style={{ width: '5px', height: '5px', background: 'var(--g-red)', flexShrink: 0, marginTop: '8px' }} />
                {e}
              </li>
            ))}
          </ul>
        </div>

        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, margin: '1.5rem 0 0', maxWidth: '860px' }}>
          Contact unique pour toute demande relative à ces dossiers : Franck PFLIEGER, président et
          responsable de la certification — president@galactusdigital.com — +33 7 81 07 47 46.
          Les référentiels d'activités, de compétences et d'évaluation, les modalités d'épreuves
          et la composition du jury sont communiqués sur demande dans leur version déposée.
        </p>
      </div>
    </section>
  )
}

export default BanniereInstruction
