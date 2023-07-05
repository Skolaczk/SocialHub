import { IPost } from '@/interfaces';
import { Post } from './Post';

interface IProps {
  posts: IPost[];
}

export const PostsList = ({ posts }: IProps) => {
  return (
    <div className="flex items-center flex-col my-14 md:ml-20 xl:ml-0">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
