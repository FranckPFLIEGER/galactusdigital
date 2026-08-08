// Section "Transparence & Financement" — conforme à l'indicateur 1 du RNQ
// (décret n° 2026-728 du 1er août 2026, en vigueur au 1er novembre 2026).
// À importer dans une page (ex. Financements / Mentions légales) : <TransparenceSection />

export function TransparenceSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold text-[#1D1D1B]">
        Transparence de l’information &amp; financement
      </h2>
      <div className="mt-2 h-1 w-24 bg-[#E41F26]" />

      <p className="mt-6 text-[#1D1D1B]">
        Conformément au critère 1 du Référentiel National Qualité, GALACTUS Digital
        communique de manière claire, exacte et vérifiable sur l’ensemble de ses supports :
        prérequis et conditions d’accès, objectifs et modalités pédagogiques, durée, tarifs
        nets de taxe, délais d’accès et accessibilité aux personnes en situation de handicap.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-[#BBBBBB] p-5">
          <h3 className="font-semibold text-[#E41F26]">Modalités pédagogiques</h3>
          <p className="mt-2 text-sm text-[#1D1D1B]">
            Présentiel, formation à distance (FOAD) et e-learning tutoré. Inter-entreprise
            et intra-entreprise, sur le territoire national et ultramarin.
          </p>
        </div>

        <div className="rounded-lg border border-[#BBBBBB] p-5">
          <h3 className="font-semibold text-[#E41F26]">Modes de financement</h3>
          <p className="mt-2 text-sm text-[#1D1D1B]">
            Financement employeur, OPCO ou autofinancement. Nos formations ne sont pas
            éligibles au CPF. Les modalités de prise en charge sont précisées sur le devis.
          </p>
        </div>

        <div className="rounded-lg border border-[#BBBBBB] p-5">
          <h3 className="font-semibold text-[#E41F26]">Formations certifiantes</h3>
          <p className="mt-2 text-sm text-[#1D1D1B]">
            Intitulé et code de la certification, taux d’obtention et de réussite,
            validation par blocs de compétences, débouchés, suites de parcours et équivalences.
          </p>
        </div>
      </div>

      <p className="mt-8 text-sm text-[#1D1D1B]">
        <span className="font-semibold">Résultats :</span> 100 % de réussite parmi les
        présentés à l’examen · +500 apprenants formés en 3 ans · zéro échec.
      </p>

      <p className="mt-2 text-sm text-[#1D1D1B]">
        Aucune allégation trompeuse n’est diffusée. GALACTUS Digital s’inscrit dans le plan
        national de lutte contre la fraude à la formation.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/cgv.pdf"
          className="rounded bg-[#E41F26] px-5 py-2 text-sm font-semibold text-white"
        >
          Conditions Générales de Vente (PDF)
        </a>
        <a
          href="/reglement-interieur.pdf"
          className="rounded border border-[#1D1D1B] px-5 py-2 text-sm font-semibold text-[#1D1D1B]"
        >
          Règlement intérieur (PDF)
        </a>
      </div>
    </section>
  );
}

export default TransparenceSection;
