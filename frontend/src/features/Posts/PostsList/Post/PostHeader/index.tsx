import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { IPost } from '@/interfaces';

export const PostHeader = ({ user, createdAt }: IPost) => {
  return (
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
  );
};
