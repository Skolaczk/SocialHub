import { api } from '@/api';

interface IAccessToken {
  access_token: string;
}

interface IBody {
  email: string;
  username?: string;
  password: string;
}

export const login = async (isSignUp: boolean, body: IBody) => {
  const { data } = await api.post<IAccessToken>(
    isSignUp ? 'auth/sign-up' : 'auth/sign-in',
    body,
  );
  return data;
};
