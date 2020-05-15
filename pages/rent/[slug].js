// rent.js
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../../client';

const Rent = ({ slug, title }) => {
  return (
    <article>
      <Head>
        <title>Rents • {title}</title>
      </Head>
      <p>{slug}</p>
      <h1>{title}</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
    </article>
  );
};

const query = groq`*[_type == "rent" && rentReference == $slug][0]{
    "slug": rentReference,
    date,
    "title": property->title,
  }`;

Rent.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

Rent.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
};

export default Rent;
