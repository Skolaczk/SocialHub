import axios from 'axios';

const isServer = typeof window === 'undefined';
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import('next/headers'),
      token = cookies().get('token')?.value;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return config;
});

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
  get: async <T>(endpoint: string): Promise<T> => {
    return await makeRequest('GET', endpoint);
  },
  post: async <T>(endpoint: string, body?: any): Promise<T> => {
    return await makeRequest('POST', endpoint, body);
  },
};

const makeRequest = async <T>(
  method: HttpMethod,
  endpoint: string,
  body?: any,
): Promise<T> => {
  const token = await getToken();

  const res = await fetch(`${baseURL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return (await res.json()) as T;
};
