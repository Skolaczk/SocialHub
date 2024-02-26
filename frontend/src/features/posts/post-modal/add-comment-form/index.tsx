'use client';

import { useRef } from 'react';

import { createCommentAction } from '@/actions';
import { SendArrowIcon } from '@/assets/icons';

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
        className="my-5 flex items-center gap-1 px-5"
      >
        <input
          className="w-full bg-transparent text-sm"
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
