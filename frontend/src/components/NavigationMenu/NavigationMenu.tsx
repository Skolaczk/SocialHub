import {
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  NotificationsIcon,
  ProfileIcon,
} from './icons';

export const NavigationMenu = () => {
  return (
    <div className="bg-black">
      <HomeIcon />
      <ExploreIcon />
      <CreateIcon />
      <NotificationsIcon />
      <ProfileIcon />
    </div>
  );
};
