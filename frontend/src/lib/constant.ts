import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'SocialHub',
  description:
    'SocialHub is a next-generation social media app developed using Next.js and Nest.js. It offers a modern interface and seamless user experience for connecting and exploring content.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Shadcn/ui'],
  url: env.APP_URL || 'https://example.com',
};
