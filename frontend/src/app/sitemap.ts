import { getPosts } from '@/services';

const sitemap = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;

  const posts = await getPosts();
  const postsUrls =
    posts?.map(({ id }) => ({
      url: `${baseUrl}posts/${id}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}explore`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}notifications`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}create`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}edit`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}sign-in`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}sign-up`,
      lastModified: new Date(),
    },
    ...postsUrls,
  ];
};

export default sitemap;
