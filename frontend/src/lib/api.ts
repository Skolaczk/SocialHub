import { env } from '@/env.mjs';
import { TResponse } from '@/lib/types';

export const baseUrl = env.NEXT_PUBLIC_API_URL;

const getToken = async () => {
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers');
    return cookies().get('token')?.value;
  } else {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
  }
};

export const api = async <T>(
  endpoint: string | URL,
  init?: RequestInit | undefined
): Promise<TResponse<T>> => {
  const token = await getToken();

  const res = await fetch(`${baseUrl}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...init,
  });

  if (res.ok) return { data: await res.json() };

  return { error: await res.json() };
};
