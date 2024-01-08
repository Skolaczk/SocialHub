import moment from 'moment/moment';
import Link from 'next/link';

import { OptionsMenu } from './OptionsMenu';

import { ProfileBadge } from '@/components';
import { IPost } from '@/interfaces';

export const PostHeader = ({ id, user, createdAt }: IPost) => {
  return (
    <div className="relative flex items-center justify-between p-5">
      <div className="flex items-center gap-3">
        <Link
          href={`/profile/${user.username}`}
          className="flex items-center gap-2"
        >
          <ProfileBadge image={user.image} username={user.username} />
        </Link>
        <span className="relative -z-10 text-sm text-neutral-200 before:absolute before:-left-2 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-200">
          {moment(createdAt).fromNow()}
        </span>
      </div>
      <OptionsMenu id={id} />
    </div>
  );
};
