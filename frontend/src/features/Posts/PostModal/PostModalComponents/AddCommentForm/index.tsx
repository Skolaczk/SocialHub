'use client';

import { SendArrowIcon } from '@/assets/icons';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './utils';
import { createComment } from '@/services';

interface IProps {
  postId: number;
}

export const AddCommentForm = ({ postId }: IProps) => {
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({ content }) => {
      const data = await createComment({ postId, content });
      resetForm();
    },
  });

  return (
    <form className="flex items-center px-5 my-2 gap-1" onSubmit={handleSubmit}>
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
  );
};
