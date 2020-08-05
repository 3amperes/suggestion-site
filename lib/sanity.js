// client.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const configuredSanityClient = sanityClient({
  projectId: 'b5kn4cib', // you can find this in sanity.json
  dataset: 'staging', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(configuredSanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export default configuredSanityClient;
