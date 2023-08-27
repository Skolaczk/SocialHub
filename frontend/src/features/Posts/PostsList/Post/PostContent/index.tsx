import Image from 'next/image';
import { IPost } from '@/interfaces';
import Link from 'next/link';
import { AddLike } from '@/features/Posts/PostsList/Post/AddLike';

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
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </Link>
      <div className="flex items-center justify-between p-5 text-sm">
        <AddLike id={id} isLiked={isLiked} likes={count.likes} />
        <Link href={`/posts/${id}`}>{count.comments} comments</Link>
      </div>
    </>
  );
};