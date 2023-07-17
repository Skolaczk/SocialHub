import { FormField } from '@/components';

interface IProps {
  isSignUp: boolean;
}

export const AuthForm = ({ isSignUp }: IProps) => {
  return (
    <form className="flex flex-col w-full my-7">
      <FormField type="text" label="Email" />
      {isSignUp && <FormField type="text" label="Username" />}
      <FormField type="password" label="Password" />
      <button className="bg-primary p-2 rounded-sm mt-2">
        {isSignUp ? 'Register' : 'Login'}
      </button>
    </form>
  );
};
