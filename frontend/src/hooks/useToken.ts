import { api } from '@/api';

export const useToken = () => {
  const userToken = localStorage.getItem('token');

  const setTokenToHeaders = (accessToken?: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${
      accessToken ? accessToken : userToken
    }`;
  };

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem('token', accessToken);
    setTokenToHeaders(accessToken);
  };

  return { setTokenToHeaders, setAccessToken };
};
