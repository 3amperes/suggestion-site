import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import Layout from '@components/layout';
import '../styles.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
