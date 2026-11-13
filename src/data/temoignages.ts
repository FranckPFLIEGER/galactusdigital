// ─────────────────────────────────────────────────────────────────────────────
// TÉMOIGNAGES — SOURCE UNIQUE DE VÉRITÉ
//
// Extrait de routes/temoignages.tsx le 13/11/2026, quand ces paroles ont
// commencé à être lues à deux endroits : la page dédiée et la section de
// l'accueil. Recopier un verbatim dans un composant aurait créé deux versions
// d'une même phrase consentie — et c'est exactement ce qui finit par diverger.
//
// RÈGLE : aucun verbatim ne s'écrit ailleurs que dans ce fichier. Ce qui
// s'affiche ailleurs vient d'un import. Les conditions de consentement, de
// source et de coupure consignées ci-dessous voyagent avec la donnée : elles
// ne valent rien si elles restent dans un fichier que personne n'ouvre.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// PARCOURS DE RECONVERSION — trois apprenantes, documentées par Cisco
//
// Tout le reste de cette page donne la parole à des ACHETEURS (DSI,
// responsables, chefs de projet). Ces trois parcours sont les seuls où une
// APPRENANTE dit ce que la formation a changé pour elle : c'est ce que mesure
// l'enquête à froid de l'article 19 des CGV, et c'est ce qu'un prescripteur
// cherche à lire.
//
// La Cisco Networking Academy a sollicité l'organisme pour documenter ces
// parcours et les a repris dans ses propres supports de communication.
//
// ⚠️ UNE APPRENANTE N'EST NOMMÉE QU'AVEC SON ACCORD ÉCRIT.
// L'accord est recueilli parcours par parcours : l'apprenante lit le texte
// exact qui sera publié, répond par écrit, et peut faire retirer la page à tout
// moment sans se justifier. L'accord donné en son temps à Cisco pour SA
// publication ne vaut pas pour celle-ci — finalité différente, responsable de
// traitement différent.
//   • Parcours 1 — accord de l'intéressée du 24/10/2026 par courriel, en
//     réponse au texte exact reproduit ci-dessous. Courriel archivé au dossier.
//     Poste rectifié par elle le même jour, après lecture de la page en ligne :
//     courriel de rectification également archivé. L'intéressée prime sur le
//     support de communication de l'éditeur.
//   • Parcours 2 et 3 — accord non encore recueilli : ni nom, ni initiales.
//     Elles sont identifiées par le métier qu'elles quittaient, qui est le sujet
//     même de l'histoire. Pour les nommer : recueillir l'accord d'abord,
//     renseigner `nom` et `entreprise` ensuite. Jamais l'inverse.
// Noms, employeurs et pièces figurent au dossier et sont communicables en audit.
//
// SOURCE DES CITATIONS — à relire avant toute retouche :
//   http://netacad.eu/fr/5014/impact-pour-les-etudiants-et-parcours-professionnels.html
//   (page Cisco Networking Academy France, retirée depuis ; copie archivée au
//   dossier de l'organisme). Les citations sont reprises MOT POUR MOT. Une
//   coupure interne se marque par […] : deux passages distincts d'un même
//   entretien ne sont jamais recollés en une phrase continue.
//   Les photographies publiées par Cisco ne sont PAS reprises : le droit à
//   l'image fait l'objet d'une autorisation distincte, non recueillie à ce jour.
// ─────────────────────────────────────────────────────────────────────────────
export const RECONVERSION_PERIODE = '2013 à 2019'

export const reconversions = [
  {
    nom: 'Paula Q.',
    entreprise: 'Air France — Direction Générale des Systèmes d\'Information',
    // Poste corrigé le 24/10/2026 par l'intéressée elle-même : l'étude de cas
    // Cisco la présentait comme gestionnaire de ressources, qui était sa
    // fonction AU MOMENT de la formation. Le poste auquel la formation menait
    // était analyste d'exploitation à la supervision réseaux — tenu quatre ans,
    // avant une évolution vers le support et la maintenance IT. C'est sa
    // correction qui fait foi, pas le support de communication.
    avantMetier: 'Vingt ans personnel navigant commercial',
    versMetier: 'Analyste d\'exploitation — supervision réseaux',
    formation: 'Cisco Networking Academy',
    parcours:
      'Aucune connaissance préalable en informatique, et une mobilité interne vers la ' +
      'direction des systèmes d\'information d\'une compagnie aérienne, d\'abord sur un poste ' +
      'de gestionnaire de ressources. Le cursus est repris depuis les fondamentaux — usage du ' +
      'clavier, câblage — puis alterne théorie et travaux pratiques avec l\'appui du formateur, ' +
      'jusqu\'aux compétences réseau visées par le poste.',
    resultat:
      'Analyste d\'exploitation à la supervision réseaux, poste tenu quatre ans, avant une ' +
      'évolution vers le support et la maintenance IT. En chemin, elle démonte et remonte un ' +
      'poste de travail en quatorze minutes devant ses collègues.',
    // TEXTE CONSENTI, à ne pas retoucher. C'est mot pour mot ce que
    // l'intéressée a lu avant de donner son accord le 24/10/2026. Il diffère de
    // l'étude de cas Cisco par un adverbe (« se reconvertir » au lieu de « se
    // reconvertir professionnellement ») : on publie ce qu'elle a approuvé, pas
    // une version « plus exacte » qu'elle n'a pas relue.
    citation:
      'Je ne croyais pas vraiment pouvoir faire ce virage à 180 degrés à mon âge, et pourtant ' +
      'la Cisco Networking Academy a rendu cela possible. Si j\'avais un message à délivrer, et notamment aux ' +
      'femmes qui souhaitent se reconvertir : croyez en vous et n\'écoutez pas ce qui se dit ' +
      'autour de vous. Nous avons toutes et tous un potentiel caché, il suffit de se lancer !',
  },
  {
    avantMetier: 'École de commerce, consultante en société de services',
    versMetier: 'Consultante technique — missions chez un industriel',
    formation: 'CCNA',
    parcours:
      'Des missions devenues de plus en plus techniques, et le besoin d\'un socle ' +
      'technologique solide pour continuer à évoluer. Formation suivie en e-learning, le soir ' +
      'et le week-end, sans agenda imposé.',
    resultat:
      'Un savoir-faire reconnu dans son entreprise, où la certification Cisco est valorisée, ' +
      'et l\'accès à des missions techniques qu\'elle n\'aurait pas pu prendre auparavant.',
    // Segment continu de l'entretien, simplement tronqué à la fin.
    citation:
      'Aujourd\'hui, je dispose d\'un réel savoir-faire qui me met sur un pied d\'égalité avec ' +
      'mes collègues, ce qui est très important dans un univers très majoritairement masculin. ' +
      'Je regrette même de ne pas avoir suivi cette formation plus tôt car j\'aurais sûrement ' +
      'progressé plus vite.',
  },
  {
    avantMetier: 'Études de langues étrangères, support en CDD',
    versMetier: 'Technicienne communications unifiées — en CDI',
    formation: 'CCNA — premier module',
    parcours:
      'Un poste de support en visioconférence décroché après des études de langues, et un ' +
      'CDI conditionné à des compétences techniques que sa formation initiale ne donnait pas. ' +
      'Révisions en autonomie, pour l\'essentiel le dimanche, avec un formateur joignable.',
    resultat:
      'Le CDI obtenu, et l\'ouverture vers un poste de technicienne en communications ' +
      'unifiées via les niveaux supérieurs du programme.',
    // Deux passages distincts de l'entretien d'origine, séparés par […] : ils ne
    // se suivaient pas. Les recoller sans marquer la coupure fabriquerait une
    // phrase qu'elle n'a pas prononcée d'un trait.
    citation:
      'J\'avoue qu\'avant de démarrer le cursus, ça me paraissait impossible car je ne ' +
      'possédais pas de connaissances technologiques particulières. […] Finalement, je ' +
      'reconnais que je suis plutôt fière de moi car ma formation initiale ne m\'aurait pas ' +
      'permis d\'envisager cette évolution professionnelle.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// TÉMOIGNAGES ÉCRITS — issus de lettres de recommandation réelles
// Signature RGPD : initiales prénom·nom + fonction + entreprise + lieu
// ─────────────────────────────────────────────────────────────────────────────
export const temoignagesEcrits = [
  {
    initiales: 'P.B.',
    fonction: 'Directeur & responsable des systèmes d\'information',
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
    fonction: 'Directeur des systèmes d\'information',
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
