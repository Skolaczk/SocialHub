'use client';

import { SendArrowIcon } from '@/assets/icons';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './utils';

export const AddCommentForm = () => {
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <form className="flex items-center px-5 my-2 gap-1" onSubmit={handleSubmit}>
      <input
        className="bg-transparent w-full text-sm"
        type="text"
        id="comment"
        name="comment"
        placeholder="Add comment ..."
        onChange={handleChange}
        value={values.comment}
      />
      <button type="submit">
        <SendArrowIcon />
      </button>
    </form>
  );
};
