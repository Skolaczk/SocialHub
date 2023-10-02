import { Post } from './Post';
import { IPost } from '@/interfaces';

interface IProps {
  posts: IPost[];
}

export const PostsList = ({ posts }: IProps) => {
  return (
    <div className="flex items-center flex-col mb-14 md:mt-8 md:ml-20 xl:ml-0">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
