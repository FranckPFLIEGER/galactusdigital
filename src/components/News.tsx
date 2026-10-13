import { useIntersection } from '../hooks/useIntersection'

const articles = [
  {
    date: 'Octobre 2026',
    title: "Référentiel National Qualité V2 : applicable au 1er novembre 2026, notre site est à jour",
    desc: "Le nouveau Référentiel National Qualité entre en vigueur le 1er novembre 2026 (décret n° 2026-728 du 1er août 2026, JO du 4 août) : 7 critères inchangés, 33 indicateurs. Trois exigences touchent directement l'information diffusée au public, et notre site a été repris en conséquence. Indicateur 2 : les modalités de calcul de chacun de nos indicateurs de résultats sont désormais publiées en clair, avec la pièce qui les justifie en audit — nombre de formés, taux de réussite parmi les candidats présentés, taux d'abandon, notes de satisfaction. Indicateur 3 : chaque fiche formation publie l'intitulé exact et le code de la certification visée, son statut d'enregistrement, le taux d'obtention, les possibilités de validation par blocs de compétences, les équivalences et passerelles, les suites de parcours et les débouchés. Indicateur 1 : aucune communication susceptible d'induire le public en erreur — nous écrivons explicitement quand une donnée n'est pas consolidée plutôt que de reporter un taux global, et nous ne publions aucun taux d'insertion faute de données vérifiables. L'indicateur 33, nouveau, ne vise que les CFA : GALACTUS Digital n'est pas concerné et met néanmoins en œuvre l'évaluation des enseignements (FQ-08c). Les deux arrêtés d'application et le nouveau guide de lecture restent attendus.",
    tag: 'Qualité',
    link: '/demarche-qualite',
    linkLabel: 'Voir notre démarche qualité',
  },
  {
    date: 'Octobre 2026',
    title: "Certifications professionnelles : deux dossiers déposés au Répertoire spécifique",
    desc: "GALACTUS Digital a déposé deux demandes d'enregistrement au Répertoire spécifique de France Compétences, en qualité d'organisme certificateur. Le dossier n° 53224 — « Mettre en œuvre, sécuriser et superviser une infrastructure réseau » — a été déposé sur CertifPro le 30 juillet 2026 et est en cours d'instruction. Le dossier n° 53693 — « Détecter, analyser et traiter les incidents de sécurité d'un système d'information » — a été déposé le 28 septembre 2026 et est également en cours d'instruction. Aucune de ces deux certifications n'est présentée comme enregistrée : leur statut réel est publié sur leur page dédiée et mis à jour à chaque étape. Elles sont par ailleurs distinctes du catalogue de formation, qui prépare des certifications d'éditeurs non éligibles au CPF. Le jury repose sur un vivier de cinq membres externes, dont trois sont tirés au sort par session, le président de l'organisme en étant statutairement exclu.",
    tag: 'Certification',
    link: '/certifications-rs',
    linkLabel: 'État des deux dossiers',
  },
  {
    date: 'Août 2026',
    title: "CCNA v2.0 : la plus grande refonte depuis 2020 — nos parcours sont à jour",
    desc: "Cisco fait évoluer l'examen CCNA 200-301 vers le blueprint v2.0 : la v1.1 reste disponible jusqu'au 2 février 2027, la v2.0 s'impose à partir du 3 février 2027. Ce qui change vraiment : une nouvelle section dédiée à l'IA dans les opérations réseau, le retour du troubleshooting — absent depuis 2020 et qui pèse désormais près de 30 % de l'examen — une automatisation modernisée autour d'Ansible et Terraform (Puppet et Chef sont retirés), et un allègement de la théorie au profit de la pratique. Nos fiches CCNA (ITN · SRWE · ENSA) et notre parcours accéléré CCNA v2.0 sont déjà alignés sur le programme officiel v7.02 et ses modules complémentaires v1.1, avec chaque nouveauté identifiée.",
    tag: 'Veille',
    link: '/formations/ccna-cisco',
    linkLabel: 'Voir le parcours CCNA v2.0',
  },
  {
    date: 'Août 2026',
    title: "Microsoft : MS-102 remplacé par AB-650 — notre catalogue est déjà aligné",
    desc: "Le référentiel officiel Microsoft (poster certifications, juillet 2026) confirme plusieurs évolutions majeures. MS-102 est retiré le 31 octobre 2026 et remplacé par AB-650 — Administering Microsoft 365 and AI Services : un seul examen, sans prérequis de certification, avec un périmètre élargi à Copilot et à la gouvernance des services IA. Autre point de vigilance, souvent mal appliqué : MS-102 était de niveau expert et exigeait une certification associate, l'ordre correct est donc AB-900 → MD-102 → AB-650. Nous avons également mis à jour AZ-802 (examen unique remplaçant AZ-800 et AZ-801, certification renommée Windows Server Administrator Associate) et intégré la nouvelle certification SC-500 — Cloud and AI Security Engineer.",
    tag: 'Veille',
    link: '/formations',
    linkLabel: 'Voir le catalogue Microsoft',
  },
  {
    date: 'Août 2026',
    title: "Décret 2026-728 : publication au Journal officiel du nouveau référentiel qualité",
    desc: "Le décret n° 2026-728 du 1er août 2026, publié au Journal officiel du 4 août 2026 (NOR TRSD2619632D), actualise le Référentiel National Qualité : 33 indicateurs, 7 critères inchangés, entrée en vigueur le 1er novembre 2026. Les critères les plus touchés sont les critères 1, 2 et 6. GALACTUS Digital avait anticipé ces exigences dès juillet 2026 — procédure violences, harcèlement et discriminations (FQ-14), procédure de prévention et de traitement des ruptures de parcours (FQ-15), évaluation des enseignements (FQ-08c) — et a figé ces documents en kit qualité V2026.3 après la parution. Les CGV ont été complétées d'un article 12 bis consacré à la transparence de l'information et aux modalités de financement.",
    tag: 'Qualité',
    link: '/demarche-qualite',
    linkLabel: 'Voir notre démarche qualité',
  },
  {
    date: 'Juin 2019',
    title: "ARCEP — L'état d'internet en France",
    desc: "Rapport d'activité de l'ARCEP (Tome 3) sur l'état d'internet en France, incluant la transition vers l'IPv6 — une veille de référence sur les enjeux d'infrastructure réseau.",
    tag: 'Veille',
    image: '/actu/arcep-internet-2019.png',
    pdf: '/docs/arcep-internet-2019.pdf',
  },
  {
    date: '2019',
    title: "Rapport IPv6 Council Martinique",
    desc: "Rapport d'activité du IPv6 Council Martinique — atelier réunissant les opérateurs télécoms de la Caraïbe française pour accélérer le déploiement de l'IPv6. GALACTUS Digital en est membre actif via l'association ASPIK.",
    tag: 'Rapport',
    image: '/actu/ipv6-council-report-2019.png',
    pdf: '/docs/ipv6-council-report-2019.pdf',
  },
  {
    date: 'Presses des Mines · 2018',
    title: "Big Data et visibilité en ligne",
    desc: "Ouvrage collectif publié en 2018 aux Presses des Mines (dir. C. Alcantara, F. Charest, S. Agostinelli), issu du colloque international tenu en 2017 à l'Université des Antilles en Martinique. Franck PFLIEGER y apporte un éclairage professionnel sur les technologies du Big Data. Un enjeu pluridisciplinaire de l'économie numérique — informatique, juridique, communication et gestion.",
    tag: 'Publication',
    image: '/actu/bigdata-visibilite.png',
    link: 'https://www.pressesdesmines.com/produit/big-data-et-visibilite-en-ligne/',
    linkLabel: "Découvrir l'ouvrage (éditeur)",
  },
    {
    date: '2017',
    title: "Métiers du numérique dans les territoires ultramarins",
    desc: "Étude de l'Observatoire Régional de l'Emploi et de la Formation sur les métiers du numérique — un contexte dans lequel GALACTUS Digital accompagne la montée en compétences.",
    tag: 'Étude',
    image: '/actu/metiers-numerique.png',
    pdf: '/docs/metiers-numerique.pdf',
  },
  {
    date: 'Juillet 2016',
    title: "Création du IPv6 Council Martinique",
    desc: "Communiqué officiel du IPv6 Forum annonçant la fondation du IPv6 Council Martinique, sous la présidence de notre fondateur, en collaboration avec l'écosystème télécom de la Caraïbe française.",
    tag: 'Communiqué',
    image: '/actu/ipv6-council-2016.png',
    pdf: '/docs/ipv6-council-2016.pdf',
  },
]

export function News() {
  const { ref, isVisible } = useIntersection()
  return (
    <section className="news-section" id="actualites" ref={ref}>
      <div className="section-inner">
        <span className={`section-label reveal${isVisible ? ' visible' : ''}`}>
          Actualités &amp; Veille IT
        </span>
        <div className={`g-rule${isVisible ? ' g-rule-anim visible' : ' g-rule-anim'}`} />
        <h2 className={`section-h2 reveal${isVisible ? ' visible' : ''} delay-1`}>
          Veille réglementaire<br />&amp; technologique
        </h2>
        <p className={`section-body reveal${isVisible ? ' visible' : ''} delay-2`}
          style={{ marginBottom: '3rem' }}>
          Deux fronts : le cadre réglementaire de la formation professionnelle, dont le Référentiel
          National Qualité entré dans sa version 2 au 1<sup>er</sup> novembre 2026, et les référentiels
          des éditeurs dont nous préparons les certifications. S'y ajoutent nos publications et nos
          travaux menés avec l'association ASPIK dans les territoires ultramarins.
        </p>
        <div className="news-grid">
          {articles.map((a, i) => (
            <div
              key={a.title}
              className={`news-card reveal${isVisible ? ' visible' : ''}`}
              style={{ animationDelay: `${0.08 * i + 0.2}s` }}
            >
              <div className="news-tag">{a.tag}</div>
              {a.image && (
                <div className="news-image">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
              )}
              <div className="news-date">{a.date}</div>
              <h3 className="news-title">{a.title}</h3>
              <p className="news-desc">{a.desc}</p>
              {a.pdf && (
                <a
                  className="news-doc-link"
                  href={a.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulter le document (PDF) &rarr;
                </a>
              )}
              {a.link && (
                <a
                  className="news-doc-link"
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.linkLabel || 'En savoir plus'} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
