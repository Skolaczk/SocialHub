import Image from 'next/image';
import { IPost } from '@/interfaces';
import Link from 'next/link';

interface IProps {
  posts: IPost[] | undefined;
}

export const PostsGrid = ({ posts }: IProps) => {
  return (
    <div className="grid grid-cols-3 justify-center w-full max-w-2xl gap-1">
      {posts?.map(({ id, image }) => (
        <Link href={`/posts/${id}`} key={id}>
          <Image
            src={image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto aspect-[1/1] object-cover"
          />
        </Link>
      ))}
    </div>
  );
};
