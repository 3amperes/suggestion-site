import Link from 'next/link';
import Logo from '@components/Logo';

const Footer = () => {
  return (
    <>
      <div className="bg-greyishBrownTwo py-4xl">
        <div className="container">
          <div className="flex lg:flex-row flex-col justify-start -mx-lg text-white text-center lg:text-left">
            <div className="xl:w-7/24 lg:w-1/3 w-full px-lg xl:ml-1col mb-3xl lg:mb-0">
              <Logo width={240} className="mb-2xl text-white inline-block" />
              <p className="font-display mb-2xl">
                L’immobilier <br /> en mode <br /> mains libres
              </p>
              <address className="not-italic">
                <a href="tel:+33688301415">06 88 30 14 15</a> <br />
                14, Quai Richemont
                <br /> 35000 Rennes
              </address>
            </div>
            <nav className="xl:w-7/24 lg:w-1/3 w-full px-lg mb-3xl lg:mb-0">
              <ul className="pt-2xl">
                <li className="mb-xl">
                  <Link href="/gestion-locative">
                    <a className="block">Gestion locative</a>
                  </Link>
                </li>
                <li className="mb-xl">
                  <Link href="/presentation">
                    <a className="block">Présentation</a>
                  </Link>
                </li>
                <li className="mb-xl">
                  <Link href="/honoraires">
                    <a className="block">Honoraires</a>
                  </Link>
                </li>
                <li className="mb-xl">
                  <a
                    href="https://www.enova-gerance.com/interface_proprietaire/acces.aspx"
                    className="block"
                  >
                    Accès proprétaire
                  </a>
                </li>
                <li className="mb-xl">
                  <a
                    href="https://www.enova-gerance.com/interface_locataire/acces.aspx"
                    className="block"
                  >
                    Accès locataire
                  </a>
                </li>
              </ul>
            </nav>
            <div className="xl:w-3/12 lg:w-1/3 w-full px-lg flex flex-col items-center justify-center text-center">
              <p className="mb-2xl font-display text-xl">
                Vous souhaitez nous faire part de votre projet ?
              </p>
              <Link href="/contact">
                <a className="btn">Prenons rendez-vous</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-xl bg-silver text-xs">
        ©2020 - Suggestion, gestion immobilière et de patrimoine à
        Rennes&nbsp;—&nbsp;
        <Link href="/mentions">
          <a className="underline cursor-pointer">Mention Légales</a>
        </Link>
      </footer>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
