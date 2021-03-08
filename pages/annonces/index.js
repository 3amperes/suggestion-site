import PropTypes from 'prop-types';
import Head from 'next/head';
import Services from '@components/layout/Services';
import EmptyAdverts from '@components/adverts/Empty';
import Item from '@components/adverts/Item';
import Map from '@components/map';
import { getRents } from '@lib/api';

export default function Adverts({ items }) {
  const hasAdverts = items.length > 0;
  const places = items.map(({ coordinates: { lat, lng }, title }) => ({
    lat,
    lng,
    title,
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
            <div className="flex py-3xl">
              <div className="w-full lg:w-3/4">
                <ul>
                  {items.map(({ _id, ...item }) => (
                    <li key={_id} className="mb-2xl">
                      <Item {...item} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-5/12 hidden lg:block">
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
  const items = await getRents();
  return {
    props: {
      items,
    },
  };
}

Adverts.propTypes = {
  items: PropTypes.array,
};
