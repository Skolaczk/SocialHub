import { NavigationMenu, SearchBar } from '@/components';
import { getPosts } from '@/services';
import { PostsList } from '@/features';

const Home = async () => {
  const posts = await getPosts();

  return (
    <>
      <SearchBar />
      <PostsList posts={posts} />
      <NavigationMenu />
    </>
  );
};

export default Home;
