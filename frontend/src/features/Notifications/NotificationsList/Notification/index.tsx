import moment from 'moment/moment';
import Image from 'next/image';
import Link from 'next/link';

import { getNotificationMessage } from './utils';

import { INotification } from '@/interfaces';

export const Notification = (notification: INotification) => {
  const message = getNotificationMessage(notification.type);

  return (
    <div className="flex items-center justify-between gap-2 border-neutral-100 px-5 py-3 dark:border-neutral-900 xs:gap-0 [&:not(:last-child)]:border-b">
      <div className="flex items-center gap-2">
        <Link href={`/profile/${notification.sender.username}`}>
          <Image
            src={notification.sender.image}
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
        </Link>
        <p>
          <Link
            href={`/profile/${notification.sender.username}`}
            className="font-medium"
          >
            {notification.sender.username}{' '}
          </Link>
          <span>{message}</span>
        </p>
        <span className="relative ml-1 hidden text-sm text-neutral-200 before:absolute before:-left-2 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-200 xs:block">
          {moment(notification.createdAt).fromNow()}
        </span>
      </div>
      <Link
        href={
          notification.type === 'follow'
            ? `/profile/${notification.sender.username}`
            : `/posts/${notification.postId}`
        }
        className="font-bold text-primary"
      >
        Show
      </Link>
    </div>
  );
};
