import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { IComment } from '@/interfaces';

export const Comment = (comment: IComment) => {
  return (
    <div key={comment.id} className="flex items-center gap-3">
      <Link href={`/profile/${comment.user.username}`}>
        <Image
          src={comment.user.image}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
      </Link>
      <div>
        <div className="flex items-center gap-3">
          <Link
            href={`/profile/${comment.user.username}`}
            className="text-sm font-medium"
          >
            {comment.user.username}
          </Link>
          <span className="text-neutral-300 dark:text-neutral-200 text-xs relative before:absolute before:h-1 before:w-1 before:bg-neutral-200 before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className="text-sm">{comment.content}</p>
      </div>
    </div>
  );
};
