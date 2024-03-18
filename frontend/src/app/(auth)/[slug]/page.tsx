import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Icons } from '@/components';
import { LoginForm, RegisterForm } from '@/features/auth';
import { TParams } from '@/lib/types';

const authPages = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
};

const AuthPage = ({ params }: TParams) => {
  const isSignUp = params.slug === authPages.SIGN_UP;

  if (params.slug !== authPages.SIGN_UP && params.slug !== authPages.SIGN_IN) {
    notFound();
  }

  return (
    <div className="flex">
      <div className="xl:bg-primary hidden xl:flex xl:w-1/2 xl:items-center xl:justify-center">
        <Icons.logo className="h-48 w-[500px] text-white" />
      </div>
      <div className="mx-auto flex h-screen w-full max-w-md flex-col items-center p-7 md:justify-center">
        <Icons.logo className="h-10 w-48 xl:hidden" />
        <h1 className="my-5 text-center text-2xl font-medium uppercase tracking-widest">
          {isSignUp ? 'create account' : 'login to account'}
        </h1>
        {isSignUp ? <RegisterForm /> : <LoginForm />}
        {isSignUp ? (
          <p className="mt-2 text-center">
            Already have an account?{' '}
            <Link href={`/${authPages.SIGN_IN}`} className="text-primary">
              Log in
            </Link>
          </p>
        ) : (
          <p className="mt-2 text-center">
            You do not have an account yet?{' '}
            <Link href={`/${authPages.SIGN_UP}`} className="text-primary">
              Register
            </Link>
          </p>
        )}
        <p className="text-muted-foreground mt-5 text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          consectetur, consequatur impedit in nulla officia quos tempora.
          Accusamus assumenda aut distinctio inventore, iusto officiis quidem
          recusandae sit velit, veritatis voluptas?
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
