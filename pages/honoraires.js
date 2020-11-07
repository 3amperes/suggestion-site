import Head from 'next/head';
import Link from 'next/link';
import Hero from '@components/layout/Hero';
import NumberSection from '@components/layout/NumberSection';

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Suggestion • Honoraires</title>
      </Head>

      <Hero
        surTitle="Consultez"
        title="Nos honoraires"
        image="/images/honoraires/intro@2x.jpg"
      />

      <section className="mb-4xl">
        <div className="container">
          <div className="lg:max-w-540 mx-auto">
            <div className="text-center mb-3xl">
              <p className="surtitle">Vous souhaitez savoir</p>
              <h2>
                Combien vous coûtera la gestion locative <br /> de votre bien ?
              </h2>
              <p>
                Les honoraires de gestion locative se <br /> décomposent en
                plusieurs points précis et listés <br /> clairement dans votre
                mandat de gestion.
              </p>
            </div>
            <NumberSection
              number={1}
              title="Les honoraires de gestion courantes"
            >
              <p>
                Ils correspondent au taux de gestion conclu dans votre mandat,
                soit <strong className="text-pumpkin">7,20% TTC (6% ht)</strong>{' '}
                et comprennent les tâches courantes de gestion de votre bien.
              </p>
            </NumberSection>
            <NumberSection number={2} title="Les honoraires annexes">
              <p>
                Non compris dans le taux de gestion, ils correspondent à divers
                actes de gestion ponctuels et optionnels comme :
              </p>
              <table className="table-fixed w-full mt-xl">
                <thead>
                  <tr>
                    <th className="w-1/2">Prestation</th>
                    <th className="w-1/3 text-right">Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-lg border-b-2 border-silver">
                      Suivi des travaux (inclus jusqu’à 1000€)
                    </td>
                    <td className="text-right font-semibold border-b-2 border-silver">
                      6%TTC montant des travaux H.T
                    </td>
                  </tr>
                  <tr>
                    <td className="py-lg border-b-2 border-silver">
                      Suivi des sinistres
                    </td>
                    <td className="text-right font-semibold border-b-2 border-silver">
                      Vacation(s)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-lg border-b-2 border-silver">
                      Aide à la déclaration de vos revenus fonciers
                    </td>
                    <td className="text-right font-semibold border-b-2 border-silver">
                      1/2 vacation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-lg border-b-2 border-silver">
                      Suivi et contrôle de la réalisation des diagnostiques
                      techniques
                    </td>
                    <td className="text-right font-semibold border-b-2 border-silver">
                      1/2 vacation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-lg border-b-2 border-silver">
                      Dossiers administratifs (permis de louer, montage de
                      dossier de prêt ou de subvention, signification de congé
                      aux locataires (hors frais d’huissier)…)
                    </td>
                    <td className="text-right font-semibold border-b-2 border-silver">
                      Vacation(s)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-lg border-b-2 border-silver">
                      L’état des lieux de sortie (si hors mandat de gestion)
                    </td>
                    <td className="text-right font-semibold border-b-2 border-silver">
                      Vacation(s)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-lg border-b-2 border-silver">
                      Déclaration de TVA
                    </td>
                    <td className="text-right font-semibold border-b-2 border-silver">
                      200.00 €TTC
                    </td>
                  </tr>
                  <tr>
                    <td className="py-lg border-b-2 border-silver">
                      Représentation du bailleur en AG
                    </td>
                    <td className="text-right font-semibold border-b-2 border-silver">
                      Vacation(s)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-lg ">Vacation horaire</td>
                    <td className="text-right font-semibold">90.00 €TTC</td>
                  </tr>
                </tbody>
              </table>
            </NumberSection>
            <NumberSection
              number={3}
              title="Les honoraires de mise en location"
            >
              <p>
                Les honoraires « ALUR » sont facturés au montant d’un mois de
                loyer hors charge par partie (locataire et propriétaire) dans la
                limite des plafonds légaux dictés dans la loi du même nom du 24
                mars 2014.
              </p>
              <p>
                Ils comprennent les visites du bien, la constitution des
                dossiers de candidature, la rédaction du bail et l’état des
                lieux d’entrée.
              </p>
              <p>
                Les honoraires d’entremise et de négociation, correspondant à
                toutes les démarches de préparation de la location et les
                actions de commercialisation mises en place pour votre bien,
                vous seront facturées 45.00 € dans le cadre d’un mandat de
                location simple, et vous seront offerts dans le cadre d’un
                mandat de gestion.
              </p>
            </NumberSection>
            <NumberSection
              number={4}
              title="Les honoraires de rédaction d’acte"
            >
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th className="w-2/3 text-left surtitle border-b-2 border-silver py-xs">
                      Prestation
                    </th>
                    <th className="w-1/3 text-right surtitle border-b-2 border-silver py-xs">
                      Tarif
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-lg">
                      Rédaction d’actes (avenants ou renouvellements de baux)
                    </td>
                    <td className="text-right font-semibold">
                      250.00 €TTC par partie
                    </td>
                  </tr>
                </tbody>
              </table>
            </NumberSection>

            <div className="mt-4xl mb-3xl text-center">
              <p className="surtitle">Liste des</p>
              <h2>
                Informations légales
                <br /> et réglementaires
              </h2>
            </div>
            <NumberSection number={1} title="Garanties financières">
              Garantie Financière auprès de la société de caution mutuelle des
              professions immobilières et financières SO.CA.F, 26 avenue de
              Suffren 75015 PARIS.
            </NumberSection>
            <NumberSection number={2} title="RCP">
              RCP auprès de SAA, groupe SO.CA.F, 26 avenue de Suffren 75015
              PARIS.
            </NumberSection>
            <NumberSection number={3} title="Carte professionnelle">
              Carte professionnelle mention Gestion Immobilière n°&nbsp;
              <strong>CPI 3502 2020 000 045 197</strong> délivrée par la CCI
              d’Ille-et-Vilaine.
            </NumberSection>

            <div className="text-center mt-4xl">
              <p className="font-display">
                Vous souhaitez plus d’information <br /> ou un devis
                personnalisé ?
              </p>
              <p>
                <Link href="/contact">
                  <a className="btn">Contactez-nous</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4xl bg-paleGrey text-center ">
        <div className="max-w-520 mx-auto mb-3xl">
          <p className="surtitle">Vous êtes</p>
          <h2>Propriétaire investisseur ?</h2>
          <p>
            Vous souhaitez consulter notre offre de gestion locative et les
            avantages <br /> dont vous pouvez bénéficier ?
          </p>
          <p>
            <Link href="/gestion-locative">
              <a className="link">Notre offre de gestion locative</a>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
