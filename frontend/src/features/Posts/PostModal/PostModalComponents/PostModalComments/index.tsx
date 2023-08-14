import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';
import { Comment } from '@/interfaces';

interface IProps {
  comments: Comment[];
}

export const PostModalComments = ({ comments }: IProps) => {
  return (
    <div className="px-5 py-3 flex flex-col gap-3">
      {comments.length ? (
        <>
          {comments.map(({ id, content, user, createdAt }) => (
            <div key={id} className="flex items-center gap-3">
              <Link href={`/profile/${user.username}`}>
                <Image
                  src={user.image}
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
              <div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/profile/${user.username}`}
                    className="text-sm font-medium"
                  >
                    {user.username}
                  </Link>
                  <span className="text-neutral-200 text-xs relative before:absolute before:h-1 before:w-1 before:bg-neutral-200 before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2">
                    {moment(createdAt).fromNow()}
                  </span>
                </div>
                <p className="text-sm">{content}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center">No comments</p>
      )}
    </div>
  );
};
