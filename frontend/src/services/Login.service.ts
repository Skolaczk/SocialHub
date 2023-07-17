import { api, endpoints } from '@/api';

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
    isSignUp ? endpoints.auth.signUp : endpoints.auth.signIn,
    body,
  );
  return data;
};
