import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';

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
      <div className="max-w-2xl w-full">
        {data.map(({ id, sender, type, postId, message, createdAt }) => (
          <div
            key={id}
            className="flex items-center justify-between px-5 py-3 [&:not(:last-child)]:border-b border-neutral-100 dark:border-neutral-900"
          >
            <div className="flex items-center gap-2">
              <Link href={`/profile/${sender.username}`}>
                <Image
                  src={sender.image}
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
              <p>
                <Link
                  href={`/profile/${sender.username}`}
                  className="font-medium"
                >
                  {sender.username}{' '}
                </Link>
                {message}
              </p>
              <span className="hidden xs:block ml-1 text-neutral-200 text-sm relative before:absolute before:h-1 before:w-1 before:bg-neutral-200 before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2">
                {moment(createdAt).fromNow()}
              </span>
            </div>
            <Link
              href={
                type === 'follow'
                  ? `/profile/${sender.username}`
                  : `/posts/${id}`
              }
              className="text-primary font-bold"
            >
              Show
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
