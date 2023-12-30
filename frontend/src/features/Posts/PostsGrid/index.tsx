import Image from 'next/image';
import Link from 'next/link';

import { IPost } from '@/interfaces';

interface IProps {
  posts: IPost[] | undefined;
}

export const PostsGrid = ({ posts }: IProps) => {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 justify-center gap-1">
      {posts?.map(({ id, image }) => (
        <Link href={`/posts/${id}`} key={id}>
          <Image
            src={image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="aspect-[1/1] h-auto w-full object-cover"
          />
        </Link>
      ))}
    </div>
  );
};
