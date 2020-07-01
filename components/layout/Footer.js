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
                14, Quai Richemont
                <br /> 35000 Rennes
              </address>
            </div>
            <nav className="xl:w-7/24 lg:w-1/3 w-full px-lg mb-3xl lg:mb-0">
              <ul className="pt-2xl">
                <li className="mb-xl">
                  <Link href="/">
                    <a className="block">Gestion locative</a>
                  </Link>
                </li>
                <li className="mb-xl">
                  <Link href="/">
                    <a className="block">Présentation</a>
                  </Link>
                </li>
                <li className="mb-xl">
                  <Link href="/">
                    <a className="block">Honoraires</a>
                  </Link>
                </li>
                <li className="mb-xl">
                  <Link href="/">
                    <a className="block">Accès proprétaire</a>
                  </Link>
                </li>
                <li className="mb-xl">
                  <Link href="/">
                    <a className="block">Accès locataire</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="xl:w-3/12 lg:w-1/3 w-full px-lg flex flex-col items-center justify-center text-center">
              <p className="mb-2xl font-display text-xl">
                Vous souhaitez nous faire part de votre projet ?
              </p>
              <button className="btn">Prenons rendez-vous</button>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-xl bg-silver text-xs">
        ©2020 - Suggestion, gestion immobilière et de patrimoine à
        Rennes&nbsp;—&nbsp;
        <a className="underline cursor-pointer">Mention Légales</a>
      </footer>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
