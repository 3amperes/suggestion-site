// client.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(configuredSanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export default configuredSanityClient;
