import { LogoDesktopIcon } from '@/assets/icons';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mx-auto p-7 w-full max-w-md h-screen md:justify-center">
        <LogoDesktopIcon isBig />
        <form className="flex flex-col w-full my-7">
          <FormField type="text" label="Email" />
          <FormField type="text" label="Username" />
          <FormField type="password" label="Password" />
          <button className="bg-primary p-2 rounded-sm mt-2">Register</button>
        </form>
        <p>
          Already have an account?{' '}
          <Link href="/sign-in" className="text-primary">
            Log in
          </Link>
        </p>
        <p className="mt-5 text-neutral-300 text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          consectetur, consequatur impedit in nulla officia quos tempora.
          Accusamus assumenda aut distinctio inventore, iusto officiis quidem
          recusandae sit velit, veritatis voluptas?
        </p>
      </div>
      <div className="hidden lg:flex w-1/2 justify-center items-center bg-primary">
        <LogoDesktopIcon isBig />
      </div>
    </div>
  );
};

interface IProps {
  type: string;
  label: string;
}

const FormField = ({ type, label }: IProps) => {
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

export default SignIn;
