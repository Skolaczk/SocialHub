import { HomeHeader } from '@/components';
import { PostsList } from '@/features/posts';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center pb-20 md:ml-20 md:mt-4 md:pb-4 xl:ml-0">
      <HomeHeader />
      <PostsList />
    </div>
  );
};

export default HomePage;
