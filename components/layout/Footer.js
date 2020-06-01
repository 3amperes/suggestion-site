import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <div className="bg-gray-800">
        <div className="container mx-auto flex lg:py-8 text-white">
          <div className="flex flex-1">
            <div className="flex-1">
              <img src="/suggestion.svg" alt="suggestion logo" />
              <p className="lg:my-8">L’immobilier en mode mains libres</p>
              <address>
                14, Quai Richemont
                <br /> 35000 Rennes
              </address>
            </div>
            <div className="flex-1">
              <nav>
                <ul>
                  <li>
                    <Link href="/">
                      <a className="lg:py-4 py-3 block">Gestion locative</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="lg:py-4 py-3 block">
                        Gestion de patrimoine
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="lg:py-4 py-3 block">Présentation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="lg:py-4 py-3 block">Offres de location</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="lg:py-4 py-3 block">Honoraires</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="lg:py-4 py-3 block">Mon compte</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <p className="mb-4">
              Vous souhaitez nous faire part de votre projet ?
            </p>
            <button>Prenons rendez-vous</button>
          </div>
        </div>
      </div>
      <footer className="text-center py-4 bg-gray-300">
        ©2020 - Suggestion, gestion immobilière et de patrimoine à Rennes
      </footer>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
