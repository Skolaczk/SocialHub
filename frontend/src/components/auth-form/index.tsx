'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { AuthSchema, authSchema } from './utils';

import { loginAction } from '@/actions';
import { FormField } from '@/components';

interface IProps {
  isSignUp: boolean;
}

export const AuthForm = ({ isSignUp }: IProps) => {
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<AuthSchema>({
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
      <FormField
        type="email"
        label="email"
        register={register('email')}
        error={errors.email?.message}
      />
      {isSignUp && (
        <FormField
          label="username"
          register={register('username')}
          error={errors.username?.message}
        />
      )}
      <FormField
        type="password"
        label="password"
        register={register('password')}
        error={errors.password?.message}
      />
      <button type="submit" className="mb-3 mt-5 rounded-sm bg-primary p-2">
        {isSignUp ? 'Register' : 'Login'}
      </button>
      {error && <p className="text-center text-danger">{error}</p>}
    </form>
  );
};
