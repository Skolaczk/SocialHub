import Image from 'next/image';
import { IPost } from '@/interfaces';
import moment from 'moment';
import Link from 'next/link';
import { LikeIcon, SendArrowIcon } from '@/features/Posts/icons';

export const Post = ({
  user,
  content,
  image,
  createdAt,
  _count: count,
}: IPost) => {
  return (
    <div className="w-full max-w-xl [&:not(:last-child)]:border-b border-neutral-100 dark:border-neutral-900">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-3">
          <Link
            href={`/user/${user.username}`}
            className="flex items-center gap-2"
          >
            <Image
              src={user.image}
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            <p>{user.username}</p>
          </Link>
          <span className="text-neutral-200 text-sm relative before:absolute before:h-1 before:w-1 before:bg-neutral-200 before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2">
            {moment(createdAt).fromNow()}
          </span>
        </div>
        <button type="button" className="flex gap-1">
          <div className="w-1 h-1 bg-black dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-black dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-black dark:bg-white rounded-full" />
        </button>
      </div>
      <p className="px-5 pb-5">{content}</p>
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="flex items-center justify-between px-5 py-3 text-sm">
        <div className="flex items-center gap-1">
          <button type="button">
            <LikeIcon />
          </button>
          <p>{count.likes}</p>
        </div>
        <p>{count.comments} comments</p>
      </div>
      <form className="flex items-center px-5 mb-5 gap-1">
        <input
          className="bg-transparent w-full text-sm"
          type="text"
          id="comment"
          name="comment"
          placeholder="Add comment ..."
        />
        <button>
          <SendArrowIcon />
        </button>
      </form>
    </div>
  );
};
