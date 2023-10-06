'use client';

import { FormField } from '../FormField';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginAction } from '@/actions';
import { useRouter } from 'next/navigation';
import { AuthSchema, authSchema } from './utils';
import { useState } from 'react';

interface IProps {
  isSignUp: boolean;
}

export const AuthForm = ({ isSignUp }: IProps) => {
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();
  const methods = useForm<AuthSchema>({
    resolver: zodResolver(authSchema(isSignUp)),
  });

  const onSubmit = async (data: AuthSchema) => {
    const errorMessage = await loginAction(isSignUp, data);

    if (!errorMessage) {
      router.push('/');
    }

    setError(errorMessage);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col w-full"
      >
        <FormField type="text" label="email" />
        {isSignUp && <FormField type="text" label="username" />}
        <FormField type="password" label="password" />
        <button type="submit" className="bg-primary p-2 rounded-sm mt-5 mb-3">
          {isSignUp ? 'Register' : 'Login'}
        </button>
        {error && <p className="text-center text-danger">{error}</p>}
      </form>
    </FormProvider>
  );
};
