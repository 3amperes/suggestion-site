import Head from 'next/head';
import Hero from '@components/layout/Hero';
import Services from '@components/layout/Services';
import Image from '@components/Image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suggestion • Présentation</title>
      </Head>

      <Hero
        surTitle="Prenons le temps et"
        title="Faisons connaissance"
        imgPath="presentation/intro@2x.jpg"
      />

      <section className="mb-4xl">
        <div className="container">
          <div className="flex md:flex-row flex-col items-start -mx-lg">
            <div className="xl:w-5/12 lg:ml-3col md:w-1/3 w-full px-lg">
              <p className="surtitle">Suggestion c’est</p>
              <h2>
                Une solution simple <br /> et directe
              </h2>
            </div>
            <div className="xl:w-7/24 md:w-1/3 w-full px-lg">
              <p>
                Notre solution est née de l’idée que seul un conseil indépendant
                et une connaissance globale de votre situation peut vous
                permettre d’atteindre vos objectifs de développement patrimonial
                immobilier et financier.
              </p>
              <p>
                En réunissant une expérience de gestionnaire immobilier et une
                solide formation de Gestionnaire de patrimoine, SUGGESTION
                pourra, avec vous, mettre en place les actions pertinentes pour
                optimiser et valoriser votre investissement locatif.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4xl">
        <div className="container">
          <div className="flex md:flex-row flex-col items-start -mx-lg">
            <div className="xl:w-7/24 lg:ml-3col md:w-1/3 w-full px-lg">
              <div style={{ height: 539 }} className="image-wrapper">
                <Image
                  path="presentation/portrait@2x.jpg"
                  className="object-none h-full w-full"
                />
              </div>
            </div>
            <div className="xl:w-7/24 xl:ml-3col md:w-1/3 w-full px-lg">
              <p className="surtitle">Pourquoi</p>
              <h2>
                La création <br />
                de Suggestion ?
              </h2>
              <p>
                Je possède l’expérience et l’expertise d’un des leaders de
                l’immobilier Français au sein duquel j’ai pu évoluer ces 10
                dernières années. Ces compétences, je souhaite désormais les
                partager et vous en faire profiter pour construire votre
                patrimoine.
              </p>
              <p>
                Notre rôle Évaluer le potentiel de votre patrimoine, fixer vos
                objectifs de développement patrimonial, déterminer une stratégie
                d’investissement et de placement pour y parvenir et mettre en
                place les solutions de gestion pour vous accompagner au
                quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
