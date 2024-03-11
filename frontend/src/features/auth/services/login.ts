import { TAccessToken, TLoginCommand } from '@/features/auth';
import { api } from '@/lib/api';

export const login = async (body: TLoginCommand) => {
  return await api<TAccessToken>('auth/sign-in', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
