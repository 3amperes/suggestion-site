// rents.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { getRents } from '@lib/api';
import Map from '@components/map';

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
        <link
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css"
          rel="stylesheet"
        />
      </Head>
      <h1>Suggestion • Rents</h1>
      <Link href="/">
        <a>Go Back</a>
      </Link>

      <Wrapper>
        <Map places={places} />
        <div>
          <ul>
            {filteredItems.map(({ _id, name }, index) => {
              return (
                <li key={index}>
                  <Link href={`/rent/[id]`} as={`/rent/${_id}`}>
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
  const items = await getRents();
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
