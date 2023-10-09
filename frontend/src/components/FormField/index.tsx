import { UseFormRegisterReturn } from 'react-hook-form';
import { ComponentProps } from 'react';

interface IProps {
  type?: ComponentProps<'input'>['type'];
  label: string;
  isTextarea?: boolean;
  error: string | undefined;
  register: UseFormRegisterReturn<string>;
}

export const FormField = ({
  type = 'text',
  label,
  error,
  register,
  isTextarea,
}: IProps) => {
  return (
    <>
      <label htmlFor={label} className="mt-5 first-letter:uppercase">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          {...register}
          placeholder={label}
          id={label}
          className={`my-1.5 resize-none p-2 rounded-sm bg-neutral-100 dark:bg-neutral-500 text-sm border-danger ${
            error && 'border'
          }`}
        ></textarea>
      ) : (
        <input
          {...register}
          type={type}
          id={label}
          placeholder={label}
          className={`my-1.5 p-2 rounded-sm bg-neutral-100 dark:bg-neutral-500 text-sm border-danger ${
            error && 'border'
          }`}
        />
      )}

      {error && <span className="text-danger text-sm">{error}</span>}
    </>
  );
};
