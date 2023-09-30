import { SendArrowIcon } from '@/assets/icons';

interface IProps {
  postId: number;
}

export const AddCommentForm = ({ postId }: IProps) => {
  return (
    <>
      <form className="flex items-center px-5 my-5 gap-1">
        <input
          className="bg-transparent w-full text-sm"
          type="text"
          id="content"
          name="content"
          placeholder="Add comment ..."
        />
        <button type="submit">
          <SendArrowIcon />
        </button>
      </form>
    </>
  );
};
