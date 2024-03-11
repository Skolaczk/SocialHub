'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { TRegisterCommand } from '@/features/auth';
import { register } from '@/features/auth/services/register';

export const registerAction = async (body: TRegisterCommand) => {
  const { data, error } = await register(body);

  if (error) return error;

  if (data) {
    const expirationDate = new Date();
    expirationDate.setFullYear(new Date().getFullYear() + 1);

    cookies().set('token', data.access_token, { expires: expirationDate });

    redirect('/');
  }
};
