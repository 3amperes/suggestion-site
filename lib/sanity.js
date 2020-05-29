// client.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'b5kn4cib', // you can find this in sanity.json
  dataset: 'staging', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});
