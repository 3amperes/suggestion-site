// rent.js
import PropTypes from 'prop-types';
import { getAllRents, getSingleRent } from '@lib/api';
import client, {urlFor} from '@lib/sanity';
import BlockContent from '@sanity/block-content-to-react';
import Slider from '@components/Slider';
import {
  Accordion,
  AccordionTitle,
  AccordionPanel,
} from '@components/Accordion';
import Metas from '@components/Metas';


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
  thumbnail
}) => {
  function getSubtitle() {
    if (sector) {
      return `${city} - ${sector}`;
    }
    return city;
  }
  return (
    <article>
        <Metas title={`Annonce de location [${slug}]`} description={title} imgSrc={urlFor(thumbnail).auto('format').size(360, 240).url()}/>

      <div style={{ paddingTop: 68 }}>
        <div className="container my-2xl">
          <div className="flex flex-wrap">
            <div className="lg:w-1/12 lg:block hidden" />
            <div className="lg:w-9/24 w-full">
              <header>
                <h1 className="text-2xl text-greyishBrownTwo font-bold mb-0">
                  {title}
                </h1>
                <h2 className="text-xl text-literalMed font-normal mb-0">
                  {getSubtitle()}
                </h2>
                <div className="flex thin-border">
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
                <div className="thin-border mb-3xl">
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
              {details && details.length > 0 && (
                <Accordion className="thin-border">
                  <AccordionTitle>Caractéristiques détaillées</AccordionTitle>
                  <AccordionPanel>
                    <dl className="pl-2xl">
                      {details.map(({ label, desc }, index) => (
                        <div
                          key={index}
                          className={`flex py-sm border-paleGrey ${
                            index > 0 ? 'border-t' : ''
                          }`}
                        >
                          <dt className="w-1/2 text-battleshipGrey capitalize">
                            {label}
                          </dt>
                          <dd className="w-1/2 font-semibold capitalize">
                            {desc}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </AccordionPanel>
                </Accordion>
              )}
              {priceDetail && priceDetail.length > 0 && (
                <Accordion className="thin-border">
                  <AccordionTitle>Détail du prix</AccordionTitle>
                  <AccordionPanel>
                    <dl className="pl-2xl">
                      {priceDetail.map(({ label, desc }, index) => (
                        <div
                          key={index}
                          className={`flex py-sm border-paleGrey ${
                            index > 0 ? 'border-t' : ''
                          }`}
                        >
                          <dt className="w-1/2 text-battleshipGrey capitalize">
                            {label}
                          </dt>
                          <dd className="w-1/2 font-semibold capitalize">
                            {desc} €
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </AccordionPanel>
                </Accordion>
              )}
              {(dpe || ges) && (
                <Accordion className="thin-border">
                  <AccordionTitle>Classes due - ges</AccordionTitle>
                  <AccordionPanel>
                    <p>
                      Consommation énergétique&nbsp;:&nbsp;
                      <br />
                      <strong>{dpe}&nbsp;KWh/m²/an</strong>
                    </p>
                    <p>
                      Émission de gaz à effet de serre&nbsp;:&nbsp;
                      <br />
                      <strong>{ges}:&nbsp;Kg éq CO2/m²/an</strong>
                    </p>
                  </AccordionPanel>
                </Accordion>
              )}
            </div>
            <div className="w-1/24 lg:block hidden" />
            <div className="lg:w-1/2 lg:pl-xl w-full lg:mt-0 mt-lg">
              <Slider items={gallery} />
            </div>
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
  thumbnail: PropTypes.string,
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
