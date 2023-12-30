import Link from 'next/link';
import { notFound } from 'next/navigation';

import { LogoDesktopIcon } from '@/assets/icons';
import { AuthForm } from '@/components';
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
      <div className="mx-auto flex h-screen w-full max-w-md flex-col items-center p-7 md:justify-center">
        <div className="xl:hidden">
          <LogoDesktopIcon width="200" height="40" />
        </div>
        <h1 className="mt-5 text-2xl font-medium uppercase tracking-widest">
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
        <p className="mt-5 text-center text-sm text-neutral-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          consectetur, consequatur impedit in nulla officia quos tempora.
          Accusamus assumenda aut distinctio inventore, iusto officiis quidem
          recusandae sit velit, veritatis voluptas?
        </p>
      </div>
      <div className="hidden w-1/2 items-center justify-center bg-primary xl:flex">
        <LogoDesktopIcon width="500" height="200" fill="white" />
      </div>
    </div>
  );
};

export default Auth;
