import Head from 'next/head';
import Link from 'next/link';
import Hero from '@components/layout/Hero';
import Image from '@components/Image';
import Services from '@components/layout/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suggestion • Accueil</title>
      </Head>

      <Hero
        surTitle="Pour vous, nous allons"
        title="Gérer, valoriser et optimiser votre patrimoine immobilier"
        imgPath="homepage/intro@2x.jpg"
      >
        Notre métier est de vous accompagner dans la gestion quotidienne de vos
        biens.
      </Hero>

      {/* Section One */}
      <section className="mb-4xl">
        <div className="container">
          <div className="flex md:flex-row flex-col items-center -mx-lg">
            <div className="xl:w-1/3 lg:ml-2col md:w-1/2 w-full px-lg md:mb-0 mb-xl">
              <div style={{ height: 474 }} className="image-wrapper">
                <Image
                  path="homepage/section-one@2x.jpg"
                  className="object-none h-full w-full"
                />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 xl:ml-3col lg:ml-1col px-lg">
              <div className="md:max-w-320">
                <p className="surtitle">Notre idée pour vous investisseurs</p>
                <h2>L’immobilier en mode mains libres</h2>
                <p>
                  Par notre activité de gérance locative, nous pourrons vous
                  accompagner dans la gestion de vos investissements locatifs
                  dans le respect du cadre légal et juridique.
                </p>
                <p>
                  C’est la solution pour vous dégager du temps et vous soulager
                  de tous les désagréments liés à l’activité de location.
                </p>
                <Link href="/honoraires">
                  <a className="link">Découvrez notre offre</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Two */}
      <section className="mb-4xl">
        <div className="container">
          <div className="flex md:flex-row flex-col items-center -mx-lg">
            {/* image */}
            <div className="xl:w-1/3 md:w-1/2 w-full md:order-last px-lg xl:ml-3col lg:ml-1col  md:mb-0 mb-xl">
              <div style={{ height: 474 }} className="image-wrapper">
                <Image
                  path="homepage/section-two@2x.jpg"
                  className="object-none h-full w-full"
                />
              </div>
            </div>
            {/* contenu */}
            <div className="xl:w-3/12 md:w-1/2 px-lg xl:ml-4col lg:ml-2col">
              <div className="max-width-320">
                <p className="surtitle">Suggestion c’est aussi</p>
                <h2>Un catalogue d’offres locatives</h2>
                <p>
                  Vous recherchez un appartement en location ? Nous définissons
                  avec vous votre projet locatif et nous vous accompagnons sur
                  le montage de votre dossier et les visites de nos biens en
                  location.
                </p>
                {/* <a className="link">Consultez nos annonces</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
