// rents.js
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import Map from '../components/map';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-rows: 600px;
`;

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

      <Wrapper>
        <Map
          places={items.map(({ coordinates: { lat, lng }, name }) => ({
            lat,
            lng,
            name,
          }))}
        />

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
      </Wrapper>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const query = groq`*[_type == "rent"]|order(publishedAt desc){
    rentReference,
    "name": property->title,
    "coordinates": property->location
  }`;
  const items = await client.fetch(query);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      items,
    },
  };
}
Rents.propTypes = {
  items: PropTypes.array,
};

export default Rents;
