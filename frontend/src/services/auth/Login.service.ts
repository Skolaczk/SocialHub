import { IResponse } from '@/interfaces';
import { fetchApi } from '@/api/fetchApi';

interface IAccessToken {
  access_token: string;
}

interface IBody {
  email: string;
  username?: string;
  password: string;
}

export const login = async (
  isSignUp: boolean,
  body: IBody,
): Promise<IResponse<IAccessToken>> => {
  const { data, error } = await fetchApi.post<IAccessToken>(
    isSignUp ? 'auth/sign-up' : 'auth/sign-in',
    body,
    {
      'Content-type': 'application/json',
    },
  );
  return { data, error };
};
