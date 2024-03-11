import { TAccessToken, TRegisterCommand } from '@/features/auth';
import { api } from '@/lib/api';

export const register = async (body: TRegisterCommand) => {
  return await api<TAccessToken>('auth/sign-up', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
