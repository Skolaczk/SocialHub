import Image from 'next/image';
import Link from 'next/link';

import { AddLike } from '../add-like';

import { IPost } from '@/interfaces';

export const PostContent = ({
  id,
  content,
  image,
  isLiked,
  _count: count,
}: IPost) => {
  return (
    <>
      <p className="px-5 pb-5">{content}</p>
      <Link href={`/posts/${id}`}>
        <Image
          src={image}
          alt="post image"
          width={600}
          height={600}
          className="h-auto w-full"
        />
      </Link>
      <div className="flex items-center justify-between p-5 text-sm">
        <AddLike id={id} isLiked={isLiked} likes={count.likes} />
        <Link href={`/posts/${id}`}>{count.comments} comments</Link>
      </div>
    </>
  );
};
