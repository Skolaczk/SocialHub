import { baseURL, getToken } from './utils';

export const api = {
  get: async <T>(endpoint: string): Promise<T> => {
    return await request('GET', endpoint);
  },
  post: async <T>(endpoint: string): Promise<T> => {
    return await request('POST', endpoint);
  },
};

const request = async <T>(method: string, endpoint: string): Promise<T> => {
  const token = await getToken();

  const requestOptions: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: [endpoint],
    },
  };

  const res = await fetch(`${baseURL}${endpoint}`, requestOptions);
  return (await res.json()) as T;
};
