// rent.js
import PropTypes from 'prop-types';
import Head from 'next/head';
import { getAllAdverts, getSingleAdvert } from '@lib/api';

const Advert = ({ title, rentReference }) => {
  return (
    <article>
      <Head>
        <title>Rents • {title}</title>
      </Head>

      <div style={{ paddingTop: 68 }}>
        <div className="container">
          <p>{rentReference}</p>
          <h1>{title}</h1>
        </div>
      </div>
    </article>
  );
};

export async function getStaticPaths() {
  const allRents = await getAllAdverts();
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
  const rent = await getSingleAdvert({ id: params.id });
  return {
    props: { ...rent },
  };
}

Advert.propTypes = {
  rentReference: PropTypes.string,
  title: PropTypes.string,
};

export default Advert;
