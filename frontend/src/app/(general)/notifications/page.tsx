import { NotificationsList } from '@/features';

const data = [
  {
    id: 1,
    sender: {
      image: 'https://i.postimg.cc/GpjBs2yq/sbcf-default-avatar.png',
      username: 'kurczedk',
    },
    type: 'follow',
    createdAt: '2023-07-31T13:46:41.832Z',
    message: 'started follow you!',
  },
  {
    id: 2,
    sender: {
      image: 'https://i.postimg.cc/GpjBs2yq/sbcf-default-avatar.png',
      username: 'kurczedk',
    },
    type: 'like',
    message: 'like your post!',
    createdAt: '2023-07-31T13:46:41.832Z',
    postId: 1,
  },
  {
    id: 3,
    sender: {
      image: 'https://i.postimg.cc/GpjBs2yq/sbcf-default-avatar.png',
      username: 'kurczedk',
    },
    type: 'comment',
    message: 'comment your post!',
    createdAt: '2023-07-15T13:46:27.852Z',
    postId: 1,
  },
];

const Notifications = () => {
  return (
    <div className="flex flex-col items-center mt-8 mb-14 md:ml-20 xl:ml-0">
      <h2 className="text-xl font-medium tracking-widest uppercase mb-2">
        notifications
      </h2>
      <NotificationsList notifications={data} />
    </div>
  );
};

export default Notifications;
