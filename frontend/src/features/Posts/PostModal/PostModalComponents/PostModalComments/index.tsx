import { IComment } from '@/interfaces';
import { Comment } from '@/features/Posts/PostModal/PostModalComponents/Comment';

interface IProps {
  comments: IComment[];
}

export const PostModalComments = ({ comments }: IProps) => {
  return (
    <>
      {comments.length > 0 && (
        <div className="px-5 py-3 flex flex-col gap-3">
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </>
  );
};
