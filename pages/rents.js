// rents.js
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../client';

function Rents({ items = [] }) {
  return (
    <div>
      <Head>
        <title>Rents • Suggestion</title>
      </Head>
      <h1>Rents</h1>
      <Link href="/">
        <a>Back</a>
      </Link>

      <ul>
        {items.map(({ rentReference }, index) => {
          return (
            <li key={index}>
              <Link href={`/rent/[slug]`} as={`/rent/${rentReference}`}>
                <a>{rentReference}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const query = groq`*[_type == "rent"]|order(publishedAt desc)`;

Rents.getInitialProps = async () => ({
  items: await client.fetch(query),
});

Rents.propTypes = {
  items: PropTypes.array,
};

export default Rents;
