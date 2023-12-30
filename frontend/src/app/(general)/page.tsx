import { LogoDesktopIcon } from '@/assets/icons';
import { SearchBar } from '@/components';
import { PostsList } from '@/features';
import { getPosts } from '@/services';

const Home = async () => {
  const posts = await getPosts();

  return (
    <>
      <div className="flex justify-center pt-5 md:hidden">
        <LogoDesktopIcon />
      </div>
      <div className="mt-8 hidden md:ml-20 md:block xl:ml-0">
        <SearchBar />
      </div>
      <PostsList posts={posts} />
    </>
  );
};

export default Home;
