import PropTypes from 'prop-types';
import Head from 'next/head';
import Services from '@components/layout/Services';
import EmptyAdverts from '@components/adverts/Empty';
import AdvertsList from '@components/adverts/List';
import Map from '@components/map';
import { getAdverts } from '@lib/api';

export default function Adverts({ items }) {
  console.log({ items });
  const hasAdverts = items.length > 0;
  const places = items.map(({ coordinates: { lat, lng }, name }) => ({
    lat,
    lng,
    name,
  }));
  return (
    <div>
      <Head>
        <title>Suggestion • Annonces</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css"
          rel="stylesheet"
        />
      </Head>
      {hasAdverts ? (
        <div style={{ paddingTop: 68 }}>
          <div className="container">
            <div className="flex py-3xl px-1col">
              <div className="w-1/2">
                <AdvertsList items={items} />
              </div>
              <div className="w-1/2">
                <Map places={places} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyAdverts />
      )}

      <Services />
    </div>
  );
}

export async function getStaticProps() {
  const items = await getAdverts();
  return {
    props: {
      items,
    },
  };
}

Adverts.propTypes = {
  items: PropTypes.array,
};
