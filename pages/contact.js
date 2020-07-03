import Head from 'next/head';
import Hero from '@components/layout/Hero';
import Services from '@components/layout/Services';
import Checkbox from '@components/Checkbox';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suggestion • Contact</title>
      </Head>

      <Hero
        surTitle="Vous souhaitez"
        title="Être contacté"
        imgPath="/images/contact/intro"
      />

      <section className="mb-4xl">
        <div className="container">
          <div className="lg:max-w-540 mx-auto">
            <div className="text-center mb-3xl">
              <p className="surtitle">Quelque soit votre demande</p>
              <h2>
                Envoyez-nous un message pour que nous <br /> puissions entrer en
                contact.
              </h2>
              <p>
                Nous reprendrons contact avec vous au plus vite <br /> afin de
                faire le point sur votre projet.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 mx-auto">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label className="block mb-2xl ">
                <p className="surtitle mb-lg">Votre nom</p>
                <input
                  type="text"
                  name="name"
                  className="w-full"
                  placeholder="Saisissez votre nom"
                />
              </label>
              <label className="block mb-xl">
                <p className="surtitle mb-xl">Votre email</p>
                <input
                  type="email"
                  name="email"
                  className="w-full"
                  placeholder="Saisissez votre email"
                />
              </label>

              <label className="block mb-xl">
                <p className="surtitle mb-xl">Votre téléphone</p>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Saisissez téléphone"
                />
              </label>

              <fieldset className="my-3xl">
                <p className="mb-md">Votre demande concerne</p>
                <label className="radio">
                  <input type="radio" value="gestion-locative" name="object" />
                  <Checkbox />
                  <span className="font-bold ml-md">La gestion locative</span>
                </label>
                <label className="radio">
                  <input type="radio" value="conseil" name="object" />
                  <Checkbox />
                  <span className="font-bold ml-md">
                    Le conseil en gestion de patrimoine
                  </span>
                </label>
                <label className="radio">
                  <input type="radio" value="location" name="object" />
                  <Checkbox />
                  <span className="font-bold ml-md">
                    Notre offre de location
                  </span>
                </label>
              </fieldset>

              <button type="submit" className="btn w-full">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
