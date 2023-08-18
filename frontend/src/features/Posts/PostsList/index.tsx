import { Post } from './Post';
import { getPosts } from '@/services';

export const PostsList = async () => {
  const posts = await getPosts();

  return (
    <div className="flex items-center flex-col mb-14 md:mt-8 md:ml-20 xl:ml-0">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
