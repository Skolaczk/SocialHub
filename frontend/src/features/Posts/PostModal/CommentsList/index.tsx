import { Comment } from './Comment';

import { IComment } from '@/interfaces';

interface IProps {
  comments: IComment[];
}

export const CommentsList = ({ comments }: IProps) => {
  return (
    <>
      {comments.length > 0 && (
        <div className="flex flex-col gap-3 px-5 py-3">
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </>
  );
};
