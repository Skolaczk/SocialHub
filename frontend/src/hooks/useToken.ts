import { api } from '@/api';

export const useToken = () => {
  const userToken = localStorage.getItem('token');

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem('token', accessToken);
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  };

  return { userToken, setAccessToken };
};
