import { ComponentProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

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
          rows={5}
          className={`my-1.5 resize-none rounded-sm border-danger bg-neutral-100 p-2 dark:bg-neutral-500 ${
            error && 'border'
          }`}
        ></textarea>
      ) : (
        <input
          {...register}
          type={type}
          id={label}
          placeholder={label}
          className={`my-1.5 rounded-sm border-danger bg-neutral-100 p-2 text-sm dark:bg-neutral-500 ${
            error && 'border'
          }`}
        />
      )}

      {error && <span className="text-sm text-danger">{error}</span>}
    </>
  );
};
