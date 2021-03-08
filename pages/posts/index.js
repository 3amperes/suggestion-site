import PropTypes from 'prop-types';
import Services from '@components/layout/Services';
import { getPosts } from '@lib/api';
import Hero from '@components/layout/Hero';
import EmptyPosts from '@components/posts/Empty';
import Item from '@components/posts/Item';
import Metas from '@components/Metas'

export default function Posts({ items }) {
  const hasPosts = items.length > 0;
  return (
    <div>
      <Metas title="journal"/>

      {hasPosts ? (
        <>
          <Hero
            surTitle="Consultez"
            title="Nos articles"
            imgPath="gestion-locative/intro@2x.jpg"
          />
          <div className="container">
            <div className="lg:mx-3col py-3xl">
              <ul className="flex flex-wrap">
                {items.map(({ _id, ...item }) => (
                  <li key={_id} className="md:w-1/2 px-sm pb-1col">
                    <Item {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <EmptyPosts />
      )}
      <Services />
    </div>
  );
}

export async function getStaticProps() {
  const items = await getPosts();
  return {
    props: {
      items,
    },
  };
}

Posts.propTypes = {
  items: PropTypes.array,
};
