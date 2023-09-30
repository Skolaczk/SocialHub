import { FormField } from '../FormField';

interface IProps {
  isSignUp: boolean;
}

export const AuthForm = ({ isSignUp }: IProps) => {
  return (
    <form className="flex flex-col w-full">
      <FormField type="text" label="email" />
      {isSignUp && <FormField type="text" label="username" />}
      <FormField type="password" label="password" />
      <button type="submit" className="bg-primary p-2 rounded-sm mt-5 mb-3">
        {isSignUp ? 'Register' : 'Login'}
      </button>
    </form>
  );
};
