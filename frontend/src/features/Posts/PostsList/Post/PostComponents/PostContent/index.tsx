import Image from 'next/image';
import { LikeIcon } from '@/assets/icons';
import { IPost } from '@/interfaces';

export const PostContent = ({ content, image, _count: count }: IPost) => {
  return (
    <>
      <p className="px-5 pb-5">{content}</p>
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      <div className="flex items-center justify-between p-5 text-sm">
        <div className="flex items-center gap-1">
          <button type="button">
            <LikeIcon />
          </button>
          <p>{count.likes}</p>
        </div>
        <p>{count.comments} comments</p>
      </div>
    </>
  );
};
