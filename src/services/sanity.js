import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your_project_id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

// Example GROQ query function
// export const fetchPosts = async () => {
//   const query = '*[_type == "post"] | order(publishedAt desc) { _id, title, slug, mainImage, publishedAt, body }';
//   const posts = await sanityClient.fetch(query);
//   return posts;
// };
