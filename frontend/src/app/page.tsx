import { NavigationMenu, SearchBar, SocialPanel } from '@/components';
import { PostsList } from '@/features';

const Home = () => {
  return (
    <>
      <SearchBar />
      <PostsList />
      <NavigationMenu />
      <SocialPanel />
    </>
  );
};

export default Home;
