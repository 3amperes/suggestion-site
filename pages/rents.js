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

const query = groq`*[_type == "rent"]|order(publishedAt desc){
  rentReference,
  "name": property->title,
  "coordinates": property->location
}`;

Rents.getInitialProps = async () => ({
  items: await client.fetch(query),
});

Rents.propTypes = {
  items: PropTypes.array,
};

export default Rents;
