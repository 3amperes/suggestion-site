import PropTypes from 'prop-types';
import Link from 'next/link';
import { urlFor } from '@lib/sanity';

const Item = ({ slug, title, city, sector, area, price, thumbnail }) => {
  return (
    <Link href={`/annonces/${slug}`}>
      <a>
        <article className="md:flex">
          <div className="w-full md:w-1/2">
            <img
              src={urlFor(thumbnail).auto('format').size(360, 240).url()}
              alt={thumbnail.alt}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-lg">
            <h2 className="mb-0 text-xl text-greyishBrownTwo">{title}</h2>
            <h3 className="mb-0 text-xl text-literalMed">
              {city} - {sector}
            </h3>
            <dl className="mt-lg font-semibold flex md:block">
              <div className="w-1/2 md:w-full">
                <dt className="uppercase text-greyishBrown text-xs">
                  Loyer CC
                </dt>
                <dd className="text-pumpkin text-lg">{price} €</dd>
              </div>
              <div className="w-1/2 md:w-full">
                <dt className="uppercase text-greyishBrown text-xs md:mt-sm">
                  Surface
                </dt>
                <dd className="text-pumpkin text-lg font-bold">{area} m²</dd>
              </div>
            </dl>
          </div>
        </article>
      </a>
    </Link>
  );
};

Item.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  city: PropTypes.string,
  sector: PropTypes.string,
  area: PropTypes.number,
  price: PropTypes.number,
  thumbnail: PropTypes.object,
};

export default Item;
