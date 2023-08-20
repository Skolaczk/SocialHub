import { api } from '@/api';
import { AxiosError } from 'axios';

interface IAccessToken {
  access_token: string;
}

interface IBody {
  email: string;
  username?: string;
  password: string;
}

export interface IResponse<T> {
  data: T | null;
  error: IError | null;
}

export interface IError {
  statusCode: number;
  message: string;
  error: string;
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
    return { data, error: null };
  } catch (e) {
    const { response } = e as AxiosError;
    return { data: null, error: response?.data as IError };
  }
};
