import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <motion.div initial="exit" animate="enter" exit="exit">
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
