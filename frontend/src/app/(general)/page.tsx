import { SearchBar } from '@/components';
import { PostsList } from '@/features';
import { LogoDesktopIcon } from '@/assets/icons';

const Home = () => {
  return (
    <>
      <div className="flex justify-center pt-5 md:hidden">
        <LogoDesktopIcon />
      </div>
      <div className="hidden md:block mt-8 md:ml-20 xl:ml-0">
        <SearchBar />
      </div>
      <PostsList />
    </>
  );
};

export default Home;
