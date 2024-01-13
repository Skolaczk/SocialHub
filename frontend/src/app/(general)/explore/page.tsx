import { Metadata } from 'next';

import { SearchBar } from '@/components';
import { PostsGrid } from '@/features';
import { getPosts } from '@/services';

export const metadata: Metadata = {
  title: 'Explore',
  alternates: {
    canonical: '/explore',
  },
};

const Explore = async () => {
  const posts = await getPosts();

  return (
    <div className="mb-14 mt-8 flex flex-col items-center md:ml-20 xl:ml-0">
      <div className="w-full px-5 md:hidden">
        <SearchBar />
      </div>
      <h2 className="my-5 text-xl font-medium uppercase tracking-widest md:mt-0">
        explore
      </h2>
      <PostsGrid posts={posts} />
    </div>
  );
};

export default Explore;
