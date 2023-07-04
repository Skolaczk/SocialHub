import Image from 'next/image';
import { IPost } from '@/interfaces';

export const Post = ({
  user,
  content,
  image,
  createdAt,
  _count: count,
}: IPost) => {
  return (
    <div>
      <div>
        <div>
          <Image src={user.image} alt="" width={40} height={40} />
          <p>{user.username}</p>
          <span>{createdAt}</span>
        </div>
        <button type="button">
          <div />
          <div />
          <div />
        </button>
      </div>
      <p>{content}</p>
      <Image src={image} alt="" width={300} height={300} />
      <div>
        <p>* {count.likes}</p>
        <p>{count.comments} comments</p>
      </div>
      <div>
        <input type="text" placeholder="Add comment ..." />
        <button>{'>'}</button>
      </div>
    </div>
  );
};
