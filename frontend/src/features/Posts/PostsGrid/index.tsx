import Image from 'next/image';
import { IPost } from '@/interfaces';

interface IProps {
  posts: IPost[];
}

export const PostsGrid = ({ posts }: IProps) => {
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
