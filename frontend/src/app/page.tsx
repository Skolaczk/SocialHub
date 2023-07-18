'use client';

import { NavigationMenu, SearchBar } from '@/components';
import { PostsList } from '@/features';

const Home = () => {
  return (
    <>
      <SearchBar />
      <PostsList />
      <NavigationMenu />
    </>
  );
};

export default Home;
