interface IProps {
  type: string;
  label: string;
}

export const FormField = ({ type, label }: IProps) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={label}
        className="mt-1.5 mb-5 p-2 rounded-sm bg-neutral-500 text-sm"
      />
    </>
  );
};
