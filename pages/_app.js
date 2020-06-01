import PropTypes from 'prop-types';
import Layout from '@components/layout';
import '../styles.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
