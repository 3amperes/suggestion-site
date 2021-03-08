import PropTypes from 'prop-types';
import Link from 'next/link';
import { urlFor } from '@lib/sanity';

const Item = ({ slug, title, thumbnail }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <article className="">
          <img
            src={urlFor(thumbnail).auto('format').size(720, 480).url()}
            alt={thumbnail.alt}
            className="w-full block mb-lg"
          />
          <h2 className="mb-0 text-xl text-greyishBrownTwo">{title}</h2>
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
