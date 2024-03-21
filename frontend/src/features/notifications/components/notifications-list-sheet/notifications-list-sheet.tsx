import {
  Button,
  Icons,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components';
import { getNotifications } from '@/features/notifications';
import { NotificationsListItem } from '@/features/notifications/components/notifications-list-sheet/notifications-list-item';

export const NotificationsListSheet = async () => {
  const { data: notifications } = await getNotifications();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="order-4 flex items-center gap-4 font-normal xl:justify-start"
        >
          <Icons.bell />
          <span className="hidden text-base xl:block">Notifications</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full pb-28">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
        <div className="mt-1">
          {notifications &&
            notifications.map((notification) => (
              <NotificationsListItem key={notification.id} {...notification} />
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
