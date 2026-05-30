import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Shield, Lock, Eye, Trash2, Download, Mail } from 'lucide-react'

export const Route = createFileRoute('/rgpd')({
  component: RgpdPage,
})

function RgpdPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Légal</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Protection des données<br />personnelles — RGPD
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.8 }}>
              GALACTUS Digital s'engage à protéger vos données personnelles conformément
              au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)
              et à la loi Informatique et Libertés n° 78-17 du 6 janvier 1978.
            </p>
          </div>
        </section>

        {/* Vos droits */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Vos droits sur vos données</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: <Eye size={22} color="white" />, title: 'Droit d\'accès', desc: 'Vous pouvez à tout moment demander à consulter l\'ensemble des données personnelles que nous détenons vous concernant.' },
                { icon: <Shield size={22} color="white" />, title: 'Droit de rectification', desc: 'Vous pouvez demander la correction de toute donnée inexacte ou incomplète vous concernant.' },
                { icon: <Trash2 size={22} color="white" />, title: 'Droit à l\'effacement', desc: 'Vous pouvez demander la suppression de vos données dans les conditions prévues par la réglementation.' },
                { icon: <Lock size={22} color="white" />, title: 'Droit à la limitation', desc: 'Vous pouvez demander la limitation du traitement de vos données dans certaines circonstances.' },
                { icon: <Download size={22} color="white" />, title: 'Droit à la portabilité', desc: 'Vous pouvez demander à recevoir vos données dans un format structuré et lisible par machine.' },
                { icon: <Mail size={22} color="white" />, title: 'Droit d\'opposition', desc: 'Vous pouvez vous opposer au traitement de vos données à des fins de prospection commerciale.' },
              ].map(d => (
                <div key={d.title} style={{ border: '1px solid rgba(187,187,187,0.4)', borderTop: '3px solid var(--g-red)', padding: '1.75rem' }}>
                  <div style={{ width: '42px', height: '42px', background: 'var(--g-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {d.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '0.5rem' }}>{d.title}</h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#5a5a58', margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Détail des traitements */}
        <section style={{ background: 'var(--g-black)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2-light">Nos traitements de données</h2>
            <div className="g-rule" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  titre: 'Données de gestion des formations',
                  base: 'Exécution du contrat',
                  donnees: 'Nom, prénom, email, téléphone, entreprise, données de parcours de formation, résultats aux évaluations.',
                  duree: 'Durée nécessaire à l\'appréciation de la formation, puis archivage légal.',
                  dest: 'GALACTUS Digital, éditeurs certifiant (Cisco, Microsoft, CompTIA, etc.), OPCO le cas échéant.',
                },
                {
                  titre: 'Données de satisfaction et d\'amélioration continue',
                  base: 'Intérêt légitime',
                  donnees: 'Appréciations de formation, notes de satisfaction, commentaires qualitatifs.',
                  duree: '3 ans à compter de la fin de la formation.',
                  dest: 'GALACTUS Digital uniquement.',
                },
                {
                  titre: 'Données de contact et de prospection',
                  base: 'Consentement ou intérêt légitime',
                  donnees: 'Nom, prénom, email professionnel, entreprise, demandes de contact.',
                  duree: '3 ans à compter du dernier contact.',
                  dest: 'GALACTUS Digital uniquement.',
                },
                {
                  titre: 'Données de navigation (cookies)',
                  base: 'Consentement',
                  donnees: 'Adresse IP anonymisée, pages visitées, durée de visite.',
                  duree: '13 mois maximum.',
                  dest: 'GALACTUS Digital — hébergeur Cloudflare Pages.',
                },
              ].map(t => (
                <div key={t.titre} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '0.5rem' }}>{t.titre}</div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'var(--g-red)', padding: '0.15rem 0.6rem', display: 'inline-block' }}>{t.base}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.4rem' }}>Données collectées</div>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{t.donnees}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--g-red)', marginBottom: '0.4rem' }}>Durée · Destinataires</div>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: '0 0 0.5rem' }}>{t.duree}</p>
                    <p style={{ fontSize: '0.80rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.35)', margin: 0, fontStyle: 'italic' }}>{t.dest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsable + contact */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Responsable du traitement & contact</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div style={{ background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '1.25rem' }}>
                  Responsable du traitement
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.70)' }}>
                  <div><strong style={{ color: '#fff' }}>Organisme :</strong> GALACTUS Digital</div>
                  <div><strong style={{ color: '#fff' }}>Responsable :</strong> Franck PFLIEGER</div>
                  <div><strong style={{ color: '#fff' }}>Siège :</strong> 66 avenue des Champs Élysées, 75008 Paris</div>
                  <div><strong style={{ color: '#fff' }}>Email :</strong> <a href="mailto:president@galactusdigital.com" style={{ color: 'var(--g-red)' }}>president@galactusdigital.com</a></div>
                  <div><strong style={{ color: '#fff' }}>Téléphone :</strong> +33 07 81 07 47 46</div>
                  <div><strong style={{ color: '#fff' }}>SIRET :</strong> 880 430 418 00017</div>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--g-black)', marginBottom: '1.25rem' }}>
                  Exercer vos droits
                </h3>
                <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Pour exercer vos droits ou pour toute question relative au traitement de vos données personnelles,
                  contactez-nous par email ou par courrier à l'adresse du siège social.
                </p>
                <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois
                  à compter de sa réception. En cas de demande complexe, ce délai peut être prolongé
                  de deux mois supplémentaires.
                </p>
                <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
                  Si vous estimez que vos droits ne sont pas respectés, vous disposez du droit
                  d'introduire une réclamation auprès de la CNIL :
                  <br />
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--g-red)' }}>www.cnil.fr</a> —
                  3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
                </p>
                <a href="mailto:president@galactusdigital.com" className="btn-red" style={{ fontSize: '0.85rem' }}>
                  <Mail size={15} /> Exercer mes droits
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Transferts hors UE */}
        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-h2" style={{ marginBottom: '0.5rem' }}>Transferts hors Union Européenne</h2>
            <div className="g-rule" />
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1rem' }}>
              Ce site est hébergé par <strong>Cloudflare Pages</strong> (États-Unis). Cloudflare est certifié
              Data Privacy Framework (DPF), garantissant un niveau de protection adéquat des données
              transférées vers les États-Unis.
            </p>
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1rem' }}>
              La plateforme pédagogique <strong>Cisco NetAcad</strong> est opérée par Cisco Systems (États-Unis),
              dont les traitements sont encadrés par des clauses contractuelles types approuvées par la Commission européenne.
            </p>
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48' }}>
              Aucune autre donnée n'est transférée en dehors de l'Union Européenne.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

