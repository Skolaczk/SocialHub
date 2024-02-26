import { baseUrl, getContentTypeHeader, getToken } from './utils';

import { IError, IResponse } from '@/interfaces';

export const api = {
  get: async <T>(endpoint: string): Promise<IResponse<T>> => {
    return await request('GET', endpoint);
  },
  post: async <T>(
    endpoint: string,
    body?: FormData | any,
  ): Promise<IResponse<T>> => {
    return await request('POST', endpoint, body);
  },
  patch: async <T>(
    endpoint: string,
    body?: FormData | any,
  ): Promise<IResponse<T>> => {
    return await request('PATCH', endpoint, body);
  },
  delete: async <T>(endpoint: string): Promise<IResponse<T>> => {
    return await request('DELETE', endpoint);
  },
};

const request = async <T>(
  method: string,
  endpoint: string,
  body?: any,
): Promise<IResponse<T>> => {
  const token = await getToken();
  const contentTypeHeader = getContentTypeHeader(body);

  const requestOptions: RequestInit = {
    method,
    body: body instanceof FormData ? body : JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      ...contentTypeHeader,
    },
    next: {
      tags: [endpoint],
    },
  };

  const res = await fetch(`${baseUrl}${endpoint}`, requestOptions);

  if (res.ok) {
    return { data: (await res.json()) as T };
  } else {
    return { error: (await res.json()) as IError };
  }
};
