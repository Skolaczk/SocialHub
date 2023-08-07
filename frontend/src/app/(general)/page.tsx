import { SearchBar } from '@/components';
import { PostsList } from '@/features';

const Home = () => {
  return (
    <>
      <div className="hidden md:block mt-8 md:ml-20 xl:ml-0">
        <SearchBar />
      </div>
      <PostsList />
    </>
  );
};

export default Home;
