import { baseURL, getToken } from './utils';
import { IError, IResponse } from '@/interfaces';

export const api = {
  get: async <T>(endpoint: string): Promise<IResponse<T>> => {
    return await request('GET', endpoint);
  },
  post: async <T>(endpoint: string, body?: any): Promise<IResponse<T>> => {
    return await request('POST', endpoint, body);
  },
};

const request = async <T>(
  method: string,
  endpoint: string,
  body?: any,
): Promise<IResponse<T>> => {
  const token = await getToken();

  const requestOptions: RequestInit = {
    method,
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    next: {
      tags: [endpoint],
    },
  };

  const res = await fetch(`${baseURL}${endpoint}`, requestOptions);

  if (res.ok) {
    return { data: (await res.json()) as T };
  } else {
    return { error: (await res.json()) as IError };
  }
};
