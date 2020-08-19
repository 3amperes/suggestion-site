import PropTypes from 'prop-types';
import Link from 'next/link';
import { urlFor } from '@lib/sanity';

const Item = ({ slug, title, city, sector, area, price, thumbnail }) => {
  return (
    <Link href={`/annonce/[slug]`} as={`/annonce/${slug}`}>
      <a>
        <article className="flex">
          <div className="w-1/2">
            <img
              src={urlFor(thumbnail).auto('format').size(360, 240).url()}
              alt={thumbnail.alt}
              className="w-full"
            />
          </div>
          <div className="w-1/2 pl-lg">
            <h2 className="mb-0 text-xl text-greyishBrownTwo">{title}</h2>
            <h3 className="mb-0 text-xl text-literalMed">
              {city} - {sector}
            </h3>
            <dl className="mt-lg font-semibold">
              <dt className="uppercase text-greyishBrown text-xs">Loyer CC</dt>
              <dd className="text-pumpkin text-lg">{price} €</dd>
              <dt className="uppercase text-greyishBrown text-xs mt-sm">
                Surface
              </dt>
              <dd className="text-pumpkin text-lg font-bold">{area} m²</dd>
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
