'use client';

import { useFormContext } from 'react-hook-form';
import { AuthSchema } from '../AuthForm/utils';

interface IProps {
  type: string;
  label: keyof AuthSchema;
}

export const FormField = ({ type, label }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuthSchema>();

  return (
    <>
      <label htmlFor={label} className="mt-5 first-letter:uppercase">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={label}
        {...register(label)}
        className={`my-1.5 p-2 rounded-sm bg-neutral-100 dark:bg-neutral-500 text-sm border-danger ${
          errors[label!] && 'border'
        }`}
      />
      {errors[label!] && (
        <span className="text-danger text-sm">{errors[label!]?.message}</span>
      )}
    </>
  );
};
