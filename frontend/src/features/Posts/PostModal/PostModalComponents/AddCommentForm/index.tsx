'use client';

import { SendArrowIcon } from '@/assets/icons';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './utils';
import { createComment } from '@/services';
import { useState } from 'react';
import { IComment } from '@/interfaces';
import { Comment } from '../Comment';

interface IProps {
  postId: number;
}

export const AddCommentForm = ({ postId }: IProps) => {
  const [newComments, setNewComments] = useState<IComment[]>([]);
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({ content }) => {
      const data = await createComment({ postId, content });
      setNewComments((prevComments) => [data, ...prevComments]);
      resetForm();
    },
  });

  return (
    <>
      <form
        className="flex items-center px-5 my-5 gap-1"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-transparent w-full text-sm"
          type="text"
          id="content"
          name="content"
          placeholder="Add comment ..."
          onChange={handleChange}
          value={values.content}
        />
        <button type="submit">
          <SendArrowIcon />
        </button>
      </form>
      {newComments?.length > 0 && (
        <div className="flex flex-col gap-3 px-5 py-2 bg-primary-500">
          {newComments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </>
  );
};
