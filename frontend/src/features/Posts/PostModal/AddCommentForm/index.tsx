'use client';

import { SendArrowIcon } from '@/assets/icons';
import { createCommentAction } from '@/actions';
import { useRef } from 'react';

interface IProps {
  postId: number;
}

export const AddCommentForm = ({ postId }: IProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={formRef}
        action={async (formData) => {
          await createCommentAction(formData, postId);
          formRef.current?.reset();
        }}
        className="flex items-center px-5 my-5 gap-1"
      >
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
