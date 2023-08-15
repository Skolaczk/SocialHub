import { SendArrowIcon } from '@/assets/icons';

export const AddCommentForm = () => {
  return (
    <form className="flex items-center px-5 my-2 gap-1">
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
