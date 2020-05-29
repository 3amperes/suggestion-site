// rent.js
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { getAllRents, getSingleRent } from '@lib/api';

const Rent = ({ title, rentReference }) => {
  return (
    <article>
      <Head>
        <title>Rents • {title}</title>
      </Head>
      <p>{rentReference}</p>
      <h1>{title}</h1>
      <Link href="/rents">
        <a>Back</a>
      </Link>
    </article>
  );
};

export async function getStaticPaths() {
  const allRents = await getAllRents();
  return {
    paths:
      allRents?.map((post) => ({
        params: {
          id: post._id,
        },
      })) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const rent = await getSingleRent({ id: params.id });
  return {
    props: { ...rent },
  };
}

Rent.propTypes = {
  rentReference: PropTypes.string,
  title: PropTypes.string,
};

export default Rent;
