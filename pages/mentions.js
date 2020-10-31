import Head from 'next/head';
import Hero from '@components/layout/Hero';
import NumberSection from '@components/layout/NumberSection';
import Services from '@components/layout/Services';

export default function Mentions() {
  return (
    <div>
      <Head>
        <title>Suggestion • Mention Légales</title>
      </Head>

      <Hero surTitle="Prenez connaissance de nos" title="Mentions légales" />

      <section className="mb-4xl">
        <div className="container">
          <div className="lg:max-w-540 mx-auto">
            <NumberSection number={1} title="Suggestion">
              <p>
                SARL au capital de 2500€. domiciliée au 14 Quai de Richemont
                35000 RENNES. Tél. 06 88 30 14 15 | site internet :
                www.suggestion-conseil.fr Siret : 88328472100015 Représentant
                légal : Maxime POUSSAIN
              </p>
            </NumberSection>
            <NumberSection number={2} title="Édition, conception">
              <p>
                Design : Romain Desgranges <br /> Développement : Jérôme Boileux{' '}
                <br /> Crédit photo : Romain Desgranges <br /> Rédactionnel :
                Maxime Poussain
              </p>
            </NumberSection>
            <NumberSection number={3} title="Hébergement">
              <p>Netlify</p>
            </NumberSection>
            <NumberSection number={4} title="Contenu du site">
              <p>
                Les informations contenues sur le site www.suggestion-conseil.fr
                ont un caractère strictement informatif, cette société se
                réserve le droit d’en modifier le contenu.
              </p>
              <p>
                Le contenu du site (textes, images, sons, graphismes, documents
                téléchargeables…) sont la propriété exclusive de SUGGESTION. Le
                contenu des actualités est non contractuel et fourni à titre
                informatif.
              </p>
              <p>
                L’ensemble de ce site relève de la législation française et
                internationale sur les droits d’auteur et de la propriété
                intellectuelle. Toute utilisation ou reproduction, totale ou
                partielle du site constitue une contrefaçon sanctionnée par le
                Code de la propriété intellectuelle.
              </p>
            </NumberSection>
            <NumberSection number={5} title="Liens hypertextes">
              <p>
                Les liens hypertextes vers d’autres sites ainsi que leurs
                contenus ne sauraient, en aucun cas engager la responsabilité de
                SUGGESTION.
              </p>
              <p>
                SUGGESTION autorise d’autres sites internet à mettre en place un
                lien hypertexte pointant vers ses contenus. Cette autorisation
                est valable pour tout site, à l’exception de ceux diffusant des
                informations à caractère polémique, pornographique, xénophobe ou
                susceptibles de porter atteinte à la sensibilité du plus grand
                nombre.
              </p>
            </NumberSection>
            <NumberSection number={6} title="Loi informatique et libertés">
              <p>
                En conformité avec la loi du 6 janvier 1978 n°78-17, relative à
                l’informatique, aux fichiers et aux libertés, le présent site a
                fait l’objet d’une déclaration auprès de la Commission Nationale
                Informatique et Libertés (CNIL).
              </p>
              <p>
                Les informations enregistrées sont réservées à l’usage de
                SUGGESTION et ne seront en aucun cas diffusées à des tiers.
              </p>
              <p>
                Conformément aux articles 39 et suivants de la loi n°78-17, tous
                les utilisateurs du site ayant saisi des données à caractère
                personnel disposent d’un droit d’accès, de rectification, de
                modification, de suppression ou d’opposition. Vous pouvez
                exercer ce droit à tout moment par email à
                contact@suggestion-conseil.fr ou par courrier :
              </p>
              <address className="mt-xl not-italic">
                <div>SUGGESTION</div>
                <div>14 Quai de Richemont</div>
                <div>35000 RENNES</div>
              </address>
            </NumberSection>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
