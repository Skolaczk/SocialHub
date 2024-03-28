import Image from 'next/image';

import { TPost } from '@/features/posts';

type TPostsListGridProps = {
  posts: TPost[];
};

export const PostsListGrid = ({ posts }: TPostsListGridProps) => {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 justify-center gap-1">
      {posts.map(({ id, image }) => (
        <Image
          key={id}
          src={image}
          alt="post image"
          width={225}
          height={225}
          className="aspect-square h-auto w-full object-cover"
        />
      ))}
    </div>
  );
};
