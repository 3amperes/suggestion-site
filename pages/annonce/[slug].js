// rent.js
import PropTypes from 'prop-types';
import Head from 'next/head';
import { getAllRents, getSingleRent } from '@lib/api';
import client from '@lib/sanity';
import BlockContent from '@sanity/block-content-to-react';

const Advert = ({
  slug,
  title,
  city,
  sector,
  area,
  description,
  details,
  dpe,
  ges,
  price,
  priceDetail,
  gallery,
}) => {
  function getSubtitle() {
    if (sector) {
      return `${city} - ${sector}`;
    }
    return city;
  }
  return (
    <article>
      <Head>
        <title>
          Suggestion • Annonce de location [{slug}] • {title}
        </title>
      </Head>

      <div style={{ paddingTop: 68 }}>
        <div className="container my-2xl">
          <div className="flex">
            <div className="w-1/2">
              <header>
                <h1 className="text-2xl text-greyishBrownTwo font-bold mb-0">
                  {title}
                </h1>
                <h2 className="text-xl text-literalMed font-normal mb-0">
                  {getSubtitle()}
                </h2>
                <div className="flex py-lg my-lg border-t border-b border-literalDown border-opacity-50">
                  <div className="w-1/3">
                    <span className="uppercase text-greyishBrownTwo text-xs font-semibold">
                      Surface Habitable
                    </span>
                    <span className="text-pumpkin font-bold text-lg block">
                      {area} m²
                    </span>
                  </div>
                  <div className="w-1/3">
                    <span className="uppercase text-greyishBrownTwo text-xs font-semibold">
                      référence
                    </span>
                    <span className="text-pumpkin font-bold text-lg block">
                      {slug}
                    </span>
                  </div>
                  <div className="w-1/3">
                    <span className="uppercase text-greyishBrownTwo text-xs font-semibold">
                      Loyer cC
                    </span>
                    <span className="text-pumpkin font-bold text-lg block">
                      {price} €
                    </span>
                  </div>
                </div>
              </header>
              {description && (
                <div>
                  <span className="uppercase text-greyishBrownTwo text-xs font-semibold">
                    Description
                  </span>
                  <BlockContent
                    blocks={description}
                    imageOptions={{ w: 320, h: 240, fit: 'max' }}
                    {...client.config()}
                  />
                </div>
              )}
            </div>
            <div className="w-1/2">gallery</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export async function getStaticPaths() {
  const allRents = await getAllRents();
  return {
    paths:
      allRents?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const props = await getSingleRent({ slug: params.slug });
  return {
    props,
  };
}

Advert.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  city: PropTypes.string,
  sector: PropTypes.string,
  area: PropTypes.number,
  description: PropTypes.array,
  details: PropTypes.array,
  dpe: PropTypes.number,
  ges: PropTypes.number,
  price: PropTypes.number,
  priceDetail: PropTypes.array,
  gallery: PropTypes.array,
};

export default Advert;
