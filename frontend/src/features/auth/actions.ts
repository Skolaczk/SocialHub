'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import {
  login,
  register,
  TLoginCommand,
  TRegisterCommand,
} from '@/features/auth';

export const loginAction = async (body: TLoginCommand) => {
  const { data, error } = await login(body);

  if (error) return error;

  if (data) {
    const expirationDate = new Date();
    expirationDate.setFullYear(new Date().getFullYear() + 1);

    cookies().set('token', data.access_token, { expires: expirationDate });

    redirect('/');
  }
};

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

export const logoutAction = async () => {
  cookies().delete('token');
};
