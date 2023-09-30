import { UploadIcon, XIcon } from '@/assets/icons';

export const CreatePostForm = () => {
  const image = { name: 'elo' };

  return (
    <form className="flex flex-col items-center w-full gap-y-5 mt-8">
      <div className="flex flex-col items-center py-10 w-full border border-dashed border-primary rounded-sm">
        <UploadIcon />
        <p className="text-neutral-500 dark:text-neutral-100 my-1">
          Drop your image here, or browse
        </p>
        <span className="text-neutral-200 dark:text-neutral-300 text-sm">
          PNG, JPG are allowed
        </span>
      </div>
      {image && (
        <div className="flex justify-between items-center w-full bg-neutral-100 dark:bg-neutral-500 rounded-sm p-2">
          <p>{image.name}</p>
          <button>
            <XIcon />
          </button>
        </div>
      )}
      <div className="flex flex-col w-full">
        <label htmlFor="content" className="mb-2">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          className="resize-none bg-neutral-100 dark:bg-neutral-500 rounded-sm p-2 h-24"
          placeholder="Type content ..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-primary w-full p-2 rounded-sm text-white dark:black xs:w-fit xs:px-20"
      >
        Create
      </button>
    </form>
  );
};
