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
      <SheetContent className="w-full pb-10">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
        {notifications?.length ? (
          <div className="scrollbar mt-1 h-full overflow-y-auto">
            {notifications.map((notification) => (
              <NotificationsListItem key={notification.id} {...notification} />
            ))}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <h3 className="text-lg font-medium">No notifications yet</h3>
            <p className="text-muted-foreground text-sm">
              Find follows, comments and likes
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
