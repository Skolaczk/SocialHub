import { setCookie } from 'cookies-next';

export const setTokenToCookies = (access_token: string) => {
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
  setCookie('token', access_token, { expires: expirationDate });
};
