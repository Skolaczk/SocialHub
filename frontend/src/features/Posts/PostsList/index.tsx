import { IPost } from '@/interfaces';
import { Post } from './Post';

interface IProps {
  posts: IPost[];
}

export const PostsList = ({ posts }: IProps) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
