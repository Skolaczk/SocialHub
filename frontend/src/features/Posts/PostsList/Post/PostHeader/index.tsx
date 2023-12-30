import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { IPost } from '@/interfaces';

export const PostHeader = ({ user, createdAt }: IPost) => {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-3">
        <Link
          href={`/profile/${user.username}`}
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
        <span className="relative -z-10 text-sm text-neutral-200 before:absolute before:-left-2 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-200">
          {moment(createdAt).fromNow()}
        </span>
      </div>
      <button type="button" className="flex gap-1">
        <div className="h-1 w-1 rounded-full bg-black dark:bg-white" />
        <div className="h-1 w-1 rounded-full bg-black dark:bg-white" />
        <div className="h-1 w-1 rounded-full bg-black dark:bg-white" />
      </button>
    </div>
  );
};
