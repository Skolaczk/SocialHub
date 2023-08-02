import { SearchBar } from '@/components';
import { PostsList } from '@/features';
import { api } from '@/api';
import { cookies } from 'next/headers';

const Home = () => {
  api.defaults.headers.common['Authorization'] = `Bearer ${
    cookies().get('token')?.value
  }`;

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
