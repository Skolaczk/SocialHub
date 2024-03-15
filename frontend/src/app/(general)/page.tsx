import { Icons } from '@/components';
import { PostsList } from '@/features/posts';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center md:ml-20 md:mt-4 xl:ml-0">
      <Icons.logo className="my-5 md:hidden" />
      <PostsList />
    </div>
  );
};

export default HomePage;
