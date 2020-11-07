import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@components/Logo';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';

const MenuItem = ({ path, href, label }) => {
  const router = useRouter();

  const borderColor =
    router.asPath === path ? 'border-greyishBrownTwo' : 'border-transparent';

  const classes = `py-xs block border-b-2 ${borderColor} hover:border-pumpkin focus:border-battleshipGrey font-semibold lg:font-body font-display lg:text-sm text-xl transition duration-300 ease-in-out`;

  return (
    <li className="px-lg flex items-center lg:mb-0 mb-lg">
      {path ? (
        <Link href={path}>
          <a className={classes}>{label}</a>
        </Link>
      ) : (
        <a href={href} className={classes}>
          {label}
        </a>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <nav className="absolute w-full top-0 z-30 text-greyishBrownTwo bg-white">
      <div className="container flex items-center" style={{ height: 68 }}>
        <Link href="/">
          <a className="fill-current mr-auto">
            <Logo className="hidden md:block" />
            <Logo isFull={false} width={16} className="md:hidden" />
          </a>
        </Link>

        <div
          className={`navigation flex-1 flex flex-col lg:flex-row items-center lg:justify-end justify-around lg:relative absolute w-screen h-screen lg:w-auto lg:h-auto inset-0 bg-white z-0 transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          } lg:translate-y-0`}
        >
          <Link href="/">
            <a>
              <Logo className="fill-current lg:hidden" />
            </a>
          </Link>
          <ul className="flex flex-col lg:flex-row items-center justify-center mx-auto">
            <MenuItem path="/gestion-locative" label="Gestion locative" />
            <MenuItem path="/presentation" label="Présentation" />
            <MenuItem path="/honoraires" label="Honoraires" />
            <MenuItem path="/annonces" label="Annonces" />
            <MenuItem path="/posts" label="Journal" />
            <MenuItem
              href="https://www.enova-gerance.com/interface_proprietaire/acces.aspx"
              label="Accès Propriétaires"
            />
            <MenuItem
              href="https://www.enova-gerance.com/interface_locataire/acces.aspx"
              label="Accès Locataire"
            />
          </ul>

          <Link href="/contact">
            <a className="btn">Contactez-nous </a>
          </Link>
        </div>

        <button
          className={`menu-btn ${
            isOpen && 'menu-btn-active'
          } lg:hidden cursor-pointer py-lg z-10`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        ></div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
