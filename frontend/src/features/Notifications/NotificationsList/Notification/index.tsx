import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { INotification } from '@/interfaces';
import { getNotificationMessage } from './utils';

export const Notification = (notification: INotification) => {
  const message = getNotificationMessage(notification.type);

  return (
    <div className="flex items-center justify-between px-5 py-3 [&:not(:last-child)]:border-b border-neutral-100 dark:border-neutral-900">
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
        <span className="hidden xs:block ml-1 text-neutral-200 text-sm relative before:absolute before:h-1 before:w-1 before:bg-neutral-200 before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2">
          {moment(notification.createdAt).fromNow()}
        </span>
      </div>
      <Link
        href={
          notification.type === 'follow'
            ? `/profile/${notification.sender.username}`
            : `/posts/${notification.id}`
        }
        className="text-primary font-bold"
      >
        Show
      </Link>
    </div>
  );
};
