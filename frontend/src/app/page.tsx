import { NavigationMenu } from '@/components';
import { Posts } from '@/features';

const Home = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Posts />
      <NavigationMenu />
    </>
  );
};

export default Home;
