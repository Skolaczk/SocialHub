import { api } from '@/api';
import { AxiosError } from 'axios';
import { IError, IResponse } from '@/interfaces';

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
  try {
    const { data } = await api.post<IAccessToken>(
      isSignUp ? 'auth/sign-up' : 'auth/sign-in',
      body,
    );
    return { data };
  } catch (e) {
    const { response } = e as AxiosError;
    return { error: response?.data as IError };
  }
};
