import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Metas({ title, description, imgSrc }) {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_BASE_URL + router.asPath;
  return (
    <Head>
      <meta property="og:title" content={title} key="meta-title" />
      <meta property="og:description" content={description} key="meta-desc" />
      <meta property="og:image" content={imgSrc} key="meta-img" />
      <meta property="og:url" content={url} key="meta-url" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgSrc} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url}></meta>
      <title key="title">Suggestions • {title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

Metas.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
};
