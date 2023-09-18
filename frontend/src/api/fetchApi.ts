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
