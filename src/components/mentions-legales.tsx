import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/mentions-legales')({
  component: MentionsLegalesPage,
})

function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <section style={{ background: 'var(--g-black)', borderBottom: '3px solid var(--g-red)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.70rem', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--g-red)', display: 'block', marginBottom: '0.6rem' }}>Légal</span>
            <h1 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>
              Mentions légales,<br />CGV & Protection des données
            </h1>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/certificat-qualiopi.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '0.78rem' }}>
                <ExternalLink size={14} /> Certificat Qualiopi PDF
              </a>
              <a href="/reglement-interieur.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '0.78rem' }}>
                <ExternalLink size={14} /> Règlement intérieur PDF
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--g-white)', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>

            {/* Mentions légales */}
            <div id="mentions" className="legal-section">
              <h2 className="legal-h2">Mentions légales</h2>
              <div className="legal-block">
                <h3 className="legal-h3">Éditeur du site</h3>
                <p><strong>Raison sociale :</strong> GALACTUS Digital</p>
                <p><strong>Forme juridique :</strong> Organisme de formation professionnelle</p>
                <p><strong>Siège social :</strong> 66 avenue des Champs Élysées, 75008 Paris</p>
                <p><strong>Centre de formation Martinique :</strong> Pointe Madeleine — CAP EST, 97240 Le François</p>
                <p><strong>Centre de formation Guadeloupe :</strong> Pointe de la Verdure, Gosier 97190</p>
                <p><strong>SIRET :</strong> 880 430 418 00017</p>
                <p><strong>NDA :</strong> 11 75 59933 75</p>
                <p><strong>Certification Qualiopi :</strong> ICPF — Accréditation n° 5-0616 (portée disponible sur www.cofrac.fr)</p>
                <p><strong>TVA :</strong> Non applicable — Article 293B du CGI</p>
                <p><strong>Directeur de publication :</strong> Franck PFLIEGER</p>
                <p><strong>Contact :</strong> galactusdigital@gmail.com — +33 07 81 07 47 46</p>
              </div>
              <div className="legal-block">
                <h3 className="legal-h3">Hébergement</h3>
                <p>Ce site est hébergé par Cloudflare Pages — 101 Townsend St, San Francisco, CA 94107, USA.</p>
              </div>
            </div>

            {/* CGV */}
            <div id="cgv" className="legal-section" style={{ marginTop: '3rem' }}>
              <h2 className="legal-h2">Conditions Générales de Vente</h2>
              <p style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '2rem' }}>
                Conformément aux articles L. 6316-1 et suivants du Code du travail. — Version en vigueur au 1er janvier 2025.
              </p>

              {[
                {
                  num: '1', title: 'Désignation',
                  content: `GALACTUS Digital est un organisme de formation professionnelle spécialisé dans les métiers du digital. Siège social : 66 avenue des Champs Élysées, 75008 Paris. Centres de formation : Pointe Madeleine — CAP EST, 97240 Le François (Martinique) et Pointe de la Verdure, Gosier 97190 (Guadeloupe). SIRET : 880 430 418 00017 — NDA : 11 75 59933 75. GALACTUS Digital conçoit, élabore et dispense des formations inter-entreprises et intra-entreprises, à Paris et sur l'ensemble du territoire national et ultramarin, seule ou en partenariat.`,
                },
                {
                  num: '2', title: 'Objet',
                  content: `Les présentes CGV s'appliquent à l'ensemble des prestations de formation engagées par GALACTUS Digital. Le fait de s'inscrire ou de passer commande implique l'adhésion entière et sans réserve aux présentes CGV, qui prévalent sur tout autre document du Client.`,
                },
                {
                  num: '3', title: 'Conditions financières, règlements et modalités de paiement',
                  content: `Tous les prix sont indiqués en euros TTC. La TVA est non applicable en raison de l'article 293B du CGI. Le règlement est à effectuer à l'issue de la formation, à réception de facture, au comptant, sans escompte. En cas de règlement par l'OPCO, l'accord de financement doit être communiqué au moment de l'inscription. En cas de prise en charge partielle par l'OPCO, la différence sera directement facturée au Client. Toute somme non payée à échéance entraîne des pénalités d'un montant égal à une fois et demie le taux d'intérêt légal.`,
                },
                {
                  num: '4', title: 'Dédit et remplacement d\'un participant',
                  content: `En cas de dédit signifié au moins 7 jours avant le démarrage, GALACTUS Digital offre la possibilité de repousser l'inscription à une session ultérieure ou de remplacer le stagiaire par un autre participant ayant le même profil, sous réserve de l'accord éventuel de l'OPCO.`,
                },
                {
                  num: '5', title: 'Annulation, absence ou interruption',
                  content: `Tout module commencé est dû dans son intégralité. Frais d'annulation : aucun si plus de 15 jours ouvrables avant le démarrage — 500€ TTC entre 15 et 7 jours ouvrables — 100% du prix TTC si moins de 7 jours ouvrables avant le démarrage.`,
                },
                {
                  num: '6', title: 'Information et gestion des réclamations et des aléas',
                  content: `Les modalités de recours en cas de réclamation sont indiquées sur la convocation. En début de formation, les modalités de traitement des difficultés sont expliquées aux apprenants. Les réclamations peuvent être formulées individuellement (entretien physique, WEBEX, mail ou téléphone) pour respecter la dignité des apprenants. Un PV est établi et une réunion organisée en cas de difficulté grave. Après la formation, les modalités de réclamation sont proposées sur le document d'appréciation.`,
                },
                {
                  num: '7', title: 'Horaires et accueil',
                  content: `Durée quotidienne : 7 heures. À Paris : 09h30-13h00 et 14h00-17h30 avec pauses. Pour les formations en région et dans les DOM, les lieux, adresses et horaires sont indiqués sur la convocation. Les locaux accueillent les stagiaires de 09h00 à 18h00.`,
                },
                {
                  num: '8', title: 'Effectif et ajournement',
                  content: `Les inscriptions sont prises en compte dans leur ordre d'arrivée. Seuls les devis dûment renseignés, datés, tamponnés, signés et revêtus de la mention "Bon pour accord" ont valeur contractuelle. GALACTUS Digital peut ajourner une formation au plus tard une semaine avant la date prévue si le nombre de participants est insuffisant, sans indemnités.`,
                },
                {
                  num: '9', title: 'Devis, convention et attestation',
                  content: `Pour chaque action, un devis et une convention sont adressés en deux exemplaires. À l'issue de la formation, GALACTUS Digital remet une attestation de formation au stagiaire ainsi qu'une attestation de présence au Client.`,
                },
                {
                  num: '10', title: 'Obligations et force majeure',
                  content: `GALACTUS Digital est tenue à une obligation de moyen et non de résultat. Elle ne pourra être tenue responsable en cas de force majeure : maladie ou accident d'un intervenant, grèves externes, désastres naturels, incendies, interruption des télécommunications, de l'approvisionnement en énergie ou des transports.`,
                },
                {
                  num: '11', title: 'Propriété intellectuelle',
                  content: `L'ensemble des supports pédagogiques, quelle qu'en soit la forme, constituent des œuvres originales protégées par la propriété intellectuelle. Le Client et le stagiaire s'interdisent de les reproduire, transmettre ou exploiter sans accord exprès de GALACTUS Digital.`,
                },
                {
                  num: '12', title: 'Descriptif et programme des formations',
                  content: `Les contenus des programmes sont fournis à titre indicatif. L'intervenant se réserve le droit de les modifier en fonction de l'actualité ou du niveau des participants. Les indicateurs qualité (nombre de formés, taux de satisfaction, taux de réussite) sont communiqués sur le plan de formation.`,
                },
                {
                  num: '13', title: 'Conditions d\'accueil des publics en situation de handicap',
                  content: `GALACTUS Digital s'attache à permettre l'accès à ses formations à tous les publics. Référent Handicap certifié : Franck PFLIEGER — 07 81 07 47 46 — galactusdigital@gmail.com. Partenaires : RHF Martinique (AGEFMA), RHF Île-de-France, AGEFIPH Antilles Guyane. Un entretien préalable est organisé pour toute situation de handicap signalée afin d'identifier les adaptations nécessaires.`,
                },
                {
                  num: '14', title: 'Délai d\'accès à la formation',
                  content: `Le délai d'accès est défini sur le devis lors de la sollicitation client. Délai standard : 1 mois après la signature du devis et de la convention. Délai avec financement OPCO : 3 mois en fonction des règles de prise en charge. Pour les formations intra-entreprise, le délai est déterminé avec le responsable de formation du client.`,
                },
                {
                  num: '15', title: 'Confidentialité',
                  content: `GALACTUS Digital s'engage à ne pas communiquer à des tiers les informations transmises par le Client, sauf aux partenaires de formation et aux OPCO. Le Client autorise GALACTUS Digital à le citer comme référence dans ses listes et propositions commerciales.`,
                },
                {
                  num: '16', title: 'Protection des données personnelles',
                  content: `Conformément à la loi n° 78-17 du 6 janvier 1978 et au RGPD, le stagiaire dispose d'un droit d'accès, de modification et de rectification de ses données personnelles. Contact : 66 avenue des Champs Élysées, 75008 Paris ou galactusdigital@gmail.com. Les données sont conservées pour la durée nécessaire à l'appréciation de la formation.`,
                },
                {
                  num: '17', title: 'Droit applicable et juridiction',
                  content: `Les présentes CGV sont régies par le droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les Tribunaux de Paris sont seuls compétents.`,
                },
                {
                  num: '18', title: 'Sollicitation des appréciations',
                  content: `En fin de formation, les appréciations des apprenants et de leur hiérarchie sont recueillies le dernier jour. Une relance est effectuée 15 jours après. Une sollicitation à froid est envoyée 2 mois après la formation pour mesurer l'impact sur le poste de travail, avec relance tous les 15 jours en cas de non-retour.`,
                },
              ].map(article => (
                <div key={article.num} className="legal-article">
                  <h3 className="legal-h3">Article {article.num} — {article.title}</h3>
                  <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48' }}>{article.content}</p>
                </div>
              ))}
            </div>

            {/* RGPD */}
            <div id="rgpd" className="legal-section" style={{ marginTop: '3rem' }}>
              <h2 className="legal-h2">Protection des données — RGPD</h2>
              <div className="legal-block">
                <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48' }}>
                  Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et de portabilité de vos données personnelles.
                </p>
                <p style={{ fontSize: '0.90rem', lineHeight: 1.8, color: '#4a4a48', marginTop: '1rem' }}>
                  <strong>Responsable du traitement :</strong> GALACTUS Digital — 66 avenue des Champs Élysées, 75008 Paris<br />
                  <strong>Contact :</strong> galactusdigital@gmail.com<br />
                  <strong>Finalité :</strong> Suivi des parcours de formation et amélioration de l'offre pédagogique<br />
                  <strong>Durée de conservation :</strong> Durée nécessaire à l'appréciation de la formation<br />
                  <strong>Droit de réclamation :</strong> Vous pouvez adresser une réclamation à la CNIL — www.cnil.fr
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

