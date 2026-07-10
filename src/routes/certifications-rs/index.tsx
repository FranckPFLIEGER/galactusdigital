import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ArrowRight, Award, Clock } from 'lucide-react'

export const Route = createFileRoute('/certifications-rs/')({
  head: () => ({
    meta: [
      { title: 'Certifications professionnelles RS — GALACTUS Digital' },
      { name: 'description', content: "Les certifications professionnelles de GALACTUS Digital en cours d'enregistrement au Répertoire spécifique de France Compétences. Organisme certificateur des territoires ultramarins." },
      { property: 'og:title', content: 'Certifications professionnelles RS — GALACTUS Digital' },
      { property: 'og:description', content: "Certifications RS France Compétences délivrées par GALACTUS Digital dans les territoires ultramarins." },
      { property: 'og:url', content: 'https://galactusdigital.com/certifications-rs' },
    ],
  }),
  component: CertificationsRSHub,
})

// ─── Liste des certifications RS ──────────────────────────────────────────────
// Pour ajouter une nouvelle certification RS : dupliquer une entrée ci-dessous,
// puis créer la page correspondante dans src/routes/certifications-rs/<slug>.tsx
type StatutRS = 'enregistree' | 'en-cours'

interface CertifRS {
  slug: string
  titre: string
  resume: string
  domaine: string
  statut: StatutRS
  codeRS?: string
}

const CERTIFICATIONS_RS: CertifRS[] = [
  {
    slug: 'infrastructure-reseau',
    titre: 'Mettre en œuvre, sécuriser et superviser une infrastructure réseau',
    resume: "Installer, configurer, sécuriser et superviser une infrastructure réseau d'entreprise. Compétence indépendante des constructeurs, pensée pour les territoires ultramarins.",
    domaine: 'Réseaux · NSF 326',
    statut: 'en-cours',
  },
  // ── Prochaines certifications RS (à venir) ──
  // {
  //   slug: 'cyberops',
  //   titre: 'Détecter et répondre aux incidents de cybersécurité',
  //   resume: '...',
  //   domaine: 'Cybersécurité · NSF 326',
  //   statut: 'en-cours',
  // },
]

const STATUT_LABEL: Record<StatutRS, string> = {
  'enregistree': 'Enregistrée au RS',
  'en-cours': "En cours d'enregistrement",
}

function CertificationsRSHub() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section style={{ background: 'var(--g-black)', padding: '3.5rem 2rem 3rem', borderBottom: '4px solid var(--g-red)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'var(--g-red)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '0.4rem 0.8rem', fontFamily: 'var(--font-title)' }}>
              Répertoire spécifique — France Compétences
            </span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.15, margin: '1.2rem 0 1rem' }}>
              Nos certifications professionnelles
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '820px' }}>
              GALACTUS Digital (PFLIEGER SASU) conçoit des certifications professionnelles destinées au Répertoire spécifique de France Compétences, au service de la montée en compétences IT dans les territoires ultramarins.
            </p>
          </div>
        </section>

        {/* ── Liste des certifications ── */}
        <section style={{ padding: '3rem 2rem 4rem', background: 'var(--g-offwhite, #F7F7F6)' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem' }}>
              {CERTIFICATIONS_RS.map(c => (
                <a
                  key={c.slug}
                  href={`/certifications-rs/${c.slug}`}
                  style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--g-line, #E4E4E4)', borderTop: '3px solid var(--g-red)', padding: '1.75rem', textDecoration: 'none', transition: 'box-shadow 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <span style={{ background: 'var(--g-red)', color: '#fff', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Award size={20} />
                    </span>
                    <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.statut === 'enregistree' ? 'var(--g-red)' : 'var(--g-grey, #6B6B6B)' }}>
                      {STATUT_LABEL[c.statut]}{c.codeRS ? ` · ${c.codeRS}` : ''}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--g-black)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.25, margin: '0 0 0.75rem' }}>
                    {c.titre}
                  </h2>
                  <p style={{ color: '#444', lineHeight: 1.7, fontSize: '0.92rem', margin: '0 0 1.25rem', flex: 1 }}>
                    {c.resume}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--g-line, #E4E4E4)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--g-grey, #6B6B6B)', fontSize: '0.82rem' }}>
                      <Clock size={14} /> {c.domaine}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--g-red)', fontWeight: 600, fontSize: '0.85rem', fontFamily: 'var(--font-title)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Voir la fiche <ArrowRight size={15} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
