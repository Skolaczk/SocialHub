import { IError, IResponse } from '@/interfaces';

const isServer = typeof window === 'undefined';
const baseURL = process.env.NEXT_PUBLIC_API_URL;

const getToken = async () => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    return cookies().get('token')?.value;
  } else {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
  }
};

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export const fetchApi = {
  get: async <T>(endpoint: string): Promise<IResponse<T>> => {
    return await makeRequest('GET', endpoint);
  },
  post: async <T>(
    endpoint: string,
    body?: FormData | any,
    config?: any,
  ): Promise<IResponse<T>> => {
    return await makeRequest('POST', endpoint, body, config);
  },
  patch: async <T>(
    endpoint: string,
    body?: FormData,
  ): Promise<IResponse<T>> => {
    return await makeRequest('PATCH', endpoint, body);
  },
};

const makeRequest = async <T>(
  method: HttpMethod,
  endpoint: string,
  body?: FormData | any,
  config?: any,
): Promise<IResponse<T>> => {
  const token = await getToken();

  const res = await fetch(`${baseURL}${endpoint}`, {
    method,
    body: body instanceof FormData ? body : JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      ...config,
    },
  });

  if (res.ok) {
    return { data: (await res.json()) as T };
  } else {
    return { error: (await res.json()) as IError };
  }
};
