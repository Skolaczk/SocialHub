import Image from 'next/image';
import { LikeIcon } from '@/assets/icons';
import { IPost } from '@/interfaces';
import Link from 'next/link';

export const PostContent = ({ id, content, image, _count: count }: IPost) => {
  return (
    <>
      <p className="px-5 pb-5">{content}</p>
      <Link href={`?post=${id}`}>
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </Link>
      <div className="flex items-center justify-between p-5 text-sm">
        <div className="flex items-center gap-1">
          <button type="button">
            <LikeIcon />
          </button>
          <p>{count.likes}</p>
        </div>
        <Link href={`?post=${id}`}>{count.comments} comments</Link>
      </div>
    </>
  );
};
