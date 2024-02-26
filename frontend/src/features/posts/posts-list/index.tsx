import { Post } from './post';

import { IPost } from '@/interfaces';

interface IProps {
  posts: IPost[] | undefined;
}

export const PostsList = ({ posts }: IProps) => {
  return (
    <div className="mb-14 flex flex-col items-center md:ml-20 md:mt-8 xl:ml-0">
      {posts?.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
};
