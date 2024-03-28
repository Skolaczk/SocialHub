import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components';
import { TComment } from '@/features/posts';

export const CommentsListItem = (comment: TComment) => {
  return (
    <div className="flex items-center gap-3">
      <Link href={`/profile/${comment.user.username}`}>
        <Image
          src={comment.user.image}
          alt="User avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </Link>
      <div>
        <div className="flex items-center">
          <Link
            href={`/profile/${comment.user.username}`}
            className="text-sm font-medium"
          >
            {comment.user.username}
          </Link>
          <Icons.dot className="text-muted-foreground size-4" />
          <span className="text-muted-foreground text-xs">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className="text-sm">{comment.content}</p>
      </div>
    </div>
  );
};
