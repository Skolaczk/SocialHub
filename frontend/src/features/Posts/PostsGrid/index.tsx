import Image from 'next/image';
import { getPosts } from '@/services';

export const PostsGrid = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-3 gap-1 justify-center w-full max-w-2xl">
      {posts.map(({ id, image }) => (
        <div key={id}>
          <Image
            src={image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};
