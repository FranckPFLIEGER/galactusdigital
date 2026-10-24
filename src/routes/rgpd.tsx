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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: <Eye size={22} color="white" />, title: 'Droit d\'accès', desc: 'Vous pouvez à tout moment demander à consulter l\'ensemble des données personnelles que nous détenons vous concernant.' },
                { icon: <Shield size={22} color="white" />, title: 'Droit de rectification', desc: 'Vous pouvez demander la correction de toute donnée inexacte ou incomplète vous concernant.' },
                { icon: <Trash2 size={22} color="white" />, title: 'Droit à l\'effacement', desc: 'Vous pouvez demander la suppression de vos données dans les conditions prévues par la réglementation.' },
                { icon: <Lock size={22} color="white" />, title: 'Droit à la limitation', desc: 'Vous pouvez demander la limitation du traitement de vos données dans certaines circonstances.' },
                { icon: <Download size={22} color="white" />, title: 'Droit à la portabilité', desc: 'Vous pouvez demander à recevoir vos données dans un format structuré et lisible par machine.' },
                { icon: <Mail size={22} color="white" />, title: 'Droit d\'opposition', desc: 'Vous pouvez vous opposer au traitement de vos données à des fins de prospection commerciale.' },
                { icon: <Lock size={22} color="white" />, title: 'Retrait du consentement', desc: 'Lorsque le traitement repose sur votre consentement — lettre d\'information et prospection — vous pouvez le retirer à tout moment, par le lien de désinscription de chaque message ou sur simple demande, sans que cela remette en cause la licéité du traitement déjà effectué.' },
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
                  titre: 'Demande de devis et d\'information',
                  base: 'Mesures précontractuelles',
                  donnees: "Nom, prénom, email, téléphone, profil (particulier ou entreprise), entreprise, territoire, "
                    + "modalité et formation souhaitées, prise en charge envisagée, description du projet.",
                  duree: "3 ans à compter du dernier contact, sauf entrée en formation : le dossier bascule alors "
                    + "dans le traitement « gestion des formations » ci-dessous.",
                  dest: "GALACTUS Digital. Sous-traitant : Web3Forms (relais technique du formulaire, qui transmet "
                    + "la demande à la messagerie de l'organisme). La messagerie professionnelle est opérée par "
                    + "Google (Google Workspace / Gmail).",
                },
                {
                  titre: 'Données de gestion des formations',
                  base: 'Exécution du contrat',
                  donnees: 'Nom, prénom, email, téléphone, entreprise, données de parcours de formation, résultats aux évaluations.',
                  duree: '3 ans pour les dossiers pédagogiques (Art. R6352-9 Code du travail). 5 ans pour les pièces comptables.',
                  dest: "GALACTUS Digital, éditeurs certifiant (Cisco Networking Academy, Microsoft, Juniper Networks), "
                    + "OPCO, France Travail ou tout autre financeur du dossier. Sous-traitants : Cisco Webex "
                    + "(classes virtuelles, émargement et historique de connexion), Google Workspace (messagerie "
                    + "et stockage des dossiers).",
                },
                {
                  titre: 'Données de satisfaction et d\'amélioration continue',
                  base: 'Intérêt légitime',
                  donnees: 'Appréciations de formation, notes de satisfaction, commentaires qualitatifs.',
                  duree: '3 ans à compter de la fin de la formation.',
                  dest: 'GALACTUS Digital uniquement.',
                },
                {
                  titre: 'Prospection et lettre d\'information',
                  base: 'Consentement (prospect) ou intérêt légitime (client)',
                  donnees: "Nom, prénom, email professionnel, entreprise, fonction, historique d'ouverture et de clic "
                    + "des messages envoyés.",
                  duree: "3 ans à compter du dernier contact. Chaque message comporte un lien de désinscription, "
                    + "dont l'usage vaut retrait immédiat du consentement.",
                  dest: "GALACTUS Digital. Sous-traitant : Brevo (Sendinblue SAS, France) pour l'envoi et le suivi "
                    + "des campagnes — données hébergées dans l'Union européenne.",
                },
                {
                  titre: 'Navigation sur le site',
                  base: 'Intérêt légitime (sécurité et disponibilité du service)',
                  donnees: "Journaux techniques de l'hébergeur : adresse IP, horodatage, ressource demandée. "
                    + "Le site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience ni de publicité ; "
                    + "les polices de caractères sont auto-hébergées et aucune ressource n'est appelée sur un "
                    + "serveur tiers. Aucun consentement n'a donc à être recueilli.",
                  duree: "Selon la politique de conservation des journaux de l'hébergeur.",
                  dest: 'PFLIEGER SASU (GALACTUS Digital) — hébergeur Cloudflare, Inc.',
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
            <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', marginTop: '1.5rem' }}>
              <strong style={{ color: '#fff' }}>Caractère obligatoire ou facultatif — </strong>
              Les champs signalés comme obligatoires dans nos formulaires et nos dossiers d'inscription
              sont nécessaires soit à l'exécution du contrat de formation, soit au respect d'une
              obligation légale de l'organisme (registre de suivi, attestations, pièces d'audit).
              À défaut, l'inscription ou la demande ne peut être traitée. Les autres champs sont
              facultatifs et leur absence n'a aucune conséquence.
            </p>
          </div>
        </section>

        {/* Responsable + contact */}
        <section style={{ background: 'var(--g-offwhite)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 className="section-h2">Responsable du traitement & contact</h2>
            <div className="g-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '3rem' }}>
              <div style={{ background: 'var(--g-black)', borderLeft: '4px solid var(--g-red)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '0.90rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', marginBottom: '1.25rem' }}>
                  Responsable du traitement
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.70)' }}>
                  <div><strong style={{ color: '#fff' }}>Responsable du traitement :</strong> PFLIEGER SASU, société par actions simplifiée unipersonnelle exerçant sous l'enseigne GALACTUS Digital</div>
                  <div><strong style={{ color: '#fff' }}>Représentant légal :</strong> Franck PFLIEGER, Président</div>
                  <div><strong style={{ color: '#fff' }}>Délégué à la protection des données :</strong> aucun DPO désigné — l'organisme n'entre dans aucun des cas de désignation obligatoire de l'article 37 du RGPD. Les demandes sont traitées par le représentant légal.</div>
                  <div><strong style={{ color: '#fff' }}>Siège :</strong> 66 avenue des Champs-Élysées, 75008 Paris</div>
                  <div><strong style={{ color: '#fff' }}>Email :</strong> <a href="mailto:president@galactusdigital.com" style={{ color: 'var(--g-red)' }}>president@galactusdigital.com</a></div>
                  <div><strong style={{ color: '#fff' }}>Téléphone :</strong> +33 7 81 07 47 46</div>
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
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', marginBottom: '1.5rem' }}>
              Les transferts ci-dessous sont les seuls mis en œuvre par l'organisme. Chacun est
              encadré soit par une décision d'adéquation de la Commission européenne (Data Privacy
              Framework, décision du 10 juillet 2023), soit par les clauses contractuelles types
              approuvées par la Commission.
            </p>
            {[
              {
                nom: 'Cloudflare, Inc. (États-Unis)',
                role: "Hébergement du site et journaux techniques de connexion.",
                cadre: 'Data Privacy Framework.',
              },
              {
                nom: 'Web3Forms (États-Unis)',
                role: "Relais technique du formulaire de demande de devis : le service reçoit les champs "
                  + "du formulaire et les transmet à la messagerie de l'organisme, sans les exploiter "
                  + "pour son propre compte.",
                cadre: 'Clauses contractuelles types.',
              },
              {
                nom: 'Google LLC — Google Workspace (États-Unis)',
                role: "Messagerie professionnelle et stockage des dossiers de formation.",
                cadre: 'Data Privacy Framework.',
              },
              {
                nom: 'Cisco Systems, Inc. (États-Unis)',
                role: "Plateforme pédagogique Cisco Networking Academy et classes virtuelles Webex : "
                  + "compte apprenant, progression, résultats aux évaluations, historique de connexion.",
                cadre: 'Clauses contractuelles types.',
              },
            ].map(t => (
              <div key={t.nom} style={{ borderLeft: '3px solid var(--g-red)', paddingLeft: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--g-black)', marginBottom: '0.3rem' }}>{t.nom}</div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: '#4a4a48', margin: 0 }}>{t.role}</p>
                <p style={{ fontSize: '0.80rem', lineHeight: 1.6, color: '#888', margin: '0.2rem 0 0', fontStyle: 'italic' }}>Encadrement : {t.cadre}</p>
              </div>
            ))}
            <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48' }}>
              Les <strong>polices de caractères</strong> du site sont auto-hébergées sur notre propre
              domaine : leur affichage n'entraîne aucune requête vers Google Fonts, ni aucune
              transmission d'adresse IP à Google. L'envoi de nos campagnes d'information est confié à
              <strong> Brevo</strong> (Sendinblue SAS), dont les données sont hébergées dans l'Union
              européenne. En dehors des quatre transferts listés ci-dessus, aucune donnée n'est
              transférée hors de l'Union européenne.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}


