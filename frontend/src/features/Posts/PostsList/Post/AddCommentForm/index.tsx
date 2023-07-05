import { SendArrowIcon } from '@/features/Posts/icons';

export const AddCommentForm = () => {
  return (
    <form className="flex items-center px-5 mb-5 gap-1">
      <input
        className="bg-transparent w-full text-sm"
        type="text"
        id="comment"
        name="comment"
        placeholder="Add comment ..."
      />
      <button>
        <SendArrowIcon />
      </button>
    </form>
  );
};
