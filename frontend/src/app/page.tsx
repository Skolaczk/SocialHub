import { NavigationMenu } from '@/components';
import { Posts } from '@/features';

const Home = () => {
  return (
    <>
      <div className="absolute left-1/2">
        <h1>Hello world</h1>
        <Posts />
      </div>
      <NavigationMenu />
    </>
  );
};

export default Home;
