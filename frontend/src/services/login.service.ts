import { api } from '@/api';
import { AuthSchema } from '@/components/AuthForm/utils';
import { IResponse } from '@/interfaces';

interface IAccessToken {
  access_token: string;
}

export const login = async (
  isSignUp: boolean,
  body: AuthSchema,
): Promise<IResponse<IAccessToken>> => {
  return await api.post<IAccessToken>(
    isSignUp ? 'auth/sign-up' : 'auth/sign-in',
    body,
  );
};
