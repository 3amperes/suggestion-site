// rent.js
import PropTypes from 'prop-types';
import { getAllPosts, getSinglePost } from '@lib/api';
import client, { urlFor } from '@lib/sanity';
import BlockContent from '@sanity/block-content-to-react';
import Metas from '@components/Metas';

const Post = (props) => {
  const { title, thumbnail, description, date } = props;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const publishedDate = new Date(date);
  return (
    <article>
      <Metas
        title={title}
        imgSrc={urlFor(thumbnail).auto('format').size(720, 480).url()}
        description={description}
      />

      <div style={{ paddingTop: 68 }}>
        <div className="container">
          <div className="w-1/2 m-auto mt-3xl">
            <header className="mb-2xl">
              <h1 className="text-2xl text-greyishBrownTwo font-bold mb-0">
                {title}
              </h1>
              <p className="text-literalMed">
                le {publishedDate.toLocaleDateString('fr', options)}
              </p>
            </header>
            <img
              src={urlFor(thumbnail).auto('format').size(720, 480).url()}
              alt={thumbnail.alt}
              className="w-full"
            />
            {description && (
              <div className="block-content">
                <BlockContent
                  blocks={description}
                  imageOptions={{ w: 320, h: 240, fit: 'max' }}
                  {...client.config()}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const props = await getSinglePost({ slug: params.slug });
  return {
    props,
  };
}

Post.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  thumbnail: PropTypes.object,
  description: PropTypes.array,
};

export default Post;
