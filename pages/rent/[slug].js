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
      <Link href="/rents">
        <a>Back</a>
      </Link>
    </article>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
  const query = groq`*[_type == "rent" && rentReference == $slug][0]{
    "slug": rentReference,
    date,
    "title": property->title,
  }`;
  const props = await client.fetch(query, { slug: params.slug });

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props,
  };
}

export async function getStaticPaths() {
  const allRents = await client.fetch(
    `*[_type == "rent"]{ 'slug': rentReference }`
  );
  return {
    paths:
      allRents?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

Rent.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
};

export default Rent;
