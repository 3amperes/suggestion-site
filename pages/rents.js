// rents.js
import { useState } from 'react';
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
  max-width: 1080px;
  margin: auto;
`;

function Rents({ items = [] }) {
  const [filteredItems, setFilteredItems] = useState(items.slice(0, 2));
  const [hasNext, setHasNext] = useState(true);
  const places = filteredItems.map(({ coordinates: { lat, lng }, name }) => ({
    lat,
    lng,
    name,
  }));

  const onClick = () => {
    const newItems = hasNext ? items.slice(2, 4) : items.slice(0, 2);
    setFilteredItems(newItems);
    setHasNext(!hasNext);
  };

  return (
    <div>
      <Head>
        <title>Rents • Suggestion</title>
      </Head>
      <h1>Suggestion • Rents</h1>
      <Link href="/">
        <a>Go Back</a>
      </Link>

      <Wrapper>
        <Map places={places} />
        <div>
          <ul>
            {filteredItems.map(({ rentReference, name }, index) => {
              return (
                <li key={index}>
                  <Link href={`/rent/[slug]`} as={`/rent/${rentReference}`}>
                    <a>{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button onClick={onClick}>{hasNext ? 'next' : 'prev'}</button>
        </div>
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
