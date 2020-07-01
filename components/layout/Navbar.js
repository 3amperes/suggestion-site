import { useState } from 'react';
import Link from 'next/link';
import Logo from '@components/Logo';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const MenuItem = ({ path, label }) => {
  const router = useRouter();

  const borderColor =
    router.asPath === path ? 'border-greyishBrownTwo' : 'border-transparent';

  const classes = `py-xs block border-b-2 ${borderColor} hover:border-pumpkin font-semibold lg:font-body font-display lg:text-sm text-xl transition duration-300 ease-in-out`;

  return (
    <li className="px-lg flex items-center lg:mb-0 mb-lg">
      <Link href={path}>
        <a className={classes}>{label}</a>
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute w-full top-0 z-10 text-greyishBrownTwo bg-white">
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
          <Logo className="fill-current lg:hidden" />
          <ul className="flex flex-col lg:flex-row items-center justify-center mx-auto">
            <MenuItem path="/location" label="Gestion locative" />
            <MenuItem path="/presentation" label="Présentation" />
            <MenuItem path="/honoraires" label="Honoraires" />
            <MenuItem path="/pro" label="Accès Propriétaires" />
            <MenuItem path="/loc" label="Accès Locataire" />
          </ul>
          <a className="btn">Contactez-nous</a>
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
