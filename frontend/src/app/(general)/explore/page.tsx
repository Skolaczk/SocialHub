import { SearchBar } from '@/components';
import { PostsGrid } from '@/features';
import { postMock } from '@/interfaces';

const Explore = () => {
  const posts = [postMock];

  return (
    <div className="flex items-center flex-col mt-8 mb-14 md:ml-20 xl:ml-0">
      <div className="md:hidden w-full px-5">
        <SearchBar />
      </div>
      <h2 className="text-xl font-medium tracking-widest uppercase my-5 md:mt-0">
        explore
      </h2>
      <PostsGrid posts={posts} />
    </div>
  );
};

export default Explore;
