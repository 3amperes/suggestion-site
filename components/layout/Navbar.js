import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="lg:h-20 lg:px-16 px-8 flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/">
          <a>
            <img src="/suggestion.svg" alt="suggestion logo" />
          </a>
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          className="fill-current text-gray-900"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />
      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex item-center justify-between text-base text-gray-700 pt-4  lg:pt-0">
            <li>
              <Link href="/">
                <a className="lg:py-2 py-3 block border-b-2 border-transparent hover:border-indigo-400">
                  Gestion locative
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="lg:py-2 py-3 block border-b-2 border-transparent hover:border-indigo-400">
                  Gestion de patrimoine
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="lg:py-2 py-3 block border-b-2 border-transparent hover:border-indigo-400">
                  Présentation
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="lg:py-2 py-3 block border-b-2 border-transparent hover:border-indigo-400">
                  Offres de location
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="lg:py-2 py-3 block border-b-2 border-transparent hover:border-indigo-400">
                  Honoraires
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="lg:py-2 py-3 block border-b-2 border-transparent hover:border-indigo-400">
                  Mon compte
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button>Contactez-nous</button>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {};

export default Navbar;
