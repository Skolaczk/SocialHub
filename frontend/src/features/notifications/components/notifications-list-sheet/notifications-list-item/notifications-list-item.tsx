import moment from 'moment/moment';
import Image from 'next/image';
import Link from 'next/link';

import { getNotificationMessage } from './utils';

import { Button, Icons, SheetClose } from '@/components';
import { TNotification } from '@/features/notifications';

export const NotificationsListItem = (notification: TNotification) => {
  const notificationMessage = getNotificationMessage(notification.type);

  return (
    <div className="flex items-center justify-between gap-2 py-3 [&:not(:last-child)]:border-b">
      <div className="flex items-center gap-3">
        <SheetClose asChild>
          <Link
            href={`/user/${notification.sender.username}`}
            className="min-w-8"
          >
            <Image
              src={notification.sender.image}
              alt="user avatar"
              width={32}
              height={32}
              className="aspect-square size-8 rounded-full"
            />
          </Link>
        </SheetClose>
        <p>
          <SheetClose asChild>
            <Link
              href={`/user/${notification.sender.username}`}
              className="font-medium"
            >
              {notification.sender.username}
            </Link>
          </SheetClose>
          <span>
            {' '}
            {notificationMessage}
            <Icons.dot className="text-muted-foreground inline size-5" />
            <span className="text-muted-foreground text-sm">
              {moment(notification.createdAt).fromNow()}
            </span>
          </span>
        </p>
      </div>
      <SheetClose asChild>
        <Button variant="link" asChild>
          <Link
            href={
              notification.type === 'follow'
                ? `/user/${notification.sender.username}`
                : `/posts/${notification.postId}`
            }
          >
            Show
          </Link>
        </Button>
      </SheetClose>
    </div>
  );
};
