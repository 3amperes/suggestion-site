import PropTypes from 'prop-types';
import Head from 'next/head';

export default function Metas({ title, description, imgSrc, url }) {
  return (
    <Head>
      <meta property="og:title" content={title} key="meta-desc" />
      <meta property="og:description" content={description} key="meta-desc" />
      <meta property="og:image" content={imgSrc} key="meta-img" />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgSrc} />
      <meta name="twitter:card" content="summary_large_image" />
      <title key="title">Suggestions • {title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

Metas.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  url: PropTypes.string,
};
