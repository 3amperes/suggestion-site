import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from '@components/layout';
import '../styles.css';
// import Swiper styles
import 'swiper/swiper-bundle.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Suggestion</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#e87a00"
        />
        <meta name="msapplication-TileColor" content="#e87a00" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Gérer, valoriser et optimiser votre patrimoine immobilier"
        ></meta>
        <meta property="og:title" content="Suggestion" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Gérer, valoriser et optimiser votre patrimoine immobilier"
        />
        <meta property="og:url" content="http://www.suggestion-conseil.fr" />
        <meta property="og:image" content="/intro.jpg" />
      </Head>

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
