import { notFound } from 'next/navigation';
import { LogoDesktopIcon } from '@/assets/icons';
import { AuthForm } from '@/components';
import Link from 'next/link';
import { IParam } from '@/interfaces';

const auth = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
};

const Auth = ({ params }: IParam) => {
  const isSignUp = params.slug === auth.SIGN_UP;

  if (params.slug !== auth.SIGN_UP && params.slug !== auth.SIGN_IN) {
    notFound();
  }

  return (
    <div className="flex">
      <div className="flex flex-col items-center mx-auto p-7 w-full max-w-md h-screen md:justify-center">
        <div className="xl:hidden">
          <LogoDesktopIcon width="200" height="40" />
        </div>
        <h1 className="text-2xl font-medium tracking-widest uppercase mt-5">
          {isSignUp ? 'create account' : 'login to account'}
        </h1>
        <AuthForm isSignUp={isSignUp} />
        {isSignUp ? (
          <p className="mt-2">
            Already have an account?{' '}
            <Link href={`/${auth.SIGN_IN}`} className="text-primary">
              Log in
            </Link>
          </p>
        ) : (
          <p className="mt-2">
            You do not have an account yet?{' '}
            <Link href={`/${auth.SIGN_UP}`} className="text-primary">
              Register
            </Link>
          </p>
        )}
        <p className="mt-5 text-neutral-300 text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          consectetur, consequatur impedit in nulla officia quos tempora.
          Accusamus assumenda aut distinctio inventore, iusto officiis quidem
          recusandae sit velit, veritatis voluptas?
        </p>
      </div>
      <div className="hidden xl:flex w-1/2 justify-center items-center bg-primary">
        <LogoDesktopIcon width="500" height="200" fill="white" />
      </div>
    </div>
  );
};

export default Auth;
