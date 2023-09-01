import { ChangeEventHandler } from 'react';

interface IProps {
  type: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error: string | false | undefined;
}

export const FormField = ({ type, label, onChange, value, error }: IProps) => {
  return (
    <>
      <label htmlFor={label} className="mt-5 first-letter:uppercase">
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={label}
        onChange={onChange}
        value={value}
        className={`my-1.5 p-2 rounded-sm bg-neutral-100 dark:bg-neutral-500 text-sm border-danger ${
          error && 'border'
        }`}
      />
      {error && <span className="text-danger text-sm">{error}</span>}
    </>
  );
};
